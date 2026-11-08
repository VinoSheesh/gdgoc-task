import Image from "next/image";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";

export default function AboutHeroSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <SectionBadge label="ABOUT GDGOC UGM" className="mb-6" />

            <h1 className="text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-5xl lg:text-[56px]">
              Built by students.
              <br />
              <span className="text-[#1a73e8]">For what&apos;s next.</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
              We&apos;re a community of learners and makers at Universitas
              Gadjah Mada, connected by curiosity and the belief that technology
              can do good.
            </p>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
              UNIVERSITAS GADJAH MADA • 2026/2027
            </p>
          </div>

          {/* Right Column: Hero Graphic */}
          <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px]">
              <Image
                src="/About%20Hero%20Image.png"
                alt="GDGoC UGM - Built by students. For what's next."
                width={1856}
                height={1600}
                priority
                quality={95}
                className="h-auto w-full object-contain select-none"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

