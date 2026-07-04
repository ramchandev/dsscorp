"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PersonaBadge from "@/components/PersonaBadge";
import { caseStudiesDb } from "@/lib/case-studies";

export default function CaseStudiesHubPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const caseStudiesList = Object.values(caseStudiesDb);

  const filteredStudies =
    activeFilter === "All"
      ? caseStudiesList
      : caseStudiesList.filter(
          (cs) => cs.persona === activeFilter.toLowerCase()
        );

  const crumbs = [
    { label: "Case Studies" },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Area */}
        <section className="py-16 border-b border-border-hairline bg-card-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Advisory Outcomes
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight leading-tight">
                Anonymized Case Studies
              </h1>
              <p className="font-body text-base text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                Explore real, metrics-focused outcomes demonstrating how we restructure corporate tax, automate accounting books, and resolve estate probate risks.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-12">
              {["All", "Startup", "MSME", "HNI", "NRI"].map((filter, idx) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2.5 rounded font-body text-xs font-semibold transition-all border ${
                      isActive
                        ? "bg-navy text-card-white border-navy"
                        : "bg-card-white border-border-hairline text-navy hover:border-cyan/40"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredStudies.map((cs, idx) => (
                <div
                  key={idx}
                  className="bg-card-white border border-border-hairline p-8 rounded-lg grid grid-cols-1 sm:grid-cols-12 gap-8 items-start hover:shadow-sm transition-all group"
                >
                  
                  {/* Left (Content) */}
                  <div className="sm:col-span-8 space-y-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <PersonaBadge persona={cs.persona} />
                        <span className="text-[10px] font-heading font-bold text-cyan uppercase tracking-wider">
                          {cs.category}
                        </span>
                      </div>

                      <h3 className="font-heading font-semibold text-lg sm:text-xl text-navy group-hover:text-cyan transition-colors">
                        <Link href={`/case-studies/${cs.slug}`}>
                          {cs.title}
                        </Link>
                      </h3>

                      <p className="font-body text-xs sm:text-sm leading-relaxed text-text-secondary mt-2">
                        {cs.description}
                      </p>

                      <ul className="space-y-2 pt-4">
                        {cs.details.map((det, dIdx) => (
                          <li key={dIdx} className="flex gap-2 items-start text-xs text-text-secondary font-body">
                            <CheckCircle2 className="w-3.5 h-3.5 text-chartreuse mt-0.5 flex-shrink-0" />
                            <span>{det}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-navy hover:text-cyan transition-colors mt-6 pt-4 border-t border-border-hairline/60 w-fit"
                    >
                      Read full study <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  {/* Right (Metric) */}
                  <div className="sm:col-span-4 bg-navy text-card-white p-6 rounded-lg text-center border-t-4 border-t-chartreuse shadow-2xs h-fit w-full">
                    <TrendingUp className="w-6 h-6 text-chartreuse mx-auto mb-2" />
                    <span className="block text-xl sm:text-2xl font-heading font-bold text-chartreuse">
                      {cs.metric}
                    </span>
                    <span className="block text-[9px] text-text-muted font-body mt-1">
                      {cs.metricLabel}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
