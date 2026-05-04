import React from "react"
import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm/Contact"
import { Footer } from "@/components/Home/Footer/Footer"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Entre em contato com a Sites Profissionai para solicitar um orçamento de criação de sites, landing pages, SEO local ou e-commerce.",
  path: "/contact/",
  keywords: ["contato criação de sites", "orçamento landing page", "orçamento ecommerce"],
})

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <h1 className="sr-only">Contato para orçamento de site</h1>
      <ContactForm />
      <Footer />
    </main>
  )
}
