import React from "react"
import type { Metadata } from "next"
import Pricing from "@/components/Pricing/Pricing"
import { Footer } from "@/components/Home/Footer/Footer"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View starting prices for landing pages, business websites, e-commerce, and ongoing support from Sites ProfissionAI.",
  alternates: {
    canonical: "/pricing",
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
