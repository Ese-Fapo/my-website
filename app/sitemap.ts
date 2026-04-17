import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified,
    },
    {
      url: `${SITE_URL}/services/`,
      lastModified,
    },
    {
      url: `${SITE_URL}/projects/`,
      lastModified,
    },
    {
      url: `${SITE_URL}/pricing/`,
      lastModified,
    },
    {
      url: `${SITE_URL}/contact/`,
      lastModified,
    },
  ]
}
