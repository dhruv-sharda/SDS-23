"use client";

import { useEffect, useState } from "react";

const text =
  "We're a perfect match for each other,\nlet nobody tell you otherwise.";

export default function RomanticTyping() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, index));
      index++;

      if (index > text.length) clearInterval(interval);
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mx-auto mt-28 max-w-2xl whitespace-pre-line font-serif text-2xl italic leading-10 text-white drop-shadow-[0_0_18px_rgba(255,220,255,0.8)] md:text-3xl">
      {display}
      <span className="animate-pulse text-[#D8BFD8]">|</span>
    </p>
  );
}