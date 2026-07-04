"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PersonaBadge from "@/components/PersonaBadge";

interface ToolConfig {
  slug: string;
  name: string;
  subhead: string;
  persona: "startup" | "msme" | "hni" | "nri";
  methodology: string;
  relatedService: { name: string; href: string };
  faqs: { question: string; answer: string }[];
}

interface ToolPageClientProps {
  tool: ToolConfig;
}

export default function ToolPageClient({ tool }: ToolPageClientProps) {
  const { slug } = tool;

  // --- GST Calculator State ---
  const [turnover, setTurnover] = useState(1000000);
  const [purchases, setPurchases] = useState(600000);
  const [gstRate, setGstRate] = useState(18);
  const [isInterState, setIsInterState] = useState(false);

  // --- Valuation Estimator State ---
  const [revenue, setRevenue] = useState(25000000);
  const [growth, setGrowth] = useState(40);
  const [sector, setSector] = useState("saas");

  // --- Incorporation Estimator State ---
  const [authCapital, setAuthCapital] = useState(100000);
  const [entityType, setEntityType] = useState("pvt-ltd");
  const [stateDuty, setStateDuty] = useState("tn");

  // --- FEMA Repatriation State ---
  const [sourceType, setSourceType] = useState("property");
  const [remitAmount, setRemitAmount] = useState(200000);

  // --- Wealth Quiz State ---
  const [q1, setQ1] = useState(false); // Has Will?
  const [q2, setQ2] = useState(false); // Multi-country assets?
  const [q3, setQ3] = useState(false); // Business liability?
  const [q4, setQ4] = useState(false); // succession plan?

  // --- Income Tax Calculator State ---
  const [taxableIncome, setTaxableIncome] = useState(1200000);
  const [investments80c, setInvestments80c] = useState(150000);
  const [hraDeduction, setHraDeduction] = useState(50000);

  // --- Calculations ---
  const calcGst = () => {
    const grossOutputTax = Math.round(turnover * (gstRate / 100));
    const eligibleItc = Math.round(purchases * (gstRate / 100));
    const netPayable = Math.max(0, grossOutputTax - eligibleItc);
    return { grossOutputTax, eligibleItc, netPayable };
  };

  const calcValuation = () => {
    let multiple = 5;
    if (sector === "saas") multiple = growth > 30 ? 10 : 7;
    else if (sector === "services") multiple = growth > 20 ? 2.5 : 1.8;
    else if (sector === "manufacturing") multiple = 10; // EBITDA
    else if (sector === "d2c") multiple = growth > 40 ? 3.5 : 2.5;

    const baseVal = revenue * multiple;
    const discountedVal = Math.round(baseVal * 0.85); // 15% discount
    const highVal = Math.round(baseVal * 1.15);
    return { low: discountedVal, high: highVal, multiple };
  };

  const calcIncorporation = () => {
    let governmentFee = 2000; // MCA portal baseline
    if (authCapital > 100000) governmentFee += (authCapital - 100000) * 0.01;

    let stampDuty = 1000;
    if (stateDuty === "mh") stampDuty = Math.round(authCapital * 0.005);
    else if (stateDuty === "tn") stampDuty = Math.round(authCapital * 0.006);

    const proCharges = 15000; // CA portal setup baseline
    const totalCost = governmentFee + stampDuty + proCharges;
    return { governmentFee, stampDuty, proCharges, totalCost };
  };

  const checkFema = () => {
    let isEligible = true;
    let limitDesc = "Repatriable up to USD 1 Million per financial year from NRO accounts.";
    if (sourceType === "property" && remitAmount > 1000000) {
      isEligible = false;
      limitDesc = "Remittances from property sale capital gains exceed FEMA $1M annual limit.";
    }
    return { isEligible, limitDesc };
  };

  const calcWealthScore = () => {
    let score = 100;
    if (!q1) score -= 30; // No Will
    if (q2) score -= 20; // Cross-border complexities
    if (q3) score -= 20; // High business liability
    if (!q4) score -= 30; // No succession planning
    return Math.max(0, score);
  };

  const calcIncomeTax = () => {
    // New Regime calculation for FY 2026-27
    const stdDedNew = 75000;
    const taxableNew = Math.max(0, taxableIncome - stdDedNew);
    let taxNew = 0;

    if (taxableNew <= 700000) {
      taxNew = 0; // Section 87A rebate for income up to 7 Lakhs
    } else {
      let tempIncome = taxableNew;
      if (tempIncome > 1500000) {
        taxNew += (tempIncome - 1500000) * 0.30;
        tempIncome = 1500000;
      }
      if (tempIncome > 1200000) {
        taxNew += (tempIncome - 1200000) * 0.20;
        tempIncome = 1200000;
      }
      if (tempIncome > 1000000) {
        taxNew += (tempIncome - 1000000) * 0.15;
        tempIncome = 1000000;
      }
      if (tempIncome > 700000) {
        taxNew += (tempIncome - 700000) * 0.10;
        tempIncome = 700000;
      }
      if (tempIncome > 300000) {
        taxNew += (tempIncome - 300000) * 0.05;
      }
    }

    const totalTaxNew = Math.round(taxNew * 1.04); // Cess 4%

    // Old Regime calculation
    const stdDedOld = 50000;
    const deduction80c = Math.min(150000, investments80c);
    const taxableOld = Math.max(0, taxableIncome - stdDedOld - deduction80c - hraDeduction);
    let taxOld = 0;

    if (taxableOld <= 500000) {
      taxOld = 0; // Section 87A rebate for income up to 5 Lakhs
    } else {
      let tempIncome = taxableOld;
      if (tempIncome > 1000000) {
        taxOld += (tempIncome - 1000000) * 0.30;
        tempIncome = 1000000;
      }
      if (tempIncome > 500000) {
        taxOld += (tempIncome - 500000) * 0.20;
        tempIncome = 500000;
      }
      if (tempIncome > 250000) {
        taxOld += (tempIncome - 250000) * 0.05;
      }
    }

    const totalTaxOld = Math.round(taxOld * 1.04); // Cess 4%

    return {
      totalTaxNew,
      totalTaxOld,
      difference: Math.abs(totalTaxNew - totalTaxOld),
      preferred: totalTaxNew < totalTaxOld ? "new" : "old",
    };
  };

  const gst = calcGst();
  const valuation = calcValuation();
  const incorp = calcIncorporation();
  const fema = checkFema();
  const wealthScore = calcWealthScore();
  const incomeTax = calcIncomeTax();

  const crumbs = [
    { label: "Interactive Tools", href: "/tools" },
    { label: tool.name },
  ];

  return (
    <>
      <Breadcrumb crumbs={crumbs} />

      <section className="py-16 border-b border-border-hairline bg-card-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Advisory Tool
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight leading-tight">
                {tool.name}
              </h1>
              <p className="font-body text-[15px] sm:text-[16px] text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                {tool.subhead}
              </p>
              <div className="pt-2">
                <PersonaBadge persona={tool.persona} />
              </div>
            </div>

            <div className="lg:col-span-4 bg-off-white p-6 border border-border-hairline rounded-lg text-center">
              <span className="text-xs font-body font-semibold text-navy uppercase block mb-1">Methodology Disclaimer</span>
              <p className="text-[11px] leading-relaxed text-text-secondary font-body">
                Calculations are illustrative only and based on baseline regulatory slabs. Not a substitute for a signed filing or direct CA advisory review.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic Calculator Component Interface */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card-white border border-border-hairline rounded-xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
            
            {/* Inputs Panel */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <h3 className="font-heading font-semibold text-lg text-navy border-b border-border-hairline/60 pb-3">
                Enter Scoping Parameters
              </h3>

              {/* GST LIABILITY CALCULATOR PANEL */}
              {slug === "gst-calculator" && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Monthly Turnover (INR)</label>
                    <input
                      type="number"
                      value={turnover}
                      onChange={(e) => setTurnover(Number(e.target.value))}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Cost of Purchases / Expenses (INR)</label>
                    <input
                      type="number"
                      value={purchases}
                      onChange={(e) => setPurchases(Number(e.target.value))}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">GST Rate Slab</label>
                      <select
                        value={gstRate}
                        onChange={(e) => setGstRate(Number(e.target.value))}
                        className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                      >
                        <option value={5}>5% (Standard Slabs)</option>
                        <option value={12}>12% (IT / Services)</option>
                        <option value={18}>18% (Standard Services)</option>
                        <option value={28}>28% (Luxury Slabs)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Transaction Type</label>
                      <select
                        value={isInterState ? "inter" : "intra"}
                        onChange={(e) => setIsInterState(e.target.value === "inter")}
                        className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                      >
                        <option value="intra">Intra-State (CGST + SGST)</option>
                        <option value="inter">Inter-State (IGST)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* INCOME TAX CALCULATOR PANEL */}
              {slug === "income-tax-calculator" && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Annual Gross Income (INR)</label>
                    <input
                      type="number"
                      value={taxableIncome}
                      onChange={(e) => setTaxableIncome(Number(e.target.value))}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Section 80C Investments (INR) (Old regime only)</label>
                    <input
                      type="number"
                      value={investments80c}
                      onChange={(e) => setInvestments80c(Number(e.target.value))}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    />
                    <span className="text-[10px] text-text-muted mt-1 block">Maximum deduction is ₹1,50,000 under 80C.</span>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">HRA / Other Deductions (INR) (Old regime only)</label>
                    <input
                      type="number"
                      value={hraDeduction}
                      onChange={(e) => setHraDeduction(Number(e.target.value))}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    />
                  </div>
                </div>
              )}

              {/* VALUATION ESTIMATOR PANEL */}
              {slug === "valuation-estimator" && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Annual Recurring Revenue (ARR in INR)</label>
                    <input
                      type="number"
                      value={revenue}
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Year-over-Year Growth Rate (%)</label>
                    <input
                      type="number"
                      value={growth}
                      onChange={(e) => setGrowth(Number(e.target.value))}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Enterprise Sector</label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    >
                      <option value="saas">SaaS & Software</option>
                      <option value="services">Professional Services</option>
                      <option value="manufacturing">Manufacturing (EBITDA multiple)</option>
                      <option value="d2c">Direct-to-Consumer (D2C)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* INCORPORATION ESTIMATOR PANEL */}
              {slug === "incorporation-estimator" && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Authorized Share Capital (INR)</label>
                    <input
                      type="number"
                      value={authCapital}
                      onChange={(e) => setAuthCapital(Number(e.target.value))}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Entity Type</label>
                      <select
                        value={entityType}
                        onChange={(e) => setEntityType(e.target.value)}
                        className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                      >
                        <option value="pvt-ltd">Private Limited Company</option>
                        <option value="llp">Limited Liability Partnership</option>
                        <option value="opc">One Person Company</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">State Location</label>
                      <select
                        value={stateDuty}
                        onChange={(e) => setStateDuty(e.target.value)}
                        className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                      >
                        <option value="tn">Tamil Nadu</option>
                        <option value="mh">Maharashtra</option>
                        <option value="ka">Karnataka</option>
                        <option value="dl">Delhi NCR</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* FEMA REPATRIATION PANEL */}
              {slug === "fema-checker" && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Remittance Source Type</label>
                    <select
                      value={sourceType}
                      onChange={(e) => setSourceType(e.target.value)}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    >
                      <option value="property">Sale of Residential Property</option>
                      <option value="inheritance">Inherited Asset / Family Legacy</option>
                      <option value="nro-savings">NRO Banking Savings</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy uppercase mb-2">Annual Remittance Amount (USD)</label>
                    <input
                      type="number"
                      value={remitAmount}
                      onChange={(e) => setRemitAmount(Number(e.target.value))}
                      className="w-full bg-off-white border border-border-hairline rounded px-4 py-3 text-sm font-body focus:outline-none focus:border-cyan"
                    />
                  </div>
                </div>
              )}

              {/* WEALTH READINESS PANEL */}
              {slug === "wealth-readiness-quiz" && (
                <div className="space-y-5">
                  <p className="text-xs font-body text-text-secondary leading-relaxed mb-4">
                    Check all boxes that apply to your current family succession setup:
                  </p>

                  <div className="space-y-4">
                    <label className="flex items-center gap-3 p-3 bg-off-white border border-border-hairline rounded cursor-pointer hover:border-cyan/40">
                      <input
                        type="checkbox"
                        checked={q1}
                        onChange={(e) => setQ1(e.target.checked)}
                        className="w-4 h-4 text-cyan"
                      />
                      <span className="text-xs font-body text-navy">I have drafted and registered a written Will for my assets.</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-off-white border border-border-hairline rounded cursor-pointer hover:border-cyan/40">
                      <input
                        type="checkbox"
                        checked={q2}
                        onChange={(e) => setQ2(e.target.checked)}
                        className="w-4 h-4 text-cyan"
                      />
                      <span className="text-xs font-body text-navy">I hold significant real estate or equity assets in foreign countries.</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-off-white border border-border-hairline rounded cursor-pointer hover:border-cyan/40">
                      <input
                        type="checkbox"
                        checked={q3}
                        onChange={(e) => setQ3(e.target.checked)}
                        className="w-4 h-4 text-cyan"
                      />
                      <span className="text-xs font-body text-navy">I carry personal guarantees or significant commercial business liabilities.</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-off-white border border-border-hairline rounded cursor-pointer hover:border-cyan/40">
                      <input
                        type="checkbox"
                        checked={q4}
                        onChange={(e) => setQ4(e.target.checked)}
                        className="w-4 h-4 text-cyan"
                      />
                      <span className="text-xs font-body text-navy">I have an active corporate succession plan for my family enterprise.</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Outputs Summary Panel */}
            <div className="lg:col-span-5 bg-navy text-card-white p-8 sm:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-navy-secondary">
              <div>
                <h3 className="font-heading font-semibold text-lg text-card-white border-b border-navy-secondary pb-3 mb-6">
                  Calculation Summary
                </h3>

                {/* GST CALCULATOR OUTPUTS */}
                {slug === "gst-calculator" && (
                  <div className="space-y-4 font-body">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Gross Output GST:</span>
                      <span className="font-semibold text-card-white">₹{gst.grossOutputTax.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Input Tax Credit (ITC):</span>
                      <span className="font-semibold text-chartreuse">₹{gst.eligibleItc.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="border-t border-navy-secondary pt-3 flex justify-between text-sm">
                      <span className="font-heading font-semibold text-card-white">Net Payable GST:</span>
                      <span className="font-heading font-bold text-chartreuse">₹{gst.netPayable.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="bg-navy-secondary/50 p-4 rounded text-[11px] leading-relaxed text-text-muted mt-6">
                      {isInterState ? (
                        <p>Inter-State transaction: Total IGST of <strong>₹{gst.netPayable.toLocaleString("en-IN")}</strong> is deposited directly with Central CGST ledger accounts.</p>
                      ) : (
                        <p>Intra-State transaction: Splitting GST evenly between <strong>CGST (₹{(gst.netPayable / 2).toLocaleString("en-IN")})</strong> and <strong>SGST (₹{(gst.netPayable / 2).toLocaleString("en-IN")})</strong>.</p>
                      )}
                    </div>
                  </div>
                )}

                {/* INCOME TAX CALCULATOR OUTPUTS */}
                {slug === "income-tax-calculator" && (
                  <div className="space-y-4 font-body">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Tax under New Regime:</span>
                      <span className="font-semibold text-card-white">₹{incomeTax.totalTaxNew.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Tax under Old Regime:</span>
                      <span className="font-semibold text-card-white">₹{incomeTax.totalTaxOld.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="border-t border-navy-secondary pt-3 flex justify-between text-sm">
                      <span className="font-heading font-semibold text-card-white">Preferred Option:</span>
                      <span className="font-heading font-bold text-chartreuse">
                        {incomeTax.preferred === "new" ? "New Regime" : "Old Regime"} (Saves ₹{incomeTax.difference.toLocaleString("en-IN")})
                      </span>
                    </div>
                    <div className="bg-navy-secondary/50 p-4 rounded text-[11px] leading-relaxed text-text-muted mt-6">
                      <p>
                        The New Regime standard deduction is set to <strong>₹75,000</strong> with no deductions allowed. The Old Regime allows standard deduction of <strong>₹50,000</strong> plus 80C and HRA deductions. A 4% education cess is included in both totals.
                      </p>
                    </div>
                  </div>
                )}

                {/* VALUATION CALCULATOR OUTPUTS */}
                {slug === "valuation-estimator" && (
                  <div className="space-y-4 font-body">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Sector Multiple Applied:</span>
                      <span className="font-semibold text-card-white">{valuation.multiple}x Revenue</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Estimated Base Valuation:</span>
                      <span className="font-semibold text-card-white">₹{(revenue * valuation.multiple).toLocaleString("en-IN")}</span>
                    </div>
                    <div className="border-t border-navy-secondary pt-3 flex justify-between text-sm">
                      <span className="font-heading font-semibold text-card-white">Valuation Range:</span>
                      <span className="font-heading font-bold text-chartreuse">
                        ₹{valuation.low.toLocaleString("en-IN")} - ₹{valuation.high.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="bg-navy-secondary/50 p-4 rounded text-[11px] leading-relaxed text-text-muted mt-6">
                      <p>This range incorporates a <strong>15% early-stage DLOM discount</strong>. We recommend verifying these values against dynamic DCF discounting curves.</p>
                    </div>
                  </div>
                )}

                {/* INCORPORATION CALCULATOR OUTPUTS */}
                {slug === "incorporation-estimator" && (
                  <div className="space-y-4 font-body">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Statutory MCA portal fees:</span>
                      <span className="font-semibold text-card-white">₹{incorp.governmentFee.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">State Stamp Duties estimation:</span>
                      <span className="font-semibold text-card-white">₹{incorp.stampDuty.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">CA Professional compliance desk:</span>
                      <span className="font-semibold text-card-white">₹{incorp.proCharges.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="border-t border-navy-secondary pt-3 flex justify-between text-sm">
                      <span className="font-heading font-semibold text-card-white">Total Setup cost:</span>
                      <span className="font-heading font-bold text-chartreuse">₹{incorp.totalCost.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="bg-navy-secondary/50 p-4 rounded text-[11px] leading-relaxed text-text-muted mt-6">
                      <p>Standard incorporation timeline is <strong>10-12 business days</strong> post DSC/DIN name filings validations.</p>
                    </div>
                  </div>
                )}

                {/* FEMA REPATRIATION CHECKER OUTPUTS */}
                {slug === "fema-checker" && (
                  <div className="space-y-4 font-body">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Transaction value:</span>
                      <span className="font-semibold text-card-white">${remitAmount.toLocaleString("en-US")} USD</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">FEMA Eligibility Status:</span>
                      <span className={`font-semibold ${fema.isEligible ? "text-chartreuse" : "text-red-400"}`}>
                        {fema.isEligible ? "Clear / Compliant" : "Scrutiny Required"}
                      </span>
                    </div>
                    <div className="border-t border-navy-secondary pt-3 flex justify-between text-sm">
                      <span className="font-heading font-semibold text-card-white">Compliance Cap Action:</span>
                      <span className="font-heading font-semibold text-chartreuse">Form 15CA/15CB required</span>
                    </div>
                    <div className="bg-navy-secondary/50 p-4 rounded text-[11px] leading-relaxed text-text-muted mt-6">
                      <p>{fema.limitDesc}</p>
                    </div>
                  </div>
                )}

                {/* WEALTH READINESS QUIZ OUTPUTS */}
                {slug === "wealth-readiness-quiz" && (
                  <div className="space-y-4 font-body">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Succession Readiness Index:</span>
                      <span className="font-semibold text-card-white">{wealthScore}% Ready</span>
                    </div>
                    <div className="border-t border-navy-secondary pt-3 flex justify-between text-sm">
                      <span className="font-heading font-semibold text-card-white">Vulnerability Alert:</span>
                      <span className={`font-heading font-bold ${wealthScore < 70 ? "text-red-400" : "text-chartreuse"}`}>
                        {wealthScore < 70 ? "High Exposure Risks" : "Low Risk Profile"}
                      </span>
                    </div>
                    <div className="bg-navy-secondary/50 p-4 rounded text-[11px] leading-relaxed text-text-muted mt-6 font-body">
                      {wealthScore < 70 ? (
                        <p>Warning: Lack of a Will or succession plan in combination with active business liabilities exposes family assets to probate blockages.</p>
                      ) : (
                        <p>Your legacy planning is relatively robust. Consider establishing a private family trust to optimize offshore tax asset structures.</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Lead Capture Redirect */}
              <div className="mt-8 border-t border-navy-secondary pt-6 space-y-4">
                <span className="block text-xs font-heading font-semibold uppercase tracking-wider text-text-muted">
                  Request Partner Review
                </span>
                <p className="text-[11px] text-text-muted leading-relaxed font-body">
                  Want these calculations verified against your actual corporate ledgers or property deeds? Connect with our advisory desk.
                </p>
                
                <Link
                  href={`/contact?autofocus=true&subject=Validation%20Request%20for%20${encodeURIComponent(tool.name)}`}
                  className="w-full bg-chartreuse hover:bg-chartreuse/90 text-navy font-body font-bold text-xs py-2.5 rounded transition-all text-center block"
                >
                  Request Partner Review
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How this is calculated section */}
      <section className="py-20 bg-card-white border-y border-border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="font-heading font-semibold text-xl text-navy">
            Calculation Methodology
          </h3>
          <p className="font-body text-sm leading-relaxed text-text-secondary">
            {tool.methodology}
          </p>
          <div className="pt-2">
            <span className="text-xs font-body text-text-muted block">Related service link:</span>
            <Link
              href={tool.relatedService.href}
              className="inline-flex items-center gap-1 text-xs font-heading font-semibold text-cyan hover:text-navy transition-colors mt-1"
            >
              {tool.relatedService.name} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs component */}
      <section className="py-20 bg-off-white/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block mb-2">
              Tool Scrutiny
            </span>
            <h3 className="font-heading font-semibold text-xl text-navy">
              Frequently Answered Queries
            </h3>
          </div>
          
          <div className="space-y-4 bg-card-white p-6 sm:p-8 rounded-lg border border-border-hairline">
            {tool.faqs.map((faq, idx) => (
              <div key={idx} className="space-y-2 border-b border-border-hairline/60 last:border-0 pb-5 last:pb-0 pt-5 first:pt-0">
                <h4 className="font-heading font-semibold text-sm sm:text-base text-navy">
                  {faq.question}
                </h4>
                <p className="font-body text-xs sm:text-sm leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA triggers */}
      <section className="relative bg-navy text-card-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#8CC63F] via-[#4FC3E8] to-[#16233F]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <h3 className="font-heading font-semibold text-2xl text-card-white">
            Connect with Partner Desk
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a href="tel:+919840053053" className="w-full sm:w-auto bg-card-white text-navy px-8 py-3 rounded font-body font-semibold text-xs flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call Partner Desk
            </a>
            <a href="https://wa.me/919840053053" className="w-full sm:w-auto bg-navy-secondary text-card-white px-8 py-3 rounded font-body font-semibold text-xs border border-navy-secondary hover:border-cyan/50 flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan" /> WhatsApp Scoping
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
