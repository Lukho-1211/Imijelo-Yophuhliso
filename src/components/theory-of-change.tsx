import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function TheoryOfChange() {
  const { theoryOfChange } = site;

  return (
    <section id="approach" className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {theoryOfChange.title}
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
            {theoryOfChange.body}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 md:mt-16">
          <ol className="grid gap-0 border-t border-line md:grid-cols-3">
            {theoryOfChange.steps.map((step, index) => (
              <li
                key={step.key}
                className="relative border-b border-line py-6 md:border-b-0 md:border-r md:px-5 md:py-8 md:last:border-r-0"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="inline-flex h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        index === 0
                          ? "var(--soil)"
                          : index === 1
                            ? "var(--terracotta)"
                            : "var(--sage)",
                    }}
                    aria-hidden
                  />
                  {index < theoryOfChange.steps.length - 1 && (
                    <span
                      className="hidden h-px flex-1 bg-line md:block"
                      aria-hidden
                    />
                  )}
                </div>
                <p className="font-heading text-xl font-semibold text-ink">
                  {step.key}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm font-semibold tracking-wide text-soil">
            {theoryOfChange.steps.map((step) => step.key).join(" → ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
