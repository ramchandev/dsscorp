import type { MetadataRoute } from "next";
import { blogDb } from "@/lib/blog";
import {
  BLOG_POSTS_PER_PAGE,
  getAllArticlesSorted,
  getArticlePath,
} from "@/lib/blog-utils";
import { caseStudiesDb } from "@/lib/case-studies";
import { categoriesDb, servicesDb } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

const TOOL_SLUGS = [
  "gst-calculator",
  "income-tax-calculator",
  "valuation-estimator",
  "incorporation-estimator",
  "fema-checker",
  "wealth-readiness-quiz",
];

function toLastModified(article: { publishedAt?: string; date: string }): Date {
  const timestamp = article.publishedAt
    ? Date.parse(article.publishedAt)
    : Date.parse(article.date);

  return Number.isNaN(timestamp) ? new Date("2026-07-01") : new Date(timestamp);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const articles = getAllArticlesSorted();
  const newestArticleDate = articles.length
    ? toLastModified(articles[0])
    : now;
  const totalBlogPages = Math.max(1, Math.ceil(articles.length / BLOG_POSTS_PER_PAGE));

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    {
      url: absoluteUrl("/about/madan-gopal-narayanan"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/about/deepa-madan"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    {
      url: absoluteUrl("/blog"),
      lastModified: newestArticleDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: absoluteUrl("/case-studies"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/tools"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/privacy-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms-of-service"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPaginationPages: MetadataRoute.Sitemap = Array.from(
    { length: totalBlogPages - 1 },
    (_, index) => ({
      url: absoluteUrl(`/blog?page=${index + 2}`),
      lastModified: newestArticleDate,
      changeFrequency: "weekly" as const,
      priority: 0.55,
    })
  );

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

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(getArticlePath(article)),
    lastModified: toLastModified(article),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogCategorySlugs = [
    ...new Set(Object.values(blogDb).map((article) => article.category)),
  ].sort();

  const blogCategoryPages: MetadataRoute.Sitemap = blogCategorySlugs.map((slug) => ({
    url: absoluteUrl(`/blog/category/${slug}`),
    lastModified: newestArticleDate,
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
    ...blogPaginationPages,
    ...categoryPages,
    ...servicePages,
    ...blogPages,
    ...blogCategoryPages,
    ...caseStudyPages,
    ...toolPages,
  ];
}
