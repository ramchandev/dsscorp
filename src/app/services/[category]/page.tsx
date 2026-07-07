import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";
import PersonaBadge from "@/components/PersonaBadge";
import FAQAccordion from "@/components/FAQAccordion";
import { servicesDb, categoriesDb } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(categoriesDb).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const data = categoriesDb[category];
  if (!data) {
    return createPageMetadata({
      title: "Practice Category | DSS Corp Advisory",
      description: "Explore Chartered Accountancy practice categories at DSS Corp Advisory.",
      path: "/services",
    });
  }

  // Targeted SEO title and description specifically for the advisory-consulting category
  if (category === "advisory-consulting") {
    return createPageMetadata({
      title: "Business Advisory Services Chennai | Corporate Advisory - DSS Corp",
      description:
        "DSS Corp offers premier business advisory services in Chennai. Explore our corporate advisory services and startup consulting in India for sustainable growth.",
      path: `/services/${category}`,
    });
  }

  return createPageMetadata({
    title: `${data.name} | DSS Corp Advisory Services`,
    description: data.directAnswer,
    path: `/services/${category}`,
  });
}

const advisoryFaqs = [
  {
    question: "What are the benefits of hiring business advisory services in Chennai?",
    answer: "Hiring business advisory services in Chennai gives companies direct access to qualified strategic partners, deep compliance expertise under Indian corporate laws, and localized representation for regulatory filings. DSS Corp helps scale operations while maintaining absolute compliance.",
  },
  {
    question: "Does DSS Corp provide startup consulting in India for overseas founders?",
    answer: "Yes, we offer specialized startup consulting in India for NRI investors and international directors. We assist with FDI compliance, Indian subsidiary incorporation, capital structuring, capitalization (cap) table setup, and FEMA regulations.",
  },
  {
    question: "What does your corporate advisory services suite include?",
    answer: "Our corporate advisory services suite covers business structuring and restructuring, corporate governance, risk management policies, director onboarding frameworks, and strategic board consulting, ensuring your entity remains investable and legally sound.",
  },
  {
    question: "How does business advisory help in scaling venture-backed startups?",
    answer: "Our advisory consultants act as strategic partners, helping startups model equity vesting schedules, draft shareholder agreements, manage transaction diligence audits, and prepare financial reports for upcoming investment rounds.",
  },
];

