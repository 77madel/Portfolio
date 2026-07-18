"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Modern interfaces (Angular, React) and robust backends with Laravel, Spring Boot or Node.js. From idea to deployment.",
    icon: "M10 20L14 4M18 8L22 12L18 16M6 8L2 12L6 16",
    highlight: "Daily work",
    color: "teal",
    number: "01",
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform apps with Flutter and React Native. Booking, tracking, polished user experience.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2h-8a2 2 0 00-2 2v14a2 2 0 002 2z",
    highlight: "Web & mobile",
    color: "purple",
    number: "02",
  },
  {
    title: "Databases & APIs",
    description:
      "MySQL, PostgreSQL, REST APIs. Design, optimization and data security policy — as at the Primature.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    highlight: "Security & traceability",
    color: "gold",
    number: "03",
  },
  {
    title: "Training & Consulting",
    description:
      "In-house training on tools, team support. Already done at INTEC SUP — ready to do it again for you.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    highlight: "Knowledge sharing",
    color: "teal",
    number: "04",
  },
];

const colorMap = {
  teal: {
    icon: "from-teal-500/20 to-teal-600/10 group-hover:from-teal-500 group-hover:to-teal-600",
    iconText: "text-accent-teal group-hover:text-white",
    badge: "badge-teal",
    glow: "hover:shadow-teal-500/10",
    number: "gradient-text-teal",
  },
  purple: {
    icon: "from-purple-500/20 to-purple-600/10 group-hover:from-purple-500 group-hover:to-purple-600",
    iconText: "text-purple-400 group-hover:text-white",
    badge: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    glow: "hover:shadow-purple-500/10",
    number: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",
  },
  gold: {
    icon: "from-yellow-500/20 to-orange-500/10 group-hover:from-yellow-500 group-hover:to-orange-500",
    iconText: "text-accent-gold group-hover:text-white",
    badge: "badge-gold",
    glow: "hover:shadow-yellow-500/10",
    number: "gradient-text-gold",
  },
};

export default function Services() {
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
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="orb w-80 h-80 bg-purple-500/8 top-[20%] right-[-5%]"
        style={{ animationDuration: "14s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full badge-teal text-sm font-medium mb-4">
            <span>⚡</span>
            What I do
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black text-white mb-4">
            Services &{" "}
            <span className="gradient-text-gold">expertise</span>
          </h2>
          <p className="reveal reveal-delay-2 text-white/50 max-w-xl mx-auto text-base">
            Web, mobile, data development and support — based on real missions and deliverables.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const c = colorMap[service.color as keyof typeof colorMap];
            return (
              <article
                key={service.title}
                className={`reveal service-card group glass rounded-2xl p-8 border border-white/5 hover:border-white/10 hover:shadow-2xl ${c.glow} transition-all duration-300`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.icon} ${c.iconText} flex items-center justify-center transition-all duration-300 shadow-lg`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>

                  {/* Number + badge */}
                  <div className="text-right">
                    <span className={`text-3xl font-black opacity-20 ${c.number}`}>
                      {service.number}
                    </span>
                    <br />
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${c.badge}`}>
                      {service.highlight}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">{service.description}</p>

                {/* Bottom arrow */}
                <div className="mt-6 flex items-center gap-2 text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
