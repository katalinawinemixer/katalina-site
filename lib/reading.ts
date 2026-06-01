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
        title: "Cracking the Coding Interview",
        author: "Gayle Laakmann McDowell",
        year: "2015",
        note:
          "Open for implementation practice: data structures, algorithms, tradeoffs, and the syntax fluency I am building alongside shipped product work.",
      },
    ],
  },
  {
    heading: "To read",
    entries: [
      {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        year: "2017",
        note:
          "Next for systems thinking: storage, data models, distributed systems, reliability, and the architecture choices behind products that need to be trusted.",
      },
      {
        title: "Building Secure and Reliable Systems",
        author: "Heather Adkins, Betsy Beyer, Paul Blankinship, Piotr Lewandowski, Ana Oprea, Adam Stubblefield",
        year: "2020",
        note:
          "A practical bridge between security and reliability: designing systems that handle failure, access, privacy, operational risk, and recovery deliberately.",
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
