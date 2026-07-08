import Image from "next/image";

const certificates = [
  {
    title: "Google IT Support",
    issuer: "Coursera",
    date: "2025",
    description: "Attestation de suivi sur le support informatique et les bonnes pratiques IT.",
    link: "/images/cetifications/Coursera 0VPKC4X2W2HW.pdf",
    image: "/certificat.png",
  },
  {
    title: "Cloud Computing Basics",
    issuer: "Coursera",
    date: "2024",
    description: "Training on cloud concepts, architecture, and application deployment.",
    link: "/images/cetifications/Coursera 2FT0VV66BHBH.pdf",
    image: "/certificat.png",
  },
  {
    title: "Data Analysis with Python",
    issuer: "Coursera",
    date: "2024",
    description: "Certification in data analysis and visualization with Python.",
    link: "/images/cetifications/Coursera S1VRUGFY8V3O.pdf",
    image: "/certificat.png",
  },
  {
    title: "DevOps Project",
    issuer: "Coursera",
    date: "2024",
    description: "Certificate of skills in CI/CD, Docker, and continuous deployment.",
    link: "/images/cetifications/Coursera T515W4UPY5D9.pdf",
    image: "/certificat.png",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-28 px-6 bg-white/50 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-accent-teal font-semibold text-sm uppercase tracking-wider mb-2">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-accent-gold">certificates</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Diplomas, attestations and training relevant to my technical skills.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="group rounded-3xl bg-white p-7 shadow-sm border border-black/5 hover:shadow-lg hover:border-accent-teal/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-5 overflow-hidden rounded-3xl bg-slate-100 p-6">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} image`}
                  width={128}
                  height={128}
                  className="h-32 w-32 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{certificate.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">
                <span className="font-semibold text-foreground">{certificate.issuer}</span>
                <span className="block mt-1 text-xs text-foreground/50">{certificate.date}</span>
              </p>
              <p className="text-foreground/70 leading-relaxed mb-6">{certificate.description}</p>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-teal hover:text-teal-700"
              >
                View certificate
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
