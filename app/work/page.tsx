import type { Metadata } from "next";
import Link from "next/link";
import s from "../study.module.css";
import styles from "../page.module.css";
import { work } from "../data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product teardowns and validation work — diagnosis, evidence and the fix, written out in full.",
};

export default function Work() {
  return (
    <main className={`shell ${s.page}`}>
      <header className={s.head}>
        <h1 className={s.title}>Work</h1>
        <p className={s.standfirst}>
          Teardowns and validation work, written out in full rather than
          summarised. Each one includes the reasoning I&apos;d defend in a
          room, the evidence behind it, and where I think I could be wrong.
          Both are downloadable as PDFs.
        </p>
      </header>

      <div className={styles.cards}>
        {work.map((w) => (
          <Link key={w.slug} href={`/work/${w.slug}`} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.chip}>{w.kind}</span>
              <span className={styles.cardYear}>{w.year}</span>
            </div>
            <h2 className={styles.cardTitle}>{w.title}</h2>
            <p className={styles.cardDesc}>{w.summary}</p>
            <div className={styles.cardStats}>
              {w.stats.map((st) => (
                <div key={st.label} className={styles.stat}>
                  <span className={styles.statN}>{st.n}</span>
                  <span className={styles.statL}>{st.label}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
