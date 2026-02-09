import React from "react"
import Link from "next/link"



type NavLink = {
  id: number
  url: string
  name: string
}

const Nav = ({ links }: { links: NavLink[] }) => {
  return (
    <div className="hidden lg:flex items-center gap-8">
      <div className="flex items-center gap-6 text-sm font-bold tracking-wide text-slate-200">
        {links.map((link) => {
          const isExternal = link.url.startsWith("http")
          return (
            <Link
              key={link.id}
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="group relative transition-colors hover:text-white"
            >
              <span className="bg-linear-to-r from-lime-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
                {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-lime-300 via-emerald-300 to-purple-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          )
        })}
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="#contact"
          className="hidden xl:inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold tracking-wide text-slate-100 shadow-sm transition hover:border-white/25 hover:bg-white/15"
        >
          <span className="bg-linear-to-r from-lime-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
            Agendar ligação.
          </span>
        </Link>
        
        
      </div>
    </div>
  )
}

export default Nav