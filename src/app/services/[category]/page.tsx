import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";
import PersonaBadge from "@/components/PersonaBadge";
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

  return createPageMetadata({
    title: `${data.name} | DSS Corp Advisory Services`,
    description: data.directAnswer,
    path: `/services/${data.slug}`,
  });
}

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

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 animate-fade-in">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Area */}
        <section className="py-20 border-b border-navy-secondary bg-navy text-card-white relative overflow-hidden">
          <div className="absolute top-1/2 -right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl space-y-5">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Practice Category
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-card-white tracking-tight leading-tight">
                {pData.name}
              </h1>
              <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                {pData.directAnswer}
              </p>
              <div className="pt-2">
                <PersonaBadge persona={pData.primaryPersona} dark />
              </div>
            </div>
          </div>
        </section>

        {/* Services Directory Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="font-heading font-semibold text-2xl text-navy">
                Explore Services under {pData.name}
              </h2>
              <p className="font-body text-sm text-text-secondary mt-2">
                We organize our practice into high-intent flagship services (Tier 1 Money Pages) and regular compliance maintenance services (Tier 2).
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
