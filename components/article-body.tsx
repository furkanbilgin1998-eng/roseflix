"use client";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useLanguage } from "@/components/language";

export function ArticleBody({ en, tr }: { en: string; tr: string }) {
  const { language } = useLanguage();
  const body = language === "tr" ? en : en;

  return (
    <div className="prose-roseflix">
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="mt-6 text-base leading-7 text-white/80">{children}</p>,
          h2: ({ children }) => <h2 className="display mt-10 text-3xl font-semibold text-white">{children}</h2>,
          h3: ({ children }) => <h3 className="mt-8 text-xl font-bold text-white">{children}</h3>,
          strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
          ul: ({ children }) => <ul className="mt-4 space-y-2 pl-5">{children}</ul>,
          li: ({ children }) => <li className="text-sm leading-7 text-white/75 list-disc">{children}</li>,
          img: ({ src }) => src && typeof src === "string" ? (
            <span className="my-8 block">
              <span className="relative block overflow-hidden rounded-sm leading-[0]">
                <Image
                  src={src}
                  alt=""
                  width={700}
                  height={400}
                  className="w-full object-cover"
                />
                <span className="absolute inset-0" style={{background:"linear-gradient(to bottom, rgba(18,18,18,0.10) 0%, rgba(18,18,18,0.32) 100%)"}}/>
              </span>
            </span>
          ) : null,
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
