import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import EssayListItem from "@/app/components/EssayListItem";
import {
  type EssayTag,
  getEssaysByTag,
  getTagEntries,
  tagMeta,
} from "@/lib/essays";
import { absoluteUrl } from "@/lib/site";

type TopicPageProps = {
  params: Promise<{ tag: string }>;
};

export function generateStaticParams() {
  return getTagEntries().map(([tag]) => ({ tag }));
}

function isEssayTag(tag: string): tag is EssayTag {
  return tag in tagMeta;
}

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { tag } = await params;
  if (!isEssayTag(tag)) return {};
  const meta = tagMeta[tag];
  const url = absoluteUrl(`/topics/${tag}`);

  return {
    title: meta.label,
    description: meta.dek,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: meta.label,
      description: meta.dek,
      url,
    },
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { tag } = await params;
  if (!isEssayTag(tag)) notFound();

  const meta = tagMeta[tag];
  const taggedEssays = getEssaysByTag(tag);

  return (
    <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-16 md:py-24">
      <header className="grid md:grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="md:col-span-3">
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
            Topic
          </p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.06em] text-ink-mute oldstyle">
            {String(taggedEssays.length).padStart(2, "0")} pieces
          </p>
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-[2.1rem] md:text-[3.4rem] leading-[1.06] tracking-[-0.02em] md:tracking-[-0.025em] text-ink">
            {meta.label}
          </h1>
          <p className="mt-5 font-display italic text-[1.15rem] md:text-[1.45rem] leading-snug text-ink-soft max-w-[44ch]">
            {meta.dek}
          </p>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-3">
          <Link
            href="/writing"
            className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-terracotta hover:text-ink transition-colors"
          >
            ← All writing
          </Link>
        </div>
        <ol className="md:col-span-9 list-none border-t border-rule">
          {taggedEssays.map((essay, idx) => (
            <EssayListItem key={essay.slug} essay={essay} index={idx} />
          ))}
        </ol>
      </div>
    </div>
  );
}
