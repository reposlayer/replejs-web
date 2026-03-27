"use client";

import { useEffect, useRef } from "react";

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2, vx: 0, vy: 0 };
    let points: { x: number; y: number; age: number }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.vx = e.clientX - mouse.x;
      mouse.vy = e.clientY - mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      points.push({ x: mouse.x, y: mouse.y, age: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update points
      for (let i = 0; i < points.length; i++) {
        points[i].age += 1;
      }
      // Remove old points
      points = points.filter((p) => p.age < 50);

      // Draw elegant spline through points
      if (points.length > 2) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length - 2; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        
        ctx.quadraticCurveTo(
          points[points.length - 2].x,
          points[points.length - 2].y,
          points[points.length - 1].x,
          points[points.length - 1].y
        );

        ctx.strokeStyle = "rgba(141, 126, 107, 0.15)"; // brand-500 equivalent very subtle
        ctx.lineWidth = 120;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.filter = "blur(30px)";
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] mix-blend-multiply opacity-60"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
