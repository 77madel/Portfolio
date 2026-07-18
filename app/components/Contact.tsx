"use client";

import { useState, useRef, useEffect } from "react";

const infos = [
  {
    label: "Email",
    value: "madeltitokone23@gmail.com",
    href: "mailto:madeltitokone23@gmail.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#00d4aa",
    emoji: "✉️",
  },
  {
    label: "Phone",
    value: "+223 73 98 23 34",
    href: "tel:+22373982334",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    color: "#8b5cf6",
    emoji: "📞",
  },
  {
    label: "Location",
    value: "Bamako / Sébénikoro",
    href: "#",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    color: "#fbbf24",
    emoji: "📍",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("Form not configured: add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local.");
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
          subject: `Portfolio – message from ${name}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Error sending message.");
      form.reset();
      setSent(true);
    } catch (err) {
      console.error(err);
      setError("Unable to send message. Try again or email madeltitokone23@gmail.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background-2" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="orb w-96 h-96 bg-teal-500/10 top-[-5%] right-[-10%]"
        style={{ animationDuration: "13s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full badge-teal text-sm font-medium mb-4">
            <span>💬</span>
            Get in touch
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s work{" "}
            <span className="gradient-text-gold">together?</span>
          </h2>
          <p className="reveal reveal-delay-2 text-white/50 max-w-xl mx-auto mb-3">
            A project, a mission or a quick question — drop me a line, I reply fast.
          </p>
          <p className="reveal reveal-delay-3 text-base font-semibold gradient-text-teal">
            ✦ Ready for a new challenge
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="reveal text-sm font-bold text-white/40 uppercase tracking-widest mb-6">
              Contact details
            </h3>

            {infos.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={`reveal reveal-delay-${i + 1} group flex items-center gap-4 p-4 rounded-2xl glass border border-white/5 hover:border-white/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: item.color }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/30">
                    {item.label}
                  </span>
                  <span className="text-white font-medium text-sm group-hover:text-accent-teal transition-colors">
                    {item.value}
                  </span>
                </div>
                <svg
                  className="w-4 h-4 text-white/20 group-hover:text-accent-teal ml-auto transition-all group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}

            {/* Available notice */}
            <div className="reveal glass rounded-2xl p-5 border border-accent-teal/15 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                <span className="text-accent-teal text-sm font-bold">Currently available</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Professional references available on request. I&apos;m open to freelance missions and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="reveal glass-strong rounded-3xl p-8 md:p-10 border border-white/8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>✉️</span>
                Send a message
              </h3>

              {error && (
                <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}

              {sent ? (
                <div className="text-center py-14 space-y-4">
                  <div className="text-6xl mb-2">🎉</div>
                  <p className="text-accent-teal font-bold text-xl">Message sent!</p>
                  <p className="text-white/50 text-sm max-w-xs mx-auto">
                    I&apos;ll get back to you at the email you provided as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-4 text-sm font-semibold gradient-text-teal hover:opacity-80 transition-opacity"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-5 py-3.5 rounded-xl bg-white/4 border text-white placeholder:text-white/20 outline-none transition-all duration-200 ${
                        focused === "name"
                          ? "border-accent-teal shadow-lg shadow-teal-500/10"
                          : "border-white/8 hover:border-white/15"
                      }`}
                      placeholder="Madou KONE"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-5 py-3.5 rounded-xl bg-white/4 border text-white placeholder:text-white/20 outline-none transition-all duration-200 ${
                        focused === "email"
                          ? "border-accent-teal shadow-lg shadow-teal-500/10"
                          : "border-white/8 hover:border-white/15"
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-5 py-3.5 rounded-xl bg-white/4 border text-white placeholder:text-white/20 outline-none transition-all duration-200 resize-none ${
                        focused === "message"
                          ? "border-accent-teal shadow-lg shadow-teal-500/10"
                          : "border-white/8 hover:border-white/15"
                      }`}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={loading}
                    className="w-full shimmer-btn text-[#0a0f1e] font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="relative z-10 max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-sm">
        <p>© {new Date().getFullYear()} Madou KONE. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-red-400">♥</span> in Bamako, Mali
        </p>
      </div>
    </section>
  );
}
