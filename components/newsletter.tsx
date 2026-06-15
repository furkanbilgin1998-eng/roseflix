"use client";
import { useState } from "react";
import { T } from "@/components/language";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="container-main my-24 overflow-hidden border border-white/10 bg-panel px-6 py-12 text-center md:px-16 md:py-16">
      <p className="eyebrow mb-4"><T en="The Sunday Cut" tr="Pazar Seçkisi"/></p>
      <h2 className="display text-4xl font-semibold md:text-6xl"><T en="Better movies. Fewer scrolls." tr="Daha iyi filmler. Daha az kaydırma."/></h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted"><T en="A thoughtful weekly edit of new releases, hidden gems, and criticism worth reading. No noise, just cinema." tr="Yeni filmler, saklı cevherler ve okumaya değer eleştirilerden oluşan haftalık seçki. Gürültü yok, sadece sinema."/></p>
      {submitted ? (
        <p className="mx-auto mt-8 max-w-lg border border-white/10 bg-ink px-6 py-4 text-sm text-white/70">
          <T en="The newsletter is coming soon. We'll let you know when it's ready." tr="Bülten yakında geliyor. Hazır olduğunda sizi haberdar edeceğiz."/>
        </p>
      ) : (
        <form
          className="mx-auto mt-8 flex max-w-lg flex-col gap-2 sm:flex-row"
          onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
        >
          <input aria-label="Email address" type="email" required placeholder="you@email.com" className="min-w-0 flex-1 border border-white/10 bg-ink px-5 py-3.5 text-sm outline-none transition focus:border-rose"/>
          <button className="bg-rose px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest transition hover:bg-blush"><T en="Join free" tr="Ücretsiz katıl"/></button>
        </form>
      )}
    </section>
  );
}
