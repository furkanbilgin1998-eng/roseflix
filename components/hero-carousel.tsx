"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, Search } from "lucide-react";
import { useEffect, useState } from "react";
import type { HeroSlide } from "@/lib/cms";
import { LocalizedSearchInput, useLanguage } from "@/components/language";

export function HeroCarousel({slides}:{slides:HeroSlide[]}){
  const [active,setActive]=useState(0);
  const {language}=useLanguage();
  useEffect(()=>{const timer=setInterval(()=>setActive(current=>(current+1)%slides.length),7000);return()=>clearInterval(timer)},[slides.length]);
  const slide=slides[active];
  const move=(direction:number)=>setActive(current=>(current+direction+slides.length)%slides.length);
  if(!slide)return null;
  return <section className="grain relative min-h-[82vh] overflow-hidden border-b border-white/10">
    {slides.map((item,index)=><Image key={item.id} src={item.image} alt="" fill priority={index===0} sizes="100vw" className={`object-cover transition-all duration-1000 ${index===active?"scale-100 opacity-65":"scale-105 opacity-0"}`}/>)}
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/30"/><div className="absolute inset-0 bg-black/20"/>
    <div className="container-main relative flex min-h-[88vh] items-center justify-center pb-32 pt-24 text-center md:min-h-[82vh] md:pb-20"><div key={slide.id} className="mx-auto max-w-4xl">
      <p className="eyebrow hero-title mb-5">{language==="tr"?slide.eyebrowTr:slide.eyebrowEn}</p>
      <h1 className="display hero-title text-6xl font-semibold leading-[.92] md:text-8xl lg:text-[7rem]">{language==="tr"?slide.titleTr:slide.titleEn}<br/><span className="font-medium text-blush">{language==="tr"?slide.accentTr:slide.accentEn}</span></h1>
      <p className="hero-copy mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75 md:text-base">{language==="tr"?slide.descriptionTr:slide.descriptionEn}</p>
      <form action="/search" className="hero-actions mx-auto mt-8 flex max-w-xl items-center border border-white/20 bg-black/45 p-1.5 backdrop-blur-xl"><Search className="ml-3 shrink-0 text-muted" size={18}/><LocalizedSearchInput className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none"/><button className="shrink-0 bg-rose px-4 py-3 text-xs font-extrabold uppercase tracking-widest sm:px-5">{language==="tr"?"Keşfet":"Discover"}</button></form>
      <div className="hero-actions mt-7 flex items-center justify-center"><Link href={`/movies/${slide.movieSlug}`} className="inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-ink transition hover:bg-blush"><Play size={14} fill="currentColor"/>{language==="tr"?"İncelemeyi oku":"Read our review"}</Link></div>
    </div></div>
    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3"><button onClick={()=>move(-1)} aria-label="Previous slide" className="border border-white/20 bg-black/30 p-2 backdrop-blur hover:border-white"><ChevronLeft size={17}/></button><div className="flex gap-2">{slides.map((item,index)=><button key={item.id} onClick={()=>setActive(index)} aria-label={`Slide ${index+1}`} className={`h-1 transition-all ${index===active?"w-10 bg-rose":"w-5 bg-white/35"}`}/>)}</div><button onClick={()=>move(1)} aria-label="Next slide" className="border border-white/20 bg-black/30 p-2 backdrop-blur hover:border-white"><ChevronRight size={17}/></button></div>
  </section>
}
