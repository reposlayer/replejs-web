"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68266?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552858725-2758b5fb1286?auto=format&fit=crop&w=1200&q=80"
];

export default function InteractiveGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 50,
    stiffness: 400,
    damping: 50,
  });

  const x = useTransform(smoothProgress, [0, 1], ["10%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-stone-50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
           <div className="text-[15rem] md:text-[25rem] font-serif text-stone-100/50 whitespace-nowrap blur-[2px] select-none tracking-tighter">
              GALERIJA
           </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-[10vw]">
          {images.map((src, idx) => (
            <GalleryItem key={idx} src={src} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GalleryItem({ src, index }: { src: string, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Create an inner parallax effect for the image inside its container
  return (
    <motion.div 
      className="relative shrink-0 w-[80vw] md:w-[45vw] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden group border border-stone-200 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-full relative origin-center"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={`Gallery Image ${index + 1}`}
          fill
          className="object-cover transition-all duration-700 filter group-hover:brightness-110"
          sizes="(max-width: 768px) 80vw, 45vw"
          quality={90}
        />
      </motion.div>
      
      {/* Fancy overlay layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1]">
         <span className="text-white font-sans text-xs tracking-[0.3em] uppercase bg-stone-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
           Pogled {index + 1}
         </span>
      </div>
    </motion.div>
  );
}
