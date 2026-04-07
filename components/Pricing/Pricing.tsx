import React from "react"
import {
  BanknotesIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"
import { useLanguage } from "@/lib/i18n"

const Pricing = () => {
  const { t } = useLanguage()
  const icons = [GlobeAltIcon, BanknotesIcon, ShoppingCartIcon, WrenchScrewdriverIcon]

  return (
    <section id="pricing" className="scroll-mt-28 bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            {t.pricing.badge}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200/80 sm:text-base">
            {t.pricing.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
          {t.pricing.items.map((item, index) => {
            const Icon = icons[index % icons.length]

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400/30 via-emerald-400/20 to-indigo-400/30 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-white/90" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-3xl font-black text-emerald-300">{item.price}</p>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-sm text-emerald-50">{t.pricing.note}</p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:opacity-90"
          >
            {t.pricing.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Pricing
