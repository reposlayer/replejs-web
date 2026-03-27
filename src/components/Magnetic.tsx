"use client";

import { useRef, useState, ReactElement, cloneElement } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function Magnetic({ children }: { children: ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const customSpring = { stiffness: 150, damping: 15, mass: 0.1 };
  
  const springX = useSpring(0, customSpring);
  const springY = useSpring(0, customSpring);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    springX.set(middleX * 0.3); // Intensity of magnetic pull
    springY.set(middleY * 0.3);
  };

  const reset = () => {
    springX.set(0);
    springY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-flex relative z-10"
    >
      {children}
    </motion.div>
  );
}
