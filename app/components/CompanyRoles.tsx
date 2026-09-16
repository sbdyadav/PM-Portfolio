"use client";

import { useState } from "react";
import styles from "./CompanyRoles.module.css";
import { companies, CompanyKey } from "../data/companies";

export default function CompanyRoles() {
  const [co, setCo] = useState<CompanyKey | null>(null);
  const active = companies.find((c) => c.key === co) ?? null;

  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        {companies.map((c) => (
          <button
            key={c.key}
            type="button"
            className={`${styles.btn} ${co === c.key ? styles.on : ""}`}
            onMouseEnter={() => setCo(c.key)}
            onMouseLeave={() => setCo(null)}
            onFocus={() => setCo(c.key)}
            onClick={() => setCo(co === c.key ? null : c.key)}
            aria-label={`${c.role} at ${c.name}`}
            aria-expanded={co === c.key}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.logo}
              alt={c.name}
              className={styles.logo}
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
          </div>
        ) : (
          <p className={styles.hint}>
            Four companies. Pick a mark to see what I owned there.
          </p>
        )}
      </div>
    </div>
  );
}
