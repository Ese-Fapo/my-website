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
    <section id="projects" className="relative overflow-hidden scroll-mt-28 bg-slate-950 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_34%)]" />
      <div className="pointer-events-none absolute right-0 top-28 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto relative max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
            {t.projects.badge}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t.projects.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-7 text-slate-300/85">
            {t.projects.descriptionBeforePortfolio}{" "}
            <Link href="https://ese-faps-xbvb.vercel.app/" className="font-semibold text-indigo-200 hover:text-white">
              {t.projects.portfolioLink}
            </Link>
            {t.projects.descriptionAfterPortfolio}{" "}
            <Link href="/contact/" className="font-semibold text-violet-200 hover:text-white">
              {t.projects.contactLink}
            </Link>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          <div className="rounded-[28px] border border-white/10 bg-slate-900/75 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-indigo-300/90">Launches</p>
            <p className="mt-3 text-3xl font-semibold text-white">120+</p>
            <p className="mt-2 text-sm text-slate-400">Live digital experiences built for growth.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-900/75 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300/90">Client rating</p>
            <p className="mt-3 text-3xl font-semibold text-white">4.9/5</p>
            <p className="mt-2 text-sm text-slate-400">Designs that feel premium and perform beautifully.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-900/75 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/90">Responsive</p>
            <p className="mt-3 text-3xl font-semibold text-white">Mobile-first</p>
            <p className="mt-2 text-sm text-slate-400">Every project is optimized for all screens and devices.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              {...project}
              ctaLabel={t.projects.cardCta}
              recent={project.recent}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {showLoadMoreLink ? (
            <Link
              href={loadMoreUrl!}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(99,102,241,0.22)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_22px_66px_rgba(99,102,241,0.28)]"
            >
              {t.projects.loadMore}
            </Link>
          ) : hasMore ? (
            <p className="text-sm text-slate-400">{t.projects.loadMore}</p>
          ) : (
            <p className="text-sm text-slate-400">{t.projects.noMore}</p>
          )}
        </div>
      </div>
    </section>
  );
}
