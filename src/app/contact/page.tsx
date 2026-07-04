"use client";

import React, { useState, Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MessageSquare, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialPersona = searchParams.get("persona") || "";
  const initialSubject = searchParams.get("subject") 
    ? `I am interested in: ${searchParams.get("subject")}`
    : "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState(initialSubject);
  const [profile, setProfile] = useState(initialPersona);
  const [isSuccess, setIsSuccess] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Autofocus name input and scroll to form if query param is present
    if (searchParams.get("autofocus") === "true") {
      setTimeout(() => {
        formContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        nameInputRef.current?.focus();
      }, 100);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Name and Email are required.");
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div ref={formContainerRef} className="bg-card-white border border-border-hairline p-8 rounded-lg shadow-2xs space-y-6">
      <h3 className="font-heading font-semibold text-lg text-navy border-b border-border-hairline/60 pb-3">
        Contact Us
      </h3>

      {isSuccess ? (
        <div className="bg-chartreuse/10 border border-chartreuse/35 p-6 rounded-lg text-center space-y-4 animate-fade-in font-body">
          <CheckCircle2 className="w-10 h-10 text-navy mx-auto" />
          <h4 className="font-heading font-semibold text-navy text-sm">Consultation Scheduled</h4>
          <p className="text-xs text-text-secondary leading-relaxed">
            Thank you, <strong>{name}</strong>. A senior CA partner from our team will contact you via <strong>{email}</strong> within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-body text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-heading font-semibold text-navy uppercase mb-1">Full Name</label>
              <input
                ref={nameInputRef}
                type="text"
                placeholder="Enter name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-off-white border border-border-hairline rounded px-3 py-2.5 text-xs focus:outline-none focus:border-cyan text-navy"
                required
              />
            </div>
            <div>
              <label className="block font-heading font-semibold text-navy uppercase mb-1">EMAIL</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-off-white border border-border-hairline rounded px-3 py-2.5 text-xs focus:outline-none focus:border-cyan text-navy"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-heading font-semibold text-navy uppercase mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+91..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-off-white border border-border-hairline rounded px-3 py-2.5 text-xs focus:outline-none focus:border-cyan text-navy"
            />
          </div>

          <div>
            <label className="block font-heading font-semibold text-navy uppercase mb-1">Briefly outline your triggers / timelines</label>
            <textarea
              rows={4}
              placeholder="E.g., Raising venture seed round next month, need company structured under DPIIT guidelines..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-off-white border border-border-hairline rounded px-3 py-2.5 text-xs focus:outline-none focus:border-cyan text-navy"
            />
          </div>

          <div>
            <label className="block font-heading font-semibold text-navy uppercase mb-1">Your Profile (Optional)</label>
            <input
              type="text"
              placeholder="E.g., Business Owner, Startup Founder, NRI..."
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className="w-full bg-off-white border border-border-hairline rounded px-3 py-2.5 text-xs focus:outline-none focus:border-cyan text-navy"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-navy hover:bg-navy-secondary text-card-white font-heading font-semibold text-xs py-3 rounded border-t border-t-chartreuse transition-all flex items-center justify-center gap-2"
          >
            Send to DSS Team
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const crumbs = [
    { label: "Contact Us" },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Section */}
        <section className="py-16 border-b border-border-hairline bg-card-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Connect Directly
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight leading-tight">
                Scoping & Partner Desk Contacts
              </h1>
              <p className="font-body text-base text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                Have an urgent corporate filing, GST litigation, or repatriation certificate clearance? Dial our partner desks directly or request an aligned call below.
              </p>
            </div>
          </div>
        </section>

        {/* Contacts Row */}
        <section className="py-12 border-b border-border-hairline bg-off-white/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <a
                href="tel:+919840053053"
                className="bg-card-white border border-border-hairline p-6 rounded-lg flex items-center gap-4 hover:border-cyan/50 hover:shadow-2xs transition-all group"
              >
                <div className="p-3 bg-cyan/10 rounded text-cyan group-hover:bg-navy group-hover:text-card-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-text-muted font-heading font-semibold">Direct Call Desk</span>
                  <span className="block text-sm font-heading font-semibold text-navy">+91 9840 053 053</span>
                </div>
              </a>

              <a
                href="https://wa.me/919840053053"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-white border border-border-hairline p-6 rounded-lg flex items-center gap-4 hover:border-cyan/50 hover:shadow-2xs transition-all group"
              >
                <div className="p-3 bg-chartreuse/10 rounded text-navy group-hover:bg-navy group-hover:text-card-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-text-muted font-heading font-semibold">WhatsApp Scoping</span>
                  <span className="block text-sm font-heading font-semibold text-navy">Connect on WhatsApp</span>
                </div>
              </a>

              <a
                href="mailto:info@dsscorp.in"
                className="bg-card-white border border-border-hairline p-6 rounded-lg flex items-center gap-4 hover:border-cyan/50 hover:shadow-2xs transition-all group"
              >
                <div className="p-3 bg-steel/10 rounded text-navy group-hover:bg-navy group-hover:text-card-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-text-muted font-heading font-semibold">Email Desk</span>
                  <span className="block text-sm font-heading font-semibold text-navy">info@dsscorp.in</span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* Main Forms Layout */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Section */}
            <div className="lg:col-span-6 space-y-6">
              <Suspense fallback={<div className="text-xs font-body text-text-muted">Loading contact parameters...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Agenda & office details (Right) */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Call Agenda Card */}
              <div className="bg-navy text-card-white p-8 rounded-lg border border-navy-secondary space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-cyan" />
                  <h4 className="font-heading font-semibold text-lg text-card-white">Agenda of the Scoping Call</h4>
                </div>
                <p className="text-xs font-body text-text-muted leading-relaxed">
                  We value your time. Our structured 20-minute preliminary scoping session is designed to establish immediate compliance parameters:
                </p>

                <div className="space-y-4 font-body text-xs text-card-white/90">
                  <div className="flex gap-3">
                    <span className="font-heading font-bold text-chartreuse">01.</span>
                    <p>
                      <strong>Introductions & Operational Context (5 min):</strong><br />
                      Reviewing your current legal structure, operating states, and business model dynamics.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-heading font-bold text-chartreuse">02.</span>
                    <p>
                      <strong>Identify Filing Constraints & Timelines (10 min):</strong><br />
                      Mapping out GST audits, direct tax deadlines, FEMA capital rules, or pending corporate resolutions.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-heading font-bold text-chartreuse">03.</span>
                    <p>
                      <strong>Bilateral Advisory Proposal (5 min):</strong><br />
                      Structuring a fixed-fee proposal detailing specific deliverables, audit teams, and delivery times.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Coordinates */}
              <div className="bg-card-white border border-border-hairline p-8 rounded-lg space-y-6">
                <h4 className="font-heading font-semibold text-base text-navy border-b border-border-hairline/60 pb-3">Office Coordinates</h4>
                <div className="space-y-4 font-body text-xs sm:text-sm text-text-secondary">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>DSS Corp Advisory</strong><br />
                      Flat 5, SRI Apartments, 2nd Floor, New No.19, Moosa Street, T.Nagar, Chennai-600017
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                    <p>
                      Monday - Friday: 9:30 AM to 6:30 PM (IST)<br />
                      Saturday: Prior scheduled appointments only
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
