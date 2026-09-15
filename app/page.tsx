import Link from "next/link";
import styles from "./page.module.css";
import { work } from "./data/work";
import { featuredPosts } from "./data/posts";

export default function Home() {
  return (
    <main>
      <section className={`shell ${styles.hero} reveal`}>
        <div className={styles.eyebrow}>Product Manager · Mumbai</div>
        <h1 className={styles.statement}>
          I find the problem everyone else walked past.
        </h1>
        <p className={styles.intro}>
          Eight years building and scaling B2B marketplaces and commerce
          platforms across healthtech, quick commerce and logistics. A
          0-to-1 category to ₹1.28Cr GMV. ₹2.2Cr a month in recovered
          losses, found by reading two million shipment records.
        </p>
        <div className={styles.heroLinks}>
          <Link href="/work" className={`${styles.cta} ${styles.ctaPrimary}`}>
            See the work →
          </Link>
          <Link href="/about" className={`${styles.cta} ${styles.ctaGhost}`}>
            About me
          </Link>
        </div>
      </section>

      <section className={`shell ${styles.section} reveal`}>
        <div className={styles.sectionTop}>
          <h2 className={styles.sectionTitle}>Selected work</h2>
          <Link href="/work" className={styles.sectionMore}>
            All work →
          </Link>
        </div>
        <div className={styles.cards}>
          {work.map((w) => (
            <Link key={w.slug} href={`/work/${w.slug}`} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.chip}>{w.kind}</span>
                <span className={styles.cardYear}>{w.year}</span>
              </div>
              <h3 className={styles.cardTitle}>{w.title}</h3>
              <p className={styles.cardDesc}>{w.summary}</p>
              <div className={styles.cardStats}>
                {w.stats.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <span className={styles.statN}>{s.n}</span>
                    <span className={styles.statL}>{s.label}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={`shell ${styles.section} reveal`}>
        <div className={styles.sectionTop}>
          <h2 className={styles.sectionTitle}>From the blog</h2>
          <Link href="/blog" className={styles.sectionMore}>
            All posts →
          </Link>
        </div>
        <div className={styles.posts}>
          {featuredPosts.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className={styles.post}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.postTitle}>{p.title}</span>
              <span className={styles.postDate}>{p.date}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
