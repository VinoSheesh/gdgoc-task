import ArrowLink from "./ui/ArrowLink";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import SectionDivider from "./ui/SectionDivider";

const tags = ["Student-led", "Peer-powered", "Curiosity-first"];

export default function DiscoverSection() {
  return (
    <section className="w-full bg-white">
      {/* Top border separator */}


      <Container className="py-14 md:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-24">
          {/* ── Left Column ── */}
          <div className="flex flex-1 flex-col items-start lg:max-w-md">
            {/* Badge */}
            <SectionBadge label="A campus. A community." />

            {/* Heading */}
            <h2 className="mb-6 text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-[40px] lg:text-[44px]">
              Not just learning
              <br />
              tech.
              <br />
              Finding your people.
            </h2>

            {/* Link */}
            <ArrowLink href="#about">
              More about GDGoC UGM
            </ArrowLink>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-1 flex-col justify-start pt-0 lg:pt-10">
            {/* Paragraph 1 */}
            <p className="mb-5 text-[15px] leading-[1.75] text-gray-500">
              Google Developer Groups on Campus, Universitas Gadjah Mada
              brings students together around one simple idea: we can go{" "}
              <span className="font-bold text-gray-900">further</span> when
              we <span className="font-bold text-gray-900">learn</span> with
              each other.
            </p>

            {/* Paragraph 2 */}
            <p className="mb-8 text-[15px] leading-[1.75] text-gray-500">
              From your first line of code to your next product idea,
              there&apos;s room to ask questions, share what you know, and try
              something new.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-300 px-4 py-1.5 text-[13px] font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
