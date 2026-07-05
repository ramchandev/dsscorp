import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Client Case Studies & Outcomes | DSS Corp Advisory",
  description:
    "Real advisory outcomes across GST restructuring, audit readiness, FEMA repatriation, and family wealth structuring for Indian businesses and NRIs.",
  path: "/case-studies",
});

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
