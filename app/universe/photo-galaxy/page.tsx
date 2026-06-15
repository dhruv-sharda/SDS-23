"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import StarfieldBackground from "@/components/StarfieldBackground";
import BackButton from "@/components/BackButton";
import { Sparkles } from "lucide-react";

const galaxies = [
  {
    year: "2024",
    name: "The October Orchestration",
    subtitle: "Where the first notes of SDS-23 began.",
    href: "/universe/photo-galaxy/2024",
    gradient: "from-pink-300 via-purple-300 to-blue-300",
  },
  {
    year: "2025",
    name: "The June Bloom",
    subtitle: "The year distance became proof, not punishment.",
    href: "/universe/photo-galaxy/2025",
    gradient: "from-fuchsia-300 via-[#D8BFD8] to-rose-300",
  },
  {
    year: "2026",
    name: "A New Dawn",
    subtitle: "A softer sky, a brighter future, another orbit of us.",
    href: "/universe/photo-galaxy/2026",
    gradient: "from-sky-300 via-pink-200 to-[#D8BFD8]",
  },
];

export default function PhotoGalaxyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020006] text-white">
      <StarfieldBackground />
      <Navbar />
      <BackButton href="/universe" />

      <section
        className="relative z-20 mx-auto max-w-7xl px-6 pb-24 pt-28"
        style={{ transform: "scale(0.9)", transformOrigin: "top center" }}
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.55em] text-[#D8BFD8]/65">
            Photo Galaxy
          </p>

          <h1
            className="mt-6 font-serif italic text-[#e7d0ef]"
            style={{
              fontSize: "clamp(4rem,8vw,8rem)",
              textShadow: "0 0 30px rgba(216,191,216,0.55)",
            }}
          >
            Choose Destination Galaxy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic leading-9 text-white/75">
            Every year is its own galaxy. Choose where you want to travel first.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {galaxies.map((galaxy, index) => (
            <Link key={galaxy.year} href={galaxy.href}>
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.75 }}
                whileHover={{ y: -12, scale: 1.04 }}
                className="group relative min-h-[390px] overflow-hidden rounded-[2.3rem] border border-[#D8BFD8]/15 bg-black/45 p-8 shadow-[0_0_50px_rgba(216,191,216,0.14)] backdrop-blur-xl"
              >
                <div
                  className={`absolute left-1/2 top-20 h-44 w-44 -translate-x-1/2 rounded-full bg-gradient-to-br ${galaxy.gradient} opacity-70 blur-2xl transition group-hover:scale-125`}
                />

                <div
                  className={`absolute left-1/2 top-28 h-24 w-[260px] -translate-x-1/2 rotate-[-12deg] rounded-full border border-white/40 bg-gradient-to-r ${galaxy.gradient} opacity-60 blur-[1px]`}
                />

                <div className="relative z-10 flex h-full flex-col justify-end pt-44 text-center">
                  <Sparkles className="mx-auto mb-5 text-[#D8BFD8]" size={34} />

                  <p className="text-sm uppercase tracking-[0.55em] text-white/55">
                    {galaxy.year}
                  </p>

                  <h2 className="mt-4 font-serif text-4xl italic text-[#f2d7f2]">
                    {galaxy.name}
                  </h2>

                  <p className="mx-auto mt-4 max-w-xs leading-7 text-white/65">
                    {galaxy.subtitle}
                  </p>

                  <p className="mt-7 text-sm italic text-[#D8BFD8]/70">
                    Enter galaxy →
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}