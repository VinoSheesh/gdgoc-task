import ArrowLink from "./ui/ArrowLink";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";

export default function StartingPointGuidanceSection() {
  return (
    <section id="starting-point" className="w-full bg-[#fff7df] py-12 sm:py-14 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <SectionBadge label="START WHERE YOU ARE" className="mb-4" />

            <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#111827] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[40px]">
              New to tech?
              <br />
              <span className="lg:whitespace-nowrap">That’s a starting point, too.</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-gray-600 sm:text-[16px] sm:text-gray-500">
              You don’t need a finished portfolio or the perfect track choice.
              Pick a topic you’re curious about. If you’re unsure, tell us what
              interests you and we can start a conversation.
            </p>

            <div className="mt-5">
              <ArrowLink href="/contact" className="inline-flex">
                Ask about getting started
              </ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

