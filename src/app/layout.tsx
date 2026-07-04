import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DSS Corp Advisory | Chartered Accountants & Strategic Partners",
  description: "Financial clarity for founders, businesses, and families who can't afford to get it wrong. Led by Certified Chartered Accountants in Chennai.",
  metadataBase: new URL("https://dsscorp.in"),
  appleWebApp: {
    title: "DSS CORP",
  },
  openGraph: {
    title: "DSS Corp Advisory | Chartered Accountants & Strategic Partners",
    description: "Financial clarity for founders, businesses, and families who can't afford to get it wrong. Led by Certified Chartered Accountants in Chennai.",
    url: "https://dsscorp.in",
    siteName: "DSS Corp Advisory",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "DSS Corp Advisory - Strategic Solutions for Corporate Success",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSS Corp Advisory | Chartered Accountants & Strategic Partners",
    description: "Financial clarity for founders, businesses, and families who can't afford to get it wrong. Led by Certified Chartered Accountants in Chennai.",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
