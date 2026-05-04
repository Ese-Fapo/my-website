import React from "react"
import type { Metadata } from "next"
import Home from "@/components/Home/Home"
import { SITE_URL } from "@/lib/site"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description:
    "Sites profissionais em Santa Catarina para empresas que precisam de presença digital, SEO local, Google Business Profile e integração com Google Maps.",
  path: "/",
  keywords: ["home sites profissionais", "sites profissionais santa catarina"],
})

const whatsappUrl = "https://wa.me/554891817031"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sites Profissionai",
  url: SITE_URL,
  image: `${SITE_URL}/images.web/logo.png`,
  logo: `${SITE_URL}/images.web/logo.png`,
  telephone: "+554891817031",
  description:
    "Serviços de desenvolvimento de sites em São José, Florianópolis, Joinville e Balneário Camboriú, com profissional que faz site com foco em performance e SEO local.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São José",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: ["São José", "Florianópolis", "Joinville", "Balneário Camboriú"],
  serviceType: ["Website development", "Landing pages", "Local SEO", "E-commerce"],
  sameAs: [whatsappUrl],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+554891817031",
    contactType: "sales",
    url: whatsappUrl,
    areaServed: "BR",
    availableLanguage: ["Portuguese", "English", "Spanish"],
  },
}

const HomePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Home />
    </>
  )
}

export default HomePage
