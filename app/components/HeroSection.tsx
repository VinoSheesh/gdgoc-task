import { ArrowRight, Search, Code } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-12 md:py-20 lg:flex-row lg:items-center lg:gap-14 lg:px-12">
        {/* ========================================================
            LEFT COLUMN: Copy, Badges, CTAs
           ======================================================== */}
        <div className="flex flex-1 flex-col items-start text-left max-w-xl">
          {/* Sub-badge: GDGOC UGM • 2026/2027 */}
          <div className="mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1a73e8]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              GDGOC UGM • 2026/2027
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-[44px] font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-6xl lg:text-[68px]">
            Big ideas.
            <br />
            <span className="text-[#1a73e8]">Built together.</span>
          </h1>

          {/* Paragraph */}
          <p className="mb-9 text-base leading-relaxed text-gray-600 sm:text-[18px]">
            A place for curious minds at{" "}
            <span className="font-bold text-gray-900">
              Universitas Gadjah Mada
            </span>{" "}
            to learn, connect, and build technology that matters.
          </p>

          {/* CTA Buttons */}
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <Link
              href="#tracks"
              className="flex items-center gap-2 rounded-xl bg-[#2b72ee] hover:bg-[#1f62dc] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Find your learning track</span>
              <ArrowRight className="h-4 w-4 stroke-[2.2]" />
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-800 transition-all active:scale-[0.98]"
            >
              <span>Get to know us</span>
              <ArrowRight className="h-4 w-4 stroke-[2.2]" />
            </Link>
          </div>

          {/* Tagline with 4 Google colored dots */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ea4335]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbc04]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34a853]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4285f4]" />
            </div>
            <span className="text-xs sm:text-sm text-gray-500 font-normal">
              Different backgrounds. A shared curiosity.
            </span>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: 3D Illustration / Glassmorphism Placeholder
            (Catatan: Jika nanti punya gambar asli, ganti div ini dengan <Image src="..." />)
           ======================================================== */}
        <div className="relative flex flex-1 w-full max-w-[540px] items-center justify-center">
          {/* Main Card with soft ambient gradient */}
          <div className="relative w-full aspect-[1.12/1] rounded-[36px] overflow-hidden p-6 sm:p-8 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-gradient-to-br from-[#ebf5ff] via-[#f0fdf4] to-[#fef9c3]">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-3 p-4 opacity-70">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/80 bg-white/30 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]"
                />
              ))}
            </div>

            {/* Glowing Colored Blobs inside card */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-300/40 blur-2xl" />
            <div className="absolute top-1/3 right-1/4 w-44 h-44 rounded-full bg-emerald-300/35 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-44 h-44 rounded-full bg-amber-200/40 blur-2xl" />

            {/* --- TOP-LEFT ELEMENT: Blue Glass Document + Magnifying Glass --- */}
            <div className="absolute top-8 left-8 sm:top-10 sm:left-10 z-10 w-40 sm:w-48 aspect-[1.05/1] rounded-3xl bg-gradient-to-br from-white/70 to-blue-100/50 backdrop-blur-md border border-white/90 p-4 shadow-lg shadow-blue-500/10">
              {/* Document Header lines */}
              <div className="space-y-2 mb-3">
                <div className="h-2 w-12 rounded-full bg-blue-300/60" />
                <div className="h-2 w-16 rounded-full bg-blue-200/60" />
                <div className="h-2 w-10 rounded-full bg-blue-200/40" />
              </div>

              {/* Magnifying Glass Icon (Glowing Blue) */}
              <div className="flex items-center justify-center pt-1">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-400 blur-md opacity-30" />
                  <Search className="h-16 w-16 sm:h-20 sm:w-20 text-[#3b82f6] drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)] stroke-[2]" />
                </div>
              </div>

              {/* Top Puzzle Knob */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 rounded-t-full bg-white/70 border-t border-x border-white/90 backdrop-blur-md" />
            </div>

            {/* --- CENTER-RIGHT ELEMENT: Green Glass Computer Screen + Code </> --- */}
            <div className="absolute bottom-12 right-6 sm:bottom-14 sm:right-8 z-20 w-52 sm:w-64 aspect-[1.25/1] rounded-3xl bg-gradient-to-br from-white/80 via-emerald-50/70 to-emerald-100/60 backdrop-blur-md border border-white/90 p-5 shadow-xl shadow-emerald-500/10">
              {/* Code lines on left */}
              <div className="space-y-1.5 mb-2">
                <div className="h-1.5 w-8 rounded-full bg-emerald-400/60" />
                <div className="h-1.5 w-14 rounded-full bg-emerald-300/50" />
                <div className="h-1.5 w-10 rounded-full bg-emerald-200/40" />
              </div>

              {/* Glowing Code Tag </> */}
              <div className="flex items-center justify-center my-auto">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-emerald-400 blur-lg opacity-40" />
                  <div className="flex items-center gap-1 font-mono font-bold text-4xl sm:text-5xl text-[#22c55e] drop-shadow-[0_4px_14px_rgba(34,197,94,0.45)]">
                    <Code className="h-14 w-14 sm:h-16 sm:w-16 text-[#22c55e] stroke-[2.4]" />
                  </div>
                </div>
              </div>

              {/* Monitor Stand */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-3 rounded-b-xl bg-white/80 border-b border-x border-white/90 shadow-sm" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-2.5 rounded-full bg-white/90 border border-white shadow-sm" />

              {/* Right puzzle tab */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-3.5 h-8 rounded-r-full bg-emerald-400/80 border-r border-y border-white/80" />
            </div>

            {/* --- FLOATING ELEMENT 1: Slanted "hello, possibilities_" Sticker --- */}
            <div className="absolute left-6 sm:left-8 bottom-16 sm:bottom-20 z-30 -rotate-3 transition-transform hover:rotate-0">
              <div className="rounded-xl border border-gray-100 bg-white/95 px-3.5 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                <span className="font-mono text-[13px] sm:text-[14px] font-semibold text-gray-800 tracking-tight">
                  hello, possibilities
                  <span className="animate-pulse text-[#1a73e8]">_</span>
                </span>
              </div>
            </div>

            {/* --- FLOATING ELEMENT 2: Bottom Badge "Built on curiosity. Rooted in UGM." --- */}
            <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 z-30">
              <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-white/95 px-4 py-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.06)] backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
                <span className="text-[11.5px] sm:text-xs text-gray-700">
                  Built on <strong className="font-semibold text-gray-900">curiosity</strong>. Rooted in{" "}
                  <strong className="font-semibold text-gray-900">UGM</strong>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
