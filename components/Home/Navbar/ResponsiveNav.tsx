"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import { NAV_LINKS } from "@/constant/constant"
import logoIcon from "@/public/images.web/logo.png"

const ResponsiveNav = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-slate-900/10 bg-white/80 text-slate-900 shadow-[0_18px_60px_-45px_rgba(15,23,42,0.25)] backdrop-blur-3xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoIcon}
              alt="Prime Site"
              width={64}
              height={64}
              className="h-16 w-16"
              priority
            />
            <div className="leading-tight">
              <p className="text-base font-bold tracking-wide">
                <span className="inline-flex items-center gap-2 text-slate-900 text-2xl">
                  Prime Site
                
                </span>
              </p>
              <p className="text-xs font-semibold tracking-wide">
                <span className="inline-flex items-center gap-1 text-slate-700">
                  Desenvolvedores
                 
                </span>
              </p>
            </div>
          </Link>

          <Nav links={NAV_LINKS} />

          <div className="lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/15 bg-white/70 text-slate-900 shadow-[0_12px_26px_-18px_rgba(15,23,42,0.25)] transition hover:border-slate-900/30 hover:bg-white hover:text-slate-900"
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