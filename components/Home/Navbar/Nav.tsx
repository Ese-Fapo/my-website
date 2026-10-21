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
    <div className="hidden xl:flex items-center gap-5">
      <div className="flex items-center gap-4 text-[13px] font-semibold text-slate-300">
        {links.map((link) => {
          const isExternal = link.url.startsWith("http")
          return (
            <Link prefetch={false}
              key={link.id}
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="group relative transition-colors hover:text-slate-100"
            >
              <span className="text-slate-300">
                {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white/5 transition-all duration-300 group-hover:w-full" />
            </Link>
          )
        })}
      </div>
      <div className="flex items-center gap-3">
        <Link prefetch={false}
          href="/contact/"
          className="hidden 2xl:inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold tracking-wide text-slate-100 shadow-sm transition hover:border-white/30 hover:bg-slate-800"
        >
          <span className="text-slate-100">
            {t.nav.scheduleCall}
          </span>
        </Link>
        
        
      </div>
    </div>
  )
}

export default Nav
