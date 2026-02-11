import React from "react"
import {
  BuildingOffice2Icon,
  CursorArrowRaysIcon,
  ShoppingBagIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  Squares2X2Icon,
  ChartBarIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    title: "Sites institucionais",
    description:
      "Presença profissional, performance alta e experiência premium para sua marca.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Landing pages",
    description:
      "Páginas focadas em conversão com CTA estratégico e copy persuasiva.",
    icon: CursorArrowRaysIcon,
  },
  {
    title: "E-commerce",
    description:
      "Lojas rápidas, seguras e integradas com pagamentos e logística.",
    icon: ShoppingBagIcon,
  },
  {
    title: "Hospedagem e Domínio",
    description:
      "Serviço de hospedagem com servidores de alto desempenho, estabilidade e segurança. Gerenciamento completo de domínios para garantir que seu site esteja sempre online e acessível.",
    icon: PencilSquareIcon,
  },
  {
    title: "Site Otimizado",
    description:
      "Páginas rápidas e otimizadas para melhor desempenho e experiência do usuário.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Manutenção e suporte",
    description:
      "Atualizações contínuas, segurança e acompanhamento pós-lançamento.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Integrações",
    description:
      "Conectamos seu site a CRM, automações, WhatsApp e ferramentas de marketing.",
    icon: Squares2X2Icon,
  },
  {
    title: "Logo criação e branding",
    description:
      "Desenvolvimento de identidade visual, criação de logotipo e definição de paleta de cores para fortalecer a marca.",
    icon: ChartBarIcon,
  },
]

const Services = () => {
  return (
    <section id="services" className="scroll-mt-28 bg-black py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            serviços
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Tudo o que um desenvolvedor web entrega
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-200/80">
            Soluções completas para criar, escalar e converter com uma presença
            digital de alto nível.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400/30 via-emerald-400/20 to-indigo-400/30 ring-1 ring-white/10">
                <service.icon className="h-6 w-6 text-white/90" />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
