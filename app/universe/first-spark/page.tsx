"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import StarfieldBackground from "@/components/StarfieldBackground";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MemoryVault from "@/components/MemoryVault";
import FirstSparkCountdown from "@/components/FirstSparkCountdown";
import BackButton from "@/components/BackButton";
const titleText = "The Origin";

const storyText = `The atmospheric canvas of October sixth was painted in deep, brooding strokes of charcoal and slate. Overhead, a restless canopy of clouds hung low—heavy with the unspoken promise of a nocturnal downpour.

A sudden, spirited gush of wind swept through the concrete courtyard of the university dorm block, carrying with it the crisp, intoxicating scent of incoming rain. The weather possessed an almost cinematic quality; it was a charged, electric ambience that hummed with a quiet, unseen gravity.

In the periphery of this twilight scene, life moved in its usual, unhurried rhythms. Two of my companions stood a short distance away, their laughter dissolving into the autumn breeze as we wasted time with idle amusements. On a weathered bench nearby sat another friend, illuminated by the pale, ethereal glow of his smartphone screen, murmuring softly to a voice on the other end of the line.

It was an ordinary evening... yet the wind seemed to whisper of an impending shift in my universe.

Then, a voice cut through the ambient rustle of the trees, calling out to me from the distance. "Dhruv! Idhar aa!"

Stepping forward across the courtyard, I had absolutely no inkling that I was crossing the threshold of a new existence, a new life waiting for me. Unbeknownst to me, the camera’s digital lens had already captured my approach, transmitting my image across the airwaves to a spectator who found herself instantly captivated after being briefed on my specifications. Every single detail of the scene was aligning under the unseen hand of fate.

As the device was suddenly handed over to me, the entire world narrowed into a single, breathtaking frame.

Time, in its infinite procession, ground to a sudden halt. The screen revealed a vision that seemed entirely detached from the mundane college campus—a girl of such radiant, porcelain fairness that she defied description.

What arrested my senses immediately was the vivid, delicate crimson of her rosy cheeks, flushing like the first bloom of dawn against winter snow. Clad in a pristine white top, she appeared to me not merely as a person, but as an actual angel manifested in the digital ether. In that singular instance of shock and quiet adoration, the trajectory of my lifetime shifted irreversibly.

A brief, charmed conversation sparked between us—a melody of hesitant introductions and instant, effortless rapport. Sensing the undeniable magic of the moment, an idiotic friend of mine broke the spell with a knowing hint, loudly nudging our interaction toward Instagram. Before the evening could even claim its ordinary quiet back, a notification bloomed on my screen: a digital bridge had been built between two souls.

To this day, I still keep the artifact of that awakening safely preserved—a cherished screenshot of her story, taken mere moments after I followed her back. I can never forget that image of her in Chanakya Mall alongside her friend, Shradha. Draped in a striking black top that contrasted beautifully with her ethereal grace, she looked so incredibly breathtaking that a profound, uncompromising devotion woke up inside me; I knew I had to get to know her more, haha!

That very night, emboldened by the tempestuous October wind, I asked for her number.

What followed was an effortless descent into a late-night symphony. From that day onward, we spoke for nearly three hours every single day, our conversations unfolding in a perfect rhythm explicitly stolen from the silver screen.

The phone calls quickly gave way to the intimacy of video calls every other day, casting a warm, late-night glow over separate rooms that felt increasingly intertwined. Within a mere twenty days, the gravity of infatuation deepened into the profound, unyielding currents of true love. Her visage soon claimed the sacred real estate of my phone wallpaper—a constant, glowing talisman against the dark.

It wasn't mere chance; it was destiny executing its grand design. Destiny had come directly to me... and I won.

As I stared at her smile lighting up my screen, the memory of her white top and those rosy cheeks rushed back over me, and I thought to myself, "I never knew someone could be, as beautiful as her..."`;

function Typewriter({
  text,
  speed = 45,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
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
    <span className={className}>
      {display}
      <span className="animate-pulse text-[#D8BFD8]">|</span>
    </span>
  );
}

export default function FirstSparkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020006] text-white">
      <StarfieldBackground />
      <Navbar />
<BackButton href="/universe" />
      <div className="relative z-20 mx-auto max-w-6xl px-6 pb-24 pt-32">
       

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
            <Typewriter text={titleText} speed={90} />
          </h1>

          <div className="mx-auto mt-4 inline-flex rounded-full border border-[#D8BFD8]/20 bg-[#D8BFD8]/15 px-7 py-3 font-serif text-2xl italic text-[#f2d7f2] shadow-[0_0_25px_rgba(216,191,216,0.16)] backdrop-blur-xl">
            October 6, 2024
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <FirstSparkCountdown />
        </div>

        <section className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-[#D8BFD8]/15 bg-black/45 p-10 shadow-[0_0_45px_rgba(216,191,216,0.12)] backdrop-blur-xl">
          <h2 className="mb-8 text-center font-serif text-4xl italic text-[#e7d0ef]">
            How It Began
          </h2>

          <p className="whitespace-pre-line font-serif text-xl italic leading-10 text-white/80">
            <Typewriter text={storyText} speed={28} />
          </p>
        </section>
        <MemoryVault
  title="The First Spark"
  folder="first-spark"
/>
      </div>
    </main>
  );
}
