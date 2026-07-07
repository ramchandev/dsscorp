import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "DSS Corp Advisory | Chartered Accountants & Strategic Partners",
  description:
    "Financial clarity for founders, businesses, and families who can't afford to get it wrong. Led by Certified Chartered Accountants in Chennai.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
