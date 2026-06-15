"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnniversaryFireworks from "@/components/AnniversaryFireworks";
import Navbar from "@/components/Navbar";
import FloatingHearts from "@/components/FloatingHearts";
import StarfieldBackground from "@/components/StarfieldBackground";
import BackButton from "@/components/BackButton";
import MemoryVault from "@/components/MemoryVault";
const titleText = "The First Anniversary";

const storyText = `I do not know how to begin, nor do I know how to truly express what I feel, for it cannot be captured in the palm of my hands or even the world’s greatest hands for that matter. What I feel for you is bigger than the biggest object in existence.

You have picked me up from scrap, cleaned me, sewn me, repaired me, healed me, and recovered me in ways you will never truly fathom. Mentally, I was dead, living a life I did not want anymore until I came across you.

You fixed me, sampanna hota—my Sana Dhruv Sharda. You have mended my heart in ways you will never truly understand, for incomprehensible is the mind of men like me who are on the road to becoming what others could only live in their dreams.

In order to achieve all my goals, from zero to one hundred, I know I can trust you and have blind faith in you. With my family, my money, my house, and everything else, I know I can count on my guiding north star, which is you.

This is the first time I have ever spent a year with someone this closely, and I hope for it to be the last. You are my first and last love, Sana.

I cannot for once imagine how my life would have been if I never met you. I get why they say, "Behind every great man is a woman," and I understand why it becomes relentlessly crucial to have a woman beside him. Thinking a man can survive without a woman is a sin; men would crumble, societies would disintegrate, and the world would collapse into nothing. Yes, that is how life would be, pretty much, without you.

From all our trips and our physical meetings to all our Google Meets and online fun, this long distance has been extremely fulfilling and pleasant for me, regardless of social norms or whatever anyone else has to say.

So, give me your hand, my love, for it is going to be a long rollercoaster ride through this journey of time, this journey of life, and this entire lifetime.

And from one lifetime to another, I shall always come searching for you. Whether it be October, June, or May, or whether we are bees, elephants, mice, or whatever form we may take, I promise you, darling, I shall come searching for you in every existence.

Will you also promise to wait for me in each lifetime and show the world, the universe, and God himself what true love really is?

We are the only truth, the only whole, and all that we know; we are all that there is. We are a perfect match for each other, and never let anybody tell you otherwise.

Jai Jagannath, Jai Saibaba. Wishing you a very happy first anniversary, baby. Cheers to one hundred more! I love you!

Yours forever and always,

Sana's Dhruv <3`;

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

export default function FirstAnniversaryPage() {
    const [showFireworks, setShowFireworks] = useState(false);
const [showMessage, setShowMessage] = useState(false);

useEffect(() => {
  const fireworksTimer = setTimeout(() => {
    setShowFireworks(true);
  }, 3500);

  const messageTimer = setTimeout(() => {
    setShowMessage(true);
  }, 4500);

  return () => {
    clearTimeout(fireworksTimer);
    clearTimeout(messageTimer);
  };
}, []);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020006] text-white">
      <StarfieldBackground />
      <Navbar />
{showFireworks && <AnniversaryFireworks />}
<FloatingHearts />
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
              fontSize: "clamp(3.6rem,7vw,7rem)",
              textShadow: "0 0 30px rgba(216,191,216,0.55)",
            }}
          >
            <Typewriter text={titleText} speed={75} />
          </h1>

          <div className="mx-auto mt-4 inline-flex rounded-full border border-[#D8BFD8]/20 bg-[#D8BFD8]/15 px-7 py-3 font-serif text-2xl italic text-[#f2d7f2] shadow-[0_0_25px_rgba(216,191,216,0.16)] backdrop-blur-xl">
            June 16, 2026
          </div>
          
        </section>
{showMessage && (
  <motion.div
    initial={{ opacity: 0, y: 16, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2 }}
    className="mt-6 text-center font-serif text-3xl italic text-[#F4D7FF] drop-shadow-[0_0_25px_rgba(216,191,216,0.65)]"
  >
    ♡ One Year Down. Forever To Go. ♡
  </motion.div>
)}
        <section className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-[#D8BFD8]/15 bg-black/45 p-10 shadow-[0_0_45px_rgba(216,191,216,0.12)] backdrop-blur-xl">
          <h2 className="mb-8 text-center font-serif text-4xl italic text-[#e7d0ef]">
            One Year Together
          </h2>

          <p className="whitespace-pre-line font-serif text-xl italic leading-10 text-white/80">
            <Typewriter text={storyText} speed={22} />
          </p>
        </section>
        <MemoryVault
  title="The First Anniversary"
  folder="anniversary"
/>
      </div>
    </main>
  );
}