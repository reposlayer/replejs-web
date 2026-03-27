"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] bg-stone-950 pointer-events-none flex items-center justify-center"
      >
        <motion.div 
           initial={{ scale: 1, opacity: 1 }}
           animate={{ scale: 1.5, opacity: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="w-32 h-32 rounded-full border border-brand-500/30 blur-[2px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
