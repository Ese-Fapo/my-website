"use client"

import dynamic from "next/dynamic"
import React from "react"
import Hero from "./Hero/Hero"
import { useLanguage } from "@/lib/i18n"

const About = dynamic(() => import("./About/About"))
const Services = dynamic(() => import("../Service/Services"))
const ProjectsSection = dynamic(() => import("../ProjectSection/ProjectSection"))
const Pricing = dynamic(() => import("../Pricing/Pricing"))
const Reviews = dynamic(() => import("@/components/Reviews/Reviews"))
const LocalSeo = dynamic(() => import("@/components/LocalSeo/LocalSeo"))
const ContactForm = dynamic(() => import("@/components/ContactForm/Contact"))
const Faqs = dynamic(() => import("../Faqs/Faqs").then((mod) => mod.Faqs))
const Footer = dynamic(() => import("./Footer/Footer").then((mod) => mod.Footer))
const Chatbot = dynamic(() => import("@/components/Chatbot/Chatbo"), { ssr: false })


const Home = () => {
  const { t } = useLanguage()
  const whatsappQuickMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento para meu projeto.")

  return (
    <div className="min-h-screen overflow-hidden bg-black text-slate-900 dark:bg-black dark:text-white">
      <main id="main-content">
        <Hero />

        <div className="[content-visibility:auto] [contain-intrinsic-size:1px_900px]">
          <About />
        </div>
        <div className="[content-visibility:auto] [contain-intrinsic-size:1px_900px]">
          <Services />
        </div>
        <div className="[content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
          <ProjectsSection />
        </div>
        <div className="[content-visibility:auto] [contain-intrinsic-size:1px_900px]">
          <Pricing />
        </div>
        <div className="[content-visibility:auto] [contain-intrinsic-size:1px_800px]">
          <Reviews />
        </div>
        <div className="[content-visibility:auto] [contain-intrinsic-size:1px_850px]">
          <LocalSeo />
        </div>
        <div className="[content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
          <ContactForm />
        </div>
        <div className="[content-visibility:auto] [contain-intrinsic-size:1px_800px]">
          <Faqs />
        </div>
        <div className="[content-visibility:auto] [contain-intrinsic-size:1px_500px]">
          <Footer />
        </div>
      </main>

      <Chatbot />

      <a
        href={`https://wa.me/554898127673?text=${whatsappQuickMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label={t.home.whatsappAria}
        className="fixed bottom-20 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(37,211,102,0.6)] sm:bottom-6 sm:right-24 lg:right-28"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2a9.94 9.94 0 0 0-8.5 15.1L2 22l5.05-1.5A9.94 9.94 0 1 0 12.04 2zm0 18.1a8.07 8.07 0 0 1-4.11-1.12l-.3-.18-2.99.88.9-2.9-.2-.3a8.1 8.1 0 1 1 7.7 3.62zm4.46-5.78c-.25-.12-1.5-.74-1.73-.83s-.4-.12-.57.12-.65.83-.8 1-.3.2-.55.08a6.63 6.63 0 0 1-1.96-1.2 7.38 7.38 0 0 1-1.36-1.7c-.14-.25 0-.38.1-.5s.25-.3.38-.46a1.8 1.8 0 0 0 .25-.42.46.46 0 0 0 0-.43c0-.12-.56-1.35-.76-1.85s-.4-.42-.57-.43h-.5a.96.96 0 0 0-.7.33 3 3 0 0 0-.92 2.2 5.22 5.22 0 0 0 1.1 2.75 11.8 11.8 0 0 0 4.52 4c.63.27 1.12.43 1.5.55a3.6 3.6 0 0 0 1.65.1 2.7 2.7 0 0 0 1.78-1.26 2.2 2.2 0 0 0 .16-1.26c-.06-.1-.24-.17-.5-.3z" />
        </svg>
      </a>
    </div>
  )
}

export default Home