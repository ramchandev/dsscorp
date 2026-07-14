import Link from "next/link";
import Image from "next/image";

type BlogAuthorBadgeProps = {
  author: {
    name: string;
    credential: string;
    image: string;
    href: string;
    imagePosition?: string;
  };
  size?: "sm" | "md";
  showCredential?: boolean;
};

export default function BlogAuthorBadge({
  author,
  size = "sm",
  showCredential = false,
}: BlogAuthorBadgeProps) {
  const avatarSize = size === "md" ? "w-10 h-10" : "w-7 h-7";
  const nameClass =
    size === "md"
      ? "text-sm font-semibold text-navy"
      : "text-[11px] font-semibold text-navy";

  return (
    <Link
      href={author.href}
      className="inline-flex items-center gap-2 group/author hover:opacity-90 transition-opacity"
    >
      <span
        className={`relative ${avatarSize} rounded-full overflow-hidden border border-cyan/30 bg-navy/5 flex-shrink-0`}
      >
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover"
          style={{ objectPosition: author.imagePosition || "center" }}
          sizes="40px"
        />
      </span>
      <span className="flex flex-col min-w-0">
        <span className={`${nameClass} group-hover/author:text-cyan transition-colors`}>
          {author.name}
        </span>
        {showCredential && (
          <span className="text-[10px] text-text-muted font-body leading-tight">
            {author.credential}
          </span>
        )}
      </span>
    </Link>
  );
}
