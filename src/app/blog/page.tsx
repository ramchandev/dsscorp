"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PersonaBadge from "@/components/PersonaBadge";
import { blogDb } from "@/lib/blog";

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const articles = Object.values(blogDb);

  const categories = ["All", "Advisory & Consulting", "Taxation", "Global & Private Wealth"];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      activeCategory === "All" || art.categoryName === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.directAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const crumbs = [
    { label: "Blog" },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        {/* Hero Section */}
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
                Access structured compliance checklists, regulatory guidelines, and technical advisory updates compiled directly by our practicing Chartered Accountants.
              </p>
            </div>
          </div>
        </section>

        {/* Filter and Search Dashboard */}
        <section className="py-12 border-b border-border-hairline bg-off-white/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat, idx) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded text-xs font-body font-semibold transition-all border ${
                      isActive
                        ? "bg-navy text-card-white border-navy"
                        : "bg-card-white border-border-hairline text-navy hover:border-cyan/40"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-text-muted" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2 border border-border-hairline rounded bg-card-white font-body text-xs focus:outline-none focus:ring-1 focus:ring-cyan text-navy"
              />
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-body text-sm text-text-secondary">No articles found matching your criteria.</p>
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

                        <h2 className="font-heading font-semibold text-base sm:text-lg text-navy group-hover:text-cyan transition-colors mb-3 line-clamp-2">
                          <Link href={`/blog/${art.slug}`}>
                            {art.title}
                          </Link>
                        </h2>

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
                          href={`/blog/${art.slug}`}
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
