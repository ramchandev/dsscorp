import React, { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogHub from "@/components/BlogHub";
import {
  filterArticles,
  getAllArticlesSorted,
  paginateArticles,
} from "@/lib/blog-utils";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
    q?: string;
  }>;
}

export default async function BlogHubPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const activeCategory = params.category || "All";
  const searchQuery = params.q || "";

  const filteredArticles = filterArticles(getAllArticlesSorted(), {
    category: activeCategory,
    query: searchQuery,
  });

  const pagination = paginateArticles(filteredArticles, page);

  const crumbs = [{ label: "Blog" }];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        <section className="py-16 border-b border-border-hairline bg-card-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Knowledge & Advisory
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight leading-tight">
                DSS Corp Blog
              </h1>
              <p className="font-body text-base text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                Access structured compliance checklists, regulatory guidelines, and technical
                advisory updates compiled directly by our practicing Chartered Accountants.
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="py-20 text-center text-xs text-text-muted">Loading articles...</div>}>
          <BlogHub
            articles={pagination.items}
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            totalItems={pagination.totalItems}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
          />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
