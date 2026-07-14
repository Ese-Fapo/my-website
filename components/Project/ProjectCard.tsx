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
  featured?: boolean;
  className?: string;
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
  featured = false,
  className = "",
}: ProjectProps) {
  const isExternal = link.startsWith("http");

  return (
    <div
      className={`group relative isolate flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-slate-950 p-3 shadow-[0_28px_80px_rgba(2,6,23,0.38)] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/45 hover:shadow-[0_34px_95px_rgba(6,182,212,0.22)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cyan-300 via-amber-300 to-fuchsia-400 opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,rgba(34,211,238,0.08))]" />

      <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-slate-900">
        <div className={`relative w-full ${featured ? "h-72 sm:h-80" : "h-52 sm:h-56"}`}>
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
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
          {recent ? (
            <span className="inline-flex items-center rounded-full bg-amber-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-950 shadow-sm">
              Recent
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur transition group-hover:bg-cyan-300 group-hover:text-slate-950">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-3 pt-5">
        <div className="flex flex-wrap items-center gap-3">
          {category ? (
            <span className="inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
              {category}
            </span>
          ) : null}
        </div>

        <h3 className={`text-white ${category ? "mt-4" : ""} ${featured ? "text-3xl font-black sm:text-4xl" : "text-2xl font-bold sm:text-[1.45rem]"}`}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>

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
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_14px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_18px_44px_rgba(34,211,238,0.24)]"
        >
          <span>{ctaLabel}</span>
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
