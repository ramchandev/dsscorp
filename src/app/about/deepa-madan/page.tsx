import React from "react";
import {
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Languages,
  FileText,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Mrs. Deepa Madan - Managing Partner | DSS Corp Advisory",
  description:
    "Read the professional bio, bank audit experience, and education credentials of Mrs. Deepa Madan, M.Com., CA (Final).",
  path: "/about/deepa-madan",
});

const experienceList = [
  "Presently working as Manager and Co-ordinator – Audits at M/s K Gopal Rao & Co., Chartered Accountants, Chennai (since 2011)",
  "More than 15 years of bank audit experience",
  "Three years Articleship Training with M/s K Gopal Rao & Co., Chartered Accountants, T. Nagar, Chennai",
  "Coordination of statutory and bank audit assignments",
  "Support on tax audit, company audit, and regulatory compliance desks",
];

const timelineList = [
  {
    date: "February 2010",
    title: "Master of Commerce (M.Com)",
    institution: "Madras University",
  },
  {
    date: "December 2008",
    title: "Accounting Technician Certificate",
    institution: "Institute of Chartered Accountants of India (ICAI)",
  },
  {
    date: "February 2004",
    title: "Compulsory Computer Training Course",
    institution: "Institute of Chartered Accountants of India (ICAI)",
  },
  {
    date: "November 2003",
    title: "Professional Education – II (CA Intermediate)",
    institution: "Institute of Chartered Accountants of India (ICAI)",
  },
  {
    date: "April / May 2001",
    title: "Bachelor of Commerce (B.Com) — 84.86% (8th Rank)",
    institution: "Kuvempu University",
  },
  {
    date: "November 1999",
    title: "C.A. Foundation",
    institution: "Institute of Chartered Accountants of India (ICAI)",
  },
];

export default function DeepaMadanBioPage() {
  const crumbs = [
    { label: "About", href: "/about" },
    { label: "Mrs. Deepa Madan" },
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
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-chartreuse/40 bg-navy-secondary shadow-2xl">
                  <img
                    src="/deepa-madan.png"
                    alt="Mrs. Deepa Madan portrait"
                    className="object-cover w-full h-full object-[center_20%]"
                  />
                </div>
              </div>

              <div className="md:col-span-8 space-y-6">
                <span className="text-xs font-semibold text-chartreuse uppercase tracking-wider font-heading block">
                  Managing Partner
                </span>
                <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-card-white tracking-tight leading-none">
                  Mrs. Deepa Madan
                </h1>
                <p className="font-heading text-lg sm:text-xl text-cyan font-medium">
                  M.Com., CA (Final)
                </p>
                <p className="font-body text-base text-text-muted leading-relaxed border-l-2 border-chartreuse/40 pl-4 py-1">
                  Deepa brings more than 15 years of bank audit experience and leads audit
                  coordination at M/s K Gopal Rao &amp; Co., Chartered Accountants, Chennai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Layout */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-card-white border border-border-hairline p-8 rounded-lg shadow-2xs">
                  <h2 className="font-heading font-semibold text-xl sm:text-2xl text-navy mb-6 flex items-center gap-2 pb-3 border-b border-border-hairline/60">
                    <Briefcase className="w-5 h-5 text-cyan" /> Work Experience
                  </h2>
                  <div className="space-y-4">
                    {experienceList.map((exp) => (
                      <div key={exp} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-chartreuse flex-shrink-0 mt-0.5" />
                        <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {exp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card-white border border-border-hairline p-8 rounded-lg shadow-2xs">
                  <h2 className="font-heading font-semibold text-xl text-navy mb-6 flex items-center gap-2 pb-3 border-b border-border-hairline/60">
                    <Languages className="w-5 h-5 text-cyan" /> Languages Known
                  </h2>
                  <ul className="flex flex-wrap gap-2 list-none">
                    {["English", "Hindi", "Kannada", "Marathi", "Tamil"].map((lang) => (
                      <li
                        key={lang}
                        className="px-3 py-1.5 rounded border border-border-hairline bg-off-white text-xs font-body font-medium text-navy"
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card-white border border-border-hairline p-8 rounded-lg shadow-2xs">
                  <h2 className="font-heading font-semibold text-xl text-navy mb-4 flex items-center gap-2 pb-3 border-b border-border-hairline/60">
                    <FileText className="w-5 h-5 text-cyan" /> Articleship Registration
                  </h2>
                  <p className="font-body text-sm text-text-secondary">
                    Registration No:{" "}
                    <span className="font-heading font-semibold text-navy">MMP 108640</span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="bg-card-white border border-border-hairline p-8 rounded-lg shadow-2xs">
                  <h2 className="font-heading font-semibold text-xl text-navy mb-6 flex items-center gap-2 pb-3 border-b border-border-hairline/60">
                    <GraduationCap className="w-5 h-5 text-cyan" /> Education &amp; Credentials
                  </h2>

                  <div className="relative pl-6 border-l border-border-hairline/80 space-y-8">
                    {timelineList.map((item) => (
                      <div key={`${item.date}-${item.title}`} className="relative">
                        <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-chartreuse border border-card-white outline outline-2 outline-chartreuse/20" />

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

        <CTABand />
      </main>

      <Footer />
    </>
  );
}
