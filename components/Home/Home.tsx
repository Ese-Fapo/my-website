"use client"

import ContactForm from "@/components/ContactForm/Contact"
import Hero from "./Hero/Hero"
import React from "react"

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Hero />
      <ContactForm />
    </div>
  )
}

export default Home