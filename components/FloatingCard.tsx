"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  href: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
};

export default function FloatingCard({ href, title, subtitle, icon }: Props) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="group min-h-[190px] rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition hover:border-pink-200/60 hover:bg-white/15"
      >
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-300/20 text-pink-100 shadow-[0_0_30px_rgba(255,130,200,0.4)]">
          {icon}
        </div>

        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-pink-100/75">{subtitle}</p>

        <p className="mt-5 text-sm text-pink-200 opacity-0 transition group-hover:opacity-100">
          Enter this world →
        </p>
      </motion.div>
    </Link>
  );
}