import type { InsightArticle } from "@/lib/blog-types";
import { getBlogCoverImage } from "@/lib/blog-covers";
import { BLOG_AUTHORS } from "@/lib/blog-authors";

export const newBlogArticles: Record<string, InsightArticle> = {
  "income-tax-slabs-india-fy-2026-27": {
    slug: "income-tax-slabs-india-fy-2026-27",
    title: "Income Tax Slabs in India for FY 2026-27, Explained Simply",
    subhead: "New vs old regime slabs, rebates, and worked examples for salaried taxpayers.",
    excerpt:
      "Income tax slabs for FY 2026-27 under the new and old regime, with rebates, standard deduction, and real salary examples.",
    date: "July 7, 2026",
    publishedAt: "2026-07-07",
    readTime: "8 Min Read",
    category: "taxation",
    categoryName: "Taxation",
    author: BLOG_AUTHORS.deepa,
    persona: "msme",
    directAnswer:
      "For FY 2026-27, income tax slabs are unchanged from FY 2025-26. Under the New Tax Regime, income up to ₹4 lakh is tax-free, and a ₹60,000 Section 87A rebate makes taxable income up to ₹12 lakh effectively zero tax. Salaried individuals get a ₹75,000 standard deduction, pushing the tax-free gross salary ceiling to ₹12.75 lakh.",
    sections: [
      {
        heading: "New Tax Regime slabs for FY 2026-27",
        body: "The New Tax Regime is the default: nil up to ₹4 lakh, 5% from ₹4–8 lakh, 10% from ₹8–12 lakh, 15% from ₹12–16 lakh, 20% from ₹16–20 lakh, 25% from ₹20–24 lakh, and 30% above ₹24 lakh. It allows minimal deductions but includes a ₹75,000 standard deduction for salaried individuals and pensioners.",
      },
      {
        heading: "Old Tax Regime slabs and who should consider it",
        body: "The Old Regime keeps a ₹2.5 lakh basic exemption (₹3 lakh for senior citizens, ₹5 lakh for super seniors) with slabs at 5%, 20%, and 30%. It supports 70+ deductions including 80C, 80D, HRA, and home loan interest. It often suits taxpayers with large deduction claims above roughly ₹4–4.5 lakh.",
      },
      {
        heading: "Surcharge, cess, and a ₹15 lakh salary example",
        body: "Both regimes add surcharge above ₹50 lakh income and 4% Health & Education Cess on tax plus surcharge. On a ₹15 lakh gross salary under the New Regime: after the ₹75,000 standard deduction, tax before cess is about ₹93,750, or roughly ₹97,500 including cess.",
      },
      {
        heading: "Choosing between regimes each year",
        body: "Non-business taxpayers can switch regimes annually while filing. Business income taxpayers need Form 10-IEA to exit the New Regime and can re-enter only once in a lifetime. The reliable approach is to compute both regimes with your actual numbers before filing.",
      },
    ],
    faqs: [
      {
        question: "Is income up to ₹12 lakh really tax-free in FY 2026-27?",
        answer: "Yes, for resident individuals under the New Tax Regime. Section 87A rebate of up to ₹60,000 offsets tax on taxable income up to ₹12 lakh. With the ₹75,000 standard deduction, that extends to a gross salary of ₹12.75 lakh.",
      },
      {
        question: "Did Budget 2026 change the income tax slabs?",
        answer: "No. Slabs, exemption limits, standard deduction, and the Section 87A rebate carry over unchanged from FY 2025-26.",
      },
      {
        question: "Can I switch between old and new regime every year?",
        answer: "Yes, if you have no business or professional income. Business taxpayers face additional Form 10-IEA requirements and a once-in-a-lifetime restriction on re-entering the New Regime.",
      },
      {
        question: "Do senior citizens get a higher exemption under the New Regime?",
        answer: "No. Higher senior-citizen exemptions apply only under the Old Regime.",
      },
    ],
    relatedService: {
      name: "Direct Taxation & Income Tax",
      href: "/services/taxation/direct-taxation-income-tax",
    },
    image: getBlogCoverImage("income-tax-slabs-india-fy-2026-27"),
  },
  "gst-registration-process-india-2026": {
    slug: "gst-registration-process-india-2026",
    title: "Complete GST Registration Process in India (2026 Guide)",
    subhead: "Thresholds, documents, timelines, and common mistakes for new GSTIN applications.",
    excerpt:
      "Step-by-step GST registration process for Indian businesses in 2026 — thresholds, documents, timelines, and mistakes to avoid.",
    date: "July 5, 2026",
    publishedAt: "2026-07-05",
    readTime: "7 Min Read",
    category: "taxation",
    categoryName: "Taxation",
    author: BLOG_AUTHORS.deepa,
    persona: "msme",
    directAnswer:
      "GST registration is mandatory once turnover exceeds ₹40 lakh for goods (₹20 lakh in special category states) or ₹20 lakh for services (₹10 lakh in special states). E-commerce sellers, inter-state suppliers, and several other categories must register regardless of turnover. Applications use Form GST REG-01 and typically complete in 3–7 working days.",
    sections: [
      {
        heading: "Who must register for GST in 2026",
        body: "Turnover thresholds apply separately for goods and services. Mandatory registration also applies to e-commerce sellers, inter-state suppliers, casual taxable persons, non-resident taxable persons, reverse-charge cases, TDS/TCS entities, ISDs, and certain foreign OIDAR providers. Mixed goods-and-services businesses generally follow the lower services threshold.",
      },
      {
        heading: "Documents required for GST registration",
        body: "Typical requirements include PAN, constitution proof, authorized signatory ID, photographs, principal place of business proof, bank account details, and a DSC for companies and LLPs. Documents must be clear PDFs or JPGs under 1 MB. Mismatched PAN names and blurry uploads are leading causes of clarification notices.",
      },
      {
        heading: "Step-by-step registration on the GST portal",
        body: "Apply on the GST portal, verify mobile and email, obtain a TRN, complete business and promoter details, authenticate via Aadhaar where possible, submit with DSC or EVC, receive an ARN, and track officer review. Aadhaar-authenticated low-risk applications can approve in about 3 working days; standard cases often take up to 7 working days.",
      },
      {
        heading: "Common mistakes that delay approval",
        body: "Watch for PAN/legal name mismatches, wrong constitution selection, oversized uploads, personal bank accounts used for company applications, and missing the 30-day registration window after crossing threshold. Valid bank details must also be confirmed within 30 days of registration or filing the first return.",
      },
    ],
    faqs: [
      {
        question: "How much does GST registration cost?",
        answer: "There is no government fee on the GST portal. Costs arise only if you engage a professional for documentation and follow-up.",
      },
      {
        question: "How long does GST registration take?",
        answer: "Aadhaar-authenticated low-risk applications can approve in about 3 working days. Standard applications or physical verification routes may take up to 7 working days or longer if clarifications are raised.",
      },
      {
        question: "Can I use my home address for GST registration?",
        answer: "Yes, provided you submit recent utility bills and ownership or rental proof for that address.",
      },
      {
        question: "Is GST registration mandatory for freelancers?",
        answer: "Only after crossing the applicable services threshold or if you fall under a mandatory category such as inter-state supply or e-commerce selling.",
      },
    ],
    relatedService: {
      name: "GST & Indirect Tax Advisory",
      href: "/services/taxation/gst-indirect-tax",
    },
    image: getBlogCoverImage("gst-registration-process-india-2026"),
  },
  "how-nris-file-income-tax-return-india": {
    slug: "how-nris-file-income-tax-return-india",
    title: "How NRIs Can File Income Tax Returns in India: Step-by-Step",
    subhead: "ITR forms, taxable income, DTAA claims, and e-verification from abroad.",
    excerpt:
      "A step-by-step guide for NRIs filing income tax returns in India — ITR forms, taxable income, DTAA claims, and filing from abroad.",
    date: "July 3, 2026",
    publishedAt: "2026-07-03",
    readTime: "9 Min Read",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    author: BLOG_AUTHORS.madhan,
    persona: "nri",
    directAnswer:
      "NRIs must file an Indian ITR when India-sourced income exceeds basic exemption limits or when TDS was deducted and a refund is due. Most NRIs use ITR-2 (ITR-3 if they have Indian business income). Filing is online via the Income Tax e-filing portal, and the standard due date for FY 2025-26 (AY 2026-27) non-audit cases is 31 July 2026.",
    sections: [
      {
        heading: "Confirm your NRI residential status each year",
        body: "Tax status depends on days spent in India, not passport alone. You are generally non-resident if you spent fewer than 182 days in India in the financial year, subject to additional look-back rules for high India-sourced income. Status can change if travel patterns change.",
      },
      {
        heading: "What income is taxable in India for NRIs",
        body: "India taxes salary for services performed in India, rental income, capital gains on Indian assets, NRO interest, and Indian dividends. NRE and FCNR interest is exempt. Foreign salary and foreign investment gains are not taxed in India.",
      },
      {
        heading: "Choose the correct ITR form",
        body: "ITR-2 covers most NRI situations including salary, rent, capital gains, and DTAA claims. ITR-3 is required for Indian business or professional income. ITR-1 and ITR-4 are resident-only forms and are not valid for NRIs.",
      },
      {
        heading: "Claim DTAA benefits and e-verify from abroad",
        body: "Use a Tax Residency Certificate, Form 10F, and Schedule TR to claim treaty relief. File on the e-filing portal, reconcile Form 26AS/AIS, pay any balance tax, and e-verify via Indian net banking, DSC, or posted ITR-V. An unverified return is treated as not filed.",
      },
      {
        heading: "NRI-specific rules that trip people up",
        body: "NRIs cannot claim the Section 87A rebate available to residents. Senior-citizen higher exemption limits under the old regime also do not apply to NRIs. Reporting exempt NRE interest unnecessarily and skipping DTAA claims are common and costly mistakes.",
      },
    ],
    faqs: [
      {
        question: "Do I need to file if my only India income is NRE interest?",
        answer: "No. NRE interest is tax-exempt, so that income alone does not create a filing obligation.",
      },
      {
        question: "Should I file if 30% TDS was deducted on ₹1.8 lakh NRO interest?",
        answer: "Yes. Filing is how you reclaim excess TDS when your actual tax liability is lower.",
      },
      {
        question: "Can I file entirely online from abroad?",
        answer: "Yes. Filing and most e-verification routes can be completed online with PAN, OTP-linked contact details, and Indian banking or DSC access.",
      },
      {
        question: "What happens if I miss the deadline?",
        answer: "You can usually file a belated return by 31 December of the assessment year, with late fees and interest on unpaid tax, and possible loss of certain loss carry-forward benefits.",
      },
    ],
    relatedService: {
      name: "NRI Tax Planning & Compliance",
      href: "/services/global-private-wealth/nri-tax-planning-compliance",
    },
    image: getBlogCoverImage("how-nris-file-income-tax-return-india"),
  },
  "fema-rules-nri-repatriation": {
    slug: "fema-rules-nri-repatriation",
    title: "FEMA Rules for NRIs: Repatriating Money From India",
    subhead: "NRE/NRO/FCNR rules, USD 1 million limits, and Form 15CA/15CB compliance.",
    excerpt:
      "How NRIs can legally repatriate money from India — NRE/NRO/FCNR rules, USD 1 million limits, Form 15CA/15CB, and property sale repatriation.",
    date: "July 1, 2026",
    publishedAt: "2026-07-01",
    readTime: "10 Min Read",
    category: "global-private-wealth",
    categoryName: "Global & Private Wealth",
    author: BLOG_AUTHORS.madhan,
    persona: "nri",
    directAnswer:
      "NRE and FCNR balances are fully repatriable without limit. NRO outward remittances are capped at USD 1 million per financial year after applicable Indian taxes and Form 15CA/15CB (or Form 145/146 from April 2026 onward) compliance. Property sale proceeds follow the NRO framework with additional residential property limits.",
    sections: [
      {
        heading: "NRE, NRO, and FCNR — they are not interchangeable",
        body: "NRE holds foreign income remitted to India and is fully repatriable with tax-free interest. NRO holds India-sourced income and is repatriable up to USD 1 million per year after tax. FCNR foreign-currency deposits are fully repatriable with tax-free interest. Routing foreign salary into NRO is a common and avoidable mistake.",
      },
      {
        heading: "Understanding the USD 1 million NRO limit",
        body: "The cap applies to combined outward remittances from all NRO accounts per financial year, including transfers from NRO to NRE. NRE and FCNR are not subject to this cap. International NRO card spending also counts against the limit.",
      },
      {
        heading: "Form 15CA, 15CB, and the April 2026 transition",
        body: "Banks typically require Form 15CA self-declaration and Form 15CB CA certification before NRO outward remittances above ₹5 lakh. From 1 April 2026, Form 145 and Form 146 replace 15CA and 15CB under updated rules, but the underlying certification requirement remains.",
      },
      {
        heading: "Repatriating property sale proceeds",
        body: "Sale proceeds credit to NRO even if originally purchased with foreign funds. Buyers deduct TDS, a CA issues Form 15CB, you file the self-declaration, and the bank processes SWIFT transfer after reviewing deeds, TDS certificates, and tax acknowledgments. Residential property repatriation is generally limited to two properties under long-standing RBI guidance.",
      },
      {
        heading: "Common mistakes that delay repatriation",
        body: "Typical blockers include wrong account routing, attempting remittance before tax clearance, missing CA certificates, assuming NRO limits apply to NRE/FCNR, waiting too long after property sales, and poor source-of-funds documentation.",
      },
    ],
    faqs: [
      {
        question: "Is there a limit on repatriating money from an NRE account?",
        answer: "No. NRE balances including interest are fully repatriable under FEMA.",
      },
      {
        question: "How much can I repatriate from NRO each year?",
        answer: "Up to USD 1 million per financial year across all NRO accounts after tax compliance and Form 15CA/15CB (or Form 145/146) documentation.",
      },
      {
        question: "Do I need a Chartered Accountant for NRO repatriation?",
        answer: "For most NRO remittances above ₹5 lakh — especially property sales — yes. A CA must certify tax compliance before the bank processes the transfer.",
      },
      {
        question: "How long does the bank transfer take after approval?",
        answer: "Once documentation clears, banks typically execute SWIFT transfers within a few working days, depending on bank and destination country.",
      },
    ],
    relatedService: {
      name: "Repatriation & FEMA Advisory",
      href: "/services/global-private-wealth/repatriation-fema-advisory",
    },
    image: getBlogCoverImage("fema-rules-nri-repatriation"),
  },
};
