import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";

export default function OurPurposeSection() {
  return (
    <section className="w-full bg-[#f1f3f4] py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <SectionBadge label="WHY WE COME TOGETHER" className="mb-6" />

            <h2 className="text-[34px] font-bold leading-[1.12] tracking-tight text-[#111827] sm:text-[40px] md:text-[44px]">
              A bridge from
              <br />
              <span className="text-[#1a73e8]">“I wonder”</span> to
              <br />
              <span className="text-[#4285f4]">“I made this.”</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="max-w-2xl lg:col-span-7">
            <h3 className="text-[19px] font-medium leading-[1.4] text-[#111827] sm:text-[21px] md:text-[22px]">
              Learning feels different when there’s someone to exchange ideas
              with, a problem you care about, and the space to give it a try.
            </h3>

            <p className="mt-6 text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
              That’s the spirit of Google Developer Groups on Campus at UGM. We
              create room for students to explore technology, develop practical
              skills, and learn from one another.
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
              Our campus is the starting point. The questions we ask and the
              things we build can reach beyond it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

