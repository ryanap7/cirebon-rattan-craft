import { type MetadataRoute } from "next";

export async function GET(): Promise<Response> {
  const baseUrl = "https://cirebon-rattan-craft.vercel.app";

  const staticPaths = ["", "/products", "/about", "/blog", "/contact"];

  const urls = staticPaths
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
