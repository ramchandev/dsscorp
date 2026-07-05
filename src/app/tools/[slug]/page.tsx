import React from "react";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ToolPageClient from "@/components/ToolPageClient";
import { createPageMetadata } from "@/lib/seo";

interface ToolConfig {
  slug: string;
  name: string;
  subhead: string;
  persona: "startup" | "msme" | "hni" | "nri";
  methodology: string;
  relatedService: { name: string; href: string };
  faqs: { question: string; answer: string }[];
}

const toolsDb: Record<string, ToolConfig> = {
  "gst-calculator": {
    slug: "gst-calculator",
    name: "GST/Tax Liability Calculator",
    subhead: "Calculate output CGST/SGST/IGST breakdown and estimate eligible Input Tax Credit (ITC) offsets.",
    persona: "msme",
    methodology: "Calculated using the standard Indian GST formula: Net Payable GST = (Monthly Turnover * GST Rate) - (Monthly Purchases Cost * GST Rate). State splits (CGST/SGST) are set to 50% each for intra-state transfers, and IGST is 100% of the calculated tax for inter-state transfers.",
    relatedService: { name: "GST & Indirect Tax Advisory", href: "/services/taxation/gst-indirect-tax" },
    faqs: [
      {
        question: "Can I claim Input Tax Credit (ITC) on all purchase invoices?",
        answer: "No. You can only claim ITC on purchases used directly for business activities. Blocked credits (e.g. food/beverages, passenger vehicles) must be excluded, and the vendor must upload their GSTR-1 for it to show in your GSTR-2B.",
      },
      {
        question: "How does intra-state GST differ from inter-state?",
        answer: "Intra-state sales within the same state attract CGST and SGST at equal splits (e.g., 9% each for an 18% slab). Inter-state sales attract IGST at the full rate (18%), which is deposited directly with the central government.",
      },
    ],
  },
  "income-tax-calculator": {
    slug: "income-tax-calculator",
    name: "Income Tax Regime Calculator",
    subhead: "Compare personal income tax liabilities under the Old vs. New Tax Regime for FY 2026-27.",
    persona: "msme",
    methodology: "Calculates estimated personal income tax liabilities based on the standard slabs for FY 2026-27. Under the New Regime (Sec 115BAC), standard deduction is set to ₹75,000 with a tax-free threshold of ₹7,00,000 (after 87A rebate). Under the Old Regime, standard deduction is ₹50,000 with deductions allowed under Section 80C and HRA options.",
    relatedService: { name: "Direct Taxation & Income Tax", href: "/services/taxation/direct-taxation-income-tax" },
    faqs: [
      {
        question: "Is HRA deduction allowed under the New Tax Regime?",
        answer: "No. Under the New Tax Regime (Section 115BAC), standard deductions like HRA, LTA, and Section 80C are completely disallowed. Only standard deduction of ₹75,000 is permitted.",
      },
      {
        question: "How does the Section 87A rebate work in the New Regime?",
        answer: "For individuals opting for the New Regime, if their net taxable income (gross income minus standard deduction) is up to ₹7,00,000, they qualify for a 100% tax rebate, reducing net tax payable to nil.",
      },
    ],
  },
  "valuation-estimator": {
    slug: "valuation-estimator",
    name: "Business Valuation Range Estimator",
    subhead: "Get a defensible multiple-based valuation range using custom ARR or profit inputs.",
    persona: "startup",
    methodology: "Uses industry multiple ranges aligned with recent venture transactions in India. Multipliers vary: SaaS (6x - 12x ARR), Services (1.5x - 3x revenue), Manufacturing (8x - 15x EBITDA), and D2C brands (2x - 4x revenue). Results include a 15% startup discount factor.",
    relatedService: { name: "Business Valuation Services", href: "/services/corporate-finance/business-valuation" },
    faqs: [
      {
        question: "Why does the estimator apply a discount factor?",
        answer: "Early-stage companies are discounted for lack of marketability (DLOM) and execution risks. This is standard corporate finance practice to present a realistic valuation range to institutional investors.",
      },
      {
        question: "Is this valuation certificate valid for Income Tax purposes?",
        answer: "No. For regulatory filings under Section 56(2)(viib) or FEMA capital inflows, you must secure a formal valuation certificate signed by an IBBI Registered Valuer or Category-I Merchant Banker.",
      },
    ],
  },
  "incorporation-estimator": {
    slug: "incorporation-estimator",
    name: "Incorporation Cost & Timeline Estimator",
    subhead: "Calculate MCA fees, stamp duties, and regulatory filings timelines in India.",
    persona: "startup",
    methodology: "Calculates baseline Ministry of Corporate Affairs (MCA) fees and stamp duties based on authorized capital thresholds. Stamp duty charges vary by state, with average baseline values set for South India state registrar desks.",
    relatedService: { name: "Setting Up Indian Subsidiaries", href: "/services/global-private-wealth/setting-up-indian-subsidiaries" },
    faqs: [
      {
        question: "What is authorized capital vs paid-up capital?",
        answer: "Authorized capital is the maximum value of shares the company is legally allowed to issue to shareholders. Paid-up capital is the actual money deposited by shareholders into the corporate bank account in exchange for shares.",
      },
      {
        question: "How long does it take to secure a Certificate of Incorporation?",
        answer: "If all name clearances, promoter KYC documents, and board resolutions are in order, the MCA typically processes SPICe+ filing requests within 10 to 12 working days.",
      },
    ],
  },
  "fema-checker": {
    slug: "fema-checker",
    name: "FEMA/Repatriation Eligibility Checker",
    subhead: "Determine FEMA compliance guidelines and remittance limits under RBI guidelines.",
    persona: "nri",
    methodology: "Aligns with RBI Liberalised Remittance Scheme (LRS) regulations and FEMA capital remittance caps, verifying capital repatriation criteria for inheritance, NRO account yields, and property sales.",
    relatedService: { name: "NRI Tax Planning & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" },
    faqs: [
      {
        question: "Is NRE bank interest taxable in India?",
        answer: "No. Interest earned on Non-Resident External (NRE) accounts is exempt from income tax in India. However, interest earned on Non-Resident Ordinary (NRO) accounts is taxable at source (TDS).",
      },
      {
        question: "When is Form 15CB required for outward remittances?",
        answer: "Form 15CB is a statutory CA certificate required by banks for foreign remittances exceeding INR 5 Lakhs, certifying that appropriate taxes have been paid in India.",
      },
    ],
  },
  "wealth-readiness-quiz": {
    slug: "wealth-readiness-quiz",
    name: "Wealth Structuring Readiness Quiz",
    subhead: "Evaluate estate planning, private trusts, and succession vulnerability hazards.",
    persona: "hni",
    methodology: "Computes a succession readiness score based on asset diversity, presence of business liabilities, cross-border investments, and Will registration status.",
    relatedService: { name: "Wealth & Succession Planning", href: "/services/global-private-wealth/wealth-succession-planning" },
    faqs: [
      {
        question: "Can a family trust protect assets from business liabilities?",
        answer: "Yes. An irrevocable private family trust separates personal legacy assets from corporate business entities, shielding trust property from claims by commercial creditors.",
      },
      {
        question: "Why should an HNI register a written Will?",
        answer: "A written and registered Will prevents intestate succession disputes, simplifies property title transitions, and avoids legal probate delays for beneficiaries.",
      },
    ],
  },
};

// Return static params for pre-rendering
export function generateStaticParams() {
  return [
    { slug: "gst-calculator" },
    { slug: "income-tax-calculator" },
    { slug: "valuation-estimator" },
    { slug: "incorporation-estimator" },
    { slug: "fema-checker" },
    { slug: "wealth-readiness-quiz" },
  ];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const tool = toolsDb[slug];
  if (!tool) {
    return createPageMetadata({
      title: "Advisory Tool | DSS Corp Advisory",
      description: "Interactive tax, compliance, and wealth advisory calculators.",
      path: "/tools",
    });
  }

  return createPageMetadata({
    title: `${tool.name} | DSS Corp Advisory`,
    description: tool.subhead,
    path: `/tools/${tool.slug}`,
  });
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = toolsDb[slug];

  if (!tool) {
    notFound();
  }

  // Schema Injection Objects
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.name,
    "description": tool.subhead,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "creator": {
      "@type": "AccountingService",
      "name": "DSS Corp Advisory",
      "url": "https://dsscorp.in"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tool.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Dynamic JSON-LD schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <ToolPageClient tool={tool} />
      </main>

      <Footer />
    </>
  );
}
