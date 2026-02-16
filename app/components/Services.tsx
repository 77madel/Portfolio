"use client";

const services = [
  {
    title: "Full Stack Web Development",
    description: "Modern interfaces (Angular, React) and robust backends with Laravel, Spring Boot or Node.js. From idea to deployment.",
    icon: "M10 20L14 4M18 8L22 12L18 16M6 8L2 12L6 16",
    highlight: "Daily work",
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform apps with Flutter and React Native. Booking, tracking, polished user experience.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2h-8a2 2 0 00-2 2v14a2 2 0 002 2z",
    highlight: "Web & mobile",
  },
  {
    title: "Databases & APIs",
    description: "MySQL, PostgreSQL, REST APIs. Design, optimization and data security policy — as at the Primature.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    highlight: "Security & traceability",
  },
  {
    title: "Training & Consulting",
    description: "In-house training on tools, team support. Already done at INTEC SUP — ready to do it again for you.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    highlight: "Knowledge sharing",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-white/50 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-accent-teal font-semibold text-sm uppercase tracking-wider mb-2">
            What I do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services & <span className="text-accent-gold">expertise</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Web, mobile, data development and support — based on real missions and deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-lg hover:border-accent-teal/20 transition-all duration-300"
            >
              <span className="absolute top-4 right-4 text-[10px] font-medium uppercase tracking-wider text-accent-gold/80">
                {service.highlight}
              </span>
              <div className="w-12 h-12 rounded-xl bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-5 group-hover:bg-accent-teal group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
