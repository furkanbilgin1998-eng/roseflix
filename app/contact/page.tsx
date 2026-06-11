import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
export const metadata:Metadata={title:"Contact",description:"Contact Roseflix for editorial pitches, partnerships, and advertising."};
export default function Contact(){return <div className="container-main grid gap-12 py-20 md:grid-cols-[1fr_1.2fr] md:py-28"><div><p className="eyebrow">Contact</p><h1 className="display mt-4 text-6xl font-semibold leading-[.9] md:text-8xl">Let’s talk about movies.</h1><p className="mt-6 max-w-md text-sm leading-7 text-muted">For editorial pitches, partnerships, advertising, or a simple hello, drop us a note.</p><p className="mt-10 text-xs font-bold uppercase tracking-widest text-blush">hello@roseflix.com</p></div><ContactForm/></div>}
