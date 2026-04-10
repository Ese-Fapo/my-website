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
    <section id="services" className="scroll-mt-28 bg-black py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            {t.services.badge}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-200/80">
            {t.services.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400/30 via-emerald-400/20 to-indigo-400/30 ring-1 ring-white/10">
                <service.icon className="h-6 w-6 text-white/90" />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
