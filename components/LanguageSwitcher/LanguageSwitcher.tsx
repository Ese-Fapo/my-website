"use client"

import React from "react"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { Locale, useLanguage } from "@/lib/i18n"

const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
]

const LanguageSwitcher = ({ compact = false }: { compact?: boolean }) => {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white/70 px-3 py-2 text-sm font-bold text-slate-900 transition hover:border-slate-900/30 hover:bg-white ${
          compact ? "w-full justify-center" : ""
        }`}
        aria-label="Switch language"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls="language-switcher-menu"
      >
        <GlobeAltIcon className="h-5 w-5" />
        <span>{locale.toUpperCase()}</span>
      </button>

      {open ? (
        <div
          id="language-switcher-menu"
          role="menu"
          className="absolute right-0 mt-2 min-w-30 rounded-2xl border border-slate-900/10 bg-white p-2 shadow-xl"
        >
          {localeOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setLocale(option.value)
                setOpen(false)
              }}
              className={`w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                locale === option.value
                  ? "bg-slate-900 text-white"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
              role="menuitemradio"
              aria-checked={locale === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default LanguageSwitcher
