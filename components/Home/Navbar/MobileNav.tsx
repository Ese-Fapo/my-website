import React from "react"
import Link from "next/link"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useLanguage } from "@/lib/i18n"



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
  const panelRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!isOpen) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-50 xl:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose()
        if (event.key !== "Tab" || !isOpen) return
        const controls = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button")
        if (!controls?.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }}
    >
      <div
        className={`absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        id="mobile-nav-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.menuTitle}
        className={`absolute right-0 top-0 h-dvh w-[90%] max-w-sm overflow-y-auto bg-slate-950 shadow-2xl shadow-[#0b1020]/20 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="text-lg font-bold tracking-wide text-slate-100">
            <span className="text-slate-100">
              {t.nav.menuTitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-100 transition hover:border-white/30"
            aria-label={t.nav.closeMenu}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 pb-10 pt-6">
          <div className="flex flex-col gap-2 text-base font-bold tracking-wide text-slate-100">
            {links.map((link) => {
              const isExternal = link.url.startsWith("http")
              return (
                <Link prefetch={false}
                  key={link.id}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  onClick={onClose}
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 transition hover:border-white/25 hover:bg-slate-800"
                >
                  <span className="text-slate-100">
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link prefetch={false}
              href="/contact/"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-900 px-4 py-3 text-sm font-bold tracking-wide text-slate-100 shadow-sm transition hover:border-white/30 hover:bg-slate-800"
            >
              <span className="text-slate-100">
                {t.nav.scheduleCall}
              </span>
            </Link>
            <Link prefetch={false}
              href="/contact/"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#0b1020]/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <span className="text-white">
                {t.nav.start}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
