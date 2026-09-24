import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pure-unity-exports.vercel.app/",
      lastModified: new Date(),
    },
  ];
}