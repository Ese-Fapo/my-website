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
  const menuId = React.useId()

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
        className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-bold text-slate-100 transition hover:border-white/30 hover:bg-slate-800 ${
          compact ? "w-full justify-center" : ""
        }`}
        aria-label="Switch language"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
      >
        <GlobeAltIcon className="h-5 w-5" />
        <span>{locale.toUpperCase()}</span>
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 mt-2 min-w-30 rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-xl"
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
                  : "text-slate-200 hover:bg-slate-800"
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
