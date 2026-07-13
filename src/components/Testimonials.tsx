import React from "react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "DSS Corp's tax advisory during our restructuring saved us significant compliance friction. Their CAs write clear, actionable papers rather than offering generic templates.",
      author: "V. Rajesh Kumar",
      title: "Founder & CEO",
      company: "Indo-Tech Automation",
      initials: "VR",
    },
    {
      quote: "Setting up our private trust and organizing legacy holdings was handled with absolute confidentiality and precision. Their estate structuring advice is truly world-class.",
      author: "Meenakshi Sundaram",
      title: "Family Office Trustee",
      company: "Sundaram Heritage Trust",
      initials: "MS",
    },
    {
      quote: "As an NRI, repatriating sale proceeds from my Chennai property was a compliance nightmare under FEMA. DSS Corp managed the whole 15CA/15CB clearance seamlessly.",
      author: "Dr. Anand Krishnan",
      title: "Clinical Director",
      company: "NHS Trust, United Kingdom",
      initials: "AK",
    },
  ];

  return (
    <section className="py-24 bg-card-white border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block mb-2">
            Client Voices
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-navy">
            Trusted by founders and families
          </h2>
          <p className="font-body text-text-secondary mt-3 max-w-xl mx-auto">
            Feedback from business owners and NRI families we support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-card-white border border-border-hairline p-8 rounded-lg shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-cyan/20 mb-6" />
                <p className="font-body text-sm leading-relaxed text-text-secondary italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border-hairline/60">
                {/* Initials-based Avatar representing a premium, stock-free aesthetic */}
                <div className="w-10 h-10 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center flex-shrink-0 text-navy font-heading font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-navy">
                    {t.author}
                  </h4>
                  <p className="text-xs text-text-muted font-body mt-0.5">
                    {t.title}, <span className="text-text-secondary">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
