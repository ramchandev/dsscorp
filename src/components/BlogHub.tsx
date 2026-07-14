"use client";

import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Search, ChevronRight, Clock, ChevronLeft } from "lucide-react";
import type { InsightArticle } from "@/lib/blog-types";
import {
  BLOG_POSTS_PER_PAGE,
  getArticlePath,
  getBlogCategoryOptions,
} from "@/lib/blog-utils";
import PersonaBadge from "@/components/PersonaBadge";
import BlogAuthorBadge from "@/components/BlogAuthorBadge";

type BlogHubProps = {
  articles: InsightArticle[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  activeCategory: string;
  searchQuery: string;
};

function buildBlogQuery(params: {
  page?: number;
  category?: string;
  q?: string;
}) {
  const search = new URLSearchParams();

  if (params.category && params.category !== "All") {
    search.set("category", params.category);
  }

  if (params.q?.trim()) {
    search.set("q", params.q.trim());
  }

  if (params.page && params.page > 1) {
    search.set("page", String(params.page));
  }

  const query = search.toString();
  return query ? `?${query}` : "";
}

export default function BlogHub({
  articles,
  currentPage,
  totalPages,
  totalItems,
  activeCategory,
  searchQuery,
}: BlogHubProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(searchQuery);
  const categories = getBlogCategoryOptions();

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const navigate = (next: { page?: number; category?: string; q?: string }) => {
    const href = `${pathname}${buildBlogQuery({
      page: next.page ?? 1,
      category: next.category ?? activeCategory,
      q: next.q ?? query,
    })}`;

    startTransition(() => {
      router.push(href);
    });
  };

  const handleCategoryChange = (category: string) => {
    navigate({ category, page: 1, q: query });
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate({ category: activeCategory, page: 1, q: query });
  };

  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * BLOG_POSTS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * BLOG_POSTS_PER_PAGE, totalItems);

  return (
    <>
      <section className="py-12 border-b border-border-hairline bg-off-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded text-xs font-body font-semibold transition-all border ${
                    isActive
                      ? "bg-navy text-card-white border-navy"
                      : "bg-card-white border-border-hairline text-navy hover:border-cyan/40"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-text-muted" />
            </span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2 border border-border-hairline rounded bg-card-white font-body text-xs focus:outline-none focus:ring-1 focus:ring-cyan text-navy"
            />
          </form>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <p className="font-body text-xs text-text-secondary">
              Showing {startItem}-{endItem} of {totalItems} articles
              {isPending ? " · Updating..." : ""}
            </p>
            <p className="font-body text-xs text-text-muted">
              Sorted by latest first
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-body text-sm text-text-secondary">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
                <article
                  key={article.slug}
                  className="bg-card-white border border-border-hairline rounded-lg overflow-hidden flex flex-col justify-between hover:border-cyan/50 hover:shadow-2xs group transition-all"
                >
                  <div className="relative h-48 w-full bg-navy-secondary overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={idx < 3 && currentPage === 1}
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-heading font-bold text-cyan uppercase tracking-wider">
                          {article.categoryName}
                        </span>
                        <PersonaBadge persona={article.persona} />
                      </div>

                      <h2 className="font-heading font-semibold text-base sm:text-lg text-navy group-hover:text-cyan transition-colors mb-2 line-clamp-2">
                        <Link href={getArticlePath(article)}>{article.title}</Link>
                      </h2>

                      <div className="mb-3">
                        <BlogAuthorBadge author={article.author} />
                      </div>

                      <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border-hairline/60 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1.5 text-[10px] text-text-muted font-body">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>

                      <Link
                        href={getArticlePath(article)}
                        className="inline-flex items-center gap-1 text-xs font-body font-semibold text-navy group-hover:text-cyan transition-colors"
                      >
                        Read <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav
              className="mt-12 flex items-center justify-center gap-2"
              aria-label="Blog pagination"
            >
              <Link
                href={`${pathname}${buildBlogQuery({
                  page: currentPage - 1,
                  category: activeCategory,
                  q: searchQuery,
                })}`}
                aria-disabled={currentPage <= 1}
                className={`inline-flex items-center gap-1 px-4 py-2 rounded border text-xs font-body font-semibold transition-colors ${
                  currentPage <= 1
                    ? "pointer-events-none opacity-40 border-border-hairline text-text-muted"
                    : "border-border-hairline text-navy hover:border-cyan/40"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Link>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <Link
                  key={pageNumber}
                  href={`${pathname}${buildBlogQuery({
                    page: pageNumber,
                    category: activeCategory,
                    q: searchQuery,
                  })}`}
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                  className={`px-3.5 py-2 rounded border text-xs font-body font-semibold transition-colors ${
                    pageNumber === currentPage
                      ? "bg-navy text-card-white border-navy"
                      : "border-border-hairline text-navy hover:border-cyan/40"
                  }`}
                >
                  {pageNumber}
                </Link>
              ))}

              <Link
                href={`${pathname}${buildBlogQuery({
                  page: currentPage + 1,
                  category: activeCategory,
                  q: searchQuery,
                })}`}
                aria-disabled={currentPage >= totalPages}
                className={`inline-flex items-center gap-1 px-4 py-2 rounded border text-xs font-body font-semibold transition-colors ${
                  currentPage >= totalPages
                    ? "pointer-events-none opacity-40 border-border-hairline text-text-muted"
                    : "border-border-hairline text-navy hover:border-cyan/40"
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Link>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
