import React from "react"
import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm/Contact"
import { Footer } from "@/components/Home/Footer/Footer"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Sites ProfissionAI para solicitar um orçamento de criação de sites, landing pages, SEO local ou e-commerce.",
  alternates: {
    canonical: "/contact/",
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
