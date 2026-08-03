import Link from "next/link";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function GetInvolved() {
  const { getInvolved, cta, contact } = site;

  return (
    <section id="get-involved" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {getInvolved.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {getInvolved.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {getInvolved.pathways.map((pathway, index) => (
            <Reveal key={pathway.title} delay={index * 0.05}>
              <div className="h-full border-t-2 border-terracotta pt-5">
                <h3 className="text-xl font-semibold text-ink">
                  {pathway.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {pathway.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-3">
          <Link
            href={contact.emailHref}
            className="focus-ring inline-flex h-12 items-center justify-center rounded-[var(--radius)] bg-accent px-6 text-[15px] font-semibold text-white transition-transform duration-150 hover:brightness-105 active:scale-[0.98]"
          >
            {cta.primary}
          </Link>
          <Link
            href={contact.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-[var(--radius)] border border-line bg-paper px-6 text-[15px] font-semibold text-ink transition-colors hover:border-soil/40"
          >
            Follow on Facebook
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
