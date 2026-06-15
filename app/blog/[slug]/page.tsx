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
      <header className="container-main py-16 text-center md:py-24">
        <p className="eyebrow">{a.category} · {a.read} <T en="read" tr="okuma"/></p>
        <h1 className="display mx-auto mt-5 max-w-4xl text-6xl font-semibold leading-[.9] md:text-8xl">{a.title}</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted">{a.excerpt}</p>
        <p className="mt-6 text-[10px] font-extrabold uppercase tracking-widest"><T en="By" tr="Yazan"/> Maya Ellis · June 8, 2026</p>
      </header>
      <div className="relative aspect-[16/8] max-h-[680px]"><Image src={a.image} alt="" fill priority className="object-cover"/></div>
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
