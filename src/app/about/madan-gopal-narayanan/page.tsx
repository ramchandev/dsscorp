import React from "react";
import { ShieldCheck, Award, GraduationCap, Calendar, CheckCircle2, FileText, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "CA Madan Gopal Narayanan - Senior Partner | DSS Corp Advisory",
  description: "Read the professional bio, banking audit expertise, and credentials timeline of CA Madan Gopal Narayanan.",
};

const experienceList = [
  "Central Statutory Audit of Public Sector Banks & Private Sector Banks",
  "Bank Head Office Treasury & Foreign Exchange Management Audit",
  "Statutory Audit of Cooperative Banks",
  "Information Systems & Investment Audit of Banks, Insurance Companies, and NBFCs",
  "Handling assignments of Agency for Specialised Monitoring (ASM) of Pool Accounts & NBFCs on behalf of Banks",
  "Audit of Professional Educational Institutions",
  "Tax Audit, GST Audit, Company Audit & Regulatory Compliance",
  "Corporate Consulting, Tax Representations, & Virtual CFO Services",
  "Special Audits - Stock Audit, Credit Audit, Revenue Audit, and Due Diligence",
  "DICGC Inspection & CGTMSE Inspection on behalf of regulators",
  "Statutory Audit of NBFCs & Public Sector Undertakings (PSUs)",
  "Internal Audit of Insurance Companies, NBFCs, PSUs, and Government Schemes",
];

const timelineList = [
  {
    date: "December 2022",
    title: "Certificate Course On Forex & Treasury Management",
    institution: "Institute of Chartered Accountants of India (ICAI), Chennai",
  },
  {
    date: "June 2021",
    title: "Qualified Online Proficiency Test (QPT) for Independent Director's Databank",
    institution: "Indian Institute of Corporate Affairs, Gurgaon (Haryana)",
  },
  {
    date: "September 2019",
    title: "Certificate Course on Goods & Service Tax (GST)",
    institution: "Institute of Cost & Management Accountants of India, Chennai",
  },
  {
    date: "June 2019",
    title: "Certificate Course on Goods & Service Tax (GST)",
    institution: "Institute of Chartered Accountants of India (ICAI), Chennai",
  },
  {
    date: "February 2018",
    title: "Certified Information Systems Auditor (CISA)",
    institution: "ISACA, USA",
  },
  {
    date: "September 2016",
    title: "Certificate Course on Concurrent Audit of Banks",
    institution: "Institute of Chartered Accountants of India (ICAI), Chennai",
  },
  {
    date: "May 2016",
    title: "Qualified in Insurance & Risk Management (DIRM)",
    institution: "Institute of Chartered Accountants of India (ICAI), Chennai",
  },
  {
    date: "May 2016",
    title: "Certificate Course on Forensic Accounting & Fraud Detection (FAFD)",
    institution: "Institute of Chartered Accountants of India (ICAI), Chennai",
  },
  {
    date: "March 2014",
    title: "M. Phil Degree",
    institution: "Tamil Nadu Open University, Chennai",
  },
  {
    date: "June 2012",
    title: "Qualified in Information Systems Audit (DISA)",
    institution: "Institute of Chartered Accountants of India (ICAI), Chennai",
  },
  {
    date: "October 2009",
    title: "Master of Financial Management (MFM)",
    institution: "Pondicherry University, Pondicherry",
  },
  {
    date: "June 2009",
    title: "Company Secretary (ACS) | Law & Legal Management",
    institution: "Institute of Company Secretaries of India (ICSI), Chennai",
  },
  {
    date: "October 2006",
    title: "Master of Commerce (M.Com)",
    institution: "University of Madras, Chennai",
  },
  {
    date: "May 2002",
    title: "Chartered Accountant (ACA/FCA) | Finance, Audit & Assurance",
    institution: "Institute of Chartered Accountants of India (ICAI), Chennai",
  },
];

export default function PartnerBioPage() {
  const crumbs = [
    { label: "About", href: "/about" },
    { label: "CA Madan Gopal Narayanan" },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        {/* Profile Hero Header */}
        <section className="py-20 bg-navy text-card-white relative overflow-hidden border-b border-navy-secondary">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full bg-cyan/10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 rounded-full bg-chartreuse/5 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              {/* Partner Portrait Photo */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan/40 bg-navy-secondary shadow-2xl">
                  <img
                    src="/madan-gopal-narayanan.png"
                    alt="CA Madan Gopal Narayanan portrait"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Title & Short Details */}
              <div className="md:col-span-8 space-y-6">
                <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                  Senior Partner & Lead Advisor
                </span>
                <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-card-white tracking-tight leading-none">
                  CA Madan Gopal Narayanan
                </h1>
                <p className="font-heading text-lg sm:text-xl text-chartreuse font-medium">
                  FCA, CISA (USA), DISA (ICAI), ACS, M.Phil, MFM
                </p>
                <p className="font-body text-base text-text-muted leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                  Madan Gopal has over two decades of highly specialized expertise in banking sector statutory audits, corporate taxation structures, legal representations, and information systems security governance.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Layout */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Core Experience / Skills */}
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-card-white border border-border-hairline p-8 rounded-lg shadow-2xs">
                  <h2 className="font-heading font-semibold text-xl sm:text-2xl text-navy mb-6 flex items-center gap-2 pb-3 border-b border-border-hairline/60">
                    <Briefcase className="w-5 h-5 text-cyan" /> Core Expertise & Practice Focus
                  </h2>
                  <div className="space-y-4">
                    {experienceList.map((exp, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-chartreuse flex-shrink-0 mt-0.5" />
                        <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {exp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Qualifications Timeline */}
              <div className="lg:col-span-5 space-y-8">
                <div className="bg-card-white border border-border-hairline p-8 rounded-lg shadow-2xs">
                  <h2 className="font-heading font-semibold text-xl text-navy mb-6 flex items-center gap-2 pb-3 border-b border-border-hairline/60">
                    <GraduationCap className="w-5 h-5 text-cyan" /> Credentials & Qualifications
                  </h2>
                  
                  {/* Timeline Tree */}
                  <div className="relative pl-6 border-l border-border-hairline/80 space-y-8">
                    {timelineList.map((item, idx) => (
                      <div key={idx} className="relative">
                        {/* Timeline node */}
                        <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-cyan border border-card-white outline outline-2 outline-cyan/20" />
                        
                        <div className="space-y-1">
                          <span className="inline-block text-[10px] font-heading font-bold text-cyan bg-cyan/5 px-2 py-0.5 rounded-full border border-cyan/10">
                            {item.date}
                          </span>
                          <h3 className="font-heading font-semibold text-xs sm:text-sm text-navy leading-tight pt-1">
                            {item.title}
                          </h3>
                          <p className="font-body text-[11px] text-text-muted">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Reusable contact CTA */}
        <CTABand />

      </main>

      <Footer />
    </>
  );
}
