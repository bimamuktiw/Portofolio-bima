import React from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Globe, FileText, Terminal as TerminalIcon } from "lucide-react";
import { PROJECTS } from "../data/content.js";
import { useDraggableCarousel } from "../hooks/useDraggableCarousel.js";

export default function Projects() {
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
  } = useDraggableCarousel(PROJECTS.length, { autoplayMs: 4500 });

  return (
    <section id="projects" className="px-5 sm:px-8 py-24 border-t border-[#39FF14]/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono-x text-[#39FF14] text-sm mb-2">04 // projects/</div>
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="font-mono-x text-2xl sm:text-3xl font-bold">Proyek Terpilih</h2>
            <p className="text-[#7C948A] text-xs font-mono-x mt-1">geser dengan mouse atau jari untuk melihat lainnya</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              aria-label="Proyek sebelumnya"
              className="w-9 h-9 flex items-center justify-center rounded border border-[#39FF14]/30 text-[#39FF14] hover:bg-[#39FF14]/10 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              aria-label="Proyek berikutnya"
              className="w-9 h-9 flex items-center justify-center rounded border border-[#39FF14]/30 text-[#39FF14] hover:bg-[#39FF14]/10 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-xl border border-[#39FF14]/15 select-none"
          {...containerProps}
        >
          <div className="flex" style={trackStyle} onTransitionEnd={onTransitionEnd}>
            {extendedIndices.map((origIdx, pos) => {
              const p = PROJECTS[origIdx];
              return (
                <div key={`${p.file}-pos${pos}`} className="w-full shrink-0 grid md:grid-cols-[1fr_1fr]">
                  <div
                    className="hidden md:block relative overflow-hidden"
                    style={!p.image ? { background: `linear-gradient(135deg, #0D1410 0%, ${p.accent}14 100%)` } : undefined}
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`Tampilan situs ${p.title}`}
                        draggable={false}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-12 relative">
                        <TerminalIcon size={72} style={{ color: p.accent }} strokeWidth={1} />
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `linear-gradient(${p.accent}0d 1px, transparent 1px), linear-gradient(90deg, ${p.accent}0d 1px, transparent 1px)`,
                            backgroundSize: "28px 28px",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="bg-[#0D1410] p-8 sm:p-10 flex flex-col justify-center">
                    <div className="font-mono-x text-xs text-[#7C948A] mb-3">{p.file}</div>
                    <h3 className="font-mono-x text-xl sm:text-2xl font-bold mb-3" style={{ color: p.accent }}>
                      {p.title}
                    </h3>
                    <p className="text-[#B9C9BE] text-sm leading-relaxed mb-6">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono-x px-2.5 py-1 rounded border border-[#39FF14]/20 text-[#9CFFB0]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono-x text-sm text-[#39FF14] hover:underline w-fit"
                    >
                      {p.linkType === "pdf" ? (
                        <>
                          <FileText size={14} /> Lihat Dokumentasi (PDF)
                        </>
                      ) : (
                        <>
                          <Globe size={14} /> Kunjungi Website
                        </>
                      )}
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {PROJECTS.map((p, idx) => (
            <button
              key={p.file}
              onClick={() => goToReal(idx)}
              aria-label={`Ke proyek ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === activeDot ? "w-8 bg-[#39FF14]" : "w-1.5 bg-[#39FF14]/25 hover:bg-[#39FF14]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}