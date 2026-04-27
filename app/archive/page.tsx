import Link from "next/link";
import type { Metadata } from "next";
import { essays, formatDateShort, getTagLabel } from "@/lib/essays";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Archive",
  description: "A chronological archive of essays by Katalina Londoño.",
  alternates: {
    canonical: absoluteUrl("/archive"),
  },
  openGraph: {
    title: "Archive",
    description: "A chronological archive of essays by Katalina Londoño.",
    url: absoluteUrl("/archive"),
  },
};

const grouped = essays.reduce<Record<string, typeof essays>>((acc, essay) => {
  const year = essay.date.slice(0, 4);
  acc[year] = [...(acc[year] ?? []), essay];
  return acc;
}, {});

export default function Archive() {
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Archive
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
            {String(essays.length).padStart(2, "0")} pieces
          </p>
        </div>
        <h1 className="md:col-span-9 font-display text-[2.05rem] md:text-[3.2rem] leading-[1.08] md:leading-[1.04] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
          The whole shelf, arranged by date.
        </h1>
      </header>

      <div className="space-y-16 md:space-y-20">
        {years.map((year) => (
          <section key={year} className="grid md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-3">
              <h2 className="font-display text-[2.2rem] leading-none text-terracotta oldstyle">
                {year}
              </h2>
            </div>
            <ol className="md:col-span-9 list-none border-t border-rule">
              {grouped[year].map((essay) => (
                <li key={essay.slug} className="border-b border-rule-soft">
                  <Link
                    href={`/writing/${essay.slug}`}
                    className="group grid sm:grid-cols-[7.5rem_1fr] gap-3 sm:gap-8 py-6 -mx-2 px-2 hover:bg-paper-soft/40 transition-colors"
                  >
                    <time className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute oldstyle pt-1">
                      {formatDateShort(essay.date)}
                    </time>
                    <div>
                      <h3 className="font-display text-[1.35rem] md:text-[1.65rem] leading-tight tracking-[-0.015em] text-ink group-hover:text-terracotta transition-colors">
                        {essay.title}
                      </h3>
                      <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-mute">
                        <span>{essay.readingTime}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-terracotta/80">
                          {essay.tags.map(getTagLabel).join(" / ")}
                        </span>
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
