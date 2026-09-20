import type { Metadata } from "next";
import Link from "next/link";
import s from "../study.module.css";
import b from "./blog.module.css";
import { featuredPosts, archivePosts } from "../data/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on problem diagnosis, product operations and supply chain systems.",
};

export default function Blog() {
  return (
    <main className={`long ${s.page}`}>
      <header className={s.head}>
        <h1 className={s.title}>Writing</h1>
        <p className={s.lede}>
          Mostly about diagnosis — how problems get framed, and what it costs
          when the frame is wrong. A few on the supply chain and quality
          systems I spent years inside.
        </p>
      </header>

      <section className={b.group}>
        <span className={b.label}>Selected</span>
        {featuredPosts.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className={b.item}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={b.date}>{p.date}</span>
            <h2 className={b.title}>{p.title}</h2>
            <p className={b.blurb}>{p.blurb}</p>
          </a>
        ))}
      </section>

      <section className={b.group}>
        <span className={b.label}>Also</span>
        {archivePosts.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className={b.compact}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={b.compactTitle}>{p.title}</span>
            <span className={b.compactDate}>{p.date}</span>
          </a>
        ))}
      </section>

      <div className={s.next}>
        <Link href="/#work">← Work</Link>
        <Link href="/about">About →</Link>
      </div>
    </main>
  );
}
