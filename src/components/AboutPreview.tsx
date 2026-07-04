import React from "react";
import Link from "next/link";

export default function AboutPreview() {
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
              Dynamic solutions, built on absolute compliance.
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
               DSS Corp is a premium Chennai-based financial consulting and CA advisory. We represent a progressive shift from rigid, typical compliance filings to growth-aligned B2B partnerships.
            </p>
          </div>

          {/* Right Text Block (Replaces the Partner Bios) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
              We guide high-growth startup founders, domestic MSMEs, and global NRI families through the complexities of direct taxation, GST audits, FEMA capital repatriation, and statutory company audits. 
            </p>
            <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
              Our multidisciplinary approach combines deep regulatory insights with proactive strategy to deliver compliance clarity where it matters most, making your enterprise audit-ready and scalable.
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
