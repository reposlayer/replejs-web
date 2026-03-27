"use client";

import { motion } from "framer-motion";
import { MoveRight, Wind, Activity, Sun } from "lucide-react";
import Link from "next/link";
import HeroParallax from "@/components/HeroParallax";
import TiltCard from "@/components/TiltCard";
import Magnetic from "@/components/Magnetic";
import InteractiveGallery from "@/components/InteractiveGallery";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-brand-400 selection:text-white pb-0 group/main relative overflow-hidden bg-stone-50">
      
      {/* Frame by Frame Mouse Canvas Layer */}
      <InteractiveCanvas />
      
      {/* Immersive Cursor Depth Layer */}
      <CursorGlow />

      {/* Immersive Parallax Hero Component */}
      <HeroParallax />

      {/* Elegant Statement Section */}
      <section className="relative z-20 py-32 md:py-48 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
         <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
         >
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[1.1] tracking-tight mb-8">
             Više od pokreta.<br />
             <span className="italic font-light text-brand-600">Povratak esenciji.</span>
           </h2>
           <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
             Tristana Studio je utočište u kojem se biomehanika susreće s tradicijom. 
             Naš sustav je dizajniran za rekalibraciju vašeg živčanog sustava i buđenje urođenog potencijala.
           </p>
         </motion.div>
      </section>

      {/* Interactive Horizontal Gallery */}
      <InteractiveGallery />

      {/* Featured Programs Section */}
      <section className="relative z-20 py-32 px-4 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-wrap items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="text-brand-500 font-sans tracking-[0.3em] uppercase text-xs mb-4 flex items-center gap-4 before:h-px before:w-12 before:bg-brand-200">
              Naša Praksa
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Temeljni <span className="italic text-brand-700">Programi</span></h2>
          </div>
          <Magnetic>
             <Link href="/programi" className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-stone-900 border-b border-stone-900 pb-1 hover:text-brand-600 hover:border-brand-600 transition-colors">
               Pregledaj Sve <MoveRight size={14} />
             </Link>
          </Magnetic>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <ProgramCard 
             title="Feldenkrais Metoda" 
             desc="Znanstveno utemeljen pristup svjesnom pokretu koji trajno obnavlja motoriku." 
             href="/programi/feldenkrais" 
             Icon={Wind}
             delay={0}
             highlight
           />
           <ProgramCard 
             title="Tai Chi i QiGong" 
             desc="Drevna kineska vještina za kultiviranje životne energije i duboku relaksaciju uma." 
             href="/programi/tai-chi-qigong" 
             Icon={Activity}
             delay={0.1}
           />
           <ProgramCard 
             title="Holistička Joga" 
             desc="Vježbanje asana koje vraća snagu tijelu i donosi apsolutni balans svakodnevici." 
             href="/programi/joga" 
             Icon={Sun}
             delay={0.2}
           />
        </div>
      </section>

      {/* Interactive CTA Banner */}
      <section className="relative z-20 w-full mb-32 px-4 max-w-7xl mx-auto">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
           className="w-full bg-stone-900 rounded-[3rem] p-12 md:p-24 overflow-hidden relative flex flex-col items-center justify-center text-stone-50 border border-stone-800 shadow-2xl group"
         >
            <div className="absolute inset-0 bg-brand-900/20 mix-blend-color-burn opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-400/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand-500/20 transition-colors duration-1000" />
            
            <div className="max-w-2xl z-20 text-center flex flex-col items-center">
              <span className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 drop-shadow-sm">Studio u Rijeci</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">Započnite Svoju <br/><span className="italic text-brand-300">Transformaciju</span></h2>
              
              <Magnetic>
                 <Link href="/kontakt" className="px-10 py-5 bg-white text-stone-950 rounded-full font-semibold uppercase tracking-[0.2em] text-xs inline-flex items-center gap-4 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-500 group/btn">
                    Rezervirajte Termin <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:bg-brand-50 transition-all duration-500"><MoveRight size={14} className="text-brand-600" /></div>
                 </Link>
              </Magnetic>
            </div>
         </motion.div>
      </section>

    </main>
  );
}

function ProgramCard({ title, desc, href, Icon, delay, highlight = false }: any) {
  return (
    <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-50px" }}
       transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard>
        <Link 
          href={href} 
          className={`block w-full h-full rounded-[2rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden relative group/card border
            ${highlight ? 'bg-brand-900 text-white border-brand-800' : 'bg-white/60 backdrop-blur-2xl text-stone-900 border-white/60'}
          `}
        >
          {/* Subtle hover gradient */}
          <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none
            ${highlight ? 'bg-gradient-to-br from-brand-800 to-transparent' : 'bg-gradient-to-br from-brand-50 to-transparent'}
          `} />
          
          <div className={`mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl group-hover/card:scale-110 group-hover/card:-rotate-12 transition-all duration-500
            ${highlight ? 'bg-white/10 text-brand-200 border border-white/20' : 'bg-brand-50 text-brand-600 border border-brand-100'}
          `}>
            <Icon strokeWidth={1} size={32} />
          </div>
          
          <h3 className={`font-serif text-3xl mb-4 group-hover/card:-translate-y-1 transition-transform duration-500
            ${highlight ? 'text-white' : 'text-stone-900'}
          `}>{title}</h3>
          
          <p className={`leading-relaxed text-sm mb-12 line-clamp-3 font-light
            ${highlight ? 'text-brand-100/80' : 'text-stone-500'}
          `}>{desc}</p>
          
          <span className={`text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-3 group-hover/card:gap-5 transition-all
            ${highlight ? 'text-brand-300' : 'text-brand-600'}
          `}>
            Detaljnije <MoveRight size={14} className="group-hover/card:translate-x-1 transition-transform" />
          </span>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
