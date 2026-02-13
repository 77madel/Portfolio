"use client";

import { useState } from "react";

const infos = [
  { label: "Email", value: "madeltitokone23@gmail.com", href: "mailto:madeltitokone23@gmail.com", icon: "✉️" },
  { label: "Téléphone", value: "73 98 23 34", href: "tel:+22373982334", icon: "📞" },
  { label: "Ville", value: "Bamako / Sébénikoro", href: "#", icon: "📍" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("Formulaire non configuré : ajoute NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY dans .env.local (clé gratuite sur web3forms.com).");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: name,
          email,
          message,
          subject: `Portfolio – message de ${name}`,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Erreur lors de l'envoi.");
      }

      form.reset();
      setSent(true);
    } catch (err) {
      console.error(err);
      setError("Impossible d'envoyer le message. Réessaie ou écris à madeltitokone23@gmail.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-white/50 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-accent-teal font-semibold text-sm uppercase tracking-wider mb-2">
            Échange
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            On travaille <span className="text-accent-gold">ensemble ?</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto mb-6">
            Un projet, une mission ou une simple question — écris-moi, je réponds vite.
          </p>
          <p className="text-lg font-medium text-accent-teal">
            Prêt pour un nouveau défi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-foreground">Coordonnées</h3>
            {infos.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-black/5 hover:border-accent-teal/30 hover:shadow-md transition-all group"
              >
                <span className="text-2xl" aria-hidden>{item.icon}</span>
                <div>
                  <span className="block text-xs font-medium text-foreground/60 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-foreground font-medium group-hover:text-accent-teal transition-colors">
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
            <p className="text-sm text-foreground/60 pt-2">
              Références professionnelles disponibles sur demande.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <h3 className="text-lg font-bold text-foreground mb-2">Envoyer un message</h3>
              {error && (
                <p className="mb-4 text-sm text-red-500">
                  {error}
                </p>
              )}
              {sent ? (
                <div className="text-center py-12">
                  <p className="text-accent-teal font-semibold text-lg mb-2">Message envoyé !</p>
                  <p className="text-foreground/70 text-sm">
                    Je te répondrai à l’adresse indiquée dès que possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-4 text-accent-teal text-sm font-medium hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-background focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 outline-none transition"
                      placeholder="Ton nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-background focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 outline-none transition"
                      placeholder="ton@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-background focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 outline-none transition resize-none"
                      placeholder="Ton message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-accent-teal text-white py-3.5 font-semibold hover:bg-teal-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Envoi en cours..." : "Envoyer"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
