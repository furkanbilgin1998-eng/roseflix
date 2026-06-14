import type { Metadata } from "next"; import { ArticleCard } from "@/components/article-card"; import { Newsletter } from "@/components/ui";
import { T } from "@/components/language";
import { getCmsContent } from "@/lib/cms";
export const metadata:Metadata={title:"Journal",description:"Features, rankings, interviews, and thoughtful stories about cinema."};
export default async function Blog(){const {articles}=await getCmsContent();return <><div className="container-main py-16 md:py-24"><p className="eyebrow"><T en="The Roseflix Journal" tr="Roseflix Dergi"/></p><h1 className="display mt-3 text-6xl font-semibold md:text-8xl"><T en="Cinema, considered." tr="Sinema, derinlemesine."/></h1><div className="rose-line mt-8"/><div className="mt-12"><ArticleCard article={articles[0]} wide/></div><div className="mt-14 grid gap-x-7 gap-y-12 md:grid-cols-2">{articles.slice(1).map(a=><ArticleCard article={a} key={a.slug}/>)}</div></div><Newsletter/></>}
