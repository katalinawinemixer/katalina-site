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
    heading: "Books",
    description:
      "Slow reads, mostly oncology and the operational history of clinical research.",
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
    heading: "Papers, reports, and primary sources",
    description:
      "What I read when I'm forming a view on a regulatory or operational question.",
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
    heading: "Newsletters and ongoing reads",
    description:
      "What lands in my inbox. I read most of them at coffee on Saturdays.",
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
  {
    heading: "Companies I'm watching",
    description:
      "Not investment advice. A list of companies whose operating choices I am paying attention to.",
    entries: [
      {
        title: "Florence Healthcare",
        venue: "Atlanta, GA",
        note:
          "I use their eReg every day. Their trajectory is the canary for whether clinical-trial software can become a real category outside of Veeva.",
      },
      {
        title: "Faro Health",
        venue: "San Diego",
        note:
          "Protocol design tooling. The premise &mdash; that the protocol is the upstream artifact whose quality determines everything downstream &mdash; is correct.",
      },
      {
        title: "Castor",
        venue: "Amsterdam / NYC",
        note:
          "Decentralized-trial infrastructure. Whether their mid-market motion compounds is the bellwether for whether DCT actually fits the operational reality of Phase I-III oncology.",
      },
      {
        title: "Beaker Health",
        venue: "São Paulo",
        note:
          "LatAm-anchored CRO ops. The team I would build a thesis around if I were going to build a thesis around a single regional operator.",
      },
      {
        title: "The next bilingual operator-investor in SF",
        venue: "Wherever they are",
        note: "Will recognize them when I meet them. Probably writing publicly already.",
      },
    ],
  },
];
