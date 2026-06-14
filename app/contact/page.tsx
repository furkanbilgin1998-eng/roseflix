import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { T } from "@/components/language";
export const metadata:Metadata={title:"Contact",description:"Contact Roseflix for editorial pitches, partnerships, and advertising."};
export default function Contact(){return <div className="container-main grid gap-12 py-20 md:grid-cols-[1fr_1.2fr] md:py-28"><div><p className="eyebrow"><T en="Contact" tr="İletişim"/></p><h1 className="display mt-4 text-6xl font-semibold leading-[.9] md:text-8xl"><T en="Let’s talk about movies." tr="Biraz sinema konuşalım."/></h1><p className="mt-6 max-w-md text-sm leading-7 text-muted"><T en="For editorial pitches, partnerships, advertising, or a simple hello, drop us a note." tr="Yazı önerileri, iş birlikleri, reklam veya yalnızca merhaba demek için bize yazın."/></p><p className="mt-10 text-xs font-bold uppercase tracking-widest text-blush">hello@roseflix.com</p></div><ContactForm/></div>}
