"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#C6A558] hover:text-[#C6A558]"
      >
        <span className="text-xl">{open ? "×" : "☰"}</span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-[#0A2E20] px-6 py-5 shadow-xl">
          <nav className="flex flex-col gap-1">
            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-[#C6A558]"
            >
              About
            </a>

            <a
              href="#products"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-[#C6A558]"
            >
              Products
            </a>

            <a
              href="#process"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-[#C6A558]"
            >
              Our Process
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-[#C6A558]"
            >
              Contact
            </a>

            <a
              href="https://wa.me/2349032983019"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-[#C6A558] px-5 py-3 text-center text-sm font-bold text-[#0A2E20] transition hover:bg-white"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}