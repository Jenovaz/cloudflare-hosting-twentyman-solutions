import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/aged-care-support", "/about", "/tips", "/contact"];
  return pages.map((path) => ({ url: `https://www.twentymans.com.au${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.8 : 1 }));
}
