"use client"

import React from 'react'
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"

const About = () => {
  const { t } = useLanguage()
  const [titleBeforeYears, titleAfterYears] = t.about.title.split("6+")

  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-24 lg:py-32">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-20 px-5 sm:px-8">
        {/** image */}
        <div className="relative order-2 mx-auto w-full max-w-md sm:max-w-lg lg:order-1 lg:row-span-2 lg:max-w-xl">
          <div className="absolute -inset-6 rounded-4xl bg-linear-to-br from-cyan-500/20 via-fuchsia-500/10 to-indigo-500/20 blur-2xl" />
          <div className="group relative aspect-4/3 w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/40 shadow-[0_35px_120px_rgba(15,23,42,0.45)] backdrop-blur">
            <div className="absolute inset-0 opacity-70 bg-[radial-gradient(100%_80%_at_70%_0%,rgba(56,189,248,0.25)_0%,transparent_55%)]" />
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full border border-white/20" />
            <div className="absolute -right-12 -bottom-12 h-24 w-24 rounded-full border border-white/10" />
            <div className="relative h-full w-full">
              <Image
                src="/images.web/ese.jpeg"
                alt={t.about.imageAlt}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent" />
          </div>
{/** stats */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-linear-to-br from-cyan-500/20 via-sky-500/10 to-transparent px-4 py-4 sm:px-5 sm:py-5 shadow-[0_18px_45px_rgba(34,211,238,0.25)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(34,211,238,0.35)]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/30 blur-2xl" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white">120+</p>
              <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/90">{t.about.stats.projects}</p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-fuchsia-400/30 bg-linear-to-br from-fuchsia-500/20 via-pink-500/10 to-transparent px-4 py-4 sm:px-5 sm:py-5 shadow-[0_18px_45px_rgba(244,114,182,0.25)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(244,114,182,0.35)]">
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-fuchsia-400/30 blur-2xl" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white">6 anos</p>
              <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-100/90">{t.about.stats.experience}</p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-indigo-400/30 bg-linear-to-br from-indigo-500/20 via-violet-500/10 to-transparent px-4 py-4 sm:px-5 sm:py-5 shadow-[0_18px_45px_rgba(129,140,248,0.25)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(129,140,248,0.35)]">
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-indigo-400/30 blur-2xl" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white">4.9★</p>
              <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-indigo-100/90">{t.about.stats.reviews}</p>
            </div>
          </div>
        </div>

        {/** heading */}
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            {t.about.badge}
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {titleAfterYears === undefined ? (
              t.about.title
            ) : (
              <>
                {titleBeforeYears}
                <span className="mx-1 inline-flex rounded-xl bg-linear-to-r from-cyan-300 via-emerald-300 to-fuchsia-300 bg-clip-text font-extrabold text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                  6+
                </span>
                {titleAfterYears}
              </>
            )}
          </h2>
        </div>

        {/** content */}
        <div className="order-3 text-center lg:text-left">
          <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-200/90">
            {t.about.paragraphs[0]}
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200/90">
            {t.about.paragraphs[1]}
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200/90">
            {t.about.paragraphs[2]}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            {t.about.pills.map((pill, index) => {
              const baseClasses =
                "rounded-full border px-3 py-2 text-xs sm:text-sm font-semibold transition duration-200"

              if (index === 0) {
                return (
                  <a
                    key={pill}
                    href="https://ese-faps-xbvb.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClasses} border-cyan-400/40 bg-cyan-400/10 text-cyan-200 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white hover:shadow-lg hover:-translate-y-0.5 cursor-pointer`}
                    aria-label="Learn more about me on my portfolio site"
                  >
                    {pill}
                    <span className="ml-2 text-cyan-100">→</span>
                  </a>
                )
              }

              if (index === 1) {
                return (
                  <a
                    key={pill}
                    href="https://g.page/r/CZ1LfPpfu_ZrEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClasses} border-[#dadce0] bg-white text-[#1a73e8] shadow-sm shadow-[#1a73e8]/10 hover:border-[#4285f4] hover:bg-[#e8f0fe] hover:text-[#174ea6] hover:shadow-md hover:-translate-y-0.5 cursor-pointer`}
                    aria-label="Read Google reviews"
                  >
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
                      <span className="ml-2">{pill}</span>
                    </span>
                  </a>
                )
              }

              return (
                <span key={pill} className={`${baseClasses} border-indigo-400/30 bg-indigo-400/10 text-indigo-200`}>
                  {pill}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
