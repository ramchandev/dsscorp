import React from "react";
import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="greenGradFooter" x1="10" y1="10" x2="95" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A3E300" />
          <stop offset="50%" stopColor="#8CC63F" />
          <stop offset="100%" stopColor="#D2E31B" />
        </linearGradient>
      </defs>
      {/* Bottom navy shape */}
      <path d="M 12 45 L 95 55 L 16 95 Z" fill="#FFFFFF" opacity="0.3" />
      {/* Steel blue shape */}
      <path d="M 10 45 L 35 67 L 30 58 Z" fill="#3E5C76" />
      {/* Cyan shape */}
      <path d="M 11 32 L 95 55 L 35 67 Z" fill="#4FC3E8" />
      {/* Lime green shape */}
      <path d="M 10 10 L 95 55 L 35 65 Z" fill="url(#greenGradFooter)" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="font-heading font-semibold text-base tracking-wider text-card-white leading-none">DSS</span>
      <span className="text-[8px] font-medium tracking-tight text-text-muted leading-none mt-0.5">DYNAMIC STRATEGIC SOLUTIONS</span>
    </div>
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const businessLinks = [
    { name: "Advisory & Consulting", href: "/services/advisory-consulting" },
    { name: "Accounting & Compliance", href: "/services/accounting-compliance" },
    { name: "Taxation Desk", href: "/services/taxation" },
    { name: "Audit & Assurance", href: "/services/audit-assurance" },
    { name: "Corporate Finance", href: "/services/corporate-finance" },
  ];

  const wealthLinks = [
    { name: "Global & Private Wealth", href: "/services/global-private-wealth" },
    { name: "NRI Tax & Compliance", href: "/services/global-private-wealth/nri-tax-planning-compliance" },
    { name: "Repatriation & FEMA Advisory", href: "/services/global-private-wealth/repatriation-fema-advisory" },
    { name: "Decision Tools & Calculators", href: "/tools" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Case Outcomes", href: "/case-studies" },
    { name: "Blog Articles", href: "/blog" },
    { name: "FAQ Portal", href: "/faq" },
    { name: "Book Consultation", href: "/contact?autofocus=true" },
  ];

  return (
    <footer className="bg-navy text-card-white border-t border-navy-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
          
          {/* Logo & Info Block */}
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="font-body text-xs leading-relaxed text-text-muted max-w-sm">
              DSS Corp Advisory provides premium Chartered Accountancy, strategic taxation, and FEMA wealth compliance solutions. Registered Chartered Accountants based in Chennai, India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-secondary hover:bg-cyan/15 rounded text-text-muted hover:text-cyan transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Business Services Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-semibold text-xs text-card-white uppercase tracking-wider">
              Business Services
            </h4>
            <ul className="space-y-2.5">
              {businessLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-text-muted hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wealth & NRI Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-semibold text-xs text-card-white uppercase tracking-wider">
              Wealth & NRI
            </h4>
            <ul className="space-y-2.5">
              {wealthLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-text-muted hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-semibold text-xs text-card-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-text-muted hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-semibold text-xs text-card-white uppercase tracking-wider">
              Contact Desk
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs text-text-muted font-body">
                <MapPin className="w-3.5 h-3.5 text-cyan flex-shrink-0 mt-0.5" />
                <span>Flat 5, SRI Apartments, 2nd Floor, New No.19, Moosa Street, T.Nagar, Chennai-600017</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-text-muted font-body">
                <Phone className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
                <a href="tel:+919840053053" className="hover:text-cyan transition-colors">
                  +91 9840 053 053
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-text-muted font-body">
                <Mail className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
                <a href="mailto:info@dsscorp.in" className="hover:text-cyan transition-colors">
                  info@dsscorp.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & credits bar */}
        <div className="border-t border-navy-secondary pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-text-muted font-body">
            <span>© {currentYear} DSS Corp Advisory. All rights reserved.</span>
            <span className="hidden md:inline text-navy-secondary">|</span>
            <Link href="/privacy-policy" className="hover:text-cyan transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden md:inline text-navy-secondary">|</span>
            <Link href="/terms-of-service" className="hover:text-cyan transition-colors">
              Terms of Service
            </Link>
          </div>

          <div className="text-[11px] text-text-muted font-body">
            Website design by{" "}
            <a
              href="https://www.bizysite.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8CC63F] font-medium hover:text-cyan transition-colors"
            >
              Bizysite
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
