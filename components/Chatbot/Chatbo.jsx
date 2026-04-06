"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const chatbotCopy = {
  pt: {
    badge: "Resposta rápida",
    title: "Precisa de ajuda com seu site?",
    subtitle: "Fale com a gente em poucos passos.",
    welcome: "Olá 👋 Eu posso ajudar você a escolher o melhor tipo de site para o seu negócio.",
    prompt: "O que você precisa agora?",
    options: ["Quero um site novo", "Melhorar meu site", "Criar uma loja online"],
    reply: "Perfeito! Podemos ajudar com isso.",
    whatsappCta: "Falar no WhatsApp",
    examplesCta: "Ver projetos",
    restart: "Escolher outra opção",
    openLabel: "Abrir chat",
    closeLabel: "Fechar chat",
    bubbleLabel: "Ajuda",
  },
  en: {
    badge: "Fast reply",
    title: "Need help with your website?",
    subtitle: "Talk to us in a few simple steps.",
    welcome: "Hi 👋 I can help you choose the best website for your business.",
    prompt: "What do you need right now?",
    options: ["I need a new website", "Improve my current site", "Build an online store"],
    reply: "Great! We can help with that.",
    whatsappCta: "Chat on WhatsApp",
    examplesCta: "See projects",
    restart: "Choose another option",
    openLabel: "Open chat",
    closeLabel: "Close chat",
    bubbleLabel: "Help",
  },
  es: {
    badge: "Respuesta rápida",
    title: "¿Necesitas ayuda con tu sitio?",
    subtitle: "Habla con nosotros en pocos pasos.",
    welcome: "Hola 👋 Puedo ayudarte a elegir el mejor sitio para tu negocio.",
    prompt: "¿Qué necesitas ahora?",
    options: ["Quiero un sitio nuevo", "Mejorar mi sitio", "Crear una tienda online"],
    reply: "¡Perfecto! Podemos ayudarte con eso.",
    whatsappCta: "Hablar por WhatsApp",
    examplesCta: "Ver proyectos",
    restart: "Elegir otra opción",
    openLabel: "Abrir chat",
    closeLabel: "Cerrar chat",
    bubbleLabel: "Ayuda",
  },
};

export default function Chatbot() {
  const { locale } = useLanguage();
  const copy = chatbotCopy[locale] ?? chatbotCopy.pt;
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const shown = window.sessionStorage.getItem("chatbotShown");
        if (!shown) {
          setOpen(true);
          window.sessionStorage.setItem("chatbotShown", "true");
        }
      } catch {
        setOpen(false);
      }
    }, 3500);

    return () => window.clearTimeout(timer);
  }, []);

  const whatsappLink = useMemo(() => {
    const message = `${copy.welcome}\n\n${copy.prompt}\n${selectedOption || "-"}`;
    return `https://wa.me/554891817031?text=${encodeURIComponent(message)}`;
  }, [copy, selectedOption]);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[min(92vw,24rem)] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 text-white shadow-[0_20px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
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

          <div className="space-y-3 p-4">
            <div className="rounded-2xl bg-white/5 p-3 text-sm leading-6 text-slate-100">
              {copy.welcome}
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
        className="group relative inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 via-cyan-400 to-indigo-500 px-4 py-3 font-bold text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5"
      >
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-emerald-600">
          1
        </span>
        <span className="text-lg">💬</span>
        <span className="hidden text-sm sm:inline">{copy.bubbleLabel}</span>
      </button>
    </div>
  );
}