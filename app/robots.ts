import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lavitali.com.br/sitemap.xml",
    host: "https://lavitali.com.br",
  };
}
