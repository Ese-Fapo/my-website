import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const siteUrl = "https://sitesprofissionai.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
    },
    {
      url: `${siteUrl}/about/`,
      lastModified,
    },
    {
      url: `${siteUrl}/services/`,
      lastModified,
    },
    {
      url: `${siteUrl}/projects/`,
      lastModified,
    },
    {
      url: `${siteUrl}/pricing/`,
      lastModified,
    },
    {
      url: `${siteUrl}/contact/`,
      lastModified,
    },
  ]
}
