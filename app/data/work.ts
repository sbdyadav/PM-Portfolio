export type WorkItem = {
  slug: string;
  kind: string;
  year: string;
  title: string;
  summary: string;
  stats: { n: string; label: string }[];
};

export const work: WorkItem[] = [
  {
    slug: "meesho-reseller-teardown",
    kind: "Teardown",
    year: "2026",
    title: "Meesho, walked as a reseller",
    summary:
      "Five chronological breaks in a reseller's sourcing task — including a ₹52-per-unit penalty for buying in bulk. Includes the first version, where I tore down the wrong user entirely.",
    stats: [
      { n: "5", label: "breaks traced" },
      { n: "₹52", label: "per-unit penalty, verified" },
      { n: "2", label: "versions, one wrong" },
    ],
  },
  {
    slug: "round-up-investing",
    kind: "Validation",
    year: "2026",
    title: "Validating Round-Up Investing",
    summary:
      "A fintech feature brief taken end to end before a line of code: three falsifiable hypotheses, six recruited users, a staged interview guide and a design-method session built to catch what interviews can't.",
    stats: [
      { n: "3", label: "falsifiable hypotheses" },
      { n: "6", label: "users, 268 to recruit" },
      { n: "2", label: "methods, deliberately paired" },
    ],
  },
];
