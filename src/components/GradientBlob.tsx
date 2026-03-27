"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GradientBlob() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
       {/* Ambient stationary blobs */}
       <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-200/20 blur-[150px] rounded-full mix-blend-multiply opacity-50 animate-blob" />
       <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-stone-300/30 blur-[150px] rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />
       <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-brand-100/30 blur-[150px] rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />

       {/* Cursor tracking subtle glow */}
       <motion.div
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 50, mass: 2 }}
        className="absolute w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-[100px] opacity-40 mix-blend-screen hidden md:block"
       />
    </div>
  );
}
