import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import SmoothScroll from "@/components/SmoothScroll";
import FilmGrain from "@/components/FilmGrain";

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apolon Centar | Zdravlje Osobni Rast Pokret Zagreb",
  description: "Tradicija u rekreaciji, yogi i holističkom radu od 2006. godine. Nađite svoj mir u srcu Zagreba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body
        className={`${sans.variable} ${serif.variable} font-sans antialiased bg-stone-50 text-stone-900 selection:bg-brand-200 selection:text-brand-900 flex flex-col min-h-screen md:cursor-none`}
      >
        <FilmGrain />
        <InteractiveCanvas />
        <CursorGlow />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow flex flex-col pt-16 md:pt-24">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
