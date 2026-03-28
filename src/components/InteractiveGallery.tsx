"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1607007355264-EQINP2XUZQO9PPNNDRZD/Aro%2BHa_0010-larger.jpg",
    title: "YOGA PLEJS",
    subtitle: "DUBOKA KONEKCIJA",
    poem: "Pronađi svoju unutarnju ravnotežu na Savskoj.",
    y: "0px",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/1689016059075-1XNS1TTR7ZL5W2KHO56V/image-asset.jpeg",
    title: "MOBILNOST",
    subtitle: "TEMELJ POKRETA",
    poem: "Razvoj funkcionalne fleksibilnosti kroz ugodan pokret.",
    y: "80px",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1607694644871-IC85FNH781UNZSZEGHDR/Aro+Ha_0428.jpg",
    title: "REPLEJS",
    subtitle: "UNUTARNJA ENERGIJA",
    poem: "Iskusi moć pilates reformera na Knežiji.",
    y: "-40px",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1618497259178-6XJGK9GR6YAVBQL5L519/20140301_Trade-151_012-2.jpg",
    title: "SNAGA",
    subtitle: "BIVANJE U TRENUTKU",
    poem: "Fokus na stabilnost centra i zdravlje kralježnice.",
    y: "40px",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/7364fe5e-fb73-4ea3-8b14-981ba52b2f3e/Untitled+design.jpg",
    title: "BALANS",
    subtitle: "KREIRANJE MIRA",
    poem: "Umirujući vinyasa flow koji vraća tijelo u ravnotežu.",
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
            <h2 className="text-5xl md:text-7xl font-serif text-stone-50 tracking-tight leading-[1.1] drop-shadow-none">
              Naša Cjelokupna <span className="italic text-brand-400 font-light mix-blend-screen">Ponuda</span>
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
      <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none -z-10 opacity-5 ${isEven ? 'left-0' : 'right-0'}`}>
         <h3 className="text-[15vw] font-serif text-brand-100/20 whitespace-nowrap hidden md:block">
            {item.title}
         </h3>
      </div>

      <div 
        className="w-full md:w-3/5 aspect-[4/5] object-cover relative overflow-hidden rounded-none md:rounded-none shadow-[0_20px_60px_rgba(181,159,125,0.15)] group"
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
        
        {/* Soft dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-stone-900/10 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none" />
      </div>

      <div className="w-full md:w-2/5 flex flex-col justify-center relative space-y-6 md:space-y-8 z-10 px-4 md:px-0">
         <span className="text-brand-400 font-sans tracking-[0.4em] uppercase text-xs flex items-center gap-4 before:h-[1px] before:w-12 before:bg-brand-500">
           Pogled 0{index + 1}
         </span>
         <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-50">
           {item.title}
         </h3>
         <p className="text-stone-300 font-light text-lg md:text-xl leading-relaxed italic">
           "{item.poem}"
         </p>
      </div>
    </motion.div>
  );
}
