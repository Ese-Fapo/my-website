"use client";

import React, { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const chatbotCopy = {
  pt: {
    badge: "20% OFF no primeiro projeto",
    title: "Quer um site com desconto especial?",
    subtitle: "Clique e fale com a gente quando quiser.",
    welcome:
      "Olá 👋 Posso ajudar você a criar o site ideal para o seu negócio.",
    offer: "🎉 Novos clientes ganham 20% de desconto no primeiro projeto.",
    prompt: "O que você precisa agora?",
    options: ["Quero um site novo", "Melhorar meu site", "Criar uma loja online"],
    reply: "Perfeito! E seu primeiro projeto pode sair com 20% OFF.",
    whatsappCta: "Falar no WhatsApp",
    examplesCta: "Ver projetos",
    restart: "Escolher outra opção",
    openLabel: "Abrir chat",
    closeLabel: "Fechar chat",
    bubbleLabel: "20% OFF",
  },
  en: {
    badge: "20% OFF for new clients",
    title: "Need a website with a special discount?",
    subtitle: "Click and chat with us whenever you're ready.",
    welcome: "Hi 👋 I can help you choose the right website for your business.",
    offer: "🎉 New clients get 20% off their first project.",
    prompt: "What do you need right now?",
    options: ["I need a new website", "Improve my current site", "Build an online store"],
    reply: "Great! Your first project can qualify for 20% OFF.",
    whatsappCta: "Chat on WhatsApp",
    examplesCta: "See projects",
    restart: "Choose another option",
    openLabel: "Open chat",
    closeLabel: "Close chat",
    bubbleLabel: "20% OFF",
  },
  es: {
    badge: "20% OFF para nuevos clientes",
    title: "¿Quieres un sitio con descuento especial?",
    subtitle: "Haz clic y habla con nosotros cuando quieras.",
    welcome: "Hola 👋 Puedo ayudarte a elegir el mejor sitio para tu negocio.",
    offer: "🎉 Los nuevos clientes reciben 20% de descuento en su primer proyecto.",
    prompt: "¿Qué necesitas ahora?",
    options: ["Quiero un sitio nuevo", "Mejorar mi sitio", "Crear una tienda online"],
    reply: "¡Perfecto! Tu primer proyecto puede tener 20% OFF.",
    whatsappCta: "Hablar por WhatsApp",
    examplesCta: "Ver proyectos",
    restart: "Elegir otra opción",
    openLabel: "Abrir chat",
    closeLabel: "Cerrar chat",
    bubbleLabel: "20% OFF",
  },
};

export default function Chatbot() {
  const { locale } = useLanguage();
  const copy = chatbotCopy[locale] ?? chatbotCopy.pt;
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const whatsappLink = useMemo(() => {
    const message = `Olá! Vim pelo site.\n${copy.welcome}\n${copy.offer}\n\n${copy.prompt}\n${selectedOption || "-"}`;
    return `https://wa.me/554891817031?text=${encodeURIComponent(message)}`;
  }, [copy, selectedOption]);

  return (
    <div className="fixed bottom-4 right-4 z-60 flex max-w-[calc(100vw-1rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open ? (
        <div className="w-[min(calc(100vw-1rem),24rem)] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 text-white shadow-[0_20px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:w-[24rem]">
          <div className="bg-linear-to-r from-emerald-500 via-cyan-500 to-indigo-500 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
                  {copy.badge}
                </p>
                <h3 className="mt-1 text-lg font-bold">{copy.title}</h3>
                <p className="mt-1 text-sm text-white/85">{copy.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={copy.closeLabel}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-lg text-white transition hover:bg-white/25"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="max-h-[58vh] space-y-3 overflow-y-auto p-4 sm:max-h-none">
            <div className="rounded-2xl bg-white/5 p-3 text-sm leading-6 text-slate-100">
              {copy.welcome}
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm font-medium text-emerald-50">
              {copy.offer}
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                {copy.prompt}
              </p>
              <div className="grid gap-2">
                {copy.options.map((option) => {
                  const isActive = selectedOption === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedOption(option)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                        isActive
                          ? "border-emerald-400 bg-emerald-500/15 text-emerald-100"
                          : "border-white/10 bg-white/5 text-slate-100 hover:border-cyan-300/50 hover:bg-white/10"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedOption ? (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-3 text-sm text-emerald-50">
                {copy.reply}
              </div>
            ) : null}

            <div className="grid gap-2 sm:grid-cols-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:opacity-90"
              >
                {copy.whatsappCta}
              </a>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {copy.examplesCta}
              </a>
            </div>

            {selectedOption ? (
              <button
                type="button"
                onClick={() => setSelectedOption("")}
                className="w-full text-center text-xs font-semibold text-slate-300 transition hover:text-white"
              >
                {copy.restart}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? copy.closeLabel : copy.openLabel}
        className="group relative inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 via-cyan-400 to-indigo-500 px-3.5 py-3 font-bold text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5 sm:px-4"
      >
        <span className="absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full bg-white px-1 text-[9px] font-bold text-emerald-600">
          20%
        </span>
        <span className="text-lg">💬</span>
        <span className="hidden text-sm sm:inline">{copy.bubbleLabel}</span>
      </button>
    </div>
  );
}