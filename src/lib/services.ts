// Shared services database for DSS Corp Advisory money pages

export interface ServicePageData {
  slug: string;
  category: string;
  categoryName: string;
  serviceName: string;
  tier: 1 | 2; // controls which optional sections render
  heroHeadline: string;
  directAnswer: string; // The GEO-critical opening paragraph
  primaryPersona: "startup" | "msme" | "hni" | "nri";
  whoNeedsThis: string[];
  scopeOfWork: string[];
  process: { step: string; description: string; timeframe?: string }[];
  differentiators?: string[]; // Tier 1 only
  relatedCaseStudy?: {
    title: string;
    metric: string;
    description: string;
  };
  faqs: { question: string; answer: string }[];
  relatedServices: { name: string; href: string }[];
}

export interface CategoryData {
  slug: string;
  name: string;
  directAnswer: string;
  primaryPersona: "startup" | "msme" | "hni" | "nri";
  crossSuggestion: { text: string; href: string };
}

export const categoriesDb: Record<string, CategoryData> = {
  "advisory-consulting": {
    slug: "advisory-consulting",
    name: "Advisory & Consulting",
    directAnswer: "Advisory & Consulting services provide corporate formation, structuring, scaling, and corporate governance consulting. We help founders and boards set up clean, investable entities under Indian company laws.",
    primaryPersona: "startup",
    crossSuggestion: {
      text: "Need capital structuring alongside advisory?",
      href: "/services/corporate-finance",
    },
  },
  "accounting-compliance": {
    slug: "accounting-compliance",
    name: "Accounting & Compliance",
    directAnswer: "Accounting & Compliance services manage statutory books, weekly MIS reports, payroll, and corporate secretarial tasks. We keep domestic operations audit-ready and compliant under the Companies Act.",
    primaryPersona: "msme",
    crossSuggestion: {
      text: "Preparing records for corporate tax audits?",
      href: "/services/taxation",
    },
  },
  "taxation": {
    slug: "taxation",
    name: "Taxation",
    directAnswer: "Taxation services provide comprehensive direct and indirect corporate tax planning, advance tax management, and litigation representation. We optimize tax positions and manage GST audit clearances.",
    primaryPersona: "msme",
    crossSuggestion: {
      text: "Need monthly ledger bookkeeping alongside tax filings?",
      href: "/services/accounting-compliance",
    },
  },
  "audit-assurance": {
    slug: "audit-assurance",
    name: "Audit & Assurance",
    directAnswer: "Audit & Assurance provides independent statutory auditing, internal control audits, forensic investigations, and due diligence checks. We ensure accounts present a true and fair view of financial health.",
    primaryPersona: "msme",
    crossSuggestion: {
      text: "Preparing for corporate restructuring and valuation?",
      href: "/services/corporate-finance",
    },
  },
  "corporate-finance": {
    slug: "corporate-finance",
    name: "Corporate Finance",
    directAnswer: "Corporate Finance services advise on fundraising, debt/equity syndication, valuations, and M&A transactions. We structure corporate capital to optimize expansion costs and protect founder control.",
    primaryPersona: "startup",
    crossSuggestion: {
      text: "Need statutory due diligence audits before closing deals?",
      href: "/services/audit-assurance",
    },
  },
  "global-private-wealth": {
    slug: "global-private-wealth",
    name: "Global & Private Wealth",
    directAnswer: "Global & Private Wealth services provide FEMA advisory, repatriation clearances, Form 15CA/15CB certificates, offshore tax optimization, and family wealth trust structures. We guide global families and HNIs through regulatory hurdles in India.",
    primaryPersona: "nri",
    crossSuggestion: {
      text: "Looking for corporate valuation or startup funding assistance?",
      href: "/services/corporate-finance",
    },
  },
};

