import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PersonaBadge from "@/components/PersonaBadge";
import BlogAuthorBadge from "@/components/BlogAuthorBadge";
import { blogDb } from "@/lib/blog";
import { getArticlePath } from "@/lib/blog-utils";
import { createPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const categoriesMap: Record<string, string> = {
  "advisory-consulting": "Advisory & Consulting",
  "accounting-compliance": "Accounting & Compliance",
  "taxation": "Taxation",
  "audit-assurance": "Audit & Assurance",
  "corporate-finance": "Corporate Finance",
  "global-private-wealth": "Global & Private Wealth",
};

export function generateStaticParams() {
  return Object.keys(categoriesMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const name = categoriesMap[slug];
  if (!name) {
    return createPageMetadata({
      title: "Blog Category | DSS Corp Advisory",
      description: "Browse tax, compliance, and wealth advisory articles by category.",
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: `${name} Blog | DSS Corp Advisory`,
    description: `Access expert tax, compliance, and wealth advisory blog articles on ${name} written by our practicing Chartered Accountants.`,
    path: `/blog/category/${slug}`,
  });
}

export default async function InsightsCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const categoryName = categoriesMap[slug];

  if (!categoryName) {
    notFound();
  }

  // Get articles belonging to this category
  const filteredArticles = Object.values(blogDb).filter(
    (art) => art.category === slug
  );

  const crumbs = [
    { label: "Blog", href: "/blog" },
    { label: categoryName },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Area */}
        <section className="py-16 border-b border-border-hairline bg-card-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Blog Category Cluster
              </span>
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight leading-tight">
                {categoryName} Updates
              </h1>
              <p className="font-body text-base text-text-secondary leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                Articles, compliance checklists, and guides detailing regulatory updates in {categoryName} practice desk.
              </p>
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-card-white border border-border-hairline rounded-lg">
                <p className="font-body text-sm text-text-secondary mb-4">No articles published in this category yet.</p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-cyan hover:text-navy transition-all"
                >
                  Return to all blog articles <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((art, idx) => (
                  <article
                    key={idx}
                    className="bg-card-white border border-border-hairline rounded-lg overflow-hidden flex flex-col justify-between hover:border-cyan/50 hover:shadow-2xs group transition-all"
                  >
                    {/* Featured Image */}
                    <div className="relative h-48 w-full bg-navy-secondary overflow-hidden">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-w-768px) 100vw, 33vw"
                        priority={idx < 3}
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-heading font-bold text-cyan uppercase tracking-wider">
                            {art.categoryName}
                          </span>
                          <PersonaBadge persona={art.persona} />
                        </div>

                        <h2 className="font-heading font-semibold text-base sm:text-lg text-navy group-hover:text-cyan transition-colors mb-2 line-clamp-2">
                          <Link href={getArticlePath(art)}>
                            {art.title}
                          </Link>
                        </h2>

                        <div className="mb-3">
                          <BlogAuthorBadge author={art.author} />
                        </div>

                        <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
                          {art.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border-hairline/60 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1.5 text-[10px] text-text-muted font-body">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{art.readTime}</span>
                          <span>•</span>
                          <span>{art.date}</span>
                        </div>

                        <Link
                          href={getArticlePath(art)}
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
