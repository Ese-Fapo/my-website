"use client"

import React from "react"
import { useLanguage } from "@/lib/i18n"

const ratingBars = [
  { stars: 5, width: "92%" },
  { stars: 4, width: "78%" },
  { stars: 3, width: "32%" },
]

const Star = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 0 0 .95-.69l1.07-3.292Z" />
  </svg>
)

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

const Reviews = () => {
  const { t } = useLanguage()

  return (
    <section id="reviews" className="bg-black py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200">
            {t.reviews.badge}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {t.reviews.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200/80 sm:text-base">
            {t.reviews.description}
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-black text-slate-900">
                4.9
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{t.reviews.summaryLabel}</p>
                <p className="text-sm text-slate-300">{t.reviews.countLabel}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} />
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {ratingBars.map((bar) => (
                <div key={bar.stars} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="w-4 font-semibold">{bar.stars}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-linear-to-r from-yellow-300 via-amber-400 to-orange-400" style={{ width: bar.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.reviews.items.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-sky-400 to-indigo-500 text-sm font-bold text-slate-950">
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-slate-300">{item.business}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-200/85">
                  “{item.text}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
