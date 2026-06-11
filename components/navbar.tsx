"use client";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const links=[["Reviews","/reviews"],["Categories","/categories"],["Journal","/blog"],["About","/about"]];
export function Navbar(){
 const [open,setOpen]=useState(false); const [search,setSearch]=useState(false);
 return <><header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl"><div className="container-main flex h-16 items-center justify-between">
  <Link href="/" className="display text-3xl font-bold tracking-tight">Rose<span className="text-rose">flix</span><span className="text-rose">.</span></Link>
  <nav className="hidden items-center gap-8 md:flex">{links.map(([n,h])=><Link key={n} href={h} className="text-xs font-bold uppercase tracking-[.16em] text-muted transition hover:text-white">{n}</Link>)}</nav>
  <div className="flex items-center gap-1"><button onClick={()=>setSearch(!search)} aria-label="Search" className="p-2.5 transition hover:text-blush"><Search size={19}/></button><Link href="/contact" className="hidden bg-white px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-ink transition hover:bg-blush sm:block">Get in touch</Link><button onClick={()=>setOpen(!open)} aria-label="Menu" className="p-2.5 md:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button></div>
 </div>{search&&<form action="/search" className="container-main flex border-t border-white/10 py-3"><input name="q" autoFocus placeholder="Search movies, reviews, and stories..." className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted"/></form>}
 {open&&<nav className="container-main grid gap-4 border-t border-white/10 py-5 md:hidden">{links.map(([n,h])=><Link onClick={()=>setOpen(false)} key={n} href={h} className="display text-3xl">{n}</Link>)}</nav>}
 </header></>
}
