"use client"

import React from "react"
import {
  BanknotesIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline"
import { useLanguage } from "@/lib/i18n"

const DISCOUNT_PERCENT = 20

const isOptionalPlan = (price: string) => price.includes("/")

const getDiscountedPrice = (price: string) => {
  const match = price.match(/[\d.,]+/)

  if (!match || typeof match.index !== "number") {
    return price
  }

  const rawAmount = match[0]
  const normalizedAmount = rawAmount.includes(",")
    ? rawAmount.replace(/\./g, "").replace(",", ".")
    : rawAmount.replace(/\./g, "")

  const numericAmount = Number(normalizedAmount)

  if (Number.isNaN(numericAmount)) {
    return price
  }

  const discountedAmount = Math.round(numericAmount * (1 - DISCOUNT_PERCENT / 100))
  const suffix = price.slice(match.index + rawAmount.length)
  const formattedAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(discountedAmount)

  return `${formattedAmount}${suffix}`
}

const Pricing = () => {
  const { t } = useLanguage()
  const icons = [GlobeAltIcon, BanknotesIcon, ShoppingCartIcon, WrenchScrewdriverIcon]
  const whatsappLink = `https://wa.me/554891817031?text=${encodeURIComponent(t.contact.whatsappIntro)}`

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
            const optionalPlan = isOptionalPlan(item.price)
            const discountPercent = item.discountPercent ?? DISCOUNT_PERCENT
            const discountBadgeText = item.discountBadgeText ?? `${discountPercent}%`
            const finalPrice = item.discountedPrice ?? getDiscountedPrice(item.price)

            return (
              <div
                key={item.title}
                className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div
                  className={`absolute -right-2 -top-2 z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border-2 text-center shadow-[0_16px_40px_rgba(15,23,42,0.35)] ${
                    optionalPlan
                      ? "border-cyan-100/80 bg-linear-to-br from-sky-500 via-cyan-500 to-blue-600 shadow-[0_16px_40px_rgba(14,165,233,0.38)]"
                      : "border-white/80 bg-linear-to-br from-rose-500 via-pink-500 to-orange-400 shadow-[0_16px_40px_rgba(244,63,94,0.45)]"
                  }`}
                >
                  {optionalPlan ? (
                    <>
                      <span className="text-[10px] font-black uppercase tracking-[0.08em] text-white">
                        {t.pricing.optionalBadge}
                      </span>
                      <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-cyan-50">
                        {t.pricing.optionalSubtext}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg font-black leading-none text-white">{discountBadgeText}</span>
                      <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/90">
                        {t.pricing.discountLabel}
                      </span>
                    </>
                  )}
                </div>

                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400/30 via-emerald-400/20 to-indigo-400/30 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-white/90" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>

                <div className="mt-3 pr-16">
                  <p className="text-base font-semibold text-white/50 line-through decoration-2">{item.price}</p>
                  <p className="mt-2 text-3xl font-black text-yellow-300 drop-shadow-[0_0_18px_rgba(253,224,71,0.35)]">
                    {finalPrice}
                  </p>
                </div>

                <p className="mt-2 text-sm text-white/70">{item.description}</p>

                <div className="mt-4 space-y-2 rounded-2xl border border-white/10 bg-slate-900/40 p-3">
                  {item.features.map((feature) => (
                    <div
                      key={feature.label}
                      className={`flex items-center gap-2 text-sm ${feature.included ? "text-slate-100" : "text-slate-400"}`}
                    >
                      {feature.included ? (
                        <CheckCircleIcon className="h-4 w-4 shrink-0 text-emerald-300" />
                      ) : (
                        <XCircleIcon className="h-4 w-4 shrink-0 text-rose-300/85" />
                      )}
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:scale-[1.02]"
                >
                  {t.pricing.cta}
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-sm text-emerald-50">{t.pricing.note}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
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
