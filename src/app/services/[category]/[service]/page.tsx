import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import ServiceHeroIllustration from "@/components/ServiceHeroIllustration";
import { servicesDb } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.values(servicesDb).map((s) => ({
    category: s.category,
    service: s.slug,
  }));
}

interface PageProps {
  params: Promise<{
    category: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { service: serviceSlug } = await params;
  const service = servicesDb[serviceSlug];
  if (!service) {
    return createPageMetadata({
      title: "Advisory Service | DSS Corp Advisory",
      description: "Chartered Accountancy and advisory services in Chennai, India.",
      path: "/services",
    });
  }

  return createPageMetadata({
    title: `${service.serviceName} | DSS Corp Advisory`,
    description: service.directAnswer.slice(0, 155) + "...",
    path: `/services/${service.category}/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { category, service: serviceSlug } = await params;
  const service = servicesDb[serviceSlug];

  if (!service || service.category !== category) {
    notFound();
  }

  // Inject Service schema block for GEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.serviceName,
    "description": service.directAnswer,
    "provider": {
      "@type": "AccountingService",
      "name": "DSS Corp Advisory",
      "url": "https://dsscorp.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "IN"
    }
  };

  // Persona CTA offerings
  const personaCtas = {
    startup: {
      primary: "Book a 20-Min Founder Call",
    },
    msme: {
      primary: "Book a Compliance Audit",
    },
    hni: {
      primary: "Confidential Wealth Review",
    },
    nri: {
      primary: "Book an NRI Consultation",
    },
  };

  const currentCta = personaCtas[service.primaryPersona] || personaCtas.msme;

  const crumbs = [
    { label: "Services", href: "/services" },
    { label: service.categoryName, href: `/services/${service.category}` },
    { label: service.serviceName },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navigation />

      <main className="flex-1 bg-off-white pt-24 animate-fade-in">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Section (Answer-First layout) */}
        <section className={`border-b border-navy-secondary ${service.tier === 1 ? "py-16 md:py-24" : "py-10 md:py-16"} bg-navy text-card-white relative overflow-hidden`}>
          <div className="absolute top-1/2 -right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side Content */}
              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                  {service.categoryName}
                </span>
                
                <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-card-white leading-tight tracking-tight">
                  {service.heroHeadline}
                </h1>
                
                {/* GEO Critical Direct Answer Paragraph */}
                <p className="font-body text-[16px] sm:text-[17px] leading-relaxed text-text-muted border-l-2 border-cyan/40 pl-4 py-1">
                  {service.directAnswer}
                </p>

                {/* Primary CTA Only */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href={`/contact?autofocus=true&subject=${encodeURIComponent(service.serviceName)}`}
                    className="bg-chartreuse hover:bg-chartreuse/90 text-navy px-6 py-3 rounded font-body font-bold text-xs sm:text-sm text-center transition-all shadow-md hover:shadow-[0_0_20px_rgba(140,198,63,0.5)] hover:scale-[1.01]"
                  >
                    {currentCta.primary}
                  </Link>
                </div>
              </div>

              {/* Right Side Column (Illustration + Optional Stats Case study) */}
              <div className="lg:col-span-4 space-y-6 w-full">
                {/* Visual Category Illustration */}
                <ServiceHeroIllustration category={service.category} slug={service.slug} />

                {/* Proven Case Outcomes (if Tier 1) */}
                {service.tier === 1 && service.relatedCaseStudy && (
                  <div className="bg-navy-secondary/30 text-card-white p-6 rounded-lg border border-navy-secondary/50 shadow-xs flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-text-muted block">
                        Proven Case Outcomes
                      </span>
                      <h3 className="font-heading font-semibold text-sm sm:text-base text-card-white">
                        {service.relatedCaseStudy.title}
                      </h3>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-2xl sm:text-3xl font-heading font-bold text-chartreuse block">
                        {service.relatedCaseStudy.metric}
                      </span>
                      <p className="font-body text-xs leading-relaxed text-text-muted">
                        {service.relatedCaseStudy.description}
                      </p>
                    </div>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-1 text-xs font-body font-semibold text-cyan hover:text-card-white transition-colors"
                    >
                      View Anonymized Scenarios <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Scope of Work Grid */}
        <section className="py-20 bg-off-white/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Panel: Target Scopes */}
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <h2 className="font-heading font-semibold text-2xl text-navy">
                    What&apos;s Included in {service.serviceName}
                  </h2>
                  <p className="font-body text-sm text-text-secondary">
                    Our compliance structure handles the entire regulatory scope end-to-end. We manage the details so you can focus on building value.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {service.scopeOfWork.map((scope, idx) => (
                    <div key={idx} className="bg-card-white border border-border-hairline p-6 rounded-lg flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-chartreuse mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-body text-xs sm:text-sm text-navy font-semibold leading-snug">
                          {scope}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel: Who Needs This */}
              <div className="lg:col-span-4 bg-card-white border border-border-hairline p-8 rounded-lg space-y-6">
                <h3 className="font-heading font-semibold text-lg text-navy border-b border-border-hairline pb-3">
                  Who Needs This Service
                </h3>
                <ul className="space-y-4">
                  {service.whoNeedsThis.map((need, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Process Roadmap: Styled Dark Cards */}
        <section className="py-20 bg-navy text-card-white border-t border-b border-navy-secondary relative overflow-hidden">
          <div className="absolute top-1/2 -right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block mb-2">
                Operational Milestones
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-card-white">
                Our Advisory Process
              </h2>
              <p className="font-body text-sm text-text-muted mt-3">
                We follow a rigorous, milestone-driven workflow that guarantees clean regulatory records and timely execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, idx) => (
                <div key={idx} className="bg-navy-secondary/20 border border-navy-secondary p-6 rounded-lg relative space-y-4 hover:border-cyan/40 transition-colors flex flex-col justify-between min-h-[220px]">
                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="font-heading font-bold text-4xl text-cyan/30">
                        0{idx + 1}
                      </span>
                      {step.timeframe && (
                        <span className="text-[9px] font-heading font-bold px-2 py-0.5 rounded border bg-navy-secondary text-cyan border-cyan/35">
                          {step.timeframe}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-base text-card-white">
                      {step.step}
                    </h3>
                    <p className="font-body text-xs text-text-muted leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Differentiators (Tier 1 money pages only) */}
        {service.tier === 1 && service.differentiators && (
          <section className="py-20 bg-off-white/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <h2 className="font-heading font-semibold text-2xl text-navy">
                  Why DSS Corp for {service.serviceName}
                </h2>
                <p className="font-body text-sm text-text-secondary mt-2">
                  What makes our practice desk uniquely qualified to handle your advisory needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.differentiators.map((diff, idx) => (
                  <div key={idx} className="bg-card-white border border-border-hairline p-8 rounded-lg space-y-4">
                    <span className="font-heading font-bold text-cyan text-lg">
                      0{idx + 1}.
                    </span>
                    <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {diff}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Accordion Block */}
        <section className="py-20 bg-card-white border-t border-border-hairline">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 text-center mx-auto">
              <h2 className="font-heading font-semibold text-2xl text-navy">
                Frequently Asked Questions
              </h2>
              <p className="font-body text-sm text-text-secondary mt-2">
                Clear answers to critical operational, statutory, and tax scoping queries.
              </p>
            </div>
            <FAQAccordion faqs={service.faqs} />
          </div>
        </section>

        {/* Related Services */}
        {service.relatedServices.length > 0 && (
          <section className="py-20 bg-card-white border-t border-border-hairline">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-semibold text-2xl text-navy mb-8 text-center">
                Related Advisory Desks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.relatedServices.map((rel, idx) => (
                  <Link
                    key={idx}
                    href={rel.href}
                    className="bg-off-white/50 border border-border-hairline p-6 rounded-lg hover:border-cyan/50 hover:bg-card-white hover:shadow-xs transition-all flex items-center justify-between group"
                  >
                    <span className="font-body text-xs sm:text-sm text-navy font-semibold group-hover:text-cyan transition-colors">
                      {rel.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-text-muted group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* final scoping trigger */}
        <CTABand />

      </main>

      <Footer />
    </>
  );
}
