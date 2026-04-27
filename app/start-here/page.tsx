import Link from "next/link";
import type { Metadata } from "next";
import EssayListItem from "../components/EssayListItem";
import { essays } from "@/lib/essays";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "A guide to Katalina Londoño's writing on clinical-trial operations, regulatory work, and Latin American biotech.",
  alternates: {
    canonical: absoluteUrl("/start-here"),
  },
  openGraph: {
    title: "Start Here",
    description:
      "A guide to the essays, themes, and recurring questions on Katalina Londoño's site.",
    url: absoluteUrl("/start-here"),
  },
};

const starterSlugs = [
  "fda-shows-up",
  "latin-america-trial-frontier",
  "phase-one-failure-modes",
];

export default function StartHere() {
  const starterEssays = starterSlugs
    .map((slug) => essays.find((essay) => essay.slug === slug))
    .filter((essay): essay is (typeof essays)[number] => Boolean(essay));

  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Start here
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
            A reader&apos;s map
          </p>
        </div>
        <h1 className="md:col-span-9 font-display text-[2.05rem] md:text-[3.5rem] leading-[1.08] md:leading-[1.04] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
          If you are new here, this is the shortest path into the work.
        </h1>
      </header>

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            § 01 — What this is
          </p>
        </div>
        <div className="md:col-span-9 prose-essay max-w-none">
          <p>
            This site is where I write from inside the clinical trial: the
            regulatory folders, the sponsor audits, the protocol amendments,
            the awkward software, the patient timelines, and the places where
            an elegant biotech story becomes a messy operational system.
          </p>
          <p>
            The bigger argument is that clinical operations are not a back
            office detail. They are part of the product, part of the diligence,
            and often the difference between a therapy that moves and a therapy
            that quietly stalls.
          </p>
        </div>
      </section>

      <hr className="rule" />

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-16 md:py-20">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            § 02 — If you are here from biotech or venture
          </p>
        </div>
        <div className="md:col-span-9 prose-essay max-w-none">
          <p>
            Start with the pieces that make the operating argument clearest:
            what breaks in trial execution, why Latin America matters, and how
            diligence changes when you look at the work from inside the site.
          </p>
        </div>
      </section>

      <hr className="rule" />

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-16 md:py-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            § 03 — Read these first
          </p>
        </div>
        <ol className="md:col-span-9 list-none border-t border-rule-soft">
          {starterEssays.map((essay, idx) => (
            <EssayListItem key={essay.slug} essay={essay} index={idx} />
          ))}
        </ol>
      </section>

      <hr className="rule" />

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-16 md:py-20">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            § 04 — Then browse
          </p>
        </div>
        <div className="md:col-span-9 grid sm:grid-cols-3 gap-8">
          <Link href="/writing" className="group border-t border-rule-soft pt-5">
            <h2 className="font-display text-[1.35rem] text-ink group-hover:text-terracotta transition-colors">
              Writing
            </h2>
            <p className="mt-3 text-ink-soft leading-snug">
              The full essay index, newest first.
            </p>
          </Link>
          <Link href="/archive" className="group border-t border-rule-soft pt-5">
            <h2 className="font-display text-[1.35rem] text-ink group-hover:text-terracotta transition-colors">
              Archive
            </h2>
            <p className="mt-3 text-ink-soft leading-snug">
              Everything by date, quieter and faster to scan.
            </p>
          </Link>
          <Link href="/now" className="group border-t border-rule-soft pt-5">
            <h2 className="font-display text-[1.35rem] text-ink group-hover:text-terracotta transition-colors">
              Now
            </h2>
            <p className="mt-3 text-ink-soft leading-snug">
              What I am working on, reading, and paying attention to.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
