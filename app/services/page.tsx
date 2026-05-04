import React from "react"
import type { Metadata } from "next"
import Services from "@/components/Service/Services"
import { Footer } from "@/components/Home/Footer/Footer"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Serviços",
  description:
    "Explore os serviços de criação de sites, landing pages, e-commerce, branding, manutenção e SEO local da Sites Profissionai.",
  path: "/services/",
  keywords: ["serviços criação de sites", "landing pages", "manutenção de sites"],
})

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <h1 className="sr-only">Serviços de criação de sites</h1>
      <Services />
      <Footer />
    </main>
  )
}
