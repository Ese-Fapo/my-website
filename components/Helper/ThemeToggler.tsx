"use client"
import React from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

// ...existing code...

export const ThemeToggler = () => {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <button
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-sm font-medium text-gray-800 shadow-sm backdrop-blur transition-all hover:shadow-md hover:ring-2 hover:ring-gray-300 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100 dark:hover:ring-gray-600"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        {isDark ? (
          <SunIcon className="h-5 w-5 text-yellow-400 transition-transform group-hover:rotate-12" />
        ) : (
          <MoonIcon className="h-5 w-5 text-gray-800 transition-transform group-hover:-rotate-12 dark:text-gray-100" />
        )}
      </span>
      <span className="hidden sm:inline">{isDark ? "Claro" : "Escuro"}</span>
    </button>
  )
}