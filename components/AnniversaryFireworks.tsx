"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function AnniversaryFireworks() {
    const [showFireworks, setShowFireworks] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowFireworks(true);
  }, 3500);

  return () => clearTimeout(timer);
}, []);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={350}
      recycle={false}
      gravity={0.12}
      tweenDuration={12000}
      colors={[
        "#D8BFD8",
        "#F4D7FF",
        "#FFD6F7",
        "#C8A2C8",
        "#E6CCFF",
      ]}
    />
  );
}