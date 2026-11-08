import { BookOpen, CodeXml, Users, Lightbulb } from "lucide-react";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import ProgramFormatCard, {
  ProgramFormatCardProps,
} from "./ui/ProgramFormatCard";

const formats: ProgramFormatCardProps[] = [
  {
    icon: BookOpen,
    iconBg: "bg-[#e8f0fe]",
    iconColor: "text-[#1a73e8]",
    title: "Study groups",
    description:
      "Build foundations with peers. Work through a topic, compare approaches, and make space for questions.",
    footer: "Best for · Learning the fundamentals",
  },
  {
    icon: CodeXml,
    iconBg: "bg-[#e6f4ea]",
    iconColor: "text-[#1e8e3e]",
    title: "Hands-on workshops",
    description:
      "Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.",
    footer: "Best for · Trying something new",
  },
  {
    icon: Users,
    iconBg: "bg-[#fef7e0]",
    iconColor: "text-[#b06000]",
    title: "Project circles",
    description:
      "Connect research, design, and development around a shared problem. Learn through making and feedback.",
    footer: "Best for · Putting skills into practice",
  },
  {
    icon: Lightbulb,
    iconBg: "bg-[#fce8e6]",
    iconColor: "text-[#d93025]",
    title: "Knowledge sharing",
    description:
      "Walk through an idea, share a lesson from your process, and discover how other students approach their work.",
    footer: "Best for · Exchanging perspectives",
  },
];

export default function ProgramFormatsSection() {
  return (
    <section id="learning-formats" className="w-full bg-[#f1f3f4] py-16 md:py-24 lg:py-28">
      <Container>
        {/* ── Section Header ── */}
        <div className="mb-10 max-w-3xl sm:mb-12">
          <SectionBadge
            label="WAYS TO LEARN"
            className="mb-4"
            textColor="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500"
          />

          <h2 className="text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
            The format changes. The curiosity
            <br />
            stays.
          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
            Explore the kinds of experiences that help you move from
            understanding to doing.
          </p>
        </div>

        {/* ── 2x2 Cards Grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {formats.map((item) => (
            <ProgramFormatCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

