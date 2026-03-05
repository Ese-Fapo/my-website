import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  const isExternal = link.startsWith("http")
  return (
    <div className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-52 sm:h-56 w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-200/80">{description}</p>

      <Link
        href={link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="inline-flex items-center gap-2 w-fit rounded-full bg-white text-[#0b1020] px-5 py-2 text-sm font-semibold transition hover:opacity-90"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
