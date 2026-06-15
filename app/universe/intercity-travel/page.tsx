"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import StarfieldBackground from "@/components/StarfieldBackground";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackButton from "@/components/BackButton";
import MemoryVault from "@/components/MemoryVault";
const titleText = "The Inception";

const storyText = `There I was, sat on a plane to Delhi, unaware of every emotion I was about to experience. I was on my way to meet her for the very first time, and all those "Dhruv, please Delhi aaja!" and "Haan, haan, main plan karta hu par—" would now come to an end.

I was extremely excited, ready with my stuff before sleeping; heck, even ensuring I got an 8 hour sleep so I looked alive in front of her!

Do note, this woman actually ordered flowers for me when I landed! I got a call from that guy. I HAVE NEVER BEEN GIVEN FLOWERS BY ANYONE. Such a green flag—regardless of that jerk running away before handing it over to me, I felt so, so special.

I, and only me—I am the one who remembers exactly the way she looked at me for the first time, from afar. Nervously combing my hair in the airport exit washroom, I received a call from none other than my Sana, who was waiting for me in the parking lot, directing me to it.

I turned around to see an extremely fair and radiant woman at a distance; she was in the backseat with the cab driver, signaling me with her hand, as was she. I remember it so vividly in my head.

As I approached the car, my heartbeat in trepidation every minute, unknown of all that could be, I approached closer and closer and we both smiled... Oh, how well I remember the way she looked at me for the first time...

Anyway, we made our way to DePavillion, in Mahipalpur (310—IYKYK, haha), shared cute kisses and hugs in the cab while we were at it, and I was in a foreign city without any knowledge of it, at the most peace I had ever felt in my life.

No sooner did we check in, enter the room, and sit on the bed, than all the voices in my head were gone. The stress was gone, the anxiety was gone, the very "You have to be grinding every second, Dhruv!" was all finally silenced. This woman legit healed me just with her presence.

I will always remember the way she looked at me for the first time. The purest and most genuine form of love radiating from her eyes, through which I directly saw the love coming from her soul. We literally were on the bed the entire day and ordered food from outside at both times. We loved, cuddled, comforted, and felt each other deeply. Words cannot describe the way I felt when I relaxed myself with her.

I laid my head in her lap and on her chest, and lost myself completely to the peace and tranquility I felt. I completely surrendered myself to her. We slept so peacefully the night. The moment after I woke up, I had the world in my arms: her.

Although her mother was worried sick and kept video calling her, I calmed her down and guided her with the plan ahead. No panic me was shining bright as usual, haha! (Guys, I'm just way too smart, i am so glad the photogenic me who wants to capture every moment captured that India Gate picture, which later proved to be a testimony for her parents that she was safe in Delhi.)

In short, it couldn't have been any better; everything went exactly how it had to.

I remember seeing her from the back glass of the cab while leaving from her campus... I only wished I had a few more moments with her.

A few more moments...

I felt the sudden, crushing return of the distance I had fought so hard to escape... It wasn't just a departure; I left a piece of my soul in that room with her, tethered to the lingering scent of her perfume and the invisible weight of her hand in mine, already counting the seconds until the map between us would vanish again...

And that, my kids, is how I met your mother for the very first time!`;

function Typewriter({
  text,
  speed = 25,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
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

export default function IntercityTravelPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020006] text-white">
      <StarfieldBackground />
      <Navbar />
<BackButton href="/universe" />
     <div
  className="relative z-20 mx-auto max-w-6xl px-6 pb-16 pt-28"
  style={{
    transform: "scale(0.9)",
    transformOrigin: "top center",
  }}
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
            <Typewriter text={titleText} speed={90} />
          </h1>

          <div className="mx-auto mt-4 inline-flex rounded-full border border-[#D8BFD8]/20 bg-[#D8BFD8]/15 px-7 py-3 font-serif text-2xl italic text-[#f2d7f2] shadow-[0_0_25px_rgba(216,191,216,0.16)] backdrop-blur-xl">
            August 26, 2025
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-[#D8BFD8]/15 bg-black/45 p-10 shadow-[0_0_45px_rgba(216,191,216,0.12)] backdrop-blur-xl">
          <h2 className="mb-8 text-center font-serif text-4xl italic text-[#e7d0ef]">
            The Journey
          </h2>

          <p className="whitespace-pre-line font-serif text-xl italic leading-10 text-white/80">
            <Typewriter text={storyText} speed={28} />
          </p>
        </section>
        <MemoryVault
  title="The First Touch"
  folder="first-touch"
/>   </div>
    </main>
  );
}