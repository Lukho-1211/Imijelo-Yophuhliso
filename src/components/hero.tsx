"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";

const SLIDE_INTERVAL_MS = 6000;
const CROSSFADE_S = 0.7;

export function Hero() {
  const reduce = useReducedMotion();
  const slides = site.heroSlides;
  const [active, setActive] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (reduce || slides.length < 2) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [reduce, slides.length]);

  const current = slides[active] ?? slides[0];

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-end overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Community photo slideshow"
    >
      <div id="nav-sentinel" className="pointer-events-none absolute inset-x-0 top-0 h-1" />

      <div className="absolute inset-0" aria-hidden>
        {slides.map((slide, index) => {
          const isActive = reduce ? index === 0 : index === active;
          return (
            <motion.div
              key={slide.src}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: CROSSFADE_S, ease: [0.16, 1, 0.3, 1] }
              }
              style={{ zIndex: isActive ? 1 : 0 }}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      <div
        className="absolute inset-0 z-[2] bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25"
        aria-hidden
      />

      <p className="sr-only" aria-live="polite">
        Slide {active + 1} of {slides.length}: {current.alt}
      </p>

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

      {!reduce && slides.length > 1 ? (
        <div
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-8"
          role="tablist"
          aria-label="Slideshow controls"
        >
          {slides.map((slide, index) => {
            const selected = index === active;
            return (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`Show slide ${index + 1}: ${slide.alt}`}
                onClick={() => goTo(index)}
                className={`focus-ring h-2.5 rounded-full transition-all duration-300 ${
                  selected
                    ? "w-7 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/75"
                }`}
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
