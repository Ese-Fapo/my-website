import React from "react"
import type { Metadata } from "next"
import Pricing from "@/components/Pricing/Pricing"
import { Footer } from "@/components/Home/Footer/Footer"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Preços",
  description:
    "Veja os preços iniciais de landing pages, sites institucionais, e-commerce e suporte contínuo da Sites Profissionai.",
  path: "/pricing/",
  keywords: ["preços criação de sites", "orçamento site profissional"],
})

export default function PricingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <h1 className="sr-only">Preços de criação de sites</h1>
      <Pricing />
      <Footer />
    </main>
  )
}
