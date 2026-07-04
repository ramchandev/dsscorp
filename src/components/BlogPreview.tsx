import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, ChevronRight } from "lucide-react";
import { blogDb } from "@/lib/blog";
import PersonaBadge from "./PersonaBadge";

export default function BlogPreview() {
  // Get the first 3 articles from the database
  const latestArticles = Object.values(blogDb).slice(0, 3);

  return (
    <section className="py-24 bg-card-white border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block mb-2">
              Latest Insights
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-navy">
              Updates from our Partners
            </h2>
            <p className="font-body text-text-secondary mt-3">
              Stay updated with compliance changes, GST provisions, startup funding frameworks, and FEMA guidelines verified by our Chartered Accountant desks.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-xs font-heading font-semibold text-cyan hover:text-navy transition-all"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((art, idx) => (
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

                  <h3 className="font-heading font-semibold text-base sm:text-lg text-navy group-hover:text-cyan transition-colors mb-3 line-clamp-2">
                    <Link href={`/blog/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h3>

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

      </div>
    </section>
  );
}
