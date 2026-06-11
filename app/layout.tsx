import type { Metadata } from "next";
import { Exo_2, Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const display = Exo_2({ subsets:["latin"], variable:"--font-display", weight:["500","600","700","800"] });
const sans = Urbanist({ subsets:["latin"], variable:"--font-sans", weight:["400","500","600","700","800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://roseflix.example"),
  title: { default:"Roseflix — Discover movies worth your time.", template:"%s | Roseflix" },
  description:"Thoughtful reviews, trusted ratings, and stories for people who care about movies.",
  openGraph:{ title:"Roseflix", description:"Discover movies worth your time.", type:"website" }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable} font-[var(--font-sans)] antialiased`}><Navbar/><main>{children}</main><Footer/></body></html>;
}
