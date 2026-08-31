"use client"

import React, { useMemo } from "react"
import { useLanguage } from "@/lib/i18n"

const ratingBars = [
  { stars: 5, width: "94%" },
  { stars: 4, width: "64%" },
  { stars: 3, width: "18%" },
]

const Star = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
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
  const movingReviews = useMemo(
    () => [...t.reviews.items, ...t.reviews.items],
    [t.reviews.items]
  )

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#05070b] py-16 text-white sm:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-yellow-300/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-100">
              <span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_18px_rgba(253,224,71,0.8)]" />
              {t.reviews.badge}
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              {t.reviews.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {t.reviews.description}
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-300">{t.reviews.summaryLabel}</p>
                <p className="mt-1 text-sm text-slate-400">{t.reviews.countLabel}</p>
              </div>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white text-2xl font-black text-slate-950">
                4.9
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5" />
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {ratingBars.map((bar) => (
                <div key={bar.stars} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="w-4 font-semibold">{bar.stars}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-yellow-300 via-amber-400 to-cyan-300"
                      style={{ width: bar.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reviews-marquee-shell relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#05070b] to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#05070b] to-transparent sm:w-28" />

          <div className="review-marquee flex w-max gap-4 py-4">
            {movingReviews.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                aria-hidden={index >= t.reviews.items.length}
                className="flex min-h-[280px] w-[min(82vw,21rem)] flex-col rounded-lg border border-white/10 bg-white/[0.07] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-200/40 hover:bg-white/[0.1] sm:w-[22rem]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-yellow-300 via-cyan-300 to-indigo-400 text-sm font-black text-slate-950">
                    {getInitials(item.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">{item.name}</p>
                    <p className="truncate text-xs text-slate-300">{item.business}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} />
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-200/90">
                  "{item.text}"
                </p>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-yellow-100/80">
                  {t.reviews.sourceLabel}
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
