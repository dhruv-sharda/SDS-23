"use client";

import { motion } from "framer-motion";

export default function PlanetHero() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
      {/* Outer orbit ring — wide, tilted */}
      <motion.div
        className="absolute"
        style={{
          width: 820,
          height: 820,
          borderRadius: "50%",
          perspective: 900,
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "1.5px solid rgba(216,191,216,0.18)",
            boxShadow:
              "0 0 30px rgba(216,191,216,0.12), inset 0 0 30px rgba(216,191,216,0.06)",
            transformStyle: "preserve-3d",
          }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Main orbit ring — sparkly */}
      <motion.div
        className="absolute"
        style={{ width: 680, height: 680 }}
      >
        <motion.svg
          width="680"
          height="680"
          viewBox="0 0 680 680"
          style={{ position: "absolute", inset: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d8bfd8" stopOpacity="0.0" />
              <stop offset="80%" stopColor="#d8bfd8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#d8bfd8" stopOpacity="0.0" />
            </radialGradient>
            <filter id="ringBlur">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
          </defs>
          {/* Glow ring */}
          <ellipse
            cx="340" cy="340" rx="320" ry="100"
            fill="none"
            stroke="url(#ringGlow)"
            strokeWidth="18"
            filter="url(#ringBlur)"
            opacity="0.7"
          />
          {/* Sharp inner ring */}
          <ellipse
            cx="340" cy="340" rx="320" ry="100"
            fill="none"
            stroke="rgba(216,191,216,0.55)"
            strokeWidth="1.2"
          />
          {/* Sparkle dots on ring */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const rx = 320, ry = 100;
            const x = 340 + rx * Math.cos(angle);
            const y = 340 + ry * Math.sin(angle);
            const size = i % 4 === 0 ? 2.5 : 1.2;
            return (
              <circle
                key={i}
                cx={x} cy={y} r={size}
                fill="rgba(255,240,255,0.9)"
              />
            );
          })}
        </motion.svg>
      </motion.div>

      {/* Inner orbit ring */}
      <motion.svg
        width="540"
        height="540"
        viewBox="0 0 540 540"
        className="absolute"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <ellipse
          cx="270" cy="270" rx="250" ry="75"
          fill="none"
          stroke="rgba(216,191,216,0.2)"
          strokeWidth="0.8"
        />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const x = 270 + 250 * Math.cos(angle);
          const y = 270 + 75 * Math.sin(angle);
          return <circle key={i} cx={x} cy={y} r="1" fill="rgba(216,191,216,0.6)" />;
        })}
      </motion.svg>

      {/* The planet itself */}
      <div
        className="absolute"
        style={{
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 35% 30%, #4a2060 0%, #2a0d3e 30%, #150025 65%, #0a0018 100%)",
          boxShadow:
            "0 0 80px rgba(150,80,200,0.25), 0 0 160px rgba(100,40,160,0.15), inset -40px -20px 80px rgba(0,0,0,0.6)",
          overflow: "hidden",
        }}
      >
        {/* Crater texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 35%, rgba(100,60,140,0.3) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(80,40,120,0.2) 0%, transparent 30%), radial-gradient(circle at 25% 70%, rgba(60,20,100,0.25) 0%, transparent 25%)",
          }}
        />
        {/* Atmosphere rim */}
        <div
          style={{
            position: "absolute",
            inset: -4,
            borderRadius: "50%",
            border: "4px solid transparent",
            boxShadow: "inset 0 0 30px rgba(180,120,220,0.3)",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(180,120,220,0.15) 0%, transparent 60%)",
          }}
        />
      </div>
    </div>
  );
}