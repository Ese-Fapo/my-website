import React from "react"
import type { Metadata } from "next"
import About from "@/components/Home/About/About"
import { Footer } from "@/components/Home/Footer/Footer"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça melhor a Sites ProfissionAI e nossos serviços de criação de sites para empresas em Santa Catarina.",
  alternates: {
    canonical: "/about/",
  },
}

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <About />
      <Footer />
    </main>
  )
}
