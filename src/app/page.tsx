"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import SplitHero from "@/components/SplitHero";
import HorizontalScroll from "@/components/HorizontalScroll";

function TextReveal({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", rotate: 2 }}
        whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="origin-bottom-left"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen selection:bg-brand-400 selection:text-white pb-0 bg-stone-50 overflow-x-clip w-full">
      
      {/* 1. Split Hero Section (Yoga vs Pilates) */}
      <SplitHero />

      {/* 2. Bespoke Editorial Statement */}
      <section ref={containerRef} className="relative z-20 py-48 md:py-64 px-4 w-full flex flex-col items-center justify-center text-center bg-stone-50 border-t border-stone-200 border-b">
         
         {/* Very subtle kinfolk aesthetic backdrop grain overlay if needed, currently pure minimal */}

         <span className="text-stone-400 font-sans tracking-[0.4em] uppercase text-xs mb-12 flex items-center justify-center gap-4 before:h-px before:w-16 before:bg-stone-300 after:h-px after:w-16 after:bg-stone-300 z-10 relative">
            Filozofija Pokreta
         </span>
         
         <h2 className="text-[10vw] md:text-[8vw] font-serif text-stone-900 leading-[0.8] tracking-tighter mb-16 z-10 relative mix-blend-multiply">
           <TextReveal>Triljardu</TextReveal>
           <TextReveal><span className="italic font-light text-brand-500 block pr-[4vw]">mogućnosti.</span></TextReveal>
           <TextReveal><span className="ml-[6vw]">Jedan ti.</span></TextReveal>
         </h2>

         <motion.p 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="text-lg md:text-2xl text-stone-500 max-w-3xl mx-auto font-light leading-relaxed z-10 relative px-4"
         >
           Replejs i Yogaplejs zajedno čine autentični prostor u Zagrebu. Ne samo za trening, već za povratak vlastitom balansu. Ovdje tradicija stvara vaš novi habitus.
         </motion.p>
      </section>

      {/* 3. Horizontal Scroll Section (Awwwards Style) */}
      <div className="relative z-20 w-full mt-[-2px]">
        <HorizontalScroll />
      </div>

      {/* 4. Luxury Light Mode Links */}
      <section className="relative z-20 py-48 px-6 max-w-7xl mx-auto bg-stone-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-stone-200 pb-12">
           <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none tracking-tight">
             Nema <span className="italic text-stone-400">isprika.<br /></span>Samo <span className="underline decoration-1 underline-offset-8 decoration-stone-300">praksa.</span>
           </h2>
           <Link href="/raspored" className="group inline-flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-stone-900 hover:text-brand-600 hover:gap-6 transition-all duration-500 pb-2">
             Pogledaj Raspored <MoveRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
           >
               <Link href="/o-nama" className="group block w-full aspect-[4/3] bg-stone-100 p-12 relative overflow-hidden flex flex-col justify-between hover:bg-stone-200 transition-colors duration-700">
                 <div className="flex justify-between items-start">
                   <h3 className="text-3xl md:text-5xl font-serif text-stone-900 z-10 relative mb-4">Naša Filozofija</h3>
                   <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white transition-all duration-700 z-10 group-hover:-rotate-45">
                     <MoveRight size={20} />
                   </div>
                 </div>
                 <p className="text-stone-500 font-light max-w-sm z-10 relative group-hover:text-stone-900 transition-colors">Upoznajte snagu 11 godina iskustva kroz prizmu naših osnivača.</p>
               </Link>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, delay: 0.2 }}
           >
               <Link href="/kontakt" className="group block w-full aspect-[4/3] bg-stone-900 p-12 relative overflow-hidden flex flex-col justify-between hover:bg-brand-700 transition-colors duration-700 mt-8 md:mt-0">
                 <div className="flex justify-between items-start">
                   <h3 className="text-3xl md:text-5xl font-serif text-stone-50 z-10 relative mb-4">Rezerviraj Mjesto</h3>
                   <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 group-hover:bg-white group-hover:border-white group-hover:text-stone-900 transition-all duration-700 z-10 group-hover:-rotate-45">
                     <MoveRight size={20} />
                   </div>
                 </div>
                 <p className="text-stone-400 font-light max-w-sm z-10 relative group-hover:text-stone-900 transition-colors">Broj mjesta u grupama je strogo ograničen. Rezerviraj svoje odmah.</p>
               </Link>
           </motion.div>
        </div>
      </section>

    </div>
  );
}
