"use client";

import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/lib/i18n";

export default function LivePreview() {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="live-preview-title" className="relative overflow-hidden bg-[#0c1512] px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative mx-auto w-full max-w-3xl">
          <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-lime-400/10 via-transparent to-emerald-400/5 blur-2xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:p-5">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#101c19] px-4 py-3 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="hidden font-semibold sm:inline">{t.hero.livePreviewTitle}</span>
              <span className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100">
                {t.hero.livePreviewStatus}
              </span>
            </div>

            <div className="mt-4 rounded-3xl border border-white/10 bg-[#101c19] p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-400/15 text-violet-200 ring-1 ring-violet-300/30">
                  <CheckBadgeIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-100/85">
                    {t.hero.livePreviewTag}
                  </p>
                  <h2 id="live-preview-title" className="mt-1 text-lg font-bold text-white sm:text-xl">
                    {t.hero.livePreviewTitle}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-200/85">
                    {t.hero.livePreviewDescription}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/90">
                  <span>Project progress</span>
                  <span>82%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[82%] rounded-full bg-linear-to-r from-[#d5f478] to-emerald-400" />
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {t.hero.cards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-100/85">
                      {card.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/90">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
