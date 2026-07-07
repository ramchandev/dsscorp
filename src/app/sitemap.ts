import type { MetadataRoute } from "next";
import { blogDb } from "@/lib/blog";
import { caseStudiesDb } from "@/lib/case-studies";
import { categoriesDb, servicesDb } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";
import { getArticlePath } from "@/lib/blog-utils";

const TOOL_SLUGS = [
  "gst-calculator",
  "income-tax-calculator",
  "valuation-estimator",
  "incorporation-estimator",
  "fema-checker",
  "wealth-readiness-quiz",
];

const BLOG_CATEGORY_SLUGS = [
  "advisory-consulting",
  "accounting-compliance",
  "taxation",
  "audit-assurance",
  "corporate-finance",
  "global-private-wealth",
];

function parseArticleDate(date: string): Date {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? new Date("2026-07-01") : new Date(parsed);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    {
      url: absoluteUrl("/about/madan-gopal-narayanan"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/case-studies"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/tools"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/privacy-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms-of-service"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = Object.keys(categoriesDb).map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const servicePages: MetadataRoute.Sitemap = Object.values(servicesDb).map((service) => ({
    url: absoluteUrl(`/services/${service.category}/${service.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = Object.values(blogDb).map((article) => ({
    url: absoluteUrl(getArticlePath(article)),
    lastModified: parseArticleDate(article.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORY_SLUGS.map((slug) => ({
    url: absoluteUrl(`/blog/category/${slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.65,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = Object.values(caseStudiesDb).map((study) => ({
    url: absoluteUrl(`/case-studies/${study.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const toolPages: MetadataRoute.Sitemap = TOOL_SLUGS.map((slug) => ({
    url: absoluteUrl(`/tools/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...servicePages,
    ...blogPages,
    ...blogCategoryPages,
    ...caseStudyPages,
    ...toolPages,
  ];
}
