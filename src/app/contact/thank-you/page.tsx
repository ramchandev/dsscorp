import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ThankYouContent from "./ThankYouContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Thank You | DSS Corp Advisory",
  description: "Your advisory scoping request has been received by the DSS Corp partner desk.",
  path: "/contact/thank-you",
  noIndex: true,
});

export default function ContactThankYouPage() {
  const crumbs = [
    { label: "Contact Us", href: "/contact" },
    { label: "Thank You" },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ThankYouContent />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
