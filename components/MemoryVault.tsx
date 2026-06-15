"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

type MemoryItem = {
  type: "image" | "video";
  src: string;
  caption: string;
};

type Props = {
  title: string;
  folder: string;
};

export default function MemoryVault({ title, folder }: Props) {
  const [items, setItems] = useState<MemoryItem[]>([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const current = items.length > 0 ? items[index] : null;

  useEffect(() => {
    fetch(`/api/memories/${folder}`)
      .then((res) => res.json())
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]));
  }, [folder]);

  const next = () => {
    if (items.length === 0) return;
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    if (items.length === 0) return;
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <>
      <div className="mt-24 flex justify-center">
        <button
          onClick={() => items.length > 0 && setOpen(true)}
          className="group relative w-[380px] rounded-[2rem] border border-[#D8BFD8]/20 bg-black/40 p-8 backdrop-blur-xl shadow-[0_0_45px_rgba(216,191,216,0.12)] transition hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(216,191,216,0.3)]"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#D8BFD8]/10 to-transparent" />

          <div className="relative z-10 text-center">
            <div className="mb-4 text-6xl">📖</div>

            <h3 className="font-serif text-3xl italic text-[#f2d7f2]">
              Cosmic Memory Vault
            </h3>

            <p className="mt-3 text-[#ffffff80]">
              {items.length > 0
                ? `${items.length} Memories`
                : "No memories added yet"}
            </p>

            <p className="mt-4 italic text-[#D8BFD8]/70">
              {items.length > 0
                ? "Tap to open the vault →"
                : `Add files in public/memories/${folder}`}
            </p>
          </div>
        </button>
      </div>

      {open && current && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-8 top-8 z-50 rounded-full bg-white/10 p-3 text-white"
          >
            <X />
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-8 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="absolute right-8 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white"
              >
                <ChevronRight />
              </button>
            </>
          )}

          <div className="flex min-h-screen flex-col items-center justify-center px-6">
            <h2 className="mb-8 font-serif text-4xl italic text-[#f2d7f2]">
              {title}
            </h2>

            {current.type === "image" ? (
              <div className="relative h-[70vh] w-full max-w-4xl">
                <Image
                  src={current.src}
                  alt={current.caption}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <video controls className="max-h-[70vh] max-w-4xl rounded-2xl">
                <source src={current.src} />
              </video>
            )}

            <p className="mt-6 max-w-2xl text-center text-xl italic text-[#ffffff90]">
              {current.caption}
            </p>

            <a
              href={current.src}
              download
              className="mt-6 flex items-center gap-2 rounded-full bg-[#D8BFD8] px-6 py-3 font-semibold text-black"
            >
              <Download size={18} />
              Download
            </a>

            <p className="mt-4 text-[#D8BFD8]/60">
              {index + 1} / {items.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}