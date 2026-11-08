import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import StepCard, { StepCardProps } from "./ui/StepCard";

const steps: StepCardProps[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore a topic and find the questions you want to answer.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Try an exercise, work through a challenge, and ask for help.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Apply your learning to a small idea with a clear purpose.",
  },
  {
    number: "04",
    title: "Share",
    description:
      "Show your process, gather feedback, and help someone else.",
  },
];

export default function LearningJourneySection() {
  return (
    <section id="learning-journey" className="w-full bg-white py-16 md:py-24 lg:py-28">
      <Container>
        {/* ── Section Header ── */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <SectionBadge
            label="PROGRESS, NOT PERFECTION"
            className="mb-4"
            textColor="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500"
          />

          <h2 className="text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
            A journey you can keep building on.
          </h2>
        </div>

        {/* ── Steps Grid (4 Columns) ── */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}

