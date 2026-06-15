"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDuration: number;
  twinkleDelay: number;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    };

    const generateStars = () => {
      starsRef.current = Array.from({ length: 280 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.2,
        opacity: Math.random() * 0.7 + 0.1,
        twinkleDuration: Math.random() * 3000 + 1500,
        twinkleDelay: Math.random() * 5000,
      }));
    };

    const draw = (timestamp: number) => {
      timeRef.current = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Nebula blobs
      const nebulae = [
        { x: canvas.width * 0.1, y: canvas.height * 0.3, r: 280, color: "120,40,160" },
        { x: canvas.width * 0.85, y: canvas.height * 0.15, r: 220, color: "160,50,130" },
        { x: canvas.width * 0.75, y: canvas.height * 0.8, r: 180, color: "100,30,150" },
      ];

      nebulae.forEach(({ x, y, r, color }) => {
        const drift = Math.sin(timestamp / 12000) * 20;
        const grd = ctx.createRadialGradient(x + drift, y, 0, x + drift, y, r);
        grd.addColorStop(0, `rgba(${color},0.18)`);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x + drift, y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Stars
      starsRef.current.forEach((star) => {
        const t = (timestamp + star.twinkleDelay) / star.twinkleDuration;
        const flicker = (Math.sin(t * Math.PI * 2) * 0.5 + 0.5);
        const alpha = star.opacity * (0.3 + flicker * 0.7);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,240,255,${alpha})`;
        ctx.fill();

        // Bright star cross sparkle
        if (star.size > 1.4 && flicker > 0.7) {
          ctx.strokeStyle = `rgba(255,240,255,${alpha * 0.6})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 3, star.y);
          ctx.lineTo(star.x + star.size * 3, star.y);
          ctx.moveTo(star.x, star.y - star.size * 3);
          ctx.lineTo(star.x, star.y + star.size * 3);
          ctx.stroke();
        }
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "radial-gradient(ellipse at 50% 60%, #150020 0%, #0a0010 40%, #020006 100%)" }}
    />
  );
}