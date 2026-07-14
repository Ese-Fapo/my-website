"use client";

import React, { useMemo, useState } from "react";
import ProjectCard from "@/components/Project/ProjectCard";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

type ProjectsSectionProps = {
  initialVisibleCount?: number;
  loadMoreUrl?: string | null;
};

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  link: string;
  recent?: boolean;
  category?: string;
  tags?: string[];
};

export default function ProjectsSection({
  initialVisibleCount = 3,
  loadMoreUrl = "/projects/",
}: ProjectsSectionProps) {
  const { t } = useLanguage();
  const projects = t.projects.items as ProjectItem[];
  const orderedProjects = useMemo(
    () => [...projects].sort((a, b) => Number(!!b.recent) - Number(!!a.recent)),
    [projects]
  );
  const [visibleCount] = useState(initialVisibleCount);

  const visibleProjects = useMemo(
    () => orderedProjects.slice(0, visibleCount),
    [orderedProjects, visibleCount]
  );

  const hasMore = visibleCount < projects.length;
  const showLoadMoreLink = Boolean(loadMoreUrl && hasMore);

  return (
    <section id="projects" className="relative overflow-hidden scroll-mt-28 bg-slate-950 py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/45 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-cyan-100 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.85)]" />
              {t.projects.badge}
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              {t.projects.title}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur">
            <p className="text-sm leading-7 text-slate-200 sm:text-base">
              {t.projects.descriptionBeforePortfolio}{" "}
              <Link href="https://ese-faps-xbvb.vercel.app/" className="font-bold text-cyan-200 hover:text-white">
                {t.projects.portfolioLink}
              </Link>
              {t.projects.descriptionAfterPortfolio}{" "}
              <Link href="/contact/" className="font-bold text-amber-200 hover:text-white">
                {t.projects.contactLink}
              </Link>
            </p>
          </div>
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="border border-white/10 bg-white/[0.06] p-5 text-left backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">Launches</p>
            <p className="mt-3 text-4xl font-black text-white">120+</p>
            <p className="mt-2 text-sm text-slate-300">Live digital experiences built for growth.</p>
          </div>
          <div className="border border-white/10 bg-white/[0.06] p-5 text-left backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200">Client rating</p>
            <p className="mt-3 text-4xl font-black text-white">4.9/5</p>
            <p className="mt-2 text-sm text-slate-300">Designs that feel premium and perform beautifully.</p>
          </div>
          <div className="border border-white/10 bg-white/[0.06] p-5 text-left backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-200">Responsive</p>
            <p className="mt-3 text-4xl font-black text-white">Mobile-first</p>
            <p className="mt-2 text-sm text-slate-300">Every project is optimized for all screens and devices.</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              {...project}
              ctaLabel={t.projects.cardCta}
              recent={project.recent}
              featured={index === 0}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {showLoadMoreLink ? (
            <Link
              href={loadMoreUrl!}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:scale-[1.01] hover:bg-cyan-300 hover:shadow-[0_22px_66px_rgba(14,165,233,0.24)]"
            >
              {t.projects.loadMore}
            </Link>
          ) : hasMore ? (
            <p className="text-sm text-slate-300">{t.projects.loadMore}</p>
          ) : (
            <p className="text-sm text-slate-300">{t.projects.noMore}</p>
          )}
        </div>
      </div>
    </section>
  );
}
