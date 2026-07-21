import React, { useState, useEffect } from "react";
import { Terminal as TerminalIcon, ArrowUpRight, Download } from "lucide-react";
import { TYPE_STRING, SITE } from "../data/content.js";
import { scrollToSection } from "../utils/scrollToSection.js";
import foto from "../assets/foto_id.png";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Efek mengetik otomatis di dalam jendela terminal
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(TYPE_STRING.slice(0, i));
      if (i >= TYPE_STRING.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, []);

  // Kedip kursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 550);
    return () => clearInterval(blink);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-24 px-5 sm:px-8 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      {/* Ambient neon glow blobs */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#39FF14]/20 blur-[110px] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[320px] h-[320px] rounded-full bg-[#00FFA3]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Kiri: teks */}
        <div>
          <p className="font-mono-x text-[#39FF14] text-sm mb-5">
            Hai! Saya <span className="text-[#E8FCEF]">{SITE.name}</span> — berbasis di {SITE.location.split(",")[0]}
          </p>
          <h1 className="font-mono-x text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Frontend Developer

          </h1>
          <p className="text-[#7C948A] text-base sm:text-lg max-w-lg mb-10">
            Membangun website modern yang cepat, responsif, dan mudah digunakan. Saya senang mempelajari teknologi baru serta mengembangkan solusi digital yang memberikan pengalaman terbaik bagi pengguna.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#39FF14] text-black font-mono-x text-sm font-bold hover:bg-[#5CFF3D] transition-colors shadow-[0_0_24px_rgba(57,255,20,0.4)]"
            >
              Lihat Proyek <ArrowUpRight size={16} />
            </a>
            <a
              href="/certificates/CV_BIMA MUKTI WIBOWO_GENERAL.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#39FF14]/40 text-[#E8FCEF] font-mono-x text-sm hover:border-[#39FF14] transition-colors"
            >
              <Download size={16} /> Unduh CV
            </a>
          </div>

          {/* Cuplikan terminal */}
          <div className="max-w-md rounded-lg border border-[#39FF14]/20 bg-[#0D1410] overflow-hidden fade-up">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#39FF14]/15 bg-[#101812]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14]" />
              <span className="ml-3 font-mono-x text-[11px] text-[#7C948A]">profile.js — zsh</span>
            </div>
            <pre className="font-mono-x text-[12px] sm:text-[13px] leading-relaxed text-[#9CFFB0] p-4 min-h-[140px] whitespace-pre-wrap">
{typed}<span className={showCursor ? "opacity-100" : "opacity-0"}>▌</span>
            </pre>
          </div>
        </div>

        {/* Kanan: placeholder foto profil */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#39FF14]/25 blur-[80px]" />
          <div className="relative w-64 sm:w-80 aspect-[4/5] rounded-[2rem] border border-[#39FF14]/30 bg-[#0D1410]/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 overflow-hidden">
            <img src={foto} className="w-full h-full object-cover" alt="Foto Profil" />
          </div>
        </div>
      </div>
    </section>
  );
}
