import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Award, ExternalLink, LayoutGrid } from "lucide-react";
import { CERTIFICATES } from "../data/certificates.js";
import { BADGE_COLLECTIONS } from "../data/badges.js";
import CertificateModal from "./CertificateModal.jsx";
import BadgeCollections from "./BadgeCollections.jsx";
import { useDraggableCarousel } from "../hooks/useDraggableCarousel.js";

const FEATURED = CERTIFICATES.filter((c) => c.featured);
const TOTAL_BADGES = BADGE_COLLECTIONS.reduce((sum, b) => sum + b.count, 0);

export default function Certifications() {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    containerRef,
    containerProps,
    trackStyle,
    onTransitionEnd,
    extendedIndices,
    activeDot,
    goNext,
    goPrev,
    goToReal,
  } = useDraggableCarousel(FEATURED.length, { autoplayMs: 4000 });

  return (
    <section id="certifications" className="px-5 sm:px-8 py-24 border-t border-[#39FF14]/10 bg-[#080C09]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono-x text-[#39FF14] text-sm mb-2">03 // certs.json</div>
        <div className="mb-10">
          <h2 className="font-mono-x text-2xl sm:text-3xl font-bold mb-1">Sertifikat &amp; Badge</h2>
          <p className="text-[#7C948A] text-sm font-mono-x">
            {CERTIFICATES.length}+ sertifikat &middot; {TOTAL_BADGES}+ badge digital terverifikasi
          </p>
        </div>

        {/* Kredensial berupa badge digital / link publik (mis. Google Cloud Skill Badges) */}
        <BadgeCollections />

        {/* Kredensial berupa file PDF */}
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
          <p className="font-mono-x text-xs text-[#7C948A]">// sertifikat (pdf)</p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 font-mono-x text-sm px-4 py-2 rounded-full border border-[#39FF14]/40 text-[#E8FCEF] hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
          >
            <LayoutGrid size={15} /> Lihat semua ({CERTIFICATES.length})
          </button>
        </div>

        {/* Carousel sertifikat unggulan */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-xl border border-[#39FF14]/15 select-none"
          {...containerProps}
        >
          <div className="flex" style={trackStyle} onTransitionEnd={onTransitionEnd}>
            {extendedIndices.map((origIdx, pos) => {
              const cert = FEATURED[origIdx];
              return (
                <div
                  key={`${cert.id}-pos${pos}`}
                  className="w-full shrink-0 flex flex-col sm:flex-row items-center gap-6 bg-[#0D1410] p-8 sm:p-16 "
                >
                  <div className="w-70 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/25 flex items-center justify-center shrink-0">
                    <Award size={36} className="text-[#39FF14]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="font-mono-x text-xs text-[#7C948A] mb-1">{cert.issuer} &middot; {cert.year}</p>
                    <h3 className="font-mono-x text-lg sm:text-xl font-bold text-[#E8FCEF] mb-3">{cert.title}</h3>
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono-x text-sm text-[#39FF14] hover:underline"
                    >
                      Lihat sertifikat <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={goPrev}
            aria-label="Sebelumnya"
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-[#060A07]/80 border border-[#39FF14]/30 text-[#39FF14] hover:bg-[#39FF14]/10 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            aria-label="Berikutnya"
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-[#060A07]/80 border border-[#39FF14]/30 text-[#39FF14] hover:bg-[#39FF14]/10 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {FEATURED.map((cert, i) => (
            <button
              key={cert.id}
              onClick={() => goToReal(i)}
              aria-label={`Ke sertifikat ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activeDot ? "w-8 bg-[#39FF14]" : "w-1.5 bg-[#39FF14]/25 hover:bg-[#39FF14]/50"
              }`}
            />
          ))}
        </div>
      </div>

      <CertificateModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
