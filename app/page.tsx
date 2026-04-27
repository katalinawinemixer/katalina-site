import Link from "next/link";
import type { Metadata } from "next";
import Wordmark from "./components/Wordmark";
import EssayListItem from "./components/EssayListItem";
import { essays, getTagEntries } from "@/lib/essays";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
  },
};

export default function Home() {
  const featured = essays.filter((essay) =>
    [
      "fda-shows-up",
      "latin-america-trial-frontier",
      "phase-one-failure-modes",
    ].includes(essay.slug),
  );

  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10">
      {/* ── Wordmark + thesis ─────────────────────────── */}
      <section className="pt-14 md:pt-24 pb-14 md:pb-20">
        <Wordmark variant="hero" />
        <div className="mt-10 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-10">
          <p className="md:col-span-8 md:col-start-2 text-[1.18rem] md:text-[1.36rem] leading-[1.5] text-ink">
            <span className="font-display italic text-terracotta">Notas</span>{" "}
            on clinical-trial operations, the regulatory edges where early-phase
            therapies actually fail, and why Latin America is becoming the most
            interesting place in the world to run a Phase&nbsp;I trial. Writing
            from San&nbsp;Francisco; remote with a heme-onc program at
            UW&nbsp;Seattle.
          </p>
          <div className="md:col-span-3 md:col-start-10 flex md:justify-end">
            <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-mute leading-relaxed">
              <span className="block text-ink-soft">Currently</span>
              <span className="block mt-1 normal-case tracking-[0.04em]">
                Reading:{" "}
                <em className="font-display not-italic text-ink">
                  Venture Deals
                </em>
              </span>
              <span className="block mt-1 normal-case tracking-[0.04em]">
                Watching: ASCO 2026 abstracts
              </span>
            </p>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Start here ───────────────────────────────── */}
      <section className="py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3">
            <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
              Start here
            </h2>
          </div>
          <div className="md:col-span-9 md:border-l md:border-rule-soft md:pl-10">
            <p className="font-display text-[1.45rem] md:text-[2rem] leading-[1.16] tracking-[-0.018em] text-ink max-w-[28ch]">
              New here? Read the map before you walk into the trial.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed max-w-[58ch]">
              A short guide to the site, the recurring arguments, and the
              essays that best explain why clinical-trial operations are where
              so many biotech promises become real or fall apart.
            </p>
            <Link
              href="/start-here"
              className="mt-7 inline-flex font-mono text-[0.74rem] uppercase tracking-[0.12em] text-terracotta hover:text-ink transition-colors"
            >
              Begin there →
            </Link>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Featured writing ─────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3">
            <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
              Featured essays
            </h2>
            <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
              Chosen entry points
            </p>
            <p className="mt-6 font-display italic text-[1rem] text-ink-soft leading-snug max-w-[18ch]">
              The pieces I would hand someone first.
            </p>
          </div>
          <ol className="md:col-span-9 list-none border-t border-rule-soft md:border-l md:border-t-0 md:pl-10">
            {featured.map((essay, idx) => (
              <EssayListItem key={essay.slug} essay={essay} index={idx} />
            ))}
          </ol>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Browse by topic ──────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3">
            <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
              Browse by topic
            </h2>
            <p className="mt-6 font-display italic text-[1rem] text-ink-soft leading-snug max-w-[18ch]">
              A few shelves, not a maze.
            </p>
          </div>
          <div className="md:col-span-9 grid sm:grid-cols-2 gap-x-10 gap-y-8 md:border-l md:border-rule-soft md:pl-10">
            {getTagEntries().map(([tag, meta]) => (
              <Link
                key={tag}
                href={`/topics/${tag}`}
                className="group border-t border-rule-soft pt-5"
              >
                <h3 className="font-display text-[1.35rem] leading-tight text-ink group-hover:text-terracotta transition-colors">
                  {meta.label}
                </h3>
                <p className="mt-3 text-ink-soft leading-snug">{meta.dek}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Archive doorway ──────────────────────────── */}
      <section className="py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3">
            <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
              Archive
            </h2>
          </div>
          <div className="md:col-span-9 md:border-l md:border-rule-soft md:pl-10">
            <p className="text-ink-soft leading-relaxed max-w-[56ch]">
              Prefer the whole shelf at once? The archive keeps every essay in
              a quiet chronological list, grouped by year and easy to scan.
            </p>
            <Link
              href="/archive"
              className="mt-6 inline-flex font-mono text-[0.74rem] uppercase tracking-[0.12em] text-terracotta hover:text-ink transition-colors"
            >
              Open the archive →
            </Link>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Elsewhere ─────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3">
            <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
              Elsewhere
            </h2>
          </div>
          <ul className="md:col-span-9 space-y-4">
            <li>
              <a
                href="mailto:Katalina@katalinalondono.com"
                className="group inline-flex items-baseline gap-4 font-display text-[1.4rem] md:text-[1.6rem] text-ink hover:text-terracotta transition-colors"
              >
                <span className="underline-offset-[6px] group-hover:underline decoration-1 decoration-terracotta/60">
                  Email
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-mute normal-case">
                  → Katalina@katalinalondono.com
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/kat_winemixer"
                className="group inline-flex items-baseline gap-4 font-display text-[1.4rem] md:text-[1.6rem] text-ink hover:text-terracotta transition-colors"
              >
                <span className="underline-offset-[6px] group-hover:underline decoration-1 decoration-terracotta/60">
                  Twitter
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-mute normal-case">
                  → @kat_winemixer
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/katalinalondono"
                className="group inline-flex items-baseline gap-4 font-display text-[1.4rem] md:text-[1.6rem] text-ink hover:text-terracotta transition-colors"
              >
                <span className="underline-offset-[6px] group-hover:underline decoration-1 decoration-terracotta/60">
                  LinkedIn
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-mute normal-case">
                  → /in/katalinalondono
                </span>
              </a>
            </li>
            <li>
              <Link
                href="/reading"
                className="group inline-flex items-baseline gap-4 font-display text-[1.4rem] md:text-[1.6rem] text-ink hover:text-terracotta transition-colors"
              >
                <span className="underline-offset-[6px] group-hover:underline decoration-1 decoration-terracotta/60">
                  Reading list
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-mute normal-case">
                  → /reading
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
