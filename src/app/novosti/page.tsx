"use client";

import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import Link from 'next/link';

export default function NovostiPage() {
  const news = [
    {
      id: "besplatni-satovi-2024",
      title: "Besplatni satovi u Yoga Plejsu",
      date: "01. Rujna 2024.",
      category: "DOGAĐANJE",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/1689016059075-1XNS1TTR7ZL5W2KHO56V/image-asset.jpeg",
      desc: "Pozivamo vas na dan otvorenih vrata u Yoga Plejsu tijekom kojeg besplatno možete odabrati sat za sebe, upoznati instruktore i osjetiti atmosferu našeg studija."
    },
    {
      id: "obnovljeni-studio",
      title: "Obnovljeni Yoga Plejs 1 uskoro otvara vrata",
      date: "15. Kolovoza 2024.",
      category: "STUDIO",
      image: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1607694583486-2PQT0LQ193RL7MCB6DX4/20140228_Trade+151_0046.jpg",
      desc: "Nakon ljetne pauze, s velikim veseljem najavljujemo otvaranje potpuno renoviranog Yoga Plejs studija na Savskoj cesti, s novim rekvizitima i još ugodnijim ambijentom."
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24 relative selection:bg-brand-500 selection:text-stone-950 overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-900/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] border-stone-200/40 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="text-brand-400 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-4 before:h-px before:w-16 before:bg-brand-500 after:h-px after:w-16 after:bg-brand-500">
            Dnevnik Studija
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight">
            Naše <span className="font-light italic text-brand-400">Novosti</span>
          </h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed">
            Budite u toku sa svim važnim najavama, događajima, promjenama u rasporedu i korisnim člancima vezanim za praksu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {news.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              key={item.id}
            >
              <TiltCard>
                <div className="bg-transparent  rounded-none overflow-hidden border border-stone-200 hover:-translate-y-2  flex flex-col h-full relative group transition-all duration-700">
                  
                  {/* Aspect Image Container */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 bg-stone-100 animate-pulse z-0" />
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 origin-center z-10 relative saturate-50 group-hover:saturate-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-80 z-20" />
                    <span className="absolute top-6 left-6 z-30 bg-stone-50/80 backdrop-blur-md border border-stone-200 text-brand-400 text-[10px] tracking-widest uppercase font-semibold px-4 py-2 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow relative z-30 -mt-10">
                    <div className="flex items-center gap-2 text-stone-500 text-xs tracking-widest uppercase mb-4 font-medium">
                      <CalendarDays size={14} className="text-brand-500" />
                      {item.date}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-4 group-hover:text-brand-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-stone-500 font-light leading-relaxed mb-8 flex-grow">
                      {item.desc}
                    </p>

                    <Link 
                      href="/kontakt"
                      className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-stone-600 group-hover:text-stone-900 transition-colors"
                    >
                      Prijavi ili Saznaj Više <ArrowRight size={14} className="text-brand-500 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
