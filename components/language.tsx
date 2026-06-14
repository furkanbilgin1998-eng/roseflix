"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "tr";
const LanguageContext = createContext<{ language:Language; setLanguage:(language:Language)=>void }>({ language:"en", setLanguage:()=>{} });

export function LanguageProvider({children}:{children:React.ReactNode}) {
  const [language,setLanguage]=useState<Language>("en");
  useEffect(()=>{
    const saved=window.localStorage.getItem("roseflix-language") as Language | null;
    if(saved==="tr"||saved==="en") setLanguage(saved);
  },[]);
  useEffect(()=>{
    document.documentElement.lang=language;
    window.localStorage.setItem("roseflix-language",language);
  },[language]);
  return <LanguageContext.Provider value={{language,setLanguage}}>{children}</LanguageContext.Provider>;
}

export function useLanguage(){return useContext(LanguageContext);}
export function T({en,tr}:{en:React.ReactNode;tr:React.ReactNode}) {
  const {language}=useLanguage();
  return <>{language==="tr"?tr:en}</>;
}

export function LanguageSwitch(){
  const {language,setLanguage}=useLanguage();
  return <div className="flex items-center rounded-full border border-white/15 bg-black/20 p-0.5 text-[9px] font-extrabold tracking-widest">
    {(["en","tr"] as Language[]).map(item=><button key={item} onClick={()=>setLanguage(item)} aria-label={item==="en"?"Switch to English":"Türkçeye geç"} className={`rounded-full px-2 py-1.5 uppercase transition ${language===item?"bg-white text-ink":"text-muted hover:text-white"}`}>{item}</button>)}
  </div>
}

export function LocalizedSearchInput({className}:{className?:string}) {
  const {language}=useLanguage();
  return <input name="q" aria-label={language==="tr"?"Ara":"Search"} placeholder={language==="tr"?"Nasıl bir film arıyorsun?":"What are you in the mood for?"} className={className}/>;
}
