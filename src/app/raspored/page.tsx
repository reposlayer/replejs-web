"use client";

import { motion } from "framer-motion";
import { Clock, CalendarRange, Filter } from "lucide-react";

const scheduleData = [
  {
    day: "Ponedjeljak",
    classes: [
      { time: "09:00 - 10:00", name: "Jutarnja Joga", instructor: "Ana", type: "Joga", level: "Sve razine" },
      { time: "17:30 - 18:30", name: "Pilates", instructor: "Marko", type: "Pilates", level: "Sve razine" },
      { time: "19:00 - 20:30", name: "Feldenkrais: Svjesnost kroz pokret", instructor: "Ivana", type: "Feldenkrais", level: "Početnici" },
    ]
  },
  {
    day: "Utorak",
    classes: [
      { time: "18:00 - 19:15", name: "Tai Chi & Qi Gong", instructor: "Petar", type: "Tai Chi", level: "Sve razine" },
      { time: "19:30 - 20:45", name: "Yogalates", instructor: "Maja", type: "Yogalates", level: "Srednja" },
    ]
  },
  {
    day: "Srijeda",
    classes: [
      { time: "09:00 - 10:00", name: "Mame i Bebe", instructor: "Sanja", type: "Kids", level: "Početnici" },
      { time: "17:30 - 18:30", name: "Prenatal (Joga za trudnice)", instructor: "Ana", type: "Joga", level: "Sve razine" },
      { time: "19:00 - 20:30", name: "Medical Yoga", instructor: "Ivana", type: "Joga", level: "Sve razine" },
    ]
  },
  {
    day: "Četvrtak",
    classes: [
      { time: "18:00 - 19:15", name: "Posturalne vježbe", instructor: "Marko", type: "Klinika", level: "Sve razine" },
      { time: "19:30 - 20:45", name: "Orijentalni ples (Trbušni ples)", instructor: "Jasna", type: "Ples", level: "Početnici" },
    ]
  },
  {
    day: "Petak",
    classes: [
      { time: "18:00 - 19:30", name: "Joga Smijeha", instructor: "Sanja", type: "Joga", level: "Sve razine" },
      { time: "20:00 - 21:00", name: "Zvučna Kupka (Tibetanske zdjele)", instructor: "Gostujući", type: "Radionica", level: "Sve razine" },
    ]
  }
];

export default function RasporedPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-brand-400 selection:text-white pt-32 pb-24 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-200/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-stone-400/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24"
        >
          <span className="text-brand-400 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-4 before:h-px before:w-8 before:bg-brand-300 after:h-px after:w-8 after:bg-brand-300">
            Dnevni Ritam
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 drop-shadow-sm flex items-center justify-center gap-6">
            <CalendarRange strokeWidth={1} className="text-brand-300 md:w-16 md:h-16" /> Raspored
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            Pronađite vrijeme za sebe. Prilagodite svoj dan ritmu koji vam najviše odgovara kroz naše jutarnje i večernje termine.
          </p>
        </motion.div>

        {/* Filters/Legend placeholder */}
        <div className="mb-12 flex justify-end">
            <button className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-stone-500 hover:text-brand-600 transition-colors bg-white/50 backdrop-blur px-6 py-3 rounded-full border border-stone-200 shadow-sm">
                <Filter size={14} /> Sve Lokacije
            </button>
        </div>

        <div className="space-y-16">
          {scheduleData.map((dayData, idx) => (
            <motion.div 
              key={dayData.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="sticky top-24 z-20 backdrop-blur-xl bg-transparent/80 w-full pb-4 mb-2 border-b border-brand-200">
                <h2 className="text-3xl font-serif text-brand-900 flex items-center gap-4">
                   {dayData.day} <span className="text-xs font-sans uppercase tracking-widest text-stone-400 mt-2">{dayData.classes.length} termina</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-6">
                {dayData.classes.map((cls, classIdx) => (
                  <div 
                    key={classIdx} 
                    className="group bg-white/70 backdrop-blur-xl border border-stone-100 p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50/30 blur-[40px] -z-10 group-hover:bg-brand-100/40 transition-colors" />
                    
                    <div className="flex items-center gap-6 md:w-1/3">
                      <div className="flex items-center justify-center p-3 bg-brand-50 border border-brand-100 text-brand-600 rounded-xl">
                        <Clock size={20} className="group-hover:rotate-12 transition-transform" />
                      </div>
                      <div className="text-stone-900 font-medium tracking-wide">
                        {cls.time}
                      </div>
                    </div>
                    
                    <div className="md:w-1/3">
                      <h3 className="text-lg font-serif text-stone-800 group-hover:text-brand-700 transition-colors">{cls.name}</h3>
                      <p className="text-sm font-light text-stone-500 mt-1">{cls.instructor} • {cls.type}</p>
                    </div>
                    
                    <div className="md:w-1/3 flex justify-start md:justify-end items-center">
                      <span className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-700 bg-brand-50 border border-brand-100 rounded-full">
                        {cls.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
