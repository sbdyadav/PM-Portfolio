import type { MetadataRoute } from "next";

const SITE = "https://bhagwandasyadav.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: [string, number][] = [
    ["", 1.0],
    ["/work/meesho-reseller-teardown", 0.9],
    ["/work/round-up-investing", 0.9],
    ["/about", 0.8],
    ["/blog", 0.7],
    ["/work/meesho-reseller-teardown/v1", 0.6],
    ["/work/round-up-investing/field-kit", 0.6],
  ];
  return routes.map(([path, priority]) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
