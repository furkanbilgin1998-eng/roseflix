"use client";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitch, T, useLanguage } from "@/components/language";

const links=[["Reviews","İncelemeler","/reviews"],["Categories","Kategoriler","/categories"],["Blog","Blog","/blog"],["Contact","İletişim","/contact"]];
export function Navbar(){
 const [open,setOpen]=useState(false); const [search,setSearch]=useState(false);
 const {language}=useLanguage();
 return <><header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl"><div className="container-main flex h-16 items-center justify-between">
  <Link href="/" className="display text-3xl font-bold tracking-tight">Rose<span className="text-rose">flix</span><span className="text-rose">.</span></Link>
  <nav className="hidden items-center gap-8 md:flex">{links.map(([en,tr,h])=><Link key={en} href={h} className="text-xs font-bold uppercase tracking-[.16em] text-muted transition hover:text-white"><T en={en} tr={tr}/></Link>)}</nav>
  <div className="flex items-center gap-1"><LanguageSwitch/><button onClick={()=>setSearch(!search)} aria-label="Search" className="p-2.5 transition hover:text-blush"><Search size={19}/></button><button onClick={()=>setOpen(!open)} aria-label="Menu" className="p-2.5 md:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button></div>
 </div>{search&&<form action="/search" className="container-main flex border-t border-white/10 py-3"><input name="q" autoFocus placeholder={language==="tr"?"Film, inceleme ve yazılarda ara...":"Search movies, reviews, and stories..."} aria-label="Search movies, reviews, and stories" className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted"/></form>}
 {open&&<nav className="container-main grid gap-4 border-t border-white/10 py-5 md:hidden">{links.map(([en,tr,h])=><Link onClick={()=>setOpen(false)} key={en} href={h} className="display text-3xl"><T en={en} tr={tr}/></Link>)}</nav>}
 </header></>
}
