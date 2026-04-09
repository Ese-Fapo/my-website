"use client"

import React from "react"
import { useLanguage } from "@/lib/i18n"

const pillStyles = [
  "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  "border-indigo-400/30 bg-indigo-400/10 text-indigo-200",
  "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
]

const cardStyles = [
  "from-cyan-500/15 via-sky-500/10 to-transparent",
  "from-emerald-500/15 via-teal-500/10 to-transparent",
  "from-fuchsia-500/15 via-indigo-500/10 to-transparent",
]

const LocalSeo = () => {
  const { t } = useLanguage()
  const mapQuery = encodeURIComponent("Florianópolis, Santa Catarina")

  return (
    <section id="locations" className="bg-black py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              {t.localSeo.badge}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {t.localSeo.title}
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200/85 sm:text-base">
              {t.localSeo.description}
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
              {t.localSeo.cityLabel}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {t.localSeo.cities.map((city, index) => (
                <span
                  key={city}
                  className={`rounded-full border px-3 py-2 text-sm font-semibold ${pillStyles[index % pillStyles.length]}`}
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {t.localSeo.highlights.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-3xl border border-white/10 bg-linear-to-br ${cardStyles[index % cardStyles.length]} p-5 shadow-[0_20px_70px_rgba(15,23,42,0.35)]`}
                >
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
            <div className="border-b border-white/10 px-5 py-4">
              <p className="text-base font-semibold text-white">{t.localSeo.mapTitle}</p>
              <p className="mt-1 text-sm text-slate-300">{t.localSeo.mapDescription}</p>
            </div>

            <iframe
              title={t.localSeo.mapTitle}
              src={`https://www.google.com/maps?q=${mapQuery}&z=9&output=embed`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 bg-slate-950"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocalSeo
