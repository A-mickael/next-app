// app/sitemap.xml.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://monsite.com";

  const appDir = path.join(process.cwd(), "app");

  function getPages(dir: string, prefix = ""): string[] {
    let pages: string[] = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        pages = pages.concat(getPages(fullPath, `${prefix}/${file}`));
      } else if (file.endsWith(".tsx") && file !== "page.tsx") {
        pages.push(`${prefix}/${file.replace(".tsx", "")}`);
      } else if (file === "page.tsx") {
        pages.push(prefix || "/");
      }
    }
    return pages;
  }

  const pages = getPages(appDir);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
