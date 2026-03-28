"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const programs = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1607007355264-EQINP2XUZQO9PPNNDRZD/Aro%2BHa_0010-larger.jpg",
    title: "YOGA PLEJS",
    category: "SAVSKA 141",
    poem: "Pronađi svoju unutarnju ravnotežu na Savskoj.",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/1689016059075-1XNS1TTR7ZL5W2KHO56V/image-asset.jpeg",
    title: "MOBILNOST",
    category: "VITALNOST",
    poem: "Razvoj funkcionalne fleksibilnosti kroz ugodan pokret.",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1607694644871-IC85FNH781UNZSZEGHDR/Aro+Ha_0428.jpg",
    title: "REPLEJS",
    category: "KNEŽIJA 9",
    poem: "Iskusi moć pilates reformera i core stabilnosti.",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/7364fe5e-fb73-4ea3-8b14-981ba52b2f3e/Untitled+design.jpg",
    title: "BALANS",
    category: "SINKRONIZACIJA",
    poem: "Umirujući vinyasa flow koji vraća tijelo u ravnotežu.",
  }
];

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); // Matches 4 items

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-stone-50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Background massive typography */}
        <div className="absolute top-24 left-8 md:left-24 z-0 pointer-events-none">
          <motion.h2 
            className="text-stone-200 text-6xl md:text-[10rem] font-serif tracking-tighter"
            style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
          >
            Iskusi Praksu
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex h-screen w-[400vw] z-10">
          {programs.map((item, idx) => (
            <div key={idx} className="w-[100vw] h-full flex items-center justify-center p-8 md:p-24 relative group">
              
              {/* Minimalist numbering behind image */}
              <div className="absolute bottom-16 right-16 z-0">
                 <span className="text-[15rem] md:text-[25rem] text-stone-100 font-serif leading-none select-none">
                    0{idx + 1}
                 </span>
              </div>

              {/* Strict, edge-cut image frame (No borders, no curves) */}
              <div className="relative w-full h-full max-h-[80vh] overflow-hidden bg-stone-100 flex shadow-[0_20px_60px_rgba(26,25,23,0.05)]">
                 <motion.div 
                   className="w-full h-full md:w-2/3 relative"
                   style={{
                     scale: useTransform(scrollYProgress, 
                        [Math.max(0, (idx - 0.5) / 4), idx / 4, Math.min(1, (idx + 0.5) / 4)],
                        [1.1, 1, 1.1]
                     )
                   }}
                 >
                   <Image 
                     src={item.src} 
                     alt={item.title} 
                     fill 
                     className="object-cover filter sepia-[0.1] saturate-[0.8] group-hover:saturate-100 group-hover:sepia-0 transition-all duration-1000" 
                     sizes="(max-width: 768px) 100vw, 66vw"
                   />
                 </motion.div>

                 {/* Editorial Text Block side-by-side on desktop */}
                 <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-8 md:p-12 md:relative md:w-1/3 md:inset-auto md:bg-transparent md:backdrop-blur-none flex flex-col justify-end md:justify-center text-stone-900 border-l border-stone-200/50">
                    <span className="text-brand-500 text-xs tracking-[0.4em] uppercase font-medium mb-6 block relative before:absolute before:-left-6 before:top-1/2 before:w-4 before:h-px before:bg-brand-500">
                      {item.category}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 tracking-tighter leading-[0.9]">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl font-light italic text-stone-500 leading-relaxed border-t border-stone-200 pt-6">
                      "{item.poem}"
                    </p>
                 </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
