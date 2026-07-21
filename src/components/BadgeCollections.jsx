import React from "react";
import { Award, ArrowUpRight } from "lucide-react";
import { BADGE_COLLECTIONS } from "../data/badges.js";

export default function BadgeCollections() {
  if (BADGE_COLLECTIONS.length === 0) return null;

  return (
    <div className="mb-10">
      <p className="font-mono-x text-xs text-[#7C948A] mb-4">// digital badges &amp; kredensial publik</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {BADGE_COLLECTIONS.map((b) => {
          const remaining = Math.max(b.count - (b.highlights?.length || 0), 0);
          return (
            <a
              key={b.id}
              href={b.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 rounded-lg border border-[#39FF14]/15 bg-[#0D1410] hover:border-[#39FF14]/50 hover:shadow-[0_0_24px_rgba(57,255,20,0.12)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/25 flex items-center justify-center shrink-0">
                <Award size={22} className="text-[#39FF14]" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-mono-x text-sm font-bold text-[#E8FCEF]">{b.title}</h3>
                  <span className="font-mono-x text-xs px-2 py-0.5 rounded-full bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/25">
                    {b.count}+
                  </span>
                </div>
                <p className="text-xs text-[#7C948A] leading-relaxed mb-3">{b.description}</p>

                {b.highlights?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {b.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] font-mono-x px-2 py-1 rounded bg-[#39FF14]/8 text-[#9CFFB0] border border-[#39FF14]/15"
                      >
                        {h}
                      </span>
                    ))}
                    {remaining > 0 && (
                      <span className="text-[11px] font-mono-x px-2 py-1 rounded bg-[#39FF14]/5 text-[#7C948A] border border-[#39FF14]/10">
                        +{remaining} lainnya
                      </span>
                    )}
                  </div>
                )}

                <span className="inline-flex items-center gap-1.5 font-mono-x text-xs text-[#39FF14] group-hover:underline">
                  {b.ctaLabel} <ArrowUpRight size={13} />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
