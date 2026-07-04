import React from "react";

export type PersonaType = "startup" | "msme" | "hni" | "nri";

interface PersonaBadgeProps {
  persona: PersonaType;
  dark?: boolean;
}

export default function PersonaBadge({ persona, dark = false }: PersonaBadgeProps) {
  const configs = {
    startup: { 
      label: "Startup Founder", 
      class: dark 
        ? "bg-chartreuse/15 text-chartreuse border-chartreuse/40" 
        : "bg-chartreuse/10 text-[#618f27] border-chartreuse/35" 
    },
    msme: { 
      label: "MSME Owner", 
      class: dark 
        ? "bg-cyan/15 text-cyan border-cyan/40" 
        : "bg-cyan/10 text-navy border-cyan/35" 
    },
    hni: { 
      label: "HNI / Family Office", 
      class: dark 
        ? "bg-card-white/10 text-card-white border-card-white/30" 
        : "bg-navy/10 text-navy border-navy/35" 
    },
    nri: { 
      label: "NRI Client", 
      class: dark 
        ? "bg-cyan/15 text-cyan border-cyan/40" 
        : "bg-steel/15 text-navy border-steel/35" 
    },
  };

  const current = configs[persona] || configs.msme;

  return (
    <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-heading font-semibold border rounded-sm ${current.class}`}>
      {current.label}
    </span>
  );
}
