import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/content";

export function ArticleCard({article,wide=false}:{article:(typeof articles)[number],wide?:boolean}){
 return <Link href={`/blog/${article.slug}`} className={`article-card group block ${wide?"md:grid md:grid-cols-2 md:gap-6":""}`}>
  <div className={`relative overflow-hidden bg-card ${wide?"aspect-[16/10]":"aspect-[4/3]"}`}><Image src={article.image} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 550px"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/></div>
  <div className={wide?"py-5 md:flex md:flex-col md:justify-center":"pt-4"}><p className="eyebrow">{article.category} · {article.read}</p><h3 className={`display mt-2 font-semibold leading-[.95] transition group-hover:text-blush ${wide?"text-4xl lg:text-5xl":"text-3xl"}`}>{article.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{article.excerpt}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest">Read story <ArrowUpRight size={14}/></span></div>
 </Link>
}
