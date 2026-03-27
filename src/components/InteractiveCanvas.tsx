"use client";

import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  life: number;
  maxLife: number;
}

interface Petal {
  x: number;
  y: number;
  z: number;
  size: number;
  length: number;
  vx: number;
  vy: number;
  theta: number; // Rotation
  spin: number;  // Rotation speed
  life: number;
  baseAlpha: number;
  color: string;
  isBokeh: boolean;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    let particles: Petal[] = [];
    let ripples: Ripple[] = [];
    let mouse = { x: -1000, y: -1000 };
    let lastMouse = { x: -1000, y: -1000 };
    let isMoving = false;
    let moveTimeout: NodeJS.Timeout;

    // Soft, luxurious cherry blossom color palette
    const sakuraColors = [
      "255, 183, 197", // Soft pink
      "255, 204, 213", // Pastel pink
      "255, 228, 225", // Misty rose
      "255, 240, 245", // Lavender blush
      "255, 105, 180"  // Hot pink deeper tones
    ];

    const addParticle = (x: number, y: number, isAmbient: boolean = false) => {
      const isBokeh = Math.random() > 0.6; 
      const zDepth = isBokeh ? (Math.random() * 1.5 + 0.5) : (Math.random() * 0.5 + 0.8);
      const color = sakuraColors[Math.floor(Math.random() * sakuraColors.length)];
      
      particles.push({
        x: x,
        y: y,
        z: zDepth,
        size: isBokeh ? Math.random() * 20 + 10 : Math.random() * 4 + 2,
        length: Math.random() * 2 + 1.2, // Elongation factor for petals
        vx: (Math.random() - 0.5) * 1.5,
        vy: Math.random() * 1.5 + 0.5, 
        theta: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.1,
        life: Math.random() * 1000,
        baseAlpha: isBokeh ? (Math.random() * 0.12 + 0.05) : (Math.random() * 0.6 + 0.2),
        color: color,
        isBokeh
      });
    };

    for(let i=0; i<60; i++) {
       addParticle(Math.random() * width, Math.random() * height, true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => { isMoving = false; }, 150);

      const dx = mouse.x - lastMouse.x;
      const dy = mouse.y - lastMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (lastMouse.x === -1000) return;

      // Ripples of air pushing through
      if (dist > 15) {
         ripples.push({ x: mouse.x, y: mouse.y, life: 0, maxLife: 30 });
      }

      // "Razbucivanje" force (Scattering the petals brutally gently)
      for (let p of particles) {
         const pdx = p.x - mouse.x;
         const pdy = p.y - mouse.y;
         const pDist = Math.sqrt(pdx * pdx + pdy * pdy);
         
         // Cursor aura pushes things away and makes them spin rapidly
         if (pDist < 250) {
            const force = (250 - pDist) / 250;
            p.vx += (pdx / pDist) * force * (dist * 0.12);
            p.vy += (pdy / pDist) * force * (dist * 0.12) - force * 2;
            p.spin += (Math.random() - 0.5) * force * 0.6; // High spin
         }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Continuously let petals softly fall
      if (Math.random() > 0.4) { 
         addParticle(Math.random() * width, -50, true);
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
         const r = ripples[i];
         r.life++;
         if (r.life >= r.maxLife) {
            ripples.splice(i, 1);
            continue;
         }
         const progress = r.life / r.maxLife;
         ctx.beginPath();
         ctx.arc(r.x, r.y, progress * 120, 0, Math.PI * 2);
         ctx.strokeStyle = `rgba(255, 183, 197, ${(1 - progress) * 0.05})`;
         ctx.lineWidth = 20;
         ctx.stroke();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        // Extreme drag makes them float ethereally
        p.vx *= 0.93; 
        p.vy *= 0.93; 
        
        // Return to natural soft falling
        p.vy += 0.04 * p.z; 
        p.vx += Math.sin(p.life * 0.03) * 0.06 * p.z; // Natural swaying
        
        p.theta += p.spin;
        p.spin *= 0.95; 

        p.x += p.vx;
        p.y += p.vy;

        if (p.y > height + 100) {
           p.y = -50;
           p.x = Math.random() * width;
           p.vx = 0;
        }
        if (p.x > width + 100) p.x = -50;
        if (p.x < -100) p.x = width + 50;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.theta);

        if (p.isBokeh) {
           ctx.beginPath();
           ctx.ellipse(0, 0, p.size, p.size * p.length, 0, 0, Math.PI * 2);
           ctx.fillStyle = `rgba(${p.color}, ${p.baseAlpha})`;
           ctx.shadowBlur = p.size * 2;
           ctx.shadowColor = `rgba(${p.color}, ${p.baseAlpha * 0.8})`;
           ctx.fill();
        } else {
           // Teardrop shape for petal
           ctx.beginPath();
           ctx.moveTo(0, -p.size * p.length);
           ctx.bezierCurveTo(p.size, -p.size, p.size, p.size, 0, p.size * p.length);
           ctx.bezierCurveTo(-p.size, p.size, -p.size, -p.size, 0, -p.size * p.length);
           
           ctx.fillStyle = `rgba(${p.color}, ${p.baseAlpha})`;
           ctx.shadowBlur = p.size;
           ctx.shadowColor = `rgba(${p.color}, ${p.baseAlpha * 1.5})`;
           ctx.fill();
        }
        
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] mix-blend-multiply opacity-80"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
