/** Bump when blog cover artwork is regenerated, then run `npm run sync:blog-covers`. */
export const BLOG_COVER_VERSION = "3";

export function getBlogCoverImage(slug: string): string {
  return `/blog/covers/${slug}.jpg`;
}

/** Legacy root-level filenames still referenced outside the blog module. */
export const LEGACY_BLOG_IMAGE_MAP: Record<string, string> = {
  "blog-gst-ecommerce.jpg": "gst-e-commerce-india",
  "blog-gst-calendar.jpg": "gst-calendar-penalty-guide",
  "blog-nri-mutual-funds.jpg": "nri-mutual-funds-fema",
  "blog-succession-planning.jpg": "succession-planning-primer",
  "blog-nri-repatriation.jpg": "nri-repatriation-fema-guide",
  "blog-startup-compliance.jpg": "startup-compliance-checklist",
  "blog-income-tax-slabs.jpg": "income-tax-slabs-india-fy-2026-27",
  "blog-gst-registration.jpg": "gst-registration-process-india-2026",
  "blog-nri-income-tax-return.jpg": "how-nris-file-income-tax-return-india",
  "blog-fema-repatriation-rules.jpg": "fema-rules-nri-repatriation",
};

export function getLegacyBlogImage(filename: string): string {
  const slug = LEGACY_BLOG_IMAGE_MAP[filename];
  return slug ? getBlogCoverImage(slug) : `/${filename}`;
}
