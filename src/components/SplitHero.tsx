"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | "none">("none");

  const leftImage = "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1607694583486-2PQT0LQ193RL7MCB6DX4/20140228_Trade+151_0046.jpg";
  const rightImage = "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1618497259178-6XJGK9GR6YAVBQL5L519/20140301_Trade-151_012-2.jpg";

  // Shared transitions for ultra-smooth layout shifting
  const transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex flex-col md:flex-row overflow-hidden bg-stone-50">
      
      {/* Central Identity Monogram - Static Zen Anchor in the dead center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none mix-blend-difference hidden md:flex flex-col items-center">
        <span className="text-stone-300 text-xs tracking-[0.4em] uppercase font-bold mb-4 will-change-[transform,opacity] transition-all duration-1000" style={{ opacity: hoveredSide === "none" ? 1 : 0.2 }}>SPOJ DVIJE SNAGE</span>
        <div className="w-[1px] h-24 bg-stone-100/50" />
      </div>

      {/* LEFT SIDE: YOGA PLEJS */}
      <motion.div
        className="relative h-1/2 md:h-full cursor-pointer overflow-hidden flex flex-col justify-end p-8 md:p-16 group will-change-[flex]"
        initial={{ flex: 1 }}
        animate={{
          flex: hoveredSide === "left" ? 1.8 : hoveredSide === "right" ? 0.6 : 1,
        }}
        transition={transition}
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide("none")}
      >
        <Image 
          src={leftImage} 
          alt="Yoga Plejs Zen" 
          fill 
          className="object-cover absolute inset-0 z-0 scale-105 transition-transform duration-[2s] ease-out group-hover:scale-100 opacity-80 group-hover:opacity-100 saturate-50 group-hover:saturate-100" 
          priority
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent transition-opacity duration-1000 group-hover:opacity-70" />
        
        <div className="relative z-20 max-w-lg transition-transform duration-1000 ease-out md:-translate-y-8 group-hover:translate-y-0">
          <span className="text-brand-400 font-sans tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-4">
             Yoga Plejs <div className="h-px w-8 bg-brand-500" /> Savska
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-stone-50 leading-[0.9] tracking-tighter mb-6 relative">
             <span className="block overflow-hidden"><motion.span className="block" initial={{y: "100%"}} animate={{y: 0}} transition={{delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1]}}>Pronađi.</motion.span></span>
             <span className="block overflow-hidden"><motion.span className="block italic font-light text-brand-300" initial={{y: "100%"}} animate={{y: 0}} transition={{delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1]}}>Svoj mir.</motion.span></span>
          </h2>

          <AnimatePresence>
            {hoveredSide === "left" && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed mb-8 max-w-sm hidden md:block">
                  Asane, vinyasa i mobilnost. Od Intro programa do naprednih Flow & Explore satova za duboku povezanost duha i tijela.
                </p>
                <Link href="/programi#yoga-plejs" className="inline-flex items-center gap-3 px-6 py-3 bg-stone-50 text-stone-950 rounded-full font-semibold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-brand-400 hover:text-white transition-all duration-500">
                  Istraži Yogu <ArrowRight size={14} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* RIGHT SIDE: REplejs */}
      <motion.div
        className="relative h-1/2 md:h-full cursor-pointer overflow-hidden flex flex-col justify-end p-8 md:p-16 group will-change-[flex] border-l border-stone-800"
        initial={{ flex: 1 }}
        animate={{
          flex: hoveredSide === "right" ? 1.8 : hoveredSide === "left" ? 0.6 : 1,
        }}
        transition={transition}
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide("none")}
      >
        <Image 
           src={rightImage} 
           alt="REplejs Pilates Reformer" 
           fill 
           className="object-cover absolute inset-0 z-0 scale-105 transition-transform duration-[2s] ease-out group-hover:scale-100 opacity-80 group-hover:opacity-100 saturate-50 group-hover:saturate-100" 
           priority
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent transition-opacity duration-1000 group-hover:opacity-70" />
        
        <div className="relative z-20 max-w-lg transition-transform duration-1000 ease-out md:-translate-y-8 group-hover:translate-y-0">
          <span className="text-stone-400 font-sans tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-4">
             REplejs <div className="h-px w-8 bg-stone-600" /> Knežija
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-stone-50 leading-[0.9] tracking-tighter mb-6 relative">
             <span className="block overflow-hidden"><motion.span className="block" initial={{y: "100%"}} animate={{y: 0}} transition={{delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1]}}>Otkrij.</motion.span></span>
             <span className="block overflow-hidden"><motion.span className="block italic font-light text-stone-400" initial={{y: "100%"}} animate={{y: 0}} transition={{delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1]}}>Svoju snagu.</motion.span></span>
          </h2>

          <AnimatePresence>
            {hoveredSide === "right" && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed mb-8 max-w-sm hidden md:block">
                  Reformeri i napredni pilates za izdržljivost, core stabilnost i preoblikovanje cjelokupnog mišićnog tonusa.
                </p>
                <Link href="/programi#replejs" className="inline-flex items-center gap-3 px-6 py-3 bg-stone-50 text-stone-950 rounded-full font-semibold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-stone-300 transition-all duration-500">
                  Istraži Pilates <ArrowRight size={14} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

    </section>
  );
}
