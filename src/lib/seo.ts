import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://dsscorp.in";
export const SITE_NAME = "DSS Corp Advisory";
export const DEFAULT_DESCRIPTION =
  "Financial clarity for founders, businesses, and families who can't afford to get it wrong. Led by Certified Chartered Accountants in Chennai.";
export const DEFAULT_OG_IMAGE = "/og-default.jpg";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

/** Normalizes a route to a self-referencing relative canonical path. */
export function normalizeCanonicalPath(path = "/"): string {
  if (!path || path === "/") {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, "") || "/";
}

export function pageCanonical(path: string): Pick<Metadata, "alternates"> {
  return {
    alternates: {
      canonical: normalizeCanonicalPath(path),
    },
  };
}

export function absoluteUrl(path = ""): string {
  return `${SITE_URL}${normalizeCanonicalPath(path)}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = "website",
}: PageMetadataOptions): Metadata {
  const canonicalPath = normalizeCanonicalPath(path);
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
