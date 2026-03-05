import React from "react"
import Link from "next/link"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useLanguage } from "@/lib/i18n"
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher"



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
  const { t } = useLanguage()

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white/95 shadow-2xl shadow-[#0b1020]/20 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-900/10 px-6 py-5">
          <div className="text-lg font-bold tracking-wide text-slate-900">
            <span className="text-slate-900">
              {t.nav.menuTitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/15 text-slate-900 transition hover:border-slate-900/30"
            aria-label={t.nav.closeMenu}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-full flex-col gap-6 px-6 pb-10 pt-6">
          <div className="flex flex-col gap-4 text-base font-bold tracking-wide text-slate-900">
            {links.map((link) => {
              const isExternal = link.url.startsWith("http")
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  onClick={onClose}
                  className="rounded-xl border border-slate-900/10 bg-white px-4 py-3 transition hover:border-slate-900/25 hover:bg-slate-100"
                >
                  <span className="text-slate-900">
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="">
            <Link
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white px-4 py-3 text-sm font-bold tracking-wide text-slate-900 shadow-sm transition hover:border-slate-900/30 hover:bg-slate-100"
            >
              <span className="text-slate-900">
                {t.nav.scheduleCall}
              </span>
            </Link>
            <Link
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#0b1020]/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <span className="text-white">
                {t.nav.start}
              </span>
            </Link>
            <div className="pt-2">
              <LanguageSwitcher compact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav