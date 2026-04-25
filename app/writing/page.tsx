import Link from "next/link";
import type { Metadata } from "next";
import { essays, formatDateShort } from "@/lib/essays";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays on clinical-trial operations and Latin American biotech.",
};

export default function WritingIndex() {
  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Writing
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
            {String(essays.length).padStart(2, "0")} pieces
          </p>
        </div>
        <h1 className="md:col-span-9 font-display text-[2.4rem] md:text-[3.4rem] leading-[1.04] tracking-[-0.025em] text-ink">
          Field notes from the operational floor of the trial — and the
          regulatory edges where most early-phase therapies actually fail.
        </h1>
      </header>

      <ol className="list-none border-t border-rule">
        {essays.map((essay, idx) => (
          <li key={essay.slug} className="border-b border-rule">
            <Link
              href={`/writing/${essay.slug}`}
              className="group block py-9 md:py-12 -mx-2 px-2 transition-colors hover:bg-paper-soft/40"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                <div className="md:col-span-3 flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="font-mono text-[0.74rem] tracking-[0.06em] text-ink-mute oldstyle select-none"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute oldstyle normal-case">
                    {formatDateShort(essay.date)}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-display text-[1.7rem] md:text-[2.2rem] leading-[1.06] tracking-[-0.022em] text-ink group-hover:text-terracotta transition-colors">
                    {essay.title}
                  </h2>
                  <p className="mt-4 text-ink-soft leading-relaxed max-w-[58ch]">
                    {essay.dek}
                  </p>
                  <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-mute">
                    {essay.readingTime} ·{" "}
                    <span className="text-terracotta/80">
                      {essay.tags.join(" / ")}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
