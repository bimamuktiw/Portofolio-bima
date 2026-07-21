import React from "react";
import { MapPin } from "lucide-react";
import { ABOUT, SITE } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-8 py-24 border-t border-[#39FF14]/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10">
        <div className="font-mono-x text-[#39FF14] text-sm shrink-0">01 // about.md</div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-mono-x text-2xl sm:text-3xl font-bold mb-5">Tentang Saya</h2>
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-[#B9C9BE] leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
            <div className="flex items-center gap-2 mt-6 font-mono-x text-sm text-[#7C948A]">
              <MapPin size={15} className="text-[#39FF14]" /> {SITE.location}
            </div>
          </div>

          <div className="rounded-lg border border-[#39FF14]/15 bg-[#0D1410] p-5">
            <div className="font-mono-x text-xs text-[#7C948A] mb-4">// statistik singkat</div>
            <div className="grid grid-cols-2 gap-5">
              {ABOUT.stats.map(([num, label]) => (
                <div key={label}>
                  <div className="font-mono-x text-2xl font-bold text-[#39FF14]">{num}</div>
                  <div className="text-xs text-[#7C948A] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
