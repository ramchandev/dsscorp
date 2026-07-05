import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrendingUp, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PersonaBadge from "@/components/PersonaBadge";
import CTABand from "@/components/CTABand";
import { caseStudiesDb } from "@/lib/case-studies";
import { createPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(caseStudiesDb).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cs = caseStudiesDb[slug];
  if (!cs) {
    return createPageMetadata({
      title: "Case Study | DSS Corp Advisory",
      description: "Client outcomes and case studies from DSS Corp Advisory.",
      path: "/case-studies",
    });
  }

  return createPageMetadata({
    title: `${cs.title} | DSS Corp Outcomes`,
    description: cs.description,
    path: `/case-studies/${cs.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = caseStudiesDb[slug];

  if (!cs) {
    notFound();
  }

  const crumbs = [
    { label: "Case Studies", href: "/case-studies" },
    { label: cs.title },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Section */}
        <section className="py-16 border-b border-border-hairline bg-card-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Content */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading">
                    {cs.category}
                  </span>
                  <PersonaBadge persona={cs.persona} />
                </div>
                
                <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight leading-tight">
                  {cs.title}
                </h1>
                
                <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                  {cs.description}
                </p>
              </div>

              {/* Right Metric Card */}
              <div className="lg:col-span-4 bg-navy text-card-white p-8 rounded-lg border-t-4 border-t-chartreuse shadow-xs text-center space-y-4 h-fit mt-4 lg:mt-0">
                <TrendingUp className="w-8 h-8 text-chartreuse mx-auto" />
                <div>
                  <span className="text-3xl sm:text-4xl font-heading font-bold text-chartreuse block">
                    {cs.metric}
                  </span>
                  <span className="text-[10px] text-text-muted font-body uppercase tracking-wider block mt-1">
                    {cs.metricLabel}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Situation, Approach, Result Breakdown Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column (SAR Breakdown) */}
              <div className="lg:col-span-8 bg-card-white border border-border-hairline rounded-lg p-6 sm:p-10 md:p-12 space-y-12">
                
                {/* Situation */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-cyan px-2.5 py-1 bg-cyan/10 rounded">
                      Situation / Challenge
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {cs.situation}
                  </p>
                </div>

                {/* Approach */}
                <div className="space-y-4 pt-6 border-t border-border-hairline/60">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-steel px-2.5 py-1 bg-steel/10 rounded">
                      DSS Advisory Approach
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {cs.approach}
                  </p>
                  
                  {/* Scope Checklist Items */}
                  <ul className="space-y-3 pt-2">
                    {cs.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2 items-start font-body text-xs sm:text-sm text-navy font-medium">
                        <CheckCircle2 className="w-4.5 h-4.5 text-chartreuse mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="space-y-4 pt-6 border-t border-border-hairline/60">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-chartreuse px-2.5 py-1 bg-chartreuse/10 rounded">
                      Factual Result & Metrics
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {cs.result}
                  </p>
                </div>

              </div>

              {/* Right Column (Sidebars) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Related Service Box */}
                <div className="bg-navy text-card-white border border-navy-secondary rounded-lg p-8 space-y-6 border-t-4 border-t-chartreuse shadow-xs">
                  <h3 className="font-heading font-semibold text-lg">
                    Replicate this outcome
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-text-muted">
                    Learn more about our methodology and options. Discuss your compliance metrics with a specialist.
                  </p>
                  <div className="pt-2">
                    <Link
                      href={cs.relatedService.href}
                      className="inline-flex items-center gap-1.5 bg-chartreuse hover:bg-chartreuse/90 text-navy font-body font-bold text-xs px-6 py-3 rounded transition-all shadow-md w-full justify-center"
                    >
                      Explore {cs.relatedService.name} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* E-E-A-T Verified Panel */}
                <div className="bg-card-white border border-border-hairline rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-2 text-navy">
                    <ShieldCheck className="w-5 h-5 text-cyan" />
                    <span className="font-heading font-semibold text-xs uppercase tracking-wide">
                      Anonymized For Privacy
                    </span>
                  </div>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    To comply with ICAI guidelines and preserve client corporate confidentiality, names are omitted. Factual details, metrics, and outcomes are fully verified.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
