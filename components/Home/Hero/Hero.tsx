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
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-45 sm:opacity-35 lg:opacity-30 bg-[radial-gradient(1px_1px_at_20px_30px,#94a3b8_60%,transparent_70%),radial-gradient(1px_1px_at_90px_60px,#94a3b8_60%,transparent_70%),radial-gradient(1px_1px_at_40px_100px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_120px_30px,#94a3b8_50%,transparent_70%),radial-gradient(1px_1px_at_60px_140px,#94a3b8_55%,transparent_70%)] dark:opacity-80 dark:bg-[radial-gradient(1px_1px_at_20px_30px,#ffffff_80%,transparent_70%),radial-gradient(1px_1px_at_90px_60px,#ffffff_80%,transparent_70%),radial-gradient(1px_1px_at_40px_100px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_120px_30px,#ffffff_60%,transparent_70%),radial-gradient(1px_1px_at_60px_140px,#ffffff_70%,transparent_70%)] bg-size-[210px_210px] sm:bg-size-[180px_180px] lg:bg-size-[160px_160px] animate-star-drift-slow motion-reduce:animate-none" />
        <div className="absolute inset-0 opacity-40 sm:opacity-30 lg:opacity-25 bg-[radial-gradient(1.5px_1.5px_at_18px_26px,#38bdf8_70%,transparent_70%),radial-gradient(1.5px_1.5px_at_84px_58px,#f472b6_70%,transparent_70%),radial-gradient(1.5px_1.5px_at_44px_110px,#a78bfa_70%,transparent_70%),radial-gradient(1.5px_1.5px_at_124px_34px,#facc15_80%,transparent_70%),radial-gradient(1.5px_1.5px_at_64px_150px,#34d399_70%,transparent_70%)] dark:opacity-85 dark:bg-[radial-gradient(1.5px_1.5px_at_18px_26px,#22d3ee_90%,transparent_70%),radial-gradient(1.5px_1.5px_at_84px_58px,#f472b6_90%,transparent_70%),radial-gradient(1.5px_1.5px_at_44px_110px,#a78bfa_90%,transparent_70%),radial-gradient(1.5px_1.5px_at_124px_34px,#fde047_95%,transparent_70%),radial-gradient(1.5px_1.5px_at_64px_150px,#4ade80_90%,transparent_70%)] bg-size-[230px_230px] sm:bg-size-[200px_200px] lg:bg-size-[180px_180px] animate-star-drift motion-reduce:animate-none" />
        <div className="absolute inset-0 opacity-55 sm:opacity-45 lg:opacity-35 bg-[radial-gradient(2px_2px_at_30px_24px,#e2e8f0_90%,transparent_70%),radial-gradient(2px_2px_at_96px_72px,#cbd5f5_90%,transparent_70%),radial-gradient(2px_2px_at_52px_140px,#f472b6_85%,transparent_70%),radial-gradient(2px_2px_at_140px_44px,#7dd3fc_90%,transparent_70%),radial-gradient(2px_2px_at_78px_190px,#a78bfa_85%,transparent_70%)] dark:opacity-90 dark:bg-[radial-gradient(2px_2px_at_30px_24px,#ffffff_95%,transparent_70%),radial-gradient(2px_2px_at_96px_72px,#dbeafe_95%,transparent_70%),radial-gradient(2px_2px_at_52px_140px,#fbcfe8_95%,transparent_70%),radial-gradient(2px_2px_at_140px_44px,#bae6fd_95%,transparent_70%),radial-gradient(2px_2px_at_78px_190px,#ddd6fe_95%,transparent_70%)] bg-size-[220px_220px] sm:bg-size-[180px_180px] lg:bg-size-[150px_150px] animate-star-drift-fast-twinkle motion-reduce:animate-none" />
        <div className="absolute inset-0 opacity-40 sm:opacity-25 lg:opacity-20 bg-[radial-gradient(2px_2px_at_12px_18px,#94a3b8_70%,transparent_65%),radial-gradient(2px_2px_at_72px_86px,#7dd3fc_70%,transparent_70%),radial-gradient(2px_2px_at_116px_46px,#f9a8d4_70%,transparent_70%),radial-gradient(2px_2px_at_46px_128px,#c4b5fd_70%,transparent_70%)] dark:opacity-80 dark:bg-[radial-gradient(2px_2px_at_12px_18px,#ffffff_95%,transparent_65%),radial-gradient(2px_2px_at_72px_86px,#67e8f9_95%,transparent_70%),radial-gradient(2px_2px_at_116px_46px,#f9a8d4_95%,transparent_70%),radial-gradient(2px_2px_at_46px_128px,#c4b5fd_95%,transparent_70%)] bg-size-[210px_210px] sm:bg-size-[170px_170px] lg:bg-size-[140px_140px] animate-star-drift-fast-twinkle motion-reduce:animate-none" />
        <div className="absolute inset-0 opacity-35 sm:opacity-20 lg:opacity-18 bg-[radial-gradient(1px_1px_at_14px_22px,#94a3b8_60%,transparent_70%),radial-gradient(1px_1px_at_62px_88px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_104px_40px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_36px_126px,#94a3b8_55%,transparent_70%)] dark:opacity-65 dark:bg-[radial-gradient(1px_1px_at_14px_22px,#ffffff_80%,transparent_70%),radial-gradient(1px_1px_at_62px_88px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_104px_40px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_36px_126px,#ffffff_70%,transparent_70%)] bg-size-[230px_230px] sm:bg-size-[190px_190px] lg:bg-size-[160px_160px] animate-star-drift-alt motion-reduce:animate-none" />
        <div className="absolute inset-0 opacity-30 sm:opacity-20 lg:opacity-16 bg-[radial-gradient(1px_1px_at_28px_18px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_78px_98px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_120px_52px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_48px_140px,#94a3b8_55%,transparent_70%)] dark:opacity-60 dark:bg-[radial-gradient(1px_1px_at_28px_18px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_78px_98px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_120px_52px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_48px_140px,#ffffff_70%,transparent_70%)] bg-size-[240px_240px] sm:bg-size-[200px_200px] lg:bg-size-[170px_170px] animate-star-drift-vert motion-reduce:animate-none" />
        <div className="absolute left-[10%] top-[15%] h-0.5 w-35 rotate-45 bg-linear-to-r from-white/90 via-cyan-300/80 to-transparent blur-[0.6px] animate-shooting-1 motion-reduce:animate-none" />
        <div className="absolute left-[55%] top-[8%] h-0.5 w-45 rotate-45 bg-linear-to-r from-white/90 via-fuchsia-300/80 to-transparent blur-[0.8px] animate-shooting-2 motion-reduce:animate-none [animation-delay:1.5s]" />
        <div className="absolute left-[70%] top-[25%] h-0.5 w-40 rotate-45 bg-linear-to-r from-white/90 via-indigo-300/80 to-transparent blur-[0.8px] animate-shooting-3 motion-reduce:animate-none [animation-delay:3.2s]" />
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-transparent blur-3xl animate-nebula-shift motion-reduce:animate-none" />
        <div className="absolute left-8 bottom-10 h-56 w-56 rounded-full bg-transparent blur-2xl animate-nebula-shift motion-reduce:animate-none" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-6 px-5 py-20 text-center sm:px-8 sm:py-28 md:items-start md:text-left lg:min-h-[78vh] lg:px-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-100 shadow-sm backdrop-blur sm:text-xs dark:text-sky-200">
          <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_2px_rgba(56,189,248,0.8)]" />
          {t.hero.badge}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_10px_rgba(15,23,42,0.45)] sm:text-5xl sm:leading-[1.08] lg:text-6xl">
          {t.hero.title}
          <span className="block bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </h1>
        <p className="max-w-2xl text-sm text-slate-100/90 sm:text-base md:text-lg dark:text-slate-200/90">
          {t.hero.description}
        </p>

        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-start">
          <Link href="#contact">
            <button className="w-full sm:w-auto rounded-full bg-linear-to-r from-cyan-400 via-sky-500 to-indigo-500 px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-linear-to-r hover:from-sky-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-linear-to-r dark:from-white dark:via-sky-200 dark:to-indigo-200 dark:text-slate-900">
              {t.hero.primaryCta}
            </button>
          </Link>

          <Link href="#projects">
            <button className="w-full sm:w-auto rounded-full bg-linear-to-r from-indigo-400 via-sky-400 to-cyan-400 px-8 py-3 text-base font-bold text-white border border-white/30 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-linear-to-r hover:from-sky-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-linear-to-r dark:from-white dark:via-sky-200 dark:to-cyan-200 dark:text-slate-900">
              {t.hero.secondaryCta}
            </button>
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
