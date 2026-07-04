import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  // Build JSON-LD BreadcrumbList
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.label,
      "item": crumb.href ? `https://dsscorp.in${crumb.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-border-hairline/60">
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-body text-text-muted">
          <Link href="/" className="hover:text-cyan transition-colors">
            Home
          </Link>
          {crumbs.map((crumb, idx) => {
            const isLast = idx === crumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="hover:text-cyan transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-navy font-semibold" : ""}>{crumb.label}</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
