import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, Calendar, ShieldCheck, User, ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PersonaBadge from "@/components/PersonaBadge";
import FAQAccordion from "@/components/FAQAccordion";
import { blogDb } from "@/lib/blog";
import { getArticleByCategoryAndSlug, getArticlePath } from "@/lib/blog-utils";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.values(blogDb).map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category, slug } = await params;
  const article = getArticleByCategoryAndSlug(category, slug);

  if (!article) {
    return createPageMetadata({
      title: "Blog Article | DSS Corp Advisory",
      description: "Tax, compliance, and wealth advisory insights from DSS Corp Advisory.",
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: `${article.title} | DSS Corp Blog`,
    description: article.excerpt,
    path: getArticlePath(article),
    ogImage: article.image,
    type: "article",
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { category, slug } = await params;
  const article = getArticleByCategoryAndSlug(category, slug);

  if (!article) {
    notFound();
  }

  const articleUrl = absoluteUrl(getArticlePath(article));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: absoluteUrl(article.image),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.credential,
      worksFor: {
        "@type": "AccountingService",
        name: "DSS Corp Advisory",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "DSS Corp Advisory",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/og-default.jpg"),
      },
    },
  };

  const faqSchema =
    article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const crumbs = [
    { label: "Blog", href: "/blog" },
    { label: article.categoryName, href: `/blog/category/${article.category}` },
    { label: article.title },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
              <div className="lg:col-span-8 bg-card-white border border-border-hairline rounded-lg p-6 sm:p-10 md:p-12 space-y-8 overflow-hidden">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading">
                      {article.categoryName}
                    </span>
                    <PersonaBadge persona={article.persona} />
                  </div>

                  <h1 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-navy tracking-tight leading-tight">
                    {article.title}
                  </h1>

                  {article.subhead && (
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {article.subhead}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-xs font-body text-text-secondary pt-2 border-b border-border-hairline/60 pb-4">
                    <div className="flex items-center gap-1.5 font-semibold text-navy">
                      <User className="w-4 h-4 text-cyan" />
                      <span>{article.author.name}</span>
                      <span className="text-[10px] text-text-muted font-normal">
                        ({article.author.credential})
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Published {article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 sm:h-96 w-full rounded-lg overflow-hidden bg-navy-secondary">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 66vw"
                    priority
                  />
                </div>

                <div className="bg-off-white border border-border-hairline p-6 rounded-lg space-y-2.5">
                  <span className="text-[9px] font-heading font-bold uppercase tracking-wider text-cyan block">
                    Direct Answer / Summary
                  </span>
                  <p className="font-body text-xs sm:text-sm text-navy leading-relaxed font-medium">
                    {article.directAnswer}
                  </p>
                </div>

                {article.bullets && article.bullets.length > 0 && (
                  <div className="space-y-3">
                    <h2 className="font-heading font-semibold text-base text-navy">
                      Key Highlights covered
                    </h2>
                    <ul className="space-y-2">
                      {article.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 items-start font-body text-xs sm:text-sm text-text-secondary"
                        >
                          <CheckCircle2 className="w-4 h-4 text-chartreuse mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-8 pt-4">
                  {article.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h2 className="font-heading font-semibold text-lg sm:text-xl text-navy">
                        {section.heading}
                      </h2>
                      <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>

                {article.faqs.length > 0 && (
                  <div className="space-y-6 pt-8 border-t border-border-hairline/60">
                    <h2 className="font-heading font-semibold text-lg text-navy">
                      Frequently Asked Questions
                    </h2>
                    <FAQAccordion faqs={article.faqs} />
                  </div>
                )}

                <div className="pt-6 border-t border-border-hairline/60">
                  <Link
                    href={article.relatedService.href}
                    className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-cyan hover:text-navy transition-colors"
                  >
                    Explore {article.relatedService.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="bg-navy text-card-white border border-navy-secondary rounded-lg p-8 space-y-6 shadow-2xs border-t-4 border-t-chartreuse">
                  <h3 className="font-heading font-semibold text-lg">
                    Need professional assistance?
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-text-muted">
                    Our qualified partners can advise you directly on corporate taxation, FEMA
                    certifications, and company formations.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact?autofocus=true"
                      className="inline-flex items-center gap-1.5 bg-chartreuse hover:bg-chartreuse/90 text-navy font-body font-bold text-xs px-6 py-3 rounded transition-all shadow-md w-full justify-center"
                    >
                      Request Partner Advice <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="bg-card-white border border-border-hairline rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-2 text-navy">
                    <ShieldCheck className="w-5 h-5 text-cyan" />
                    <span className="font-heading font-semibold text-xs uppercase tracking-wide">
                      Verified ICAI Compliance
                    </span>
                  </div>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    This article is written and reviewed by practicing Chartered Accountants of DSS
                    Corp Advisory in Chennai. Information is aligned with the latest Finance Act
                    notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
