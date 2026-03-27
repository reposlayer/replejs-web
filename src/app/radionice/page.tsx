"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, MoveRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function RadionicePage() {
  const radionice = [
    {
      id: "radionica-yoge-2024",
      title: "Radionica za Kralježnicu",
      date: "15.05.2024.",
      location: "Tristana Studio, Rijeka",
      description: "Fokusiranje na obnavljanje mobilnosti kralježnice, otpuštanje tenzije i vraćanje fleksibilnosti kroz kontrolirane i sigurne sekvence pokreta.",
      status: "Prijave otvorene",
      available: true
    },
    {
      id: "dah-i-stres",
      title: "Tehnike Disanja za Stres",
      date: "02.06.2024.",
      location: "Tristana Studio, Rijeka",
      description: "Intenzivni 3-satni masterclass gdje istražujemo kako pravilna uporaba dijafragme utječe na parasimpatički živčani sustav.",
      status: "Uskoro",
      available: false
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 relative selection:bg-brand-400 selection:text-white overflow-hidden bg-transparent/50">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-200/20 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-brand-500 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-4 before:h-px before:w-16 before:bg-brand-300/50 after:h-px after:w-16 after:bg-brand-300/50">
            Intenzivna Iskustva
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight">
            Specijalizirane <span className="font-light italic text-brand-700">Radionice</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            Produbite svoje znanje kroz fokusirane masterclass sesije pod vodstvom stručnih mentora.
          </p>
        </motion.div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          {radionice.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              key={item.id}
            >
              <TiltCard>
                <div className="group relative bg-white/60 backdrop-blur-3xl rounded-3xl p-8 md:p-12 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(var(--brand-900),0.08)] flex flex-col md:flex-row gap-8 items-start md:items-center overflow-hidden transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="flex-1 relative z-20">
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium tracking-wide">
                      <span className={`px-4 py-1.5 rounded-full uppercase text-xs tracking-widest ${item.available ? 'bg-brand-100/50 text-brand-700 border border-brand-200' : 'bg-stone-100 text-stone-500 border border-stone-200'}`}>
                        {item.status}
                      </span>
                      <div className="flex items-center gap-2 text-stone-500">
                        <Calendar size={16} className="text-brand-400" /> {item.date}
                      </div>
                      <div className="flex items-center gap-2 text-stone-500">
                        <MapPin size={16} className="text-brand-400" /> {item.location}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4 group-hover:text-brand-800 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed font-light mb-8 max-w-2xl">
                        {item.description}
                    </p>

                    <button 
                      disabled={!item.available}
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium tracking-widest uppercase text-xs transition-all duration-500
                        ${item.available 
                          ? 'bg-stone-900 text-white hover:bg-brand-600 hover:shadow-lg hover:-translate-y-1' 
                          : 'bg-stone-100 text-stone-400 cursor-not-allowed'}`}
                    >
                      {item.available ? 'Prijavi Se' : 'Zatvoreno'}
                      {item.available && <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />}
                    </button>
                  </div>
                  
                  {item.available && (
                    <div className="hidden md:flex flex-shrink-0 w-32 h-32 rounded-full border border-brand-100 items-center justify-center bg-white/50 group-hover:scale-110 group-hover:bg-brand-50 transition-all duration-700">
                      <Sparkles className="w-10 h-10 text-brand-300 group-hover:text-brand-500 transition-colors duration-700 group-hover:rotate-12" strokeWidth={1.5} />
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
