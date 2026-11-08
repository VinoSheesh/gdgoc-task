import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import ArrowLink from "./ui/ArrowLink";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommunityInvitationSection() {
  return (
    <section className="bg-white py-10 md:py-16">
      <Container>
        <div className="rounded-3xl bg-[#eaf2ff] px-8 py-10 sm:px-12 sm:py-12 md:px-14 md:py-14 lg:px-16 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left content */}
            <div className="max-w-xl">
              <SectionBadge label="YOUR NEXT CHAPTER" className="mb-4" />
              <h2 className="mb-4 text-[32px] font-bold leading-[1.15] tracking-tight text-[#111827] sm:text-[38px] md:text-[42px]">
                Bring your curiosity.
                <br />
                We&apos;ll build from there.
              </h2>
              <p className="text-[15px] leading-relaxed text-gray-500 md:text-[16px]">
                Find a learning track, meet a collaborator, or start a
                conversation.
              </p>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col items-start gap-4 shrink-0">
              <Link
                href="/overview"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#1a73e8] px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-[#1557b0] active:scale-[0.98]"
              >
                <span>Explore the overview</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
              </Link>
              <ArrowLink href="/contact" className="pl-0.5">
                Talk to the community
              </ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
