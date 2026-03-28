"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yCard = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Framer Motion Variants for ultra-smooth staggering
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 100, rotate: 2 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0, 
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full px-6 md:px-12 flex flex-col justify-between pb-12 pt-32 md:pt-40 overflow-hidden">
      
      {/* Dreamy Ambient Aurora */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-gradient-to-br from-brand-900/60 via-stone-800/40 to-transparent blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0" 
      />

      {/* Top Header Labels */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 flex justify-between items-start w-full uppercase tracking-[0.4em] text-[9px] md:text-[11px] font-bold text-stone-400"
      >
        <div className="flex flex-col gap-1">
          <span className="text-stone-300">Yoga Plejs & REplejs</span>
          <span>Snaga i Mobilnost</span>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span className="text-brand-400 flex items-center justify-end gap-2"><Sparkles size={10} /> Tradicija susreće praksu</span>
          <span>Zagreb, Hrvatska</span>
        </div>
      </motion.div>

      {/* Giant Editorial Typography Lockup */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="flex-1 flex flex-col justify-center relative z-10 w-full mt-10 md:mt-0"
      >
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[15vw] md:text-[11vw] font-serif text-stone-50 leading-[0.8] tracking-tighter"
        >
          {/* Line 1 */}
          <div className="overflow-hidden pb-4 md:pb-6">
            <motion.div variants={itemVariants} className="origin-bottom-left">
              Yoga
            </motion.div>
          </div>
          
          {/* Line 2 with Inline Ethereal Image */}
          <div className="flex items-center ml-[5vw] md:ml-[8vw] my-2 md:my-0 overflow-hidden pb-4 md:pb-8">
            <motion.div 
              variants={itemVariants}
              className="relative w-[28vw] md:w-[18vw] h-[12vw] md:h-[7vw] rounded-full overflow-hidden shadow-[0_20px_40px_rgba(163,140,109,0.2)] mr-3 md:mr-6 border-2 border-brand-900/60 flex-shrink-0"
            >
              <Image 
                src="https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1607694583486-2PQT0LQ193RL7MCB6DX4/20140228_Trade+151_0046.jpg" 
                alt="Zen Yoga Movement" 
                fill 
                className="object-cover scale-110" 
                sizes="(max-width: 768px) 30vw, 20vw"
                priority 
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <span className="italic font-light text-brand-400 pr-4 md:pr-0">Plejs</span>
            </motion.div>
          </div>
          
          {/* Line 3 */}
          <div className="overflow-hidden pb-4 md:pb-6 pl-[8vw] md:pl-[12vw]">
            <motion.div variants={itemVariants} className="origin-bottom-left">
              Zagreb.
            </motion.div>
          </div>
        </motion.h1>
      </motion.div>

      {/* Bottom Interface: CTA & Glass Card */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 flex flex-col md:flex-row justify-between items-end gap-10 w-full mt-12 md:mt-0"
      >
        {/* Interaction Button */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Magnetic>
            <Link href="/programi" className="group relative inline-flex items-center gap-6 px-3 py-3 pr-8 bg-stone-50 text-stone-950 rounded-full overflow-hidden text-xs uppercase tracking-[0.25em] font-semibold border-border border-stone-200 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(181,159,125,0.2)] transition-all duration-700">
              <div className="absolute inset-0 bg-brand-500 rounded-full translate-y-[110%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              <div className="relative z-10 w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center group-hover:bg-brand-900 group-hover:text-brand-100 transition-colors duration-500">
                <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform duration-500" />
              </div>
              <span className="relative z-10 group-hover:text-stone-50 transition-colors duration-500 mt-0.5">Istraži Programe</span>
            </Link>
          </Magnetic>
        </motion.div>

        {/* Ethereal Floating Description Card */}
        <motion.div 
          style={{ y: yCard }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md w-full md:w-auto bg-stone-900/60  border border-stone-800 p-8 rounded-none  relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <Sparkles size={18} className="text-brand-400 mb-5" />
            <p className="text-stone-300 font-medium font-serif italic text-lg mb-2">Vaš prostor mira i rasta.</p>
            <p className="text-stone-400 font-light leading-relaxed text-sm">
              Na dvije lokacije u Zagrebu, njegovamo prostor u kojem se možete osjećati sigurno i dobrodošlo. YOGA PLEJS za povratak tijelu, REplejs za snagu i izdržljivost.
            </p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
