import Image from "next/image";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const navAnchors = [
  { label: "Learning tracks", href: "#learning-tracks", active: true },
  { label: "Learning formats", href: "#learning-formats", active: false },
  { label: "Your learning journey", href: "#learning-journey", active: false },
  { label: "Find a starting point", href: "#starting-point", active: false },
];

export default function OverviewIntroSection() {
  return (
    <section className="w-full bg-white pt-12 md:pt-16 lg:pt-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <SectionBadge
              label="OVERVIEW • PROGRAMS & LEARNING TRACKS"
              className="mb-6"
            />

            <h1 className="text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-5xl lg:text-[56px]">
              Find your spark.
              <br />
              <span className="text-[#1a73e8]">Build your own path.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
              Explore how research, creativity, and development connect. Start
              with one interest. Grow through practice and the people around you.
            </p>
          </div>

          {/* Right Column: Hero Graphic */}
          <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
              <Image
                src="/Research%26discovery.png"
                alt="Research & Discovery - Overview"
                width={1120}
                height={1120}
                priority
                quality={95}
                className="h-auto w-full object-contain select-none"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Full-width Divider & Anchor Navigation */}
      <div className="mt-12 w-full border-t border-gray-200 md:mt-16">
        <Container className="py-4 sm:py-5">
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-10">
            {navAnchors.map((anchor) => (
              <Link
                key={anchor.label}
                href={anchor.href}
                className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors sm:text-[14px] ${
                  anchor.active
                    ? "text-[#1a73e8]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <span>{anchor.label}</span>
                <ArrowDown className="h-3.5 w-3.5 stroke-[2]" />
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </section>
  );
}
