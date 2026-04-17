import React from "react"
import type { Metadata } from "next"
import Pricing from "@/components/Pricing/Pricing"
import { Footer } from "@/components/Home/Footer/Footer"

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Veja os preços iniciais de landing pages, sites institucionais, e-commerce e suporte contínuo da Sites Profissionai.",
  alternates: {
    canonical: "/pricing/",
  },
}

export default function PricingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <Pricing />
      <Footer />
    </main>
  )
}
