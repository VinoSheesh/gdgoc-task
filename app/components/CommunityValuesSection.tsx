import { BookOpen, Users, CodeXml, Heart } from "lucide-react";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import ValueCard from "./ui/ValueCard";
import { getValues, ApiValue } from "../lib/values";

const VALUE_VISUALS: Record<
  string,
  { accentColor: string; icon: React.ReactNode }
> = {
  "stay-curious": {
    accentColor: "bg-[#4285f4]",
    icon: <BookOpen className="h-5 w-5 stroke-[1.8]" />,
  },
  "make-room": {
    accentColor: "bg-[#ea4335]",
    icon: <Users className="h-5 w-5 stroke-[1.8]" />,
  },
  "learn-by-building": {
    accentColor: "bg-[#fbbc04]",
    icon: <CodeXml className="h-5 w-5 stroke-[1.8]" />,
  },
  "give-something-back": {
    accentColor: "bg-[#34a853]",
    icon: <Heart className="h-5 w-5 stroke-[1.8]" />,
  },
};

export default async function CommunityValuesSection() {
  const valuesData: ApiValue[] = await getValues();

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
          {valuesData.map((val) => {
            const visual = VALUE_VISUALS[val.id] || {
              accentColor: "bg-[#4285f4]",
              icon: <BookOpen className="h-5 w-5 stroke-[1.8]" />,
            };

            return (
              <ValueCard
                key={val.id}
                accentColor={visual.accentColor}
                icon={visual.icon}
                title={val.title}
                description={val.description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
