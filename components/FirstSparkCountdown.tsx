"use client";

import { useEffect, useState } from "react";

const START = new Date("2024-10-06T00:00:00");

function getYearsMonths(days: number) {
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  return { years, months };
}

export default function FirstSparkCountdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const diff = Date.now() - START.getTime();

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const { years, months } = getYearsMonths(time.days);

  const approx =
    months === 0
      ? `That's around ${years} ${years === 1 ? "year" : "years"}.`
      : `That's around ${years} ${years === 1 ? "year" : "years"} and ${months} ${
          months === 1 ? "month" : "months"
        }.`;

  return (
    <div className="rounded-[2rem] border border-[#D8BFD8]/15 bg-black/50 px-12 py-7 shadow-[0_0_45px_rgba(216,191,216,0.18)] backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-center gap-3 text-base font-semibold tracking-[0.22em] text-[#D8BFD8]/80">
        <span>♡</span>
        <span>Life actually began since</span>
        <span>♡</span>
      </div>

      <div className="grid grid-cols-4 text-center">
        {[
          ["Days", time.days],
          ["Hrs", time.hours],
          ["Mins", time.minutes],
          ["Secs", time.seconds],
        ].map(([label, value], index) => (
          <div
            key={label}
            className={`px-7 ${
              index !== 0 ? "border-l border-[#D8BFD8]/15" : ""
            }`}
          >
            <div className="text-5xl font-black tracking-wider text-white/90">
              {String(value).padStart(index === 0 ? 1 : 2, "0")}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.35em] text-[#D8BFD8]/50">
              {label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center font-serif text-lg italic text-[#D8BFD8]/75">
        {approx}
      </p>
    </div>
  );
}
