import type { MetadataRoute } from "next";
import { articles, movies } from "@/data/content";
export default function sitemap():MetadataRoute.Sitemap {
 const root="https://roseflix.example";
 const pages=["","/reviews","/blog","/categories","/about","/contact","/search"];
 return [
  ...pages.map(url=>({url:`${root}${url}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:url===""?1:.7})),
  ...movies.map(m=>({url:`${root}/movies/${m.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8})),
  ...articles.map(a=>({url:`${root}/blog/${a.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.7}))
 ];
}
