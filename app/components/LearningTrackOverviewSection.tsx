import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
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
    href: "#research",
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
    href: "#design",
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
    href: "#development",
  },
];

export default function LearningTrackOverviewSection() {
  return (
    <section id="learning-tracks" className="w-full bg-white py-14 md:py-20">
      <Container>
        {/* ── Header ── */}
        <div className="mb-10 max-w-3xl md:mb-14">
          <SectionBadge label="EXPLORE YOUR INTERESTS" className="mb-4" />

          <h2 className="text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
            Three ways in. Plenty of ways
            <br />
            forward.
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
            These pathways are starting points, not boxes. Follow one deeply or
            bring different skills together.
          </p>
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

