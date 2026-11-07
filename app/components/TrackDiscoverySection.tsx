import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tracks = [
  {
    badge: "EXPLORE THE WHY",
    badgeColor: "text-[#4285f4]",
    title: "Research & discovery",
    description:
      "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    tags: "Problem framing · User research · Product thinking",
    image: "/Research&discovery.png",
    imageWidth: 1366,
    imageHeight: 1771,
    bgFrom: "from-[#c5d8fd]",
    bgTo: "to-[#e8f0fe]",
  },
  {
    badge: "MAKE IT MEANINGFUL",
    badgeColor: "text-[#f9ab00]",
    title: "Design & creativity",
    description:
      "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
    tags: "UI/UX · Visual storytelling · Prototyping",
    image: "/Design%20%26%20Creativity.png",
    imageWidth: 1347,
    imageHeight: 1554,
    bgFrom: "from-[#fce8a1]",
    bgTo: "to-[#fef7e0]",
  },
  {
    badge: "BRING IDEAS TO LIFE",
    badgeColor: "text-[#34a853]",
    title: "Development",
    description:
      "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    tags: "Web & mobile · Cloud · AI foundations",
    image: "/Development.png",
    imageWidth: 347,
    imageHeight: 452,
    bgFrom: "from-[#a8d5b5]",
    bgTo: "to-[#e6f4ea]",
  },
];

export default function TrackDiscoverySection() {
  return (
    <section className="w-full bg-white">
      {/* Top border separator */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="border-t border-gray-200" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 lg:px-12">
        {/* ── Header ── */}
        <div className="mb-10 md:mb-12">
          {/* Badge */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1a73e8]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400">
              Find your starting point
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-[38px] lg:text-[42px]">
            Many interests. One shared journey.
          </h2>

          {/* Subtitle + Link row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] leading-relaxed text-gray-500">
              Follow what excites you. Explore a track, then connect the dots with others.
            </p>
            <Link
              href="#overview"
              className="group flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-[#1a73e8] transition-colors hover:text-[#1557b0]"
            >
              See the overview
              <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md"
            >
              {/* ── Image Area (colored gradient bg) ── */}
              <div
                className={`relative overflow-hidden bg-gradient-to-b ${track.bgFrom} ${track.bgTo} h-[200px] sm:h-[210px] md:h-[220px]`}
              >
                <Image
                  src={track.image}
                  alt={track.title}
                  width={track.imageWidth}
                  height={track.imageHeight}
                  quality={90}
                  className="absolute inset-0 w-full h-full object-contain object-bottom select-none scale-[0.92]"
                />
              </div>

              {/* ── Card Content ── */}
              <div className="flex flex-1 flex-col px-6 pb-7 pt-5">
                {/* Track Badge */}
                <span
                  className={`mb-2 text-[10px] font-bold uppercase tracking-[0.12em] ${track.badgeColor}`}
                >
                  {track.badge}
                </span>

                {/* Track Title */}
                <h3 className="mb-3 text-[20px] font-bold leading-snug text-[#111827]">
                  {track.title}
                </h3>

                {/* Track Description */}
                <p className="mb-5 flex-1 text-[13.5px] leading-[1.75] text-gray-500">
                  {track.description}
                </p>

                {/* Track Tags */}
                <p className="mb-5 text-[12px] text-gray-400">
                  {track.tags}
                </p>

                {/* Explore Link */}
                <Link
                  href="#tracks"
                  className="group flex items-center gap-1.5 text-[14px] font-semibold text-[#1a73e8] transition-colors hover:text-[#1557b0]"
                >
                  Explore this track
                  <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
