import Link from "next/link"
import React from "react"

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(1px_1px_at_20px_30px,#94a3b8_60%,transparent_70%),radial-gradient(1px_1px_at_90px_60px,#94a3b8_60%,transparent_70%),radial-gradient(1px_1px_at_40px_100px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_120px_30px,#94a3b8_50%,transparent_70%),radial-gradient(1px_1px_at_60px_140px,#94a3b8_55%,transparent_70%)] dark:opacity-80 dark:bg-[radial-gradient(1px_1px_at_20px_30px,#ffffff_80%,transparent_70%),radial-gradient(1px_1px_at_90px_60px,#ffffff_80%,transparent_70%),radial-gradient(1px_1px_at_40px_100px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_120px_30px,#ffffff_60%,transparent_70%),radial-gradient(1px_1px_at_60px_140px,#ffffff_70%,transparent_70%)] bg-size-[160px_160px] animate-star-drift-slow motion-reduce:animate-none" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1.5px_1.5px_at_18px_26px,#38bdf8_70%,transparent_70%),radial-gradient(1.5px_1.5px_at_84px_58px,#f472b6_70%,transparent_70%),radial-gradient(1.5px_1.5px_at_44px_110px,#a78bfa_70%,transparent_70%),radial-gradient(1.5px_1.5px_at_124px_34px,#facc15_80%,transparent_70%),radial-gradient(1.5px_1.5px_at_64px_150px,#34d399_70%,transparent_70%)] dark:opacity-90 dark:bg-[radial-gradient(1.5px_1.5px_at_18px_26px,#22d3ee_90%,transparent_70%),radial-gradient(1.5px_1.5px_at_84px_58px,#f472b6_90%,transparent_70%),radial-gradient(1.5px_1.5px_at_44px_110px,#a78bfa_90%,transparent_70%),radial-gradient(1.5px_1.5px_at_124px_34px,#fde047_95%,transparent_70%),radial-gradient(1.5px_1.5px_at_64px_150px,#4ade80_90%,transparent_70%)] bg-size-[180px_180px] animate-star-drift motion-reduce:animate-none" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(2px_2px_at_12px_18px,#94a3b8_70%,transparent_65%),radial-gradient(2px_2px_at_72px_86px,#7dd3fc_70%,transparent_70%),radial-gradient(2px_2px_at_116px_46px,#f9a8d4_70%,transparent_70%),radial-gradient(2px_2px_at_46px_128px,#c4b5fd_70%,transparent_70%)] dark:opacity-85 dark:bg-[radial-gradient(2px_2px_at_12px_18px,#ffffff_95%,transparent_65%),radial-gradient(2px_2px_at_72px_86px,#67e8f9_95%,transparent_70%),radial-gradient(2px_2px_at_116px_46px,#f9a8d4_95%,transparent_70%),radial-gradient(2px_2px_at_46px_128px,#c4b5fd_95%,transparent_70%)] bg-size-[140px_140px] animate-star-drift-fast-twinkle motion-reduce:animate-none" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1px_1px_at_14px_22px,#94a3b8_60%,transparent_70%),radial-gradient(1px_1px_at_62px_88px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_104px_40px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_36px_126px,#94a3b8_55%,transparent_70%)] dark:opacity-60 dark:bg-[radial-gradient(1px_1px_at_14px_22px,#ffffff_80%,transparent_70%),radial-gradient(1px_1px_at_62px_88px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_104px_40px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_36px_126px,#ffffff_70%,transparent_70%)] bg-size-[150px_150px] animate-star-drift-alt motion-reduce:animate-none" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1px_1px_at_28px_18px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_78px_98px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_120px_52px,#94a3b8_55%,transparent_70%),radial-gradient(1px_1px_at_48px_140px,#94a3b8_55%,transparent_70%)] dark:opacity-55 dark:bg-[radial-gradient(1px_1px_at_28px_18px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_78px_98px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_120px_52px,#ffffff_70%,transparent_70%),radial-gradient(1px_1px_at_48px_140px,#ffffff_70%,transparent_70%)] bg-size-[170px_170px] animate-star-drift-vert motion-reduce:animate-none" />
        <div className="absolute left-[10%] top-[15%] h-0.5 w-35 rotate-45 bg-linear-to-r from-white/90 via-cyan-300/80 to-transparent blur-[0.6px] animate-shooting-1 motion-reduce:animate-none" />
        <div className="absolute left-[55%] top-[8%] h-0.5 w-45 rotate-45 bg-linear-to-r from-white/90 via-fuchsia-300/80 to-transparent blur-[0.8px] animate-shooting-2 motion-reduce:animate-none [animation-delay:1.5s]" />
        <div className="absolute left-[70%] top-[25%] h-0.5 w-40 rotate-45 bg-linear-to-r from-white/90 via-indigo-300/80 to-transparent blur-[0.8px] animate-shooting-3 motion-reduce:animate-none [animation-delay:3.2s]" />
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-transparent blur-3xl animate-nebula-shift motion-reduce:animate-none" />
        <div className="absolute left-8 bottom-10 h-56 w-56 rounded-full bg-transparent blur-2xl animate-nebula-shift motion-reduce:animate-none" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center gap-6 px-6 py-24 sm:py-28 lg:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-sky-200">
          <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_2px_rgba(56,189,248,0.8)]" />
            agência de sites premium
        </p>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Construímos sites de alta conversão que
          <span className="block bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            fazem seu negócio crescer.
          </span>
        </h1>
        <p className="max-w-2xl text-base text-slate-700/90 dark:text-slate-200/90 sm:text-lg">
            Nosso time de especialistas cria sites incríveis, rápidos e fáceis de usar, que atraem tráfego e aumentam conversões. Vamos levar sua presença online para o próximo nível.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.25)] transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:shadow-[0_0_25px_rgba(56,189,248,0.35)] dark:hover:bg-slate-100">
            Começar agora
          </button>
         <Link href="https://tech-blog-i77h.vercel.app/"><button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition hover:border-slate-400 hover:text-slate-900 dark:border-white/30 dark:text-white/90 dark:hover:border-white/70 dark:hover:text-white">
            Escolha o site ideal para sua empresa
          </button></Link>
        </div>
        <div className="mt-6 grid w-full max-w-3xl grid-cols-1 gap-4 text-sm text-slate-700/80 dark:text-slate-200/80 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">criado para converter</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Seu site vende enquanto você dorme</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">mobile first</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Otimizado para todos os dispositivos</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">design envolvente</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Visuais cativantes que prendem a atenção</p>
          </div>
        </div>
        {/**animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="h-10 w-6 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
            <div className="h-3 w-3 rounded-full bg-slate-300 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero