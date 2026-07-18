"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 py-3 shadow-xl shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#8b5cf6] flex items-center justify-center text-xs font-bold text-white shadow-lg">
            MK
          </span>
          <span className="text-lg font-bold tracking-tight">
            <span className="gradient-text-teal">M</span>
            <span className="text-white/90">KONE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                active === link.label
                  ? "text-accent-teal active"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://cvdesignr.com/p/6723db6cb506a"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 shimmer-btn text-[#0a0f1e] px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center"
          >
            <span className={`flex flex-col gap-1.5 w-5 transition-all ${menuOpen ? "gap-0" : ""}`}>
              <span className={`block h-0.5 bg-white rounded transition-all origin-center ${menuOpen ? "rotate-45 translate-y-0.5" : ""}`} />
              <span className={`block h-0.5 bg-white rounded transition-all ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 bg-white rounded transition-all origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu md:hidden glass border-t border-white/5 px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => { setActive(link.label); setMenuOpen(false); }}
              className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                active === link.label
                  ? "bg-accent-teal/10 text-accent-teal"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://cvdesignr.com/p/6723db6cb506a"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center py-3 px-4 rounded-xl shimmer-btn text-[#0a0f1e] text-sm font-bold"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
