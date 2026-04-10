import React from "react"
import type { Metadata } from "next"
import Services from "@/components/Service/Services"
import { Footer } from "@/components/Home/Footer/Footer"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore website development, landing page, e-commerce, branding, maintenance, and local SEO services from Sites ProfissionAI.",
  alternates: {
    canonical: "/services",
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
