"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Plus, ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import StarfieldBackground from "@/components/StarfieldBackground";
import BackButton from "@/components/BackButton";

type Milestone = {
  id: number;
  month: string;
  year: string;
  title: string;
  description: string;
  image?: string;
  isYearMarker?: boolean;
};

const initialMilestones: Milestone[] = [
  {
    id: 1,
    month: "October",
    year: "2024",
    title: "The First Spark",
    description: "The month where the first note of SDS-23 began.",
  },
  {
    id: 2,
    month: "January",
    year: "2025",
    title: "2025",
    description: "A new year in the orbit of us.",
    isYearMarker: true,
  },
  {
    id: 3,
    month: "June",
    year: "2025",
    title: "The June Bloom",
    description: "The month SDS-23 became real.",
  },
  {
    id: 4,
    month: "July",
    year: "2025",
    title: "The First Month",
    description: "One month together. One tiny forever.",
  },
  {
    id: 5,
    month: "August",
    year: "2025",
    title: "The First Touch",
    description: "Every second apart was building up to this.",
  },
  {
    id: 6,
    month: "January",
    year: "2026",
    title: "2026",
    description: "A new dawn, a softer sky.",
    isYearMarker: true,
  },
  {
    id: 7,
    month: "June",
    year: "2026",
    title: "The First Anniversary",
    description: "One year together. One full orbit of SDS-23.",
  },
];

export default function MilestoneMapPage() {
  const [milestones, setMilestones] = useState(initialMilestones);
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const addMilestone = () => {
    if (!title.trim() || !month.trim() || !year.trim()) return;

    const newMilestone: Milestone = {
      id: Date.now(),
      title,
      month,
      year,
      description,
    };

    setMilestones([...milestones, newMilestone]);
    setTitle("");
    setMonth("");
    setYear("");
    setDescription("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020006] text-white">
      <StarfieldBackground />
      <Navbar />
      <BackButton href="/universe" />

      <section
        className="relative z-20 mx-auto max-w-6xl px-6 pb-24 pt-28"
        style={{ transform: "scale(0.9)", transformOrigin: "top center" }}
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.55em] text-[#D8BFD8]/65">
            Our Timeline
          </p>

          <h1
            className="mt-6 font-serif italic text-[#e7d0ef]"
            style={{
              fontSize: "clamp(4rem,8vw,8rem)",
              textShadow: "0 0 30px rgba(216,191,216,0.55)",
            }}
          >
            Milestone Map
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic leading-9 text-white/75">
            A vertical universe of every month, every memory, every orbit, and
            every milestone we keep adding as time goes on.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[2rem] border border-[#D8BFD8]/15 bg-black/45 p-8 shadow-[0_0_45px_rgba(216,191,216,0.12)] backdrop-blur-xl">
          <h2 className="mb-6 font-serif text-3xl italic text-[#e7d0ef]">
            Add a Milestone
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <input
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="Month"
              className="rounded-xl border border-[#D8BFD8]/15 bg-black/50 px-4 py-3 text-white outline-none placeholder:text-white/35"
            />
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              className="rounded-xl border border-[#D8BFD8]/15 bg-black/50 px-4 py-3 text-white outline-none placeholder:text-white/35"
            />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Milestone title"
              className="rounded-xl border border-[#D8BFD8]/15 bg-black/50 px-4 py-3 text-white outline-none placeholder:text-white/35"
            />
          </div>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={3}
            className="mt-4 w-full rounded-xl border border-[#D8BFD8]/15 bg-black/50 px-4 py-3 text-white outline-none placeholder:text-white/35"
          />

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-[#D8BFD8]/15 bg-[#D8BFD8]/10 px-5 py-3 text-[#D8BFD8]/80"
            >
              <ImageIcon size={16} />
              Add image later
            </button>

            <button
              onClick={addMilestone}
              className="flex items-center gap-2 rounded-full bg-[#D8BFD8] px-6 py-3 font-semibold text-black shadow-[0_0_35px_rgba(216,191,216,0.35)]"
            >
              <Plus size={16} />
              Create Milestone
            </button>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#D8BFD8]/10 via-[#D8BFD8]/45 to-[#D8BFD8]/10" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="absolute left-1/2 top-8 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-[#D8BFD8]/30 bg-black shadow-[0_0_30px_rgba(216,191,216,0.35)]">
                  <Star
                    size={milestone.isYearMarker ? 28 : 18}
                    className={
                      milestone.isYearMarker
                        ? "fill-[#D8BFD8] text-[#D8BFD8]"
                        : "text-[#D8BFD8]"
                    }
                  />
                </div>

                <div
                  className={`w-[43%] rounded-[2rem] border border-[#D8BFD8]/15 bg-black/50 p-7 shadow-[0_0_40px_rgba(216,191,216,0.12)] backdrop-blur-xl ${
                    milestone.isYearMarker
                      ? "border-[#D8BFD8]/35 bg-[#D8BFD8]/10"
                      : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#D8BFD8]/50">
                    {milestone.month} {milestone.year}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl italic text-[#e7d0ef]">
                    {milestone.title}
                  </h3>

                  <p className="mt-4 leading-8 text-white/70">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}