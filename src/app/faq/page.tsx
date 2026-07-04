"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { servicesDb } from "@/lib/services";

export default function FAQHubPage() {
  // Aggregate all FAQs from the 30 services
  const aggregatedFaqs = Object.values(servicesDb).flatMap((service) =>
    service.faqs.map((faq) => ({
      ...faq,
      category: service.categoryName,
    }))
  );

  // Filter out duplicates based on the question text
  const uniqueFaqs = Array.from(
    new Map(aggregatedFaqs.map((faq) => [faq.question, faq])).values()
  );

  const categories = ["All", ...Array.from(new Set(uniqueFaqs.map((f) => f.category)))];

  const [activeCategory, setActiveCategory] = useState("All");

  const displayFaqs =
    activeCategory === "All"
      ? uniqueFaqs
      : uniqueFaqs.filter((f) => f.category === activeCategory);

  const crumbs = [
    { label: "FAQ Hub" },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Section */}
        <section className="py-16 border-b border-border-hairline bg-card-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                FAQ Center
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight leading-tight">
                Consolidated FAQ Hub
              </h1>
              <p className="font-body text-base text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                A single canonical resource aggregating the top inquiries on corporate taxation, accounting standard conversions, Indian subsidiary setup, and estate succession trusts.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Filter Dashboard */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Category Filter Sidenav */}
              <div className="lg:col-span-3 space-y-3 bg-card-white border border-border-hairline p-5 rounded-lg">
                <span className="block text-[10px] uppercase tracking-wider text-text-muted font-heading font-bold mb-4">
                  Filter by Category
                </span>
                <div className="flex flex-col gap-1">
                  {categories.map((cat, idx) => {
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveCategory(cat || "All")}
                        className={`w-full text-left px-3 py-2 rounded text-xs font-body transition-colors font-medium ${
                          isActive
                            ? "bg-navy text-card-white font-semibold"
                            : "text-navy hover:bg-off-white"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Accordion List Panel */}
              <div className="lg:col-span-9 space-y-6">
                <div className="max-w-3xl mb-8">
                  <h3 className="font-heading font-semibold text-xl text-navy">
                    Showing {displayFaqs.length} Frequently Answered Questions
                  </h3>
                </div>

                <FAQAccordion faqs={displayFaqs} enableSearch={true} />
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
