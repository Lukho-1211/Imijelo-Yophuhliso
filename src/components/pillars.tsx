import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

const accentMap = {
  terracotta: "bg-terracotta/15 text-soil border-terracotta/25",
  sage: "bg-sage/15 text-ink border-sage/30",
  river: "bg-river/15 text-ink border-river/25",
} as const;

const barMap = {
  terracotta: "bg-terracotta",
  sage: "bg-sage",
  river: "bg-river",
} as const;

export function Pillars() {
  const { pillars, images } = site;
  const [first, second, third] = pillars.items;

  return (
    <section id="work" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {pillars.title}
          </h2>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-muted md:text-lg">
            {pillars.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-5">
          <Reveal className="md:col-span-7">
            <article className="flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius)] bg-paper p-6 md:min-h-[360px] md:p-8">
              <div>
                <span
                  className={`mb-5 inline-block h-1.5 w-12 rounded-full ${barMap[first.accent]}`}
                />
                <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {first.name}
                </h3>
                {first.motto ? (
                  <p className="mt-2 text-sm font-semibold text-soil">
                    {first.motto}
                  </p>
                ) : null}
                <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-muted">
                  {first.summary}
                </p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {first.focus.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${accentMap[first.accent]}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.06} className="md:col-span-5">
            <div className="relative h-56 overflow-hidden rounded-[var(--radius)] md:h-full md:min-h-[360px]">
              <Image
                src={images.work.src}
                alt={images.work.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.04} className="md:col-span-5">
            <article className="h-full rounded-[var(--radius)] border border-line bg-paper p-6 md:p-7">
              <span
                className={`mb-4 inline-block h-1.5 w-12 rounded-full ${barMap[second.accent]}`}
              />
              <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                {second.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-sage">{second.motto}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {second.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {second.focus.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${accentMap[second.accent]}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-7">
            <article className="h-full rounded-[var(--radius)] bg-ink p-6 text-white md:p-8">
              <span
                className={`mb-4 inline-block h-1.5 w-12 rounded-full ${barMap[third.accent]}`}
              />
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                {third.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-gold">{third.motto}</p>
              <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-white/80">
                {third.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {third.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
