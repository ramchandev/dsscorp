"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface HeroProps {
  onSelectPersona: (persona: string) => void;
}

export default function Hero({ onSelectPersona }: HeroProps) {
  const personas = [
    { id: "startup", label: "Startup Founder" },
    { id: "business", label: "MSME Owner" },
    { id: "nri", label: "NRI Investor" },
    { id: "legacy", label: "HNI / Legacy Planner" },
  ];

  const handlePersonaSelect = (id: string) => {
    onSelectPersona(id);
    const element = document.getElementById(`ladder-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 lg:pb-40 bg-navy text-card-white">
      {/* Decorative Grid Overlay representing a premium, structured aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Glowing Soft Backdrop Accent Facets */}
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full bg-cyan/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 rounded-full bg-chartreuse/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cyan/10 border border-cyan/30 text-cyan font-heading font-semibold text-xs tracking-wider uppercase mb-6"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Chartered Accountants · Chennai
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-card-white leading-[1.15] tracking-tight max-w-2xl"
            >
              Financial clarity for founders who can&apos;t afford mistakes.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-xl space-y-4"
            >
              <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-text-muted">
                We help with tax, compliance, and business advice.
              </p>
              <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-text-muted">
                You focus on growth. We handle the rules.
              </p>
              <ul className="font-body text-[15px] leading-relaxed text-text-muted space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-chartreuse mt-0.5 flex-shrink-0" />
                  <span>Tax planning and GST filings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-chartreuse mt-0.5 flex-shrink-0" />
                  <span>Company setup and compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-chartreuse mt-0.5 flex-shrink-0" />
                  <span>NRI, FEMA, and wealth planning</span>
                </li>
              </ul>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
            >
              <a
                href="/contact?autofocus=true"
                className="bg-chartreuse hover:bg-chartreuse/90 text-navy px-8 py-4 rounded font-body font-bold text-[14px] sm:text-[15px] transition-all hover:shadow-[0_0_20px_rgba(140,198,63,0.65)] hover:scale-[1.01] text-center shadow-md"
              >
                Book a Free Consultation
              </a>
              <a
                href="#services"
                className="border border-navy-secondary hover:border-cyan/40 bg-navy-secondary/40 hover:bg-navy-secondary/70 text-card-white px-8 py-4 rounded font-body font-semibold text-[14px] sm:text-[15px] transition-all text-center inline-flex items-center justify-center gap-1.5"
              >
                Explore services <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Persona Quick-Select Strip (CRO Entry point) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
              className="mt-12 w-full pt-8 border-t border-navy-secondary"
            >
              <span className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                I am a:
              </span>
              <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2.5 max-w-lg md:max-w-none">
                {personas.map((persona) => (
                  <button
                    key={persona.id}
                    onClick={() => handlePersonaSelect(persona.id)}
                    className="font-body font-medium text-xs text-card-white hover:text-navy border border-navy-secondary hover:border-chartreuse bg-navy-secondary/30 hover:bg-chartreuse px-4 py-2.5 rounded-full transition-all text-center cursor-pointer shadow-3xs"
                  >
                    {persona.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-navy-secondary"
            >
              <Image
                src="/hero_businessman.jpg"
                alt="DSS Corp Chennai Partner giving a thumbs up"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Elite Credentials Microcopy directly below the image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-4 flex items-center gap-2 max-w-md w-full px-2"
            >
              <CheckCircle2 className="w-4 h-4 text-chartreuse flex-shrink-0" />
              <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed font-body">
                <span className="font-semibold text-card-white">Led by senior CAs</span> with 20+ years in tax and business advice.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
