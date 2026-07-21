import React from "react";
import { GitCommit } from "lucide-react";
import { GIT_LOG } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" className="px-5 sm:px-8 py-24 border-t border-[#39FF14]/10 bg-[#080C09]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono-x text-[#39FF14] text-sm mb-2">05 // log.git</div>
        <h2 className="font-mono-x text-2xl sm:text-3xl font-bold mb-10">Riwayat Karier</h2>

        <div className="rounded-lg border border-[#39FF14]/15 bg-[#0D1410] p-5 sm:p-8 font-mono-x text-sm overflow-x-auto">
          <div className="text-[#7C948A] mb-6">$ git log --oneline --graph --decorate</div>
          <div className="space-y-6">
            {GIT_LOG.map((entry, idx) => (
              <div key={entry.hash} className="flex gap-4">
                <div className="flex flex-col items-center pt-1">
                  <GitCommit size={16} className="text-[#39FF14]" />
                  {idx !== GIT_LOG.length - 1 && <div className="w-px flex-1 bg-[#39FF14]/20 mt-1" />}
                </div>
                <div className="pb-2 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[#39FF14]">{entry.hash}</span>
                    <span className="text-[#7C948A]">({entry.branch})</span>
                    <span className="text-[#7C948A]">— {entry.date}</span>
                  </div>
                  <div className="text-[#E8FCEF] font-bold">{entry.role} @ {entry.org}</div>
                  <div className="text-[#B9C9BE] font-sans text-[13px] mt-1 leading-relaxed">{entry.msg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
