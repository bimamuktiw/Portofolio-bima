import React from "react";
import { SITE } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-8 border-t border-[#39FF14]/10 text-center">
      <p className="font-mono-x text-xs text-[#7C948A]">
        $ echo &quot;Created by {SITE.name}  — © {new Date().getFullYear()}&quot;
      </p>
    </footer>
  );
}
