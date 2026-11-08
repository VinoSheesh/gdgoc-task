import ArrowLink from "./ui/ArrowLink";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";

interface GuidanceItem {
  title: string;
  description: string;
}

const GUIDANCE_ITEMS: GuidanceItem[] = [
  {
    title: "For learning questions",
    description:
      "Tell us which topic interests you and where you are in your learning journey.",
  },
  {
    title: "For collaborations",
    description:
      "Share the idea, who it’s for, and how you imagine working with the community.",
  },
  {
    title: "Not sure which category fits?",
    description:
      "Choose General inquiry. A clear question is always a good starting point.",
  },
];

export default function BeforeYouSendSection() {
  return (
    <section id="before-you-send" className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <SectionBadge label="A LITTLE GUIDANCE" className="mb-5 sm:mb-6" />

            <h2 className="text-[34px] font-bold leading-[1.12] tracking-tight text-[#111827] sm:text-[40px] md:text-[44px] lg:text-[48px]">
              Help us understand
              <br />
              your idea.
            </h2>

            <div className="mt-6 sm:mt-8">
              <ArrowLink href="/overview" className="inline-flex">
                Explore the programs first
              </ArrowLink>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-gray-200/80">
              {GUIDANCE_ITEMS.map((item, idx) => (
                <div
                  key={item.title}
                  className={`border-b border-gray-200/80 pb-5 sm:pb-6 ${
                    idx === 0 ? "pt-0" : "pt-5 sm:pt-6"
                  }`}
                >
                  <h3 className="text-[18px] font-bold tracking-tight text-[#111827] sm:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-gray-500 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

