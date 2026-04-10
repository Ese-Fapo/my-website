import React from "react"
import Home from "@/components/Home/Home"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sitesprofissionai.com"
const whatsappUrl = "https://wa.me/554898127673"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sites ProfissionAI",
  url: siteUrl,
  image: `${siteUrl}/images.web/logo.png`,
  logo: `${siteUrl}/images.web/logo.png`,
  telephone: "+554898127673",
  description:
    "Web development services in São José, Florianópolis, Joinville, and Balneário Camboriú.",
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
    telephone: "+554898127673",
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