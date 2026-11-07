import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Container className="flex flex-col items-center justify-between gap-12 py-12 md:py-20 lg:flex-row lg:items-center lg:gap-14">
        {/* ========================================================
            LEFT COLUMN: Copy, Badges, CTAs
           ======================================================== */}
        <div className="flex flex-1 flex-col items-start text-left max-w-xl">
          {/* Sub-badge */}
          <SectionBadge
            label="GDGOC UGM • 2026/2027"
            className="mb-6"
            textColor="text-xs font-semibold uppercase tracking-wider text-gray-500"
          />

          {/* Heading */}
          <h1 className="mb-6 text-[44px] font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-6xl lg:text-[68px]">
            Big ideas.
            <br />
            <span className="text-[#1a73e8]">Built together.</span>
          </h1>

          {/* Paragraph */}
          <p className="mb-9 max-w-md text-[15px] leading-relaxed text-gray-500 sm:text-[17px]">
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
              className="flex items-center gap-2 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] px-7 py-3 text-[14px] font-semibold text-white transition-all active:scale-[0.98]"
            >
              Find your learning track
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 px-7 py-3 text-[14px] font-semibold text-gray-700 transition-all active:scale-[0.98]"
            >
              Get to know us
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Tagline with 4 Google colored dots */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4285f4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ea4335]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbc04]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34a853]" />
            </div>
            <span className="text-xs sm:text-sm text-gray-500">
              Different backgrounds. A shared curiosity.
            </span>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: Hero Image (heroimage.png)
           ======================================================== */}
        <div className="relative flex flex-1 w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[600px] items-center justify-center">
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
      </Container>

      {/* ========================================================
          DIVIDER BAR: Learn by doing · Connect · Build with purpose
         ======================================================== */}
      <div className="border-t border-gray-200 bg-white">
        <Container>
          <div className="flex flex-col divide-y divide-gray-100 sm:flex-row sm:items-center sm:justify-between sm:divide-y-0">
            <div className="flex items-center gap-2.5 py-5">
              <span className="h-[10px] w-[10px] shrink-0 rounded-[2px] bg-[#4285f4]" />
              <span className="text-[14px] font-medium text-gray-800">
                Learn by doing
              </span>
            </div>
            <div className="flex items-center gap-2.5 py-5">
              <span className="h-[10px] w-[10px] shrink-0 rounded-[2px] bg-[#ea4335]" />
              <span className="text-[14px] font-medium text-gray-800">
                Connect across disciplines
              </span>
            </div>
            <div className="flex items-center gap-2.5 py-5">
              <span className="h-[10px] w-[10px] shrink-0 rounded-[2px] bg-[#34a853]" />
              <span className="text-[14px] font-medium text-gray-800">
                Build with purpose
              </span>
            </div>
          </div>
        </Container>
        <div className="h-[1px] w-full bg-gray-200" />
      </div>
    </section>
  );
}
