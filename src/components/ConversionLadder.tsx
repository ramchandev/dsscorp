"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Rocket,
  Building2,
  ShieldCheck,
  Globe2,
  ChevronDown
} from "lucide-react";

interface ConversionLadderProps {
  activePersona: string | null;
  onSelectPersona: (persona: string) => void;
}

export default function ConversionLadder({
  activePersona,
  onSelectPersona,
}: ConversionLadderProps) {
  // Mobile accordion state
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  
  // Track previous prop to adjust state during render
  const [prevActivePersona, setPrevActivePersona] = useState<string | null>(activePersona);
  if (activePersona !== prevActivePersona) {
    setPrevActivePersona(activePersona);
    setExpandedMobile(activePersona);
  }

  const personas = [
    {
      id: "startup",
      label: "Startup Founder",
      icon: <Rocket className="w-5 h-5 text-cyan" />,
      situation: "You need clean setup, tax IDs, and room to raise capital.",
      tasks: {
        title: "What you must do",
        items: [
          "File Form INC-20A after you start business",
          "Get PAN and TAN",
          "Appoint an auditor within 30 days",
          "Draft share agreements for DPIIT",
        ],
      },
      partner: {
        title: "How DSS helps",
        items: [
          "File startup declarations on time",
          "Register tax accounts fast",
          "Keep MCA filings in order",
          "Guide share and structure choices",
        ],
      },
      hot: {
        title: "Book a 20-min founder call",
        desc: "A short call to map your next steps.",
        label: "Schedule Consultation",
      },
    },
    {
      id: "business",
      label: "MSME Owner",
      icon: <Building2 className="w-5 h-5 text-chartreuse" />,
      situation: "You want better cash flow, clean tax setup, and filings on time.",
      tasks: {
        title: "What you must do",
        items: [
          "Match purchases with GSTR-2B",
          "File GSTR-3B each month",
          "Clear pending tax notices",
          "Track working capital and GST credit",
        ],
      },
      partner: {
        title: "How DSS helps",
        items: [
          "Reconcile input tax credit",
          "Handle monthly GST filings",
          "Respond to tax notices",
          "Find ways to free up cash",
        ],
      },
      hot: {
        title: "Book a compliance review",
        desc: "A full check of your filings and cost leaks.",
        label: "Book Audit Review",
      },
    },
    {
      id: "legacy",
      label: "HNI & Family Office",
      icon: <ShieldCheck className="w-5 h-5 text-cyan" />,
      situation: "You want to protect family wealth and plan who inherits what.",
      tasks: {
        title: "What you must do",
        items: [
          "Set up private trusts where needed",
          "Draft a clear Will",
          "Review estate and tax exposure",
          "Register family company holdings",
        ],
      },
      partner: {
        title: "How DSS helps",
        items: [
          "Draft trust deeds",
          "Plan asset transfers across generations",
          "Support probate and clearances",
          "Protect succession with legal structure",
        ],
      },
      hot: {
        title: "Private wealth review",
        desc: "A one-on-one session with our estate partner.",
        label: "Request Review",
      },
    },
    {
      id: "nri",
      label: "NRI Client",
      icon: <Globe2 className="w-5 h-5 text-chartreuse" />,
      situation: "You need clear FEMA rules for property, tax, and sending money abroad.",
      tasks: {
        title: "What you must do",
        items: [
          "Get Form 15CA / 15CB certificates",
          "Stay within the USD 1M yearly limit",
          "Follow property sale remittance rules",
          "Keep FEMA paperwork bank-ready",
        ],
      },
      partner: {
        title: "How DSS helps",
        items: [
          "Issue Form 15CA / 15CB clearances",
          "Review property sale tax",
          "Guide FEMA filings with AD banks",
          "Plan safe remittance steps",
        ],
      },
      hot: {
        title: "Book an NRI consultation",
        desc: "Talk with our cross-border tax desk.",
        label: "Book NRI Call",
      },
    },
  ];

  return (
    <section id="consultation" className="py-24 bg-navy text-card-white border-b border-navy-secondary scroll-mt-20 relative overflow-hidden">
      {/* Background soft lighting facet */}
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block mb-2">
            Find Your Path
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-card-white leading-tight">
            Pick your profile
          </h2>
          <p className="font-body text-xs sm:text-sm text-text-muted mt-3 leading-relaxed">
            See what you need to do next.
          </p>
          <p className="font-body text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
            Then see how DSS can help.
          </p>
        </div>

        {/* Desktop View: Interactive Conversion Ladder Grid */}
        <div className="hidden lg:flex flex-col gap-6">
          {personas.map((persona) => {
            const isHighlighted = activePersona === persona.id;
            return (
              <div
                key={persona.id}
                id={`ladder-${persona.id}`}
                onClick={() => onSelectPersona(persona.id)}
                className={`border rounded-lg p-8 grid grid-cols-12 gap-8 items-center transition-all duration-300 scroll-mt-28 cursor-pointer ${
                  isHighlighted
                    ? "border-cyan bg-navy-secondary/40 shadow-lg ring-1 ring-cyan/40 scale-[1.01] backdrop-blur-sm"
                    : "border-navy-secondary bg-navy-secondary/15 hover:border-cyan/40 hover:bg-navy-secondary/30"
                }`}
              >
                {/* Identity Block */}
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${isHighlighted ? "bg-cyan/15" : "bg-navy-secondary/50"}`}>
                      {persona.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-card-white text-base">
                      {persona.label}
                    </h3>
                  </div>
                  <p className="font-body text-xs leading-relaxed text-text-muted mt-3">
                    {persona.situation}
                  </p>
                </div>

                {/* Tasks Column */}
                <div className="col-span-3 border-l border-navy-secondary pl-6 flex flex-col justify-between h-full min-h-[140px]">
                  <div>
                    <span className="text-[10px] font-semibold text-text-muted tracking-wider uppercase block mb-1">
                      Your checklist
                    </span>
                    <h4 className="font-heading font-semibold text-card-white text-sm leading-snug">
                      {persona.tasks.title}
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 list-none">
                      {persona.tasks.items.map((item) => (
                        <li key={item} className="text-xs text-text-muted leading-relaxed font-body flex gap-1.5">
                          <span className="text-cyan flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* DSS Partner Solution Column */}
                <div className="col-span-3 border-l border-navy-secondary pl-6 flex flex-col justify-between h-full min-h-[140px]">
                  <div>
                    <span className="text-[10px] font-semibold text-cyan tracking-wider uppercase block mb-1">
                      DSS Solution
                    </span>
                    <h4 className="font-heading font-semibold text-card-white text-sm leading-snug">
                      {persona.partner.title}
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 list-none">
                      {persona.partner.items.map((item) => (
                        <li key={item} className="text-xs text-text-muted leading-relaxed font-body flex gap-1.5">
                          <span className="text-chartreuse flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hot Offer Column */}
                <div className="col-span-3 border-l border-navy-secondary pl-6 flex flex-col justify-between h-full min-h-[140px]">
                  <div>
                    <span className="text-[10px] font-semibold text-chartreuse tracking-wider uppercase block mb-1">
                      Partner Desk
                    </span>
                    <h4 className="font-heading font-semibold text-card-white text-sm leading-snug">
                      {persona.hot.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed mt-2.5 font-body">
                      {persona.hot.desc}
                    </p>
                  </div>
                  <Link
                    href={`/contact?autofocus=true&persona=${persona.id}&subject=${encodeURIComponent(persona.hot.title)}`}
                    className="text-xs font-body font-bold text-navy bg-chartreuse hover:bg-chartreuse/90 px-5 py-2.5 rounded transition-all text-center shadow-md mt-4 w-fit"
                  >
                    {persona.hot.label}
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile View: Accordion style rows */}
        <div className="lg:hidden flex flex-col gap-4">
          {personas.map((persona) => {
            const isExpanded = expandedMobile === persona.id;
            return (
              <div
                key={persona.id}
                id={`ladder-mob-${persona.id}`}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  isExpanded ? "border-cyan bg-navy-secondary/30 shadow" : "border-navy-secondary bg-navy-secondary/10"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedMobile(isExpanded ? null : persona.id)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded ${isExpanded ? "bg-cyan/15 text-card-white" : "bg-navy-secondary text-text-muted"}`}>
                      {persona.icon}
                    </div>
                    <span className="font-heading font-semibold text-sm text-card-white">{persona.label}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-card-white transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="px-5 pb-6 border-t border-navy-secondary/40 pt-4 space-y-6">
                    <p className="text-xs font-body text-text-muted leading-relaxed">{persona.situation}</p>
                    
                    {/* Tasks */}
                    <div className="bg-navy-secondary/20 p-4 rounded border border-navy-secondary">
                      <span className="text-[9px] font-semibold text-text-muted tracking-wider uppercase block">Your checklist</span>
                      <h4 className="font-heading font-semibold text-card-white text-sm mt-1">{persona.tasks.title}</h4>
                      <ul className="mt-2 space-y-1.5 list-none">
                        {persona.tasks.items.map((item) => (
                          <li key={item} className="text-xs text-text-muted leading-relaxed font-body flex gap-1.5">
                            <span className="text-cyan flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Partner */}
                    <div className="bg-navy-secondary/20 p-4 rounded border border-navy-secondary">
                      <span className="text-[9px] font-semibold text-cyan tracking-wider uppercase block">DSS Solution</span>
                      <h4 className="font-heading font-semibold text-card-white text-sm mt-1">{persona.partner.title}</h4>
                      <ul className="mt-2 space-y-1.5 list-none">
                        {persona.partner.items.map((item) => (
                          <li key={item} className="text-xs text-text-muted leading-relaxed font-body flex gap-1.5">
                            <span className="text-chartreuse flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hot CTA */}
                    <div className="bg-chartreuse p-4 rounded border border-chartreuse/20 text-navy">
                      <span className="text-[9px] font-semibold text-navy/80 tracking-wider uppercase block">Partner Desk</span>
                      <h4 className="font-heading font-bold text-sm mt-1">{persona.hot.title}</h4>
                      <p className="text-xs text-navy/90 leading-relaxed mt-2 font-body">{persona.hot.desc}</p>
                      <Link
                        href={`/contact?autofocus=true&persona=${persona.id}&subject=${encodeURIComponent(persona.hot.title)}`}
                        className="text-xs font-body font-bold text-card-white bg-navy hover:bg-navy-secondary px-5 py-2.5 rounded transition-all mt-3 w-full text-center block"
                      >
                        {persona.hot.label}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
