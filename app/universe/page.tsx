"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Heart } from "lucide-react";
import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

const memories = [
  {
    title: "The First Spark",
    date: "October 6, 2025",
    place: "The day SDS-23 was born",
    note: "The day we both experienced love at first sight for the first time in our lives, unaware of what was coming.",
    href: "/universe/first-spark",
  },
  {
    title: "The First Month",
    date: "July 16, 2025",
    place: "First Year Vacation",
    note: "One month together?",
    href: "/universe/first-month",
  },
  {
    title: "The First Touch",
    date: "August 26, 2025",
    place: "JAI - DEL",
    note: "Every second spent apart was worth building up to this moment, the day two souls forever combined into one!",
    href: "/universe/intercity-travel",
  },
  {
    title: "And... The First Anniversary!",
    date: "June 16, 2026",
    place: "Second Year Vacation",
    note: "One YEAR together???.",
    href: "/universe/first-anniversary",
  },
];

export default function UniversePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020006] px-6 pb-16 pt-28 text-white">
      <StarfieldBackground />
      <Navbar />
      <BackButton href="/home" />

      <section
        className="relative z-20 mx-auto max-w-6xl"
        style={{
          transform: "scale(0.9)",
          transformOrigin: "top center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.6em] text-[#D8BFD8]/70">
            Our Constellations
          </p>

          <h1 className="mt-5 font-serif text-6xl italic text-[#e7d0ef] drop-shadow-[0_0_30px_rgba(216,191,216,0.6)] md:text-8xl">
            Our Story
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic leading-9 text-white/75">
            A galaxy of tiny moments, impossible distances, soft chaos, and
            memories only Planet SDS-23 could understand.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 grid gap-8 md:grid-cols-2">
          {memories.map((memory, index) => (
            <Link key={memory.title} href={memory.href}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.12, duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative h-full min-h-[330px] overflow-hidden rounded-[2rem] border border-[#D8BFD8]/15 bg-black/45 p-7 shadow-[0_0_40px_rgba(216,191,216,0.12)] backdrop-blur-xl"
              >
                <div className="absolute right-6 top-6 text-[#D8BFD8]/30 transition group-hover:text-[#D8BFD8]">
                  <Sparkles size={28} />
                </div>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D8BFD8]/20 bg-[#D8BFD8]/10 text-[#D8BFD8]">
                  <Heart size={24} />
                </div>

                <h2 className="font-serif text-3xl italic text-[#e7d0ef]">
                  {memory.title}
                </h2>

                <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#D8BFD8]/65">
                  <span>{memory.date}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {memory.place}
                  </span>
                </div>

                <p className="mt-5 leading-8 text-white/75">{memory.note}</p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#D8BFD8]/30 to-transparent" />

                <p className="mt-4 text-sm italic text-[#D8BFD8]/55">
                  Open the origin vault →
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}