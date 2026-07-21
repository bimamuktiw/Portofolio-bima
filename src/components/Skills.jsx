import React from "react";
import { SKILLS } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" className="px-5 sm:px-8 py-24 border-t border-[#39FF14]/10 bg-[#080C09]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono-x text-[#39FF14] text-sm mb-2">02 // skills.json</div>
        <h2 className="font-mono-x text-2xl sm:text-3xl font-bold mb-10">Keahlian & Teknologi</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map(({ group, icon: Icon, items }) => (
            <div
              key={group}
              className="rounded-lg border border-[#39FF14]/12 bg-[#0D1410] p-5 hover:border-[#39FF14]/50 hover:shadow-[0_0_24px_rgba(57,255,20,0.12)] transition-all"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Icon size={18} className="text-[#39FF14]" />
                <span className="font-mono-x text-sm font-bold">{group}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="text-xs font-mono-x px-2.5 py-1 rounded bg-[#39FF14]/8 text-[#9CFFB0] border border-[#39FF14]/15"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