export default async function CategoryHubPage({ params }: PageProps) {
  const { category } = await params;
  const pData = categoriesDb[category];

  if (!pData) {
    notFound();
  }

  // Get all services belonging to this category
  const categoryServices = Object.values(servicesDb).filter(
    (s) => s.category === pData.slug
  );

  const crumbs = [
    { label: "Services", href: "/services" },
    { label: pData.name },
  ];

  const isAdvisory = category === "advisory-consulting";

  // SEO Optimized Copy definitions specifically for the advisory-consulting category
  const displayTitle = isAdvisory
    ? "Business Advisory Services Chennai | Corporate Advisory Services"
    : pData.name;

  const displayDesc = isAdvisory
    ? "At DSS Corp Advisory, we provide growth-oriented business advisory services in Chennai. Our expert consultants deliver high-impact corporate advisory services and startup consulting in India, helping entrepreneurs navigate legal structuring, regulatory risks, and corporate scaling."
    : pData.directAnswer;

  const displayGridTitle = isAdvisory
    ? "Startup Consulting India & Core Advisory Focus"
    : `Explore Services under ${pData.name}`;

  const displayGridDesc = isAdvisory
    ? "DSS Corp delivers comprehensive startup consulting in India alongside tailored corporate advisory services to ensure robust entity setup, capitalization structuring, and regulatory governance."
    : "We organize our practice into high-intent flagship services (Tier 1 Money Pages) and regular compliance maintenance services (Tier 2).";

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 animate-fade-in font-body">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Area */}
        <section className="py-20 border-b border-navy-secondary bg-navy text-card-white relative overflow-hidden">
          <div className="absolute top-1/2 -right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl space-y-5">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Practice Desk
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-card-white tracking-tight leading-tight">
                {displayTitle}
              </h1>
              <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                {displayDesc}
              </p>
              <div className="pt-2">
                <PersonaBadge persona={pData.primaryPersona} dark />
              </div>
            </div>
          </div>
        </section>

        {/* Services Directory Grid */}
        <section className="py-20 border-b border-border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="font-heading font-semibold text-2xl text-navy">
                {displayGridTitle}
              </h2>
              <p className="font-body text-sm text-text-secondary mt-2">
                {displayGridDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryServices.map((service, idx) => {
                const isTier1 = service.tier === 1;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-lg border bg-card-white border-border-hairline hover:border-cyan/50 hover:shadow-xs flex flex-col justify-between transition-all group"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className={`text-[10px] font-heading font-semibold px-2 py-0.5 rounded border ${
                          isTier1 
                            ? "bg-chartreuse/10 text-[#618f27] border-chartreuse/35"
                            : "bg-cyan/10 text-cyan border-cyan/35"
                        }`}>
                          Tier {service.tier} Service
                        </span>
                        <PersonaBadge persona={service.primaryPersona} />
                      </div>

                      <h3 className="font-heading font-semibold text-lg mb-3 text-navy group-hover:text-cyan transition-colors">
                        {service.serviceName}
                      </h3>

                      <p className="font-body text-xs sm:text-sm leading-relaxed mb-8 text-text-secondary">
                        {service.directAnswer.slice(0, 130)}...
                      </p>
                    </div>

                    <Link
                      href={`/services/${service.category}/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-navy hover:text-cyan transition-colors mt-auto"
                    >
                      Explore Service <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Custom SEO Copywriting Section for advisory-consulting category */}
        {isAdvisory && (
          <>
            <section className="py-20 bg-card-white border-b border-border-hairline">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Side Copy */}
                  <div className="lg:col-span-6 space-y-6">
                    <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                      Compliance Strategy Desk
                    </span>
                    <h2 className="font-heading font-semibold text-3xl text-navy leading-tight">
                      Proactive Business Advisory Services in Chennai
                    </h2>
                    <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                      At DSS Corp, we understand that launching and scaling an enterprise requires more than basic registration filings. Our **business advisory services in Chennai** offer a proactive partnership model where CA partners work with your board to align growth strategies with absolute regulatory compliance.
                    </p>
                    <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                      From structuring capital structures to designing corporate risk governance policies, our advisors ensure your business remains legally sound and ready for institutional investments.
                    </p>
                  </div>

                  {/* Right Side Copy */}
                  <div className="lg:col-span-6 space-y-6">
                    <span className="text-xs font-semibold text-chartreuse uppercase tracking-wider font-heading block">
                      Scale Operations Compliantly
                    </span>
                    <h2 className="font-heading font-semibold text-3xl text-navy leading-tight">
                      Expert Startup Consulting in India
                    </h2>
                    <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                      Navigating the Indian regulatory ecosystem is complex for global founders. Our **startup consulting in India** streamlines FDI clearances, FEMA filings, tax residency setups, and capitalization (cap) table vesting schedules.
                    </p>
                    <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                      We act as your local corporate advisors in Chennai, bridging the gap between innovative strategy and statutory governance frameworks.
                    </p>
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
                    Important strategic answers regarding corporate advisory and startup consulting services.
                  </p>
                </div>

                <FAQAccordion faqs={advisoryFaqs} />
              </div>
            </section>
          </>
        )}

        {/* Cross Category Suggestions */}
        <section className="py-12 border-y border-border-hairline bg-off-white/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-heading font-medium text-navy text-base">
              {pData.crossSuggestion.text}
            </p>
            <Link
              href={pData.crossSuggestion.href}
              className="inline-flex items-center gap-1.5 bg-card-white hover:bg-off-white border border-border-hairline text-navy px-6 py-2.5 rounded font-body font-semibold text-xs transition-all shadow-2xs"
            >
              View Related Practice Category <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* final scoping trigger */}
        <CTABand />
      </main>

      <Footer />
    </>
  );
}
