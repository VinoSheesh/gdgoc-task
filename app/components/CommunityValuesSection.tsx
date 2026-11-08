import { BookOpen, Users, CodeXml, Heart } from "lucide-react";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import ValueCard from "./ui/ValueCard";

const values = [
  {
    accentColor: "bg-[#4285f4]",
    icon: <BookOpen className="h-5 w-5 stroke-[1.8]" />,
    title: "Stay curious",
    description:
      "Ask the extra question. Be willing to learn something outside your comfort zone.",
  },
  {
    accentColor: "bg-[#ea4335]",
    icon: <Users className="h-5 w-5 stroke-[1.8]" />,
    title: "Make room",
    description:
      "Welcome different perspectives, respect each other, and help people find their voice.",
  },
  {
    accentColor: "bg-[#fbbc04]",
    icon: <CodeXml className="h-5 w-5 stroke-[1.8]" />,
    title: "Learn by building",
    description:
      "Try a small experiment. Share the rough version. Let feedback guide what comes next.",
  },
  {
    accentColor: "bg-[#34a853]",
    icon: <Heart className="h-5 w-5 stroke-[1.8]" />,
    title: "Give something back",
    description:
      "Share a resource, explain what clicked, or help someone take their next step.",
  },
];

export default function CommunityValuesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-28">
      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <SectionBadge label="WHAT GUIDES US" className="mb-5" />

          <h2 className="text-[34px] font-bold leading-[1.15] tracking-tight text-[#111827] sm:text-[40px] md:text-[44px]">
            Good technology starts with good company.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16">
          {values.map((val) => (
            <ValueCard
              key={val.title}
              accentColor={val.accentColor}
              icon={val.icon}
              title={val.title}
              description={val.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

