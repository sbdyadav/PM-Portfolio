import Link from "next/link";
import Hero from "./components/Hero";
import styles from "./page.module.css";

const cards = [
  {
    num: "01",
    kicker: "Teardown",
    href: "/work/meesho-reseller-teardown",
    title: "Meesho, walked as a reseller",
    summary:
      "Five chronological breaks in a reseller's sourcing task, including a ₹52-per-unit penalty for buying in bulk. It also carries the first version, where I tore down the wrong user entirely — and what that changed.",
    cta: "Read the teardown",
  },
  {
    num: "02",
    kicker: "Validation",
    href: "/work/round-up-investing",
    title: "Validating Round-Up Investing",
    summary:
      "A fintech brief taken end to end before a line of code: three falsifiable hypotheses, six users recruited from 268 registrations, a staged interview guide, and a design-method session built to catch what interviews can't.",
    cta: "Read the plan",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="work" className={`container ${styles.work}`} data-reveal>
        <div className={styles.head}>
          <span className={styles.headLabel}>Selected work</span>
          <span className={styles.headYear}>2026</span>
        </div>

        {cards.map((c) => (
          <Link key={c.num} href={c.href} className={styles.card}>
            <span className={styles.num}>{c.num}</span>
            <div>
              <span className={styles.kicker}>{c.kicker}</span>
              <h2 className={styles.cardTitle}>{c.title}</h2>
              <p className={styles.cardSummary}>{c.summary}</p>
              <span className={styles.readOn}>{c.cta}</span>
            </div>
          </Link>
        ))}
      </section>

      <section id="contact" className={`container ${styles.contact}`} data-reveal>
        <div className={styles.contactCol}>
          <p className={styles.contactLine}>
            If you&apos;re still deciding what to build, I&apos;d like to hear
            about it.
          </p>
          <a href="mailto:yadavbd77@gmail.com" className={styles.email}>
            yadavbd77@gmail.com
          </a>
          <div className={styles.row}>
            <a
              href="https://www.linkedin.com/in/bhagwandas-yadav/"
              className={styles.rowLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sbdyadav"
              className={styles.rowLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className={styles.async}>
          Mumbai, IST — four and a half hours of overlap with London.
          Everything above was written to be picked up and run by someone who
          wasn&apos;t in the room.
        </p>

        <div className={styles.resume}>
          <span className={styles.headLabel}>Resume</span>
          <div className={styles.resumeRow}>
            <a href="/resume.pdf" className={styles.btn} download>
              Download PDF ↓
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
