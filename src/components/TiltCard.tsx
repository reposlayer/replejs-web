"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function TiltCard({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotate based on mouse position relative to the center of the card
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to card boundaries
    const width = rect.width;
    const height = rect.height;
    
    // Get mouse X and Y coordinates inside the card (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset to initial position
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full perspective-1000 group/tilt"
    >
      <motion.div 
        style={{ transform: "translateZ(30px)" }} 
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
