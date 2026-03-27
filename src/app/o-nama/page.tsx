"use client";

import { motion } from 'framer-motion';
import { Target, Heart, ShieldCheck, Zap } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function ONamaPage() {
  const values = [
    { icon: Heart, title: "Zastitnički Pristup", text: "Svakom klijentu pristupamo s dužnom pažnjom na sigurnost i dugoročno zdravlje strukture." },
    { icon: Target, title: "Edukacija iznad Treninga", text: "Ne rješavamo samo simptome; učimo vas kako vaše tijelo zapravo funkcionira pod opterećenjem." },
    { icon: ShieldCheck, title: "Znanstveni Temelj", text: "Integriramo drevne discipline sa modernom biomehanikom i neuroznanošću." },
    { icon: Zap, title: "Zatvorene Grupe", text: "Ograničen broj polaznika garantira nadzor i posvećenost kakvu viđate samo na privatnim seansama." }
  ];

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24 relative selection:bg-brand-400 selection:text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-300/10 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-400/5 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
           <span className="text-brand-500 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center gap-4 before:h-px before:w-16 before:bg-brand-300">
             Naša Filozofija
           </span>
           <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight leading-none">
             Pokret kao <br /> <span className="font-light italic text-brand-700">Lijek</span>
           </h1>
           <div className="space-y-6 text-xl text-stone-600 font-light leading-relaxed mb-12">
             <p>Tristana nije samo prostor za vježbanje. To je laboratorij za istraživanje kapaciteta vlastitog tijela.</p>
             <p>Rođeni smo iz potrebe da ponudimo praksu koja ne stvara dodatni stres na već iscrpljeni živčani sustav modernog čovjeka, već ga regenerira iz temelja.</p>
           </div>
           
           <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
             <div>
               <div className="text-4xl font-serif text-brand-900 mb-2">15+</div>
               <div className="text-sm font-medium tracking-widest text-stone-500 uppercase">Godina Iskustva</div>
             </div>
             <div>
               <div className="text-4xl font-serif text-brand-900 mb-2">5+</div>
               <div className="text-sm font-medium tracking-widest text-stone-500 uppercase">Aktivnih Modula</div>
             </div>
           </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-stone-200 rounded-[2rem] overflow-hidden relative border border-white/60 shadow-2xl">
               <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
               <div className="absolute inset-x-8 bottom-8 bg-white/40 backdrop-blur-2xl p-8 rounded-2xl border border-white/50 text-stone-800 italic font-serif text-xl sm:text-2xl leading-relaxed text-center shadow-lg">
                 "Istinska snaga proizlazi iz opuštenosti pod pritiskom."
               </div>
            </div>
            {/* Dekorativni Elementi */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-100 rounded-full blur-[40px] mix-blend-multiply" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-200 rounded-full blur-[50px] mix-blend-multiply" />
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
             <h2 className="text-4xl font-serif text-stone-900 mb-4 tracking-tight">Postulati Tristane</h2>
             <p className="text-stone-500 font-light">Etički kod koji osigurava kvalitetu svake sesije.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <TiltCard key={i}>
                <div className="bg-white/60 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-8 h-full hover:bg-white transition-colors duration-500 group">
                   <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">
                     <v.icon strokeWidth={1.5} size={24} />
                   </div>
                   <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-brand-800 transition-colors">{v.title}</h3>
                   <p className="text-stone-600 font-light text-sm leading-relaxed">{v.text}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
