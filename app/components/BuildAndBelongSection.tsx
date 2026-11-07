import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BuildAndBelongSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* ── Left Column: Image Card (Build and Belong.png) ── */}
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="relative w-full max-w-[540px] overflow-hidden">
              <Image
                src="/Build%20and%20Belong.png"
                alt="Your next project could start on campus - Example project brief"
                width={2368}
                height={1776}
                priority
                quality={95}
                className="h-auto w-full object-contain select-none"
              />
            </div>
          </div>

          {/* ── Right Column: Text & Content ── */}
          <div className="flex w-full flex-1 flex-col items-start lg:max-w-xl">
            {/* Micro-badge */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1a73e8]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                Build something that matters
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
              Your next project could
              <br />
              start on campus.
            </h2>

            {/* Paragraph 1 */}
            <p className="mb-4 text-[14.5px] sm:text-[15px] leading-relaxed text-gray-500">
              What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
            </p>

            {/* Paragraph 2 */}
            <p className="mb-8 text-[14.5px] sm:text-[15px] leading-relaxed text-gray-500">
              Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
            </p>

            {/* Action Link */}
            <Link
              href="#projects"
              className="group flex items-center gap-1.5 text-[14px] font-semibold text-[#1a73e8] transition-colors hover:text-[#1557b0]"
            >
              <span>Explore project-based learning</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

