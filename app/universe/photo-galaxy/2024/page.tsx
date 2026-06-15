"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import StarfieldBackground from "@/components/StarfieldBackground";
import BackButton from "@/components/BackButton";

const memories = [
  {
    month: "October",
    title: "Where It Began",
    src: "/images/photo-galaxy/2024/october.jpg",
    caption: "The first month of the orchestration.",
  },
  {
    month: "November",
    title: "Afterglow",
    src: "/images/photo-galaxy/2024/november.jpg",
    caption: "The universe slowly realizing what had started.",
  },
  {
    month: "December",
    title: "The Soft Ending",
    src: "/images/photo-galaxy/2024/december.jpg",
    caption: "The year ended, but SDS-23 had only begun.",
  },
];

export default function Galaxy2024Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020006] text-white">
      <StarfieldBackground />
      <Navbar />
      <BackButton href="/universe/photo-galaxy" />

      <section
        className="relative z-20 mx-auto max-w-7xl px-6 pb-24 pt-28"
        style={{ transform: "scale(0.9)", transformOrigin: "top center" }}
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.55em] text-[#D8BFD8]/65">
            2024 Galaxy
          </p>

          <h1 className="mt-6 font-serif text-6xl italic text-[#e7d0ef] md:text-8xl">
            The October Orchestration
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic text-white/75">
            Month by month, the first notes of us started becoming music.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.month}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="rounded-[2rem] border border-[#D8BFD8]/15 bg-white/90 p-4 text-black shadow-[0_0_45px_rgba(216,191,216,0.18)]"
            >
              <div className="relative h-[330px] overflow-hidden rounded-xl bg-black">
                <Image src={memory.src} alt={memory.title} fill className="object-cover" />
              </div>

              <div className="px-2 py-5 text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-black/45">
                  {memory.month}
                </p>
                <h2 className="mt-2 font-serif text-3xl italic">{memory.title}</h2>
                <p className="mt-3 text-sm leading-6 text-black/60">{memory.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}