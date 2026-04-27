export type ReadingEntry = {
  title: string;
  author?: string;
  venue?: string;
  year?: string;
  url?: string;
  note: string;
};

export type ReadingSection = {
  heading: string;
  description?: string;
  entries: ReadingEntry[];
};

export const READING: ReadingSection[] = [
  {
    heading: "Currently reading",
    entries: [
      {
        title: "Venture Deals",
        author: "Brad Feld, Jason Mendelson",
        year: "2019",
        note:
          "A practical book on how startup financing works: term sheets, lead investors, option pools, liquidation preferences, and the language people use when they talk about venture deals.",
      },
    ],
  },
  {
    heading: "To read",
    entries: [
      {
        title: "Secrets of Sand Hill Road",
        author: "Scott Kupor",
        year: "2019",
        note:
          "A plain-English view of how venture firms think about founders, markets, boards, down rounds, and exits.",
      },
      {
        title: "The Business of Venture Capital",
        author: "Mahendra Ramsinghani",
        year: "2021",
        note:
          "A deeper look at how VC funds work: LPs, fund formation, portfolio construction, reserves, and what happens after the check is written.",
      },
      {
        title: "The Power Law",
        author: "Sebastian Mallaby",
        year: "2022",
        note:
          "A history of venture capital and why the whole industry is built around a small number of huge wins.",
      },
      {
        title: "7 Powers",
        author: "Hamilton Helmer",
        year: "2016",
        note:
          "A strategy book about why some companies become hard to compete with.",
      },
      {
        title: "Crossing the Chasm",
        author: "Geoffrey A. Moore",
        year: "1991",
        note:
          "A book about why good products can still get stuck before they reach mainstream customers.",
      },
      {
        title: "The Cold Start Problem",
        author: "Andrew Chen",
        year: "2021",
        note:
          "A book about network effects: when they are real, when they are not, and how early users start to build momentum.",
      },
      {
        title: "The Pharmagellan Guide to Biotech Forecasting and Valuation",
        author: "Frank S. David, Seth Robey, Andrew Matthews",
        year: "2017",
        note:
          "A biotech-specific book on forecasting, clinical assumptions, market size, development costs, and valuation.",
      },
    ],
  },
  {
    heading: "Books I keep coming back to",
    description:
      "Books that shaped how I think about medicine, regulation, and Latin America.",
    entries: [
      {
        title: "The Emperor of All Maladies",
        author: "Siddhartha Mukherjee",
        year: "2010",
        note:
          "The book that made oncology legible to a general reader. Re-read the chapters on the early leukemia trials every couple of years.",
      },
      {
        title: "The Death of Cancer",
        author: "Vincent T. DeVita Jr., Elizabeth DeVita-Raeburn",
        year: "2015",
        note:
          "DeVita designed the MOPP regimen for Hodgkin's. The chapter on how clinical-trial bureaucracy slowed the rollout of curative chemotherapy is required reading for anyone who thinks regulation is always the constraint.",
      },
      {
        title: "Bottle of Lies",
        author: "Katherine Eban",
        year: "2019",
        note:
          "On generic-drug manufacturing fraud. Less about clinical trials, more about what GMP inspections actually surface — and what they miss.",
      },
      {
        title: "The Code Breaker",
        author: "Walter Isaacson",
        year: "2021",
        note:
          "For the chapters on how Doudna and Charpentier translated CRISPR into a pipeline of clinical-stage companies.",
      },
      {
        title: "Open Veins of Latin America",
        author: "Eduardo Galeano",
        year: "1971",
        note:
          "Not a biotech book. A book about why the assumption that LatAm is structurally extractive is wrong about which direction the extraction runs. Read it in Spanish if you can.",
      },
    ],
  },
  {
    heading: "Primary sources",
    description:
      "Regulations, guidance, and datasets I use when I need the source material.",
    entries: [
      {
        title: "FDA Guidance for Industry: Diversity Plans for Clinical Trials",
        venue: "FDA",
        year: "2024",
        note:
          "The 2024 update is what most US-only biotechs underestimate. The trial-population requirements have teeth now.",
      },
      {
        title: "ANVISA Resolution RDC No. 09/2015 and subsequent updates",
        venue: "ANVISA",
        year: "2015 →",
        note:
          "The current Brazilian framework for clinical trial approvals. Read it in the original Portuguese if you can; the English summaries leave out the procedural detail that matters.",
      },
      {
        title: "ICH E6(R3) Good Clinical Practice",
        venue: "ICH",
        year: "2025",
        note:
          "The R3 revision matters. It modernized the GCP framework around risk-based monitoring and decentralized trials in ways that are still working through the regional regulators.",
      },
      {
        title: "PAHO clinical research capacity reports",
        venue: "Pan American Health Organization",
        year: "ongoing",
        note:
          "PAHO publishes uneven but valuable surveys of clinical-research capacity across LatAm. Most sponsors don't read them. The data is useful.",
      },
      {
        title: "FDA Form 483 observations, public dataset",
        venue: "FDA",
        year: "ongoing",
        note:
          "The public Form 483 database is the single best signal of how an inspection actually went. I read recent observations before site selection conversations.",
      },
    ],
  },
];
