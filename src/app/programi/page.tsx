"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MoveRight, Wind, Activity, Sun, Zap, Anchor, Heart, Dumbbell } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function Programi() {
  const yogaplejsPrograms = [
    { title: 'Intro to Yoga', slug: 'intro-to-yoga', icon: Anchor, desc: 'Program za početnike koji pruža uvod u yogu, usvajanje osnovnih poza i tehnika disanja.' },
    { title: 'Flow & Explore', slug: 'flow-explore', icon: Sun, desc: 'Kreativna vinyasa yoga kojom ćete doživjeti protočne slijedove te stvoriti sklad tijela i uma.' },
    { title: 'Yoga Drills & Skills', slug: 'yoga-drills-skills', icon: Zap, desc: 'Fuzija vinyasa yoge i vježbi snage koja kombinira dobrobiti mindfulnessa u pokretu i tjelesnog osnaživanja.' },
    { title: 'Liquid & Strong Spine', slug: 'liquid-strong-spine', icon: Activity, desc: 'Program koji će vam pomoći u održavanju zdravlja kralježnice kroz razvoj stabilnosti i mobilnosti.' },
    { title: 'Gentle Unwind', slug: 'gentle-unwind', icon: Wind, desc: 'Umirujući, ali dinamičan vinyasa flow koji otpušta napetost i vraća tijelo i um u ravnotežu.' },
    { title: 'Flexy Lab', slug: 'flexy-lab', icon: Heart, desc: 'Program postizanja i održavanja funkcionalne fleksibilnosti i mobilnosti te razumijevanja svog tijela.' },
  ];

  const replejsPrograms = [
    { title: 'Pilates Reformeri', slug: 'reformer-pilates', icon: Dumbbell, desc: 'Treninzi na reformerima za snagu i mobilnost cijelog tijela kroz vježbanje u malim grupama.' },
  ];

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24 relative selection:bg-brand-500 selection:text-stone-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/30 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] border-stone-200/40 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24"
        >
          <span className="text-brand-400 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-brand-500 after:h-px after:w-12 after:bg-brand-500">
            Dva Studija. Puno mogućnosti.
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 drop-shadow-none">
            Programi i Praksa
          </h1>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
            Istražite našu paletu pažljivo odabranih tehnika usmjerenih na obnavljanje živčanog sustava, fleksibilnost i izgradnju snage na reformerima.
          </p>
        </motion.div>

        {/* YOGA PLEJS SECTION */}
        <div className="mb-24" id="yoga-plejs">
          <div className="mb-12 border-b border-stone-200 pb-4">
            <h2 className="text-3xl font-serif text-stone-900">Yoga Plejs <span className="text-brand-400 text-lg italic ml-4">Savska cesta 141</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yogaplejsPrograms.map((program, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                key={program.slug}
                className="h-full"
              >
                <TiltCard>
                  <Link 
                    href={`/programi/${program.slug}`}
                    className="group relative bg-transparent  rounded-3xl p-8 border border-stone-200 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(181,159,125,0.1)] flex flex-col h-full overflow-hidden transition-all duration-700"
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                     
                     <div className="w-16 h-16 rounded-none border-stone-300 border shadow-none flex items-center justify-center text-brand-400 mb-8 group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500 transform-origin-left">
                       <program.icon strokeWidth={1.5} size={28} />
                     </div>

                     <h2 className="text-3xl font-serif text-stone-900 mb-4 group-hover:text-stone-900 transition-colors drop-shadow-none">{program.title}</h2>
                     <p className="text-stone-500 font-light text-sm mb-8 leading-relaxed line-clamp-3">{program.desc}</p>
                     
                     <div className="mt-auto pt-6 inline-flex items-center gap-3 text-brand-400 font-semibold tracking-widest uppercase text-xs">
                       Saznaj više <div className="p-2 rounded-full border-stone-300 border group-hover:bg-brand-900 group-hover:border-brand-800 transition-colors"><MoveRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
                     </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* REPLEJS SECTION */}
        <div className="mb-24" id="replejs">
          <div className="mb-12 border-b border-stone-200 pb-4">
            <h2 className="text-3xl font-serif text-stone-900">REplejs <span className="text-brand-400 text-lg italic ml-4">Davorina Bazjanca 9</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {replejsPrograms.map((program, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                key={program.slug}
                className="h-full"
              >
                <TiltCard>
                  <Link 
                    href={`/programi/${program.slug}`}
                    className="group relative bg-transparent  rounded-3xl p-8 border border-stone-200 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(181,159,125,0.1)] flex flex-col h-full overflow-hidden transition-all duration-700"
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                     
                     <div className="w-16 h-16 rounded-none border-stone-300 border shadow-none flex items-center justify-center text-brand-400 mb-8 group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500 transform-origin-left">
                       <program.icon strokeWidth={1.5} size={28} />
                     </div>

                     <h2 className="text-3xl font-serif text-stone-900 mb-4 group-hover:text-stone-900 transition-colors drop-shadow-none">{program.title}</h2>
                     <p className="text-stone-500 font-light text-sm mb-8 leading-relaxed line-clamp-3">{program.desc}</p>
                     
                     <div className="mt-auto pt-6 inline-flex items-center gap-3 text-brand-400 font-semibold tracking-widest uppercase text-xs">
                       Saznaj više <div className="p-2 rounded-full border-stone-300 border group-hover:bg-brand-900 group-hover:border-brand-800 transition-colors"><MoveRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
                     </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
