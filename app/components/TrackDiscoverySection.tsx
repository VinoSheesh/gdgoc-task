import ArrowLink from "./ui/ArrowLink";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import SectionDivider from "./ui/SectionDivider";
import TrackCard, { TrackCardProps } from "./ui/TrackCard";

const tracks: TrackCardProps[] = [
  {
    badge: "EXPLORE THE WHY",
    title: "Research & discovery",
    description:
      "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    tags: "Problem framing · User research · Product thinking",
    image: "/Research&discovery.png",
    imageWidth: 1120,
    imageHeight: 1120,
    bgGradient: "bg-gradient-to-b from-[#e9f1fe] via-[#edf4fe] to-[#f5f9ff]",
    glowColor: "bg-[#3b82f6]/25",
  },
  {
    badge: "MAKE IT MEANINGFUL",
    title: "Design & creativity",
    description:
      "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
    tags: "UI/UX · Visual storytelling · Prototyping",
    image: "/Design%20%26%20Creativity.png",
    imageWidth: 1120,
    imageHeight: 1120,
    bgGradient: "bg-gradient-to-b from-[#fff8e3] via-[#fef6df] to-[#fefaf0]",
    glowColor: "bg-[#f59e0b]/25",
  },
  {
    badge: "BRING IDEAS TO LIFE",
    title: "Development",
    description:
      "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    tags: "Web & mobile · Cloud · AI foundations",
    image: "/Development.png",
    imageWidth: 307,
    imageHeight: 307,
    bgGradient: "bg-gradient-to-b from-[#eaf5ed] via-[#edf7ee] to-[#f4faf5]",
    glowColor: "bg-[#22c55e]/25",
  },
];

export default function TrackDiscoverySection() {
  return (
    <section className="w-full bg-white">
      {/* Top border separator */}
      <SectionDivider />

      <Container className="py-14 md:py-20">
        {/* ── Header ── */}
        <div className="mb-10 md:mb-12">
          {/* Badge */}
          <SectionBadge label="Find your starting point" className="mb-4" />

          {/* Heading */}
          <h2 className="mb-4 text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
            Many interests. One shared
            <br />
            journey.
          </h2>

          {/* Subtitle + Link row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] leading-relaxed text-gray-500">
              Follow what excites you. Explore a track, then connect the dots with others.
            </p>
            <ArrowLink href="#overview" className="shrink-0">
              See the overview
            </ArrowLink>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard key={track.title} {...track} />
          ))}
        </div>
      </Container>
    </section>
  );
}
