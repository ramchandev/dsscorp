import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ | DSS Corp Advisory",
  description:
    "Answers to common questions on startup advisory, GST compliance, corporate tax, audits, fundraising, NRI tax, and FEMA repatriation in India.",
  path: "/faq",
});

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
