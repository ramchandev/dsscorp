"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MessageSquare } from "lucide-react";

type SubmissionDetails = {
  name: string;
  email: string;
};

const STORAGE_KEY = "dsscorp_contact_submission";

export default function ThankYouContent() {
  const [submission, setSubmission] = useState<SubmissionDetails | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as SubmissionDetails;
      if (parsed.name && parsed.email) {
        setSubmission(parsed);
      }
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chartreuse/15 border border-chartreuse/35">
        <CheckCircle2 className="w-8 h-8 text-navy" />
      </div>

      <div className="space-y-4">
        <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
          Request Received
        </span>
        <h1 className="font-heading font-semibold text-3xl sm:text-4xl text-navy tracking-tight leading-tight">
          {submission ? `Thank you, ${submission.name}` : "Thank you"}
        </h1>
        <p className="font-body text-sm text-text-secondary leading-relaxed max-w-lg mx-auto">
          Your scoping request has been sent to our partner desk.
          {submission ? (
            <>
              {" "}
              A senior CA from DSS Corp Advisory will contact you at{" "}
              <strong className="text-navy">{submission.email}</strong> within 24 hours.
            </>
          ) : (
            <> A senior CA from DSS Corp Advisory will contact you within 24 hours.</>
          )}
        </p>
      </div>

      <div className="bg-card-white border border-border-hairline rounded-lg p-6 text-left space-y-4">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-cyan flex-shrink-0" />
          <h2 className="font-heading font-semibold text-sm text-navy">What happens next</h2>
        </div>
        <ol className="space-y-3 font-body text-xs text-text-secondary list-decimal list-inside">
          <li>Our team reviews your scope outline and assigns the right CA partner.</li>
          <li>You receive a confirmation call or email to align on timing.</li>
          <li>We conduct a structured 20-minute scoping session and share next steps.</li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-secondary text-card-white font-heading font-semibold text-xs px-6 py-3 rounded border-t border-t-chartreuse transition-all"
        >
          Explore Our Services
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="https://wa.me/919840053053"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-card-white hover:bg-off-white text-navy border border-border-hairline font-body font-medium text-xs px-6 py-3 rounded transition-all"
        >
          <MessageSquare className="w-4 h-4 text-cyan" />
          Message on WhatsApp
        </a>
      </div>

      <p className="text-[11px] font-body text-text-muted">
        Need to add more details?{" "}
        <Link href="/contact" className="text-cyan hover:underline font-medium">
          Return to contact page
        </Link>
      </p>
    </div>
  );
}
