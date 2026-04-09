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
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
  ctaLabel,
}: ProjectProps) {
  const isExternal = link.startsWith("http");

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-linear-to-b from-slate-900/95 via-slate-950/95 to-black p-4 sm:p-5 shadow-[0_30px_90px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_36px_100px_rgba(34,211,238,0.16)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl transition duration-500 group-hover:bg-cyan-400/25" />
        <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="relative h-52 w-full overflow-hidden rounded-[22px] border border-white/10 sm:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-cyan-200 backdrop-blur-sm">
          <SparklesIcon className="h-4 w-4" />
        </div>
      </div>

      <div className="relative mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-white sm:text-[1.35rem]">{title}</h3>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
            <ArrowUpRightIcon className="h-5 w-5" />
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-200/80">{description}</p>

        <Link
          href={link}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(34,211,238,0.25)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_18px_36px_rgba(34,211,238,0.32)]"
        >
          <span>{ctaLabel}</span>
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
