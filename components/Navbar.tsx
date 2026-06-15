"use client";

import Link from "next/link";
import { ChevronDown, Settings } from "lucide-react";
import Image from "next/image";

const nav = [
  {
    label: "Home",
    href: "/home",
    items: [],
  },
  {
    label: "Our Constellations",
    href: "/universe",
    items: [
      ["Our Story", "/universe"],
      ["Time Capsule", "/universe/photo-galaxy"],
["Milestone Map", "/universe/milestone-map"],
    ],
  },
  {
    label: "Letters Across Time",
    href: "/time-capsule",
    items: [
      ["Write a Letter", "/time-capsule"],
      ["Open Letters", "/time-capsule"],
      ["Time Capsule", "/time-capsule"],
    ],
  },
  {
    label: "Love Arcade",
    href: "/arcade",
    items: [
      ["Mini Games", "/arcade"],
      ["Quizzes", "/arcade"],
      ["Challenges", "/arcade"],
    ],
  },
  {
    label: "More",
    href: "/home",
    items: [
      ["Music Player", "/home"],
      ["Wish List", "/home"],
      ["Settings", "/settings"],
    ],
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#D8BFD8]/10 bg-[#050009]/75 px-8 py- backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between">
        <Link href="/home" className="flex items-center gap-4">
          <Image
            src="/logo.svg"
            alt="SDS-23"
            width={99}
            height={79}
            priority
            className="drop-shadow-[0_0_25px_rgba(216,191,216,0.45)]"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-2 rounded-2xl px-6 py-4 text-lg text-[#D8BFD8]/70 transition hover:bg-[#D8BFD8]/10 hover:text-white"
              >
                {item.label}
                {item.items.length > 0 && <ChevronDown size={16} />}
              </Link>

              {item.label === "Home" && (
                <div className="mx-auto h-[2px] w-8 rounded-full bg-[#D8BFD8] shadow-[0_0_15px_#D8BFD8]" />
              )}

              {item.items.length > 0 && (
                <div className="invisible absolute left-0 top-[58px] w-64 translate-y-3 rounded-2xl border border-[#D8BFD8]/18 bg-[#0b0012]/90 p-4 opacity-0 shadow-2xl backdrop-blur-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.items.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="block rounded-xl px-4 py-3 text-base text-[#D8BFD8]/70 transition hover:bg-[#D8BFD8]/10 hover:text-white"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          href="/settings"
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D8BFD8]/20 bg-[#D8BFD8]/8 text-[#D8BFD8]"
        >
          <Settings size={22} />
        </Link>
      </div>
    </header>
  );
}