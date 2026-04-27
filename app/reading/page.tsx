import type { Metadata } from "next";
import { READING } from "@/lib/reading";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reading",
  description:
    "Books, primary sources, and recurring reads on clinical-trial operations, biotech, Latin America, and company-building.",
  alternates: {
    canonical: absoluteUrl("/reading"),
  },
};

export default function Reading() {
  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      {/* ── Header ────────────────────────────────────── */}
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Reading
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
            Updated April 2026
          </p>
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-[2.05rem] md:text-[3.6rem] leading-[1.08] md:leading-[1.04] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
            What I&rsquo;m reading and returning to.
          </h1>
          <p className="mt-6 font-display italic text-[1.05rem] md:text-[1.15rem] leading-relaxed text-ink-soft max-w-[58ch]">
            A running shelf, not a canon. Clinical trials, biotech, Latin
            America, company-building, and the source material I keep close
            when I need the room to get less abstract.
          </p>
        </div>
      </header>

      {/* ── Sections ──────────────────────────────────── */}
      <div className="space-y-20 md:space-y-28">
        {READING.map((section, sIdx) => (
          <section key={section.heading}>
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10">
              <div className="md:col-span-3">
                <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
                  §&nbsp;{String(sIdx + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display italic text-[1.3rem] md:text-[1.7rem] leading-tight text-ink">
                  {section.heading}
                </h2>
              </div>
              {section.description ? (
                <p className="md:col-span-9 font-display italic text-[1rem] md:text-[1.1rem] leading-relaxed text-ink-soft max-w-[60ch]">
                  {section.description}
                </p>
              ) : null}
            </div>
            <ol className="list-none border-t border-rule-soft md:border-l-0 md:pl-0">
              {section.entries.map((entry, eIdx) => (
                <li
                  key={entry.title}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-10 py-7 md:py-8 border-b border-rule-soft"
                >
                  <div className="md:col-span-3 flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle pt-1 select-none"
                    >
                      {String(eIdx + 1).padStart(2, "0")}
                    </span>
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute normal-case">
                      {entry.year ?? entry.venue ?? ""}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-[1.25rem] md:text-[1.4rem] leading-[1.18] tracking-[-0.012em] text-ink">
                      {entry.url ? (
                        <a
                          href={entry.url}
                          className="hover:text-terracotta transition-colors underline-offset-[5px] hover:underline decoration-1 decoration-terracotta/50"
                        >
                          {entry.title}
                        </a>
                      ) : (
                        entry.title
                      )}
                    </h3>
                    {(entry.author || entry.venue) && entry.year ? (
                      <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                        {entry.author ?? entry.venue}
                        {entry.author && entry.venue ? ` · ${entry.venue}` : ""}
                      </p>
                    ) : entry.author ? (
                      <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                        {entry.author}
                      </p>
                    ) : null}
                    <p className="mt-3 font-display italic text-[1.05rem] leading-relaxed text-ink-soft max-w-[62ch]">
                      {entry.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
