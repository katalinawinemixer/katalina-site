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
    description:
      "Open now, usually with too many tabs beside it.",
    entries: [
      {
        title: "Venture Deals",
        author: "Brad Feld, Jason Mendelson",
        year: "2019",
        note:
          "The mechanics book. Term sheets, liquidation preferences, option pools, lead investors, syndicates, and the vocabulary that should feel ordinary rather than mystical.",
      },
    ],
  },
  {
    heading: "To read",
    description:
      "Queued because each one answers a question I keep running into: financing, markets, adoption, strategy, or valuation.",
    entries: [
      {
        title: "Secrets of Sand Hill Road",
        author: "Scott Kupor",
        year: "2019",
        note:
          "How venture looks from inside the firm: categories, founders, boards, down rounds, exits, and the parts of the job that do not show up in a term sheet.",
      },
      {
        title: "The Business of Venture Capital",
        author: "Mahendra Ramsinghani",
        year: "2021",
        note:
          "The firm-level view: LPs, fund formation, portfolio construction, reserves, and why a good company can still be a hard fit for a fund.",
      },
      {
        title: "The Power Law",
        author: "Sebastian Mallaby",
        year: "2022",
        note:
          "A history of why venture behaves unlike normal finance: most bets fail, a few return the fund, and the incentives get strange from there.",
      },
      {
        title: "7 Powers",
        author: "Hamilton Helmer",
        year: "2016",
        note:
          "A compact strategy grammar: scale economies, network effects, counter-positioning, switching costs, brand, cornered resources, and process power.",
      },
      {
        title: "Crossing the Chasm",
        author: "Geoffrey A. Moore",
        year: "1991",
        note:
          "Still the cleanest way to think about why technically good products stall between early believers and mainstream buyers.",
      },
      {
        title: "The Cold Start Problem",
        author: "Andrew Chen",
        year: "2021",
        note:
          "Network effects without the halo: when they are real, when they are wishful thinking, and how early liquidity actually gets created.",
      },
      {
        title: "The Pharmagellan Guide to Biotech Forecasting and Valuation",
        author: "Frank S. David, Seth Robey, Andrew Matthews",
        year: "2017",
        note:
          "For the biotech-specific math: R&D-stage assets, clinical assumptions, market share, development cost, and valuation without hand-waving.",
      },
    ],
  },
  {
    heading: "Books I keep coming back to",
    description:
      "Medicine, regulation, and the political economy around the work.",
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
  {
    heading: "Ongoing reads",
    description:
      "Trade press and newsletters that help me notice what I would otherwise miss.",
    entries: [
      {
        title: "Endpoints News",
        venue: "endpts.com",
        note:
          "The trade press of choice for biotech operators. The clinical-development beat is reliable; the regulatory beat is reliable enough.",
      },
      {
        title: "STAT — Pharmalot",
        venue: "statnews.com",
        note: "Ed Silverman on pharma regulation. Steady, accurate, occasionally surgical.",
      },
      {
        title: "BioPharma Dive",
        venue: "biopharmadive.com",
        note: "More breadth than Endpoints, less depth. Useful for what I'm not already tracking.",
      },
      {
        title: "Quarter Cap",
        venue: "Substack",
        note:
          "Healthcare investing through a public-markets lens. I disagree with it sometimes. That is the value of it.",
      },
      {
        title: "Bits in Bio",
        venue: "Substack",
        note:
          "Where I learn about what software is actually being used in the lab and the trial. Not a venture newsletter. The signal is in the implementation detail.",
      },
    ],
  },
];
