import React from "react";
import { MessageSquare, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative bg-navy text-card-white overflow-hidden">
      {/* Premium Gradient Top Accent Line (Chartreuse -> Cyan -> Navy) */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#8CC63F] via-[#4FC3E8] to-[#16233F]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block mb-3">
          Get Started
        </span>
        <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-card-white tracking-tight max-w-2xl mx-auto leading-tight">
          Get clear on tax and compliance.
        </h2>
        <p className="font-body text-sm text-text-muted mt-4 max-w-lg mx-auto leading-relaxed">
          Book a free 20-minute call with our partners.
        </p>
        <p className="font-body text-sm text-text-muted mt-1 max-w-lg mx-auto leading-relaxed">
          No pressure. Just a clear map of what you need next.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 w-full sm:w-auto">
          <Link
            href="/contact?autofocus=true"
            className="w-full sm:w-auto bg-card-white hover:bg-off-white text-navy px-8 py-3.5 rounded font-body font-semibold text-[15px] transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan text-center"
          >
            Book a Free Consultation
          </Link>
          <a
            href="https://wa.me/919840053053"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-navy-secondary hover:bg-navy border border-navy-secondary hover:border-cyan/50 text-card-white px-8 py-3.5 rounded font-body font-medium text-[15px] flex items-center justify-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          >
            <MessageSquare className="w-4 h-4 text-cyan" />
            Connect on WhatsApp
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 text-xs font-body text-text-muted">
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Or call directly at: <a href="tel:+919840053053" className="hover:text-cyan transition-colors underline font-medium">+91 9840 053 053</a></span>
        </div>
      </div>
    </section>
  );
}
