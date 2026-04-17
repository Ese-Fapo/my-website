import React from "react"
import type { Metadata } from "next"
import ProjectsSection from "@/components/ProjectSection/ProjectSection"
import { Footer } from "@/components/Home/Footer/Footer"

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Veja projetos recentes de sites, aplicativos e e-commerce desenvolvidos pela Sites Profissionai para empresas em Santa Catarina e além.",
  alternates: {
    canonical: "/projects/",
  },
}

export default function ProjectsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <ProjectsSection />
      <Footer />
    </main>
  )
}
