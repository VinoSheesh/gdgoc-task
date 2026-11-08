import ArrowLink from "./ui/ArrowLink";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";

const ways = [
  {
    title: "Come as a learner",
    description:
      "Explore a topic, join a discussion, and ask the question that’s been on your mind.",
  },
  {
    title: "Grow as a collaborator",
    description:
      "Work with people whose skills complement yours. Discover what you can build together.",
  },
  {
    title: "Give back as a contributor",
    description:
      "Share knowledge, support a learning session, or bring an idea for the community.",
  },
];

export default function WaysToBelongSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <SectionBadge label="PEOPLE, NOT LABELS" className="mb-6" />

            <h2 className="text-[34px] font-bold leading-[1.12] tracking-tight text-[#111827] sm:text-[40px] md:text-[46px]">
              There’s more
              <br />
              than one way to
              <br />
              contribute.
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
              You can be learning one day and helping someone else the next. A
              community grows through both.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {ways.map((way, idx) => (
                <div
                  key={way.title}
                  className={`border-b border-gray-200 pb-6 sm:pb-7 ${
                    idx === 0 ? "pt-0" : "pt-1"
                  }`}
                >
                  <h3 className="text-[19px] font-bold text-[#111827] sm:text-[21px]">
                    {way.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-500 sm:text-[15px]">
                    {way.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Link */}
            <div className="mt-8">
              <ArrowLink href="/contact" className="inline-flex">
                Let’s talk about getting involved
              </ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

