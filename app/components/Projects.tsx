"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "MyLMS - plateforme e-learning",
    description:
      "Plateforme LMS complète et multi-rôles (Admin, Organisation, Instructeur, Étudiant) avec gestion des cours, chapitres, leçons, quiz, devoirs, certificats, webinaires, forums, messagerie et support.",
    tech: ["Laravel", "MySQL", "Livewire", "REST API"],
    place: "Projet personnel / open source",
    icon: "📚",
  },
  {
    title: "ProdisPro - marketplace mobile",
    description:
      "ProdisPro est une plateforme mobile innovante qui facilite les transactions entre acheteurs et vendeurs : publication d’annonces, paiement Mobile Money, messagerie intégrée, gestion des abonnements et suivi complet des transactions.",
    tech: ["Flutter", "Laravel", "Mobile Money", "REST API"],
    place: "Projet mobile / marketplace",
    icon: "🛒",
  },
  {
    title: "Gestion financière de coopératives (IA)",
    description:
      "Un outil numérique innovant conçu pour simplifier la gestion des finances et des adhérents au sein des coopératives informelles : suivi des cotisations, prêts, remboursements et audit automatisé des comptes grâce à l’IA avec LangChain.",
    tech: ["Python", "React", "LangChain", "PostgreSQL"],
    place: "Projet fintech / coopératives",
    icon: "📊",
  },
  {
    title: "Réservation de tickets d'événements",
    description: "Application web et mobile pour réserver et suivre les tickets d'événements. Expérience fluide côté utilisateur.",
    tech: ["Flutter", "React Native", "Node.js", "PostgreSQL"],
    place: "Web & mobile",
    icon: "🎫",
  },
  {
    title: "Plateforme Orange Digital Center Mali",
    description: "Plateforme centralisée pour les événements, formations, inscriptions et gestion des participants de l'ODC Mali.",
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
            Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projets <span className="text-accent-gold">livrés</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Applications de gestion, réservation et plateformes — tirés de ton parcours réel.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-teal/10 text-accent-teal px-4 py-2 text-sm font-medium">
            <span aria-hidden>🚀</span>
            <span>{projects.length} projet{projects.length > 1 ? "s" : ""} réalisé{projects.length > 1 ? "s" : ""} · Références sur demande</span>
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
                  aria-label={`Aller au projet ${project.title}`}
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

        {/* Section Technologies maîtrisées - style bande de logos */}
        <div className="mt-24 md:mt-28">
          <div className="text-center mb-10">
            <span className="inline-block text-accent-teal font-semibold text-sm uppercase tracking-wider mb-2">
              Stack technique
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Technologies <span className="text-accent-gold">maîtrisées</span>
            </h3>
            <p className="text-foreground/60 text-sm max-w-md mx-auto">
              Un écosystème d’outils modernes pour livrer des produits fiables.
            </p>
          </div>

          <div className="relative rounded-3xl bg-white/70 border border-black/5 px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {techLogos.map((tech, index) => (
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
