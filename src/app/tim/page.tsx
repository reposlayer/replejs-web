"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import TiltCard from '@/components/TiltCard';

export default function TimPage() {
  const teamYogaPlejs = [
    {
      name: "Helena Jurić",
      role: "Vlasnica, Liquid & Strong Spine, Yoga Drills & Skills, Flexy Lab",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/0ff64dfa-c060-47c4-96b1-ed703bdbf44e/Helena+profilna.jpg"
    },
    {
      name: "Marina Ćurčić",
      role: "Flow & Explore, Intro to Yoga, Gentle Unwind",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/547d967f-6510-4dd1-91a0-a8bba464dfac/tempImageWP8tTd.jpg"
    },
    {
      name: "Petra Draghilo",
      role: "Flow & Explore",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/efe3666b-7ac5-41a9-8b79-970f3a75dbd3/WhatsApp+Image+2023-08-10+at+14.43.28.jpeg"
    },
    {
      name: "Ena Štekov",
      role: "Flow & Explore",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/48305981-3264-4274-9cd4-f919819cec1c/tempImageLBiyb7.jpg"
    }
  ];

  const teamReplejs = [
    {
      name: "Mirela Čavajda",
      role: "Vlasnica studija i Reformer instruktorica",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/fbc50d78-94e9-4b68-b500-37841b3d44a4/DSC_2013.jpg"
    },
    {
      name: "Edita Bralić",
      role: "Reformer pilates",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/0ff64dfa-c060-47c4-96b1-ed703bdbf44e/Helena+profilna.jpg"
    },
    {
      name: "Andrea Brzac",
      role: "Reformer pilates",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/f67f7cca-db70-4e0f-9aac-2c7c24b95b98/IMG_6435.jpg"
    },
    {
      name: "Kristina Boljun",
      role: "Reformer pilates",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/b80ac97a-7d3f-4806-bec8-42d1a9cdfcc9/tempImageGCzX2s.jpg"
    },
    {
      name: "Antonela Horvat",
      role: "Reformer pilates i (polu)privatna yoga",
      image: "https://images.squarespace-cdn.com/content/v1/64ac0e1c00e67741dc4b2377/b80ac97a-7d3f-4806-bec8-42d1a9cdfcc9/tempImageGCzX2s.jpg"
    },
    {
      name: "Adrijana Kontek",
      role: "Reformer pilates"
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24 relative selection:bg-brand-500 selection:text-stone-950 overflow-hidden">
      <div className="absolute top-0 left-[-20%] w-[600px] h-[600px] bg-brand-900/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute right-[-10%] bottom-0 w-[500px] h-[500px] border-stone-200/40 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="text-brand-400 font-sans tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-4 before:h-px before:w-16 before:bg-brand-500 after:h-px after:w-16 after:bg-brand-500">
            Naša Lica
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight">
            Upoznaj <span className="font-light italic text-brand-400">Tim</span>
          </h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed">
            Stručno osposobljeni profesionalci s dugogodišnjim iskustvom koji vaš rast i sigurnost stavljaju na prvo mjesto.
          </p>
        </motion.div>

        {/* Tim Yoga Plejs */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-12 border-b border-stone-200 pb-4">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Tim Yoga Plejsa</h2>
            <span className="text-brand-400 font-light italic mt-1 text-lg">Savska cesta 141</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamYogaPlejs.map((member, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={member.name}
              >
                <TiltCard>
                  <div className="bg-transparent  rounded-none p-6 text-center border border-stone-200 hover:-translate-y-2  flex flex-col items-center h-full relative group transition-all duration-700">
                    
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative border-2 border-stone-300 group-hover:border-brand-500 transition-colors duration-500">
                       {member.image ? (
                           <Image 
                              src={member.image} 
                              alt={member.name} 
                              fill 
                              className="object-cover group-hover:scale-110 transition-transform duration-700" 
                              sizes="128px"
                           />
                       ) : (
                           <div className="w-full h-full border-stone-200 flex items-center justify-center text-stone-500 font-serif text-3xl">
                               {member.name.charAt(0)}
                           </div>
                       )}
                    </div>
                    
                    <h3 className="text-2xl font-serif text-stone-900 mb-2 group-hover:text-brand-400 transition-colors">
                      {member.name}
                    </h3>
                    
                    <span className="text-xs uppercase tracking-widest text-stone-500 leading-relaxed font-semibold">
                      {member.role}
                    </span>
                    
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tim REplejs */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-12 border-b border-stone-200 pb-4">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Tim REplejsa</h2>
            <span className="text-brand-400 font-light italic mt-1 text-lg">Knežija</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamReplejs.map((member, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={member.name}
              >
                <TiltCard>
                  <div className="bg-transparent  rounded-none p-6 text-center border border-stone-200 hover:-translate-y-2  flex flex-col items-center h-full relative group transition-all duration-700">
                    
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative border-2 border-stone-300 group-hover:border-brand-500 transition-colors duration-500">
                       {member.image ? (
                           <Image 
                              src={member.image} 
                              alt={member.name} 
                              fill 
                              className="object-cover group-hover:scale-110 transition-transform duration-700 saturate-50 group-hover:saturate-100" 
                              sizes="128px"
                           />
                       ) : (
                           <div className="w-full h-full border-stone-200 flex items-center justify-center text-stone-500 font-serif text-3xl">
                               {member.name.charAt(0)}
                           </div>
                       )}
                    </div>
                    
                    <h3 className="text-2xl font-serif text-stone-900 mb-2 group-hover:text-brand-400 transition-colors">
                      {member.name}
                    </h3>
                    
                    <span className="text-xs uppercase tracking-widest text-stone-500 leading-relaxed font-semibold">
                      {member.role}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
