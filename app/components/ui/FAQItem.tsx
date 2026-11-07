"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQItem({
  question,
  answer,
  defaultOpen = true,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <h3 className="pr-8 text-[16px] font-semibold leading-snug text-[#111827] md:text-[18px]">
          {question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-[#1a73e8] transition-transform duration-300 ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
        }`}
      >
        <p className="text-[14px] leading-relaxed text-gray-500 md:text-[15px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

