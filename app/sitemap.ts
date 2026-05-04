import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const sharedPageFields = {
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about/`,
      ...sharedPageFields,
    },
    {
      url: `${SITE_URL}/services/`,
      ...sharedPageFields,
    },
    {
      url: `${SITE_URL}/projects/`,
      ...sharedPageFields,
    },
    {
      url: `${SITE_URL}/pricing/`,
      ...sharedPageFields,
    },
    {
      url: `${SITE_URL}/contact/`,
      ...sharedPageFields,
    },
  ]
}
