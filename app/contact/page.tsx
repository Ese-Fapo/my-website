import React from "react"
import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm/Contact"
import { Footer } from "@/components/Home/Footer/Footer"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sites ProfissionAI to request a quote for web development, landing pages, local SEO, or e-commerce services.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <ContactForm />
      <Footer />
    </main>
  )
}
