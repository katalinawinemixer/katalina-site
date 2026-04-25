import Link from "next/link";
import Wordmark from "./components/Wordmark";
import { essays, formatDateShort } from "@/lib/essays";

export default function Home() {
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
                  The Emperor of All Maladies
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

      {/* ── Selected writing ──────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3">
            <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
              Selected writing
            </h2>
            <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
              {String(essays.length).padStart(2, "0")} pieces · 2026 →
            </p>
            <p className="mt-6 font-display italic text-[1rem] text-ink-soft leading-snug max-w-[18ch]">
              Field notes from the operational floor of the trial.
            </p>
          </div>
          <ol className="md:col-span-9 list-none border-t border-rule-soft md:border-l md:border-t-0 md:pl-10">
            {essays.map((essay, idx) => (
              <li
                key={essay.slug}
                className="border-b border-rule-soft last:border-b-0"
              >
                <Link
                  href={`/writing/${essay.slug}`}
                  className="group block py-7 md:py-9 -mx-2 px-2 transition-colors hover:bg-paper-soft/40"
                >
                  <div className="flex items-baseline gap-5 md:gap-7">
                    <span
                      aria-hidden="true"
                      className="font-mono text-[0.74rem] tracking-[0.06em] text-ink-mute oldstyle pt-2 select-none w-7 shrink-0"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-[1.55rem] md:text-[1.95rem] leading-[1.05] tracking-[-0.02em] text-ink group-hover:text-terracotta transition-colors">
                        {essay.title}
                      </h3>
                      <p className="mt-3 text-ink-soft leading-snug max-w-[52ch]">
                        {essay.dek}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-mute">
                        <span className="oldstyle normal-case tracking-[0.04em]">
                          {formatDateShort(essay.date)}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{essay.readingTime}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-terracotta/80">
                          {essay.tags.slice(0, 2).join(" / ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
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
