"use client"
import React from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

// ...existing code...

export const ThemeToggler = () => {
  const [mounted, setMounted] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialIsDark = saved ? saved === "dark" : prefersDark
    setIsDark(initialIsDark)
    document.documentElement.classList.toggle("dark", initialIsDark)
  }, [])

  if (!mounted) return null

  const buttonLabel = isDark ? "Dark" : "Light"

  return (
    <button
      aria-label="Toggle theme"
      title={`Theme: ${buttonLabel} (click to change)`}
      onClick={() => {
        const nextIsDark = !isDark
        setIsDark(nextIsDark)
        document.documentElement.classList.toggle("dark", nextIsDark)
        localStorage.setItem("theme", nextIsDark ? "dark" : "light")
      }}
      className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-sm font-medium text-gray-800 shadow-sm backdrop-blur transition-all hover:shadow-md hover:ring-2 hover:ring-gray-300 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100 dark:hover:ring-gray-600"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        {isDark ? (
          <SunIcon className="h-5 w-5 text-yellow-400 transition-transform group-hover:rotate-12" />
        ) : (
          <MoonIcon className="h-5 w-5 text-gray-800 transition-transform group-hover:-rotate-12 dark:text-gray-100" />
        )}
      </span>
      <span className="hidden sm:inline">{buttonLabel}</span>
      
    </button>
  )
}