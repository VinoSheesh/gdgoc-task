import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import SectionDivider from "./ui/SectionDivider";
import StepCard, { StepCardProps } from "./ui/StepCard";

const steps: StepCardProps[] = [
  {
    number: "01",
    title: "Follow your curiosity",
    description:
      "Explore the tracks and find a topic you want to understand better.",
  },
  {
    number: "02",
    title: "Learn alongside others",
    description:
      "Join a learning opportunity, ask a question, and share your perspective.",
  },
  {
    number: "03",
    title: "Turn learning into action",
    description:
      "Practice through a project, exchange feedback, and pass something on.",
  },
];

export default function GettingStartedSection() {
  return (
    <section className="w-full bg-white">
      {/* Top border separator */}
      <SectionDivider />

      <Container className="py-16 sm:py-20 lg:py-24">
        {/* ── Section Header ── */}
        <div className="mb-12 sm:mb-16 max-w-2xl">
          {/* Micro-badge */}
          <SectionBadge label="Make your first move" />

          {/* Heading */}
          <h2 className="text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
            You don’t need to have it all
            <br />
            figured out.
          </h2>
        </div>

        {/* ── Steps Grid (3 Columns) ── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
