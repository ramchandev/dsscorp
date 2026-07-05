import React from "react";
import Link from "next/link";
import { Percent, TrendingUp, Calendar, Globe, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PersonaBadge from "@/components/PersonaBadge";
import { createPageMetadata } from "@/lib/seo";

const toolsList = [
  {
    slug: "gst-calculator",
    name: "GST/Tax Liability Calculator",
    desc: "Calculate CGST, SGST, IGST, and optimize Input Tax Credits (ITC) dynamically.",
    icon: <Percent className="w-6 h-6 text-chartreuse" />,
    persona: "msme" as const,
    outputDesc: "Detailed tax breakups and ITC eligibility status.",
  },
  {
    slug: "income-tax-calculator",
    name: "Income Tax Regime Calculator",
    desc: "Compare Old vs. New Tax Regime liabilities and determine the most tax-efficient option.",
    icon: <Percent className="w-6 h-6 text-cyan" />,
    persona: "msme" as const,
    outputDesc: "Comparative regime tax liabilities and savings calculations.",
  },
  {
    slug: "valuation-estimator",
    name: "Business Valuation Range Estimator",
    desc: "Estimate venture capital or market valuation ranges using custom revenue and growth inputs.",
    icon: <TrendingUp className="w-6 h-6 text-cyan" />,
    persona: "startup" as const,
    outputDesc: "Multiple-based valuation bands and cost of capital metrics.",
  },
  {
    slug: "incorporation-estimator",
    name: "Incorporation Cost & Timeline Estimator",
    desc: "Map regulatory MCA fees, stamp duties, and schedules for registering a business in India.",
    icon: <Calendar className="w-6 h-6 text-steel" />,
    persona: "startup" as const,
    outputDesc: "Fee itemizations and statutory timeline schedules.",
  },
  {
    slug: "fema-checker",
    name: "FEMA/Repatriation Eligibility Checker",
    desc: "Check cross-border transfer allowances and capital remittance structures under RBI rules.",
    icon: <Globe className="w-6 h-6 text-navy" />,
    persona: "nri" as const,
    outputDesc: "Form 15CA/15CB guidelines and repatriation caps.",
  },
  {
    slug: "wealth-readiness-quiz",
    name: "Wealth Structuring Readiness Quiz",
    desc: "Evaluate private trust, will, and family legacy structuring needs.",
    icon: <Award className="w-6 h-6 text-chartreuse" />,
    persona: "hni" as const,
    outputDesc: "Risk vulnerability indexes and succession checklists.",
  },
];

export const metadata = createPageMetadata({
  title: "Interactive Calculators & Tools | DSS Corp Advisory",
  description:
    "Free interactive calculators for GST liability, startup valuations, MCA registration timelines, FEMA compliance, and estate planning readiness.",
  path: "/tools",
});

export default function ToolsHub() {
  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        
        {/* Hero Section */}
        <section className="py-16 border-b border-border-hairline bg-card-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Decision Tools
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight leading-tight">
                Interactive Advisory Tools
              </h1>
              <p className="font-body text-base text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                Get a real number before you talk to us. Our calculators are illustrative, offering quick estimates based on standard regulatory guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {toolsList.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-card-white border border-border-hairline hover:border-cyan/50 p-8 rounded-lg flex flex-col justify-between transition-all hover:shadow-sm group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="p-3 bg-off-white rounded-lg inline-block shadow-2xs group-hover:bg-cyan/10 group-hover:text-cyan transition-colors">
                        {tool.icon}
                      </div>
                      <PersonaBadge persona={tool.persona} />
                    </div>

                    <h2 className="font-heading font-semibold text-lg text-navy mb-3 group-hover:text-cyan transition-colors">
                      {tool.name}
                    </h2>
                    
                    <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                      {tool.desc}
                    </p>

                    <div className="border-t border-border-hairline/60 pt-4 mb-8">
                      <span className="block text-[10px] uppercase tracking-wider text-text-muted font-heading font-semibold mb-1">
                        Outputs calculated
                      </span>
                      <p className="font-body text-xs text-navy font-medium">
                        {tool.outputDesc}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center justify-center bg-navy hover:bg-navy-secondary text-card-white px-6 py-2.5 rounded font-body font-semibold text-xs transition-all shadow-xs w-full text-center"
                  >
                    Open Calculator
                  </Link>
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
