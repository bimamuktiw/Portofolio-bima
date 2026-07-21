import { useState, useRef, useEffect, useCallback, useMemo } from "react";

/**
 * Hook generik untuk carousel infinite-loop yang bisa digeser dengan mouse
 * (klik-tahan-geser) maupun jari di layar sentuh (swipe).
 *
 * Infinite loop dibuat dengan mengkloning slide pertama & terakhir di ujung
 * track. Koreksi posisi balik ke slide asli dipicu oleh DUA jalur sekaligus
 * (transitionend + timeout cadangan) supaya tetap aman walau event transisi
 * browser tidak terpicu (mis. tab lama tidak aktif, animasi diinterupsi, dll).
 * Ini mencegah posisi carousel "kabur" tak terbatas yang menyebabkan tampilan
 * blank karena slide tergeser jauh di luar area yang terlihat.
 */
export function useDraggableCarousel(itemCount, { autoplayMs = 0 } = {}) {
  const hasMultiple = itemCount > 1;
  const extendedLength = itemCount + 2;
  const TRANSITION_MS = 500;

  const extendedIndices = useMemo(() => {
    if (!hasMultiple) return Array.from({ length: itemCount }, (_, i) => i);
    return [itemCount - 1, ...Array.from({ length: itemCount }, (_, i) => i), 0];
  }, [itemCount, hasMultiple]);

  const [trackIndex, setTrackIndex] = useState(hasMultiple ? 1 : 0);
  const [activeDot, setActiveDot] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [dragDeltaPx, setDragDeltaPx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef(null);
  const dragRef = useRef({ dragging: false, startX: 0, width: 0, moved: false });
  const suppressClickRef = useRef(false);
  const correctionTimeoutRef = useRef(null);
  const reenableTimeoutRef = useRef(null);
  const correctedRef = useRef(false);

  // Mengoreksi posisi balik ke slide asli jika sedang berada di posisi kloning.
  // Aman dipanggil berkali-kali (idempotent) — dipakai baik oleh event
  // transitionend maupun oleh timeout cadangan.
  const correctIfAtClone = useCallback(() => {
    if (correctedRef.current) return; // sudah dikoreksi oleh jalur lain, skip
    correctedRef.current = true;
    setTrackIndex((current) => {
      if (current >= extendedLength - 1) {
        setWithTransition(false);
        return 1;
      }
      if (current <= 0) {
        setWithTransition(false);
        return itemCount;
      }
      return current;
    });
  }, [extendedLength, itemCount]);

  const scheduleCorrection = useCallback(() => {
    correctedRef.current = false;
    if (correctionTimeoutRef.current) clearTimeout(correctionTimeoutRef.current);
    // Cadangan: kalau transitionend tidak pernah terpicu, tetap dikoreksi di sini.
    correctionTimeoutRef.current = setTimeout(() => {
      correctIfAtClone();
    }, TRANSITION_MS + 80);
  }, [correctIfAtClone]);

  const goNext = useCallback(() => {
    if (!hasMultiple) return;
    setTrackIndex((i) => i + 1);
    setActiveDot((d) => (d + 1) % itemCount);
    scheduleCorrection();
  }, [hasMultiple, itemCount, scheduleCorrection]);

  const goPrev = useCallback(() => {
    if (!hasMultiple) return;
    setTrackIndex((i) => i - 1);
    setActiveDot((d) => (d - 1 + itemCount) % itemCount);
    scheduleCorrection();
  }, [hasMultiple, itemCount, scheduleCorrection]);

  const goToReal = useCallback(
    (i) => {
      if (!hasMultiple) return;
      const safe = ((i % itemCount) + itemCount) % itemCount;
      setTrackIndex(safe + 1);
      setActiveDot(safe);
      // Lompat langsung ke slide asli, bukan posisi kloning, jadi tidak perlu koreksi.
      correctedRef.current = true;
      if (correctionTimeoutRef.current) clearTimeout(correctionTimeoutRef.current);
    },
    [hasMultiple, itemCount]
  );

  // Autoplay — berhenti saat hover / sedang di-drag
  useEffect(() => {
    if (!autoplayMs || isPaused || !hasMultiple) return undefined;
    const timer = setInterval(goNext, autoplayMs);
    return () => clearInterval(timer);
  }, [autoplayMs, isPaused, hasMultiple, goNext]);

  const onTransitionEnd = useCallback(() => {
    if (!hasMultiple) return;
    if (correctionTimeoutRef.current) clearTimeout(correctionTimeoutRef.current);
    correctIfAtClone();
  }, [hasMultiple, correctIfAtClone]);

  // Nyalakan lagi transisi setelah lompat instan. Pakai setTimeout (bukan
  // requestAnimationFrame) supaya tetap jalan walau tab sedang tidak aktif.
  useEffect(() => {
    if (!withTransition) {
      if (reenableTimeoutRef.current) clearTimeout(reenableTimeoutRef.current);
      reenableTimeoutRef.current = setTimeout(() => setWithTransition(true), 30);
      return () => clearTimeout(reenableTimeoutRef.current);
    }
    return undefined;
  }, [withTransition]);

  // Bersihkan semua timer saat unmount
  useEffect(() => {
    return () => {
      if (correctionTimeoutRef.current) clearTimeout(correctionTimeoutRef.current);
      if (reenableTimeoutRef.current) clearTimeout(reenableTimeoutRef.current);
    };
  }, []);

  // --- Drag / swipe (Pointer Events menangani mouse & touch sekaligus) ---
  const onPointerDown = useCallback(
    (e) => {
      if (!hasMultiple) return;
      // Jangan mulai drag kalau yang diklik adalah tombol/link (mis. panah
      // prev/next atau link "Lihat sertifikat"), biar klik normalnya jalan.
      if (e.target.closest && e.target.closest("button, a")) return;

      const width = containerRef.current?.offsetWidth || 1;
      dragRef.current = { dragging: true, startX: e.clientX, width, moved: false };
      setIsPaused(true);
      setWithTransition(false);
      e.currentTarget.setPointerCapture?.(e.pointerId);
    },
    [hasMultiple]
  );

  const onPointerMove = useCallback((e) => {
    if (!dragRef.current.dragging) return;
    const delta = e.clientX - dragRef.current.startX;
    if (Math.abs(delta) > 5) dragRef.current.moved = true;
    setDragDeltaPx(delta);
  }, []);

  const endDrag = useCallback(() => {
    if (!dragRef.current.dragging) return;
    const { width, moved } = dragRef.current;
    const delta = dragDeltaPx;
    const threshold = Math.max(width * 0.15, 40);

    setWithTransition(true);
    if (delta <= -threshold) goNext();
    else if (delta >= threshold) goPrev();

    if (moved) suppressClickRef.current = true;
    setDragDeltaPx(0);
    dragRef.current.dragging = false;
    setIsPaused(false);
  }, [dragDeltaPx, goNext, goPrev]);

  const trackStyle = {
    transform: `translateX(calc(${-trackIndex * 100}% + ${dragDeltaPx}px))`,
    transition: withTransition ? `transform ${TRANSITION_MS}ms ease-out` : "none",
  };

  const containerProps = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => {
      setIsPaused(false);
      endDrag();
    },
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onDragStart: (e) => e.preventDefault(),
    onClickCapture: (e) => {
      if (suppressClickRef.current) {
        e.preventDefault();
        e.stopPropagation();
        suppressClickRef.current = false;
      }
    },
    style: {
      touchAction: "pan-y",
      cursor: hasMultiple ? "grab" : "default",
    },
  };

  return {
    containerRef,
    containerProps,
    trackStyle,
    onTransitionEnd,
    extendedIndices,
    activeDot,
    goNext,
    goPrev,
    goToReal,
  };
}