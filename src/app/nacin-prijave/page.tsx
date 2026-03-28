"use client";

import { motion } from 'framer-motion';
import { Mail, CalendarCheck, MapPin, Smile, MoveRight } from 'lucide-react';
import Link from 'next/link';
import TiltCard from '@/components/TiltCard';

export default function NacinPrijavePage() {
  const steps = [
    {
      num: "01",
      icon: CalendarCheck,
      title: "Pronađite Svoj Program",
      desc: "Istražite našu ponudu na Yoga Plejs ili REplejs lokaciji te provjerite tjedni raspored koji odgovara vašem ritmu."
    },
    {
      num: "02",
      icon: Mail,
      title: "Pošaljite Upit",
      desc: "Ispunite naš kontakt obrazac ili nam pošaljite email. Navedite željeni program i razinu predznanja."
    },
    {
      num: "03",
      icon: MapPin,
      title: "Potvrda Mjesta",
      desc: "Naš tim će vam se povratno javiti s informacijama o slobodnim mjestima i daljnjim koracima upisa."
    },
    {
      num: "04",
      icon: Smile,
      title: "Vidimo Se Na Prostirci",
      desc: "Ponesite udobnu slojevitu odjeću, pozitivnu energiju i započnite svoju novu transformativnu praksu!"
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24 relative selection:bg-brand-500 selection:text-stone-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] border-stone-200/40 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="text-brand-400 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-4 before:h-px before:w-16 before:bg-brand-500 after:h-px after:w-16 after:bg-brand-500">
            Jednostavan Proces
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight">
            Način <span className="font-light italic text-brand-400">Prijave</span>
          </h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed">
            Sve naše grupe su ograničenog broja polaznika kako bismo zadržali maksimalnu kvalitetu i posvećenost instruktora. Slijedite korake u nastavku za rezervaciju mjesta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              key={step.num}
            >
              <TiltCard>
                <div className="bg-transparent  rounded-3xl p-8 border border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(181,159,125,0.1)] flex flex-col h-full relative group transition-all duration-700">
                  <span className="absolute top-6 right-6 text-5xl font-serif text-stone-800 font-bold opacity-30 select-none pointer-events-none transition-colors duration-500 group-hover:text-brand-900 group-hover:opacity-50">
                    {step.num}
                  </span>
                  
                  <div className="w-14 h-14 rounded-none border-stone-300 border flex items-center justify-center text-brand-400 mb-8 relative z-10 group-hover:scale-110 group-hover:bg-brand-900 group-hover:text-brand-300 transition-all duration-500">
                    <step.icon strokeWidth={1.5} size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-stone-900 mb-4 relative z-10 group-hover:text-stone-900 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-stone-500 font-light leading-relaxed mb-4 relative z-10 text-sm">
                    {step.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-stone-100 rounded-none p-12 md:p-16 border border-stone-200 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/20 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-900/40 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

          <div className="relative z-10 max-w-xl">
             <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 drop-shadow-none">Spremni započeti sa <span className="text-brand-400 italic font-light">praksom?</span></h2>
             <p className="text-stone-500 font-light leading-relaxed text-lg">
               Kontaktirajte nas već danas i osigurajte svoje mjesto na Savskoj (Yoga) ili Knežiji (Reformeri).
             </p>
          </div>

          <div className="relative z-10 w-full md:w-auto">
             <Link 
               href="/kontakt"
               className="inline-flex w-full justify-center items-center gap-3 px-10 py-5 bg-stone-50 text-stone-950 rounded-full font-semibold uppercase tracking-[0.2em] text-xs hover:bg-brand-400 hover:text-stone-900 hover:shadow-[0_10px_40px_rgba(181,159,125,0.3)] hover:-translate-y-1 transition-all duration-500 group"
             >
               Pošalji Upit <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
