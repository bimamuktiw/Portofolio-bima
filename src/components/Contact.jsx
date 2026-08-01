import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { SITE } from "../data/content.js";

export default function Contact() {
  return (
    <section id="contact" className="px-5 sm:px-8 py-24 border-t border-[#39FF14]/10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="font-mono-x text-[#39FF14] text-sm mb-2">06 // contact.sh</div>
        <h2 className="font-mono-x text-3xl sm:text-4xl font-bold mb-4">Mari Berkolaborasi</h2>
        <p className="text-[#7C948A] mb-10">
          Terbuka untuk peluang kerja, kolaborasi, dan diskusi seputar pengembangan web. Silakan hubungi saya melalui kontak berikut.
        </p>

        <div className="rounded-lg border border-[#39FF14]/20 bg-[#0D1410] p-6 sm:p-8 text-left font-mono-x text-sm">
          <div className="text-[#7C948A] mb-4">$ ./contact.sh --send</div>
          <div className="space-y-3">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 p-3 rounded hover:bg-[#39FF14]/8 transition-colors group"
            >
              <Mail size={18} className="text-[#39FF14]" />
              <span className="text-[#E8FCEF] group-hover:text-[#39FF14]">{SITE.email}</span>
            </a>
            <a href={`https://${SITE.github}`} className="flex items-center gap-3 p-3 rounded hover:bg-[#39FF14]/8 transition-colors group">
              <Github size={18} className="text-[#39FF14]" />
              <span className="text-[#E8FCEF] group-hover:text-[#39FF14]">{SITE.github}</span>
            </a>
            <a href={`https://${SITE.linkedin}`} className="flex items-center gap-3 p-3 rounded hover:bg-[#39FF14]/8 transition-colors group">
              <Linkedin size={18} className="text-[#39FF14]" />
              <span className="text-[#E8FCEF] group-hover:text-[#39FF14]">{SITE.linkedin}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
