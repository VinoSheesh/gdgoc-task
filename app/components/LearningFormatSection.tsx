import { BookOpen, CodeXml, Users } from "lucide-react";

interface LearningFormatCard {
  icon: typeof BookOpen;
  title: string;
  description: string;
  footer: string;
}

const formats: LearningFormatCard[] = [
  {
    icon: BookOpen,
    title: "Study together",
    description:
      "Work through foundations in peer learning sessions. Bring your questions; leave with a next step.",
    footer: "Study groups & guided practice",
  },
  {
    icon: CodeXml,
    title: "Try it hands-on",
    description:
      "Explore a tool or technique in a workshop, then put it to work in a small experiment.",
    footer: "Workshops & technical sessions",
  },
  {
    icon: Users,
    title: "Share the process",
    description:
      "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
    footer: "Project circles & sharing sessions",
  },
];

export default function LearningFormatSection() {
  return (
    <section className="w-full bg-[#f1f3f4]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-12">
        {/* ── Section Header ── */}
        <div className="mb-10 sm:mb-12">
          {/* Micro-badge */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1a73e8]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500">
              More than a classroom
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="mb-4 text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
            Less watching. More making.
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-gray-500">
            Learn in a way that turns a new concept into something you can actually use.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {formats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-[28px] bg-white p-7 sm:p-8 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6 flex items-center">
                    <Icon className="h-6 w-6 text-[#1a73e8] stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-[22px] font-bold tracking-tight text-[#111827]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] leading-[1.65] text-gray-500">
                    {item.description}
                  </p>
                </div>

                {/* Bottom area */}
                <div>
                  {/* Divider line */}
                  <div className="my-5 w-full border-t border-gray-100" />

                  {/* Footer link/text */}
                  <span className="text-[13px] font-semibold text-[#1a73e8]">
                    {item.footer}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

