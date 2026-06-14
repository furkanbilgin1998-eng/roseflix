import Link from "next/link";
import Image from "next/image";
import { MovieCard, Newsletter, Score, SectionTitle } from "@/components/ui";
import { ArticleCard } from "@/components/article-card";
import { T } from "@/components/language";
import { HeroCarousel } from "@/components/hero-carousel";
import { getCmsContent } from "@/lib/cms";

export default async function Home(){
 const {heroSlides,movies,reviews,articles}=await getCmsContent();
 return <div>
  <HeroCarousel slides={heroSlides}/>
  <section className="container-main py-20"><SectionTitle eyebrow={<T en="Now & Noteworthy" tr="Şimdi Gündemde"/>} title={<T en="Trending Movies" tr="Popüler Filmler"/>} link="/reviews"/><div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">{movies.slice(0,5).map((m,i)=><MovieCard movie={m} index={i} key={m.slug}/>)}</div></section>
  <section className="bg-panel py-20"><div className="container-main"><SectionTitle eyebrow={<T en="Fresh From Our Critics" tr="Eleştirmenlerimizden Yeni"/>} title={<T en="Latest Reviews" tr="Son İncelemeler"/>} link="/reviews"/>
   <div className="grid gap-4 lg:grid-cols-2">{reviews.slice(0,4).map(({movie,excerpt,author})=><Link href={`/movies/${movie.slug}`} key={movie.slug} className="group grid grid-cols-[105px_1fr] gap-5 border border-white/10 bg-ink p-3 transition hover:border-rose/60 sm:grid-cols-[135px_1fr]"><div className="relative aspect-[2/3] overflow-hidden"><Image src={movie.poster} alt="" fill className="object-cover transition duration-500 group-hover:scale-105"/></div><div className="flex flex-col justify-center py-2"><Score value={movie.rating}/><h3 className="display mt-3 text-3xl font-semibold">{movie.title}</h3><p className="mt-2 line-clamp-2 text-xs leading-6 text-muted"><T en={excerpt} tr={`${movie.title}, iddialı fikrini karakterlerin seçimleri üzerine özenle işlenmiş bir hikâyeye dönüştürüyor.`}/></p><p className="mt-4 text-[10px] font-extrabold uppercase tracking-widest text-blush"><T en="By" tr="Yazan"/> {author}</p></div></Link>)}</div>
  </div></section>
  <section className="container-main py-20"><SectionTitle eyebrow={<T en="The Roseflix Journal" tr="Roseflix Dergi"/>} title={<T en="Stories About Cinema" tr="Sinemaya Dair Hikâyeler"/>} link="/blog"/><ArticleCard article={articles[0]} wide/><div className="mt-10 grid gap-8 md:grid-cols-3">{articles.slice(1,4).map(a=><ArticleCard key={a.slug} article={a}/>)}</div></section>
  <Newsletter/>
 </div>
}
