import Link from "next/link";
import type { Metadata } from "next";
import { essays } from "@/lib/essays";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Venture",
  description:
    "A short map for biotech investors and operators reading Katalina Londoño's work on clinical-trial operations, LatAm biotech, and early-stage diligence.",
  alternates: {
    canonical: absoluteUrl("/venture"),
  },
};

const START_WITH = [
  "what-biotech-investors-miss",
  "diligencing-phase-one-two-biotech",
  "clinical-trial-software-stack",
  "latin-america-trial-frontier",
];

const QUESTIONS = [
  "Where does the protocol create operational drag?",
  "Which sites can enroll the actual patient population, not the spreadsheet version?",
  "How quickly can amendments move through IRB, site training, and consent updates?",
  "What does deviation reconciliation look like before the FDA asks?",
  "Which systems are actually used by coordinators, and which ones exist for the sponsor dashboard?",
];

export default function Venture() {
  const startWith = essays.filter((essay) => START_WITH.includes(essay.slug));

  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Venture
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
            For biotech investors and operators
          </p>
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-[2.05rem] md:text-[3.5rem] leading-[1.08] md:leading-[1.04] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
            I look at biotech from inside the trial.
          </h1>
          <p className="mt-6 text-[1.08rem] md:text-[1.2rem] leading-relaxed text-ink-soft max-w-[60ch]">
            The science matters. So do the sites, the protocol amendments, the
            enrollment path, the document floor, the software, and the people
            who have to turn a clinical plan into clean data.
          </p>
        </div>
      </header>

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-14 md:py-20 border-t border-rule">
        <div className="md:col-span-3">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            What I know
          </h2>
        </div>
        <div className="md:col-span-9 grid sm:grid-cols-3 gap-6">
          {[
            "Regulatory operations inside Phase I-III oncology trials",
            "Site-level execution risk that does not show up in pitch decks",
            "LatAm trial infrastructure and the diligence questions it changes",
          ].map((item) => (
            <p
              key={item}
              className="border-t border-rule-soft pt-4 font-display text-[1.22rem] leading-tight text-ink"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-14 md:py-20 border-t border-rule">
        <div className="md:col-span-3">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Diligence questions
          </h2>
        </div>
        <ol className="md:col-span-9 list-none border-t border-rule-soft">
          {QUESTIONS.map((question, idx) => (
            <li
              key={question}
              className="grid grid-cols-[3rem_1fr] gap-5 py-5 border-b border-rule-soft"
            >
              <span className="font-mono text-[0.72rem] tracking-[0.06em] text-ink-mute oldstyle">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-[1.24rem] leading-tight text-ink">
                {question}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-14 md:py-20 border-t border-rule">
        <div className="md:col-span-3">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Start with
          </h2>
        </div>
        <ol className="md:col-span-9 list-none border-t border-rule-soft">
          {startWith.map((essay, idx) => (
            <li key={essay.slug} className="border-b border-rule-soft py-6">
              <Link href={`/writing/${essay.slug}`} className="group block">
                <p className="font-mono text-[0.72rem] tracking-[0.06em] text-ink-mute oldstyle">
                  {String(idx + 1).padStart(2, "0")} · {essay.readingTime}
                </p>
                <h3 className="mt-2 font-display text-[1.35rem] md:text-[1.55rem] leading-tight text-ink group-hover:text-terracotta transition-colors">
                  {essay.title}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed max-w-[62ch]">
                  {essay.dek}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-14 md:py-20 border-t border-rule">
        <div className="md:col-span-3">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Contact
          </h2>
        </div>
        <div className="md:col-span-9">
          <p className="font-display text-[1.35rem] md:text-[1.65rem] leading-tight text-ink max-w-[34ch]">
            Open to conversations where biotech investing, clinical operations,
            and emerging-market healthcare infrastructure overlap.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex font-mono text-[0.74rem] uppercase tracking-[0.12em] text-terracotta hover:text-ink transition-colors"
          >
            Reach out →
          </Link>
        </div>
      </section>
    </div>
  );
}
