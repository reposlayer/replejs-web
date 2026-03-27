"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0 bg-stone-900"
      >
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=80"
          alt="Tristana Studio"
          fill
          className="object-cover opacity-50 mix-blend-screen"
          priority
        />
        {/* Soft elegant gradient from dark to light to transition into page body */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/40 to-stone-50" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl px-4 text-center flex flex-col items-center mt-12">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="w-px h-16 bg-gradient-to-b from-transparent to-brand-300/50 mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-brand-300 font-sans tracking-[0.4em] uppercase text-xs mb-8 flex items-center gap-4">
            Evolucija Tijela i Uma
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-serif text-white mb-6 leading-[0.9] tracking-tight text-center drop-shadow-2xl">
            Sklad u <br className="hidden md:block"/>
            <span className="italic font-light text-brand-200">Pokretu</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-stone-300 max-w-2xl font-light leading-relaxed mb-12 mix-blend-screen">
            Preoblikujte svoju svakodnevicu usvojivši vještine koje oslobađaju anatomiju od stresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Magnetic>
              <Link
                href="/programi"
                className="group relative px-10 py-5 bg-white text-stone-900 text-xs tracking-[0.2em] uppercase font-bold rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-500 block"
              >
                <div className="absolute inset-0 bg-brand-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 flex items-center gap-3">
                  Istražite Rad <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            </Magnetic>
            
            <Magnetic>
              <Link
                href="/raspored"
                className="group relative px-8 py-5 bg-transparent text-white text-xs tracking-[0.2em] uppercase font-medium rounded-full overflow-hidden transition-all duration-300 block opacity-80 hover:opacity-100"
              >
                <span className="relative z-10 flex items-center gap-3 border-b border-transparent group-hover:border-white transition-colors pb-1">
                  Vidi Raspored
                </span>
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
