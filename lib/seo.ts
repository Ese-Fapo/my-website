import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"

export const siteConfig = {
  name: "Sites Profissionai",
  title: "Sites Profissionai | Criação de Sites em Santa Catarina",
  description:
    "Criação de sites profissionais em Santa Catarina para empresas de Florianópolis, São José, Joinville e Balneário Camboriú, com foco em SEO local, Google Business Profile e integração com Google Maps.",
  image: "/images.web/logo.png",
}

const baseKeywords = [
  "criação de sites em santa catarina",
  "site profissional em florianópolis",
  "criação de sites em são josé sc",
  "desenvolvimento de sites em joinville",
  "criação de sites em balneário camboriú",
  "seo local santa catarina",
  "google business profile",
  "google maps integração",
  "profissional que faz site",
  "agência de sites santa catarina",
  "sites para empresas sc",
]

const normalizePath = (path: string) => {
  if (path === "/") return "/"
  return path.endsWith("/") ? path : `${path}/`
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: baseKeywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: `${SITE_URL}/`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: siteConfig.image,
        width: 512,
        height: 512,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  icons: {
    icon: siteConfig.image,
  },
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata {
  const canonical = normalizePath(path)
  const absoluteUrl = `${SITE_URL}${canonical}`
  const fullTitle = canonical === "/" ? siteConfig.title : `${title} | ${siteConfig.name}`

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    alternates: {
      canonical,
    },
    keywords: [...baseKeywords, ...keywords],
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: siteConfig.image,
          width: 512,
          height: 512,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.image],
    },
  }
}
