"use client"

import React from "react"
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import { useLanguage } from "@/lib/i18n"

export const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">
      <div className="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-10 rounded-3xl border border-white/10 bg-linear-to-r from-cyan-500/15 via-fuchsia-500/10 to-indigo-500/15 p-6 sm:p-8 shadow-[0_30px_120px_rgba(15,23,42,0.45)]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-300">{t.footer.ctaTag}</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {t.footer.ctaTitle}
              </h3>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1020] shadow-lg shadow-white/10 transition hover:opacity-90"
            >
              {t.footer.ctaButton}
            </Link>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#5fffd2] via-[#599692] to-[#3de0c7] text-[#0b1020] shadow-lg shadow-[#0b1020]/30">
                SP
              </span>
              <div className="leading-tight">
                <p className="text-base font-bold tracking-wide text-white transition-colors group-hover:text-cyan-200">
                  {t.nav.brandName}
                </p>
                <p className="text-xs font-semibold tracking-wide text-slate-300">
                  {t.nav.brandSub}
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm text-slate-300/80">
              {t.footer.brandText}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.instagram.com/easy_ese_1/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-[#F58529]/25 via-[#DD2A7B]/25 to-[#515BD4]/25 text-white/90 shadow-[0_0_0_rgba(221,42,123,0)] transition hover:border-white/20 hover:text-white hover:shadow-[0_0_26px_rgba(221,42,123,0.85)]"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/ese-fapohunda-118594360/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-[#0A66C2]/25 via-[#0A66C2]/15 to-[#38BDF8]/15 text-white/90 shadow-[0_0_0_rgba(10,102,194,0)] transition hover:border-white/20 hover:text-white hover:shadow-[0_0_26px_rgba(10,102,194,0.85)]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Ese-Fapo"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-[#2F2F2F]/30 via-[#0B0B0B]/30 to-[#4B5563]/25 text-white/90 shadow-[0_0_0_rgba(15,23,42,0)] transition hover:border-white/20 hover:text-white hover:shadow-[0_0_26px_rgba(148,163,184,0.7)]"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              {t.footer.navigation}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><Link className="transition hover:text-cyan-200" href="#about">{t.footer.navigationLinks.about}</Link></li>
              <li><Link className="transition hover:text-emerald-200" href="#services">{t.footer.navigationLinks.services}</Link></li>
              <li><Link className="transition hover:text-indigo-200" href="#projects">{t.footer.navigationLinks.projects}</Link></li>
              <li><Link className="transition hover:text-fuchsia-200" href="#faqs">{t.footer.navigationLinks.faqs}</Link></li>
              <li><Link className="transition hover:text-sky-200" href="#contact">{t.footer.navigationLinks.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              {t.footer.services}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {t.footer.serviceItems.map((item) => (
                <li key={item} className="transition hover:text-white">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a className="transition hover:text-cyan-200" href="mailto:esefapohunda@gmail.com">
                  Email: esefapohunda@gmail.com
                </a>
              </li>
              <li>
                <a className="transition hover:text-emerald-200" href="https://wa.me/554898127673?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20meu%20projeto." target="_blank" rel="noreferrer">
                  WhatsApp: +55 48 9812-7673
                </a>
              </li>
              <li>{t.footer.remoteSupport}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Sites Profissionai</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="transition hover:text-white hover:underline">{t.footer.privacy}</Link>
            <Link href="#" className="transition hover:text-white hover:underline">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
