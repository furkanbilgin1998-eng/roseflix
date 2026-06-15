"use client";
import { useState } from "react";
import { T } from "@/components/language";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-white/10 bg-panel p-6 md:p-9">
      <div className="grid gap-6">
        <label className="grid gap-2 text-[10px] font-extrabold uppercase tracking-widest text-muted">
          <T en="Name" tr="Ad Soyad"/>
          <input
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none focus:border-rose"
          />
        </label>
        <label className="grid gap-2 text-[10px] font-extrabold uppercase tracking-widest text-muted">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none focus:border-rose"
          />
        </label>
        <label className="grid gap-2 text-[10px] font-extrabold uppercase tracking-widest text-muted">
          <T en="Message" tr="Mesaj"/>
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className="resize-none border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none focus:border-rose"
          />
        </label>
        <button
          disabled={status === "sending" || status === "sent"}
          className="bg-rose px-6 py-4 text-xs font-extrabold uppercase tracking-widest transition hover:bg-blush disabled:opacity-60"
        >
          {status === "sent"
            ? <T en="Message sent — thank you" tr="Mesaj gönderildi — teşekkürler"/>
            : status === "error"
            ? <T en="Something went wrong, try again" tr="Bir hata oluştu, tekrar dene"/>
            : status === "sending"
            ? <T en="Sending…" tr="Gönderiliyor…"/>
            : <T en="Send message" tr="Mesaj gönder"/>}
        </button>
      </div>
    </form>
  );
}
