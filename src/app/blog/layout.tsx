import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tax & Compliance Blog | DSS Corp Advisory",
  description:
    "Expert articles on GST, corporate tax, startup compliance, NRI wealth, FEMA repatriation, and succession planning from practicing CAs in Chennai.",
  path: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
