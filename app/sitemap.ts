import type { MetadataRoute } from "next";
import { essays, getTagEntries } from "@/lib/essays";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/start-here",
  "/about",
  "/writing",
  "/archive",
  "/reading",
  "/now",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
  }));

  const writing = essays.map((essay) => ({
    url: absoluteUrl(`/writing/${essay.slug}`),
    lastModified: new Date(`${essay.date}T00:00:00Z`),
  }));

  const topics = getTagEntries().map(([tag]) => ({
    url: absoluteUrl(`/topics/${tag}`),
    lastModified: now,
  }));

  return [...pages, ...writing, ...topics];
}
