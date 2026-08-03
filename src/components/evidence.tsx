import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function Evidence() {
  const { evidence } = site;

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {evidence.title}
          </h2>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-muted md:text-lg">
            {evidence.body}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {evidence.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="h-full border-t-2 border-sage pt-5">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
