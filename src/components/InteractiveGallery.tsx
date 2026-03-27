"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80",
    title: "SVJESNOST",
    subtitle: "DUBOKA KONEKCIJA",
    poem: "Svaki pokret počinje iznutra.",
    y: "0px",
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80",
    title: "STRUKTURA",
    subtitle: "TEMELJ POKRETA",
    poem: "Pronaći oslonac u vlastitom tijelu.",
    y: "80px",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    title: "SNAGA",
    subtitle: "UNUTARNJA ENERGIJA",
    poem: "Mir koji rađa nezaustavljivu silu.",
    y: "-40px",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68266?auto=format&fit=crop&w=1200&q=80",
    title: "FOKUS",
    subtitle: "BIVANJE U TRENUTKU",
    poem: "Kroz otpuštanje dolazimo do biti.",
    y: "40px",
  },
  {
    src: "https://images.unsplash.com/photo-1552858725-2758b5fb1286?auto=format&fit=crop&w=1400&q=80",
    title: "MIR",
    subtitle: "KREIRANJE BALANSA",
    poem: "Tišina između dva udisaja.",
    y: "-80px",
  }
];

export default function InteractiveGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative z-20 py-32 md:py-48 w-full max-w-[1400px] mx-auto px-4 md:px-8 overflow-hidden">
      <div className="text-center mb-32">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
         >
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 tracking-tight leading-[1.1] drop-shadow-sm">
              Prirodan <span className="italic text-brand-700/80 font-light mix-blend-multiply">Tijek</span>
            </h2>
         </motion.div>
      </div>

      <div className="flex flex-col gap-24 md:gap-48 relative">
        {images.map((item, i) => (
          <GalleryCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Absolute faint background text */}
      <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none -z-10 mix-blend-multiply opacity-5 ${isEven ? 'left-0' : 'right-0'}`}>
         <h3 className="text-[15vw] font-serif text-brand-900/20 whitespace-nowrap hidden md:block">
            {item.title}
         </h3>
      </div>

      <div 
        className="w-full md:w-3/5 aspect-[4/5] object-cover relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(255,183,197,0.15)] group"
        style={{ transform: `translateY(${item.y})` }}
      >
        <motion.div 
          className="w-full h-full relative origin-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover filter sepia-[0.1] transition-all duration-1000 group-hover:sepia-0 group-hover:brightness-105"
            sizes="(max-width: 768px) 100vw, 60vw"
            quality={90}
          />
        </motion.div>
        
        {/* Soft pinkish vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFB7C5]/10 via-stone-900/5 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none" />
      </div>

      <div className="w-full md:w-2/5 flex flex-col justify-center relative space-y-6 md:space-y-8 z-10 px-4 md:px-0">
         <span className="text-[#FFB7C5] font-sans tracking-[0.4em] uppercase text-xs flex items-center gap-4 before:h-[1px] before:w-12 before:bg-[#FFB7C5]">
           Pogled 0{index + 1}
         </span>
         <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900">
           {item.title}
         </h3>
         <p className="text-stone-500 font-light text-lg md:text-xl leading-relaxed italic">
           "{item.poem}"
         </p>
      </div>
    </motion.div>
  );
}
