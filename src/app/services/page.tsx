import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Briefcase, FileText, Percent, ShieldCheck, TrendingUp, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";
import { categoriesDb, servicesDb } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

// Perfect SEO Page Title and Meta Description for the targeted keywords
export const metadata = createPageMetadata({
  title: "Financial Advisory Services Chennai | CA Firm Services List",
  description:
    "Explore our complete CA firm services list in Chennai, India. DSS Corp provides professional tax audit accounting services, FEMA filings, and startup compliance.",
  path: "/services",
});

const categoryIcons: Record<string, React.ReactNode> = {
  "advisory-consulting": <Briefcase className="w-6 h-6 text-cyan" />,
  "accounting-compliance": <FileText className="w-6 h-6 text-steel" />,
  "taxation": <Percent className="w-6 h-6 text-chartreuse" />,
  "audit-assurance": <ShieldCheck className="w-6 h-6 text-navy" />,
  "corporate-finance": <TrendingUp className="w-6 h-6 text-cyan" />,
  "global-private-wealth": <Globe className="w-6 h-6 text-chartreuse" />,
};

const seoFaqs = [
  {
    question: "What financial advisory services in Chennai does DSS Corp provide?",
    answer: "DSS Corp offers a full-suite CA firm services list in Chennai, including corporate restructuring, startup mentorship, financial modeling, capital fundraising advisory, and regulatory FEMA compliance for HNIs/NRIs.",
  },
  {
    question: "How can I access your complete CA firm services list?",
    answer: "Our complete CA firm services list covers 6 major desks: Advisory & Consulting, Bookkeeping & Accounting, Corporate Taxation, Audit & Assurance, Corporate Finance, and Global Private Wealth. We manage over 30 sub-services tailored for startups, MSMEs, and global corporate subsidiaries.",
  },
  {
    question: "Do you offer tax audit accounting services in India for foreign subsidiaries?",
    answer: "Yes, we specialize in end-to-end tax audit accounting services in India. Our partners guide foreign subsidiaries and domestic enterprises through statutory audits, GST reconciliation audits, corporate tax filing, transfer pricing compliance, and ROC filings in accordance with ICAI standards.",
  },
  {
    question: "Why should a business hire a Chennai-based financial advisory firm like DSS Corp?",
    answer: "Hiring a local expert in Chennai provides immediate proximity to regulatory offices, deep familiarity with state-specific industrial zones (like TIDEL Park and OMR tech hubs), and direct, partner-led compliance consulting. DSS Corp ensures your business remains audit-ready and legally optimized.",
  },
];

