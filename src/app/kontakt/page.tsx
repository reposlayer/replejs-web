"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, MoveRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24 relative selection:bg-brand-400 selection:text-white overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-200/20 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-400/5 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Lijeva Kolona: Tekstualni Podaci */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
           <div>
             <span className="text-brand-500 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center gap-4 before:h-px before:w-16 before:bg-brand-300">
               Javite Nam Se
             </span>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight leading-none">
               Vaš prvi <br /> <span className="font-light italic text-brand-700">Korak</span>
             </h1>
             <p className="text-xl text-stone-600 font-light leading-relaxed max-w-md">
               Započnite svoje putovanje. Otvoreni smo za pitanja o tehnikama, terminima i individualnim potrebama.
             </p>
           </div>
           
           <div className="space-y-8 text-stone-700 font-light">
             <div className="flex items-center gap-6 group cursor-pointer hover:text-brand-700 transition-colors">
               <div className="w-14 h-14 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center justify-center text-brand-500 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                 <Mail strokeWidth={1.5} size={24} />
               </div>
               <div>
                 <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-1">Elektronička pošta</div>
                 <a href="mailto:info@tristanastudio.hr" className="text-xl font-serif">info@tristanastudio.hr</a>
               </div>
             </div>

             <div className="flex items-center gap-6 group cursor-pointer hover:text-brand-700 transition-colors">
               <div className="w-14 h-14 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center justify-center text-brand-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                 <MapPin strokeWidth={1.5} size={24} />
               </div>
               <div>
                 <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-1">Naša Lokacija</div>
                 <div className="text-xl font-serif">Rijeka, Hrvatska</div>
               </div>
             </div>
           </div>

           <div className="pt-12 border-t border-stone-200">
             <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-6">Društvene Mreže</div>
             <div className="flex gap-4">
               {[MapPin, Mail].map((Icon, idx) => (
                 <a key={idx} href="#" className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                   <Icon size={20} strokeWidth={1.5} />
                 </a>
               ))}
             </div>
           </div>
          </motion.div>

          {/* Desna Kolona: Kontakt Forma via Formspree/itd */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard>
              <form className="bg-white/60 backdrop-blur-2xl border border-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" />
                
                <h3 className="text-2xl font-serif text-stone-900 mb-8 tracking-tight">Pošaljite Upit</h3>
                
                <div className="space-y-6 relative z-10 font-light">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2 ml-1">Vaše Ime</label>
                    <input type="text" className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/50 transition-all text-stone-800 placeholder:text-stone-300" placeholder="Ana Anić" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2 ml-1">E-mail Adresa</label>
                    <input type="email" className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/50 transition-all text-stone-800 placeholder:text-stone-300" placeholder="ana@primjer.com" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2 ml-1">Poruka</label>
                    <textarea rows={4} className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/50 transition-all text-stone-800 placeholder:text-stone-300 resize-none" placeholder="Zanima me program..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-stone-900 text-white rounded-2xl px-6 py-5 font-semibold tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:bg-brand-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Pošalji Poruku <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
