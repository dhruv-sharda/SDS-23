"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import StarfieldBackground from "@/components/StarfieldBackground";
import BackButton from "@/components/BackButton";
import MemoryVault from "@/components/MemoryVault";
const titleText = "The First Month";

const storyText = `Happy one month anniversary to the person who has become my entire world. These past four weeks have been a beautiful revelation, showing me that physical distance is nothing when our souls are so deeply intertwined. You have gathered the scattered pieces of my life, mending and healing me with a grace I never thought possible. Your presence is the sanctuary I never knew I needed, and every conversation we share feels like coming home.

Thank you for being my guiding north star, my peace, and my truest joy. This first month is only the beginning of the infinite journey we are destined to share across time and space. I promise to cherish you, protect your heart, and walk beside you through every season of life. You are my greatest blessing, and my love for you grows deeper with every heartbeat.

I love you so much. Cheers to one year and a thousand years!`;

function Typewriter({ text, speed = 28 }: { text: string; speed?: number }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplay("");

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {display}
      <span className="animate-pulse text-[#D8BFD8]">|</span>
    </>
  );
}

export default function FirstMonthPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020006] text-white">
      <StarfieldBackground />
      <Navbar />
      <BackButton href="/universe" />

      <div
        className="relative z-20 mx-auto max-w-6xl px-6 pb-20 pt-28"
        style={{ transform: "scale(0.9)", transformOrigin: "top center" }}
      >
        <section className="mt-10 text-center">
          <p className="uppercase tracking-[0.55em] text-[#D8BFD8]/65">
            Memory Vault
          </p>

          <h1
            className="mt-6 min-h-[8rem] font-serif italic text-[#e7d0ef]"
            style={{
              fontSize: "clamp(4rem,8vw,8rem)",
              textShadow: "0 0 30px rgba(216,191,216,0.55)",
            }}
          >
            <Typewriter text={titleText} speed={75} />
          </h1>

          <div className="mx-auto mt-4 inline-flex rounded-full border border-[#D8BFD8]/20 bg-[#D8BFD8]/15 px-7 py-3 font-serif text-2xl italic text-[#f2d7f2] shadow-[0_0_25px_rgba(216,191,216,0.16)] backdrop-blur-xl">
            July 16, 2025
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-[#D8BFD8]/15 bg-black/45 p-10 shadow-[0_0_45px_rgba(216,191,216,0.12)] backdrop-blur-xl">
          <h2 className="mb-8 text-center font-serif text-4xl italic text-[#e7d0ef]">
            One Month Together
          </h2>

          <p className="whitespace-pre-line font-serif text-xl italic leading-10 text-white/80">
            <Typewriter text={storyText} speed={22} />
          </p>
        </section>
        <MemoryVault
  title="The First Month"
  folder="first-month"
/>
      </div>
    </main>
  );
}