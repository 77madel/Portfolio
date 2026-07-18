"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const projects = [
  {
    title: "MyLMS - e-learning platform",
    description:
      "Complete, multi-role LMS platform (Admin, Organization, Instructor, Student) with course management, chapters, lessons, quizzes, assignments, certificates, webinars, forums, messaging and support.",
    tech: ["Laravel", "MySQL", "Livewire", "REST API"],
    place: "Personal / open source",
    icon: "📚",
    color: "#00d4aa",
  },
  {
    title: "ProdisPro - mobile marketplace",
    description:
      "An innovative mobile platform that facilitates transactions between buyers and sellers: publication of advertisements, Mobile Money payment, integrated messaging, subscription management and complete transaction tracking.",
    tech: ["Flutter", "Laravel", "Mobile Money", "REST API"],
    place: "Mobile / marketplace",
    icon: "🛒",
    color: "#8b5cf6",
  },
  {
    title: "Financial management (AI)",
    description:
      "An innovative digital tool to simplify the management of finances and members within informal cooperatives: monitoring of contributions, loans, reimbursements and automated audit using AI with LangChain.",
    tech: ["Python", "React", "LangChain", "PostgreSQL"],
    place: "Fintech / cooperative",
    icon: "📊",
    color: "#fbbf24",
  },
  {
    title: "Event Ticket Booking",
    description:
      "Web and mobile application for booking and tracking event tickets. Seamless user experience with real-time seat selection.",
    tech: ["Flutter", "React Native", "Node.js", "PostgreSQL"],
    place: "Web & mobile",
    icon: "🎫",
    color: "#f97316",
  },
  {
    title: "Orange Digital Center Mali",
    description:
      "Centralized platform for events, training, registration and participant management at ODC Mali.",
    tech: ["Angular", "Spring Boot", "Docker", "Full Stack"],
    place: "Orange Digital Center",
    icon: "🍊",
    color: "#fb923c",
  },
];

const techLogos = [
  { name: "JavaScript", src: "/images/javascript-logo.svg" },
  { name: "TypeScript", src: "/images/typescript-icon-svgrepo-com.svg" },
  { name: "Angular", src: "/images/angular-icon-svgrepo-com.svg" },
  { name: "React", src: "/images/react-svgrepo-com.svg" },
  { name: "Flutter", src: "/images/flutter-icon.svg" },
  { name: "Dart", src: "/images/dart-programming-language-icon.svg" },
  { name: "Node.js", src: "/images/nodejs-icon-svgrepo-com.svg" },
  { name: "MySQL", src: "/images/mysql-icon.svg" },
  { name: "PostgreSQL", src: "/images/PostgreSQL.svg.png" },
  { name: "Spring Boot", src: "/images/Spring_Boot.svg" },
  { name: "Docker", src: "/images/docker-icon.svg" },
  { name: "Kubernetes", src: "/images/kubernetes-icon.svg" },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-advance carousel
  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);

  // Scroll reveal
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

  const goTo = (index: number) => setCurrent((index + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background-2" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="orb w-96 h-96 bg-teal-500/8 bottom-[10%] left-[-10%]"
        style={{ animationDuration: "16s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full badge-teal text-sm font-medium mb-4">
            <span>🚀</span>
            My work
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black text-white mb-4">
            Projects{" "}
            <span className="gradient-text-gold">delivered</span>
          </h2>
          <p className="reveal reveal-delay-2 text-white/50 max-w-xl mx-auto">
            Management apps, booking systems and platforms — from real experience.
          </p>
          <div className="reveal reveal-delay-3 mt-5 inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm">
            <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
            <span className="text-white/70">
              {projects.length} projects delivered · References on request
            </span>
          </div>
        </div>

        {/* ===== CAROUSEL ===== */}
        <div className="reveal relative mb-8">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="project-card w-full shrink-0 glass-strong rounded-3xl overflow-hidden border border-white/8 hover:border-white/15"
                >
                  {/* Top color bar */}
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                  />

                  <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left */}
                    <div>
                      {/* Icon + place */}
                      <div className="flex items-center gap-3 mb-5">
                        <span
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                          style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                        >
                          {project.icon}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                          {project.place}
                        </span>
                      </div>

                      <h3
                        className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight"
                        style={{ textShadow: `0 0 40px ${project.color}40` }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-white/55 leading-relaxed mb-6">{project.description}</p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                            style={{
                              background: `${project.color}12`,
                              color: project.color,
                              border: `1px solid ${project.color}25`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Visual placeholder */}
                    <div className="hidden md:flex items-center justify-center">
                      <div
                        className="w-48 h-48 rounded-3xl flex items-center justify-center text-7xl"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${project.color}20, ${project.color}05)`,
                          border: `1px solid ${project.color}20`,
                        }}
                      >
                        {project.icon}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 glass rounded-full flex items-center justify-center text-white hover:text-accent-teal hover:border-accent-teal/30 transition-all hover:scale-110 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 glass rounded-full flex items-center justify-center text-white hover:text-accent-teal hover:border-accent-teal/30 transition-all hover:scale-110 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots + counter */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-white/30 text-sm font-mono">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to project ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-accent-teal"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ===== TECH STACK ===== */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full badge-teal text-sm font-medium mb-4">
              <span>🛠</span>
              Tech stack
            </div>
            <h3 className="reveal reveal-delay-1 text-3xl md:text-4xl font-black text-white mb-3">
              Technologies{" "}
              <span className="gradient-text-gold">I use</span>
            </h3>
            <p className="reveal reveal-delay-2 text-white/40 text-sm max-w-md mx-auto">
              A modern toolset to deliver reliable products.
            </p>
          </div>

          <div className="reveal glass rounded-3xl border border-white/5 px-6 py-10 md:px-10 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d1428] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d1428] to-transparent z-10 pointer-events-none" />

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
              {techLogos.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-logo flex flex-col items-center gap-2 group cursor-pointer"
                  title={tech.name}
                >
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-accent-teal/30 transition-all">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-xs text-white/30 group-hover:text-accent-teal transition-colors font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
