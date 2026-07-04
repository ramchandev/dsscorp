import React from "react";

interface IllustrationProps {
  category: string;
  slug?: string;
}

export default function ServiceHeroIllustration({ category, slug }: IllustrationProps) {
  // Mapping of each sub-service page directly to realistic photography featuring Indian business meetings and professionals
  const slugImages: Record<string, string | null> = {
    // Advisory & Consulting
    "startup-advisory-mentorship": "/service-startup-advisory.jpg",
    "business-structuring-restructuring": "/service-advisory.jpg",
    "risk-management-governance": "/service-transaction-support.jpg",

    // Accounting & Compliance
    "bookkeeping-accounting": null, // Explicitly removed as requested
    "financial-reporting-statements": "/service-transaction-support.jpg", // Moved to a clean transaction desk photo
    "payroll-processing-compliance": "/blog-gst-calendar.jpg",
    "secretarial-roc-filings": "/service-tax-litigation.jpg",

    // Taxation
    "gst-indirect-tax": "/blog-gst-ecommerce.jpg",
    "corporate-tax-advisory": "/service-taxation.jpg",
    "direct-taxation-income-tax": "/service-taxation.jpg",
    "tax-litigation-representation": "/service-tax-litigation.jpg",
    "hni-nri-tax-planning": "/service-hni-nri-tax.jpg",

    // Audit & Assurance
    "statutory-audits": "/service-audit.jpg",
    "tax-gst-audits": "/service-taxation.jpg",
    "internal-process-audits": "/service-audit.jpg",
    "forensic-audits-investigations": "/service-audit.jpg",
    "due-diligence-special-audits": "/service-advisory.jpg",

    // Corporate Finance
    "business-valuation": "/service-finance.jpg",
    "fundraising-capital-structuring": "/service-project-finance.jpg",
    "mergers-acquisitions": "/service-advisory.jpg",
    "project-finance-advisory": "/service-project-finance.jpg",
    "transaction-support": "/service-transaction-support.jpg",

    // Global & Private Wealth
    "nri-tax-planning-compliance": "/service-hni-nri-tax.jpg",
    "setting-up-indian-subsidiaries": "/service-advisory.jpg",
    "wealth-succession-planning": "/blog-succession-planning.jpg",
    "repatriation-fema-advisory": "/blog-nri-repatriation.jpg",
    "offshore-structuring-tax-optimization": "/service-wealth.jpg",
    "investment-portfolio-structuring": "/blog-nri-mutual-funds.jpg",
    "real-estate-asset-advisory": "/service-wealth.jpg",
    "philanthropy-csr-structuring": "/blog-succession-planning.jpg",
  };

  // Fallback category images
  const categoryImages = {
    "advisory-consulting": "/service-advisory.jpg",
    "accounting-compliance": "/service-transaction-support.jpg", // Updated fallback
    "taxation": "/service-taxation.jpg",
    "audit-assurance": "/service-audit.jpg",
    "corporate-finance": "/service-finance.jpg",
    "global-private-wealth": "/service-wealth.jpg",
  };

  const src = (slug && slugImages[slug] !== undefined) 
    ? slugImages[slug] 
    : categoryImages[category as keyof typeof categoryImages] || "/service-advisory.jpg";

  // If explicitly removed, return null
  if (src === null) {
    return null;
  }

  // Indian meeting specific alt texts
  const altTexts: Record<string, string> = {
    "startup-advisory-mentorship": "Indian startup founders reviewing regulatory compliance checklists and vesting protocols with a female CA in Chennai",
    "business-structuring-restructuring": "Indian corporate board members discussing entity restructuring agreements at a conference table",
    "risk-management-governance": "Indian corporate compliance officers analyzing governance workflows",
    "financial-reporting-statements": "Indian finance desk reviewing monthly MIS statements and balance sheets",
    "payroll-processing-compliance": "HR managers matching employee timesheets and PF filings in Chennai",
    "secretarial-roc-filings": "Corporate secretarial team preparing MCA annual filing folders",
    "gst-indirect-tax": "Indian e-commerce seller reviewing GST audit schedules with a female tax consultant",
    "corporate-tax-advisory": "Indian corporate tax advisors reviewing advance tax filings and returns",
    "direct-taxation-income-tax": "Indian chartered accountants reviewing corporate income tax filings",
    "tax-litigation-representation": "Indian legal representatives preparing tax dispute representation documents",
    "hni-nri-tax-planning": "Indian wealth manager discussing HNI asset plans with an Indian client couple",
    "statutory-audits": "Indian statutory auditor checking accounting ledgers and dual-screen audit check logs",
    "tax-gst-audits": "Indian audit desk reviewing tax logs and GST filings",
    "internal-process-audits": "Internal compliance review of vendor transactions by an Indian audit team",
    "forensic-audits-investigations": "Forensic auditors inspecting commercial transaction records and ledger files",
    "due-diligence-special-audits": "Indian M&A board members reviewing financial due diligence checklists",
    "business-valuation": "Advisors examining transaction valuation graphs and business metrics in Chennai boardroom",
    "fundraising-capital-structuring": "Indian entrepreneurs and capital syndicators signing venture term sheets",
    "mergers-acquisitions": "Indian corporate executives shaking hands at an M&A deal closing meeting",
    "project-finance-advisory": "Indian infrastructure developers analyzing project loan spreadsheets",
    "transaction-support": "Deal desk analysts reviewing transaction support documents in a bright corporate office",
    "nri-tax-planning-compliance": "NRI client consulting on FEMA rules and overseas assets management in India",
    "setting-up-indian-subsidiaries": "Foreign directors of Indian descent consulting on subsidiary setup in Chennai",
    "wealth-succession-planning": "Indian HNI family reviewing private trust deeds and legacy Wills succession plans with a lawyer",
    "repatriation-fema-advisory": "FEMA Outward Remittance clearances and Form 15CA/15CB certificates being prepared by an Indian banker",
    "offshore-structuring-tax-optimization": "Offshore holding structure and international tax planning documentation in a private office",
    "investment-portfolio-structuring": "Global investment portfolio distribution and mutual fund charts",
    "real-estate-asset-advisory": "Real estate investment blueprints and commercial land papers review session in T. Nagar office",
    "philanthropy-csr-structuring": "Corporate foundation members discussing CSR project budgets and charitable donation deeds",
  };

  const alt = (slug && altTexts[slug]) || "DSS Corp Advisory service photo";

  return (
    <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-square rounded-lg overflow-hidden border border-navy-secondary/40 shadow-lg relative group">
      {/* Decorative hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan/15 to-chartreuse/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
      <img
        src={src}
        alt={alt}
        width={320}
        height={320}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
