"use client";

import { motion } from 'framer-motion';
import { Target, Heart, ShieldCheck, MapPin } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function ONamaPage() {
  const values = [
    { icon: Heart, title: "Autentičnost", text: "Već 11 godina živimo joga i pilates praksu oslobođenu komercijalnih trendova, fokusirani na suštinu rada s ljudima." },
    { icon: Target, title: "Profesionalnost", text: "Svi naši instruktori posjeduju vrhunsko znanje, višegodišnje iskustvo i kontinuirano se educiraju." },
    { icon: ShieldCheck, title: "Siguran Prostor", text: "Njegujemo okruženje bez osuđivanja. Ovdje možete biti ranjivi, snažni i svoji bez obzira na fizičku spremu." },
    { icon: MapPin, title: "Dvije Lokacije", text: "Savska za fleksibilnost i yogu (Yoga Plejs), Knežija za snagu i pilates reformere (REplejs)." }
  ];

  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24 relative selection:bg-brand-500 selection:text-stone-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] border-stone-200/40 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
           <span className="text-brand-400 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center gap-4 before:h-px before:w-16 before:bg-brand-500">
             Naša Filozofija
           </span>
           <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight leading-none">
             Mjesto za tijelo <br /> <span className="font-light italic text-brand-400">i duh</span>
           </h1>
           <div className="space-y-6 text-xl text-stone-500 font-light leading-relaxed mb-12">
             <p>Replejs i Yogaplejs zajedno čine integrirani pilates i joga centar u Zagrebu koji već 11 godina živi autentičnost i profesionalnost u radu s ljudima.</p>
             <p>Na dvije lokacije njegujemo prostor u kojem se možete osjećati sigurno, dobrodošlo i inspirirano za vlastiti rast i život pun vitalnosti. Pristupamo svakom koraku na vašem putu transformacije s najvećom pažnjom i znanjem.</p>
           </div>
           
           <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
             <div>
               <div className="text-4xl font-serif text-brand-400 mb-2">11+</div>
               <div className="text-sm font-medium tracking-widest text-stone-500 uppercase">Godina Iskustva</div>
             </div>
             <div>
               <div className="text-4xl font-serif text-brand-400 mb-2">2</div>
               <div className="text-sm font-medium tracking-widest text-stone-500 uppercase">Vrhunske Lokacije</div>
             </div>
           </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-stone-100 rounded-none overflow-hidden relative border border-stone-200 shadow-2xl">
               <div className="absolute inset-0 bg-brand-900/40 mix-blend-color-dodge transition-opacity duration-1000" />
               <div className="absolute inset-x-8 bottom-8 bg-stone-50/60  p-8 rounded-none border border-stone-200 text-stone-900 italic font-serif text-xl sm:text-2xl leading-relaxed text-center shadow-lg">
                 "Zdravlje nije destinacija na koju stižemo, već način na koji putujemo."
               </div>
            </div>
            {/* Dekorativni Elementi */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-900 rounded-full blur-[40px] mix-blend-screen" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border-stone-200 rounded-full blur-[50px] mix-blend-screen" />
          </motion.div>
        </div>

        {/* Vrijednosti Grid */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-16">
             <h2 className="text-4xl font-serif text-stone-900 mb-4 tracking-tight">Postulati Našeg Centra</h2>
             <p className="text-stone-500 font-light">Etički kod koji osigurava kvalitetu svake sesije.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <TiltCard key={i}>
                <div className="bg-transparent backdrop-blur-xl border border-stone-200 shadow-xl rounded-none p-8 h-full hover:border-stone-200 transition-colors duration-500 group">
                   <div className="w-14 h-14 rounded-none border-stone-300 border flex items-center justify-center text-brand-400 mb-6 group-hover:bg-brand-900 group-hover:text-brand-300 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">
                     <v.icon strokeWidth={1.5} size={24} />
                   </div>
                   <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-stone-900 transition-colors">{v.title}</h3>
                   <p className="text-stone-500 font-light text-sm leading-relaxed">{v.text}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
