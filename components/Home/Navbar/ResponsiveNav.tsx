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
      <div className="border-b border-slate-200 bg-white/85 backdrop-blur-xl dark:border-[#1c2541] dark:bg-[#11172a]/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#5fffd2] via-[#599692] to-[#3de0c7] text-[#0b1020] shadow-lg shadow-[#0b1020]/30">
              <SparklesIcon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-base font-bold tracking-wide">
                <span className="bg-linear-to-r from-lime-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent text-2xl">
                  Prime Site
                </span>
              </p>
              <p className="text-xs font-semibold tracking-wide">
                <span className="bg-linear-to-r from-lime-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  Desenvolvedores
                </span>
              </p>
            </div>
          </Link>

          <Nav links={NAV_LINKS} />

          <div className="lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-[#2a344f] dark:bg-[#131b31] dark:text-slate-200 dark:hover:border-[#364469] dark:hover:text-white"
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