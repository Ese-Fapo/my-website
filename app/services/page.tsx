import React from "react"
import type { Metadata } from "next"
import Services from "@/components/Service/Services"
import { Footer } from "@/components/Home/Footer/Footer"

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Explore os serviços de criação de sites, landing pages, e-commerce, branding, manutenção e SEO local da Sites Profissionai.",
  alternates: {
    canonical: "/services/",
  },
}

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <Services />
      <Footer />
    </main>
  )
}
