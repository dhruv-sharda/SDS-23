"use client";

import { useEffect, useState } from "react";

const START_DATE = new Date("2025-06-16T00:00:00");

function getYearsMonths(days: number) {
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  return { years, months };
}

export default function CountdownTimer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const diff = new Date().getTime() - START_DATE.getTime();

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

  return (
    <div className="rounded-[1.4rem] border border-[#D8BFD8]/15 bg-black/45 px-8 py-4 shadow-[0_0_35px_rgba(216,191,216,0.18)] backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold tracking-[0.25em] text-[#D8BFD8]/75">
        <span>♡</span>
        <span>Together Since</span>
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
            className={`px-5 ${
              index !== 0 ? "border-l border-[#D8BFD8]/15" : ""
            }`}
          >
            <div className="text-3xl font-black tracking-wider text-white/85">
              {String(value).padStart(index === 0 ? 1 : 2, "0")}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#D8BFD8]/45">
              {label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-center text-sm italic text-[#D8BFD8]/65">
  {months === 0
    ? `That's around ${years} ${years === 1 ? "year" : "years"}.`
    : `That's around ${years} ${
        years === 1 ? "year" : "years"
      } and ${months} ${
        months === 1 ? "month" : "months"
      }.`}
</p>
    </div>
  );
}