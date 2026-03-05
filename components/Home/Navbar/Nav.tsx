import React from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"



type NavLink = {
  id: number
  url: string
  name: string
}

const Nav = ({ links }: { links: NavLink[] }) => {
  const { t } = useLanguage()

  return (
    <div className="hidden lg:flex items-center gap-8">
      <div className="flex items-center gap-6 text-sm font-bold tracking-wide text-slate-700">
        {links.map((link) => {
          const isExternal = link.url.startsWith("http")
          return (
            <Link
              key={link.id}
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="group relative transition-colors hover:text-slate-900"
            >
              <span className="text-slate-700">
                {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-slate-900/70 transition-all duration-300 group-hover:w-full" />
            </Link>
          )
        })}
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="#contact"
          className="hidden xl:inline-flex items-center rounded-full border border-slate-900/15 bg-white/60 px-4 py-2 text-sm font-bold tracking-wide text-slate-900 shadow-sm transition hover:border-slate-900/30 hover:bg-white"
        >
          <span className="text-slate-900">
            {t.nav.scheduleCall}
          </span>
        </Link>
        
        
      </div>
    </div>
  )
}

export default Nav