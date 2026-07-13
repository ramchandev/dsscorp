import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
  const focusAreas = [
    "Startup founders and growing MSMEs",
    "GST, income tax, and company audits",
    "NRI families and FEMA remittances",
  ];

  return (
    <section id="about" className="py-24 bg-off-white border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
              About the Firm
            </span>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-navy leading-tight">
              Clear advice. Strong compliance.
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
              DSS Corp is a Chennai CA firm.
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed pl-4">
              We go beyond basic filings. We help you grow with less risk.
            </p>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading font-semibold text-lg text-navy">
              Who we work with
            </h3>
            <ul className="space-y-3 list-none">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-body text-sm sm:text-base text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
              We mix deep tax knowledge with practical plans.
            </p>
            <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
              The goal is simple: keep you audit-ready and ready to scale.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-navy hover:bg-navy-secondary text-card-white px-6 py-3 rounded font-body font-semibold text-sm transition-all border-t-2 border-t-chartreuse shadow-xs"
              >
                Learn more about us
              </Link>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
