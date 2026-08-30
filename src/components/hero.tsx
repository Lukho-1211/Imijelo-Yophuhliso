"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-end overflow-hidden"
    >
      <div id="nav-sentinel" className="pointer-events-none absolute inset-x-0 top-0 h-1" />

      <Image
        src={site.images.hero.src}
        alt={site.images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25"
        aria-hidden
      />

      <div className="container-page relative z-10 w-full pb-20 pt-28 md:pb-28 md:pt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-5 font-heading text-xl font-semibold tracking-tight text-white md:text-2xl">
            {site.name}
          </p>
          <h1 className="max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
            {site.hero.headline.map((line, index) => (
              <span
                key={line}
                className={`block ${index === 1 ? "md:whitespace-nowrap" : ""}`}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-[36rem] text-base leading-relaxed text-white/90 md:text-lg">
            {site.hero.support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={site.cta.primaryHref}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-[var(--radius)] bg-accent px-6 text-[15px] font-semibold text-white transition-transform duration-150 hover:brightness-105 active:scale-[0.98]"
            >
              {site.cta.primary}
            </Link>
            <Link
              href={site.cta.secondaryHref}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-[var(--radius)] border border-white/40 bg-white/10 px-6 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {site.cta.secondary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
