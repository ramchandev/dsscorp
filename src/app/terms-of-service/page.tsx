import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Terms of Service | DSS Corp Advisory",
  description: "Read our terms of service and website usage disclaimer policy regarding regulatory calculators and legal accounting inputs.",
};

export default function TermsOfServicePage() {
  const crumbs = [
    { label: "Terms of Service" },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        <section className="py-16 bg-card-white border-b border-border-hairline">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-semibold text-3xl text-navy mb-6">
              Terms of Service
            </h1>
            <p className="font-body text-xs text-text-muted mb-8">
              Last Updated: July 04, 2026
            </p>

            <div className="space-y-6 font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
              <p>
                Welcome to the website of DSS Corp Advisory. By accessing or using our website, tools, and calculators, you agree to comply with and be bound by the following terms of service.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                1. No Professional CA-Client Relationship
              </h2>
              <p>
                The information provided on this website, including articles, insights, and interactive calculators, is for general illustrative and educational purposes only. It does not constitute formal legal, financial, or accounting advice. Accessing this website or using our calculators does not establish a professional Chartered Accountant-client relationship. A formal relationship is only activated upon signing a bilateral engagement letter.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                2. Calculator Disclaimer
              </h2>
              <p>
                All calculations, output tax breakups, valuation ranges, and timelines provided by our online tools are estimates based on standard regulatory parameters. While we strive to maintain accuracy, tax rates and rules change frequently. DSS Corp does not guarantee the accuracy of calculator outputs and is not liable for business decisions made based on these estimations.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                3. Intellectual Property
              </h2>
              <p>
                All content, text, designs, brand marks, and interactive React calculator scripts published on this site are the intellectual property of DSS Corp Advisory. Unauthorized reproduction, distribution, or reverse engineering of our proprietary tools is strictly prohibited.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                4. Liability Limitations
              </h2>
              <p>
                DSS Corp and its partners shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this site, its content, or tools.
              </p>

              <h2 className="font-heading font-semibold text-lg text-navy pt-4">
                5. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any legal actions or disputes arising from website usage shall be subject to the exclusive jurisdiction of the courts in Chennai, India.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
