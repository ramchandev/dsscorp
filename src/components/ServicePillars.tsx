import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  FileCheck,
  Percent,
  ShieldCheck,
  Coins,
  Globe,
  ArrowRight,
  Briefcase
} from "lucide-react";

export default function ServicePillars() {
  const services = [
    {
      icon: <Briefcase className="w-6 h-6 text-cyan" />,
      name: "Advisory & Consulting",
      desc: "Strategic business setups, corporate compliance, and structural planning.",
      href: "/services/advisory-consulting",
      sublinks: [
        { label: "Startup Advisory & Mentorship", href: "/services/advisory-consulting/startup-advisory-mentorship" },
        { label: "Business Structuring", href: "/services/advisory-consulting/business-structuring-restructuring" },
      ],
    },
    {
      icon: <FileCheck className="w-6 h-6 text-steel" />,
      name: "Accounting & Compliance",
      desc: "End-to-end bookkeeping support, statutory reporting, and company secretarial desk.",
      href: "/services/accounting-compliance",
      sublinks: [
        { label: "Bookkeeping & Accounting", href: "/services/accounting-compliance/bookkeeping-accounting" },
        { label: "Financial Reporting", href: "/services/accounting-compliance/financial-reporting-statements" },
      ],
    },
    {
      icon: <Percent className="w-6 h-6 text-chartreuse" />,
      name: "Taxation",
      desc: "Corporate tax declarations, indirect GST filings, and litigation representation.",
      href: "/services/taxation",
      sublinks: [
        { label: "GST & Indirect Tax Advisory", href: "/services/taxation/gst-indirect-tax" },
        { label: "Corporate Tax Planning", href: "/services/taxation/corporate-tax-advisory" },
      ],
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-navy" />,
      name: "Audit & Assurance",
      desc: "Statutory audits, tax & GST audits, internal systems assessment.",
      href: "/services/audit-assurance",
      sublinks: [
        { label: "Statutory Company Audits", href: "/services/audit-assurance/statutory-audits" },
        { label: "Tax & GST Audit Review", href: "/services/audit-assurance/tax-gst-audits" },
      ],
    },
    {
      icon: <Coins className="w-6 h-6 text-cyan" />,
      name: "Corporate Finance",
      desc: "Business valuation reports, capital structuring, working capital syndication.",
      href: "/services/corporate-finance",
      sublinks: [
        { label: "Venture Valuation Reports", href: "/services/corporate-finance/business-valuation" },
        { label: "Fundraising Advisory", href: "/services/corporate-finance/fundraising-capital-structuring" },
      ],
    },
    {
      icon: <Globe className="w-6 h-6 text-chartreuse" />,
      name: "Global & Private Wealth",
      desc: "FEMA compliance clearance, offshore trust structuring, NRI tax planning.",
      href: "/services/global-private-wealth",
      sublinks: [
        { label: "NRI Tax & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" },
        { label: "Subsidiary Setup Desk", href: "/services/global-private-wealth/setting-up-indian-subsidiaries" },
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-off-white border-b border-border-hairline scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block mb-2">
            Practice Portfolio
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-navy">
            Expert Advisory Desks
          </h2>
          <p className="font-body text-text-secondary mt-3">
            Our Chartered Accountants manage compliance structures across six dedicated practice desks, aligned with the dynamic demands of founders and private families.
          </p>
        </div>

        {/* 3x2 Grid for 6 Desks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-card-white border border-border-hairline hover:border-cyan/50 p-8 rounded-lg flex flex-col justify-between transition-all hover:shadow-xs group"
            >
              <div>
                <div className="p-3 bg-off-white rounded-lg inline-block shadow-3xs mb-6 group-hover:bg-cyan/10 group-hover:text-cyan transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-navy mb-3 group-hover:text-cyan transition-colors">
                  <Link href={service.href}>
                    {service.name}
                  </Link>
                </h3>
                
                <p className="font-body text-xs sm:text-sm leading-relaxed text-text-secondary mb-6">
                  {service.desc}
                </p>
              </div>
              
              <div className="mt-auto border-t border-border-hairline/60 pt-5">
                <div className="flex flex-col gap-2.5 mb-6">
                  {service.sublinks.map((link, subIdx) => (
                    <Link
                      key={subIdx}
                      href={link.href}
                      className="text-xs font-body text-navy hover:text-cyan transition-colors font-medium flex items-center gap-1 group/item"
                    >
                      <span className="text-text-muted group-hover/item:text-cyan transition-colors">•</span>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-navy group-hover:text-cyan transition-colors"
                >
                  View Desk Services <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
