import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function Inclusion() {
  const { inclusion, images } = site;

  return (
    <section className="border-t border-line bg-surface py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {inclusion.title}
            </h2>
            <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted md:text-lg">
              {inclusion.body}
            </p>
            <div className="relative mt-8 aspect-[5/4] overflow-hidden rounded-[var(--radius)] md:mt-10">
              <Image
                src={images.inclusion.src}
                alt={images.inclusion.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center gap-0 md:col-span-7 md:pl-6">
            {inclusion.points.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.05}>
                <div className="border-t border-line py-7 last:border-b">
                  <h3 className="text-xl font-semibold text-ink">{point.title}</h3>
                  <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-muted">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
