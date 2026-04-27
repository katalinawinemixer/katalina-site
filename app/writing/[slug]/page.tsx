import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { essays, getEssay, formatDate, getTagLabel } from "@/lib/essays";
import { absoluteUrl, siteConfig } from "@/lib/site";

const ESSAY_LOADERS: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "fda-shows-up": () => import("@/content/essays/fda-shows-up.mdx"),
  "latin-america-trial-frontier": () =>
    import("@/content/essays/latin-america-trial-frontier.mdx"),
  "phase-one-failure-modes": () =>
    import("@/content/essays/phase-one-failure-modes.mdx"),
  "bilingual-diligence": () => import("@/content/essays/bilingual-diligence.mdx"),
  "regulatory-harmonization": () =>
    import("@/content/essays/regulatory-harmonization.mdx"),
};

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getEssay(slug);
  if (!meta) return {};
  const url = absoluteUrl(`/writing/${meta.slug}`);
  return {
    title: meta.title,
    description: meta.dek,
    alternates: {
      canonical: url,
    },
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    openGraph: {
      title: meta.title,
      description: meta.dek,
      url,
      type: "article",
      publishedTime: meta.date,
      authors: [siteConfig.author],
      tags: meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.dek,
    },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getEssay(slug);
  const loader = ESSAY_LOADERS[slug];
  if (!meta || !loader) notFound();

  const { default: MDXContent } = await loader();

  const idx = essays.findIndex((e) => e.slug === slug);
  const next = essays[idx + 1] ?? essays[0];
  const prev = essays[idx - 1] ?? essays[essays.length - 1];

  return (
    <article className="mx-auto max-w-[44rem] px-6 md:px-8 pt-12 md:pt-20 pb-16">
      {/* ── Header ────────────────────────────────────── */}
      <header className="mb-12 md:mb-16">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-mute">
          <Link href="/writing" className="hover:text-terracotta transition-colors">
            ← Writing
          </Link>
          <span className="mx-3 text-rule">/</span>
          <span className="text-terracotta/80">
            {meta.tags.slice(0, 2).map(getTagLabel).join(" · ")}
          </span>
        </p>
        <h1 className="mt-6 font-display text-[1.95rem] md:text-[3rem] leading-[1.08] md:leading-[1.05] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
          {meta.title}
        </h1>
        <p className="mt-5 font-display italic text-[1.08rem] md:text-[1.35rem] leading-snug text-ink-soft">
          {meta.dek}
        </p>
        <p className="mt-7 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-mute">
          <span className="oldstyle normal-case tracking-[0.04em]">
            {formatDate(meta.date)}
          </span>
          <span className="mx-3 text-rule">·</span>
          <span>{meta.readingTime} read</span>
          <span className="mx-3 text-rule">·</span>
          <span className="normal-case tracking-[0.04em]">Katalina Londoño</span>
        </p>
      </header>

      <hr className="rule mb-10 md:mb-14" />

      {/* ── Body ──────────────────────────────────────── */}
      <div className="prose-essay dropcap">
        <MDXContent />
      </div>

      {/* ── Footer rule ───────────────────────────────── */}
      <hr className="rule mt-16 md:mt-20 mb-10" />

      <div className="mb-10">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-mute">
          Filed under
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <Link
              key={tag}
              href={`/topics/${tag}`}
              className="border border-rule-soft px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-soft hover:border-terracotta hover:text-terracotta transition-colors"
            >
              {getTagLabel(tag)}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Prev / Next ───────────────────────────────── */}
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <Link
          href={`/writing/${prev.slug}`}
          className="group block py-4 border-t border-rule-soft"
        >
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-mute">
            ← Previous
          </p>
          <p className="mt-2 font-display text-[1.15rem] leading-tight text-ink group-hover:text-terracotta transition-colors">
            {prev.title}
          </p>
        </Link>
        <Link
          href={`/writing/${next.slug}`}
          className="group block py-4 border-t border-rule-soft md:text-right"
        >
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-mute">
            Next →
          </p>
          <p className="mt-2 font-display text-[1.15rem] leading-tight text-ink group-hover:text-terracotta transition-colors">
            {next.title}
          </p>
        </Link>
      </nav>
    </article>
  );
}
