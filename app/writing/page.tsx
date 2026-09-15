import type { Metadata } from "next";
import Link from "next/link";
import s from "../prose.module.css";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Writing — Bhagwandas Yadav",
  description:
    "Essays on problem diagnosis, product operations and supply chain systems.",
};

const featured = [
  {
    href: "https://www.linkedin.com/pulse/five-lenses-changed-how-i-solve-problems-why-your-best-yadav-eqj8f/",
    title: "The five lenses that changed how I solve problems",
    meta: "Oct 2025",
    desc: "Networks, evolution, incentives, system dynamics, information flow. A venture firm raised its veto threshold from two partners to three — and people became more willing to object, not less.",
  },
  {
    href: "https://www.linkedin.com/pulse/i-spent-3-days-solving-wrong-problem-my-manager-knew-bhagwandas-yadav-dkxsf/",
    title: "I spent 3 days solving the wrong problem",
    meta: "Nov 2025",
    desc: "Three days on an order fulfilment slowdown, and the real cause was a communication gap between sales and operations I never mapped.",
  },
  {
    href: "https://www.linkedin.com/pulse/why-arent-we-growing-faster-question-i-kept-getting-wrong-yadav-hk1gf/",
    title: "“Why aren't we growing faster?”",
    meta: "2025",
    desc: "I could run the programme. I could not answer the strategic question underneath it. What closed that gap.",
  },
];

const archive = [
  {
    href: "https://www.linkedin.com/pulse/hidden-foundation-six-sigma-success-deep-dive-system-analysis-yadav-25raf/",
    title: "The hidden foundation of Six Sigma success",
    meta: "Jul 2025",
    desc: "An aerospace manufacturer spent $2.3M chasing a 23% defect rate. The measurement system was generating 60% of the variation — the real rate was 9%.",
  },
  {
    href: "https://www.linkedin.com/pulse/21-trillion-procurement-revolution-why-90-companies-still-yadav-vkyxc/",
    title: "The $2.1 trillion procurement revolution",
    meta: "Jul 2025",
    desc: "Should-cost analysis, total cost of ownership, and why the cheaper machine cost 60% more a year.",
  },
  {
    href: "https://www.linkedin.com/pulse/why-your-supply-chain-needs-risk-management-playbook-how-yadav-voarf/",
    title: "Why your supply chain needs a risk management playbook",
    meta: "Aug 2025",
    desc: "Five risk categories, and the financial questions that decide how much prevention is worth buying.",
  },
  {
    href: "https://www.linkedin.com/pulse/resilient-supply-chain-playbook-why-your-next-crisis-response-yadav-ry1gf/",
    title: "The resilient supply chain playbook",
    meta: "Aug 2025",
    desc: "Relationship architecture, cultural DNA, network design — and why resilience is a profit centre rather than a cost.",
  },
];

export default function Writing() {
  return (
    <main className={`wrap ${s.page}`}>
      <Link href="/" className={s.back}>
        ← Bhagwandas Yadav
      </Link>

      <header className={s.head}>
        <h1 className={s.title}>Writing</h1>
        <p className={s.standfirst}>
          Mostly about diagnosis — how problems get framed, and what it
          costs when the frame is wrong. A few on the supply chain and
          quality systems I spent years inside.
        </p>
      </header>

      <Group label="Selected" items={featured} />
      <Group label="More" items={archive} />

      <footer className={s.footer}>
        <Link href="/">← Back</Link>
        <span>Published on LinkedIn</span>
      </footer>
    </main>
  );
}

function Group({
  label,
  items,
}: {
  label: string;
  items: { href: string; title: string; meta: string; desc: string }[];
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionLabel}>{label}</h2>
      <div className={styles.list}>
        {items.map((a) => (
          <a
            key={a.href}
            href={a.href}
            className={styles.entry}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.entryHead}>
              <span className={styles.entryTitle}>
                {a.title}
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </span>
              <span className={styles.entryMeta}>{a.meta}</span>
            </div>
            <p className={styles.entryDesc}>{a.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
