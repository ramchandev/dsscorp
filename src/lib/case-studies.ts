export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  persona: "startup" | "msme" | "hni" | "nri";
  description: string;
  situation: string;
  approach: string;
  result: string;
  details: string[];
  relatedService: { name: string; href: string };
}

export const caseStudiesDb: Record<string, CaseStudy> = {
  "d2c-fashion-brand-gst": {
    slug: "d2c-fashion-brand-gst",
    title: "D2C Fashion Brand GST Restructuring",
    category: "Taxation",
    metric: "~40% Reduction",
    metricLabel: "Blocked ITC Allocation",
    persona: "startup",
    description: "Restructured third-party manufacturer agreements and supply-chain shipping points to release capital trapped in mismatched GSTR-2B logs.",
    situation: "A Chennai-based D2C fashion brand had accumulated significant blocked input tax credit (ITC) from third-party manufacturing sub-contractors, with differences between internal books and dynamic GST portal records (GSTR-2B) locking up working capital.",
    approach: "DSS Corp audited three years of raw materials inputs and sub-contractor processing fees, re-structured processing terms to qualify for flat offsets, and implemented automated reconciliation rules for billing records matching.",
    result: "Released approximately 40% of previously blocked input tax credits, restoring active cashflow to operations and ensuring 100% compliance in GSTR-3B filings.",
    details: [
      "Audited three years of raw materials input tax receipts.",
      "Restructured sub-contractor processing fees to allow flat GST offsets.",
      "Established automated vendor reconciliation rules.",
    ],
    relatedService: { name: "GST & Indirect Tax Advisory", href: "/services/taxation/gst-indirect-tax" },
  },
  "automotive-components-audit": {
    slug: "automotive-components-audit",
    title: "Automotive Components Bookkeeping Migration",
    category: "Accounting & Compliance",
    metric: "100% Audit Ready",
    metricLabel: "Statutory Reporting Validation",
    persona: "msme",
    description: "Migrated legacy paper-book systems to secure cloud-based ERP systems, implementing weekly reconciliation and automated cashflow reporting.",
    situation: "A multi-state automotive component manufacturer was maintaining legacy physical ledger systems with significant delay in cash reconciliation, leading to annual audit backlogs and cashflow visibility gaps for management.",
    approach: "Migrated 18 months of financial data and location inventory ledgers into cloud ERP systems, integrated payroll compliance, and configured automated TDS deduction logs.",
    result: "Secured 100% audit-readiness for annual statutory closures and established real-time MIS reports by the 5th of every month, saving audit overheads.",
    details: [
      "Reconciled 18 months of physical bank statements.",
      "Configured multi-location inventory ledger tracking.",
      "Integrated automatic billing and TDS deduction schedules.",
    ],
    relatedService: { name: "Bookkeeping & Accounting", href: "/services/accounting-compliance/bookkeeping-accounting" },
  },
  "cross-border-tech-repatriation": {
    slug: "cross-border-tech-repatriation",
    title: "Cross-Border Executive Asset Repatriation",
    category: "Global & Private Wealth",
    metric: "100% FEMA Compliant",
    metricLabel: "Outward Capital Remittance",
    persona: "nri",
    description: "Secured Form 15CB certifications and FEMA clearance for a cross-border tech executive repatriating ancestral property sale gains.",
    situation: "A US-based NRI tech executive inherited land assets in Chennai, sold the property, and needed to repatriate the proceeds back to the US. The bank required certified tax clearance under FEMA and Form 15CA/15CB filings to avoid double taxation.",
    approach: "Analyzed Double Tax Avoidance Agreement (DTAA) parameters, prepared tax computations under Section 54/54EC reinvestments, compiled transaction audit trails, and issued partner-signed Form 15CB certificates.",
    result: "Repatriated the proceeds under the RBI Liberalised Remittance Scheme (LRS) USD 1 Million cap without any delay or compliance penalty, ensuring full FEMA alignment.",
    details: [
      "Drafted tax computation matching Double Tax Avoidance treaty exclusions.",
      "Compiled audit-ready source declarations for bank portal clearance.",
      "Processed Form 15CA filings on the Income Tax website.",
    ],
    relatedService: { name: "Repatriation & FEMA Advisory", href: "/services/global-private-wealth/repatriation-fema-advisory" },
  },
  "family-office-legacy-trust": {
    slug: "family-office-legacy-trust",
    title: "Manufacturing Legacy Family Office Structuring",
    category: "Global & Private Wealth",
    metric: "0% Probate Risk",
    metricLabel: "Estate Title Transition",
    persona: "hni",
    description: "Established private family trust frameworks to isolate manufacturing assets and legacy holdings from business debts and probate delays.",
    situation: "An HNI business family with diverse manufacturing interests wished to isolate family residential and portfolio holdings from operational commercial liabilities and avoid future probate court dispute delays during succession.",
    approach: "Drafted private family trust deeds, established structural governance committees, and registered irrevocable trusts with sub-registrar offices, optimizing capital gains tax on transferred assets.",
    result: "Shielded 100% of legacy holdings from commercial risks with a registered family trust, eliminating probate delay risks completely for next-generation beneficiaries.",
    details: [
      "Drafted comprehensive trust charter and executor vesting lists.",
      "Registered private family trusts under the Indian Trusts Act.",
      "Optimized multi-asset capital gains during transfer distributions.",
    ],
    relatedService: { name: "Wealth & Succession Planning", href: "/services/global-private-wealth/wealth-succession-planning" },
  },
};