export default function ServicesHubPage() {
  const crumbs = [
    { label: "Services" },
  ];

  const categories = Object.values(categoriesDb);

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Section - Optimized with keywords */}
        <section className="py-20 border-b border-navy-secondary bg-navy text-card-white relative overflow-hidden">
          <div className="absolute top-1/2 -right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Practice Portfolio
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-card-white tracking-tight leading-tight">
                Financial Advisory Services Chennai | CA Firm Services List
              </h1>
              <p className="font-body text-base text-text-muted leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                DSS Corp is a premier Chartered Accountancy firm delivering end-to-end financial advisory services in Chennai. Explore our complete CA firm services list covering tax audit accounting services in India, FEMA cross-border compliance, corporate valuations, and startup compliance strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Directory Grid */}
        <section className="py-20 border-b border-border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="font-heading font-semibold text-2xl text-navy">
                Tax Audit Accounting Services & Practice Desks
              </h2>
              <p className="font-body text-sm text-text-secondary mt-2">
                Click on any practice category to explore detailed services, processes, and custom tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, idx) => {
                // Get top 2 services under this category
                const topServices = Object.values(servicesDb)
                  .filter((s) => s.category === cat.slug)
                  .slice(0, 2);

                return (
                  <div
                    key={idx}
                    className="bg-card-white border border-border-hairline hover:border-cyan/50 p-8 rounded-lg flex flex-col justify-between transition-all hover:shadow-xs group"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="p-3 bg-off-white rounded-lg inline-block shadow-2xs group-hover:bg-cyan/10 group-hover:text-cyan transition-colors">
                          {categoryIcons[cat.slug] || <Briefcase className="w-6 h-6 text-cyan" />}
                        </div>
                        <span className="text-[10px] font-heading font-bold text-text-muted uppercase tracking-wider">
                          Practice Category
                        </span>
                      </div>

                      <h2 className="font-heading font-semibold text-lg text-navy mb-3 group-hover:text-cyan transition-colors">
                        <Link href={`/services/${cat.slug}`}>
                          {cat.name}
                        </Link>
                      </h2>

                      <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                        {cat.directAnswer}
                      </p>

                      {/* Display Key Subservices */}
                      {topServices.length > 0 && (
                        <div className="border-t border-border-hairline/60 pt-4 mb-8">
                          <span className="block text-[9px] uppercase tracking-wider text-text-muted font-heading font-bold mb-2">
                            Flagship services
                          </span>
                          <div className="space-y-2">
                            {topServices.map((service, sIdx) => (
                              <Link
                                key={sIdx}
                                href={`/services/${cat.slug}/${service.slug}`}
                                className="flex justify-between items-center text-xs font-body text-navy hover:text-cyan font-medium py-1 group/item"
                              >
                                <span>{service.serviceName}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-text-muted group-hover/item:translate-x-0.5 transition-transform" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <Link
                      href={`/services/${cat.slug}`}
                      className="inline-flex items-center justify-center bg-navy hover:bg-navy-secondary text-card-white px-6 py-2.5 rounded font-body font-semibold text-xs transition-all shadow-xs w-full text-center"
                    >
                      View Category Desk
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose DSS Section - SEO Editorial Copy */}
        <section className="py-20 bg-card-white border-b border-border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Editorial copy containing primary keyword */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                  Strategic Chennai CA Desk
                </span>
                <h2 className="font-heading font-semibold text-3xl text-navy leading-tight">
                  Proactive Financial Advisory Services in Chennai
                </h2>
                <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                  Unlike traditional, passive administrative CA offices, DSS Corp functions as a strategic advisory partner for your company's growth lifecycle. We integrate legal structuring, financial strategy, and regulatory precision under a single partner-led engagement model.
                </p>
                <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                  Whether you require detailed statutory and tax audit accounting services in India or a clean corporate structure to raise institutional venture capital, our practice desks deliver absolute clarity.
                </p>
              </div>

              {/* Right Side: Key benefits */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-off-white border border-border-hairline p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-sm text-navy mb-2">Chennai Local Proximity</h3>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    Immediate compliance execution, localized representations, and close ties to Chennai industrial corridors.
                  </p>
                </div>
                <div className="bg-off-white border border-border-hairline p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-sm text-navy mb-2">Completely Audit-Ready</h3>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    We ensure your books comply with statutory Indian Standards, making statutory and internal audits seamless.
                  </p>
                </div>
                <div className="bg-off-white border border-border-hairline p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-sm text-navy mb-2">FEMA & Global Compliance</h3>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    Dedicated desks for inward FDI, cross-border equity issues, and NRI asset tax planning.
                  </p>
                </div>
                <div className="bg-off-white border border-border-hairline p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-sm text-navy mb-2">Virtual CFO Advisory</h3>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    Continuous monitoring of cashflow, cash runways, MIS parameters, and ROC statutory filings.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Structured SEO FAQs Accordion */}
        <section className="py-20 bg-off-white border-b border-border-hairline">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                FAQ Desk
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-navy mt-2">
                Frequently Asked Questions
              </h2>
              <p className="font-body text-sm text-text-secondary mt-2">
                Important regulatory answers regarding corporate CA, taxation, and tax audit accounting services in India.
              </p>
            </div>

            <FAQAccordion faqs={seoFaqs} />
          </div>
        </section>

        {/* Scoping consultation CTAs */}
        <CTABand />

      </main>

      <Footer />
    </>
  );
}
