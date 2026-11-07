import { BookOpen, CodeXml, Users } from "lucide-react";
import Container from "./ui/Container";
import LearningFormatCard, { LearningFormatCardProps } from "./ui/LearningFormatCard";
import SectionBadge from "./ui/SectionBadge";

const formats: LearningFormatCardProps[] = [
  {
    icon: BookOpen,
    title: "Study together",
    description:
      "Work through foundations in peer learning sessions. Bring your questions; leave with a next step.",
    footer: "Study groups & guided practice",
  },
  {
    icon: CodeXml,
    title: "Try it hands-on",
    description:
      "Explore a tool or technique in a workshop, then put it to work in a small experiment.",
    footer: "Workshops & technical sessions",
  },
  {
    icon: Users,
    title: "Share the process",
    description:
      "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
    footer: "Project circles & sharing sessions",
  },
];

export default function LearningFormatSection() {
  return (
    <section className="w-full bg-[#f1f3f4]">
      <Container className="py-16 sm:py-20">
        {/* ── Section Header ── */}
        <div className="mb-10 sm:mb-12">
          {/* Micro-badge */}
          <SectionBadge
            label="More than a classroom"
            className="mb-4"
            textColor="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500"
          />

          {/* Section Heading */}
          <h2 className="mb-4 text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
            Less watching. More making.
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-gray-500">
            Learn in a way that turns a new concept into something you can actually use.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {formats.map((item) => (
            <LearningFormatCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
