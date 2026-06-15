import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/data/content";
import { MovieCard, Newsletter } from "@/components/ui";
import { T } from "@/components/language";
import { getCmsContent } from "@/lib/cms";
import { ArticleBody } from "@/components/article-body";

export function generateStaticParams(){return articles.map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params; const a=articles.find(x=>x.slug===slug);return{title:a?.title||"Blog",description:a?.excerpt}}
export default async function Article({params}:{params:Promise<{slug:string}>}){
  const {articles,movies}=await getCmsContent();
  const {slug}=await params;
  const a=articles.find(x=>x.slug===slug) as (typeof articles)[number]&{bodyEn?:string;bodyTr?:string};
  if(!a)notFound();
  return <>
    <article>
      <header className="relative min-h-[68vh] overflow-hidden">
        <Image src={a.image} alt="" fill priority className="object-cover opacity-60"/>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-black/20"/>
        <div className="container-main relative flex min-h-[68vh] items-end pb-14 pt-24">
          <div className="max-w-3xl">
            <p className="eyebrow">{a.category} · {a.read} <T en="read" tr="okuma"/></p>
            <h1 className="display mt-4 text-5xl font-semibold leading-[.92] md:text-7xl lg:text-8xl">{a.title}</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">{a.excerpt}</p>
            <p className="mt-5 text-[10px] font-extrabold uppercase tracking-widest text-white/50"><T en="By" tr="Yazan"/> Gül Erçolak</p>
          </div>
        </div>
      </header>
      <div className="container-main grid py-14 lg:grid-cols-[1fr_2fr_1fr]">
        <div className="hidden lg:block">
          <p className="eyebrow"><T en="Filed under" tr="Kategori"/></p>
          <p className="mt-2 text-sm text-muted">{a.category}</p>
        </div>
        <ArticleBody
          en={a.bodyEn||"Great films do more than hold our attention. They change the temperature of a room, then follow us into the night.\n\nThis year's most compelling work shares a willingness to take its time. Rankings are useful; conversation is better."}
          tr={a.bodyTr||"Harika filmler yalnızca dikkatimizi çekmez. Odanın atmosferini değiştirir ve gece boyunca bizimle gelir.\n\nBu yılın en etkileyici işleri zaman ayırmaktan çekinmiyor. Sıralamalar faydalı; sohbet daha iyi."}
        />
      </div>
    </article>
    <section className="container-main pb-12"><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{movies.slice(0,5).map(m=><MovieCard key={m.slug} movie={m}/>)}</div></section>
    <Newsletter/>
  </>;
}
