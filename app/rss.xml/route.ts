import { essays } from "@/lib/essays";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = essays
    .map((essay) => {
      const url = absoluteUrl(`/writing/${essay.slug}`);
      return `<item>
  <title>${escapeXml(essay.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <description>${escapeXml(essay.dek)}</description>
  <pubDate>${new Date(`${essay.date}T00:00:00Z`).toUTCString()}</pubDate>
</item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${escapeXml(siteConfig.name)}</title>
  <link>${siteConfig.url}</link>
  <description>${escapeXml(siteConfig.description)}</description>
  <language>en-us</language>
  <managingEditor>${escapeXml(siteConfig.email)} (${escapeXml(siteConfig.author)})</managingEditor>
  <webMaster>${escapeXml(siteConfig.email)} (${escapeXml(siteConfig.author)})</webMaster>
${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
