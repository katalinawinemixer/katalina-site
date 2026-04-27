export const tagMeta = {
  operator: {
    label: "Operator notes",
    dek: "What breaks inside actual trial operations: documents, deviations, audits, timelines, and the work behind clean data.",
  },
  thesis: {
    label: "Investment theses",
    dek: "Arguments about where biotech, clinical infrastructure, and capital might be moving next.",
  },
  regulatory: {
    label: "Regulatory edge",
    dek: "FDA, COFEPRIS, ANVISA, IRBs, eTMFs, and the paperwork layer that quietly determines whether trials move.",
  },
  latam: {
    label: "Latin America",
    dek: "Cross-border biotech, trial sites, founder geography, and the market most US readers still underestimate.",
  },
  diligence: {
    label: "Diligence",
    dek: "Questions investors should ask when the polished memo misses the operational reality.",
  },
} as const;

export type EssayTag = keyof typeof tagMeta;

export type EssayMeta = {
  slug: string;
  title: string;
  dek: string;
  date: string; // YYYY-MM-DD
  readingTime: string; // e.g., "12 min"
  tags: EssayTag[];
};

export const essays: EssayMeta[] = [
  {
    slug: "fda-shows-up",
    title:
      "When the FDA shows up: a coordinator’s notes from inside the eTMF",
    dek:
      "Two thousand pages. Three days. Zero critical findings. What inspectors actually look for, and the document hygiene that makes an inspection boring instead of fatal.",
    date: "2026-04-12",
    readingTime: "12 min",
    tags: ["operator", "regulatory"],
  },
  {
    slug: "latin-america-trial-frontier",
    title:
      "Why Latin America is the next clinical-trial frontier (and most of you can’t see it yet)",
    dek:
      "Treatment-naïve populations, faster enrollment, regulatory pathways the average US sponsor still treats as exotic. A thesis for the next ten years of Phase I–III expansion.",
    date: "2026-03-28",
    readingTime: "18 min",
    tags: ["thesis", "latam"],
  },
  {
    slug: "phase-one-failure-modes",
    title: "How Phase I trials really fail: a coordinator’s pattern book",
    dek:
      "Not the molecule. Not the protocol. Eight operational failure modes I’ve watched repeat across neurology, oncology, ID, and respiratory — and the questions they should make any biotech investor ask.",
    date: "2026-02-14",
    readingTime: "15 min",
    tags: ["operator", "diligence"],
  },
  {
    slug: "bilingual-diligence",
    title:
      "Bilingual diligence: the asymmetry hiding in LatAm biotech dealflow",
    dek:
      "Why most US firms underwrite Latin American bio companies through translators and miss the operational reality. What a Spanish-fluent associate actually sees in a São Paulo or CDMX CRO call.",
    date: "2026-01-30",
    readingTime: "9 min",
    tags: ["thesis", "latam"],
  },
  {
    slug: "regulatory-harmonization",
    title:
      "COFEPRIS, ANVISA, FDA: regulatory harmonization is a sourcing thesis",
    dek:
      "The quiet rewiring of trial approvals across the Americas — and the LatAm-first biotechs that are about to benefit. A short field guide for investors thinking about cross-border bio.",
    date: "2026-01-08",
    readingTime: "11 min",
    tags: ["thesis", "regulatory", "latam"],
  },
];

export function getEssay(slug: string): EssayMeta | undefined {
  return essays.find((e) => e.slug === slug);
}

export function getEssaysByTag(tag: EssayTag): EssayMeta[] {
  return essays.filter((essay) => essay.tags.includes(tag));
}

export function getTagEntries() {
  return Object.entries(tagMeta) as [EssayTag, (typeof tagMeta)[EssayTag]][];
}

export function getTagLabel(tag: EssayTag): string {
  return tagMeta[tag].label;
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function formatDateShort(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