export const servicesDb: Record<string, ServicePageData> = {
  // === TIER 1 money pages ===
  "startup-advisory-mentorship": {
    slug: "startup-advisory-mentorship",
    category: "advisory-consulting",
    categoryName: "Advisory & Consulting",
    serviceName: "Startup Advisory & Mentorship",
    tier: 1,
    heroHeadline: "Founder-focused startup advisory that guides you from capitalization to statutory compliance",
    directAnswer: "Startup Advisory is a specialized mentorship and corporate planning track designed for early-stage entrepreneurs. It bridges the gap between initial entity formation, shareholder equity structuring, regulatory tax registrations, and compliance scaling, ensuring founders maintain clean equity records for future institutional investment.",
    primaryPersona: "startup",
    whoNeedsThis: [
      "Founders structuring founder shares and vesting schedules.",
      "Early-stage startups setting up clean capitalization tables.",
      "Companies preparing to raise angel or seed venture funding.",
      "Enterprises looking to apply for DPIIT startup recognition.",
    ],
    scopeOfWork: [
      "Corporate structuring advice and validation of shareholder agreements.",
      "DPIIT startup registration and tax exemption facilitation.",
      "Capital table modeling and equity vesting plan setup.",
      "Strategic mentoring on regulatory, legal, and financial frameworks.",
    ],
    process: [
      { step: "Initial Scoping", description: "Mapping capitalization goals and operational needs.", timeframe: "2-3 Days" },
      { step: "Structure Design", description: "Drafting capital allocations and equity schedules.", timeframe: "1 Week" },
      { step: "DPIIT Filing", description: "Filing for government registration and tax grants.", timeframe: "1-2 Weeks" },
      { step: "Ongoing Compliance Desk", description: "Activating statutory checklists and tracking board milestones.", timeframe: "Monthly support" },
    ],
    differentiators: [
      "Direct partner-level advisory for complex equity structuring, bypassing junior consultants.",
      "Recognized networks with active early-stage incubators in South India.",
      "Currently advising 50+ scaling startups across India on regulatory compliance.",
    ],
    relatedCaseStudy: {
      title: "Chennai-based D2C Fashion Brand",
      metric: "~40% Reduction",
      description: "Restructured manufacturer contract structures and automated tax compliance schedules to free up locked operational capital.",
    },
    faqs: [
      {
        question: "Why should a startup register for DPIIT recognition?",
        answer: "DPIIT recognition unlocks crucial income tax exemptions (like Section 56(2)(viib) protection), access to government funding programs, simplified compliance checks, and faster patent registrations.",
      },
      {
        question: "How do we allocate founder vesting schedules under Indian law?",
        answer: "Founder shares are typically structured with a four-year vesting schedule and a one-year cliff. Under Indian law, this is executed via custom Share Purchase Agreements containing reverse-vesting buyback provisions.",
      },
    ],
    relatedServices: [
      { name: "Setting Up Indian Subsidiaries", href: "/services/global-private-wealth/setting-up-indian-subsidiaries" },
      { name: "Fundraising & Capital Structuring", href: "/services/corporate-finance/fundraising-capital-structuring" },
      { name: "GST & Indirect Tax", href: "/services/taxation/gst-indirect-tax" },
    ],
  },
  "bookkeeping-accounting": {
    slug: "bookkeeping-accounting",
    category: "accounting-compliance",
    categoryName: "Accounting & Compliance",
    serviceName: "Bookkeeping & Accounting",
    tier: 1,
    heroHeadline: "Structured bookkeeping that keeps your corporate finances audit-ready and MIS-driven",
    directAnswer: "Bookkeeping and Accounting is the systematic recording of financial transactions, payroll compliance, accounts payable/receivable management, and MIS reporting. It ensures compliance with Indian Accounting Standards (Ind AS) and the Companies Act, providing management with accurate financial health reports.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "MSMEs requiring structured statutory books and payroll management.",
      "Scaling corporations transitioning from informal accounting to ERPs.",
      "Businesses seeking weekly financial reporting and cashflow visibility.",
    ],
    scopeOfWork: [
      "Statutory ledger maintenance under Ind AS and GAAP.",
      "Accounts payable, receivable, and bank reconciliation processing.",
      "Weekly/Monthly MIS reports highlighting EBITDA and working capital.",
      "Filing monthly TDS, GST, and PF/ESIC statutory payroll returns.",
    ],
    process: [
      { step: "System Setup", description: "Migrating charts of accounts to secure cloud-based software.", timeframe: "1 Week" },
      { step: "Ledger Update", description: "Processing transactions, expense claims, and invoices daily.", timeframe: "Continuous" },
      { step: "Reconciliation", description: "Matching bank statements and GST portal ledgers.", timeframe: "Weekly" },
      { step: "MIS Reporting", description: "Delivering profit/loss statements, cashflows, and tax provisions.", timeframe: "Monthly (by 5th)" },
    ],
    differentiators: [
      "Rigid double-check validation of all entries by qualified accountants.",
      "Real-time integration with Tally, Zoho Books, or custom ERP systems.",
      "Managing accounts for 150+ MSMEs and growth-stage enterprises in South India.",
    ],
    relatedCaseStudy: {
      title: "Multi-State Automotive Components MSME",
      metric: "100% Audit Ready",
      description: "Implemented real-time transaction processing and reconciliation structures, reducing end-of-year tax filing overheads completely.",
    },
    faqs: [
      {
        question: "What is an MIS report and why does a business owner need it?",
        answer: "Management Information System (MIS) reports are structured financial statements (P&L, Balance Sheet, Cash Flow, Aging Analysis) prepared monthly to give owners data-driven visibility into corporate margins and expenses.",
      },
      {
        question: "Are virtual accounting services legally valid for statutory audits?",
        answer: "Yes. Accounting records maintained in electronic form on cloud services are fully valid under Section 128 of the Companies Act, provided they remain accessible in India and maintain audit trails.",
      },
    ],
    relatedServices: [
      { name: "GST & Indirect Tax", href: "/services/taxation/gst-indirect-tax" },
      { name: "Statutory Audits", href: "/services/audit-assurance/statutory-audits" },
      { name: "Business Valuation", href: "/services/corporate-finance/business-valuation" },
    ],
  },
  "gst-indirect-tax": {
    slug: "gst-indirect-tax",
    category: "taxation",
    categoryName: "Taxation",
    serviceName: "GST & Indirect Tax",
    tier: 1,
    heroHeadline: "Optimize your Input Tax Credits and secure full GST compliance without cashflow locks",
    directAnswer: "GST and Indirect Tax advisory covers GST registration, monthly return filings, Input Tax Credit (ITC) optimization, HSN code classification, and tax litigation representation. It ensures businesses comply with central and state tax acts while preventing cashflow blockages from mismatched tax entries.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "E-commerce brands navigating multi-warehouse GST registrations.",
      "Exporters seeking prompt refund claims under LUT schemes.",
      "MSMEs facing tax scrutiny or reconciliation demands from GST portals.",
    ],
    scopeOfWork: [
      "Filing monthly GSTR-1, GSTR-3B, and annual GSTR-9/9C reconciliation.",
      "Dynamic reconciliation matching between GSTR-2B and purchase registers.",
      "Drafting appeal replies and representing cases before GST officers.",
      "Advisory on cross-border transactions, import-export duties, and LUT applications.",
    ],
    process: [
      { step: "Data Aggregation", description: "Aggregating sales and purchase logs from invoicing software.", timeframe: "Monthly (by 5th)" },
      { step: "ITC Match", description: "Matching Input Tax Credit ledger with GSTR-2B details.", timeframe: "Monthly (by 8th)" },
      { step: "Return Filing", description: "Drafting GSTR-1 and GSTR-3B return schedules.", timeframe: "Monthly (by 15th-20th)" },
      { step: "Annual Review", description: "Filing GST audits and drafting annual tax reconciliation certificates.", timeframe: "Yearly" },
    ],
    differentiators: [
      "Custom automated tool for matching ITC transactions, minimizing blocked credits.",
      "Dedicated tax litigation desk led by experienced indirect tax experts.",
      "Processed 10,000+ GST filings with a clean, zero-penalty track record.",
    ],
    relatedCaseStudy: {
      title: "Chennai-based D2C Fashion Brand",
      metric: "~40% Reduction",
      description: "Restructured subcontractor billing paths, unlocking blocked GSTR-2B credits and restoring active working capital.",
    },
    faqs: [
      {
        question: "How can we claim GST refunds on export services?",
        answer: "Exporters can claim refunds by either executing a Letter of Undertaking (LUT) to export without paying IGST, then claiming refunds on accumulated Input Tax Credits, or by exporting with payment of IGST and claiming refunds on tax paid.",
      },
      {
        question: "What happens if our vendor fails to upload their GSTR-1?",
        answer: "If a vendor fails to file, the tax payment will not reflect in your GSTR-2B. Under Section 16(2)(aa) of the GST Act, you cannot claim ITC for that invoice, which requires proactive ledger monitoring and vendor vendor-compliance checks.",
      },
    ],
    relatedServices: [
      { name: "Bookkeeping & Accounting", href: "/services/accounting-compliance/bookkeeping-accounting" },
      { name: "Statutory Audits", href: "/services/audit-assurance/statutory-audits" },
      { name: "NRI Tax Planning & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" },
    ],
  },
  "statutory-audits": {
    slug: "statutory-audits",
    category: "audit-assurance",
    categoryName: "Audit & Assurance",
    serviceName: "Statutory Audits",
    tier: 1,
    heroHeadline: "Rigorous statutory audits that ensure regulatory compliance and investor confidence",
    directAnswer: "Statutory Audits are independent examinations of corporate financial records required under Section 139 of the Companies Act. They provide shareholders, institutional lenders, and tax regulators with absolute assurance that corporate accounts present a true and fair view of financial health.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Incorporated entities crossing statutory auditing thresholds.",
      "Companies preparing to raise venture capital or secure corporate debt.",
      "Subsidiaries of foreign corporations requiring domestic financial clearance.",
    ],
    scopeOfWork: [
      "Independent verification of balance sheets, profits, and ledger entries.",
      "Evaluation of internal control structures and risk mitigation frameworks.",
      "Certification of compliance under Companies Act and Accounting Standards.",
      "Drafting audit reports and CARO filings for MCA submissions.",
    ],
    process: [
      { step: "Audit Planning", description: "Mapping audit timelines, materiality levels, and sample pools.", timeframe: "3 Days" },
      { step: "Fieldwork", description: "Verifying cash logs, statutory registers, and banking reconciliations.", timeframe: "2 Weeks" },
      { step: "Query Resolution", description: "Discussing accounting treatments and control gaps with management.", timeframe: "1 Week" },
      { step: "Report Release", description: "Issuing formal Independent Auditor Report and CARO disclosure.", timeframe: "1 Week" },
    ],
    differentiators: [
      "Rigorous, non-compromised auditing standard respected by major corporate banks.",
      "Partner-led field reviews focusing on transaction control systems.",
      "Over 20 years of corporate audit and risk advisory expertise in South India.",
    ],
    faqs: [
      {
        question: "What is CARO and which companies does it apply to?",
        answer: "Companies (Auditor's Report) Order (CARO) is a strict reporting framework requiring auditors to list disclosures on assets, inventories, internal audits, and loans. It applies to all public companies and private entities crossing specific turnover or asset thresholds.",
      },
      {
        question: "How can our business prepare for a statutory audit?",
        answer: "Ensure all bank statements, vendor reconciliations, statutory register updates, fixed asset registers, and payroll TDS payments are fully reconciled and logged before auditing begins.",
      },
    ],
    relatedServices: [
      { name: "Bookkeeping & Accounting", href: "/services/accounting-compliance/bookkeeping-accounting" },
      { name: "GST & Indirect Tax", href: "/services/taxation/gst-indirect-tax" },
      { name: "Business Valuation", href: "/services/corporate-finance/business-valuation" },
    ],
  },
  "business-valuation": {
    slug: "business-valuation",
    category: "corporate-finance",
    categoryName: "Corporate Finance",
    serviceName: "Business Valuation",
    tier: 1,
    heroHeadline: "Defensible corporate valuations that satisfy regulatory compliance and deal mandates",
    directAnswer: "Business Valuation is the process of estimating the economic worth of an enterprise, equity, or asset class. It leverages DCF modeling, transaction comparables, and asset methods to deliver Registered Valuer and Category-1 Merchant Banker certifications required under RBI, Income Tax, and Insolvency acts.",
    primaryPersona: "startup",
    whoNeedsThis: [
      "Startups issuing equity shares or convertibles to foreign investors.",
      "M&A teams planning joint venture acquisitions or asset transfers.",
      "Promoters valuing intellectual property or intangible assets for tax approvals.",
    ],
    scopeOfWork: [
      "DCF, market multiples, and asset net-worth valuation modeling.",
      "RBI FDI valuation certificates (FC-GPR compliance).",
      "Income tax valuation reports (Section 56(2)(viib) / Rule 11UA).",
      "Valuation of ESOP schemes and option allocations.",
    ],
    process: [
      { step: "Scoping Call", description: "Mapping model parameters and selecting the right valuation methodology.", timeframe: "2 Days" },
      { step: "Data Review", description: "Analyzing 5-year financial projections, market data, and business plans.", timeframe: "1 Week" },
      { step: "Model Building", description: "Constructing DCF models and calculating cost of capital/WACC.", timeframe: "1 Week" },
      { step: "Report Release", description: "Issuing formal valuation reports signed by a Registered Valuer.", timeframe: "3 Days" },
    ],
    differentiators: [
      "Certified Registered Valuer (IBBI) and Category-I Merchant Banker associations.",
      "Defensible models that pass RBI and Income Tax scrutiny with zero litigation history.",
      "Delivered 120+ regulatory valuation reports signed by Registered Valuers.",
    ],
    relatedCaseStudy: {
      title: "Multi-State Automotive Components MSME",
      metric: "₹1.8 Cr Saved",
      description: "Conducted complex business valuations during restructuring to clear potential transaction scrutiny from state tax authorities.",
    },
    faqs: [
      {
        question: "When is an IBBI Registered Valuer report mandatory?",
        answer: "A Registered Valuer report is mandatory under the Companies Act for issuing new shares, buying back shares, business transfers, mergers, or transferring equity assets to related corporate parties.",
      },
      {
        question: "What is the difference between DCF and Net Asset value methods?",
        answer: "Discounted Cash Flow (DCF) values a company based on the present value of its projected future cashflows, representing a growth-oriented view. The Net Asset Value (NAV) method values it based on book value of net assets, representing a liquidation-oriented view.",
      },
    ],
    relatedServices: [
      { name: "Fundraising & Capital Structuring", href: "/services/corporate-finance/fundraising-capital-structuring" },
      { name: "Startup Advisory & Mentorship", href: "/services/advisory-consulting/startup-advisory-mentorship" },
      { name: "Statutory Audits", href: "/services/audit-assurance/statutory-audits" },
    ],
  },
  "fundraising-capital-structuring": {
    slug: "fundraising-capital-structuring",
    category: "corporate-finance",
    categoryName: "Corporate Finance",
    serviceName: "Fundraising & Capital Structuring",
    tier: 1,
    heroHeadline: "Structure debt and equity capital to protect founder equity and fund long-term growth",
    directAnswer: "Fundraising and Capital Structuring is the process of mapping corporate capital requirements, structuring debt/equity mixes, preparing investment packages, and advising on transaction mechanics. It ensures businesses secure expansion funding while optimizing financing costs and retaining founder voting control.",
    primaryPersona: "startup",
    whoNeedsThis: [
      "Growth-stage companies raising structured debt or equity finance.",
      "Promoters seeking non-dilutive working capital debt structures.",
      "Businesses planning joint ventures or strategic corporate partnerships.",
    ],
    scopeOfWork: [
      "Financial modeling, sensitivity analyses, and business plan reviews.",
      "Structuring debt syndication proposals for corporate banks.",
      "Advising on term sheets, security structures, and covenants.",
      "Due diligence assistance and data room preparation support.",
    ],
    process: [
      { step: "Scoping Deck", description: "Assessing cash profiles and identifying optimal funding tools.", timeframe: "3 Days" },
      { step: "Model Building", description: "Constructing 5-year financial models and stress-testing cashflows.", timeframe: "2 Weeks" },
      { step: "Deal Structuring", description: "Advising on term sheets and drafting deal documents.", timeframe: "1 Week" },
      { step: "Due Diligence Support", description: "Coordinating audits and resolving investor transaction queries.", timeframe: "Ongoing" },
    ],
    differentiators: [
      "Experienced advisory partners with backgrounds in commercial corporate banking.",
      "Strong focus on non-dilutive debt syndication alongside equity structures.",
      "Assisted in raising ₹500Cr+ in corporate debt and equity capital.",
    ],
    faqs: [
      {
        question: "What is non-dilutive capital and how can a startup access it?",
        answer: "Non-dilutive capital refers to funding that does not require giving away equity. Startups access this via venture debt, revenue-based financing, or working capital bank facilities syndication.",
      },
      {
        question: "How do we prepare our financial data room for institutional due diligence?",
        answer: "Organize three years of audited accounts, monthly MIS charts, tax compliance certificates, shareholder registers, client contracts, and forward cash projections into a secure, indexed drive.",
      },
    ],
    relatedServices: [
      { name: "Business Valuation", href: "/services/corporate-finance/business-valuation" },
      { name: "Startup Advisory & Mentorship", href: "/services/advisory-consulting/startup-advisory-mentorship" },
      { name: "Statutory Audits", href: "/services/audit-assurance/statutory-audits" },
    ],
  },
  "nri-tax-planning-compliance": {
    slug: "nri-tax-planning-compliance",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    serviceName: "NRI Tax Planning & Compliance",
    tier: 1,
    heroHeadline: "Seamless NRI tax compliance and FEMA-compliant asset repatriation solutions",
    directAnswer: "NRI Tax Planning and Compliance involves filing income tax returns, optimizing foreign source income, securing double taxation relief (DTAA), obtaining Form 15CA/15CB certificates, and navigating FEMA rules for property sales and capital asset repatriation.",
    primaryPersona: "nri",
    whoNeedsThis: [
      "Non-resident Indians repatriating funds from property sales in India.",
      "NRIs managing NRE/NRO banking structures and domestic tax obligations.",
      "Expatriates needing double taxation relief (DTAA) on overseas wages.",
    ],
    scopeOfWork: [
      "Preparing and filing NRI Income Tax returns in India.",
      "Issuing Form 15CA and Form 15CB certifications for fund transfers.",
      "FEMA compliance advisory on capital transfers and property sale limits.",
      "Applying for lower tax deduction certificates (TDS clearances).",
    ],
    process: [
      { step: "Status Check", description: "Evaluating residency criteria and banking structures.", timeframe: "2 Days" },
      { step: "Tax Analysis", description: "Identifying DTAA relief caps and capital gains offsets.", timeframe: "3-4 Days" },
      { step: "Form 15CB Issue", description: "Partner-level certification of fund source audit trail.", timeframe: "2-3 Days" },
      { step: "Portal Transfer", description: "Uploading Form 15CA to bank portals for capital dispatch.", timeframe: "1 Day" },
    ],
    differentiators: [
      "In-depth expertise in FEMA regulations, ensuring fast bank approvals.",
      "Certified partner-level sign-offs on all Form 15CA/15CB tax clearances.",
      "Processed 500+ cross-border capital remittances and FEMA clearances.",
    ],
    relatedCaseStudy: {
      title: "Cross-Border Tech Executive (US/India NRI)",
      metric: "100% Compliant",
      description: "Structured property sale remittances and secured Form 15CB clearances, avoiding tax exposure under DTAA guidelines.",
    },
    faqs: [
      {
        question: "How much money can an NRI repatriate out of India annually?",
        answer: "Under the Liberalised Remittance Scheme (LRS) and FEMA rules, an NRI can repatriate up to USD 1 Million per financial year from their NRO account, subject to producing Form 15CA/15CB tax clearances.",
      },
      {
        question: "What is a Form 15CB and when is it mandatory?",
        answer: "Form 15CB is an official certificate issued by a Chartered Accountant certifying that appropriate taxes have been paid on remittances. It is mandatory for transferring foreign remittances exceeding INR 5 Lakhs.",
      },
    ],
    relatedServices: [
      { name: "Wealth & Succession Planning", href: "/services/global-private-wealth/wealth-succession-planning" },
      { name: "GST & Indirect Tax", href: "/services/taxation/gst-indirect-tax" },
      { name: "Setting Up Indian Subsidiaries", href: "/services/global-private-wealth/setting-up-indian-subsidiaries" },
    ],
  },
  "setting-up-indian-subsidiaries": {
    slug: "setting-up-indian-subsidiaries",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    serviceName: "Setting Up Indian Subsidiaries",
    tier: 1,
    heroHeadline: "Establish your Indian corporate presence with robust legal and regulatory clearance",
    directAnswer: "Setting up an Indian Subsidiary involves registering a corporate entity as a Wholly Owned Subsidiary (WOS), Joint Venture, or Liaison Office of a foreign company. It requires navigating strict RBI guidelines, FEMA capital inflow regulations, MCA company registrations, and post-incorporation tax compliance.",
    primaryPersona: "startup",
    whoNeedsThis: [
      "Foreign corporations establishing an operational footprint in India.",
      "Multinational brands setting up local technology or development centers.",
      "Cross-border entities establishing joint ventures with domestic partners.",
    ],
    scopeOfWork: [
      "Strategic advice on entity options (Wholly Owned Subsidiary, Branch, Liaison).",
      "Drafting charters, articles, and board resolutions for foreign parent company.",
      "Filing and processing PAN, TAN, GST, and corporate bank setup clearances.",
      "FEMA declarations and RBI compliance filing for inbound share capital.",
    ],
    process: [
      { step: "Entity Scoping", description: "Evaluating liability patterns and tax efficiency metrics.", timeframe: "2 Days" },
      { step: "Charter Drafting", description: "Aligning MoA and AoA documentation with foreign parent resolutions.", timeframe: "3-4 Days" },
      { step: "Incorporation", description: "Securing PAN, TAN, and Certificate of Incorporation from MCA.", timeframe: "10-12 Days" },
      { step: "FEMA Filings", description: "RBI capital inflow filing (FC-GPR) for initial share allotments.", timeframe: "3 Weeks" },
    ],
    differentiators: [
      "Specialized cross-border legal advisory team with deep RBI regulatory expertise.",
      "Fully digital compliance dashboard tailored for international parent entities.",
      "Successfully established 25+ multinational subsidiaries in South India.",
    ],
    faqs: [
      {
        question: "Can a foreign national be a director of an Indian subsidiary?",
        answer: "Yes. A foreign national can be appointed as a director. However, at least one director on the Board must be a resident of India (present in India for 182 days or more during the financial year).",
      },
      {
        question: "What is the FC-GPR filing timeline for inbound capital?",
        answer: "The company must report capital inflows to the Reserve Bank of India via the FIRMS portal within 30 days of issuing shares to the foreign parent company.",
      },
    ],
    relatedServices: [
      { name: "Startup Advisory & Mentorship", href: "/services/advisory-consulting/startup-advisory-mentorship" },
      { name: "GST & Indirect Tax", href: "/services/taxation/gst-indirect-tax" },
      { name: "NRI Tax Planning & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" },
    ],
  },
  "wealth-succession-planning": {
    slug: "wealth-succession-planning",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    serviceName: "Wealth & Succession Planning",
    tier: 1,
    heroHeadline: "Protect your family legacy and transfer assets with private trust frameworks",
    directAnswer: "Wealth and Succession Planning is the strategic structuring of private assets, creation of family trusts, drafting of wills, and implementation of tax-insulated estate transfer mechanisms. It ensures seamless intergenerational wealth transfer while protecting assets from probate delays and partition disputes.",
    primaryPersona: "hni",
    whoNeedsThis: [
      "HNIs seeking to isolate personal wealth from business liabilities.",
      "Family business owners planning orderly corporate succession.",
      "Promoters organizing cross-border asset transfers for dependents.",
    ],
    scopeOfWork: [
      "Structuring and registering Private Family Trusts.",
      "Drafting wills, partition documents, and shareholder agreements.",
      "Advising on tax-efficient asset transfers to next-generation members.",
      "Organizing family office governance and trust frameworks.",
    ],
    process: [
      { step: "Discovery Call", description: "Understanding family assets, beneficiaries, and succession goals.", timeframe: "1 Week" },
      { step: "Trust Structure", description: "Designing private trust options and matching control provisions.", timeframe: "2 Weeks" },
      { step: "Charter Drafting", description: "Drafting Trust Deeds, Wills, and structural charters.", timeframe: "2 Weeks" },
      { step: "Registration", description: "Executing and registering deeds at sub-registrar desks.", timeframe: "1 Week" },
    ],
    differentiators: [
      "Complete operational confidentiality with direct senior partner engagement.",
      "Multi-disciplinary advisory combining trust law with corporate tax planning.",
      "Structured 40+ private family trusts for legacy insulation and asset protection.",
    ],
    relatedCaseStudy: {
      title: "Single-Family Office (Manufacturing Legacy)",
      metric: "0% Probate Risk",
      description: "Successfully established a private trust framework to isolate family assets from potential corporate credit risks and legal disputes.",
    },
    faqs: [
      {
        question: "What is the primary advantage of a Private Family Trust?",
        answer: "A Private Family Trust protects family assets from commercial business liabilities, avoids probate delays upon estate transition, and allows custom control over beneficiary payouts.",
      },
      {
        question: "Is trust registration mandatory for estate tax insulation?",
        answer: "Yes. To transfer real estate or capital assets to a trust, the trust deed must be registered with the sub-registrar under the Indian Trusts Act, ensuring clean legal title transfer.",
      },
    ],
    relatedServices: [
      { name: "NRI Tax Planning & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" },
      { name: "Business Valuation", href: "/services/corporate-finance/business-valuation" },
      { name: "Startup Advisory & Mentorship", href: "/services/advisory-consulting/startup-advisory-mentorship" },
    ],
  },

  // === TIER 2 standard pages ===
  "business-structuring-restructuring": {
    slug: "business-structuring-restructuring",
    category: "advisory-consulting",
    categoryName: "Advisory & Consulting",
    serviceName: "Business Structuring & Restructuring",
    tier: 2,
    heroHeadline: "Optimize operational control and tax liability through strategic entity structuring",
    directAnswer: "Business Structuring and Restructuring is the legal and corporate configuration of commercial business units. It includes advising on sole proprietorships, partnerships, LLPs, Private Limiteds, and executing structural spin-offs or mergers to scale operational agility and optimize tax liabilities.",
    primaryPersona: "startup",
    whoNeedsThis: [
      "Growing companies restructuring partnerships into LLPs or corporate structures.",
      "Firms dividing operations into multiple holding and subsidiary layers.",
      "Businesses seeking joint venture structures or promoter equity adjustments.",
    ],
    scopeOfWork: [
      "Evaluating liability structures and advising on entity choices.",
      "Drafting partner, shareholder, and investment allocation deeds.",
      "Executing conversion filings with MCA and registrar desks.",
    ],
    process: [
      { step: "Operational Audit", description: "Analyzing current entity assets and operational overheads." },
      { step: "Drafting", description: "Preparing conversion charters, shareholder terms, and board files." },
      { step: "MCA Processing", description: "Filing name changes and fresh corporate setups." },
    ],
    faqs: [
      { question: "What is the key benefit of converting a Partnership into an LLP?", answer: "An LLP provides limited liability protection to partners and has distinct legal identity, protecting personal assets from business debt claims." },
      { question: "How long does it take to convert a partnership to a private limited company?", answer: "The entire process including name approvals, registration filings, and asset transfer schedules typically takes 15 to 20 working days." }
    ],
    relatedServices: [
      { name: "Startup Advisory & Mentorship", href: "/services/advisory-consulting/startup-advisory-mentorship" },
      { name: "Bookkeeping & Accounting", href: "/services/accounting-compliance/bookkeeping-accounting" }
    ],
  },
  "risk-management-governance": {
    slug: "risk-management-governance",
    category: "advisory-consulting",
    categoryName: "Advisory & Consulting",
    serviceName: "Risk Management & Governance",
    tier: 2,
    heroHeadline: "Insulate corporate operations against regulatory failures and liability gaps",
    directAnswer: "Risk Management and Governance is the structured implementation of corporate controls, risk registers, and regulatory checklists. It aligns board policies with Indian corporate laws, shielding directors from liabilities and ensuring clean audit trails for stakeholders.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Companies establishing board-level audit and risk committees.",
      "Scaling corporations facing complex regulatory compliance overlays.",
      "Firms preparing for external audits or investor due diligence checks.",
    ],
    scopeOfWork: [
      "Designing internal control manuals and risk scoring registers.",
      "Conducting independent board compliance audits under Companies Act.",
      "Implementing whistle-blower systems and anti-bribery policies.",
    ],
    process: [
      { step: "Assessment", description: "Auditing current board policies, compliance registers, and authority limits." },
      { step: "Implementation", description: "Drafting corporate policy manuals and training key management." },
      { step: "Review Desk", description: "Providing quarterly checks on internal control operations." },
    ],
    faqs: [
      { question: "What are the liabilities of independent directors under Indian law?", answer: "Independent directors can be held liable for acts of omission or commission by the company that occurred with their knowledge, consent, or lack of due diligence." },
      { question: "How does a risk register prevent regulatory non-compliance?", answer: "It lists all potential tax, environment, labor, and company law compliance dates, assigns owners, and flags delays before penalties trigger." }
    ],
    relatedServices: [
      { name: "Startup Advisory & Mentorship", href: "/services/advisory-consulting/startup-advisory-mentorship" },
      { name: "Statutory Audits", href: "/services/audit-assurance/statutory-audits" }
    ],
  },
  "financial-reporting-statements": {
    slug: "financial-reporting-statements",
    category: "accounting-compliance",
    categoryName: "Accounting & Compliance",
    serviceName: "Financial Reporting & Statements",
    tier: 2,
    heroHeadline: "Publish transparent, compliant financial statements that satisfy banks and regulators",
    directAnswer: "Financial Reporting and Statements involves preparing statutory balance sheets, profit & loss accounts, cashflow statements, and notes to accounts in strict compliance with Schedule III of the Companies Act and Indian Accounting Standards (Ind AS) for corporate review.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Entities preparing annual statements for MCA filings and shareholder reviews.",
      "Firms requiring certified financial statements for corporate loan applications.",
      "Subsidiaries converting domestic books into foreign parent accounting setups.",
    ],
    scopeOfWork: [
      "Drafting and compiling annual statutory financial reports.",
      "Transitioning bookkeeping records into Ind AS or Indian GAAP formats.",
      "Reconciling ledger accounts for audit-ready year-end closures.",
    ],
    process: [
      { step: "ledger Review", description: "Auditing accounts and matching asset/liability items." },
      { step: "Formatting", description: "Structuring statements under Schedule III format guidelines." },
      { step: "Audit Coordination", description: "Providing clarifications to independent auditors during reviews." },
    ],
    faqs: [
      { question: "Is a cash flow statement mandatory for all private limited companies?", answer: "A cash flow statement is mandatory for all companies except small companies, one-person companies, and dormant companies under Section 2(40) of the Companies Act." },
      { question: "What is the difference between Ind AS and IFRS?", answer: "Ind AS is converged with IFRS but contains minor modifications (carve-outs and carve-ins) to align with Indian economic and legal realities." }
    ],
    relatedServices: [
      { name: "Bookkeeping & Accounting", href: "/services/accounting-compliance/bookkeeping-accounting" },
      { name: "Statutory Audits", href: "/services/audit-assurance/statutory-audits" }
    ],
  },
  "payroll-processing-compliance": {
    slug: "payroll-processing-compliance",
    category: "accounting-compliance",
    categoryName: "Accounting & Compliance",
    serviceName: "Payroll Processing & Compliance",
    tier: 2,
    heroHeadline: "Automate salary disbursements and secure full PF, ESIC, and TDS compliance",
    directAnswer: "Payroll Processing and Compliance covers monthly salary calculation, drafting payslips, and managing statutory deductions including Provident Fund (PF), ESIC, Professional Tax, and salary TDS returns, safeguarding businesses from employee compliance penalties.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "MSMEs scaling past threshold limits for mandatory PF/ESIC registrations.",
      "Businesses seeking secure, digital payroll processing systems.",
      "Corporations requiring monthly tax compliance checks on payroll scales.",
    ],
    scopeOfWork: [
      "Monthly salary calculations, payout charts, and payslip drafting.",
      "Filing monthly EPF challans and ESIC compliance logs.",
      "Filing quarterly Form 24Q income tax returns on salaries.",
    ],
    process: [
      { step: "Attendance Match", description: "Processing monthly inputs, leaves, and overtime calculations." },
      { step: "Deductions", description: "Calculating TDS, PF, ESIC, and Professional Tax shares." },
      { step: "filing & Disbursal", description: "Filing returns on portals and releasing bank payout lists." },
    ],
    faqs: [
      { question: "What is the salary threshold for mandatory EPF registration?", answer: "EPF registration is mandatory for establishments employing 20 or more persons, with contributions required for employees earning up to INR 15,000 basic salary." },
      { question: "What is the penalty for delaying monthly PF deposit returns?", answer: "Delays attract interest at 12% per annum under Section 7Q, plus damages ranging from 5% to 25% per annum under Section 14B." }
    ],
    relatedServices: [
      { name: "Bookkeeping & Accounting", href: "/services/accounting-compliance/bookkeeping-accounting" },
      { name: "Secretarial & ROC Filings", href: "/services/accounting-compliance/secretarial-roc-filings" }
    ],
  },
  "secretarial-roc-filings": {
    slug: "secretarial-roc-filings",
    category: "accounting-compliance",
    categoryName: "Accounting & Compliance",
    serviceName: "Secretarial & ROC Filings",
    tier: 2,
    heroHeadline: "Maintain perfect corporate records and process all MCA statutory annual returns",
    directAnswer: "Secretarial and ROC Filings covers compiling board meeting minutes, maintaining statutory registers, and filing required annual returns (like MGT-7, AOC-4) with the Registrar of Companies (ROC), preventing director disqualifications and steep MCA late fees.",
    primaryPersona: "startup",
    whoNeedsThis: [
      "All private limited and public companies registered in India.",
      "Businesses processing share transfers, director changes, or capital expansion.",
      "Firms preparing files for annual general meetings (AGMs).",
    ],
    scopeOfWork: [
      "Drafting minutes of Board and Annual General Meetings.",
      "Filing AOC-4 (Financials) and MGT-7 (Annual Return) forms.",
      "Processing MCA approvals for director additions or address updates.",
    ],
    process: [
      { step: "Minutes Draft", description: "Compiling and logging board meetings and voting resolutions." },
      { step: "Forms Prep", description: "Compiling year-end audited files and director information disclosures." },
      { step: "ROC Upload", description: "Filing digital forms on MCA V3 portal with digital signature certificates (DSCs)." },
    ],
    faqs: [
      { question: "What is the penalty for filing AOC-4 after the due date?", answer: "Late filing attracts a penalty of INR 100 per day from the due date, and long-term delays can lead to strike-off actions against the company." },
      { question: "How long must corporate minutes records be preserved?", answer: "Board meeting minutes and general meeting records must be preserved permanently in physical or secure electronic registers." }
    ],
    relatedServices: [
      { name: "Bookkeeping & Accounting", href: "/services/accounting-compliance/bookkeeping-accounting" },
      { name: "Startup Advisory & Mentorship", href: "/services/advisory-consulting/startup-advisory-mentorship" }
    ],
  },
  "corporate-tax-advisory": {
    slug: "corporate-tax-advisory",
    category: "taxation",
    categoryName: "Taxation",
    serviceName: "Corporate Tax Advisory",
    tier: 2,
    heroHeadline: "Structure business transactions to legally optimize corporate tax liabilities",
    directAnswer: "Corporate Tax Advisory provides strategic tax planning for business transactions, mergers, and corporate restructuring. We help companies navigate corporate tax slabs, claim statutory deductions, and optimize transfer pricing profiles under the Income Tax Act.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Firms selecting between new (Section 115BAA) and old corporate tax regimes.",
      "Companies planning major assets acquisitions or corporate structural changes.",
      "Businesses engaged in intercompany or cross-border commercial deals.",
    ],
    scopeOfWork: [
      "Analyzing transaction tax structures and liability profiles.",
      "Optimizing tax deductions for capital investments and research.",
      "Transfer pricing studies and documentation for cross-border deals.",
    ],
    process: [
      { step: "Transaction Audit", description: "Reviewing transaction agreements and balance sheet plans." },
      { step: "Slab Optimization", description: "Modeling tax liabilities under alternative regime structures." },
      { step: "Filing Support", description: "Ensuring disclosures in ITR-6 match tax optimization positions." },
    ],
    faqs: [
      { question: "What is the tax rate under Section 115BAA for domestic companies?", answer: "It offers a flat rate of 22% (plus surcharge and cess, making it 25.17%), provided the company waives specific deductions and tax incentives." },
      { question: "What is transfer pricing under Indian tax law?", answer: "It refers to the pricing of transactions between related parties, which must align with Arm's Length Pricing (ALP) rules under Section 92 of the Income Tax Act." }
    ],
    relatedServices: [
      { name: "GST & Indirect Tax", href: "/services/taxation/gst-indirect-tax" },
      { name: "Direct Taxation & Income Tax", href: "/services/taxation/direct-taxation-income-tax" }
    ],
  },
  "direct-taxation-income-tax": {
    slug: "direct-taxation-income-tax",
    category: "taxation",
    categoryName: "Taxation",
    serviceName: "Direct Taxation & Income Tax",
    tier: 2,
    heroHeadline: "Fulfill statutory direct tax return filings and manage advance tax calculations",
    directAnswer: "Direct Taxation and Income Tax covers calculating corporate advance tax, filing statutory income tax returns (ITR-6), filing TDS declarations, and managing audits under Section 44AB, keeping operations aligned with central tax laws.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Firms requiring annual statutory Income Tax return filing (ITR-6).",
      "Entities calculating quarterly advance tax payments to avoid interest charges.",
      "Businesses managing vendor TDS deductions and certificate reconciliations.",
    ],
    scopeOfWork: [
      "Computing taxable income, advance tax schedules, and filing ITR-6.",
      "Preparing and filing quarterly TDS returns (Form 26Q/27Q).",
      "Reconciling Form 26AS/AIS receipts with sales ledgers.",
    ],
    process: [
      { step: "Advance Tax Check", description: "Calculating quarterly profits and depositing taxes to avoid Section 234 interest." },
      { step: "Tax Audit Review", description: "Verifying ledger books for audits under Section 44AB." },
      { step: "ITR Filing", description: "Uploading returns and digital signing on the IT e-filing portal." },
    ],
    faqs: [
      { question: "What is the deadline for filing corporate tax returns in India?", answer: "For companies subject to tax audits, the deadline is October 31st of the assessment year (or November 30th for international transaction profiles)." },
      { question: "What is Section 234B/234C interest under direct tax laws?", answer: "Section 234B covers interest for default in payment of advance tax (less than 90% paid). Section 234C covers interest for deferment of quarterly installments." }
    ],
    relatedServices: [
      { name: "Corporate Tax Advisory", href: "/services/taxation/corporate-tax-advisory" },
      { name: "Tax Litigation & Representation", href: "/services/taxation/tax-litigation-representation" }
    ],
  },
  "tax-litigation-representation": {
    slug: "tax-litigation-representation",
    category: "taxation",
    categoryName: "Taxation",
    serviceName: "Tax Litigation & Representation",
    tier: 2,
    heroHeadline: "Resolve tax notices and secure representation before appellate authorities",
    directAnswer: "Tax Litigation and Representation is the defense of corporate tax returns during scrutiny audits. It covers drafting responses to IT/GST notices, preparing appeals, and representing cases before Commissioner Appeals, Tribunals, and tax desks.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Businesses facing scrutiny assessments under Section 143(3) of IT Act.",
      "Firms receiving mismatch notices between GSTR-1, GSTR-3B, and GSTR-2B.",
      "Entities filing appeals against incorrect tax demands or penalty levies.",
    ],
    scopeOfWork: [
      "Drafting replies to scrutiny notices, demands, and survey reports.",
      "Representing clients in faceless assessment portals and personal hearings.",
      "Preparing grounds of appeal and paper books for Appellate Authorities.",
    ],
    process: [
      { step: "Notice Audit", description: "Analyzing allegations, tax demands, and evidence files." },
      { step: "Drafting Defense", description: "Compiling ledger records, tax logs, and case law precedents." },
      { step: "Hearing Desk", description: "Submitting arguments on faceless portals or representing before officials." },
    ],
    faqs: [
      { question: "How does the faceless assessment portal work in India?", answer: "Notices are issued, and defenses are filed entirely online through the e-filing portal. Allocation of cases to tax officers is automated, removing direct physical contact." },
      { question: "What is the time limit for filing an appeal before CIT Appeals?", answer: "An appeal must be filed within 30 days from the date of service of the assessment order or demand notice." }
    ],
    relatedServices: [
      { name: "Direct Taxation & Income Tax", href: "/services/taxation/direct-taxation-income-tax" },
      { name: "GST & Indirect Tax", href: "/services/taxation/gst-indirect-tax" }
    ],
  },
  "hni-nri-tax-planning": {
    slug: "hni-nri-tax-planning",
    category: "taxation",
    categoryName: "Taxation",
    serviceName: "HNI & NRI Tax Planning",
    tier: 2,
    heroHeadline: "Optimize personal income tax exposure for high-net-worth and global individuals",
    directAnswer: "HNI & NRI Tax Planning is a specialized personal taxation advisory. It focuses on residential status transitions, double taxation avoidance (DTAA) filings, capital gains tax optimization on assets, and structuring global income to comply with Indian tax codes.",
    primaryPersona: "nri",
    whoNeedsThis: [
      "HNIs with complex multi-asset investment returns and promoter cashouts.",
      "NRIs with taxable rental income, interest yields, or stock sales in India.",
      "Individuals moving abroad requiring tax clearance certificates.",
    ],
    scopeOfWork: [
      "Advising on residency rules under Section 6 of the Income Tax Act.",
      "Structuring property sale transactions to minimize capital gains taxes.",
      "Filing ITR-2/ITR-3 returns with global asset disclosures.",
    ],
    process: [
      { step: "status Review", description: "Verifying physical stay dates and tax residency certificates." },
      { step: "Asset Review", description: "Mapping capital gain profiles and verifying reinvestment opportunities." },
      { step: "ITR Filing", description: "Uploading returns with required Schedule FA (Foreign Assets) disclosures." },
    ],
    faqs: [
      { question: "How is NRI residential status determined in India?", answer: "An individual is a resident if present in India for 182 days or more during the year, or 60 days (extended to 120/182 days for Indian citizens/PIOs visiting) plus 365 days in the preceding four years." },
      { question: "How can an NRI save capital gains tax on property sales?", answer: "NRIs can reinvest sale proceeds in another residential property in India under Section 54, or purchase capital gains bonds under Section 54EC." }
    ],
    relatedServices: [
      { name: "NRI Tax Planning & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" },
      { name: "Wealth & Succession Planning", href: "/services/global-private-wealth/wealth-succession-planning" }
    ],
  },
  "tax-gst-audits": {
    slug: "tax-gst-audits",
    category: "audit-assurance",
    categoryName: "Audit & Assurance",
    serviceName: "Tax & GST Audits",
    tier: 2,
    heroHeadline: "Reconcile tax books and secure mandatory tax audit certifications",
    directAnswer: "Tax & GST Audits covers the preparation and filing of Form 3CD (Tax Audit Report) under Section 44AB and GST reconciliation statements (Form 9C) for companies crossing statutory turnover thresholds.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Businesses with business turnover crossing INR 10 Crores requiring tax audits.",
      "Firms requiring GSTR-9 annual return and GSTR-9C reconciliation statements.",
      "Entities facing departmental audits from GST commissioners.",
    ],
    scopeOfWork: [
      "Conducting tax audits and issuing Form 3CA/3CB and Form 3CD.",
      "Preparing and certifying GSTR-9C reconciliation returns.",
      "Reconciling sales/purchase registers with GSTR-1, GSTR-3B, and financials.",
    ],
    process: [
      { step: "Ledger Audit", description: "Verifying business expenses, depreciation pools, and TDS compliance." },
      { step: "Form Preparation", description: "Compiling tax reconciliation disclosures in Form 3CD." },
      { step: "portal Filing", description: "Uploading certified tax and GST audit reports to e-filing desks." },
    ],
    faqs: [
      { question: "What is the turnover threshold for a tax audit under Section 44AB?", answer: "The threshold is INR 10 Crores (increased from INR 5 Crores) for businesses, provided cash transactions do not exceed 5% of total receipts/payments." },
      { question: "Who needs to file Form GSTR-9C?", answer: "GST registered taxpayers with aggregate turnover crossing INR 5 Crores in a financial year must file a self-certified reconciliation statement in GSTR-9C." }
    ],
    relatedServices: [
      { name: "Statutory Audits", href: "/services/audit-assurance/statutory-audits" },
      { name: "GST & Indirect Tax", href: "/services/taxation/gst-indirect-tax" }
    ],
  },
  "internal-process-audits": {
    slug: "internal-process-audits",
    category: "audit-assurance",
    categoryName: "Audit & Assurance",
    serviceName: "Internal & Process Audits",
    tier: 2,
    heroHeadline: "Evaluate and strengthen internal financial controls and operational systems",
    directAnswer: "Internal & Process Audits are custom examinations of corporate workflows. They evaluate internal financial controls, inventory systems, procurement processes, and treasury management, identifying gaps and preventing commercial leakages.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Companies establishing robust internal financial controls (IFC) under MCA rules.",
      "Firms experiencing cost leakages or reconciliation inventory gaps.",
      "Boards seeking independent reviews of operational efficiency.",
    ],
    scopeOfWork: [
      "Reviewing internal financial control frameworks (IFC compliance).",
      "Auditing procurement, inventory storage, and payroll cycle records.",
      "Drafting audit reports and advising on corrective actions.",
    ],
    process: [
      { step: "Workflow Mapping", description: "Analyzing departmental processes, authorization paths, and ledger links." },
      { step: "Sample Testing", description: "Testing transaction records to check compliance with authorization rules." },
      { step: "Control Reporting", description: "Presenting findings and recommendations to the Audit Committee." },
    ],
    faqs: [
      { question: "Is internal audit mandatory for private limited companies?", answer: "Yes, for private companies crossing INR 200 Crores turnover, or with outstanding loans/deposits crossing INR 100 Crores at any point during the year." },
      { question: "How does a process audit prevent fraud?", answer: "It checks segregation of duties, validates vendor authorization pools, and verifies physical inventory matching, removing opportunities for asset loss." }
    ],
    relatedServices: [
      { name: "Statutory Audits", href: "/services/audit-assurance/statutory-audits" },
      { name: "Risk Management & Governance", href: "/services/advisory-consulting/risk-management-governance" }
    ],
  },
  "forensic-audits-investigations": {
    slug: "forensic-audits-investigations",
    category: "audit-assurance",
    categoryName: "Audit & Assurance",
    serviceName: "Forensic Audits & Investigations",
    tier: 2,
    heroHeadline: "Investigate corporate frauds and reconstruct contested financial transactions",
    directAnswer: "Forensic Audits and Investigations are specialised examinations of records designed to identify financial manipulations, assets diversion, or vendor fraud. We reconstruct audit trails for legal resolution and recovery.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Corporations investigating suspected insider fraud or cost inflation.",
      "Banks requiring forensic audits on stressed borrower files.",
      "Shareholder panels resolving internal transaction disputes.",
    ],
    scopeOfWork: [
      "Analyzing transaction patterns and identifying unrecorded entries.",
      "Tracing diverted capital assets through bank accounts.",
      "Preparing forensic report packages for judicial review.",
    ],
    process: [
      { step: "Forensic Plan", description: "Defining audit targets and securing computer data logs." },
      { step: "Data Mining", description: "Reconstructing accounts, bank trails, and vendor records." },
      { step: "Reporting", description: "Drafting forensic findings reports containing evidence details." },
    ],
    faqs: [
      { question: "What is the difference between standard audits and forensic audits?", answer: "Standard audits verify that accounts present a true and fair view based on sample testing. Forensic audits investigate specific suspicions to collect evidence suitable for court review." },
      { question: "What is asset siphoning?", answer: "It is the illegal transfer of company funds or assets to promoters or related entities, often hidden through fake vendor invoices." }
    ],
    relatedServices: [
      { name: "Statutory Audits", href: "/services/audit-assurance/statutory-audits" },
      { name: "Due Diligence & Special Audits", href: "/services/audit-assurance/due-diligence-special-audits" }
    ],
  },
  "due-diligence-special-audits": {
    slug: "due-diligence-special-audits",
    category: "audit-assurance",
    categoryName: "Audit & Assurance",
    serviceName: "Due Diligence & Special Audits",
    tier: 2,
    heroHeadline: "Conduct financial due diligence to support investments and acquisitions",
    directAnswer: "Due Diligence and Special Audits are targeted reviews of financial records commissioned by buyers or investors. They verify asset titles, check historical tax compliance records, and highlight commercial liabilities before deals close.",
    primaryPersona: "startup",
    whoNeedsThis: [
      "VCs and angel networks investing in growth-stage startups.",
      "M&A teams acquiring private limited companies or business units.",
      "Promoters preparing their books for vendor due diligence checks.",
    ],
    scopeOfWork: [
      "Verifying historical revenue books and accounting quality.",
      "Checking corporate tax, TDS, and GST compliance records.",
      "Identifying off-balance sheet liabilities and legal disputes.",
    ],
    process: [
      { step: "Scoping", description: "Defining verification targets and requesting financial data registers." },
      { step: "Verification", description: "Auditing assets titles, supplier logs, tax files, and bank records." },
      { step: "Report Release", description: "Delivering Financial Due Diligence reports with flagged risk lists." },
    ],
    faqs: [
      { question: "What is the primary goal of financial due diligence?", answer: "To verify that the target company's financial records are accurate and free from hidden liabilities, confirming the deal valuation." },
      { question: "How does due diligence differ from a statutory audit?", answer: "Audits check compliance with accounting standards. Due diligence assesses commercial risks, revenue sustainability, and operational parameters for a buyer." }
    ],
    relatedServices: [
      { name: "Business Valuation", href: "/services/corporate-finance/business-valuation" },
      { name: "Fundraising & Capital Structuring", href: "/services/corporate-finance/fundraising-capital-structuring" }
    ],
  },
  "mergers-acquisitions": {
    slug: "mergers-acquisitions",
    category: "corporate-finance",
    categoryName: "Corporate Finance",
    serviceName: "Mergers & Acquisitions",
    tier: 2,
    heroHeadline: "Structure joint ventures, acquisitions, and corporate spin-offs",
    directAnswer: "Mergers & Acquisitions advisory provides transaction support, tax-efficient restructuring design, asset purchases structuring, and regulatory MCA clearance facilitation for mid-market corporate deals.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "Companies planning to acquire business units or competitors.",
      "Promoters executing promoter buyouts or division spin-offs.",
      "Entities setting up joint ventures with local or foreign partners.",
    ],
    scopeOfWork: [
      "Designing corporate merger and acquisition structures.",
      "Optimizing capital gains taxes on transaction asset transfers.",
      "Drafting transaction documents and managing MCA filing portals.",
    ],
    process: [
      { step: "Deal Design", description: "Assessing deal objectives and analyzing tax options." },
      { step: "Valuation & DD", description: "Coordinating business valuations and due diligence checks." },
      { step: "Integration Support", description: "Drafting share purchase contracts and filing for ROC clearances." },
    ],
    faqs: [
      { question: "What is a slump sale under Indian tax law?", answer: "A slump sale is the transfer of a business undertaking for a lump sum consideration without values being assigned to individual assets, taxed under Section 50B." },
      { question: "Is NCLT approval mandatory for all corporate mergers?", answer: "Yes, standard mergers under Section 230-232 require National Company Law Tribunal (NCLT) approval, though fast-track merger options exist for startups and small companies." }
    ],
    relatedServices: [
      { name: "Business Valuation", href: "/services/corporate-finance/business-valuation" },
      { name: "Transaction Support", href: "/services/corporate-finance/transaction-support" }
    ],
  },
  "project-finance-advisory": {
    slug: "project-finance-advisory",
    category: "corporate-finance",
    categoryName: "Corporate Finance",
    serviceName: "Project Finance Advisory",
    tier: 2,
    heroHeadline: "Secure bank debt and syndications for capital-intensive projects",
    directAnswer: "Project Finance Advisory is the structuring of long-term debt for infrastructure, industrial, and real estate developments, including drafting project reports, debt modeling, and coordinating with lead banks.",
    primaryPersona: "msme",
    whoNeedsThis: [
      "MSMEs establishing new manufacturing units or warehousing yards.",
      "Developers planning capital-intensive commercial real estate projects.",
      "Entities restructuring existing high-cost corporate term loans.",
    ],
    scopeOfWork: [
      "Drafting Detailed Project Reports (DPR) and bank models.",
      "Structuring project debt-equity ratios and interest coverage paths.",
      "Representing loan proposals before bank credit committees.",
    ],
    process: [
      { step: "Feasibility Review", description: "Analyzing project costs, cashflow models, and viability parameters." },
      { step: "Bank Deck Prep", description: "Drafting credit proposals and banking models." },
      { step: "Syndication Desk", description: "Coordinating with corporate bank desks to secure loan sanctions." },
    ],
    faqs: [
      { question: "What is a Detailed Project Report (DPR) for bank loans?", answer: "A DPR is a document mapping project costs, market analyses, technical specifications, and 10-year cash projections, proving loan repayment capacity." },
      { question: "What is DSCR in project finance?", answer: "Debt Service Coverage Ratio (DSCR) measures the cash available to pay debt obligations. Banks typically require a DSCR above 1.25x for project loans." }
    ],
    relatedServices: [
      { name: "Fundraising & Capital Structuring", href: "/services/corporate-finance/fundraising-capital-structuring" },
      { name: "Bookkeeping & Accounting", href: "/services/accounting-compliance/bookkeeping-accounting" }
    ],
  },
  "transaction-support": {
    slug: "transaction-support",
    category: "corporate-finance",
    categoryName: "Corporate Finance",
    serviceName: "Transaction Support",
    tier: 2,
    heroHeadline: "Verify transaction details and manage transaction closing procedures",
    directAnswer: "Transaction Support services guide buyers and sellers through corporate transaction closings. We manage escrow accounts, monitor condition precedent checklists, and coordinate ROC filings to secure clean asset transfers.",
    primaryPersona: "startup",
    whoNeedsThis: [
      "Firms closing equity funding rounds or business purchases.",
      "Promoters executing shareholder buyouts or asset spin-offs.",
      "Acquirers requiring closing audit confirmations.",
    ],
    scopeOfWork: [
      "Verifying conditions precedent (CP) and conditions subsequent (CS) logs.",
      "Reviewing transaction agreement schedules and share transfer forms.",
      "Conducting transaction closing audits and compiling net-worth certifications.",
    ],
    process: [
      { step: "Closing Review", description: "Checking that all CP conditions in the Share Purchase Agreement are fully met." },
      { step: "Share Issuance", description: "Drafting board resolutions, filing PAS-3 forms, and updating registers." },
      { step: "CS Tracking", description: "Monitoring post-closing regulatory returns filings on bank and MCA portals." },
    ],
    faqs: [
      { question: "What are Conditions Precedent (CP) in equity deals?", answer: "CPs are regulatory or financial tasks that a company must complete before investors release transaction funds (e.g. updating company board rules)." },
      { question: "What is Form PAS-3 filed with the MCA?", answer: "Form PAS-3 is the return of allotment of shares that must be filed with the ROC within 30 days of allocating shares to investors." }
    ],
    relatedServices: [
      { name: "Business Valuation", href: "/services/corporate-finance/business-valuation" },
      { name: "Mergers & Acquisitions", href: "/services/corporate-finance/mergers-acquisitions" }
    ],
  },
  "repatriation-fema-advisory": {
    slug: "repatriation-fema-advisory",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    serviceName: "Repatriation & FEMA Advisory",
    tier: 2,
    heroHeadline: "Repatriate Indian capital assets under RBI Liberalised Remittance rules",
    directAnswer: "Repatriation and FEMA Advisory guides global families transferring funds out of India. We manage NRO capital withdrawals from property sales or inheritance, securing required bank clearances and tax certifications.",
    primaryPersona: "nri",
    whoNeedsThis: [
      "NRIs repatriating ancestral property sale proceed gains.",
      "Global beneficiaries transferring inheritance asset funds from India.",
      "Expatriates closing domestic banking assets and moving wealth overseas.",
    ],
    scopeOfWork: [
      "Advising on RBI Liberalised Remittance Scheme (LRS) capital rules.",
      "Filing Form 15CA and issuing certified Form 15CB clearances.",
      "Representing transfer profiles to AD banks for capital dispatches.",
    ],
    process: [
      { step: "FEMA Audit", description: "Verifying origin records of capital assets and matching banking logs." },
      { step: "TDS Certification", description: "Calculating capital gains taxes and verifying tax receipts." },
      { step: "Bank clearance", description: "Submitting files to bank desks to process outward remittances." },
    ],
    faqs: [
      { question: "Can an NRI transfer money from an NRO to an NRE account?", answer: "Yes, up to USD 1 Million per financial year, subject to paying applicable taxes in India and filing Form 15CA/15CB clearances." },
      { question: "What are AD Category-I banks in remittance transactions?", answer: "Authorized Dealer (AD) Category-I banks are financial entities licensed by the RBI to process foreign exchange transactions." }
    ],
    relatedServices: [
      { name: "NRI Tax Planning & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" },
      { name: "Wealth & Succession Planning", href: "/services/global-private-wealth/wealth-succession-planning" }
    ],
  },
  "offshore-structuring-tax-optimization": {
    slug: "offshore-structuring-tax-optimization",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    serviceName: "Offshore Structuring & Tax Optimization",
    tier: 2,
    heroHeadline: "Design tax-compliant offshore corporate holding and investment vehicles",
    directAnswer: "Offshore Structuring and Tax Optimization advises promoters and HNIs on setting up foreign holding companies, joint venture entities, and overseas trusts in compliance with RBI Overseas Direct Investment (ODI) rules.",
    primaryPersona: "hni",
    whoNeedsThis: [
      "Promoters setting up overseas business arms or holding entities.",
      "HNIs investing in foreign markets through structured capital trusts.",
      "Exporters optimizing global taxation profiles.",
    ],
    scopeOfWork: [
      "Designing compliant offshore entities in tax-efficient jurisdictions.",
      "Advising on RBI Overseas Direct Investment (ODI) guidelines.",
      "Analyzing Place of Effective Management (POEM) rules to avoid tax exposures.",
    ],
    process: [
      { step: "POEM Check", description: "Reviewing management board locations to verify domestic POEM exemptions." },
      { step: "Entity Design", description: "Structuring entity capitalization details under RBI ODI guidelines." },
      { step: "Filing Support", description: "Preparing files for AD bank clearances and overseas returns filings." },
    ],
    faqs: [
      { question: "What is Place of Effective Management (POEM) in Indian tax law?", answer: "POEM is the place where key management decisions of a company are made. Foreign entities with POEM in India are taxed as domestic entities." },
      { question: "What is the LRS limit for outbound personal investments?", answer: "Under RBI LRS rules, resident individuals can remit up to USD 250,000 per financial year for overseas investments or expenses." }
    ],
    relatedServices: [
      { name: "Wealth & Succession Planning", href: "/services/global-private-wealth/wealth-succession-planning" },
      { name: "Business Valuation", href: "/services/corporate-finance/business-valuation" }
    ],
  },
  "investment-portfolio-structuring": {
    slug: "investment-portfolio-structuring",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    serviceName: "Investment & Portfolio Structuring",
    tier: 2,
    heroHeadline: "Structure private asset holdings to optimize after-tax investment yields",
    directAnswer: "Investment and Portfolio Structuring is the process of selecting tax-efficient holding vehicles (like AIFs, mutual fund baskets, or holding companies) to minimize capital gains exposure and optimize investment yields.",
    primaryPersona: "hni",
    whoNeedsThis: [
      "HNIs looking to consolidate individual equity, debt, and real estate assets.",
      "Promoters planning major cash outs from startup shares.",
      "Family offices seeking tax-efficient asset holding structures.",
    ],
    scopeOfWork: [
      "Comparative analysis of holding assets directly vs via private companies or trusts.",
      "Optimizing capital gains tax on equity, real estate, and fixed income portfolios.",
      "Advising on tax rules for Alternative Investment Funds (AIFs) and startups.",
    ],
    process: [
      { step: "Asset Scoping", description: "Mapping existing investment asset classes and tax exposures.", timeframe: "3 Days" },
      { step: "Structure Design", description: "Designing optimal portfolio holding entities and tax options.", timeframe: "1 Week" },
      { step: "Ongoing Compliance", description: "Reviewing capital gains tax schedules and tracking returns.", timeframe: "Ongoing" },
    ],
    faqs: [
      { question: "How does a holding company optimize investment taxation?", answer: "A holding company can defer taxes on investment returns by reinvesting profits before dividend payouts are triggered." },
      { question: "What are the capital gains rules for unlisted shares in India?", answer: "Long-term capital gains on unlisted shares are taxed at 20% (plus surcharges) with indexation, requiring a 24-month holding period to qualify." }
    ],
    relatedServices: [
      { name: "Wealth & Succession Planning", href: "/services/global-private-wealth/wealth-succession-planning" },
      { name: "Business Valuation", href: "/services/corporate-finance/business-valuation" },
    ],
  },
  "real-estate-asset-advisory": {
    slug: "real-estate-asset-advisory",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    serviceName: "Real Estate & Asset Advisory",
    tier: 2,
    heroHeadline: "FEMA-compliant real estate transfers and tax optimization for global families",
    directAnswer: "Real Estate & Asset Advisory is a legal and financial consulting framework for NRIs and HNIs. It ensures FEMA-compliant property acquisitions, inheritance transfer validations, title clearances, and tax-efficient disposal of high-value real estate holdings in India.",
    primaryPersona: "nri",
    whoNeedsThis: [
      "NRIs selling inherited land or residential property in India.",
      "HNIs restructuring domestic commercial real estate portfolios.",
      "Global families executing partition deeds or family property divisions.",
    ],
    scopeOfWork: [
      "FEMA compliance verification for real estate acquisitions and transfers.",
      "Lower TDS certificate processing (Form 13) for property sales.",
      "Advising on Section 54/54EC capital gains tax reinvestment structures.",
    ],
    process: [
      { step: "Asset Audit", description: "Verifying property titles, partition deeds, and tax registration logs." },
      { step: "TDS Clearance", description: "Filing Form 13 on the IT portal to secure lower TDS certificates for banks." },
      { step: "Remittance", description: "Filing Form 15CA/15CB for AD bank clearance under USD 1M annual cap." },
    ],
    faqs: [
      { question: "Can an NRI buy agricultural land in India?", answer: "No, under FEMA rules, NRIs cannot acquire agricultural land, plantation property, or farm houses in India, unless inherited." },
      { question: "What is the TDS rate on property sold by an NRI?", answer: "The baseline TDS rate is 20% on the capital gains, plus applicable surcharges and cess, though obtaining a Lower Deduction Certificate reduces it substantially." }
    ],
    relatedServices: [
      { name: "Repatriation & FEMA Advisory", href: "/services/global-private-wealth/repatriation-fema-advisory" },
      { name: "NRI Tax Planning & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" }
    ],
  },
  "philanthropy-csr-structuring": {
    slug: "philanthropy-csr-structuring",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    serviceName: "Philanthropy & CSR Structuring",
    tier: 2,
    heroHeadline: "Establish charitable trusts, Section 8 companies, and tax-exempt foundations",
    directAnswer: "Philanthropy and CSR Structuring is the legal design and registration of charitable trust holding systems, Section 8 companies, and society vehicles. It ensures regulatory compliance under the Income Tax Act, FCRA guidelines, and CSR mandates under the Companies Act, optimizing tax benefits for corporate donors and private foundations.",
    primaryPersona: "hni",
    whoNeedsThis: [
      "HNIs establishing private legacy foundations and charitable trusts.",
      "Corporations seeking to register Section 8 entities to manage CSR outlays.",
      "NGOs requiring registration under Section 12A and 80G for tax exemptions.",
    ],
    scopeOfWork: [
      "Drafting charters and registering charitable trusts and Section 8 companies.",
      "Securing Income Tax exemptions under Section 12A, 10(23C), and 80G.",
      "Advising on CSR compliance rules under Schedule VII of the Companies Act.",
    ],
    process: [
      { step: "Vehicle Choice", description: "Evaluating structures between public trusts, societies, and Section 8 companies." },
      { step: "MCA/Sub-Registrar", description: "Filing incorporation deeds or registering charters with sub-registrars." },
      { step: "Tax Exemption", description: "Filing Form 10A on e-filing desks to secure 12A and 80G status." },
    ],
    faqs: [
      { question: "What is the difference between a Trust and a Section 8 Company?", answer: "A Trust is registered under the Indian Trusts Act and is simpler to administer. A Section 8 Company is registered under the Companies Act, has a corporate structure, and enjoys higher credibility with foreign donors." },
      { question: "What is an 80G registration?", answer: "It is a registration under the Income Tax Act that allows donors to claim tax deductions on contributions made to the registered NGO." }
    ],
    relatedServices: [
      { name: "Wealth & Succession Planning", href: "/services/global-private-wealth/wealth-succession-planning" },
      { name: "Secretarial & ROC Filings", href: "/services/accounting-compliance/secretarial-roc-filings" }
    ],
  },
};
