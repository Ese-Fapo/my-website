"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLanguage();
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const segment = String(formData.get("segment") || "").trim();
    const budgetValue = String(formData.get("budget") || "").trim();
    const paidTraffic = formData.get("paid-traffic") ? t.contact.yes : t.contact.no;
    const digitalMarketing = formData.get("digital-marketing") ? t.contact.yes : t.contact.no;
    const messageValue = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      t.contact.whatsappIntro,
      "",
      `${t.contact.whatsappFields.name}: ${name || "-"}`,
      `${t.contact.whatsappFields.email}: ${email || "-"}`,
      `${t.contact.whatsappFields.phone}: ${phone || "-"}`,
      `${t.contact.whatsappFields.segment}: ${segment || "-"}`,
      `${t.contact.whatsappFields.budget}: ${budgetValue || "-"}`,
      `${t.contact.whatsappFields.paidTraffic}: ${paidTraffic}`,
      `${t.contact.whatsappFields.digitalMarketing}: ${digitalMarketing}`,
      "",
      `${t.contact.whatsappFields.message}:`,
      messageValue || "-",
    ].join("\n");

    const whatsappNumber = "554891817031";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="scroll-mt-28 bg-[#0b1220] py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_30px_120px_rgba(15,23,42,0.35)]">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                {t.contact.timelineBadge}
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
                {t.contact.timelineTitle}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-200/80">
                {t.contact.timelineDescription}
              </p>

              <ol className="mt-8 space-y-6 border-l border-white/10 pl-6">
                <li className="relative flex gap-4">
                  <span className="absolute -left-3.25 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-[10px] font-bold text-white ring-1 ring-cyan-400/40">
                    01
                  </span>
                  <span className="absolute left-2 top-3 h-px w-6 bg-cyan-400/40" />
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                    <p className="mt-1 text-sm font-semibold text-white">{t.contact.timelineSteps[0].title}</p>
                    <p className="text-sm text-slate-300/80">{t.contact.timelineSteps[0].description}</p>
                  </div>
                </li>
                <li className="relative flex gap-4 sm:justify-end">
                  <span className="absolute -left-3.25 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-400/20 text-[10px] font-bold text-white ring-1 ring-fuchsia-400/40">
                    02
                  </span>
                  <span className="absolute left-2 top-3 h-px w-6 bg-fuchsia-400/40" />
                  <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/5 p-4 sm:max-w-[85%]">
                    <p className="mt-1 text-sm font-semibold text-white">{t.contact.timelineSteps[1].title}</p>
                    <p className="text-sm text-slate-300/80">{t.contact.timelineSteps[1].description}</p>
                  </div>
                </li>
                <li className="relative flex gap-4">
                  <span className="absolute -left-3.25 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-400/20 text-[10px] font-bold text-indigo-100 ring-1 ring-indigo-400/40">
                    03
                  </span>
                  <span className="absolute left-2 top-3 h-px w-6 bg-indigo-400/40" />
                  <div className="rounded-2xl border border-indigo-400/20 bg-indigo-400/5 p-4">
                    <p className="mt-1 text-sm font-semibold text-white">{t.contact.timelineSteps[2].title}</p>
                    <p className="text-sm text-slate-300/80">{t.contact.timelineSteps[2].description}</p>
                  </div>
                </li>
                <li className="relative flex gap-4 sm:justify-end">
                  <span className="absolute -left-3.25 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-[10px] font-bold text-emerald-100 ring-1 ring-emerald-400/40">
                    04
                  </span>
                  <span className="absolute left-2 top-3 h-px w-6 bg-emerald-400/40" />
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4 sm:max-w-[85%]">
                    <p className="mt-1 text-sm font-semibold text-white">{t.contact.timelineSteps[3].title}</p>
                    <p className="text-sm text-slate-300/80">{t.contact.timelineSteps[3].description}</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="max-w-md lg:max-w-none mx-auto rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-slate-800/60 dark:bg-[#0b1020]/80">
              <h2 className="text-xl font-bold text-center mb-2">
                <span className="bg-linear-to-r from-lime-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
                  {t.contact.formTitle}
                </span>
              </h2>
              <p className="text-center text-slate-600 mb-6 dark:text-slate-300">
                {t.contact.formDescription}
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Nome */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">
            {t.contact.labels.name}
          </label>
          <input
            type="text"
            name="name"
            placeholder={t.contact.placeholders.name}
            required
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-800 dark:bg-[#0d1324] dark:text-slate-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">
            {t.contact.labels.email}
          </label>
          <input
            type="email"
            name="email"
            placeholder={t.contact.placeholders.email}
            required
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-800 dark:bg-[#0d1324] dark:text-slate-100"
          />
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">
            {t.contact.labels.phone}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder={t.contact.placeholders.phone}
            required
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-800 dark:bg-[#0d1324] dark:text-slate-100"
          />
        </div>

        {/* Segmento */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">
            {t.contact.labels.segment}
          </label>
          <input
            type="text"
            name="segment"
            placeholder={t.contact.placeholders.segment}
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-800 dark:bg-[#0d1324] dark:text-slate-100"
          />
        </div>

        {/* Investimento */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">
            {t.contact.labels.budget}
          </label>
          <select
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-800 dark:bg-[#0d1324] dark:text-slate-100"
          >
            <option value="">{t.contact.placeholders.budget}</option>
            <option value="0-1000">{t.contact.budgetOptions[0]}</option>
            <option value="1000-2000">{t.contact.budgetOptions[1]}</option>
            <option value="2000-3000">{t.contact.budgetOptions[2]}</option>
            <option value="3000-4000">{t.contact.budgetOptions[3]}</option>
            <option value="4000-5000">{t.contact.budgetOptions[4]}</option>
            <option value="5000+">{t.contact.budgetOptions[5]}</option>
          </select>
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">
            {t.contact.labels.message}
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder={t.contact.placeholders.message}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            maxLength={1000}
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-800 dark:bg-[#0d1324] dark:text-slate-100"
          />
          <p className="text-right text-xs text-slate-400 mt-1">
            {message.length}/1000
          </p>
        </div>

        {/* Serviços */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            {t.contact.labels.extraServices}
          </p>
          <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <input type="checkbox" name="paid-traffic" className="rounded accent-emerald-400" />
            {t.contact.labels.paidTraffic}
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <input type="checkbox" name="digital-marketing" className="rounded accent-emerald-400" />
            {t.contact.labels.digitalMarketing}
          </label>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full mt-4 bg-linear-to-r from-lime-300 via-emerald-300 to-purple-400 text-[#0b1020] py-3 rounded-full font-bold hover:opacity-90 transition"
        >
          {t.contact.labels.submit}
        </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}