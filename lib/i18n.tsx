"use client"

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import portuguese from "./locales/pt.json"
import type { Locale, TranslationSchema } from "./locales/types"
export type { Locale } from "./locales/types"

const localeLoaders = {
  pt: async () => portuguese,
  en: async () => (await import("./locales/en.json")).default,
  es: async () => (await import("./locales/es.json")).default,
}

const LOCALE_STORAGE_KEY = "site-locale-preference"

const isSupportedLocale = (value: string | null): value is Locale => {
  return value === "pt" || value === "en" || value === "es"
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationSchema
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const getDeviceLanguage = (): Locale => {
  if (typeof window === "undefined") return "pt"
  
  const browserLang = navigator.language || navigator.languages?.[0] || "pt"
  const langCode = browserLang.split("-")[0].toLowerCase()
  
  const supportedLocales: Locale[] = ["pt", "en", "es"]
  if (supportedLocales.includes(langCode as Locale)) {
    return langCode as Locale
  }
  
  return "pt"
}

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "pt"

  try {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY)

    if (isSupportedLocale(storedLocale)) {
      return storedLocale
    }
  } catch {
    return getDeviceLanguage()
  }

  return getDeviceLanguage()
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ locale, t }, setLanguage] = useState<{ locale: Locale; t: TranslationSchema }>({
    locale: "pt",
    t: portuguese,
  })
  const requestId = useRef(0)

  const setLocale = useCallback(async (nextLocale: Locale) => {
    const currentRequest = ++requestId.current
    try {
      // Load only the selected language; keep the current content if loading fails.
      const translations = await localeLoaders[nextLocale]()
      if (currentRequest !== requestId.current) return
      setLanguage({ locale: nextLocale, t: translations })
      try {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
      } catch {
        // The selected language still works when storage is unavailable.
      }
    } catch {
      // A failed language download must not blank the page.
    }
  }, [])

  useEffect(() => {
    void setLocale(getInitialLocale())
    return () => { requestId.current++ }
  }, [setLocale])

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
    }),
    [locale, t, setLocale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
