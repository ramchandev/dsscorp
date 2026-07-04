import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Briefcase, FileText, Percent, ShieldCheck, TrendingUp, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";
import { categoriesDb, servicesDb } from "@/lib/services";

export const metadata = {
  title: "Our Services | DSS Corp Advisory Chennai",
  description: "Explore our 6 practice categories covering Startup Mentorship, Bookkeeping, Corporate Tax, Audits, M&A Valuations, and global FEMA compliance.",
};

const categoryIcons: Record<string, React.ReactNode> = {
  "advisory-consulting": <Briefcase className="w-6 h-6 text-cyan" />,
  "accounting-compliance": <FileText className="w-6 h-6 text-steel" />,
  "taxation": <Percent className="w-6 h-6 text-chartreuse" />,
  "audit-assurance": <ShieldCheck className="w-6 h-6 text-navy" />,
  "corporate-finance": <TrendingUp className="w-6 h-6 text-cyan" />,
  "global-private-wealth": <Globe className="w-6 h-6 text-chartreuse" />,
};

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

        {/* Hero Section */}
        <section className="py-20 border-b border-navy-secondary bg-navy text-card-white relative overflow-hidden">
          <div className="absolute top-1/2 -right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Practice Portfolio
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-card-white tracking-tight leading-tight">
                Full-Suite Corporate & Wealth Advisory
              </h1>
              <p className="font-body text-base text-text-muted leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                We organize our advisory practice into 6 core desks, servicing domestic MSMEs, high-growth startup founders, and global families managing cross-border Indian assets.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Directory Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="font-heading font-semibold text-2xl text-navy">
                Our Practice Areas
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

        {/* Scoping consultation CTAs */}
        <CTABand />

      </main>

      <Footer />
    </>
  );
}
