"use client";

import { motion } from "framer-motion";
import { Clock, CalendarRange, Filter } from "lucide-react";

const scheduleData = [
  {
    day: "Ponedjeljak",
    classes: [
      { time: "09:00 - 10:15", name: "Flow & Explore", instructor: "Andrea", type: "Yoga Plejs", level: "Sve razine" },
      { time: "18:00 - 19:00", name: "Pilates Reformeri", instructor: "Marina", type: "REplejs", level: "Početnici" },
      { time: "19:15 - 20:30", name: "Flexy Lab", instructor: "Sandra", type: "Yoga Plejs", level: "Sve razine" },
    ]
  },
  {
    day: "Utorak",
    classes: [
      { time: "18:00 - 19:15", name: "Intro to Yoga", instructor: "Ivan", type: "Yoga Plejs", level: "Početnici" },
      { time: "19:30 - 20:45", name: "Yoga Drills & Skills", instructor: "Andrea", type: "Yoga Plejs", level: "Srednja/Napredna" },
    ]
  },
  {
    day: "Srijeda",
    classes: [
      { time: "09:00 - 10:15", name: "Liquid & Strong Spine", instructor: "Sandra", type: "Yoga Plejs", level: "Sve razine" },
      { time: "18:00 - 19:00", name: "Pilates Reformeri", instructor: "Marina", type: "REplejs", level: "Sve razine" },
      { time: "19:15 - 20:30", name: "Gentle Unwind", instructor: "Ivan", type: "Yoga Plejs", level: "Sve razine" },
    ]
  },
  {
    day: "Četvrtak",
    classes: [
      { time: "18:00 - 19:15", name: "Intro to Yoga", instructor: "Ivan", type: "Yoga Plejs", level: "Početnici" },
      { time: "19:30 - 20:45", name: "Flow & Explore", instructor: "Andrea", type: "Yoga Plejs", level: "Srednja" },
    ]
  },
  {
    day: "Petak",
    classes: [
      { time: "17:00 - 18:00", name: "Pilates Reformeri", instructor: "Marina", type: "REplejs", level: "Sve razine" },
      { time: "18:15 - 19:30", name: "Flexy Lab", instructor: "Sandra", type: "Yoga Plejs", level: "Sve razine" },
    ]
  }
];

export default function RasporedPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-brand-500 selection:text-stone-950 pt-32 pb-24 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-900/30 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border-stone-200/40 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24"
        >
          <span className="text-brand-400 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-4 before:h-px before:w-8 before:bg-brand-500 after:h-px after:w-8 after:bg-brand-500">
            Dnevni Ritam
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 drop-shadow-none flex items-center justify-center gap-6">
            <CalendarRange strokeWidth={1} className="text-brand-400 md:w-16 md:h-16" /> Raspored
          </h1>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
            Pronađite vrijeme za sebe. Prilagodite svoj dan ritmu koji vam najviše odgovara kroz naše termine u Yoga Plejs i REplejs studijima.
          </p>
        </motion.div>

        {/* Filters/Legend placeholder */}
        <div className="mb-12 flex justify-end">
            <button className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-stone-500 hover:text-brand-400 transition-colors bg-stone-100/50 backdrop-blur px-6 py-3 rounded-full border border-stone-200 shadow-none">
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
              <div className="sticky top-24 z-20 backdrop-blur-xl bg-stone-50/80 w-full pb-4 mb-2 border-b border-stone-200">
                <h2 className="text-3xl font-serif text-stone-900 flex items-center gap-4">
                   {dayData.day} <span className="text-xs font-sans uppercase tracking-widest text-stone-500 mt-2">{dayData.classes.length} termina</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-6">
                {dayData.classes.map((cls, classIdx) => (
                  <div 
                    key={classIdx} 
                    className="group bg-transparent backdrop-blur-xl border border-stone-200 p-6 rounded-none shadow-none hover:shadow-[0_8px_30px_rgb(181,159,125,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-900/30 blur-[40px] -z-10 group-hover:bg-brand-800/40 transition-colors" />
                    
                    <div className="flex items-center gap-6 md:w-1/3">
                      <div className="flex items-center justify-center p-3 border-stone-300 border text-brand-400 rounded-xl">
                        <Clock size={20} className="group-hover:rotate-12 transition-transform" />
                      </div>
                      <div className="text-stone-900 font-medium tracking-wide">
                        {cls.time}
                      </div>
                    </div>
                    
                    <div className="md:w-1/3">
                      <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-600 transition-colors">{cls.name}</h3>
                      <p className="text-sm font-light text-stone-500 mt-1">{cls.instructor} • <span className={cls.type === "Yoga Plejs" ? "text-brand-400" : "text-stone-600"}>{cls.type}</span></p>
                    </div>
                    
                    <div className="md:w-1/3 flex justify-start md:justify-end items-center">
                      <span className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-stone-600 border-stone-300 border rounded-full">
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
