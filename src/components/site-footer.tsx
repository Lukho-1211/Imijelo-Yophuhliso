import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, FacebookLogo, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/content/site";

export function SiteFooter() {
  const { contact, pillars, nav } = site;

  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/brand/logo-mark.png"
              alt={site.name}
              width={220}
              height={76}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-white/75">
              {site.description}
            </p>
            <p className="mt-6 text-sm font-semibold text-gold">
              Identity → Behaviour → Agency → Opportunity
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white">Explore</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-[15px] text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-4 text-[15px] text-white/80">
              <li className="flex gap-3">
                <MapPin size={20} weight="bold" className="mt-0.5 shrink-0 text-gold" />
                <span>{contact.address}</span>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="focus-ring inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone size={20} weight="bold" className="shrink-0 text-gold" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="focus-ring inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <EnvelopeSimple size={20} weight="bold" className="shrink-0 text-gold" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <FacebookLogo size={20} weight="bold" className="shrink-0 text-gold" />
                  {contact.facebook}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-sm text-white/55">
            {contact.org}. Community development organisation, South Africa.
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65">
            {pillars.items.map((pillar) => (
              <li key={pillar.id}>{pillar.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
