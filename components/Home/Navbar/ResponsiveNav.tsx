"use client"
import React from "react"
import Link from "next/link"
import { Bars3BottomRightIcon, SparklesIcon } from "@heroicons/react/24/outline"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import { NAV_LINKS } from "@/constant/constant"

const ResponsiveNav = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/80 bg-white/95 shadow-[0_18px_60px_-35px_rgba(56,189,248,0.75)] backdrop-blur-3xl dark:border-white/10 dark:bg-[#0b1220]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#A7FFE5] via-[#8DD8FF] to-[#8A9CFF] text-[#0b1020] shadow-[0_12px_30px_-12px_rgba(56,189,248,0.85)] ring-2 ring-white/80">
              <SparklesIcon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-base font-bold tracking-wide">
                <span className="bg-linear-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent text-2xl">
                  Prime Site
                </span>
              </p>
              <p className="text-xs font-semibold tracking-wide">
                <span className="bg-linear-to-r from-sky-200 via-emerald-200 to-lime-200 bg-clip-text text-transparent">
                  Desenvolvedores
                </span>
              </p>
            </div>
          </Link>

          <Nav links={NAV_LINKS} />

          <div className="lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/95 text-slate-900 shadow-[0_12px_26px_-16px_rgba(56,189,248,0.8)] transition hover:border-slate-200 hover:bg-white hover:text-slate-950 hover:shadow-[0_16px_34px_-18px_rgba(14,165,233,0.95)] dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/15"
              aria-label="Abrir menu"
            >
              <Bars3BottomRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileNav links={NAV_LINKS} isOpen={open} onClose={() => setOpen(false)} />
    </header>
  )
}

export default ResponsiveNav