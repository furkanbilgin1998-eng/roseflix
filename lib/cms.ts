import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { articles, categories, movies, reviews } from "@/data/content";

export type HeroSlide = {
  id:string;
  eyebrowEn:string;
  eyebrowTr:string;
  titleEn:string;
  titleTr:string;
  accentEn:string;
  accentTr:string;
  descriptionEn:string;
  descriptionTr:string;
  image:string;
  movieSlug:string;
};

export type CmsContent = {
  heroSlides:HeroSlide[];
  movies:typeof movies;
  reviews:typeof reviews;
  articles:typeof articles;
  categories:string[];
};

const contentPath=path.join(process.cwd(),"data","cms-content.json");

const defaults: CmsContent = {
  heroSlides:[
    {
      id:"velvet-night",
      eyebrowEn:"Roseflix Film of the Week", eyebrowTr:"Roseflix Haftanın Filmi",
      titleEn:"Stories that stay", titleTr:"Aklında kalan",
      accentEn:"after the credits.", accentTr:"hikâyeleri keşfet.",
      descriptionEn:"Thoughtful reviews, trusted ratings, and cinema worth talking about.",
      descriptionTr:"Özenli incelemeler, güvenilir puanlar ve konuşmaya değer filmler.",
      image:movies[1].backdrop, movieSlug:movies[1].slug
    },
    {
      id:"after-the-tide",
      eyebrowEn:"New & Noteworthy", eyebrowTr:"Yeni ve Dikkate Değer",
      titleEn:"Find your next", titleTr:"Sıradaki favorini",
      accentEn:"favorite film.", accentTr:"burada bul.",
      descriptionEn:"Independent criticism and sharp curation for curious movie lovers.",
      descriptionTr:"Meraklı sinemaseverler için bağımsız eleştiri ve güçlü seçkiler.",
      image:movies[2].backdrop, movieSlug:movies[2].slug
    },
    {
      id:"city-of-small-hours",
      eyebrowEn:"Roseflix Selects", eyebrowTr:"Roseflix Seçkisi",
      titleEn:"Cinema for the", titleTr:"Geceye eşlik eden",
      accentEn:"small hours.", accentTr:"filmler.",
      descriptionEn:"Hidden gems, bold debuts, and films that deserve a wider audience.",
      descriptionTr:"Saklı cevherler, cesur ilk filmler ve daha geniş bir seyirciyi hak eden yapımlar.",
      image:movies[19].backdrop, movieSlug:movies[19].slug
    }
  ],
  movies,reviews,articles,categories
};

export async function getCmsContent():Promise<CmsContent>{
  try {
    const saved=JSON.parse(await fs.readFile(contentPath,"utf8")) as Partial<CmsContent>;
    return {...defaults,...saved};
  } catch {
    return defaults;
  }
}
