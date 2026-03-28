"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24 relative selection:bg-brand-500 selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Lijeva Kolona: Tekstualni Podaci */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
           <div>
             <span className="text-brand-600 font-sans tracking-[0.4em] uppercase text-[10px] mb-8 flex items-center gap-4 before:h-px before:w-8 before:bg-brand-600 font-medium">
               Javite Nam Se
             </span>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tighter leading-none">
               Vaš prvi <br /> <span className="font-light italic text-stone-400">Korak</span>
             </h1>
             <p className="text-lg text-stone-500 font-light leading-relaxed max-w-md">
               Započnite svoje putovanje. Otvoreni smo za pitanja o programima, terminima i individualnim potrebama.
             </p>
           </div>
           
           <div className="space-y-12 text-stone-600 font-light">
             {/* Lokacija 1 */}
             <div className="flex gap-6 group hover:text-stone-900 transition-colors">
               <div className="mt-1 text-stone-400 group-hover:text-brand-600 transition-colors">
                 <MapPin strokeWidth={1} size={28} />
               </div>
               <div>
                 <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-3">Studio Yoga Plejs</div>
                 <div className="text-xl font-serif text-stone-900">Savska cesta 141, Zagreb</div>
               </div>
             </div>

             {/* Lokacija 2 */}
             <div className="flex gap-6 group hover:text-stone-900 transition-colors">
               <div className="mt-1 text-stone-400 group-hover:text-brand-600 transition-colors">
                 <MapPin strokeWidth={1} size={28} />
               </div>
               <div>
                 <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-3">Studio REplejs</div>
                 <div className="text-xl font-serif text-stone-900">Davorina Bazjanca 9, Knežija</div>
               </div>
             </div>

             {/* Email */}
             <div className="flex gap-6 group hover:text-stone-900 transition-colors">
               <div className="mt-1 text-stone-400 group-hover:text-brand-600 transition-colors">
                 <Mail strokeWidth={1} size={28} />
               </div>
               <div>
                 <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-3">Elektronička pošta</div>
                 <a href="mailto:info@yogaplejs.com" className="text-xl font-serif text-stone-900 border-b border-transparent hover:border-stone-900 transition-colors pb-1">info@yogaplejs.com</a>
               </div>
             </div>
           </div>

          </motion.div>

          {/* Desna Kolona: Kontakt Forma */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form action="https://formspree.io/f/xyylllwz" method="POST" className="bg-stone-100 p-8 md:p-16 border border-stone-200">
              <h3 className="text-3xl font-serif text-stone-900 mb-12 tracking-tighter">Pošaljite Upit</h3>
              
              <div className="space-y-8 font-light">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium mb-3">Vaše Ime i Prezime</label>
                  <input type="text" className="w-full bg-transparent border-b border-stone-300 py-3 outline-none focus:border-stone-900 transition-all text-stone-900 placeholder:text-stone-400 font-serif text-lg" placeholder="Npr. Ana Anić" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium mb-3">E-mail Adresa</label>
                  <input type="email" className="w-full bg-transparent border-b border-stone-300 py-3 outline-none focus:border-stone-900 transition-all text-stone-900 placeholder:text-stone-400 font-serif text-lg" placeholder="ana@primjer.com" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium mb-3">Poruka</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-stone-300 py-3 outline-none focus:border-stone-900 transition-all text-stone-900 placeholder:text-stone-400 resize-none font-serif text-lg" placeholder="Zanima me..."></textarea>
                </div>

                <div className="pt-8">
                  <button type="submit" className="group uppercase tracking-[0.2em] text-xs font-medium text-stone-900 flex items-center gap-4 hover:gap-6 transition-all duration-500">
                    Pošalji Poruku <MoveRight size={16} />
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
