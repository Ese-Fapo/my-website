import React from "react"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">
      <div className="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 animate-[fade-slide-up_0.8s_ease-out]">
        <div className="mb-10 rounded-3xl border border-white/10 bg-linear-to-r from-cyan-500/15 via-fuchsia-500/10 to-indigo-500/15 p-6 sm:p-8 shadow-[0_30px_120px_rgba(15,23,42,0.45)]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-300">pronto para acelerar?</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Vamos criar sua próxima experiência digital
              </h3>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1020] shadow-lg shadow-white/10 transition hover:opacity-90"
            >
              Falar com um especialista →
            </Link>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#5fffd2] via-[#599692] to-[#3de0c7] text-[#0b1020] shadow-lg shadow-[#0b1020]/30">
                PS
              </span>
              <div className="leading-tight">
                <p className="text-base font-bold tracking-wide text-white group-hover:text-cyan-200 transition-colors">Prime Site</p>
                <p className="text-xs font-semibold tracking-wide text-slate-300">
                  Desenvolvedores
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm text-slate-300/80">
              Criamos experiências digitais rápidas, bonitas e focadas em conversão.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-pink-500/20 via-fuchsia-500/20 to-orange-400/20 text-white/80 shadow-[0_0_0_rgba(236,72,153,0)] transition hover:text-white hover:shadow-[0_0_22px_rgba(236,72,153,0.7)]"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zm4.75-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-sky-500/20 via-blue-500/20 to-indigo-500/20 text-white/80 shadow-[0_0_0_rgba(59,130,246,0)] transition hover:text-white hover:shadow-[0_0_22px_rgba(59,130,246,0.7)]"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9 7H7v8h3v-8zm-1.5-2.25A1.75 1.75 0 1 0 8.5 7.5 1.75 1.75 0 0 0 8.5 7.75zM17 18v-4.5a3 3 0 0 0-6 0V18h3v-4.5a1.5 1.5 0 0 1 3 0V18z" />
                </svg>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 text-white/80 shadow-[0_0_0_rgba(168,85,247,0)] transition hover:text-white hover:shadow-[0_0_22px_rgba(168,85,247,0.7)]"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5A11.5 11.5 0 0 0 8.36 22c.6.1.82-.26.82-.58v-2c-3.34.73-4-1.44-4-1.44a3.15 3.15 0 0 0-1.32-1.75c-1.08-.74.08-.72.08-.72a2.5 2.5 0 0 1 1.82 1.24 2.54 2.54 0 0 0 3.47 1 2.54 2.54 0 0 1 .76-1.6c-2.66-.3-5.46-1.33-5.46-5.92a4.64 4.64 0 0 1 1.24-3.23 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0C17.5 4.2 18.5 4.52 18.5 4.52a4.3 4.3 0 0 1 .12 3.18 4.64 4.64 0 0 1 1.24 3.23c0 4.6-2.8 5.62-5.48 5.92a2.85 2.85 0 0 1 .82 2.2v3.25c0 .32.22.7.82.58A11.5 11.5 0 0 0 12 .5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><Link className="transition hover:text-cyan-200" href="#about">Sobre</Link></li>
              <li><Link className="transition hover:text-emerald-200" href="#services">Serviços</Link></li>
              <li><Link className="transition hover:text-indigo-200" href="#projects">Projetos</Link></li>
              <li><Link className="transition hover:text-fuchsia-200" href="#faqs">Dúvidas</Link></li>
              <li><Link className="transition hover:text-sky-200" href="#contact">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              Serviços
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="transition hover:text-white">Sites institucionais</li>
              <li className="transition hover:text-white">Landing pages</li>
              <li className="transition hover:text-white">E-commerce</li>
              <li className="transition hover:text-white">SEO & Performance</li>
              <li className="transition hover:text-white">Manutenção</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a className="transition hover:text-cyan-200" href="mailto:contato@primesite.dev">
                  contato@primesite.dev
                </a>
              </li>
              <li>
                <a className="transition hover:text-emerald-200" href="https://wa.me/554891817031" target="_blank" rel="noreferrer">
                  WhatsApp: (48) 9181-7031
                </a>
              </li>
              <li>Brasil • Atendimento remoto</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Prime Site. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="transition hover:text-white hover:underline">Política de privacidade</Link>
            <Link href="#" className="transition hover:text-white hover:underline">Termos de uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
