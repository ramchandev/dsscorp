"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919840053053"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-card-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse Outer Rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
      <span className="absolute inline-flex h-12 w-12 rounded-full bg-[#25D366]/40 opacity-50 animate-pulse pointer-events-none" />

      {/* WhatsApp Icon */}
      <MessageSquare className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}
