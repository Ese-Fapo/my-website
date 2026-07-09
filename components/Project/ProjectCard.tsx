import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

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
    <div className="group relative isolate flex h-full flex-col overflow-hidden rounded-[32px] border border-white bg-white/90 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.14)] transition duration-300 hover:-translate-y-3 hover:border-sky-200 hover:shadow-[0_34px_90px_rgba(14,165,233,0.18)]">
      <div className="pointer-events-none absolute -left-6 top-8 h-24 w-24 rounded-full bg-fuchsia-300/20 blur-3xl transition duration-500 group-hover:bg-fuchsia-300/30" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.10),_transparent_24%)]" />

      <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-slate-100 shadow-inner shadow-white/70">
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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent" />
      </div>

      <div className="relative mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-3">
          {recent ? (
            <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-violet-700 shadow-sm shadow-violet-200/70">
              Recent
            </span>
          ) : null}
          {category ? (
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 ring-1 ring-slate-200">
              {category}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-2xl font-bold text-slate-950 sm:text-[1.45rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

        {tags.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
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
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-[0_18px_40px_rgba(14,165,233,0.26)]"
        >
          <span>{ctaLabel}</span>
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
