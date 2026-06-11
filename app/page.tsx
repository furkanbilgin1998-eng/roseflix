import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Search } from "lucide-react";
import { articles, categories, movies, reviews } from "@/data/content";
import { MovieCard, Newsletter, Score, SectionTitle } from "@/components/ui";
import { ArticleCard } from "@/components/article-card";

export default function Home(){
 const hero=movies[0];
 return <div>
  <section className="grain relative min-h-[82vh] overflow-hidden border-b border-white/10">
   <Image src={hero.backdrop} alt="" fill priority className="object-cover opacity-55"/>
   <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent"/><div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20"/>
   <div className="container-main relative flex min-h-[82vh] items-end pb-16 pt-24 md:items-center md:pb-0"><div className="max-w-3xl reveal">
    <p className="eyebrow mb-4">Roseflix Film of the Week</p><h1 className="display text-6xl font-semibold leading-[.92] md:text-8xl lg:text-[7rem]">Discover movies<br/><span className="font-medium text-blush">worth your time.</span></h1>
    <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 md:text-base">Thoughtful reviews, trusted ratings, and stories for people who believe choosing what to watch should feel as good as watching it.</p>
    <form action="/search" className="mt-8 flex max-w-xl items-center border border-white/20 bg-black/35 p-1.5 backdrop-blur-md"><Search className="ml-3 text-muted" size={18}/><input name="q" aria-label="Search" placeholder="What are you in the mood for?" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none"/><button className="bg-rose px-5 py-3 text-xs font-extrabold uppercase tracking-widest">Discover</button></form>
    <div className="mt-7 flex flex-wrap items-center gap-4"><Link href={`/movies/${hero.slug}`} className="inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-ink"><Play size={14} fill="currentColor"/>Read our review</Link><span className="text-xs text-white/60">{hero.title} · {hero.year}</span><Score value={hero.rating}/></div>
   </div></div>
  </section>
  <section className="container-main py-20"><SectionTitle eyebrow="Now & Noteworthy" title="Trending Movies" link="/reviews"/><div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">{movies.slice(0,5).map((m,i)=><MovieCard movie={m} index={i} key={m.slug}/>)}</div></section>
  <section className="bg-panel py-20"><div className="container-main"><SectionTitle eyebrow="Fresh From Our Critics" title="Latest Reviews" link="/reviews"/>
   <div className="grid gap-4 lg:grid-cols-2">{reviews.slice(0,4).map(({movie,excerpt,author})=><Link href={`/movies/${movie.slug}`} key={movie.slug} className="group grid grid-cols-[105px_1fr] gap-5 border border-white/10 bg-ink p-3 transition hover:border-rose/60 sm:grid-cols-[135px_1fr]"><div className="relative aspect-[2/3] overflow-hidden"><Image src={movie.poster} alt="" fill className="object-cover transition duration-500 group-hover:scale-105"/></div><div className="flex flex-col justify-center py-2"><Score value={movie.rating}/><h3 className="display mt-3 text-3xl font-semibold">{movie.title}</h3><p className="mt-2 line-clamp-2 text-xs leading-6 text-muted">{excerpt}</p><p className="mt-4 text-[10px] font-extrabold uppercase tracking-widest text-blush">By {author}</p></div></Link>)}</div>
  </div></section>
  <section className="container-main py-20"><SectionTitle eyebrow="Curated With Conviction" title="Editor's Picks"/><div className="grid gap-5 md:grid-cols-3">{movies.slice(5,8).map((m,i)=><Link key={m.slug} href={`/movies/${m.slug}`} className={`group relative min-h-[420px] overflow-hidden ${i===0?"md:col-span-2":""}`}><Image src={m.backdrop} alt="" fill className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/><div className="absolute bottom-0 p-6"><p className="eyebrow">Editor’s pick 0{i+1}</p><h3 className="display mt-2 text-5xl font-semibold">{m.title}</h3><p className="mt-2 max-w-md text-sm text-white/70">{m.verdict}</p></div></Link>)}</div></section>
  <section className="border-y border-white/10 bg-[#151515] py-20"><div className="container-main"><SectionTitle eyebrow="Browse By Mood" title="Find Your Next Film"/><div className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-4">{categories.map((c,i)=><Link key={c} href={`/categories?genre=${c}`} className="group border-b border-r border-white/10 p-6 transition hover:bg-rose md:p-8"><span className="text-xs text-muted group-hover:text-white/70">0{i+1}</span><h3 className="display mt-6 text-3xl font-semibold">{c}</h3><ArrowRight className="mt-4 text-rose transition group-hover:translate-x-2 group-hover:text-white" size={18}/></Link>)}</div></div></section>
  <section className="container-main py-20"><SectionTitle eyebrow="The Roseflix Journal" title="Stories About Cinema" link="/blog"/><ArticleCard article={articles[0]} wide/><div className="mt-10 grid gap-8 md:grid-cols-3">{articles.slice(1,4).map(a=><ArticleCard key={a.slug} article={a}/>)}</div></section>
  <Newsletter/>
 </div>
}
