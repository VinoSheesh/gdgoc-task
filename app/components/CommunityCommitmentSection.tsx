import Image from "next/image";
import Container from "./ui/Container";

export default function CommunityCommitmentSection() {
  return (
    <section className="w-full bg-[#fff7df]">
      <Container className="py-14 sm:py-16 md:py-20">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 lg:gap-12">
          {/* ── Left: Yellow Spark Icon ── */}
          <div className="shrink-0 pt-1 sm:pt-1.5">
            <Image
              src="/Community%20Commitmen.png"
              alt="Community Commitment"
              width={300}
              height={300}
              priority
              quality={95}
              className="h-14 w-14 sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px] object-contain select-none"
            />
          </div>

          {/* ── Right: Statement & Description ── */}
          <div className="flex flex-col">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight text-[#111827] leading-[1.2]">
              A space to learn. A responsibility to care.
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-gray-600 sm:text-gray-500 max-w-4xl">
              We want every conversation and learning experience to be respectful,
              inclusive, and constructive. Be kind, give credit, and make room
              for people who are just getting started.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

