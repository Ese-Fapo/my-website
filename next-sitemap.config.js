/** @type {import('next-sitemap').IConfig} */
const fallbackSiteUrl = "https://sitesprofissionai.com/"
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, "")

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
