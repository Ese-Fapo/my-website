"use client"

import React from "react"
import {
  BuildingOffice2Icon,
  CursorArrowRaysIcon,
  ShoppingBagIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  Squares2X2Icon,
  ChartBarIcon,
} from "@heroicons/react/24/outline"
import { useLanguage } from "@/lib/i18n"

const Services = () => {
  const { t } = useLanguage()
  const icons = [
    BuildingOffice2Icon,
    CursorArrowRaysIcon,
    ShoppingBagIcon,
    PencilSquareIcon,
    RocketLaunchIcon,
    WrenchScrewdriverIcon,
    Squares2X2Icon,
    ChartBarIcon,
  ]

  const services = t.services.items.map((item, index) => ({
    ...item,
    icon: icons[index],
  }))

  return (
    <section id="services" className="relative scroll-mt-28 overflow-hidden bg-black py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
              {t.services.badge}
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t.services.title}
            </h2>
          </div>

          <div className="border-l border-white/10 pl-5 lg:pl-8">
            <p className="max-w-2xl text-base leading-7 text-slate-200/80">
              {t.services.description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.07]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-cyan-300/10 text-white shadow-[0_12px_35px_rgba(34,211,238,0.18)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-200/75">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
