"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0);

  const cases = [
    {
      client: "Chennai-based D2C Fashion Brand",
      sector: "Startup & E-commerce",
      problem: "Inefficient supply chain tax planning resulting in blocked Input Tax Credit (ITC) and working capital crunch.",
      outcome: "Restructured contract manufacturer agreements and automated ITC reconciliation matching.",
      metric: "~40% Reduction",
      metricLabel: "In Compliance Turnaround Time",
    },
    {
      client: "Multi-State Automotive Components MSME",
      sector: "Manufacturing & Corporate",
      problem: "Complex transfer pricing between regional manufacturing hubs and sales depots triggering tax audits.",
      outcome: "Developed robust transfer pricing study and negotiated Advance Pricing Agreement (APA) with tax desk.",
      metric: "₹1.8 Cr",
      metricLabel: "Tax Liability Risk Cleared",
    },
    {
      client: "Cross-Border Tech Executive (US/India NRI)",
      sector: "NRI Taxation & FEMA",
      problem: "Navigating double taxation on global stock options and complex property sale repatriation limits.",
      outcome: "Obtained Form 15CB clearances and structured estate repatriation via custom capital accounts.",
      metric: "100% Compliant",
      metricLabel: "FEMA Capital Account Transition",
    },
    {
      client: "Single-Family Office (Manufacturing Legacy)",
      sector: "HNI Wealth & Legacy",
      problem: "Lack of clean family governance and succession planning, leaving real estate assets exposed to probate delays.",
      outcome: "Formulated custom private trust scheme, transferring asset ownership with robust tax insulation.",
      metric: "0% Probate",
      metricLabel: "Asset Exposure Risk Eliminated",
    },
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % cases.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="resources" className="py-24 bg-off-white border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block mb-2">
              Proven Results
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-navy">
              Advisory in Action
            </h2>
            <p className="font-body text-text-secondary mt-3">
              Anonymized studies detailing how our corporate tax, structuring, and compliance interventions unlock capital and eliminate compliance risks.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={handlePrev}
              className="p-2 border border-border-hairline hover:border-steel text-navy rounded-full bg-card-white hover:bg-off-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-border-hairline hover:border-steel text-navy rounded-full bg-card-white hover:bg-off-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden min-h-[380px]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {cases.map((c, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-card-white border border-border-hairline p-8 sm:p-12 rounded-xl">
                  
                  {/* Left Column: Context */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-heading font-semibold uppercase tracking-wider text-cyan px-2.5 py-1 bg-cyan/10 rounded">
                        {c.sector}
                      </span>
                      <span className="text-xs text-text-muted font-body">Anonymized Case Study</span>
                    </div>

                    <h3 className="font-heading font-semibold text-lg sm:text-xl text-navy">
                      {c.client}
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider block font-heading">
                          The Challenge
                        </span>
                        <p className="text-sm text-text-secondary leading-relaxed mt-1 font-body">
                          {c.problem}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider block font-heading">
                          The Strategic Intervention
                        </span>
                        <p className="text-sm text-navy leading-relaxed mt-1 font-body font-medium">
                          {c.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Metric Callout */}
                  <div className="lg:col-span-4 bg-navy text-card-white p-6 sm:p-8 rounded-lg flex flex-col justify-center items-center text-center border-t-4 border-t-chartreuse shadow-xs">
                    <TrendingUp className="w-8 h-8 text-chartreuse mb-4" />
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-chartreuse tracking-tight">
                      {c.metric}
                    </span>
                    <span className="text-xs text-text-muted mt-2 font-body max-w-[180px] leading-relaxed">
                      {c.metricLabel}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-1.5 mt-8">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIdx === idx ? "bg-navy w-6" : "bg-border-hairline"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
