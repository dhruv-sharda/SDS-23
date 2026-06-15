"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullText =
  "We're a perfect match for each other,\nlet nobody tell you otherwise.";

export default function SmoothTypewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      style={{
        fontFamily: "var(--font-playfair), serif",
        fontSize: "clamp(1.35rem, 2vw, 1.8rem)",
        fontStyle: "italic",
        color: "rgba(235,220,240,0.9)",
        textAlign: "center",
        lineHeight: 1.55,
        maxWidth: 620,
        textShadow:
          "0 0 18px rgba(216,191,216,0.35), 0 0 40px rgba(0,0,0,0.8)",
        marginTop: "4.2rem",
        whiteSpace: "pre-line",
        minHeight: "5.6rem",
      }}
    >
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.9 }}
        style={{ color: "#D8BFD8" }}
      >
        |
      </motion.span>
    </motion.p>
  );
}