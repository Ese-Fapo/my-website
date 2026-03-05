"use client"
import React from "react"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/lib/i18n"

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}

export default Provider
