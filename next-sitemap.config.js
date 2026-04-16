/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sitesprofissionai.com"

module.exports = {
  siteUrl,
  exclude: ["/sitemap.xml", "/robots.txt"],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "out",
  changefreq: "weekly",
  priority: 0.7,
  autoLastmod: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
}
