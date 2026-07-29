import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/strata-cleaning", "/end-of-lease-cleaning", "/aged-care-support",
    "/cleaning-wentworth-point",
    "/cleaning-sydney-cbd",
    "/cleaning-northern-beaches", "/about", "/tips", "/contact"];
  return pages.map((path) => ({ url: `https://www.twentymans.com.au${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.8 : 1 }));
}
