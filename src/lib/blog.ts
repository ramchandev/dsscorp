export interface InsightArticle {
  slug: string;
  title: string;
  subhead?: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "advisory-consulting" | "accounting-compliance" | "taxation" | "audit-assurance" | "corporate-finance" | "global-private-wealth";
  categoryName: string;
  author: { name: string; credential: string };
  persona: "startup" | "msme" | "hni" | "nri";
  directAnswer: string;
  bullets?: string[];
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedService: { name: string; href: string };
  image: string;
}

export const blogDb: Record<string, InsightArticle> = {
  "gst-e-commerce-india": {
    slug: "gst-e-commerce-india",
    title: "How is GST calculated for e-commerce sellers in India?",
    excerpt: "Learn about multi-warehouse GST registration, input tax credits, and portal compliance checklists.",
    date: "June 28, 2026",
    readTime: "5 Min Read",
    category: "taxation",
    categoryName: "Taxation",
    author: { name: "Ramanathan S", credential: "FCA, Senior Taxation Partner" },
    persona: "msme",
    directAnswer: "GST for e-commerce sellers in India is calculated at standard rates (typically 18% for services and electronic goods) applied to the taxable sales value. Sellers must register for GST irrespective of turnover thresholds once they cross state boundaries, and e-commerce operators must collect 1% Tax Collected at Source (TCS) on all supplier transactions.",
    sections: [
      {
        heading: "What are the GST registration thresholds for online sellers?",
        body: "Unlike physical stores that enjoy turnover exemptions up to INR 40 Lakhs, online sellers executing inter-state transactions must secure a mandatory GSTIN from day one under Section 24 of the CGST Act. However, recent amendments offer composition scheme relaxations for intra-state e-commerce sellers below INR 1.5 Crores, subject to specific listing constraints.",
      },
      {
        heading: "How is Tax Collected at Source (TCS) managed by portals?",
        body: "Under Section 52 of the GST Act, digital marketplace platforms (like Amazon or Flipkart) must deduct 1% TCS (0.5% CGST + 0.5% SGST or 1% IGST) from the net value of taxable supplies made through their portals. Sellers can claim full credit for this TCS in their electronic cash ledgers to offset monthly payable liabilities.",
      },
      {
        heading: "How does Input Tax Credit (ITC) offset online seller liabilities?",
        body: "Online sellers pay GST on marketplace listing fees, shipping logistics, and storage warehouse costs. All these tax outlays qualify as Input Tax Credits. By reconciling monthly purchase registers with GSTR-2B logs, sellers offset these input credits against the tax collected from retail sales, keeping net tax payouts optimized.",
      },
    ],
    faqs: [
      {
        question: "Do I need separate GST registrations for multiple warehouses?",
        answer: "Yes. Under GST rules, if you store inventory in marketplace fulfillment centers located in different states, you must secure a distinct GSTIN in each of those states as a Principal Place of Business.",
      },
      {
        question: "Can I file GST returns under composition schemes for online sales?",
        answer: "With recent amendments, e-commerce sellers with turnover under INR 1.5 Crores can opt for composition schemes for intra-state sales, but they lose the ability to collect tax from customers or claim input tax credit.",
      },
    ],
    relatedService: { name: "GST & Indirect Tax Advisory", href: "/services/taxation/gst-indirect-tax" },
    image: "/blog-gst-ecommerce.jpg"
  },
  "nri-mutual-funds-fema": {
    slug: "nri-mutual-funds-fema",
    title: "Can NRIs invest in Indian mutual funds? FEMA guidelines",
    excerpt: "Understand NRE vs NRO remittance rules, tax declarations, and double taxation treaty benefits.",
    date: "June 15, 2026",
    readTime: "6 Min Read",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    author: { name: "Krishnan N", credential: "ACA, FEMA & Cross-Border Desk" },
    persona: "nri",
    directAnswer: "Yes. Non-Resident Indians (NRIs) can legally invest in Indian mutual funds under FEMA rules. Investments must be routed through Non-Resident External (NRE) accounts for repatriable funds or Non-Resident Ordinary (NRO) accounts for non-repatriable investments, subject to strict FATCA reporting declarations.",
    sections: [
      {
        heading: "What is the difference between NRE and NRO mutual fund routing?",
        body: "Investments made via NRE accounts allow complete repatriation of both the principal capital and investment gains out of India without any tax limit ceilings. NRO account investments are non-repatriable, meaning capital transfers back overseas are limited to USD 1 Million per financial year under RBI LRS guidelines.",
      },
      {
        heading: "Are NRI mutual fund returns taxable in India?",
        body: "Yes. Capital gains are taxable in India. Short-term capital gains (STCG) on equity funds are taxed at 15%, while long-term gains (LTCG) over INR 1 Lakh are taxed at 10%. For debt mutual funds, returns are taxed as per the NRI's income tax slab rates, with automatic TDS deduction on redemption.",
      },
      {
        heading: "What are the FATCA compliance rules for US and Canada NRIs?",
        body: "Under Foreign Account Tax Compliance Act (FATCA) rules, Indian asset management companies must report investment details of US/Canada residents to tax departments. As a result, several mutual fund houses restrict or place special limits on investments from North American NRIs.",
      },
    ],
    faqs: [
      {
        question: "Do NRIs pay double tax on mutual fund redemptions?",
        answer: "No. India has Double Tax Avoidance Agreements (DTAA) with over 85 countries, including the US, UK, and Canada. NRIs can claim credits in their home countries for tax paid on redemptions in India.",
      },
      {
        question: "Is KYC mandatory for NRI mutual fund investments?",
        answer: "Yes. A complete NRI KYC registration (including foreign address proof, passport copy, NRE/NRO bank details, and PAN card) is mandatory prior to executing mutual fund transactions.",
      },
    ],
    relatedService: { name: "NRI Tax Planning & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" },
    image: "/blog-nri-mutual-funds.jpg"
  },
  "startup-compliance-checklist": {
    slug: "startup-compliance-checklist",
    title: "Startup Compliance Checklist",
    subhead: "A step-by-step statutory regulatory roadmap for early-stage founders in India.",
    excerpt: "A comprehensive checklist detailing PAN, TAN, GST, PF, ESIC, and corporate vesting setup targets.",
    date: "July 01, 2026",
    readTime: "8 Min Read",
    category: "advisory-consulting",
    categoryName: "Advisory & Consulting",
    author: { name: "Sharmila Rajan", credential: "ACA, CS, Lead Partner" },
    persona: "startup",
    directAnswer: "Early-stage founders must navigate diverse filings immediately post-incorporation. Failure to file PAN, TAN, or register for PF/ESIC within timeline triggers penalties. This checklist itemizes compliance gates for the first 180 days.",
    bullets: [
      "Vesting schedules: Allocating founder shares with four-year vesting reverse buybacks.",
      "DPIIT registration rules: Unlocking Startup India income tax exemptions.",
      "Statutory audits criteria: Thresholds for hiring independent auditors.",
      "MCA filing forms: Checklist for SPICe+ parameters, INC-20A commencement certificates.",
    ],
    sections: [
      {
        heading: "What are the first-day statutory tasks after incorporation?",
        body: "Within 30 days of incorporation, the startup must appoint its first Auditor under Section 139(6) of the Companies Act. It must also set up a corporate bank account, file for a commencement of business certificate (Form INC-20A) within 180 days, and secure local PAN/TAN details."
      },
      {
        heading: "How to claim tax benefits under Startup India (DPIIT)?",
        body: "Founders should apply for DPIIT recognition via the Startup India portal. Once recognized, startups can apply for Income Tax exemptions under Section 80-IAC (3-year tax holiday) and Section 56(2)(viib) (angel tax relief), subject to qualifying criteria on turnover and assets."
      }
    ],
    faqs: [
      {
        question: "What is the timeline for filing Form INC-20A?",
        answer: "Every company must file Form INC-20A for Commencement of Business within 180 days from its date of incorporation, before executing any commercial transactions or borrowing capital."
      }
    ],
    relatedService: { name: "Startup Advisory & Mentorship", href: "/services/advisory-consulting/startup-advisory-mentorship" },
    image: "/blog-startup-compliance.jpg"
  },
  "gst-calendar-penalty-guide": {
    slug: "gst-calendar-penalty-guide",
    title: "GST Filing Calendar & Penalty Guide",
    subhead: "Important recurring dates and late-filing penalty rules for registered GST units.",
    excerpt: "Filing dates and penalty calculations for GSTR-1, GSTR-3B, and annual GSTR-9/9C reconciliation.",
    date: "June 20, 2026",
    readTime: "6 Min Read",
    category: "taxation",
    categoryName: "Taxation",
    author: { name: "Ramanathan S", credential: "FCA, Senior Taxation Partner" },
    persona: "msme",
    directAnswer: "GST portals enforce automated late fees of INR 50 per day for delay in GSTR-1 or GSTR-3B filings. In addition, Input Tax Credit (ITC) reconciliation mismatches trigger tax scrutiny. This calendar lists filing schedules and audit guidelines.",
    bullets: [
      "GSTR-1 sales logs: Monthly filing schedules due by the 11th.",
      "GSTR-3B tax offsets: Payments and credit claims due by the 20th.",
      "Input tax matching: Reconciling buying invoices with GSTR-2B dynamic portal records.",
      "GSTR-9/9C reconciliation: Annual thresholds, audit triggers, and certification forms.",
    ],
    sections: [
      {
        heading: "What are the recurring GST filing due dates in India?",
        body: "GSTR-1 (monthly outward supply details) is due by the 11th of the following month, while GSTR-3B (consolidated monthly summary and tax payout) is due by the 20th of the following month. Quarterly return option (QRMP scheme) exists for entities under INR 5 Crores turnover.",
      },
      {
        heading: "How does GSTR-2B affect Input Tax Credit offsets?",
        body: "GSTR-2B is a static, auto-generated statement showing eligible Input Tax Credits. Buyers can only offset tax liabilities with inputs that vendors have formally uploaded, requiring regular ledger cross-checking to verify vendor compliance.",
      },
    ],
    faqs: [
      {
        question: "What is the penalty rate for delayed GST returns?",
        answer: "The late fee is INR 50 per day (INR 25 CGST + INR 25 SGST) up to a maximum cap of INR 5,000 for regular filers, plus interest at 18% per annum on unpaid tax liabilities.",
      },
    ],
    relatedService: { name: "GST & Indirect Tax Advisory", href: "/services/taxation/gst-indirect-tax" },
    image: "/blog-gst-calendar.jpg"
  },
  "succession-planning-primer": {
    slug: "succession-planning-primer",
    title: "Succession Planning Primer",
    subhead: "Private trusts, registered wills, and corporate estate transition guides.",
    excerpt: "A guide detailing private trust registrations, wills, and legacy estate protections for HNI families.",
    date: "May 10, 2026",
    readTime: "7 Min Read",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    author: { name: "Krishnan N", credential: "ACA, FEMA & Cross-Border Desk" },
    persona: "hni",
    directAnswer: "Transitioning family wealth across generations requires insulating assets from probate delays and partition disputes. This guide reviews trust creations, Will registers, and tax-efficient transfer vehicles in India.",
    bullets: [
      "Private Trusts: Establishing irrevocable trusts to shield family assets from business liabilities.",
      "Will registration: Legal formats, executor selections, and medical probate triggers.",
      "Asset transfers: Taxation rules on gifting real estate and shares to family members.",
      "Family Office: Structuring legacy committees to oversee multi-generational wealth.",
    ],
    sections: [
      {
        heading: "Why structure assets under a Private Family Trust?",
        body: "A private trust holds legal title to family assets, isolating them from commercial creditors or personal debt claims. It avoids probate court delays after the founder passes, allowing trustees to distribute benefits according to terms.",
      },
      {
        heading: "What are the tax implications of transferring assets to a trust?",
        body: "Under Section 56(2)(x) of the IT Act, transferring assets to an irrevocable trust created for the sole benefit of relatives is generally exempt from income tax, though stamp duty applies on registered properties transfer.",
      },
    ],
    faqs: [
      {
        question: "Is stamp duty applicable on transferring real estate to a trust?",
        answer: "Yes, stamp duty is payable on the transfer of real estate title to the trust deed. Stamp duty rates vary by state, often matching gift deed duties or standard sale rates.",
      },
    ],
    relatedService: { name: "Wealth & Succession Planning", href: "/services/global-private-wealth/wealth-succession-planning" },
    image: "/blog-succession-planning.jpg"
  },
  "nri-repatriation-fema-guide": {
    slug: "nri-repatriation-fema-guide",
    title: "NRI Repatriation & FEMA Guide 2026",
    subhead: "repatriating property sale proceeds and inheritance funds out of India.",
    excerpt: "remittance guidelines and Form 15CA/15CB certificate compliance parameters.",
    date: "April 18, 2026",
    readTime: "9 Min Read",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    author: { name: "Krishnan N", credential: "ACA, FEMA & Cross-Border Desk" },
    persona: "nri",
    directAnswer: "repatriating funds from Indian property sales requires clearing capital gains taxes and complying with RBI's annual USD 1 Million LRS caps. This guide maps FEMA bank compliance codes and Form 15CA/15CB processes.",
    bullets: [
      "Remittance Caps: Rules for transferring funds up to USD 1 Million per year from NRO accounts.",
      "Form 15CA/15CB: Step-by-step tax declaration filing with CA certification.",
      "Property gains: Tax deductions, TDS exemptions, and lower tax certificate filings.",
      "FEMA declarations: Bank report codes and inward remittance reporting structures.",
    ],
    sections: [
      {
        heading: "What is the process for repatriating property sale funds?",
        body: "The buyer typically deducts TDS at 20%+ on the property sale price. The NRI must secure a tax clearance certificate (Form 15CA) and a CA audit report (Form 15CB) certifying that appropriate taxes have been paid, before the AD bank executes the outward foreign exchange remittance.",
      },
      {
        heading: "How is the USD 1 Million FEMA annual limit tracked?",
        body: "AD Category-I banks track remittances under the NRO account route, validating that the total funds repatriated by the NRI out of India across all banks do not exceed USD 1 Million per financial year.",
      },
    ],
    faqs: [
      {
        question: "Can inheritance funds be repatriated without paying taxes in India?",
        answer: "India has no inheritance tax, so inheriting assets is tax-free. However, any income generated from those assets (like rent or interest) or capital gains from selling them are taxable, requiring Form 15CA/15CB filings for remittance.",
      },
    ],
    relatedService: { name: "Repatriation & FEMA Advisory", href: "/services/global-private-wealth/repatriation-fema-advisory" },
    image: "/blog-nri-repatriation.jpg"
  },
};
