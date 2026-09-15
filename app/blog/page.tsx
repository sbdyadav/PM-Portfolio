import type { Metadata } from "next";
import s from "../study.module.css";
import styles from "../page.module.css";
import { featuredPosts, archivePosts, Post } from "../data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays on problem diagnosis, product operations and supply chain systems.",
};

export default function Blog() {
  return (
    <main className={`shell ${s.page}`}>
      <header className={s.head}>
        <h1 className={s.title}>Blog</h1>
        <p className={s.standfirst}>
          Mostly about diagnosis — how problems get framed, and what it
          costs when the frame is wrong. A few on the supply chain and
          quality systems I spent years inside. Published on LinkedIn.
        </p>
      </header>

      <Group label="Selected" posts={featuredPosts} />
      <Group label="More" posts={archivePosts} />
    </main>
  );
}

function Group({ label, posts }: { label: string; posts: Post[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTop}>
        <h2 className={styles.sectionTitle}>{label}</h2>
      </div>
      <div className={styles.cards}>
        {posts.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.cardTop}>
              <span className={styles.cardYear}>{p.date}</span>
            </div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
