import type { MetadataRoute } from "next";
import { getCmsContent } from "@/lib/cms";
export default async function sitemap():Promise<MetadataRoute.Sitemap> {
 const {articles,movies}=await getCmsContent();
 const root="https://roseflix.com.tr";
 const pages=["","/reviews","/blog","/categories","/contact","/search"];
 return [
  ...pages.map(url=>({url:`${root}${url}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:url===""?1:.7})),
  ...movies.map(m=>({url:`${root}/movies/${m.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8})),
  ...articles.map(a=>({url:`${root}/blog/${a.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.7}))
 ];
}
