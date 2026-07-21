import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "../data/content.js";
import { scrollToSection } from "../utils/scrollToSection.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll spy: menandai menu aktif sesuai section yang sedang terlihat
  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) current = item.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[#39FF14]/15 bg-[#060A07]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("home")}
          className="font-mono-x text-[#39FF14] text-base font-bold tracking-tight"
        >
          {SITE.logoText}
        </button>

        <nav className="hidden md:flex items-center gap-1 font-mono-x text-[13px]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 rounded transition-colors border-b-2 ${
                activeSection === item.id
                  ? "text-[#39FF14] border-[#39FF14]"
                  : "text-[#7C948A] border-transparent hover:text-[#E8FCEF]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>


        <button className="md:hidden text-[#E8FCEF]" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#39FF14]/15 bg-[#060A07] px-5 py-3 flex flex-col gap-1 font-mono-x text-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left py-2 ${activeSection === item.id ? "text-[#39FF14]" : "text-[#7C948A]"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
