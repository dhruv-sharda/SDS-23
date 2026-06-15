"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number; y: number; z: number;
  size: number; opacity: number;
  twinkleDuration: number; twinkleDelay: number;
  colorShift: number;
}

interface ShootingStar {
  x: number; y: number;
  vx: number; vy: number;
  length: number; opacity: number;
  life: number; maxLife: number;
  active: boolean;
}

interface DustParticle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  life: number; maxLife: number;
}

interface NebulaBlob {
  x: number; y: number;
  r: number; r2: number;
  color: [number, number, number];
  driftX: number; driftY: number;
  driftSpeed: number; driftPhase: number;
  pulseSpeed: number; pulsePhase: number;
  rotation: number; rotSpeed: number;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    stars: [] as Star[],
    shootingStars: [] as ShootingStar[],
    dustParticles: [] as DustParticle[],
    nebulae: [] as NebulaBlob[],
    animFrame: 0,
    lastShoot: 0,
    lastDustSpawn: 0,
    mouseX: 0.5,
    mouseY: 0.5,
    targetMouseX: 0.5,
    targetMouseY: 0.5,
  });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: false })!;
    const s = stateRef.current;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initNebulae();
    };

    const initStars = () => {
      s.stars = Array.from({ length: 520 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random(),
        size: Math.random() * 2.2 + 0.15,
        opacity: Math.random() * 0.75 + 0.15,
        twinkleDuration: Math.random() * 2800 + 800,
        twinkleDelay: Math.random() * 8000,
        colorShift: Math.random(),
      }));
    };

    const initNebulae = () => {
      const w = canvas.width, h = canvas.height;
      s.nebulae = [
        { x: w*0.08,  y: h*0.28, r: 340, r2: 500, color: [130,40,180],  driftX:28, driftY:18, driftSpeed:0.00006, driftPhase:0,   pulseSpeed:0.0004,  pulsePhase:0,   rotation:0,   rotSpeed:0.000015 },
        { x: w*0.88,  y: h*0.12, r: 260, r2: 400, color: [190,45,140],  driftX:22, driftY:30, driftSpeed:0.00008, driftPhase:1.2, pulseSpeed:0.00035, pulsePhase:0.7, rotation:0.8, rotSpeed:0.00002  },
        { x: w*0.50,  y: h*0.72, r: 300, r2: 460, color: [90, 20,160],  driftX:18, driftY:12, driftSpeed:0.00005, driftPhase:2.5, pulseSpeed:0.0003,  pulsePhase:1.4, rotation:1.2, rotSpeed:0.000012 },
        { x: w*0.82,  y: h*0.82, r: 180, r2: 280, color: [220,60,120],  driftX:14, driftY:20, driftSpeed:0.0001,  driftPhase:3.8, pulseSpeed:0.0005,  pulsePhase:2.0, rotation:2.1, rotSpeed:0.000025 },
        { x: w*0.05,  y: h*0.85, r: 200, r2: 300, color: [60, 10,130],  driftX:20, driftY:10, driftSpeed:0.00007, driftPhase:0.6, pulseSpeed:0.00025, pulsePhase:3.0, rotation:0.4, rotSpeed:0.00001  },
        { x: w*0.50,  y: h*0.50, r: 240, r2: 480, color: [150,60,200],  driftX:10, driftY:10, driftSpeed:0.00004, driftPhase:1.8, pulseSpeed:0.0002,  pulsePhase:0.5, rotation:0,   rotSpeed:0.000008 },
        { x: w*0.30,  y: h*0.10, r: 160, r2: 260, color: [170,30,160],  driftX:16, driftY:22, driftSpeed:0.00009, driftPhase:4.2, pulseSpeed:0.00045, pulsePhase:1.8, rotation:1.6, rotSpeed:0.000018 },
      ];
    };

    const spawnShootingStar = () => {
      const angle = (Math.random() * 40 + 20) * (Math.PI / 180);
      const speed = Math.random() * 14 + 8;
      const data: ShootingStar = {
        x: Math.random() * canvas.width * 0.8,
        y: Math.random() * canvas.height * 0.45,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 130 + 60,
        opacity: Math.random() * 0.7 + 0.5,
        life: 0,
        maxLife: Math.random() * 55 + 35,
        active: true,
      };
      const slot = s.shootingStars.find((ss) => !ss.active);
      if (slot) Object.assign(slot, data);
      else s.shootingStars.push(data);
    };

    const draw = (ts: number) => {
      const W = canvas.width, H = canvas.height;

      // Smooth mouse parallax
      s.mouseX += (s.targetMouseX - s.mouseX) * 0.04;
      s.mouseY += (s.targetMouseY - s.mouseY) * 0.04;
      const mx = (s.mouseX - 0.5) * 2;
      const my = (s.mouseY - 0.5) * 2;

      // ── Base background ──────────────────────────────────────────────────
      ctx.fillStyle = "#020006";
      ctx.fillRect(0, 0, W, H);

      const bgPhase = ts * 0.00008;
      const bgGrd = ctx.createRadialGradient(
        W * (0.5 + Math.sin(bgPhase) * 0.12), H * (0.55 + Math.cos(bgPhase * 0.7) * 0.08), 0,
        W * 0.5, H * 0.5, W * 0.9
      );
      bgGrd.addColorStop(0,    "rgba(28, 4, 52, 0.95)");
      bgGrd.addColorStop(0.35, "rgba(14, 2, 32, 0.85)");
      bgGrd.addColorStop(0.7,  "rgba(6,  1, 18, 0.8)");
      bgGrd.addColorStop(1,    "rgba(2,  0,  6, 0.6)");
      ctx.fillStyle = bgGrd;
      ctx.fillRect(0, 0, W, H);

      // ── Nebulae ───────────────────────────────────────────────────────────
      ctx.globalCompositeOperation = "screen";
      s.nebulae.forEach((neb) => {
        const drift  = Math.sin(ts * neb.driftSpeed + neb.driftPhase);
        const drift2 = Math.cos(ts * neb.driftSpeed * 0.7 + neb.driftPhase + 1);
        const pulse  = 1 + Math.sin(ts * neb.pulseSpeed + neb.pulsePhase) * 0.12;
        const nx = neb.x + drift  * neb.driftX + mx * 12;
        const ny = neb.y + drift2 * neb.driftY + my * 8;
        const r  = neb.r  * pulse;
        const r2 = neb.r2 * pulse;
        const [cr, cg, cb] = neb.color;

        ctx.save();
        ctx.translate(nx, ny);
        ctx.rotate(neb.rotation + ts * neb.rotSpeed);

        // Soft outer halo
        const outerGrd = ctx.createRadialGradient(0, 0, r * 0.3, 0, 0, r2);
        outerGrd.addColorStop(0,   `rgba(${cr},${cg},${cb},0.08)`);
        outerGrd.addColorStop(0.5, `rgba(${cr},${cg},${cb},0.05)`);
        outerGrd.addColorStop(1,   `rgba(${cr},${cg},${cb},0.0)`);
        ctx.fillStyle = outerGrd;
        ctx.beginPath();
        ctx.ellipse(0, 0, r2, r2 * 0.68, 0, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        const innerGrd = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
        innerGrd.addColorStop(0,    `rgba(${cr},${cg},${cb},0.34)`);
        innerGrd.addColorStop(0.35, `rgba(${cr},${cg},${cb},0.20)`);
        innerGrd.addColorStop(0.7,  `rgba(${cr},${cg},${cb},0.08)`);
        innerGrd.addColorStop(1,    `rgba(${cr},${cg},${cb},0.0)`);
        ctx.fillStyle = innerGrd;
        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.62, 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });
      ctx.globalCompositeOperation = "source-over";

      // ── Milky Way band ────────────────────────────────────────────────────
      ctx.globalCompositeOperation = "screen";
      ctx.save();
      ctx.translate(W / 2, H / 2);
      ctx.rotate(0.35);
      const mwGrd = ctx.createLinearGradient(-W, 0, W, 0);
      mwGrd.addColorStop(0,    "rgba(0,0,0,0)");
      mwGrd.addColorStop(0.3,  "rgba(80,30,110,0.07)");
      mwGrd.addColorStop(0.5,  "rgba(130,55,170,0.11)");
      mwGrd.addColorStop(0.7,  "rgba(80,30,110,0.07)");
      mwGrd.addColorStop(1,    "rgba(0,0,0,0)");
      ctx.fillStyle = mwGrd;
      ctx.fillRect(-W, -H * 0.18, W * 2, H * 0.36);
      ctx.restore();
      ctx.globalCompositeOperation = "source-over";

      // ── Stars ─────────────────────────────────────────────────────────────
      ctx.globalCompositeOperation = "screen";
      s.stars.forEach((star) => {
        const t = (ts + star.twinkleDelay) / star.twinkleDuration;
        const flicker = Math.sin(t * Math.PI * 2) * 0.5 + 0.5;
        const alpha = star.opacity * (0.25 + flicker * 0.75);
        const px = star.x + mx * star.z * 18;
        const py = star.y + my * star.z * 12;

        const cr = 255;
        const cg = Math.round(210 + star.colorShift * 40);
        const cb = 255;

        // Glow halo for bigger stars
        if (star.size > 1.1) {
          const haloR = star.size * (3.5 + flicker * 3.5);
          const haloGrd = ctx.createRadialGradient(px, py, 0, px, py, haloR);
          haloGrd.addColorStop(0, `rgba(${cr},${cg},${cb},${alpha * 0.4})`);
          haloGrd.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = haloGrd;
          ctx.beginPath();
          ctx.arc(px, py, haloR, 0, Math.PI * 2);
          ctx.fill();
        }

        // Star core
        ctx.beginPath();
        ctx.arc(px, py, star.size * (0.75 + flicker * 0.45), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`;
        ctx.fill();

        // 4-point diffraction spikes on bright stars
        if (star.size > 1.5 && flicker > 0.55) {
          const spike = star.size * (5 + flicker * 6);
          const sa = alpha * (flicker - 0.55) * 1.8;
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${sa})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(px - spike, py); ctx.lineTo(px + spike, py);
          ctx.moveTo(px, py - spike); ctx.lineTo(px, py + spike);
          ctx.stroke();
          // Diagonal mini-spikes
          const d = spike * 0.45;
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.moveTo(px - d, py - d); ctx.lineTo(px + d, py + d);
          ctx.moveTo(px + d, py - d); ctx.lineTo(px - d, py + d);
          ctx.stroke();
        }
      });
      ctx.globalCompositeOperation = "source-over";

      // ── Shooting stars ────────────────────────────────────────────────────
      if (ts - s.lastShoot > Math.random() * 2800 + 1200) {
        spawnShootingStar();
        s.lastShoot = ts;
      }

      s.shootingStars.forEach((ss) => {
        if (!ss.active) return;
        ss.life++;
        if (ss.life >= ss.maxLife) { ss.active = false; return; }
        ss.x += ss.vx;
        ss.y += ss.vy;
        const prog  = ss.life / ss.maxLife;
        const fade  = prog < 0.2 ? prog / 0.2 : prog > 0.75 ? 1 - (prog - 0.75) / 0.25 : 1;
        const alpha = ss.opacity * fade;
        const spd   = Math.hypot(ss.vx, ss.vy);
        const tailX = ss.x - (ss.vx / spd) * ss.length;
        const tailY = ss.y - (ss.vy / spd) * ss.length;

        ctx.globalCompositeOperation = "screen";

        const trailGrd = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        trailGrd.addColorStop(0,    "rgba(0,0,0,0)");
        trailGrd.addColorStop(0.55, `rgba(200,155,245,${alpha * 0.35})`);
        trailGrd.addColorStop(1,    `rgba(255,245,255,${alpha})`);
        ctx.strokeStyle = trailGrd;
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();

        // Bright head glow
        const headGrd = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, 7);
        headGrd.addColorStop(0, `rgba(255,250,255,${alpha})`);
        headGrd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = headGrd;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalCompositeOperation = "source-over";
      });

      // ── Floating dust motes ───────────────────────────────────────────────
      if (ts - s.lastDustSpawn > 100) {
        const edge = Math.floor(Math.random() * 4);
        const dx = edge === 0 ? 0 : edge === 1 ? W : Math.random() * W;
        const dy = edge === 0 || edge === 1 ? Math.random() * H : edge === 2 ? 0 : H;
        s.dustParticles.push({
          x: dx, y: dy,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          size: Math.random() * 1.4 + 0.3,
          opacity: Math.random() * 0.35 + 0.08,
          life: 0, maxLife: Math.random() * 450 + 200,
        });
        if (s.dustParticles.length > 200) s.dustParticles.splice(0, 1);
        s.lastDustSpawn = ts;
      }

      ctx.globalCompositeOperation = "screen";
      for (let i = s.dustParticles.length - 1; i >= 0; i--) {
        const p = s.dustParticles[i];
        p.life++;
        if (p.life > p.maxLife) { s.dustParticles.splice(i, 1); continue; }
        p.x += p.vx;
        p.y += p.vy;
        const prog = p.life / p.maxLife;
        const fade = prog < 0.1 ? prog / 0.1 : prog > 0.8 ? 1 - (prog - 0.8) / 0.2 : 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,170,235,${p.opacity * fade})`;
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      // ── Vignette ──────────────────────────────────────────────────────────
      const vig = ctx.createRadialGradient(W/2, H/2, W*0.22, W/2, H/2, W*0.82);
      vig.addColorStop(0, "rgba(2,0,6,0)");
      vig.addColorStop(1, "rgba(2,0,6,0.62)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      s.animFrame = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      s.targetMouseX = e.clientX / window.innerWidth;
      s.targetMouseY = e.clientY / window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    s.animFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(s.animFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
