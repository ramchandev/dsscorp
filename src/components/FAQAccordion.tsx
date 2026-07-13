"use client";

import React, { useState } from "react";
import { HelpCircle, Search, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  enableSearch?: boolean;
  questionHeading?: "h3" | "span";
}

export default function FAQAccordion({
  faqs,
  enableSearch = false,
  questionHeading = "span",
}: FAQAccordionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Generate FAQPage Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const QuestionTag = questionHeading;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-6">
        {enableSearch && (
          <div className="relative max-w-md mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card-white border border-border-hairline rounded px-10 py-2.5 text-sm font-body focus:outline-none focus:border-cyan transition-all"
            />
          </div>
        )}

        {filteredFaqs.length === 0 ? (
          <p className="text-sm font-body text-text-muted">No FAQs found matching your query.</p>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-card-white border border-border-hairline rounded-lg overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left font-heading font-semibold text-navy hover:text-cyan transition-all"
                  >
                    <span className="flex gap-2.5 items-start">
                      <HelpCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                      <QuestionTag className="font-heading font-semibold text-base text-inherit m-0">
                        {faq.question}
                      </QuestionTag>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-text-muted transition-transform duration-200 mt-0.5 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-cyan" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-200 ease-in-out ${
                      isOpen ? "max-h-[1000px] border-t border-border-hairline/60 py-5 px-6 bg-off-white/40" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <p className="font-body text-xs sm:text-sm leading-relaxed text-text-secondary">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
