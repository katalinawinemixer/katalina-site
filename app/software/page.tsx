import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects / GitHub",
  description:
    "GitHub projects by Katalina Londoño: clinical-trial workflow prototypes, human-AI review patterns, and privacy-aware applied AI demos.",
  alternates: {
    canonical: absoluteUrl("/software"),
  },
  openGraph: {
    title: "Projects / GitHub — Katalina Londoño",
    description:
      "Clinical research regulatory affairs professional using GitHub to document technical learning and prototypes around trial workflows, evidence review, and human-in-the-loop AI.",
    url: absoluteUrl("/software"),
  },
};

const PROJECTS = [
  {
    name: "StudyChaser",
    eyebrow: "Clinical research / regulatory affairs",
    summary:
      "A read-only regulatory training follow-up prototype for clinical research teams, built around protocol/amendment training, overdue acknowledgments, coordinator follow-up, and audit-ready filing notes.",
    why:
      "This is the clearest bridge between my clinical/regulatory background and the roles I’m pursuing: it turns a workflow I know from the inside into a product surface a study team could review.",
    stack: ["React", "Vite", "Node.js", "Cloudflare Workers", "Synthetic demo data"],
    image: "/images/projects/studychaser-dashboard.png",
    alt: "StudyChaser dashboard with synthetic training counts and overdue follow-up items",
    live: "https://studychaser.katalinalondono.com/",
    github: "https://github.com/katalinawinemixer/studychaser",
  },
  {
    name: "Human-AI Design System",
    eyebrow: "AI product patterns",
    summary:
      "A React/TypeScript prototype exploring AI interface patterns for citations, confidence, uncertainty, feedback, evals, prompt history, response comparison, agent activity, and human review.",
    why:
      "It documents how I think about AI-assisted review: evidence, uncertainty, and review states should be visible instead of hidden behind a magic text box.",
    stack: ["React", "TypeScript", "Vite", "Vitest", "GitHub Pages"],
    image: "/images/projects/human-ai-design-system.png",
    alt: "Human-AI Design System homepage with AI review product patterns",
    live: "https://katalinawinemixer.github.io/human-ai-design-system/",
    github: "https://github.com/katalinawinemixer/human-ai-design-system",
  },
  {
    name: "SF Food Guesser",
    eyebrow: "Applied AI / vision prototype",
    summary:
      "An AI-assisted San Francisco food venue guessing app that ranks likely restaurants from uploaded photos while handling privacy, metadata stripping, provider behavior, and uncertainty.",
    why:
      "It is applied AI practice outside the clinical niche: image upload flows, ranking, privacy choices, model/provider failures, and a playful consumer-facing interface.",
    stack: ["React", "Vite", "Node", "AI vision workflows", "Privacy-aware uploads"],
    image: "/images/projects/sf-food-guesser.png",
    alt: "SF Food Guesser app interface for uploading food photos and guessing venues",
    live: "https://spotted-in-sf.com/",
    github:
      "https://github.com/katalinawinemixer/katalinawinemixer/blob/main/sf-food-guesser-case-study.md",
  },
];

const FOCUS_AREAS = [
  "Clinical research regulatory affairs",
  "AI-assisted workflow prototypes",
  "Evidence review and human oversight",
  "Healthtech implementation / solutions",
];

export default function SoftwareProjects() {
  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Projects
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
            San Francisco · 2026
          </p>
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-[2.05rem] md:text-[3.6rem] leading-[1.08] md:leading-[1.04] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
            I use GitHub to explore the workflows I know too well.
          </h1>
          <p className="mt-6 text-[1.08rem] md:text-[1.22rem] leading-relaxed text-ink-soft max-w-[60ch]">
            I am a clinical research regulatory affairs professional looking for
            roles in healthtech, clinical AI, regulatory workflow tooling,
            implementation, or product-adjacent teams. I learn quickly,
            prototype fast, and I know where clinical-trial workflows break:
            follow-up, evidence, review, uncertainty, and human oversight.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {FOCUS_AREAS.map((role) => (
              <span
                key={role}
                className="rounded-full border border-rule bg-paper-soft px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ink-soft"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </header>

      <hr className="rule" />

      <section className="py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3">
            <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
              Featured projects
            </h2>
            <p className="mt-6 font-display italic text-[1rem] text-ink-soft leading-snug max-w-[18ch]">
              Working prototypes, not just claims.
            </p>
          </div>
          <div className="md:col-span-9 space-y-12 md:border-l md:border-rule-soft md:pl-10">
            {PROJECTS.map((project) => (
              <article key={project.name} className="border-t border-rule-soft pt-6">
                <div className="overflow-hidden rounded-sm border border-rule bg-paper-soft">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1280}
                    height={900}
                    unoptimized
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-6 grid lg:grid-cols-[1fr_14rem] gap-6 lg:gap-10">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-terracotta">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-[1.65rem] md:text-[2.15rem] leading-tight tracking-[-0.02em] text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-ink-soft leading-relaxed max-w-[62ch]">
                      {project.summary}
                    </p>
                    <p className="mt-4 text-ink-soft leading-relaxed max-w-[62ch]">
                      {project.why}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[0.72rem] uppercase tracking-[0.1em]">
                      <a
                        href={project.live}
                        className="text-terracotta hover:text-ink transition-colors"
                      >
                        Live demo →
                      </a>
                      <a
                        href={project.github}
                        className="text-terracotta hover:text-ink transition-colors"
                      >
                        GitHub / case study →
                      </a>
                    </div>
                  </div>
                  <aside>
                    <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-mute">
                      Built with
                    </h4>
                    <ul className="mt-3 space-y-2 text-ink-soft">
                      {project.stack.map((item) => (
                        <li key={item} className="border-t border-rule-soft pt-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-14 md:py-20">
        <div className="md:col-span-3">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Contact
          </h2>
        </div>
        <div className="md:col-span-9 md:border-l md:border-rule-soft md:pl-10">
          <p className="font-display text-[1.45rem] md:text-[2rem] leading-[1.16] tracking-[-0.018em] text-ink max-w-[30ch]">
            I am looking for teams where clinical/regulatory fluency and
            practical implementation judgment both matter.
          </p>
          <p className="mt-5 text-ink-soft leading-relaxed max-w-[58ch]">
            The best fit is work around messy human workflows: clinical research,
            regulated review, evidence-backed AI surfaces, internal tools,
            customer-facing implementation, or healthtech solutions work.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[0.74rem] uppercase tracking-[0.12em]">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-terracotta hover:text-ink transition-colors"
            >
              Email →
            </a>
            <Link
              href="/contact"
              className="text-terracotta hover:text-ink transition-colors"
            >
              Contact page →
            </Link>
            <a
              href="https://github.com/katalinawinemixer"
              className="text-terracotta hover:text-ink transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
