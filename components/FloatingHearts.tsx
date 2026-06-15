"use client";

import { motion } from "framer-motion";

const hearts = [
  { left: 8, delay: 0.2, duration: 10, size: 18 },
  { left: 16, delay: 1.4, duration: 12, size: 24 },
  { left: 24, delay: 2.1, duration: 9, size: 16 },
  { left: 32, delay: 0.8, duration: 13, size: 28 },
  { left: 41, delay: 3.2, duration: 11, size: 20 },
  { left: 50, delay: 1.1, duration: 14, size: 26 },
  { left: 58, delay: 2.8, duration: 10, size: 18 },
  { left: 66, delay: 0.5, duration: 12, size: 22 },
  { left: 74, delay: 3.8, duration: 9, size: 16 },
  { left: 82, delay: 1.9, duration: 13, size: 25 },
  { left: 90, delay: 2.5, duration: 11, size: 19 },
];

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute bottom-[-40px] text-[#F4D7FF]"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            textShadow:
              "0 0 12px rgba(216,191,216,0.9), 0 0 28px rgba(216,191,216,0.35)",
          }}
          initial={{ y: 0, opacity: 0, scale: 0.8 }}
          animate={{
            y: "-110vh",
            opacity: [0, 0.9, 0.6, 0],
            scale: [0.8, 1.15, 1],
            x: [0, 20, -20, 10],
            rotate: [0, 12, -10, 5],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ♡
        </motion.div>
      ))}
    </div>
  );
}