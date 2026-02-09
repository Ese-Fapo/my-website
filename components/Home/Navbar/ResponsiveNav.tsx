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
      <div className="border-b border-white/10 bg-[#0b1220]/95 shadow-[0_18px_60px_-35px_rgba(14,165,233,0.55)] backdrop-blur-3xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#A7FFE5] via-[#8DD8FF] to-[#8A9CFF] text-[#0b1020] shadow-[0_12px_30px_-12px_rgba(56,189,248,0.85)] ring-2 ring-white/80">
              <SparklesIcon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-base font-bold tracking-wide">
                <span className="inline-flex items-center gap-2 bg-linear-to-r from-lime-400 via-emerald-300 to-lime-600 bg-clip-text text-transparent text-2xl animate-bounce drop-shadow-[0_0_16px_rgba(99,102,241,0.55)]">
                  Prime Site
                  <SparklesIcon className="h-4 w-4 text-lime-300/90 animate-pulse" />
                </span>
              </p>
              <p className="text-xs font-semibold tracking-wide">
                <span className="inline-flex items-center gap-1 bg-linear-to-r from-lime-400 via-emerald-300 to-lime-600 bg-clip-text text-transparent animate-bounce drop-shadow-[0_0_14px_rgba(16,185,129,0.45)]">
                  Desenvolvedores
                  <SparklesIcon className="h-3 w-3 text-emerald-200/90 animate-pulse" />
                </span>
              </p>
            </div>
          </Link>

          <Nav links={NAV_LINKS} />

          <div className="lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_12px_26px_-16px_rgba(14,165,233,0.8)] transition hover:border-white/30 hover:bg-white/15 hover:text-white"
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