import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import ArrowLink from "./ui/ArrowLink";
import FAQItem from "./ui/FAQItem";
import { getFaqs } from "../lib/faqs";

export default async function FAQSection() {
  const faqs = await getFaqs();

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-4">
            <SectionBadge label="A FEW GOOD QUESTIONS" className="mb-4" />
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
            {faqs.map((faq, idx) => (
              <FAQItem
                key={faq.id || faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
