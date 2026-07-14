export interface InsightArticle {
  slug: string;
  title: string;
  subhead?: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  readTime: string;
  category:
    | "advisory-consulting"
    | "accounting-compliance"
    | "taxation"
    | "audit-assurance"
    | "corporate-finance"
    | "global-private-wealth";
  categoryName: string;
  author: {
    name: string;
    credential: string;
    image: string;
    href: string;
    imagePosition?: string;
  };
  persona: "startup" | "msme" | "hni" | "nri";
  directAnswer: string;
  bullets?: string[];
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedService: { name: string; href: string };
  image: string;
}
