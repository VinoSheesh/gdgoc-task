import Image from "next/image";
import Container from "./ui/Container";

export default function BelongingStatementSection() {
  return (
    <section className="w-full bg-[#eaf5ed]">
      <Container className="py-14 sm:py-16 md:py-20">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 lg:gap-12">
          {/* ── Left: Community Spark Icon ── */}
          <div className="shrink-0 pt-1 sm:pt-1.5">
            <Image
              src="/Community%20spark.png"
              alt="Community Spark"
              width={400}
              height={400}
              priority
              quality={95}
              className="h-14 w-14 sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px] object-contain select-none"
            />
          </div>

          {/* ── Right: Statement & Description ── */}
          <div className="flex flex-col">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight text-[#111827] leading-[1.2]">
              Different majors. Different starting points.
              <br />
              A place for all of them.
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-gray-600 sm:text-gray-500 max-w-3xl">
              You don’t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

