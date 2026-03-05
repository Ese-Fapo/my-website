"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import logoIcon from "@/public/images.web/logo.png"
import { useLanguage } from "@/lib/i18n"
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher"

const ResponsiveNav = () => {
  const [open, setOpen] = React.useState(false)
  const { t } = useLanguage()

  const links = React.useMemo(
    () => [
      { id: 1, url: "#home", name: t.nav.links.home },
      { id: 2, url: "#about", name: t.nav.links.about },
      { id: 3, url: "#projects", name: t.nav.links.projects },
      { id: 4, url: "#services", name: t.nav.links.services },
      { id: 5, url: "#contact", name: t.nav.links.contact },
      { id: 6, url: "https://tech-blog-i77h.vercel.app/", name: t.nav.links.blog },
      { id: 7, url: "https://ese-faps-xbvb.vercel.app/", name: t.nav.links.portfolio },
    ],
    [t]
  )

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-slate-900/10 bg-white/80 text-slate-900 shadow-[0_18px_60px_-45px_rgba(15,23,42,0.25)] backdrop-blur-3xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoIcon}
              alt="Bem Site Developer"
              width={64}
              height={64}
              className="h-16 w-16"
              priority
            />
            <div className="leading-tight">
              <p className="text-base font-bold tracking-wide">
                <span className="inline-flex items-center gap-2 text-slate-900 text-2xl">
                  Bem Site Developer
                
                </span>
              </p>
              <p className="text-xs font-semibold tracking-wide">
                <span className="inline-flex items-center gap-1 text-slate-700">
                  {t.nav.brandSub}
                 
                </span>
              </p>
            </div>
          </Link>

          <Nav links={links} />

          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/15 bg-white/70 text-slate-900 shadow-[0_12px_26px_-18px_rgba(15,23,42,0.25)] transition hover:border-slate-900/30 hover:bg-white hover:text-slate-900"
              aria-label={t.nav.openMenu}
            >
              <Bars3BottomRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileNav links={links} isOpen={open} onClose={() => setOpen(false)} />
    </header>
  )
}

export default ResponsiveNav