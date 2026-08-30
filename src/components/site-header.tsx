"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 1 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Link
          href="#home"
          className="focus-ring relative z-50 flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/spiral.png"
            alt={site.name}
            width={72}
            height={72}
            className="h-9 w-9 md:h-11 md:w-11"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring text-[15px] font-semibold transition-colors ${
                scrolled
                  ? "text-ink/80 hover:text-ink"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href={site.cta.primaryHref}
            className="focus-ring inline-flex h-11 items-center justify-center rounded-[var(--radius)] bg-accent px-5 text-[15px] font-semibold text-white transition-transform duration-150 hover:brightness-105 active:scale-[0.98]"
          >
            {site.cta.primary}
          </Link>
        </div>

        <button
          type="button"
          className={`focus-ring relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius)] lg:hidden ${
            scrolled || open ? "text-ink" : "text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-paper transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="container-page flex h-full flex-col justify-center gap-6 pt-16"
          aria-label="Mobile"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring text-3xl font-semibold tracking-tight text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={site.cta.primaryHref}
            className="focus-ring mt-4 inline-flex h-12 w-fit items-center rounded-[var(--radius)] bg-accent px-6 text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            {site.cta.primary}
          </Link>
        </nav>
      </div>
    </header>
  );
}
