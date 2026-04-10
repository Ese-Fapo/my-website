import React from "react"
import type { Metadata } from "next"
import ProjectsSection from "@/components/ProjectSection/ProjectSection"
import { Footer } from "@/components/Home/Footer/Footer"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "See recent website, app, and e-commerce projects built by Sites ProfissionAI for businesses in Santa Catarina and beyond.",
  alternates: {
    canonical: "/projects",
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
