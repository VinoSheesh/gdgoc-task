"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function TrackHighlighter() {
  const searchParams = useSearchParams();
  const trackId = searchParams.get("track");

  useEffect(() => {
    if (!trackId) return;

    const el = document.getElementById(trackId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add(
        "border-[#1a73e8]",
        "ring-2",
        "ring-[#1a73e8]/30",
        "shadow-[0_10px_24px_rgba(26,115,232,0.12)]"
      );
    }
  }, [trackId]);

  return null;
}

