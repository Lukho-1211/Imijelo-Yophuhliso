import { Evidence } from "@/components/evidence";
import { FlagshipSgm } from "@/components/flagship-sgm";
import { GetInvolved } from "@/components/get-involved";
import { Hero } from "@/components/hero";
import { Inclusion } from "@/components/inclusion";
import { Intergenerational } from "@/components/intergenerational";
import { Pillars } from "@/components/pillars";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TheoryOfChange } from "@/components/theory-of-change";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TheoryOfChange />
        <Pillars />
        <FlagshipSgm />
        <Inclusion />
        <Intergenerational />
        <Evidence />
        <GetInvolved />
      </main>
      <SiteFooter />
    </>
  );
}
