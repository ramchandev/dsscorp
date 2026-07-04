"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, Percent } from "lucide-react";

type ToolType = "gst" | "tax" | "valuation";

export default function InteractiveTool() {
  const [activeTool, setActiveTool] = useState<ToolType>("gst");

  // GST State
  const [gstTurnover, setGstTurnover] = useState<number>(500000);
  const [gstExpenseRatio, setGstExpenseRatio] = useState<number>(30);
  const [gstRate, setGstRate] = useState<number>(18);

  // Income Tax State
  const [income, setIncome] = useState<number>(1200000);
  const [deductions80c, setDeductions80c] = useState<number>(150000);
  const [deductionsHra, setDeductionsHra] = useState<number>(50000);

  // Valuation State
  const [valRevenue, setValRevenue] = useState<number>(25000000);
  const [valGrowth, setValGrowth] = useState<number>(20);
  const [valSector, setValSector] = useState<string>("tech"); // tech (6x), manufacturing (4.5x), services (3.5x)

  // Calculations
  const grossGST = (gstTurnover * gstRate) / 100;
  const itc = ((gstTurnover * gstExpenseRatio) / 100 * gstRate) / 100;
  const netGstPayable = Math.max(0, grossGST - itc);

  // Income Tax Calc (FY 2026-27)
  const calcIncomeTax = () => {
    // New Regime standard deduction = 75,000
    const netNew = Math.max(0, income - 75000);
    let taxNew = 0;
    if (netNew > 700000) {
      let temp = netNew;
      if (temp > 1500000) {
        taxNew += (temp - 1500000) * 0.30;
        temp = 1500000;
      }
      if (temp > 1200000) {
        taxNew += (temp - 1200000) * 0.20;
        temp = 1200000;
      }
      if (temp > 1000000) {
        taxNew += (temp - 1000000) * 0.15;
        temp = 1000000;
      }
      if (temp > 700000) {
        taxNew += (temp - 700000) * 0.10;
        temp = 700000;
      }
      if (temp > 300000) {
        taxNew += (temp - 300000) * 0.05;
      }
    }
    const finalNew = Math.round(taxNew * 1.04); // 4% Cess

    // Old Regime standard deduction = 50,000 + 80C + HRA
    const deductions = Math.min(150000, deductions80c) + deductionsHra;
    const netOld = Math.max(0, income - 50000 - deductions);
    let taxOld = 0;
    if (netOld > 500000) {
      let temp = netOld;
      if (temp > 1000000) {
        taxOld += (temp - 1000000) * 0.30;
        temp = 1000000;
      }
      if (temp > 500000) {
        taxOld += (temp - 500000) * 0.20;
        temp = 500000;
      }
      if (temp > 250000) {
        taxOld += (temp - 250000) * 0.05;
      }
    }
    const finalOld = Math.round(taxOld * 1.04); // 4% Cess

    return {
      newRegime: finalNew,
      oldRegime: finalOld,
      savings: Math.abs(finalNew - finalOld),
      recommended: finalNew < finalOld ? "New Regime" : "Old Regime"
    };
  };
  const taxResults = calcIncomeTax();

  // Valuation
  const sectorMultipliers: Record<string, number> = {
    tech: 6,
    manufacturing: 4.5,
    services: 3.5,
  };
  const multiplier = sectorMultipliers[valSector] || 3;
  const ebitda = valRevenue * 0.18; // Assume 18% standard EBITDA margin
  const valuation = ebitda * multiplier * (1 + valGrowth / 100);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const toolMetadata = {
    gst: {
      tag: "Indirect Taxation",
      title: "GST Liability & Input Credit Calculator",
      link: "/tools/gst-calculator"
    },
    tax: {
      tag: "Direct Taxation",
      title: "Regime Comparison Calculator",
      link: "/tools/income-tax-calculator"
    },
    valuation: {
      tag: "Corporate Finance",
      title: "Venture Valuation Band Estimator",
      link: "/tools/valuation-estimator"
    }
  };

  return (
    <section className="py-24 bg-card-white border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-off-white border border-border-hairline rounded-xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Side: Interactive Tool Inputs/Outputs */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-navy text-card-white flex flex-col justify-between">
            <div>
              {/* Tab Selector */}
              <div className="flex gap-1.5 p-1 bg-navy-secondary/60 rounded-lg mb-8 max-w-md">
                <button
                  onClick={() => setActiveTool("gst")}
                  className={`flex-1 py-2.5 px-3 rounded text-xs font-heading font-semibold transition-all ${
                    activeTool === "gst"
                      ? "bg-cyan text-navy"
                      : "text-card-white/70 hover:text-card-white"
                  }`}
                >
                  GST
                </button>
                <button
                  onClick={() => setActiveTool("tax")}
                  className={`flex-1 py-2.5 px-3 rounded text-xs font-heading font-semibold transition-all ${
                    activeTool === "tax"
                      ? "bg-cyan text-navy"
                      : "text-card-white/70 hover:text-card-white"
                  }`}
                >
                  Income Tax
                </button>
                <button
                  onClick={() => setActiveTool("valuation")}
                  className={`flex-1 py-2.5 px-3 rounded text-xs font-heading font-semibold transition-all ${
                    activeTool === "valuation"
                      ? "bg-cyan text-navy"
                      : "text-card-white/70 hover:text-card-white"
                  }`}
                >
                  Valuation
                </button>
              </div>

              {/* GST CALCULATOR */}
              {activeTool === "gst" && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl flex items-center gap-2 text-card-white">
                    <Calculator className="w-5 h-5 text-chartreuse" />
                    GST Liability & Input Credit Calculator
                  </h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Monthly Turnover (Sales)
                      </label>
                      <div className="relative">
                        <input
                          type="range"
                          min="100000"
                          max="5000000"
                          step="50000"
                          value={gstTurnover}
                          onChange={(e) => setGstTurnover(Number(e.target.value))}
                          className="w-full h-1 bg-navy-secondary rounded-lg appearance-none cursor-pointer accent-chartreuse"
                        />
                        <div className="flex justify-between text-xs text-text-muted mt-2 font-body">
                          <span>₹1L</span>
                          <span className="text-chartreuse font-bold">{formatCurrency(gstTurnover)}</span>
                          <span>₹50L</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                          Expense Ratio (% of Sales)
                        </label>
                        <select
                          value={gstExpenseRatio}
                          onChange={(e) => setGstExpenseRatio(Number(e.target.value))}
                          className="w-full bg-navy-secondary/60 border border-navy-secondary rounded px-3 py-2 text-xs sm:text-sm text-card-white focus:outline-none focus:border-cyan"
                        >
                          <option value={10}>10% (Low expenses)</option>
                          <option value={30}>30% (Standard)</option>
                          <option value={50}>50% (High expenses)</option>
                          <option value={70}>70% (Very high)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                          GST Rate Slab
                        </label>
                        <select
                          value={gstRate}
                          onChange={(e) => setGstRate(Number(e.target.value))}
                          className="w-full bg-navy-secondary/60 border border-navy-secondary rounded px-3 py-2 text-xs sm:text-sm text-card-white focus:outline-none focus:border-cyan"
                        >
                          <option value={5}>5% (Essential)</option>
                          <option value={12}>12% (Standard I)</option>
                          <option value={18}>18% (Standard II)</option>
                          <option value={28}>28% (Luxury)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Outputs */}
                  <div className="mt-8 pt-6 border-t border-navy-secondary grid grid-cols-3 gap-2">
                    <div className="bg-navy-secondary/60 p-3 rounded">
                      <span className="block text-[9px] uppercase text-text-muted font-semibold tracking-wider">Gross GST</span>
                      <span className="block text-xs sm:text-sm font-heading font-semibold text-card-white mt-1">{formatCurrency(grossGST)}</span>
                    </div>
                    <div className="bg-navy-secondary/60 p-3 rounded">
                      <span className="block text-[9px] uppercase text-text-muted font-semibold tracking-wider">Input Credit</span>
                      <span className="block text-xs sm:text-sm font-heading font-semibold text-chartreuse mt-1">-{formatCurrency(itc)}</span>
                    </div>
                    <div className="bg-navy-secondary/60 p-3 border border-cyan/20 rounded">
                      <span className="block text-[9px] uppercase text-cyan font-semibold tracking-wider">Net Payable</span>
                      <span className="block text-xs sm:text-sm font-heading font-bold text-cyan mt-1">{formatCurrency(netGstPayable)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* INCOME TAX CALCULATOR */}
              {activeTool === "tax" && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl flex items-center gap-2 text-card-white">
                    <Percent className="w-5 h-5 text-cyan" />
                    Income Tax Regime Calculator
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                          Annual Gross Income (Sales / Salary)
                        </label>
                        <input
                          type="number"
                          value={income}
                          onChange={(e) => setIncome(Number(e.target.value))}
                          className="w-full bg-navy-secondary/60 border border-navy-secondary rounded px-3 py-2 text-xs sm:text-sm text-card-white focus:outline-none focus:border-cyan"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                          80C Deductions (Max 1.5L)
                        </label>
                        <input
                          type="number"
                          max={150000}
                          value={deductions80c}
                          onChange={(e) => setDeductions80c(Number(e.target.value))}
                          className="w-full bg-navy-secondary/60 border border-navy-secondary rounded px-3 py-2 text-xs sm:text-sm text-card-white focus:outline-none focus:border-cyan"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        HRA & Other Deductions (Old Regime)
                      </label>
                      <input
                        type="number"
                        value={deductionsHra}
                        onChange={(e) => setDeductionsHra(Number(e.target.value))}
                        className="w-full bg-navy-secondary/60 border border-navy-secondary rounded px-3 py-2 text-xs sm:text-sm text-card-white focus:outline-none focus:border-cyan"
                      />
                    </div>
                  </div>

                  {/* Outputs */}
                  <div className="mt-8 pt-6 border-t border-navy-secondary grid grid-cols-3 gap-2">
                    <div className="bg-navy-secondary/60 p-3 rounded">
                      <span className="block text-[9px] uppercase text-text-muted font-semibold tracking-wider">New Regime Tax</span>
                      <span className="block text-xs sm:text-sm font-heading font-semibold text-card-white mt-1">{formatCurrency(taxResults.newRegime)}</span>
                    </div>
                    <div className="bg-navy-secondary/60 p-3 rounded">
                      <span className="block text-[9px] uppercase text-text-muted font-semibold tracking-wider">Old Regime Tax</span>
                      <span className="block text-xs sm:text-sm font-heading font-semibold text-card-white mt-1">{formatCurrency(taxResults.oldRegime)}</span>
                    </div>
                    <div className="bg-navy-secondary/60 p-3 border border-chartreuse/25 rounded">
                      <span className="block text-[9px] uppercase text-chartreuse font-semibold tracking-wider">Regime Recommendation</span>
                      <span className="block text-xs sm:text-sm font-heading font-bold text-chartreuse mt-1">{taxResults.recommended}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* VALUATION ESTIMATOR */}
              {activeTool === "valuation" && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl flex items-center gap-2 text-card-white">
                    <TrendingUp className="w-5 h-5 text-cyan" />
                    Business Valuation Range Estimator
                  </h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Annual Revenue (Turnover)
                      </label>
                      <div className="relative">
                        <input
                          type="range"
                          min="1000000"
                          max="200000000"
                          step="1000000"
                          value={valRevenue}
                          onChange={(e) => setValRevenue(Number(e.target.value))}
                          className="w-full h-1 bg-navy-secondary rounded-lg appearance-none cursor-pointer accent-cyan"
                        />
                        <div className="flex justify-between text-xs text-text-muted mt-2 font-body">
                          <span>₹10L</span>
                          <span className="text-cyan font-bold">{formatCurrency(valRevenue)}</span>
                          <span>₹20Cr</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                          Industry Sector
                        </label>
                        <select
                          value={valSector}
                          onChange={(e) => setValSector(e.target.value)}
                          className="w-full bg-navy-secondary/60 border border-navy-secondary rounded px-3 py-2 text-xs sm:text-sm text-card-white focus:outline-none focus:border-cyan"
                        >
                          <option value="tech">Technology / SaaS (6.0x)</option>
                          <option value="manufacturing">Manufacturing (4.5x)</option>
                          <option value="services">Professional Services (3.5x)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                          YoY Growth Rate
                        </label>
                        <select
                          value={valGrowth}
                          onChange={(e) => setValGrowth(Number(e.target.value))}
                          className="w-full bg-navy-secondary/60 border border-navy-secondary rounded px-3 py-2 text-xs sm:text-sm text-card-white focus:outline-none focus:border-cyan"
                        >
                          <option value={5}>Flat (5% YoY)</option>
                          <option value={20}>Moderate (20% YoY)</option>
                          <option value={45}>High Growth (45% YoY)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Outputs */}
                  <div className="mt-8 pt-6 border-t border-navy-secondary grid grid-cols-2 gap-4">
                    <div className="bg-navy-secondary/60 p-4 rounded">
                      <span className="block text-[9px] uppercase text-text-muted font-semibold tracking-wider">Est. EBITDA (18% Margin)</span>
                      <span className="block text-xs sm:text-sm font-heading font-semibold text-card-white mt-1">{formatCurrency(ebitda)}</span>
                    </div>
                    <div className="bg-navy-secondary/60 p-4 border border-chartreuse/25 rounded">
                      <span className="block text-[9px] uppercase text-chartreuse font-semibold tracking-wider">Estimated Valuation</span>
                      <span className="block text-xs sm:text-base font-heading font-bold text-chartreuse mt-1">{formatCurrency(valuation)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <p className="text-[10px] text-text-muted mt-8 leading-relaxed font-body">
              *Calculations are illustrative estimates for advisory scoping and do not constitute formal tax filings or valuation reports.
            </p>
          </div>

          {/* Right Side: Copy Block & CTA */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
            <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading mb-2 animate-pulse">
              Interactive Tools
            </span>
            <h3 className="font-heading font-semibold text-2xl text-navy leading-tight">
              {toolMetadata[activeTool].title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed mt-4">
              Get an instant projection based on current regulatory provisions. Our tools help founders and business desks map operations before requesting partner reviews.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={toolMetadata[activeTool].link}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-navy hover:bg-navy-secondary text-card-white px-6 py-3 rounded font-body font-semibold text-xs transition-all shadow-xs"
              >
                Access Detailed Tool
                <ArrowRight className="w-4 h-4" />
              </a>
              <div>
                <a
                  href="/tools"
                  className="inline-block text-xs font-body font-bold text-cyan hover:text-navy transition-colors"
                >
                  View All {toolMetadata[activeTool].tag} Tools →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
