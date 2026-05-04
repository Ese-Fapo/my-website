import React from "react"
import type { Metadata } from "next"
import About from "@/components/Home/About/About"
import { Footer } from "@/components/Home/Footer/Footer"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Sobre",
  description:
    "Conheça melhor a Sites Profissionai e nossos serviços de criação de sites para empresas em Santa Catarina.",
  path: "/about/",
  keywords: ["sobre sites profissionai", "profissional que faz site em santa catarina"],
})

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <h1 className="sr-only">Sobre a Sites Profissionai</h1>
      <About />
      <Footer />
    </main>
  )
}
