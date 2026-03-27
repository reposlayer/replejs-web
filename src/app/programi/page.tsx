"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MoveRight, Wind, Waves, Activity, Sun, AlignStartVertical, Music, Baby, Flower2, Smile } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function Programi() {
  const programs = [
    { title: 'Feldenkrais Metoda', slug: 'feldenkrais', icon: Wind },
    { title: 'Tai Chi i QiGong', slug: 'tai-chi-qigong', icon: Waves },
    { title: 'Yogalates', slug: 'yogalates', icon: Activity },
    { title: 'Holistička Joga', slug: 'joga', icon: Sun },
    { title: 'Posturalne Vježbe', slug: 'posturalne-vjezbe', icon: AlignStartVertical },
    { title: 'Orijentalni Ples', slug: 'orijentalni-ples', icon: Music },
    { title: 'Prenatal Yoga', slug: 'prenatal', icon: Flower2 },
    { title: 'Mame i Bebe', slug: 'mame-i-bebe', icon: Baby },
    { title: 'Joga Smijeha', slug: 'joga-smijeha', icon: Smile },
  ];

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24 relative selection:bg-brand-400 selection:text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-300/10 blur-[150px] rounded-full pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-400/5 blur-[150px] rounded-full pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24"
        >
          <span className="text-brand-500 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-brand-200 after:h-px after:w-12 after:bg-brand-200">
            Pronađite Svoj Ritam
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 drop-shadow-sm">
            Programi i Praksa
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            Istražite našu paletu pažljivo odabranih tehnika usmjerenih na obnavljanje živčanog sustava, kralježnice i unutarnjeg balansa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              key={program.slug}
            >
              <TiltCard>
                <Link 
                  href={`/programi/${program.slug}`}
                  className="group relative bg-white/40 backdrop-blur-3xl rounded-3xl p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(var(--brand-900),0.08)] flex flex-col h-full overflow-hidden transition-all duration-700"
                >
                   <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                   
                   <div className="w-16 h-16 rounded-2xl bg-white/80 border border-stone-100 shadow-sm flex items-center justify-center text-brand-500 mb-8 group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500 transform-origin-left">
                     <program.icon strokeWidth={1.5} size={28} />
                   </div>

                   <h2 className="text-3xl font-serif text-stone-900 mb-6 group-hover:text-brand-800 transition-colors drop-shadow-sm">{program.title}</h2>
                   
                   <div className="mt-auto pt-6 inline-flex items-center gap-3 text-brand-600 font-semibold tracking-widest uppercase text-xs">
                     Saznaj više <div className="p-2 rounded-full bg-brand-50 group-hover:bg-brand-100 transition-colors"><MoveRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
                   </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
