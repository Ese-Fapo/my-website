import React from "react"
import type { Metadata } from "next"
import ProjectsSection from "@/components/ProjectSection/ProjectSection"
import { Footer } from "@/components/Home/Footer/Footer"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Veja projetos recentes de sites, aplicativos e e-commerce desenvolvidos pela Sites Profissionai para empresas em Santa Catarina e além.",
  path: "/projects/",
  keywords: ["portfolio criação de sites", "projetos de sites", "sites e ecommerce"],
})

export default function ProjectsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <h1 className="sr-only">Projetos recentes de sites</h1>
      <ProjectsSection />
      <Footer />
    </main>
  )
}
