import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lavitali.com.br",
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://lavitali.com.br/images/mariana-mendes-hero.jpeg",
        "https://lavitali.com.br/images/dra-mariana.jpeg",
        "https://lavitali.com.br/images/pilates-studio.jpeg",
      ],
    },
  ];
}
