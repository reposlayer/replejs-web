"use client";

import { motion } from 'framer-motion';
import { User, MoveRight, Sparkles } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import Link from 'next/link';

export default function PrivatnaYogaPage() {
  const privateOptions = [
    {
      id: "1-na-1",
      title: "1 na 1 Privatna Praksa",
      location: "Savska ili Knežija",
      description: "Individualni pristup osigurava brži napredak, korekciju posture i dublje razumijevanje vlastitog tijela. Praksa se prilagođava isključivo vašim potrebama.",
      status: "Dostupno",
      available: true
    },
    {
      id: "polu-individualno",
      title: "Polu-individualni Treninzi",
      location: "Savska ili Knežija",
      description: "Dođite s partnerom, prijateljem ili kolegom. Dijelite trošak privatne sesije, a zadržavate iznimno visoku pažnju instruktora.",
      status: "Dostupno",
      available: true
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24 relative selection:bg-brand-500 selection:text-stone-950 overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-900/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] border-stone-200/40 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-brand-400 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-4 before:h-px before:w-16 before:bg-brand-500 after:h-px after:w-16 after:bg-brand-500">
            Maksimalna Posvećenost
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight">
            Privatna <span className="font-light italic text-brand-400">Praksa</span>
          </h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
            Razvijte svoju snagu i fleksibilnost uz ekskluzivnu pažnju instruktora. Idealno za specifične ciljeve ili rehabilitaciju.
          </p>
        </motion.div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          {privateOptions.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              key={item.id}
            >
              <TiltCard>
                <div className="group relative bg-transparent  rounded-3xl p-8 md:p-12 border border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(181,159,125,0.1)] flex flex-col md:flex-row gap-8 items-start md:items-center overflow-hidden transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="flex-1 relative z-20">
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium tracking-wide">
                      <span className={`px-4 py-1.5 rounded-full uppercase text-xs tracking-widest ${item.available ? 'bg-brand-900/50 text-brand-400 border border-brand-800' : 'border-stone-200 text-stone-500 border border-stone-300'}`}>
                        {item.status}
                      </span>
                      <div className="flex items-center gap-2 text-stone-500">
                        <User size={16} className="text-brand-500" /> {item.location}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4 group-hover:text-stone-900 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-lg text-stone-500 leading-relaxed font-light mb-8 max-w-2xl">
                        {item.description}
                    </p>

                    <Link 
                      href="/kontakt"
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium tracking-widest uppercase text-xs transition-all duration-500
                        bg-stone-100 text-stone-950 hover:bg-brand-400 hover:text-stone-900 hover:shadow-[0_10px_30px_rgba(181,159,125,0.2)] hover:-translate-y-1`}
                    >
                      Dogovori Termin <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                  
                  {item.available && (
                    <div className="hidden md:flex flex-shrink-0 w-32 h-32 rounded-full border border-stone-200 items-center justify-center bg-stone-100/50 group-hover:scale-110 group-hover:bg-brand-900/40 transition-all duration-700 shadow-inner">
                      <Sparkles className="w-10 h-10 text-stone-500 group-hover:text-brand-400 transition-colors duration-700 group-hover:rotate-12" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
