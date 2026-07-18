"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const certificates = [
  {
    title: "Google IT Support",
    issuer: "Coursera",
    date: "2025",
    description: "IT support, troubleshooting and good IT practices.",
    link: "/images/cetifications/Coursera 0VPKC4X2W2HW.pdf",
    image: "/certificat.png",
    color: "#00d4aa",
    icon: "🖥️",
  },
  {
    title: "Cloud Computing Basics",
    issuer: "Coursera",
    date: "2024",
    description: "Training on cloud concepts, architecture, and application deployment.",
    link: "/images/cetifications/Coursera 2FT0VV66BHBH.pdf",
    image: "/certificat.png",
    color: "#8b5cf6",
    icon: "☁️",
  },
  {
    title: "Data Analysis with Python",
    issuer: "Coursera",
    date: "2024",
    description: "Certification in data analysis and visualization with Python.",
    link: "/images/cetifications/Coursera S1VRUGFY8V3O.pdf",
    image: "/certificat.png",
    color: "#fbbf24",
    icon: "📊",
  },
  {
    title: "DevOps Project",
    issuer: "Coursera",
    date: "2024",
    description: "Certificate of skills in CI/CD, Docker, and continuous deployment.",
    link: "/images/cetifications/Coursera T515W4UPY5D9.pdf",
    image: "/certificat.png",
    color: "#f97316",
    icon: "⚙️",
  },
];

export default function Certificates() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".reveal");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="orb w-72 h-72 bg-yellow-400/8 top-[15%] left-[-5%]"
        style={{ animationDuration: "11s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full badge-gold text-sm font-medium mb-4">
            <span>🏆</span>
            Certifications
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black text-white mb-4">
            My{" "}
            <span className="gradient-text-gold">certificates</span>
          </h2>
          <p className="reveal reveal-delay-2 text-white/50 max-w-xl mx-auto">
            Diplomas, attestations and training relevant to my technical skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, i) => (
            <article
              key={cert.title}
              className="reveal group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top color accent */}
              <div
                className="h-1"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
              />

              {/* Certificate image area */}
              <div
                className="relative flex items-center justify-center py-8 px-6"
                style={{ background: `${cert.color}08` }}
              >
                {/* Big icon */}
                <span className="text-5xl mb-1 drop-shadow-lg">{cert.icon}</span>
                {/* Subtle image overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={100}
                    height={100}
                    className="object-contain w-24 h-24"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: `${cert.color}15`,
                      color: cert.color,
                      border: `1px solid ${cert.color}25`,
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-white/30">{cert.date}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-accent-teal transition-colors">
                  {cert.title}
                </h3>
                <p className="text-white/45 text-xs leading-relaxed mb-4">{cert.description}</p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-all"
                  style={{ color: cert.color }}
                >
                  View certificate
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
