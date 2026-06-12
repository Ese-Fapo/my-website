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
  const whatsappQuickMessage = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de um orçamento para meu projeto."
  )

  return (
    <main id="main-content" className="min-h-screen bg-black pt-24">
      <h1 className="sr-only">Projetos recentes de sites</h1>
      <ProjectsSection initialVisibleCount={999} loadMoreUrl={null} />
      <Footer />
      <a
        href={`https://wa.me/554891817031?text=${whatsappQuickMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir chat do WhatsApp"
        className="fixed bottom-20 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(37,211,102,0.6)] sm:bottom-6 sm:right-24 lg:right-28"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2a9.94 9.94 0 0 0-8.5 15.1L2 22l5.05-1.5A9.94 9.94 0 1 0 12.04 2zm0 18.1a8.07 8.07 0 0 1-4.11-1.12l-.3-.18-2.99.88.9-2.9-.2-.3a8.1 8.1 0 1 1 7.7 3.62zm4.46-5.78c-.25-.12-1.5-.74-1.73-.83s-.4-.12-.57.12-.65.83-.8 1-.3.2-.55.08a6.63 6.63 0 0 1-1.96-1.2 7.38 7.38 0 0 1-1.36-1.7c-.14-.25 0-.38.1-.5s.25-.3.38-.46a1.8 1.8 0 0 0 .25-.42.46.46 0 0 0 0-.43c0-.12-.56-1.35-.76-1.85s-.4-.42-.57-.43h-.5a.96.96 0 0 0-.7.33 3 3 0 0 0-.92 2.2 5.22 5.22 0 0 0 1.1 2.75 11.8 11.8 0 0 0 4.52 4c.63.27 1.12.43 1.5.55a3.6 3.6 0 0 0 1.65.1 2.7 2.7 0 0 0 1.78-1.26 2.2 2.2 0 0 0 .16-1.26c-.06-.1-.24-.17-.5-.3z" />
        </svg>
      </a>
    </main>
  )
}
