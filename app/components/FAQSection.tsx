import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import ArrowLink from "./ui/ArrowLink";
import FAQItem from "./ui/FAQItem";

const faqData = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.",
  },
  {
    question: "Is this only for computer science students?",
    answer:
      "Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.",
  },
  {
    question: "How can I find learning opportunities?",
    answer:
      "Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-4">
            <SectionBadge label="A FEW GOOD QUESTIONS" />
            <h2 className="mb-6 text-[36px] font-bold leading-[1.15] tracking-tight text-[#111827] md:text-[44px]">
              Wondering
              <br />
              where
              <br />
              to begin?
            </h2>
            <ArrowLink href="/contact">Ask us a question</ArrowLink>
          </div>

          {/* Right column - FAQ items */}
          <div className="lg:col-span-8">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={true}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

