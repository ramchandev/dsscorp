import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | DSS Corp Advisory Chennai",
  description:
    "Book a free advisory scoping call with ICAI-registered Chartered Accountants in Chennai. Direct phone, WhatsApp, and email desk available.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
