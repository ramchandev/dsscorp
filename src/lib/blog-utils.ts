import { blogDb } from "@/lib/blog";
import type { InsightArticle } from "@/lib/blog-types";

export const BLOG_POSTS_PER_PAGE = 6;

export function getArticlePath(article: Pick<InsightArticle, "category" | "slug">): string {
  return `/blog/${article.category}/${article.slug}`;
}

export function parseArticleDate(article: InsightArticle): number {
  if (article.publishedAt) {
    return Date.parse(article.publishedAt);
  }

  const parsed = Date.parse(article.date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function getAllArticlesSorted(): InsightArticle[] {
  return Object.values(blogDb).sort(
    (a, b) => parseArticleDate(b) - parseArticleDate(a)
  );
}

export function getArticleByCategoryAndSlug(
  category: string,
  slug: string
): InsightArticle | undefined {
  const article = blogDb[slug];
  if (!article || article.category !== category) {
    return undefined;
  }

  return article;
}

export function filterArticles(
  articles: InsightArticle[],
  options: { category?: string; query?: string }
): InsightArticle[] {
  const normalizedQuery = options.query?.trim().toLowerCase();

  return articles.filter((article) => {
    const matchesCategory =
      !options.category ||
      options.category === "All" ||
      article.category === options.category ||
      article.categoryName === options.category;

    const matchesQuery =
      !normalizedQuery ||
      article.title.toLowerCase().includes(normalizedQuery) ||
      article.excerpt.toLowerCase().includes(normalizedQuery) ||
      article.directAnswer.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}

export function paginateArticles<T>(items: T[], page: number, perPage = BLOG_POSTS_PER_PAGE) {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * perPage;

  return {
    items: items.slice(start, start + perPage),
    currentPage,
    totalPages,
    totalItems,
    perPage,
  };
}

export function getBlogCategoryOptions(): string[] {
  return [
    "All",
    "Advisory & Consulting",
    "Taxation",
    "Global & Private Wealth",
  ];
}
