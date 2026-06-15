"use client";

import Link from "next/link";
import StarfieldBackground from "@/components/StarfieldBackground";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020006] px-6 text-center">
      <StarfieldBackground />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex max-w-3xl flex-col items-center rounded-[2.5rem] border border-[#D8BFD8]/20 bg-black/45 p-10 shadow-[0_0_60px_rgba(216,191,216,0.16)] backdrop-blur-xl"
      >
        <Image
          src="/logo.svg"
          alt="SDS"
          width={150}
          height={110}
          priority
          className="mb-2 drop-shadow-[0_0_35px_rgba(216,191,216,0.55)]"
        />

        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#D8BFD8]">
          Planet SDS-23
        </p>

        <h1 className="font-serif text-5xl font-bold leading-tight text-[#D8BFD8] md:text-7xl">
          Welcome home, darling &lt;3
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
          I welcome you to not a house, not an island, nor a country... but an entire planet, all to ourselves!
        </p>

        <Link href="/home">
          <motion.button
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 rounded-full bg-[#D8BFD8] px-9 py-4 text-lg font-semibold text-black shadow-[0_0_40px_rgba(216,191,216,0.65)]"
          >
            Enter Home
          </motion.button>
        </Link>

        <p className="mt-6 text-sm text-[#D8BFD8]/70">
          Together since June 16, 2025.
        </p>
      </motion.div>
    </main>
  );
}