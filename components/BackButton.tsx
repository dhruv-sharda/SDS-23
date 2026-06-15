"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
  href: string;
  label?: string;
};

export default function BackButton({ href, label = "Back" }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="fixed left-8 top-32 z-50 flex items-center gap-2 rounded-full border border-[#D8BFD8]/20 bg-black/50 px-5 py-3 text-[#D8BFD8] shadow-[0_0_25px_rgba(216,191,216,0.15)] backdrop-blur-xl transition hover:bg-[#D8BFD8]/10"
    >
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}