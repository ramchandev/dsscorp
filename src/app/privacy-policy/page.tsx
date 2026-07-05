import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy | DSS Corp Advisory",
  description:
    "Read our privacy policy regarding personal details, corporate tax financial logs, and cookie storage declarations.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const crumbs = [
    { label: "Privacy Policy" },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        <section className="py-16 bg-card-white border-b border-border-hairline">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-semibold text-3xl text-navy mb-6">
              Privacy Policy
            </h1>
            <p className="font-body text-xs text-text-muted mb-8">
              Last Updated: July 04, 2026
            </p>

            <div className="space-y-6 font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
              <p>
                At DSS Corp Advisory, we respect your privacy and are committed to protecting the confidential information you share with us. This policy details how we collect, use, and shield data collected via our website or during professional consultations.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                1. Information Collection
              </h2>
              <p>
                We collect personal information (such as name, email address, phone number, and service interests) when you voluntarily submit forms, use our interactive calculators, or schedule consultations. We do not store sensitive financial details or transaction passwords on our web servers.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                2. Information Usage
              </h2>
              <p>
                Collected data is used solely to provide requested advisory services, deliver calculations results, schedule consultant calls, and send regulatory updates. We never sell, trade, or share client information with third parties for commercial marketing purposes.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                3. Security Measures
              </h2>
              <p>
                We implement industry-standard secure socket layers (SSL) and database encryption to safeguard communication channels and form submission entries. Access to advisory consultation files is strictly restricted to authorized partners and auditors.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                4. Cookies & Trackers
              </h2>
              <p>
                We use basic cookies and anonymous analytics tags (such as Google Analytics) to monitor user journeys, measure scroll-depth, track page performance, and optimize our conversion workflows. You can disable cookies in your web browser settings at any time.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                5. Contact Details
              </h2>
              <p>
                For questions regarding this privacy policy or to request data removal, please contact our data compliance desk at: <a href="mailto:compliance@dsscorp.in" className="text-cyan hover:underline">compliance@dsscorp.in</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
