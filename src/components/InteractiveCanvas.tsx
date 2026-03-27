"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number; // For 3D parallax depth computation
  size: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  baseAlpha: number;
  isBokeh: boolean;
  oscillation: number;
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

    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 };
    let lastMouse = { x: -1000, y: -1000 };
    let isMoving = false;
    let moveTimeout: NodeJS.Timeout;

    // Simulate 3D Camera Pan
    let cameraX = 0;
    let cameraY = 0;

    const addParticle = (x: number, y: number, isAmbient: boolean = false) => {
      const isBokeh = Math.random() > 0.8; 
      const zDepth = isBokeh ? (Math.random() * 2 + 0.1) : (Math.random() * 0.5 + 0.8); // Bokeh is close to camera (low z), dust is far (high z)
      
      particles.push({
        x: x + (Math.random() - 0.5) * (isBokeh ? 120 : 40),
        y: y + (Math.random() - 0.5) * (isBokeh ? 120 : 40),
        z: zDepth,
        size: isBokeh ? Math.random() * 18 + 12 : Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - (isAmbient ? 0.3 : 0.1),
        life: 0,
        maxLife: Math.random() * 100 + (isAmbient ? 200 : 150),
        baseAlpha: isBokeh ? (Math.random() * 0.15 + 0.05) : (Math.random() * 0.4 + 0.1),
        oscillation: Math.random() * 0.03 + 0.01,
        isBokeh
      });
    };

    // Pre-seed ambient dust 
    for(let i=0; i<30; i++) {
       addParticle(Math.random() * width, Math.random() * height, true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;

      // Update virtual camera look-at angle based on mouse
      cameraX += (mouse.x - width / 2) * 0.02;
      cameraY += (mouse.y - height / 2) * 0.02;

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => { isMoving = false; }, 100);

      const dx = mouse.x - lastMouse.x;
      const dy = mouse.y - lastMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (lastMouse.x === -1000) return;

      const spawnCount = Math.min(Math.floor(dist / 15), 3);
      for (let i = 0; i < spawnCount; i++) {
        const interpX = lastMouse.x + (dx * (i / spawnCount));
        const interpY = lastMouse.y + (dy * (i / spawnCount));
        addParticle(interpX, interpY, false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Ambient Spawning
      if (Math.random() > 0.75) { 
         addParticle(Math.random() * width, height + 50, true);
      }

      // Smooth camera interpolation towards 0 when mouse stops
      cameraX *= 0.95;
      cameraY *= 0.95;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Soft internal physics
        p.vy -= 0.002; 
        p.vx += Math.sin(p.life * p.oscillation) * 0.01; 
        
        if (isMoving) {
           const dx = mouse.x - p.x;
           const dy = mouse.y - p.y;
           const dist = dx * dx + dy * dy;
           if (dist < 15000) { 
              p.vx -= (dx / dist) * 1.5;
              p.vy -= (dy / dist) * 1.5;
           }
        }

        p.vx *= 0.97;
        p.vy *= 0.97;

        p.x += p.vx;
        p.y += p.vy;

        // Apply Parallax Translation based on 3D depth (Z index)
        const parallaxX = p.x - (cameraX * p.z * 0.05);
        const parallaxY = p.y - (cameraY * p.z * 0.05);

        const lifePercent = p.life / p.maxLife;
        let currentAlpha = Math.sin(lifePercent * Math.PI) * p.baseAlpha;
        if (currentAlpha < 0) currentAlpha = 0;

        ctx.beginPath();
        ctx.arc(parallaxX, parallaxY, p.size, 0, Math.PI * 2);
        
        if (p.isBokeh) {
           // Electric Lime Bokeh
           ctx.fillStyle = `rgba(212, 255, 0, ${currentAlpha * 0.4})`;
           ctx.shadowBlur = p.size * 2.5;
           ctx.shadowColor = `rgba(212, 255, 0, ${currentAlpha * 0.3})`;
        } else {
           // Sharp Lime Dust
           ctx.fillStyle = `rgba(225, 255, 100, ${currentAlpha})`;
           ctx.shadowBlur = p.size * 2;
           ctx.shadowColor = `rgba(212, 255, 0, ${currentAlpha * 2})`;
        }
        
        ctx.fill();
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
      className="fixed inset-0 pointer-events-none z-[1] mix-blend-plus-lighter"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
