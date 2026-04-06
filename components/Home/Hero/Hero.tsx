"use client";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/lib/i18n";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-28 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center blur-md scale-105"
          style={{ backgroundImage: "url('/images.web/diffrent-screen.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-slate-950/45 to-black/80" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-6 px-5 py-20 text-center sm:px-8 sm:py-28 md:items-start md:text-left lg:min-h-[78vh] lg:px-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-100 shadow-sm backdrop-blur sm:text-xs dark:text-sky-200">
          <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_2px_rgba(56,189,248,0.8)]" />
          {t.hero.badge}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-6xl">
          {t.hero.title}
          <span className="block text-cyan-300">
            {t.hero.titleHighlight}
          </span>
        </h1>
        <p className="max-w-2xl text-sm text-slate-100/90 sm:text-base md:text-lg dark:text-slate-200/90">
          {t.hero.description}
        </p>

        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-start">
          <Link
            href="#contact"
            className="w-full sm:w-auto rounded-full bg-linear-to-r from-cyan-400 via-sky-500 to-indigo-500 px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-linear-to-r hover:from-sky-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-linear-to-r dark:from-white dark:via-sky-200 dark:to-indigo-200 dark:text-slate-900"
          >
            {t.hero.primaryCta}
          </Link>

          <Link
            href="#projects"
            className="w-full sm:w-auto rounded-full border border-white/30 bg-linear-to-r from-indigo-400 via-sky-400 to-cyan-400 px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-linear-to-r hover:from-sky-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-linear-to-r dark:from-white dark:via-sky-200 dark:to-cyan-200 dark:text-slate-900"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>
        <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 text-left text-sm text-slate-100/80 sm:grid-cols-2 lg:grid-cols-3">
          {t.hero.cards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white">
                {card.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-white/80">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
