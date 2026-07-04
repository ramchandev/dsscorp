"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PersonaBadge from "@/components/PersonaBadge";

interface GuideConfig {
  slug: string;
  title: string;
  subhead: string;
  persona: "startup" | "msme" | "hni" | "nri";
  previewText: string;
  bullets: string[];
  relatedService: { name: string; href: string };
}

interface GuidePageClientProps {
  guide: GuideConfig;
}

export default function GuidePageClient({ guide }: GuidePageClientProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Name and Email are required fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const crumbs = [
    { label: "Resources", href: "/resources" },
    { label: guide.title },
  ];

  return (
    <>
      <Breadcrumb crumbs={crumbs} />

      {/* Hero Section */}
      <section className="py-16 border-b border-border-hairline bg-card-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
              Guide Download
            </span>
            <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight leading-tight">
              {guide.title}
            </h1>
            <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
              {guide.subhead}
            </p>
            <div className="pt-2">
              <PersonaBadge persona={guide.persona} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Value Preview & What's Inside (Left) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl text-navy">
                Guide Summary & Value Preview
              </h3>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {guide.previewText}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-xl text-navy">
                What is included in this guide?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guide.bullets.map((bullet, idx) => (
                  <div key={idx} className="p-5 bg-card-white border border-border-hairline rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chartreuse mt-0.5 flex-shrink-0" />
                    <div className="font-body text-xs sm:text-sm leading-relaxed text-navy">
                      {bullet}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gated form (Right) */}
          <div className="lg:col-span-5 bg-card-white border border-border-hairline p-8 rounded-lg shadow-2xs h-fit space-y-6">
            <div className="text-center">
              <FileTextIcon />
              <h4 className="font-heading font-semibold text-lg text-navy">Secure Your Free Copy</h4>
              <p className="text-xs text-text-secondary font-body mt-1">
                Provide your business desk details to receive the PDF download link via email.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-chartreuse/10 border border-chartreuse/35 p-6 rounded-lg text-center space-y-4 animate-fade-in font-body">
                <CheckCircle2 className="w-10 h-10 text-navy mx-auto" />
                <h5 className="font-heading font-semibold text-navy text-sm">Verification Link Dispatched</h5>
                <p className="font-body text-xs text-text-secondary leading-relaxed">
                  We have dispatched the PDF guide verification email to <strong>{email}</strong>. Please check your inbox and verify details.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-body font-semibold text-navy hover:text-cyan block mx-auto underline"
                >
                  Download another guide
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-body text-xs">
                <div>
                  <label className="block font-heading font-semibold text-navy uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-off-white border border-border-hairline rounded px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                  />
                </div>

                <div>
                  <label className="block font-heading font-semibold text-navy uppercase mb-1">Business Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-off-white border border-border-hairline rounded px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                  />
                </div>

                <div>
                  <label className="block font-heading font-semibold text-navy uppercase mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+91..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-off-white border border-border-hairline rounded px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy hover:bg-navy-secondary text-card-white font-heading font-semibold text-xs py-3 rounded border-t border-t-chartreuse transition-all flex items-center justify-center gap-2 mt-6"
                >
                  <Download className="w-4 h-4 text-chartreuse" />
                  {isSubmitting ? "Processing Request..." : "Request Free PDF Guide"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 border-t border-border-hairline bg-off-white/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-body text-text-muted block">Related advisory services:</span>
          <h4 className="font-heading font-semibold text-navy text-base">
            Need comprehensive execution support?
          </h4>
          <Link
            href={guide.relatedService.href}
            className="inline-flex items-center gap-1.5 bg-navy text-card-white hover:bg-navy-secondary px-6 py-2.5 rounded font-body font-semibold text-xs border-t border-t-chartreuse transition-all"
          >
            Explore {guide.relatedService.name} <ArrowRight className="w-3.5 h-3.5 text-chartreuse" />
          </Link>
        </div>
      </section>
    </>
  );
}

function FileTextIcon() {
  return (
    <svg className="w-10 h-10 text-cyan mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
