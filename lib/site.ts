const fallbackSiteUrl = "https://sitesprofissionai.com"

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl

export const SITE_URL = rawSiteUrl.replace(/\/$/, "")
