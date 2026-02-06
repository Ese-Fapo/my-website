import React from "react"
import Link from "next/link"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { ThemeToggler } from "@/components/Helper/ThemeToggler"


type NavLink = {
  id: number
  url: string
  name: string
}

const MobileNav = ({
  links,
  isOpen,
  onClose,
}: {
  links: NavLink[]
  isOpen: boolean
  onClose: () => void
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-black shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#1c2541] px-6 py-5">
          <div className="text-lg font-bold tracking-wide text-slate-100">
            <span className="bg-linear-to-r from-lime-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
              Menu
            </span>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2a344f] text-slate-200 transition hover:border-[#364469] hover:text-white"
            aria-label="Fechar menu"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-full flex-col gap-6 px-6 pb-10 pt-6">
          <div className="flex flex-col gap-4 text-base font-bold tracking-wide text-slate-200">
            {links.map((link) => {
              const isExternal = link.url.startsWith("http")
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  onClick={onClose}
                  className="rounded-xl border border-[#24304a] px-4 py-3 transition hover:border-[#364469] hover:bg-[#18223d] hover:text-white"
                >
                  <span className="bg-linear-to-r from-lime-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <Link
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-[#2a344f] bg-[#131b31] px-4 py-3 text-sm font-bold tracking-wide text-slate-200 shadow-sm transition hover:border-[#364469]"
            >
              <span className="bg-linear-to-r from-lime-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                Agendar ligação
              </span>
            </Link>
            <Link
              href="#pricing"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-bold tracking-wide text-[#0b1020] shadow-lg shadow-[#0b1020]/20 transition hover:-translate-y-0.5 hover:bg-[#dce4e2]"
            >
              <span className="bg-linear-to-r from-lime-400 via-emerald-400 to-sky-500 bg-clip-text text-transparent">
                Começar
              </span>
            </Link>
            <div className="pt-2">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav