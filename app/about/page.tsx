import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Katalina Londoño — regulatory affairs coordinator at the University of Washington's heme-onc program, writing about clinical-trial operations and Latin American biotech.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
};

const TIMELINE: { year: string; role: string; place: string; note?: string }[] =
  [
    {
      year: "2024 →",
      role: "Regulatory Affairs Coordinator",
      place: "University of Washington · Division of Medical Oncology",
      note:
        "Document floor for 18–21 concurrent Phase I–III heme-onc trials. Two sponsor audits and one FDA inspection in 2025; zero critical findings.",
    },
    {
      year: "2023–24",
      role: "Clinical Research Coordinator I",
      place: "PPD (Thermo Fisher) · Orlando",
      note:
        "Early-phase trials in neurology, RSV, asthma, COVID, chikungunya. Eligibility, consent, EDC, queries, source-data QC.",
    },
    {
      year: "2022–23",
      role: "Research Lab Technician I/II",
      place: "Orlando",
      note:
        "Built a QC system for pharmacokinetic sample collection and processing. Cut protocol deviations 25% and shipment errors 50%.",
    },
  ];

export default function About() {
  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      {/* ── Header ────────────────────────────────────── */}
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            About
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
            San Francisco · Updated April 2026
          </p>
        </div>
        <h1 className="md:col-span-9 font-display text-[2.05rem] md:text-[3.6rem] leading-[1.08] md:leading-[1.04] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
          A coordinator’s view of clinical trials, from the regulatory floor of
          an academic cancer center.
        </h1>
      </header>

      {/* ── Long-form prose ───────────────────────────── */}
      <section className="grid md:grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            §&nbsp;01 — In short
          </p>
        </div>
        <div className="md:col-span-9 prose-essay max-w-none">
          <p>
            I am a regulatory affairs coordinator at the University of
            Washington&rsquo;s heme-onc program, which means I run the document
            floor of eighteen to twenty-one Phase&nbsp;I–III oncology trials at
            any given time &mdash; IRB submissions, amendments, deviations,
            audits, the sealed envelopes of an FDA inspection. The work is
            unglamorous in proportion to its consequence. A protocol amendment
            that should take six business days takes thirty-one because two
            reviewers were on PTO and a third had questions about a sentence in
            section&nbsp;8.4. A treatment delay for a patient with relapsed AML
            usually traces back to an email that should have been sent on a
            Wednesday.
          </p>
          <p>
            Before this I coordinated early-phase trials at PPD in Orlando
            &mdash; neurology, RSV, asthma, COVID, chikungunya &mdash; and
            before that I built a QC system in a lab where pharmacokinetic
            samples were being mishandled enough that we cut deviations by
            twenty-five percent and shipment errors in half. I am one course
            from a B.S. in Applied Health Sciences. I am in San&nbsp;Francisco.
            My family is Colombian. I think Latin&nbsp;America is the next
            clinical-trial frontier and most of the people writing about
            biotech can&rsquo;t see it yet.
          </p>
          <p>
            I write here about three things, mostly. The regulatory edges where
            early-phase therapies actually fail. The operational reality of
            trials in Latin&nbsp;American sites that most US firms underwrite
            through translators. And the small set of clinical-trial software
            tools I have used for years and have firm opinions about &mdash;
            Veeva, Florence eReg, OnCore, Medidata, PreClarus, SIP. Most
            investors evaluating eClinical companies have never opened the
            tools. I have opened all of them, in anger, on Sundays.
          </p>
          <p>
            I am not coming to venture from banking or McKinsey or a unicorn
            PM seat. I am coming from inside the trial. The case I am making
            is that the inside of the trial is where the next decade of
            biotech investing is going to be won or lost, and that someone who
            has signed the IRB submission, sat through the FDA inspection, and
            taken a CRA call in Spanish is a useful person to have in the
            room.
          </p>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Timeline ──────────────────────────────────── */}
      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-16 md:py-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            §&nbsp;02 — Where I&rsquo;ve been
          </p>
        </div>
        <ol className="md:col-span-9 list-none border-t border-rule-soft">
          {TIMELINE.map((entry, idx) => (
            <li
              key={idx}
              className="grid grid-cols-[5.5rem_1fr] md:grid-cols-[7rem_1fr] gap-5 md:gap-8 py-6 md:py-7 border-b border-rule-soft"
            >
              <div className="font-mono text-[0.78rem] tracking-[0.04em] text-ink-mute oldstyle pt-1">
                {entry.year}
              </div>
              <div>
                <h3 className="font-display text-[1.25rem] md:text-[1.4rem] leading-[1.15] tracking-[-0.012em] text-ink">
                  {entry.role}
                </h3>
                <p className="mt-1 font-mono text-[0.74rem] uppercase tracking-[0.06em] text-ink-soft normal-case">
                  {entry.place}
                </p>
                {entry.note ? (
                  <p className="mt-3 text-ink-soft leading-snug max-w-[60ch]">
                    {entry.note}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <hr className="rule" />

      {/* ── Therapeutic areas + systems ───────────────── */}
      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-16 md:py-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            §&nbsp;03 — Working surface
          </p>
        </div>
        <div className="md:col-span-9 grid sm:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display italic text-[1.2rem] text-ink mb-4">
              Therapeutic areas
            </h3>
            <dl className="space-y-3 text-ink-soft">
              <div>
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                  Oncology
                </dt>
                <dd className="mt-1">
                  Hematologic malignancies, Phase I–III. Academic cancer center.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                  Neurology
                </dt>
                <dd className="mt-1">
                  Parkinson&rsquo;s, Alzheimer&rsquo;s, ALS — Phase I.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                  Respiratory
                </dt>
                <dd className="mt-1">RSV, asthma — Phase I.</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                  Infectious disease
                </dt>
                <dd className="mt-1">SARS-CoV-2, chikungunya — Phase I.</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="font-display italic text-[1.2rem] text-ink mb-4">
              Systems I&rsquo;ve actually used
            </h3>
            <dl className="space-y-3 text-ink-soft">
              <div>
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                  CTMS
                </dt>
                <dd className="mt-1">OnCore, Clinical&nbsp;Conductor.</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                  EDC
                </dt>
                <dd className="mt-1">Medidata, PreClarus.</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                  eTMF / eReg
                </dt>
                <dd className="mt-1">Veeva&nbsp;Vault, Florence&nbsp;eReg, SIP.</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-mute">
                  Languages
                </dt>
                <dd className="mt-1">English, Spanish (fluent).</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Colophon ──────────────────────────────────── */}
      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-16 md:py-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            §&nbsp;04 — Colophon
          </p>
        </div>
        <div className="md:col-span-9 grid sm:grid-cols-3 gap-8">
          <div className="border-t border-rule-soft pt-5">
            <h3 className="font-display italic text-[1.2rem] text-ink">
              Built with
            </h3>
            <p className="mt-3 text-ink-soft leading-snug">
              Next.js, Bun, MDX, and a fondness for pages that feel typeset
              instead of assembled.
            </p>
          </div>
          <div className="border-t border-rule-soft pt-5">
            <h3 className="font-display italic text-[1.2rem] text-ink">
              Desk fuel
            </h3>
            <p className="mt-3 text-ink-soft leading-snug">
              Coffee, annotated protocols, clinical acronyms, and the belief
              that clean folders are a form of mercy.
            </p>
          </div>
          <div className="border-t border-rule-soft pt-5">
            <h3 className="font-display italic text-[1.2rem] text-ink">
              House style
            </h3>
            <p className="mt-3 text-ink-soft leading-snug">
              Warm paper, sharp serif, small sections, real dates, and no
              pretending that operations are less interesting than strategy.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── Contact ───────────────────────────────────── */}
      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-16 md:py-20">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            §&nbsp;05 — In touch
          </p>
        </div>
        <div className="md:col-span-9 prose-essay max-w-none">
          <p>
            If you are an investor underwriting a Phase&nbsp;I biotech and your
            associate has never seen an eTMF, or if you are a LatAm-focused
            firm looking at a clinical-stage company and want a second read on
            its operational footing, write to me at{" "}
            <a href="mailto:Katalina@katalinalondono.com">
              Katalina@katalinalondono.com
            </a>
            . I read everything. I respond to most things. I am also on
            Twitter as{" "}
            <a href="https://x.com/kat_winemixer">@kat_winemixer</a>, where I
            post less than I read.
          </p>
          <p>
            And if you are in San&nbsp;Francisco &mdash; or coming through
            &mdash; I would happily meet you for coffee. I have moved here
            recently. I am still building the part of my life that happens at
            small tables in unhurried neighborhoods.
          </p>
        </div>
      </section>
    </div>
  );
}
