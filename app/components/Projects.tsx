"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "MyLMS - e-learning platform",
    description:
      "Complete, multi-role LMS platform (Admin, Organization, Instructor, Student) with course management, chapters, lessons, quizzes, assignments, certificates, webinars, forums, messaging and support.",
    tech: ["Laravel", "MySQL", "Livewire", "REST API"],
    place: "Personal / open source project",
    icon: "📚",
  },
  { 
    title: "ProdisPro - mobile marketplace", 
    description: 
    "ProdisPro is an innovative mobile platform that facilitates transactions between buyers and sellers: publication of advertisements, Mobile Money payment, integrated messaging, subscription management and complete transaction tracking.", 
    tech: ["Flutter", "Laravel", "Mobile Money", "REST API"], 
    place: "Mobile project / marketplace", 
    icon: "🛒", 
  },
  {
    title: "Financial management of cooperatives (IA)", 
    description: 
    "An innovative digital tool designed to simplify the management of finances and members within informal cooperatives: monitoring of contributions, loans, reimbursements and automated audit of accounts using AI with LangChain.", 
    tech: ["Python", "React", "LangChain", "PostgreSQL"], 
    place: "Fintech / cooperative project", 
    icon: "📊",
  },
  {

    title: "Event Ticket Booking",

    description: "Web and mobile application for booking and tracking event tickets. Seamless user experience.",

    tech: ["Flutter", "React Native", "Node.js", "PostgreSQL"],

    place: "Web & mobile",

    icon: "🎫",

  },
  {
    title: "Orange Digital Center Mali Platform",
    description: "Centralized platform for events, training, registration and participant management at ODC Mali.",
    tech: ["Full Stack", "Angular", "Spring Boot", "Docker"],
    place: "Orange Digital Center Mali",
    icon: "🍊",
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

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(id);
  }, [total]);

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-accent-teal font-semibold text-sm uppercase tracking-wider mb-2">
            Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects <span className="text-accent-gold">delivered</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Management apps, booking systems and platforms — from real experience.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-teal/10 text-accent-teal px-4 py-2 text-sm font-medium">
            <span aria-hidden>🚀</span>
            <span>{projects.length} project{projects.length > 1 ? "s" : ""} delivered · References on request</span>
          </div>
        </div>

        {/* Carousel des projets */}
        <div className="relative mb-6">
          <div className="overflow-hidden px-4 sm:px-6">
            <div
              className="flex gap-6 md:gap-8 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${current} * (100% + 1.5rem)))` }}
            >
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="w-full shrink-0 max-w-xl group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl hover:border-accent-gold/30 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="text-3xl mb-4">{project.icon}</div>
                    <span className="text-xs font-medium uppercase tracking-wider text-accent-teal">
                      {project.place}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-accent-teal transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-foreground/5 text-foreground/80 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-linear-to-r from-accent-teal to-accent-gold transition-all duration-500" />
                </article>
              ))}
            </div>
          </div>

          {/* Points de navigation */}
          {total > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  aria-label={`Go to project ${project.title}`}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    current === index
                      ? "w-6 bg-accent-teal"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Tech stack - logo strip */}
        <div className="mt-24 md:mt-28">
          <div className="text-center mb-10">
            <span className="inline-block text-accent-teal font-semibold text-sm uppercase tracking-wider mb-2">
              Tech stack
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Technologies <span className="text-accent-gold">I use</span>
            </h3>
            <p className="text-foreground/60 text-sm max-w-md mx-auto">
              A modern toolset to deliver reliable products.
            </p>
          </div>

          <div className="relative rounded-3xl bg-white/70 border border-black/5 px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {techLogos.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-logo flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={140}
                    height={40}
                    className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
