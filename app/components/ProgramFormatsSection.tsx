import { BookOpen, CodeXml, Users, Lightbulb } from "lucide-react";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import ProgramFormatCard from "./ui/ProgramFormatCard";
import { getFormats, ApiFormat } from "../lib/formats";

const FORMAT_VISUALS: Record<
  string,
  {
    icon: typeof BookOpen;
    iconBg: string;
    iconColor: string;
    footer: string;
  }
> = {
  "study-groups": {
    icon: BookOpen,
    iconBg: "bg-[#e8f0fe]",
    iconColor: "text-[#1a73e8]",
    footer: "Best for · Learning the fundamentals",
  },
  "hands-on-workshops": {
    icon: CodeXml,
    iconBg: "bg-[#e6f4ea]",
    iconColor: "text-[#1e8e3e]",
    footer: "Best for · Trying something new",
  },
  "project-circles": {
    icon: Users,
    iconBg: "bg-[#fef7e0]",
    iconColor: "text-[#b06000]",
    footer: "Best for · Putting skills into practice",
  },
  "knowledge-sharing": {
    icon: Lightbulb,
    iconBg: "bg-[#fce8e6]",
    iconColor: "text-[#d93025]",
    footer: "Best for · Exchanging perspectives",
  },
};

export default async function ProgramFormatsSection() {
  const formatsData: ApiFormat[] = await getFormats();

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
          {formatsData.map((item) => {
            const visual = FORMAT_VISUALS[item.id] || {
              icon: BookOpen,
              iconBg: "bg-[#e8f0fe]",
              iconColor: "text-[#1a73e8]",
              footer: "Best for · Exploring formats",
            };

            return (
              <ProgramFormatCard
                key={item.id}
                icon={visual.icon}
                iconBg={visual.iconBg}
                iconColor={visual.iconColor}
                title={item.name}
                description={item.description}
                footer={visual.footer}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
