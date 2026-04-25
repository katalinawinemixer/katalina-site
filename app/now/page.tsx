import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm working on, reading, and thinking about this month.",
};

const STANZAS: { lead: string; body: string }[] = [
  {
    lead: "At work",
    body:
      "Running regulatory ops for the heme-onc trial portfolio at UW. Q2 deviation reconciliation closes at the end of April; two protocol amendments are mid-IRB. One sponsor audit on the calendar for May.",
  },
  {
    lead: "Writing",
    body:
      "A longer piece on how the COFEPRIS reform is changing the cost structure for US biotechs running their Phase I/II trials in Mexico. Out in May, probably. Also a follow-up to the FDA-inspection essay, on the deviation reconciliation discipline specifically.",
  },
  {
    lead: "Reading",
    body:
      "Mukherjee's Emperor of All Maladies — on the third re-read, this time with the chapters on Frei and Freireich slowed down. Galeano's Open Veins in the original, two chapters at a time. The ANVISA RDC updates from this spring.",
  },
  {
    lead: "Watching",
    body:
      "ASCO 2026 abstracts as they come out. The COFEPRIS modernization throughput numbers. A handful of LatAm-anchored Series A biotechs whose names I will share if and when they raise.",
  },
  {
    lead: "Open to",
    body:
      "Conversations with US biotech investors who underwrite Phase I/II programs in oncology and want a second read on a sponsor's operational footing. Conversations with LatAm-focused funds (Kaszek, Monashees, Cometa, ALLVP, FEMSA, Hi) on cross-border bio dealflow. And introductions to anyone running a trial site in São Paulo, CDMX, or Bogotá whose work I should be paying attention to.",
  },
  {
    lead: "In SF",
    body:
      "I have moved here recently and I am building the part of my life that happens at small tables in unhurried neighborhoods. If you live in San Francisco — or come through often — and any of what I write here resonates with what you are working on, I would genuinely like to meet you for coffee. I take that ask seriously and I will not waste your hour.",
  },
  {
    lead: "Reachable",
    body:
      "Email at Katalina@katalinalondono.com — I read every one. Twitter as @kat_winemixer, where I post less than I read but where I am responsive to DMs from people who have read something here. LinkedIn for the formal version of my background.",
  },
];

export default function Now() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-[60rem] px-6 md:px-10 py-16 md:py-28">
      {/* ── Header ────────────────────────────────────── */}
      <header className="mb-14 md:mb-20">
        <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
          Now
        </p>
        <p className="mt-3 font-mono text-[0.72rem] tracking-[0.04em] text-ink-mute oldstyle normal-case">
          {today} · San Francisco
        </p>
      </header>

      {/* ── Letter-style stanzas ──────────────────────── */}
      <div className="font-display italic text-[1.5rem] md:text-[1.85rem] leading-[1.35] tracking-[-0.012em] text-ink mb-14 md:mb-20">
        <p>
          A short, dated note from where I am right now &mdash; what I am
          working on, what I am reading, and what kinds of conversations I
          would welcome.
        </p>
      </div>

      <ol className="list-none space-y-10 md:space-y-14 border-t border-rule">
        {STANZAS.map((stanza, idx) => (
          <li
            key={stanza.lead}
            className="grid grid-cols-[5rem_1fr] md:grid-cols-[7rem_1fr] gap-5 md:gap-10 pt-10 md:pt-14"
          >
            <div className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-mute oldstyle pt-2">
              <span className="text-terracotta">
                §&nbsp;{String(idx + 1).padStart(2, "0")}
              </span>
              <span className="block mt-1 normal-case tracking-[0.04em] text-ink-soft">
                {stanza.lead}
              </span>
            </div>
            <p className="text-[1.1rem] leading-[1.65] text-ink max-w-[60ch]">
              {stanza.body}
            </p>
          </li>
        ))}
      </ol>

      <hr className="rule mt-20 md:mt-28" />

      <p className="mt-10 font-display italic text-[1.05rem] leading-relaxed text-ink-soft">
        This page is updated when something I want to be on it changes &mdash;
        usually monthly, sometimes after a quarter goes by without a note. The{" "}
        <a
          href="https://nownownow.com/about"
          className="text-clinical hover:text-terracotta underline-offset-[3px] underline decoration-1 decoration-clinical/40 hover:decoration-terracotta transition-colors"
        >
          /now page
        </a>{" "}
        convention comes from Derek Sivers. I have kept his idea but not his
        formatting.
      </p>
    </div>
  );
}
