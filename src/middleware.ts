import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { blogDb } from "@/lib/blog";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const legacyMatch = pathname.match(/^\/blog\/([^/]+)$/);

  if (!legacyMatch) {
    return NextResponse.next();
  }

  const segment = legacyMatch[1];

  if (segment === "category") {
    return NextResponse.next();
  }

  const article = blogDb[segment];

  if (article) {
    const destination = new URL(
      `/blog/${article.category}/${article.slug}`,
      request.url
    );
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:slug"],
};
