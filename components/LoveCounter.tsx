"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface TimeUnit {
  value: string;
  prev: string;
  label: string;
}

function getElapsed() {
  const start = new Date("2025-06-16T00:00:00");
  const now = new Date();
  const diff = Math.max(0, now.getTime() - start.getTime());

  const totalSecs = Math.floor(diff / 1000);
  const secs = totalSecs % 60;
  const mins = Math.floor(totalSecs / 60) % 60;
  const hrs = Math.floor(totalSecs / 3600) % 24;
  const days = Math.floor(totalSecs / 86400);

  return {
    days: String(days).padStart(3, "0"),
    hrs: String(hrs).padStart(2, "0"),
    mins: String(mins).padStart(2, "0"),
    secs: String(secs).padStart(2, "0"),
  };
}

function FlipUnit({ value, label }: { value: string; label: string }) {
  const [display, setDisplay] = useState(value);
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== display) {
      setPrev(display);
      setDisplay(value);
      setFlip(true);
      const t = setTimeout(() => setFlip(false), 300);
      return () => clearTimeout(t);
    }
  }, [value, display]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: flip ? -20 : 0, opacity: flip ? 0 : 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="block tabular-nums"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "#f0e6f0",
            }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "0.18em",
          color: "rgba(216,191,216,0.55)",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getElapsed());

  useEffect(() => {
    const interval = setInterval(() => setTime(getElapsed()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="relative z-30 flex flex-col items-center gap-3"
    >
      {/* Label row */}
      <div className="flex items-center gap-2">
        <Heart size={13} className="fill-[#d8bfd8] text-[#d8bfd8]" />
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.78rem",
            letterSpacing: "0.12em",
            color: "rgba(216,191,216,0.8)",
            fontWeight: 500,
          }}
        >
          Together Since June 16, 2025
        </span>
        <Heart size={13} className="fill-[#d8bfd8] text-[#d8bfd8]" />
      </div>

      {/* Counter box */}
      <div
        className="pulse-glow flex items-end gap-0 rounded-2xl px-6 py-4"
        style={{
          background: "rgba(10,4,20,0.72)",
          border: "1px solid rgba(216,191,216,0.18)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          gap: 0,
        }}
      >
        <FlipUnit value={time.days} label="DAYS" />
        <Divider />
        <FlipUnit value={time.hrs} label="HRS" />
        <Divider />
        <FlipUnit value={time.mins} label="MINS" />
        <Divider />
        <FlipUnit value={time.secs} label="SECS" />
      </div>
    </motion.div>
  );
}

function Divider() {
  return (
    <span
      style={{
        fontSize: "1.8rem",
        color: "rgba(216,191,216,0.2)",
        marginBottom: "0.8rem",
        padding: "0 0.4rem",
        lineHeight: 1,
        fontWeight: 300,
      }}
    >
      ·
    </span>
  );
}