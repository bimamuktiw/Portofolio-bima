import React, { useState, useEffect, useMemo } from "react";
import { X, Search, FileText, ExternalLink } from "lucide-react";
import { CERTIFICATES, ISSUERS } from "../data/certificates.js";

export default function CertificateModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIssuer, setActiveIssuer] = useState("Semua");

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    if (!open) return undefined;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const filtered = useMemo(() => {
    return CERTIFICATES.filter((c) => {
      const matchIssuer = activeIssuer === "Semua" || c.issuer === activeIssuer;
      const matchQuery =
        query.trim() === "" ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.issuer.toLowerCase().includes(query.toLowerCase());
      return matchIssuer && matchQuery;
    });
  }, [query, activeIssuer]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#0D1410] border border-[#39FF14]/25 rounded-xl my-8 sm:my-0 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#39FF14]/15">
          <div>
            <h3 className="font-mono-x text-lg font-bold text-[#E8FCEF]">Semua Sertifikat</h3>
            <p className="text-xs text-[#7C948A] font-mono-x mt-0.5">{CERTIFICATES.length} sertifikat total</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="w-9 h-9 flex items-center justify-center rounded border border-[#39FF14]/30 text-[#39FF14] hover:bg-[#39FF14]/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search + filter */}
        <div className="px-5 sm:px-6 py-4 border-b border-[#39FF14]/10 space-y-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7C948A]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari nama sertifikat atau penerbit..."
              className="w-full font-mono-x text-sm pl-9 pr-3 py-2.5 rounded bg-[#060A07] border border-[#39FF14]/20 text-[#E8FCEF] placeholder:text-[#5A6B60] focus:outline-none focus:border-[#39FF14]/60"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["Semua", ...ISSUERS].map((issuer) => (
              <button
                key={issuer}
                onClick={() => setActiveIssuer(issuer)}
                className={`font-mono-x text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  activeIssuer === issuer
                    ? "bg-[#39FF14] text-black border-[#39FF14] font-bold"
                    : "border-[#39FF14]/25 text-[#7C948A] hover:text-[#E8FCEF] hover:border-[#39FF14]/50"
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="overflow-y-auto px-5 sm:px-6 py-4 flex-1">
          {filtered.length === 0 ? (
            <p className="text-[#7C948A] text-sm font-mono-x text-center py-10">
              Tidak ada sertifikat yang cocok dengan pencarian.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-3">
              {filtered.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-lg border border-[#39FF14]/12 bg-[#060A07] hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-colors group"
                >
                  <FileText size={18} className="text-[#39FF14] shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-[#E8FCEF] font-medium leading-snug group-hover:text-[#39FF14] transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-xs font-mono-x text-[#7C948A] mt-1">
                      {cert.issuer} &middot; {cert.year}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-[#7C948A] shrink-0 mt-1 group-hover:text-[#39FF14] transition-colors" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
