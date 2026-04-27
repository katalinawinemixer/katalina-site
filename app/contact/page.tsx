import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "How to contact Katalina Londoño about clinical-trial operations, LatAm biotech, and venture diligence.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

const OPEN_TO = [
  "clinical-trial operations",
  "LatAm trial infrastructure",
  "biotech diligence",
  "VC associate roles",
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Contact
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
            San Francisco
          </p>
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-[2.05rem] md:text-[3.5rem] leading-[1.08] md:leading-[1.04] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
            Reach out if the work overlaps.
          </h1>
          <p className="mt-6 text-[1.08rem] md:text-[1.2rem] leading-relaxed text-ink-soft max-w-[58ch]">
            I am especially open to conversations about clinical-trial
            operations, Latin America, biotech diligence, and early-stage
            investing.
          </p>
        </div>
      </header>

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
        <div className="md:col-span-3">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Looking for
          </h2>
        </div>
        <div className="md:col-span-9 border-t border-rule pt-5">
          <p className="font-display text-[1.45rem] md:text-[1.85rem] leading-snug text-ink max-w-[56ch]">
            I&rsquo;m interested in roles where clinical operations, biotech
            investing, and emerging-market healthcare infrastructure overlap.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
        <div className="md:col-span-3">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Open to
          </h2>
        </div>
        <ul className="md:col-span-9 grid sm:grid-cols-2 gap-5">
          {OPEN_TO.map((item) => (
            <li key={item} className="border-t border-rule-soft pt-4">
              <p className="font-display text-[1.28rem] leading-tight text-ink">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <hr className="rule" />

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16">
        <div className="md:col-span-3">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Email
          </h2>
        </div>
        <div className="md:col-span-9">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-display text-[1.55rem] md:text-[2.1rem] leading-tight text-ink hover:text-terracotta transition-colors underline-offset-[6px] hover:underline decoration-1 decoration-terracotta/50"
          >
            {siteConfig.email}
          </a>
          <p className="mt-5 text-ink-soft leading-relaxed max-w-[54ch]">
            A short note with context is perfect. If there is a specific essay
            or topic that made you reach out, mention it.
          </p>
        </div>
      </section>
    </div>
  );
}
