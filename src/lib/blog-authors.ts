export type BlogAuthor = {
  name: string;
  credential: string;
  image: string;
  href: string;
  imagePosition?: string;
};

export const BLOG_AUTHORS = {
  deepa: {
    name: "Mrs. Deepa Madan",
    credential: "M.Com., CA (Final)",
    image: "/deepa-madan.png",
    href: "/about/deepa-madan",
    imagePosition: "center 20%",
  },
  madhan: {
    name: "CA Madan Gopal Narayanan",
    credential: "FCA, CISA (USA), DISA (ICAI)",
    image: "/madan-gopal-narayanan.png",
    href: "/about/madan-gopal-narayanan",
    imagePosition: "center center",
  },
} as const satisfies Record<string, BlogAuthor>;
