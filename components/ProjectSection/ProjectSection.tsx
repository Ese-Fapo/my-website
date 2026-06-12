"use client";

import React, { useMemo, useState } from "react";
import ProjectCard from "@/components/Project/ProjectCard";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

type ProjectsSectionProps = {
  initialVisibleCount?: number;
  loadMoreUrl?: string | null;
};

export default function ProjectsSection({
  initialVisibleCount = 3,
  loadMoreUrl = "/projects/",
}: ProjectsSectionProps) {
  const { t } = useLanguage();
  type ProjectItem = {
    title: string;
    description: string;
    image: string;
    link: string;
    recent?: boolean;
  };

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
    <section
      id="projects"
      className="scroll-mt-28 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
            {t.projects.badge}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-200/80">
            {t.projects.descriptionBeforePortfolio}{" "}
            <Link href="https://ese-faps-xbvb.vercel.app/" className="font-semibold text-indigo-200 hover:text-indigo-100">
              {t.projects.portfolioLink}
            </Link>
            {t.projects.descriptionAfterPortfolio}{" "}
            <Link href="/contact/" className="font-semibold text-violet-200 hover:text-violet-100">
              {t.projects.contactLink}
            </Link>
          </p>
        </div>

        {/* Grid */}
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

        <div className="mt-10 flex items-center justify-center">
          {showLoadMoreLink ? (
            <Link
              href={loadMoreUrl!}
              className="inline-flex items-center gap-3 rounded-full border border-indigo-300/20 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-indigo-100 transition hover:border-indigo-200/30 hover:bg-indigo-500/15"
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
