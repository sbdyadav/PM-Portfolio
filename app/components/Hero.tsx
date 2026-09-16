"use client";

import { useState } from "react";
import styles from "./Hero.module.css";
import { companies, CompanyKey } from "../data/companies";

export default function Hero() {
  const [co, setCo] = useState<CompanyKey | null>(null);
  const active = companies.find((c) => c.key === co) ?? null;

  return (
    <section className={styles.hero}>
      <div className={styles.col}>
        <div className={styles.eyebrowRow}>
          <span className={styles.rule} />
          <span className={styles.eyebrowText}>Product manager · Mumbai</span>
        </div>

        <h1 className={styles.statement}>
          I&apos;m Bhagwandas. Most roadmaps I&apos;ve inherited were full of
          well-built answers to the wrong question — so I&apos;ve made a habit
          of going back to the question.
        </h1>

        <p className={styles.para}>
          At Udaan, a ₹2.5Cr-a-month loss everyone called a warehouse problem
          turned out, two million shipment records later, to be last-mile
          fraud. At Medikabazaar, a category that looked short on supply was
          actually short on seller financing — so we shipped an EMI model, not
          more SKUs.
        </p>

        <p className={styles.close}>
          Eight years, four companies, same instinct. If you&apos;re still
          deciding what to build, that&apos;s the conversation I want.
        </p>

        <div className={styles.logos}>
          {companies.map((c) => (
            <button
              key={c.key}
              type="button"
              className={`${styles.logoBtn} ${co === c.key ? styles.on : ""}`}
              onMouseEnter={() => setCo(c.key)}
              onFocus={() => setCo(c.key)}
              onClick={() => setCo(co === c.key ? null : c.key)}
              aria-expanded={co === c.key}
              aria-label={`${c.name} — ${c.role}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.logo}
                alt={c.name}
                className={styles.logoImg}
                style={{ height: c.cap }}
              />
            </button>
          ))}
        </div>

        <div className={styles.slot}>
          {active ? (
            <div className={styles.pop}>
              <div className={styles.popTop}>
                <span className={styles.popRole}>{active.role}</span>
                <span className={styles.popDates}>{active.dates}</span>
              </div>
              <div className={styles.popSector}>{active.sector}</div>
              <div className={styles.popBullets}>
                {active.bullets.map((b, i) => (
                  <div key={i} className={styles.popRow}>
                    <span className={styles.dash} aria-hidden="true">
                      —
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <a href="/resume.pdf" className={styles.popLink} download>
                The full resume — PDF ↓
              </a>
            </div>
          ) : (
            <p className={styles.hint}>
              Four companies. Hover one to see what I owned there.
            </p>
          )}
        </div>
      </div>

      <div className={styles.portrait}>
        <div className={styles.plate}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photo.jpg"
            alt="Bhagwandas Yadav"
            className={styles.photo}
            width={360}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}
