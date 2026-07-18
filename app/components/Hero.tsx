"use client";

import { useEffect, useRef } from "react";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/madou-kone-161349220/",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "GitHub",
    href: "#",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
];

const stats = [
  { value: "02+", label: "Years Exp." },
  { value: "10+", label: "Projects" },
  { value: "100%", label: "Dedication" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll reveal
  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".reveal");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="bg-radial-teal absolute inset-0" />

      {/* Animated orbs */}
      <div
        className="orb w-96 h-96 bg-teal-500/10 top-[-10%] left-[-5%]"
        style={{ animationDuration: "12s" }}
      />
      <div
        className="orb w-72 h-72 bg-purple-500/10 bottom-[10%] right-[-5%]"
        style={{ animationDuration: "15s", animationDelay: "3s" }}
      />
      <div
        className="orb w-48 h-48 bg-yellow-400/8 top-[60%] left-[40%]"
        style={{ animationDuration: "10s", animationDelay: "6s" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            background: i % 2 === 0 ? "var(--accent-teal)" : "var(--accent-gold)",
            top: `${10 + i * 14}%`,
            left: `${5 + i * 16}%`,
            animationDuration: `${5 + i * 2}s`,
            animationDelay: `${i * 0.8}s`,
            opacity: 0.4,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        {/* ===== LEFT COLUMN ===== */}
        <div className="lg:col-span-4 space-y-8">
          {/* Available badge */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full badge-teal text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
            Available for hire
          </div>

          {/* Name */}
          <div className="reveal reveal-delay-1 space-y-2">
            <p className="text-white/50 text-base tracking-widest uppercase text-sm">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl font-black leading-none">
              <span className="gradient-text-gold">Madou</span>
              <br />
              <span className="text-white">KONE.</span>
            </h1>
          </div>

          {/* Experience */}
          <div className="reveal reveal-delay-2 flex items-center gap-4">
            <div className="relative">
              <span className="text-5xl font-black gradient-text-teal">02</span>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="flex flex-col leading-tight text-xs font-semibold tracking-widest uppercase text-white/50">
              <span>Years</span>
              <span>of experience</span>
            </div>
          </div>

          {/* Socials */}
          <div className="reveal reveal-delay-3 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/50 hover:text-accent-teal hover:border-accent-teal/30 transition-all hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-4 grid grid-cols-3 gap-3 pt-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl p-3 text-center border border-white/5 hover:border-accent-teal/20 transition-colors"
              >
                <p className="text-xl font-black gradient-text-teal">{s.value}</p>
                <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CENTER COLUMN — Avatar ===== */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="reveal relative">
            {/* Animated border ring */}
            <div className="animated-border rounded-full p-1 float-slow">
              <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden bg-gradient-to-br from-teal-900/50 to-purple-900/50 flex items-center justify-center">
                {/* Placeholder initials */}
                <span className="text-6xl font-black text-white/10 select-none" aria-hidden>
                  MK
                </span>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating card: Role */}
            <div className="absolute -bottom-6 -right-4 glass rounded-2xl px-4 py-2.5 shadow-xl float">
              <p className="text-xs text-white/50 font-medium">Role</p>
              <p className="text-sm font-bold text-white">Full Stack Dev</p>
            </div>

            {/* Floating card: Location */}
            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2.5 shadow-xl" style={{ animation: "float 5s ease-in-out infinite", animationDelay: "1s" }}>
              <p className="text-xs text-white/50 font-medium flex items-center gap-1">
                <span>📍</span> Bamako, Mali
              </p>
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          {/* Tagline */}
          <div className="reveal space-y-3">
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-sm">
              I design{" "}
              <span className="text-white font-semibold">simple, elegant</span> and{" "}
              <span className="text-white font-semibold">effective</span> experiences —
              and I love what I do.
            </p>
          </div>

          {/* Reviews card */}
          <div className="reveal reveal-delay-1 glass rounded-2xl p-5 border border-white/8 w-full max-w-xs hover:border-accent-gold/20 transition-all">
            <div className="flex items-center gap-3 mb-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-purple-500 border-2 border-background"
                  style={{ marginLeft: i > 1 ? "-10px" : "0", zIndex: 5 - i, position: "relative" }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-gold text-sm" aria-label="4.9 stars">★★★★★</span>
              <span className="text-white font-bold text-sm">4.9</span>
              <span className="text-white/40 text-xs">· 12k reviews</span>
            </div>
          </div>

          {/* Creative Designer label */}
          <div className="reveal reveal-delay-2">
            <p className="font-cursive text-3xl md:text-4xl">
              <span className="gradient-text-teal">Creative </span>
              <span className="text-white">designer.</span>
            </p>
          </div>

          {/* CTA buttons */}
          <div className="reveal reveal-delay-3 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#projects"
              className="shimmer-btn text-[#0a0f1e] font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-teal-500/20"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="glass border border-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:border-accent-teal/30 hover:text-accent-teal transition-all"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
