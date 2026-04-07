"use client";
import Link from "next/link";
import React from "react";
import {
  BoltIcon,
  CheckBadgeIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useLanguage } from "@/lib/i18n";
import WebBackground from "./WebBackground";

const premiumPills = ["Mobile-first", "SEO-ready", "Fast loading"];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-28 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 -z-10">
        <WebBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_0,transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.24),transparent_0,transparent_38%)]" />
        <div className="absolute left-[-10%] top-[-8%] h-56 w-56 rounded-full bg-cyan-400/18 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] h-72 w-72 rounded-full bg-indigo-500/18 blur-3xl" />
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center opacity-15 blur-sm"
          style={{ backgroundImage: "url('/images.web/diffrent-screen.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/30 via-slate-950/72 to-black" />
      </div>

      <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-28">
        <div className="text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-sm backdrop-blur sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(103,232,249,0.8)]" />
              {t.hero.badge}
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-100 shadow-sm backdrop-blur sm:text-xs">
              <SparklesIcon className="h-3.5 w-3.5" />
              Limited • 20% OFF first project
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.title}
            <span className="mt-2 block bg-linear-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg lg:mx-0">
            {t.hero.description}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-sky-500 to-indigo-500 px-8 py-3.5 text-base font-bold text-white shadow-[0_18px_40px_rgba(56,189,248,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:from-sky-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:w-auto"
            >
              <BoltIcon className="h-5 w-5" />
              {t.hero.primaryCta}
            </Link>

            <Link
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-base font-bold text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40 sm:w-auto"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 lg:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
              <StarIcon className="h-4 w-4 text-amber-300" /> 4.9 client rating
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
              Premium presentation
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
              Built to convert
            </span>
          </div>

          <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 text-left sm:grid-cols-2 xl:grid-cols-3">
            {t.hero.cards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.25)] backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/35"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/90">
                  {card.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white/90">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-cyan-400/20 via-indigo-500/10 to-emerald-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/10 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-semibold">Premium website preview</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
                Live
              </span>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80">
              <div
                className="h-64 bg-cover bg-center sm:h-72"
                style={{ backgroundImage: "url('/images.web/diffrent-screen.jpg')" }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

              <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  First impression
                </p>
                <p className="mt-1 text-base font-bold text-white">Premium & trusted</p>
              </div>

              <div className="absolute bottom-4 right-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/12 px-4 py-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-200/80">
                  Client action
                </p>
                <p className="mt-1 text-base font-bold text-white">More WhatsApp leads</p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {premiumPills.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-3"
                >
                  <div className="inline-flex items-center gap-2 text-cyan-200">
                    <CheckBadgeIcon className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
