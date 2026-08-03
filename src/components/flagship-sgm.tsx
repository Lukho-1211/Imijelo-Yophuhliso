import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function FlagshipSgm() {
  const { sgm, images } = site;

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
            <Image
              src={images.sgm.src}
              alt={images.sgm.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-sm font-semibold text-terracotta">{sgm.motto}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {sgm.title}
          </h2>
          <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted md:text-lg">
            {sgm.body}
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
            {sgm.focus.map((item) => (
              <li
                key={item}
                className="border-t border-line pt-3 text-sm font-semibold text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[48ch] text-[15px] leading-relaxed text-ink/80">
            {sgm.outcome}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
