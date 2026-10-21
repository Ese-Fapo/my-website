"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon, ArrowUpRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" aria-labelledby="hero-title" className="hero-studio relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
        <div className="min-w-0">
          <p className="inline-flex max-w-full items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300 sm:text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#d5f478]" />
            {t.hero.badge}
          </p>
          <h1 id="hero-title" className="mt-6 max-w-3xl text-[clamp(2.5rem,5.3vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.055em]">
            {t.hero.title}
            <span className="mt-3 block text-[#d5f478]">{t.hero.titleHighlight}</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">{t.hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <Link prefetch={false} href="/contact/" className="studio-button group inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#d5f478] px-7 py-4 text-sm font-bold text-[#182522] hover:bg-[#c5e962]">
              {t.hero.primaryCta}<ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link prefetch={false} href="#projects" className="studio-button inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold hover:bg-white/10">
              {t.hero.secondaryCta}<ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-4 border-t border-white/12 pt-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm font-bold">6+</div>
            <div className="min-w-0 text-sm text-slate-300"><p className="font-semibold text-white">120+ {t.about.stats.projects}</p><p className="mt-0.5">{t.about.stats.experience} · Santa Catarina, BR</p></div>
            <span className="ml-auto hidden text-lg text-[#d5f478] sm:block" aria-hidden="true">✳</span>
          </div>
        </div>
        <div className="relative min-w-0 pb-8 lg:pt-6">
          <div className="absolute -right-5 -top-5 h-44 w-44 rounded-full border border-[#728557]/20 sm:h-64 sm:w-64" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[28px] bg-slate-900 sm:rounded-[40px] lg:rounded-tl-[100px]">
            <Image src="/images.web/hand-young-black-woman-l.avif" alt={t.hero.imageAlt} width={626} height={387} sizes="(max-width: 1023px) 100vw, 50vw" preload className="aspect-[4/3] w-full object-cover object-[55%_center] sm:aspect-[5/4] lg:aspect-[1/1.15]" />
            <div className="absolute inset-0 bg-linear-to-t from-[#182522]/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <p className="max-w-52 text-lg font-medium leading-snug tracking-tight">{t.hero.imageCaption}</p>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40"><ArrowUpRightIcon className="h-5 w-5" aria-hidden="true" /></span>
            </div>
          </div>
          <div className="absolute -bottom-1 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-[0_12px_35px_rgba(24,37,34,0.08)] sm:left-6 sm:right-10 sm:p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-300/10 text-lime-200"><CheckIcon className="h-5 w-5" aria-hidden="true" /></span>
            <div className="min-w-0"><p className="text-sm font-bold">{t.hero.cards[1].value}</p><p className="mt-1 text-xs text-slate-300">{t.hero.cards[2].value}</p></div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300 sm:justify-between sm:px-8 sm:text-xs">
          {t.services.items.slice(0, 4).map(item => <span key={item.title} className="inline-flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-[#7d9560]" />{item.title}</span>)}
        </div>
      </div>
    </section>
  );
}
