import Container from "./ui/Container";

const outcomes = [
  {
    pathway: "Research & discovery",
    practice: "Listening, problem framing, and testing assumptions",
    outcome: "A research insight and a focused problem brief",
  },
  {
    pathway: "Design & creativity",
    practice: "Ideation, user flows, and prototype feedback",
    outcome: "An interactive prototype and a design story",
  },
  {
    pathway: "Development",
    practice: "Coding, testing, and connecting tools",
    outcome: "A working demo with a clear explanation",
  },
];

export default function LearningOutcomesSection() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <Container>
        {/* Heading */}
        <h2 className="mb-8 text-[30px] font-bold leading-[1.18] tracking-tight text-[#111827] sm:text-[36px] md:mb-10 lg:text-[40px]">
          From an interest to something you can show.
        </h2>

        {/* Outcomes Table Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#f1f3f4] text-[12px] font-medium text-gray-500 sm:text-[13px]">
                  <th className="py-3.5 px-6 font-medium w-[28%]">Pathway</th>
                  <th className="py-3.5 px-6 font-medium w-[36%]">
                    What you can practice
                  </th>
                  <th className="py-3.5 px-6 font-medium w-[36%]">
                    A possible outcome
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {outcomes.map((item) => (
                  <tr
                    key={item.pathway}
                    className="transition-colors hover:bg-gray-50/60"
                  >
                    <td className="py-6 px-6 align-middle">
                      <span className="text-[16px] font-bold text-[#111827] sm:text-[17px]">
                        {item.pathway}
                      </span>
                    </td>
                    <td className="py-6 px-6 align-middle text-[14px] leading-relaxed text-gray-500 sm:text-[15px]">
                      {item.practice}
                    </td>
                    <td className="py-6 px-6 align-middle text-[14px] leading-relaxed text-gray-500 sm:text-[15px]">
                      {item.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-4 text-[11.5px] leading-relaxed text-gray-400 sm:text-[12px]">
          Illustrative learning outcomes. Topics and opportunities are shared
          through community updates.
        </p>
      </Container>
    </section>
  );
}

