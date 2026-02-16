
const socialLinks = [
  { name: "Instagram", href: "#", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/madou-kone-161349220/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left block: Hi! I'm / Madou KONE. / 02 YEARS / social */}
        <div className="lg:col-span-4 relative">
          <p className="text-foreground/80 text-lg mb-1">Hi! I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-accent-gold mb-6">
            Madou KONE.
          </h1>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-4xl md:text-5xl font-bold text-accent-teal">
              02
            </span>
            <div className="flex flex-col leading-tight text-xs font-semibold tracking-[0.18em] uppercase text-foreground/80">
              <span>Years</span>
              <span>of experience</span>
            </div>
          </div>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-white transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Centre : ligne pointillés + photo */}
        <div className="lg:col-span-4 flex justify-center relative lg:mt-20">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full max-w-md h-auto text-accent-teal/60"
              viewBox="0 0 300 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            >
              {/* Courbe qui part de la droite du cercle vers la gauche (comme sur Figma) */}
              <path d="M 280 120 Q 220 60 150 100 T 40 80" />
              <polygon points="42,78 36,80 40,84" fill="currentColor" />
            </svg>
          </div>
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-accent-gold overflow-hidden bg-foreground/10 flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold text-accent-gold/60" aria-hidden>
              MK
            </span>
            {/* Replace with <Image src="/images/avatar.jpg" alt="Madou KONE" width={288} height={288} className="w-full h-full object-cover" priority /> when you have a photo */}
          </div>
        </div>

        {/* Bloc droit : slogan + carte avis + Creative Designer */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-foreground/80 text-base md:text-lg mb-6 max-w-sm">
           I design simple, elegant, and effective experiences, and I love what I do.
          </p>
          <div className="bg-white rounded-xl shadow-lg border border-black/5 p-4 mb-8 inline-flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-foreground/80 text-sm">12k reviews on</span>
              <span className="flex text-accent-gold" aria-label="4.9 out of 5 stars">
                ★★★★★
              </span>
              <span className="text-foreground/80 text-sm font-medium">4.9</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-foreground/20"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
          </div>
          <p className="font-cursive text-2xl md:text-3xl">
            <span className="text-accent-teal">Creative </span>
            <span className="text-foreground">designer.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
