import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function Intergenerational() {
  const { intergenerational, images } = site;

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-page flex flex-col gap-10 md:gap-14">
        <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {intergenerational.title}
            </h2>
            <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted md:text-lg">
              {intergenerational.body}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
              <Image
                src={images.intergenerational.src}
                alt={images.intergenerational.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
              <Image
                src={images.intergenerationalMadwaleni.src}
                alt={images.intergenerationalMadwaleni.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {intergenerational.communityWellbeing.title}
            </h2>
            <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted md:text-lg">
              {intergenerational.communityWellbeing.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <ul className="flex flex-wrap gap-3">
            {intergenerational.activities.map((activity) => (
              <li
                key={activity}
                className="rounded-full border border-river/25 bg-river/10 px-4 py-2 text-sm font-semibold text-ink"
              >
                {activity}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
