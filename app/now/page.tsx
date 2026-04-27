import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm working on, reading, and thinking about this month.",
  alternates: {
    canonical: absoluteUrl("/now"),
  },
};

const STANZAS: { lead: string; body: string }[] = [
  {
    lead: "Main focus",
    body:
      "Running regulatory ops for the heme-onc trial portfolio at UW while building a sharper public body of work around trial operations, LatAm biotech, and investor diligence from the coordinator's side of the table.",
  },
  {
    lead: "Writing desk",
    body:
      "A longer piece on how COFEPRIS reform changes the cost structure for US biotechs running Phase I/II trials in Mexico. Also a follow-up to the FDA-inspection essay, this time on deviation reconciliation as a discipline rather than a cleanup task.",
  },
  {
    lead: "Reading stack",
    body:
      "Venture Deals for the mechanics of term sheets and financing rounds; Mukherjee's Emperor of All Maladies on a slow reread; Galeano's Open Veins in Spanish, two chapters at a time; ANVISA and COFEPRIS updates with the kind of attention other people reserve for playoff brackets.",
  },
  {
    lead: "Watching",
    body:
      "ASCO 2026 abstracts, COFEPRIS modernization throughput numbers, and a handful of LatAm-anchored early-stage biotechs whose names I will share when there is something public to point to.",
  },
  {
    lead: "Open to",
    body:
      "Conversations with biotech investors underwriting Phase I/II programs, LatAm-focused funds thinking about bio dealflow, and anyone running a trial site in São Paulo, CDMX, Bogotá, or Buenos Aires whose work I should understand.",
  },
  {
    lead: "In SF",
    body:
      "Still building the part of my life that happens at small tables in unhurried neighborhoods. If you live here, work around biotech, clinical operations, or LatAm investing, and something here resonates, I would genuinely like to meet for coffee.",
  },
];

const CURRENTLY = [
  ["Base", "San Francisco"],
  ["Book", "Venture Deals"],
  ["Tab", "ASCO 2026 abstracts"],
  ["Question", "Where does LatAm trial capacity become investable infrastructure?"],
];

export default function Now() {
  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      {/* ── Header ────────────────────────────────────── */}
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Now
          </p>
          <p className="mt-3 font-mono text-[0.72rem] tracking-[0.04em] text-ink-mute oldstyle normal-case">
            Updated April 2026 · San Francisco
          </p>
        </div>
        <h1 className="md:col-span-9 font-display text-[2.05rem] md:text-[3.4rem] leading-[1.08] md:leading-[1.04] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
          A dated note from the current version of the desk.
        </h1>
      </header>

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Currently
          </p>
        </div>
        <dl className="md:col-span-9 grid sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-rule">
          {CURRENTLY.map(([label, value]) => (
            <div key={label} className="pt-5">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-mute">
                {label}
              </dt>
              <dd className="mt-2 font-display text-[1.25rem] leading-tight text-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <hr className="rule" />

      <ol className="list-none">
        {STANZAS.map((stanza, idx) => (
          <li
            key={stanza.lead}
            className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-rule-soft"
          >
            <div className="md:col-span-3 font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-mute oldstyle">
              <span className="text-terracotta">
                § {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="block mt-1 normal-case tracking-[0.04em] text-ink-soft">
                {stanza.lead}
              </span>
            </div>
            <p className="md:col-span-9 text-[1.08rem] leading-[1.65] text-ink max-w-[62ch]">
              {stanza.body}
            </p>
          </li>
        ))}
      </ol>

      <hr className="rule mt-20 md:mt-28" />

      <div className="grid md:grid-cols-12 gap-6 md:gap-10 mt-10">
        <p className="md:col-span-9 md:col-start-4 font-display italic text-[1.05rem] leading-relaxed text-ink-soft">
          This page changes when the actual shape of the month changes. The{" "}
          <a
            href="https://nownownow.com/about"
            className="text-clinical hover:text-terracotta underline-offset-[3px] underline decoration-1 decoration-clinical/40 hover:decoration-terracotta transition-colors"
          >
            /now page
          </a>{" "}
          convention comes from Derek Sivers. I kept the spirit and let the
          formatting wear better shoes.
        </p>
      </div>
    </div>
  );
}
