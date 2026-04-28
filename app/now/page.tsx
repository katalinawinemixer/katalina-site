import type { Metadata } from "next";
import Image from "next/image";
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
      "Running regulatory ops for the heme-onc trial portfolio at UW and writing more clearly about trial operations, LatAm biotech, and what execution risk looks like from inside the site.",
  },
  {
    lead: "Writing desk",
    body:
      "Drafting a piece on how COFEPRIS reform changes the cost of running Phase I/II trials in Mexico, plus a follow-up to the FDA-inspection essay on deviation reconciliation.",
  },
  {
    lead: "Reading stack",
    body:
      "Venture Deals for the mechanics of startup financing, The Emperor of All Maladies on a slow reread, Open Veins in Spanish, and ANVISA/COFEPRIS updates as they come out.",
  },
  {
    lead: "Following",
    body:
      "ASCO 2026 abstracts, COFEPRIS modernization updates, and regulatory changes that affect where early-phase oncology trials can actually run.",
  },
  {
    lead: "Open to",
    body:
      "Conversations with biotech investors underwriting Phase I/II programs, LatAm-focused funds thinking about bio dealflow, and trial-site operators in São Paulo, CDMX, Bogotá, or Buenos Aires.",
  },
  {
    lead: "In SF",
    body:
      "Based in San Francisco. If you work around biotech, clinical operations, or LatAm investing and something here resonates, I would be glad to meet for coffee.",
  },
];

const CURRENTLY = [
  ["Base", "San Francisco"],
  ["Book", "Venture Deals"],
  ["Following", "ASCO 2026 abstracts"],
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
        <div className="md:col-span-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start border-t border-rule pt-6">
          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {CURRENTLY.map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-mute">
                  {label}
                </dt>
                <dd className="mt-2 font-display text-[1.25rem] leading-tight text-ink">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <figure className="order-first w-full max-w-[18rem] overflow-hidden border border-rule justify-self-start lg:order-none lg:justify-self-end">
            <Image
              src="/images/now-katalina.jpeg"
              alt="Katalina Londoño"
              width={480}
              height={720}
              unoptimized
              priority
              sizes="(min-width: 768px) 16rem, 80vw"
              className="aspect-[2/3] w-full object-cover object-center"
            />
          </figure>
        </div>
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
    </div>
  );
}
