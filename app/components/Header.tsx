import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          <span className="text-accent-teal">MKONE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.label === "Accueil"
                  ? "text-accent-teal"
                  : "text-foreground/80 hover:text-accent-teal"
              }`}
            >
              {link.label === "Accueil" ? `( ${link.label} )` : link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://cvdesignr.com/p/6723db6cb506a"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-accent-teal text-white px-5 py-2.5 text-sm font-medium hover:bg-teal-700 transition-colors"
        >
          Télécharger le CV
        </a>
      </div>
    </header>
  );
}
