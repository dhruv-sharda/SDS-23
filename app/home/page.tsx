"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import CountdownTimer from "@/components/CountdownTimer";
import PlanetHero from "@/components/PlanetHero";
import SmoothTypewriter from "@/components/SmoothTypewriter";

export default function HomePage() {
  return (
    <main
      className="relative h-screen w-full overflow-hidden"
      style={{ background: "#020006" }}
    >
      <StarfieldBackground />
      <Navbar />

     <div
  className="pointer-events-none absolute inset-0 flex items-center justify-center"
  style={{
    paddingTop: "130px",
    transform: "scale(0.9)",
          transformOrigin: "center center",
        }}
      >
        <PlanetHero />
      </div>

      <div
        className="relative z-20 flex min-h-screen flex-col items-center"
        style={{ paddingTop: "100px" }}
      >
        <div
          className="flex flex-1 flex-col items-center justify-center gap-5 pb-10 pt-1"
          style={{
            transform: "scale(0.9)",
            transformOrigin: "center center",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)",
              letterSpacing: "0.55em",
              color: "rgba(232,210,238,0.88)",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: "1.2rem",
              textShadow:
                "0 0 18px rgba(216,191,216,0.65), 0 0 40px rgba(150,80,180,0.35)",
            }}
          >
            Welcome to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(4.4rem, 7.3vw, 7.8rem)",
              color: "#e7d0ef",
              lineHeight: 0.95,
              textShadow:
                "0 0 28px rgba(216,191,216,0.65), 0 0 90px rgba(180,120,220,0.28)",
              position: "relative",
              marginBottom: "1.6rem",
            }}
          >
            SDS-23

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 64, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              style={{
                position: "absolute",
                left: "50%",
                top: "100%",
                width: 1,
                background:
                  "linear-gradient(to bottom, rgba(216,191,216,0.75), transparent)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              style={{
                position: "absolute",
                left: "50%",
                top: "calc(100% + 58px)",
                transform: "translateX(-50%)",
                color: "#D8BFD8",
                filter: "drop-shadow(0 0 12px rgba(216,191,216,0.9))",
                fontSize: "1.15rem",
              }}
            >
              ♡
            </motion.div>
          </motion.h1>

          <SmoothTypewriter />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="my-6 flex items-center gap-3"
          >
            <div
              style={{
                width: 60,
                height: 1,
                background:
                  "linear-gradient(to right, transparent, rgba(216,191,216,0.3))",
              }}
            />

            <svg width="14" height="13" viewBox="0 0 14 13">
              <path
                d="M7 11.5s-5.5-3.8-5.5-7A3.2 3.2 0 0 1 7 2.5a3.2 3.2 0 0 1 5.5 2c0 3.2-5.5 7-5.5 7z"
                fill="none"
                stroke="rgba(216,191,216,0.45)"
                strokeWidth="1"
              />
            </svg>

            <div
              style={{
                width: 60,
                height: 1,
                background:
                  "linear-gradient(to left, transparent, rgba(216,191,216,0.3))",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.45em",
                color: "rgba(216,191,216,0.5)",
                textTransform: "uppercase",
              }}
            >
            </p>

            <motion.svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <path
                d="M9 13.5s-6.5-4.5-6.5-8.5A4.5 4.5 0 0 1 9 1.5a4.5 4.5 0 0 1 6.5 3.5c0 4-6.5 8.5-6.5 8.5z"
                fill="none"
                stroke="rgba(216,191,216,0.5)"
                strokeWidth="1.2"
              />
            </motion.svg>

            <CountdownTimer />
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(2,0,6,0.55) 100%)",
        }}
      />
    </main>
  );
}
