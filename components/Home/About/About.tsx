import React from 'react'
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-24 lg:py-32">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-20 px-5 sm:px-8">
        {/** image */}
        <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl">
          <div className="absolute -inset-6 rounded-4xl bg-linear-to-br from-cyan-500/20 via-fuchsia-500/10 to-indigo-500/20 blur-2xl" />
          <div className="group relative aspect-4/3 w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/40 shadow-[0_35px_120px_rgba(15,23,42,0.45)] backdrop-blur">
            <div className="absolute inset-0 opacity-70 bg-[radial-gradient(100%_80%_at_70%_0%,rgba(56,189,248,0.25)_0%,transparent_55%)]" />
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full border border-white/20" />
            <div className="absolute -right-12 -bottom-12 h-24 w-24 rounded-full border border-white/10" />
            <div className="relative h-full w-full">
              <Image
                src="/images.web/group-people-working-website-template_.avif"
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
              <p className="text-2xl sm:text-3xl font-extrabold text-white">4 anos</p>
              <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-100/90">{t.about.stats.experience}</p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-indigo-400/30 bg-linear-to-br from-indigo-500/20 via-violet-500/10 to-transparent px-4 py-4 sm:px-5 sm:py-5 shadow-[0_18px_45px_rgba(129,140,248,0.25)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(129,140,248,0.35)]">
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-indigo-400/30 blur-2xl" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white">4.9★</p>
              <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-indigo-100/90">{t.about.stats.reviews}</p>
            </div>
          </div>
        </div>

        {/** content */}
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            {t.about.badge}
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {t.about.title}
          </h2>
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
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs sm:text-sm text-cyan-200">{t.about.pills[0]}</span>
            <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-2 text-xs sm:text-sm text-fuchsia-200">{t.about.pills[1]}</span>
            <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-2 text-xs sm:text-sm text-indigo-200">{t.about.pills[2]}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
