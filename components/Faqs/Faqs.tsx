"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

const QUESTIONS_PER_BATCH = 5;

export const Faqs = () => {
  const { t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(QUESTIONS_PER_BATCH);
  const questionsId = useId();
  const remainingCount = Math.max(0, t.faqs.items.length - visibleCount);

  return (
    <section id="faqs" className="bg-black py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
            {t.faqs.badge}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {t.faqs.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-200/80">
            {t.faqs.description}
          </p>
        </div>

        <div id={questionsId} className="mt-10 grid items-start gap-3 sm:mt-12 lg:grid-cols-2">
          {t.faqs.items.slice(0, visibleCount).map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.35)] transition hover:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                {faq.question}
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {faq.answer}
                {faq.answerLink ? (
                  <>
                    {" "}
                    <Link
                      href={faq.answerLink.href}
                      className="font-semibold text-indigo-200 underline-offset-4 transition hover:text-white hover:underline"
                    >
                      {faq.answerLink.label}
                    </Link>
                  </>
                ) : null}
              </p>
            </details>
          ))}
        </div>
        {(remainingCount > 0 || visibleCount > QUESTIONS_PER_BATCH) && (
          <div className="mt-8 text-center">
            {remainingCount > 0 && <p className="mb-4 text-sm text-slate-300">{t.faqs.moreInvitation}</p>}
            <div className="flex flex-wrap justify-center gap-3">
            {remainingCount > 0 && (
            <button
              type="button"
              aria-controls={questionsId}
              onClick={() => setVisibleCount((count) => Math.min(count + QUESTIONS_PER_BATCH, t.faqs.items.length))}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-lime-300/25 bg-lime-300/10 px-6 py-3 text-sm font-semibold text-lime-100 transition hover:border-lime-300/50 hover:bg-lime-300/20"
            >
              {t.faqs.showMore}
              <span aria-hidden="true" className="rounded-full bg-lime-300/15 px-2 py-0.5 text-xs">+{Math.min(QUESTIONS_PER_BATCH, remainingCount)}</span>
            </button>
            )}
            {visibleCount > QUESTIONS_PER_BATCH && (
              <button
                type="button"
                aria-controls={questionsId}
                onClick={() => {
                  setVisibleCount(QUESTIONS_PER_BATCH);
                  const questions = document.getElementById(questionsId);
                  questions?.querySelector("summary")?.focus({ preventScroll: true });
                  questions?.scrollIntoView({ block: "start" });
                }}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:bg-white/5"
              >
                {t.faqs.showLess}
              </button>
            )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
