import React from "react";
import { Phone, MessageSquare } from "lucide-react";

interface CTABandProps {
  title?: string;
  description?: string;
}

export default function CTABand({
  title = "Begin your scoping consultation",
  description = "We do not execute automated sales calls. You will be connected directly with a senior partner to review compliance triggers.",
}: CTABandProps) {
  return (
    <section id="scoping-consultation" className="relative bg-navy text-card-white overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#8CC63F] via-[#4FC3E8] to-[#16233F]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block mb-3">
          Direct Advisory Scoping
        </span>
        <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-card-white tracking-tight max-w-2xl mx-auto leading-tight">
          {title}
        </h3>
        <p className="font-body text-sm text-text-muted mt-4 max-w-lg mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 w-full sm:w-auto">
          <a
            href="tel:+919840053053"
            className="w-full sm:w-auto bg-card-white hover:bg-off-white text-navy px-8 py-3.5 rounded font-body font-semibold text-[15px] transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Partner Desk
          </a>
          <a
            href="https://wa.me/919840053053"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-navy-secondary hover:bg-navy border border-navy-secondary hover:border-cyan/50 text-card-white px-8 py-3.5 rounded font-body font-medium text-[15px] flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-cyan" />
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
