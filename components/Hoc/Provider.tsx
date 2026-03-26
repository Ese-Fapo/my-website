"use client"
import React from "react"
import { LanguageProvider } from "@/lib/i18n"

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>{children}</LanguageProvider>
  )
}

export default Provider
