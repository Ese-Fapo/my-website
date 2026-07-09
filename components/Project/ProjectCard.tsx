import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  ctaLabel: string;
  recent?: boolean;
  category?: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
  ctaLabel,
  recent = false,
  category,
  tags = [],
}: ProjectProps) {
  const isExternal = link.startsWith("http");

  return (
    <div className="group relative isolate flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/95 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-3 hover:border-indigo-300/30 hover:shadow-[0_36px_110px_rgba(99,102,241,0.24)]">
      <div className="pointer-events-none absolute -left-6 top-8 h-24 w-24 rounded-full bg-fuchsia-500/15 blur-3xl transition duration-500 group-hover:bg-fuchsia-500/25" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_20%)]" />

      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-slate-900/70 shadow-inner shadow-slate-950/40">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18),transparent_45%)]" />
        <div className="relative h-52 w-full sm:h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-sm">
          <SparklesIcon className="h-4 w-4" />
          Showcase
        </div>
      </div>

      <div className="relative mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-3">
          {recent ? (
            <span className="inline-flex items-center rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-violet-200 shadow-sm shadow-violet-500/20">
              Recent
            </span>
          ) : null}
          {category ? (
            <span className="inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200/80 ring-1 ring-white/10">
              {category}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-white sm:text-[1.45rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300/85">{description}</p>

        {tags.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <Link
          href={link}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-400 via-fuchsia-400 to-violet-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(99,102,241,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(99,102,241,0.30)]"
        >
          <span>{ctaLabel}</span>
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
