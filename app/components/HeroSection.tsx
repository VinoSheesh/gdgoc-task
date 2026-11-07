import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
            RIGHT COLUMN: Hero Image (heroimage.png)
           ======================================================== */}
        <div className="relative flex flex-1 w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[600px] items-center justify-center">
          {/* Ambient colored background glow matching the illustration */}
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-amber-100/40 via-emerald-100/30 to-blue-100/40 rounded-[40px] blur-2xl -z-10" />

          {/* Image Container */}
          <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:scale-[1.01]">
            <Image
              src="/heroimage.png"
              alt="Google Developer Groups On Campus UGM - Big ideas. Built together."
              width={2569}
              height={2360}
              priority
              quality={95}
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          DIVIDER BAR: Learn by doing · Connect · Build with purpose
         ======================================================== */}
      <div className="mt-6 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Mobile: stack vertikal | Desktop: 3 kolom rata kiri-tengah-kanan */}
          <div className="flex flex-col divide-y divide-gray-200 sm:flex-row sm:items-center sm:justify-between sm:divide-y-0">
            {/* Item 1: Learn by doing */}
            <div className="flex items-center gap-2.5 py-5 sm:py-5">
              <span className="h-3 w-3 shrink-0 rounded-[2px] bg-[#4285f4]" />
              <span className="text-[13.5px] font-medium text-gray-700">
                Learn by doing
              </span>
            </div>

            {/* Item 2: Connect across disciplines */}
            <div className="flex items-center gap-2.5 py-5 sm:py-5">
              <span className="h-3 w-3 shrink-0 rounded-[2px] bg-[#ea4335]" />
              <span className="text-[13.5px] font-medium text-gray-700">
                Connect across disciplines
              </span>
            </div>

            {/* Item 3: Build with purpose */}
            <div className="flex items-center gap-2.5 py-5 sm:py-5">
              <span className="h-3 w-3 shrink-0 rounded-[2px] bg-[#34a853]" />
              <span className="text-[13.5px] font-medium text-gray-700">
                Build with purpose
              </span>
            </div>
          </div>
        </div>
        {/* Blue accent bar at the very bottom */}
        <div className="h-[3px] bg-[#2b72ee]" />
      </div>
    </section>
  );
}
