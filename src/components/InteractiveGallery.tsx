"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80",
    title: "SVJESNOST",
    subtitle: "DUBOKA KONEKCIJA",
    num: "01",
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80",
    title: "STRUKTURA",
    subtitle: "TEMELJ POKRETA",
    num: "02",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    title: "SNAGA",
    subtitle: "UNUTARNJA ENERGIJA",
    num: "03",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68266?auto=format&fit=crop&w=1200&q=80",
    title: "FOKUS",
    subtitle: "BIVANJE U TRENUTKU",
    num: "04",
  },
  {
    src: "https://images.unsplash.com/photo-1552858725-2758b5fb1286?auto=format&fit=crop&w=1400&q=80",
    title: "MIR",
    subtitle: "KREIRANJE BALANSA",
    num: "05",
  }
];

export default function InteractiveGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative z-20 py-24 md:py-40 w-full max-w-[1600px] mx-auto px-4 md:px-8">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-8">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
           className="max-w-2xl"
         >
            <span className="text-brand-600 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center gap-4 before:h-[2px] before:w-16 before:bg-brand-300">
               Vizualno Putovanje
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 tracking-tight leading-[1.1]">
              Umjetnost <span className="italic text-brand-700 font-light pr-4">Pokreta</span>
            </h2>
         </motion.div>
      </div>

      {/* The Flex Accordion Container */}
      {/* On mobile it's a vertical accordion (flex-col), on desktop horizontal (flex-row) */}
      <motion.div 
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 1.2, delay: 0.2 }}
         className="flex flex-col md:flex-row h-[70vh] md:h-[650px] lg:h-[750px] w-full gap-2 md:gap-4"
      >
        {images.map((item, i) => {
          const isActive = hovered === i;
          const isNeutral = hovered === null;

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              // Native simulation of hover expanding on mobile/touch interfaces
              onClick={() => setHovered(isActive ? null : i)}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl cursor-none group min-w-0 min-h-0"
              style={{
                // flex formula: "flexGrow flexShrink flexBasis"
                // This ensures perfectly smooth distribution in both width (desktop) and height (mobile)
                flex: isActive ? "5 1 0%" : isNeutral ? "1 1 0%" : "0.5 1 0%",
                transition: "flex 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s",
              }}
            >
              <div className="w-full h-full relative">
                 <Image
                   src={item.src}
                   alt={item.title}
                   fill
                   className={`object-cover transition-transform duration-[1200ms] ease-[0.16,1,0.3,1] origin-center
                     ${isActive ? 'scale-105' : 'scale-100 grayscale-[40%] group-hover:grayscale-0'}`}
                   sizes="(max-width: 768px) 100vw, 50vw"
                   quality={90}
                 />
                 
                 {/* Darkening overlays to ensure text readability */}
                 <div className={`absolute inset-0 bg-stone-900 transition-opacity duration-1000 ${isActive ? 'opacity-10' : 'opacity-40'}`} />
                 
                 {/* Bottom gradient fade for text */}
                 <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent transition-opacity duration-1000 ${isNeutral ? 'opacity-70' : 'opacity-90'}`} />
              </div>

              {/* Minimal Section Number */}
              <div className="absolute top-6 left-6 text-white/70 font-sans text-xs md:text-sm tracking-[0.3em] font-medium mix-blend-overlay">
                 {item.num}
              </div>

              {/* Content Panel (Bottom Left) */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="flex-1 overflow-hidden min-w-0">
                    <h3 
                      className="text-white font-serif text-3xl md:text-4xl lg:text-5xl mb-1 md:mb-2 truncate transition-transform duration-[800ms] ease-[0.16,1,0.3,1] origin-left"
                      style={{
                        transform: isActive ? "scale(1)" : isNeutral ? "scale(0.85)" : "scale(0.85) translateX(-10px)",
                        opacity: isActive ? 1 : isNeutral ? 0.9 : 0.4
                      }}
                    >
                      {item.title}
                    </h3>
                    
                    {/* Collapsible Subtitle Wrapper */}
                    <div 
                      className="overflow-hidden transition-all duration-[800ms] ease-[0.16,1,0.3,1]"
                      style={{ 
                         // Animate max-height to flawlessly slide text in and out
                         maxHeight: isActive ? "50px" : "0px",
                         opacity: isActive ? 1 : 0,
                         transform: isActive ? "translateY(0px)" : "translateY(15px)"
                      }}
                    >
                      <p className="text-brand-200 font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase py-1 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Interactive Floating Button */}
                  <div 
                     className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex flex-shrink-0 items-center justify-center transition-all duration-[800ms] ease-[0.16,1,0.3,1]"
                     style={{
                        transform: isActive ? "rotate(-45deg) scale(1)" : "rotate(0deg) scale(0)",
                        opacity: isActive ? 1 : 0
                     }}
                  >
                     <MoveRight className="text-white" size={20} strokeWidth={1.5} />
                  </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      
    </section>
  );
}