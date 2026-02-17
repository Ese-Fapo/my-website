"use client";

import React, { useMemo, useState } from "react";
import ProjectCard from "@/components/Project/ProjectCard";
import Link from "next/link";

const projects = [
  {
    title: "Plataforma de Educação ",
    description: "Design premium, performance alta e SEO pronto para conversão.",
    image: "/images.web/sch-img.jpeg",
    link: "https://rockstarstudyabroad.com/GitHub/index.html",
  },
  {
    title: "Barbearia",
    description: "Design moderno, performance otimizada e SEO para atrair clientes locais.",
    image: "/images.web/image_berber.jpeg",
    link: "https://berber-shop-ruby.vercel.app/",
  },
  {
    title: "Projeto de mini e-commerce",
    description: "Design elegante, performance otimizada e SEO para atrair clientes.",
    image: "/images.web/e-commerce.jpeg",
    link: "https://dotman-s-store-3eax.vercel.app/",
  },
   {
    title: "Projeto de blog tech",
    description: "Conteúdo escalável, performance e navegação fluida.",
    image: "/images.web/diffrent-screen.jpg",
    link: "https://tech-blog-i77h.vercel.app/",
  },

 

 


 
];

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [visibleCount]
  );

  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    if (!hasMore || isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, projects.length));
      setIsLoading(false);
    }, 700);
  };

  return (
    <section id="projects" className="scroll-mt-28 bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            projetos
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Projetos recentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-200/80">
            Confira alguns exemplos do nosso trabalho. Veja o nosso{" "}
            <Link href="https://ese-faps-xbvb.vercel.app/" className="font-semibold text-cyan-200 hover:text-cyan-100">
              portfólio completo
            </Link>
            . Quer tirar o seu projeto do papel?{" "}
            <Link href="#contact" className="font-semibold text-emerald-200 hover:text-emerald-100">
              Vamos criar algo incrível juntos!
            </Link>
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          {hasMore ? (
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
              aria-live="polite"
              aria-busy={isLoading}
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Carregando...
                </span>
              ) : (
                "Carregar mais projetos"
              )}
            </button>
          ) : (
            <p className="text-sm text-slate-400">check out our Portfolio for more projects.</p>
          )}
        </div>
      </div>
    </section>
  );
}
