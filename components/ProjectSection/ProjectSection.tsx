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
    <section id="projects" className="relative overflow-hidden scroll-mt-28 bg-slate-100 py-16 text-slate-950 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.24),_transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="mx-auto relative max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-sky-700 shadow-sm backdrop-blur">
            {t.projects.badge}
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {t.projects.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-7 text-slate-700">
            {t.projects.descriptionBeforePortfolio}{" "}
            <Link href="https://ese-faps-xbvb.vercel.app/" className="font-bold text-sky-700 hover:text-slate-950">
              {t.projects.portfolioLink}
            </Link>
            {t.projects.descriptionAfterPortfolio}{" "}
            <Link href="/contact/" className="font-bold text-violet-700 hover:text-slate-950">
              {t.projects.contactLink}
            </Link>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          <div className="rounded-[28px] border border-white bg-white/85 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-700">Launches</p>
            <p className="mt-3 text-3xl font-black text-slate-950">120+</p>
            <p className="mt-2 text-sm text-slate-600">Live digital experiences built for growth.</p>
          </div>
          <div className="rounded-[28px] border border-white bg-white/85 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-700">Client rating</p>
            <p className="mt-3 text-3xl font-black text-slate-950">4.9/5</p>
            <p className="mt-2 text-sm text-slate-600">Designs that feel premium and perform beautifully.</p>
          </div>
          <div className="rounded-[28px] border border-white bg-white/85 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Responsive</p>
            <p className="mt-3 text-3xl font-black text-slate-950">Mobile-first</p>
            <p className="mt-2 text-sm text-slate-600">Every project is optimized for all screens and devices.</p>
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] transition duration-300 hover:scale-[1.01] hover:bg-sky-700 hover:shadow-[0_22px_66px_rgba(14,165,233,0.24)]"
            >
              {t.projects.loadMore}
            </Link>
          ) : hasMore ? (
            <p className="text-sm text-slate-600">{t.projects.loadMore}</p>
          ) : (
            <p className="text-sm text-slate-600">{t.projects.noMore}</p>
          )}
        </div>
      </div>
    </section>
  );
}
