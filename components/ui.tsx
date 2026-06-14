import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import type { Movie } from "@/data/content";
import { T } from "@/components/language";

export function SectionTitle({eyebrow,title,link}:{eyebrow?:React.ReactNode,title:React.ReactNode,link?:string}) {
  return <div className="mb-7 flex items-end justify-between gap-5 border-b border-white/10 pb-4">
    <div>{eyebrow&&<p className="eyebrow mb-2">{eyebrow}</p>}<h2 className="display text-4xl font-semibold md:text-5xl">{title}</h2></div>
    {link&&<Link href={link} className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted transition hover:text-white sm:flex"><T en="View all" tr="Tümünü gör"/> <ArrowUpRight size={15}/></Link>}
  </div>
}

export function Score({value,large=false}:{value:number,large?:boolean}) {
  return <span className={`inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 font-extrabold text-ink shadow-lg ${large?"text-base":"text-xs"}`}><Star size={12} fill="#E11D48" color="#E11D48"/>{value.toFixed(1)}</span>
}

export function MovieCard({movie,index=0}:{movie:Movie,index?:number}) {
  return <Link href={`/movies/${movie.slug}`} className="poster-card group block reveal" style={{animationDelay:`${index*60}ms`}}>
    <div className="relative aspect-[2/3] overflow-hidden rounded-sm bg-card">
      <Image src={movie.poster} alt={`${movie.title} poster`} fill sizes="(max-width: 640px) 46vw, 230px" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"/>
      <div className="absolute left-3 top-3"><Score value={movie.rating}/></div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-rose transition-all duration-500 group-hover:w-full"/>
    </div>
    <h3 className="mt-3 font-bold leading-tight transition group-hover:text-blush">{movie.title}</h3>
    <p className="mt-1 text-xs text-muted">{movie.year} · {movie.genres[0]}</p>
  </Link>
}

export function Newsletter() {
  return <section className="container-main my-24 overflow-hidden border border-white/10 bg-panel px-6 py-12 text-center md:px-16 md:py-16">
    <p className="eyebrow mb-4"><T en="The Sunday Cut" tr="Pazar Seçkisi"/></p><h2 className="display text-4xl font-semibold md:text-6xl"><T en="Better movies. Fewer scrolls." tr="Daha iyi filmler. Daha az kaydırma."/></h2>
    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted"><T en="A thoughtful weekly edit of new releases, hidden gems, and criticism worth reading. No noise, just cinema." tr="Yeni filmler, saklı cevherler ve okumaya değer eleştirilerden oluşan haftalık seçki. Gürültü yok, sadece sinema."/></p>
    <form className="mx-auto mt-8 flex max-w-lg flex-col gap-2 sm:flex-row"><input aria-label="Email address" type="email" placeholder="you@email.com" className="min-w-0 flex-1 border border-white/10 bg-ink px-5 py-3.5 text-sm outline-none transition focus:border-rose"/><button className="bg-rose px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest transition hover:bg-blush"><T en="Join free" tr="Ücretsiz katıl"/></button></form>
  </section>
}
