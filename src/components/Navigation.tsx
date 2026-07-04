"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { categoriesDb, servicesDb } from "@/lib/services";

const Logo = () => (
  <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-md p-1" aria-label="DSS Logo">
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="greenGrad" x1="10" y1="10" x2="95" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A3E300" />
          <stop offset="50%" stopColor="#8CC63F" />
          <stop offset="100%" stopColor="#D2E31B" />
        </linearGradient>
      </defs>
      {/* Bottom navy shape */}
      <path d="M 12 45 L 95 55 L 16 95 Z" fill="#16233F" />
      {/* Steel blue shape */}
      <path d="M 10 45 L 35 67 L 30 58 Z" fill="#3E5C76" />
      {/* Cyan shape */}
      <path d="M 11 32 L 95 55 L 35 67 Z" fill="#4FC3E8" />
      {/* Lime green shape */}
      <path d="M 10 10 L 95 55 L 35 65 Z" fill="url(#greenGrad)" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="font-heading font-semibold text-lg tracking-wider text-navy leading-none">DSS</span>
      <span className="text-[9px] font-medium tracking-tight text-navy leading-none mt-0.5">DYNAMIC STRATEGIC SOLUTIONS</span>
      <span className="text-[8px] italic text-navy/70 leading-none mt-0.5 font-serif">Advisory</span>
    </div>
  </Link>
);

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  // Filter services dynamically by categories
  const advisoryServices = Object.values(servicesDb).filter(s => s.category === "advisory-consulting");
  const accountingServices = Object.values(servicesDb).filter(s => s.category === "accounting-compliance");
  const taxationServices = Object.values(servicesDb).filter(s => s.category === "taxation");
  const auditServices = Object.values(servicesDb).filter(s => s.category === "audit-assurance");
  const financeServices = Object.values(servicesDb).filter(s => s.category === "corporate-finance");
  const wealthServices = Object.values(servicesDb).filter(s => s.category === "global-private-wealth");

  const megaMenuData = [
    {
      col: 1,
      categories: [
        {
          name: "Advisory & Consulting",
          href: "/services/advisory-consulting",
          subs: advisoryServices.map(s => ({ name: s.serviceName, href: `/services/advisory-consulting/${s.slug}` })),
        },
        {
          name: "Accounting & Compliance",
          href: "/services/accounting-compliance",
          subs: accountingServices.map(s => ({ name: s.serviceName, href: `/services/accounting-compliance/${s.slug}` })),
        },
      ],
    },
    {
      col: 2,
      categories: [
        {
          name: "Taxation",
          href: "/services/taxation",
          subs: taxationServices.map(s => ({ name: s.serviceName, href: `/services/taxation/${s.slug}` })),
        },
        {
          name: "Audit & Assurance",
          href: "/services/audit-assurance",
          subs: auditServices.map(s => ({ name: s.serviceName, href: `/services/audit-assurance/${s.slug}` })),
        },
      ],
    },
    {
      col: 3,
      categories: [
        {
          name: "Corporate Finance",
          href: "/services/corporate-finance",
          subs: financeServices.map(s => ({ name: s.serviceName, href: `/services/corporate-finance/${s.slug}` })),
        },
        {
          name: "Global & Private Wealth",
          href: "/services/global-private-wealth",
          subs: wealthServices.map(s => ({ name: s.serviceName, href: `/services/global-private-wealth/${s.slug}` })),
        },
      ],
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card-white shadow-xs border-b border-border-hairline ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation: Home, Services, About, Blog, Case Studies, Tools */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="font-body font-medium text-[15px] text-navy-secondary hover:text-cyan transition-colors py-2 rounded-md">
                Home
              </Link>
              
              {/* Services Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <button
                  className={`font-body font-medium text-[15px] hover:text-cyan transition-colors py-2 rounded-md inline-flex items-center gap-1 focus:outline-none ${
                    isMegaMenuOpen ? "text-cyan" : "text-navy-secondary"
                  }`}
                  aria-expanded={isMegaMenuOpen}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Desktop Mega Menu Dropdown */}
                {isMegaMenuOpen && (
                  <div className="absolute left-1/2 -translate-x-[45%] top-full w-[880px] bg-card-white border border-border-hairline p-8 rounded-lg shadow-lg grid grid-cols-3 gap-8 z-50 animate-fade-in">
                    {megaMenuData.map((column, colIdx) => (
                      <div key={colIdx} className="space-y-6">
                        {column.categories.map((cat, catIdx) => (
                          <div key={catIdx} className="space-y-2">
                            <Link
                              href={cat.href}
                              className="font-heading font-semibold text-xs tracking-wider text-navy hover:text-cyan uppercase transition-colors block"
                            >
                              {cat.name}
                            </Link>
                            <div className="flex flex-col gap-1 pl-2 border-l border-border-hairline">
                              {cat.subs.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={sub.href}
                                  className="text-[11px] text-text-secondary hover:text-cyan font-body leading-tight py-0.5 transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}

                    {/* Persistent Mega Menu CTA Strip */}
                    <div className="col-span-3 border-t border-border-hairline/60 pt-6 mt-4 flex items-center justify-between text-xs">
                      <span className="font-body text-text-secondary">
                        Not sure which service you need? Let our advisors guide you.
                      </span>
                      <Link
                        href="/contact?autofocus=true"
                        className="inline-flex items-center gap-1.5 bg-navy hover:bg-navy-secondary text-card-white px-4 py-2 rounded font-body font-semibold text-[11px] transition-colors"
                      >
                        Talk to an advisor <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="font-body font-medium text-[15px] text-navy-secondary hover:text-cyan transition-colors py-2 rounded-md">
                About
              </Link>

              <Link href="/blog" className="font-body font-medium text-[15px] text-navy-secondary hover:text-cyan transition-colors py-2 rounded-md">
                Blog
              </Link>

              <Link href="/case-studies" className="font-body font-medium text-[15px] text-navy-secondary hover:text-cyan transition-colors py-2 rounded-md">
                Case Studies
              </Link>

              <Link href="/tools" className="font-body font-medium text-[15px] text-navy-secondary hover:text-cyan transition-colors py-2 rounded-md">
                Tools
              </Link>
            </nav>
 
            {/* Right side CTAs */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+919840053053"
                className="flex items-center gap-2 font-body font-medium text-[15px] text-navy hover:text-cyan transition-colors rounded-md"
              >
                <Phone className="w-4 h-4 text-cyan" />
                +91 9840 053 053
              </a>
              <Link
                href="/contact?autofocus=true"
                className="bg-navy hover:bg-navy-secondary text-card-white px-5 py-2.5 rounded font-body font-medium text-[14px] transition-all hover:shadow-md border-t-2 border-t-chartreuse focus:outline-none focus-visible:ring-2 focus-visible:ring-chartreuse focus-visible:ring-offset-2"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <a href="tel:+919840053053" className="p-2 text-navy hover:text-cyan transition-colors focus:outline-none rounded-md" aria-label="Call Advisory Desk">
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-navy hover:text-cyan transition-colors focus:outline-none rounded-md"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden animate-fade-in" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className="fixed inset-y-0 right-0 max-w-xs w-full bg-card-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out border-l border-border-hairline flex flex-col justify-between"
        style={{ transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="p-6 overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-border-hairline">
            <span className="font-heading font-semibold text-lg text-navy">Menu</span>
            <button
              onClick={toggleMobileMenu}
              className="p-1 rounded-md text-navy hover:text-cyan focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-6">
            <Link
              href="/"
              onClick={toggleMobileMenu}
              className="font-body font-medium text-[15px] text-navy hover:text-cyan transition-colors"
            >
              Home
            </Link>

            {/* Mobile Services Sections */}
            <div className="space-y-4 border-t border-border-hairline/60 pt-4">
              <span className="block text-xs font-heading font-semibold text-cyan uppercase tracking-wider">Services</span>
              {megaMenuData.map((column, colIdx) => (
                <div key={colIdx} className="space-y-4">
                  {column.categories.map((cat, catIdx) => (
                    <div key={catIdx} className="space-y-2">
                      <span className="block text-xs font-semibold tracking-wider text-text-muted uppercase">{cat.name}</span>
                      <div className="flex flex-col gap-2 pl-2 border-l border-border-hairline">
                        {cat.subs.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={toggleMobileMenu}
                            className="block font-body text-[13px] text-navy-secondary hover:text-cyan transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                        <Link
                          href={cat.href}
                          onClick={toggleMobileMenu}
                          className="block font-body text-[13px] text-cyan hover:text-navy font-semibold transition-colors"
                        >
                          Explore Category Hub →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              onClick={toggleMobileMenu}
              className="font-body font-medium text-[15px] text-navy hover:text-cyan transition-colors pt-4 border-t border-border-hairline"
            >
              About
            </Link>

            <Link
              href="/blog"
              onClick={toggleMobileMenu}
              className="font-body font-medium text-[15px] text-navy hover:text-cyan transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/case-studies"
              onClick={toggleMobileMenu}
              className="font-body font-medium text-[15px] text-navy hover:text-cyan transition-colors"
            >
              Case Studies
            </Link>

            <Link
              href="/tools"
              onClick={toggleMobileMenu}
              className="font-body font-medium text-[15px] text-navy hover:text-cyan transition-colors"
            >
              Tools
            </Link>
          </nav>
        </div>

        {/* Fixed Mobile Bottom CTA Bar */}
        <div className="p-6 border-t border-border-hairline bg-off-white">
          <Link
            href="/contact?autofocus=true"
            onClick={toggleMobileMenu}
            className="w-full block bg-navy hover:bg-navy-secondary text-card-white text-center py-3 rounded font-body font-medium text-[14px] transition-all border-t-2 border-t-chartreuse shadow-sm"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
