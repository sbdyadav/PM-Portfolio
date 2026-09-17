import Link from "next/link";
import styles from "./Hero.module.css";
import { companies } from "../data/companies";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.col}>
        <div className={styles.eyebrowRow}>
          <span className={styles.rule} />
          <span className={styles.eyebrowText}>
            Product · Marketplaces &amp; commerce · Mumbai
          </span>
        </div>

        <h1 className={styles.statement}>
          I&apos;m Bhagwandas. Most roadmaps I&apos;ve inherited were full of
          well-built answers to the wrong question — so I&apos;ve made a habit
          of going back to the question.
        </h1>

        <p className={styles.para}>
          At Udaan, a ₹2.5Cr-a-month loss everyone called a warehouse problem
          turned out, two million shipment records later, to be last-mile
          fraud. Fixing it recovered ₹2.2Cr a month. At Medikabazaar, a
          category that looked short on supply was actually short on seller
          financing — so we shipped an EMI model, not more SKUs.
        </p>

        <p className={styles.close}>
          Eight years, four companies, same instinct — a 0-to-1 category
          charter, a warehouse system across 50 dark stores, a fraud fix
          across 14. If you&apos;re still deciding what to build, that&apos;s
          the conversation I want.
        </p>

        <div className={styles.logos}>
          {companies.map((c) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={c.key}
              src={c.logo}
              alt={c.name}
              className={styles.logoImg}
              style={{ height: c.cap }}
            />
          ))}
        </div>

        <Link href="/#work" className={styles.driver}>
          Two teardowns below — including the one where I got the user wrong
          first <span aria-hidden="true">↓</span>
        </Link>
      </div>

      <div className={styles.portrait}>
        <a
          href="https://www.linkedin.com/in/bhagwandas-yadav"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.plate}
          aria-label="Bhagwandas Yadav on LinkedIn"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photo.jpg"
            alt="Bhagwandas Yadav"
            className={styles.photo}
            width={360}
            height={450}
          />
        </a>
      </div>
    </section>
  );
}
