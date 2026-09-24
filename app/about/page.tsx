import type { Metadata } from "next";
import Link from "next/link";
import s from "../study.module.css";
import styles from "./about.module.css";
import CompanyRoles from "../components/CompanyRoles";

export const metadata: Metadata = {
  title: "About",
  description:
    "Eight years across B2B marketplaces, quick commerce and logistics — and what I'm looking for next.",
  alternates: { canonical: "/about" }
};


const certifications = [
  {
    name: "Supply Chain Operations Professional",
    body: "CSCMP",
    year: "2025",
  },
  {
    name: "Project Management Professional",
    body: "Google",
    year: "2024",
  },
  {
    name: "Strategic Management & Operations",
    body: "IIM Bangalore",
    year: "2023",
  },
  { name: "Lean Six Sigma Green Belt", body: "", year: "" },
];

export default function About() {
  return (
    <main className={`long ${s.page}`}>
      <header className={s.head}>
        <h1 className={`${s.title} ${s.titleAbout}`}>About</h1>
        <p className={s.lede}>
          I own problems end to end — find the real one, build the case for
          it, and ship it across whatever functions it touches.
        </p>
      </header>

      <div className={s.body}>
        <p>
          At Udaan that meant reading two million shipment records until
          last-mile fraud, not warehouse operations, proved to be driving
          ₹2.5Cr a month in losses. Then quantifying the case, proving it in
          pilot, and rolling tamper-proof tracking across 14 warehouses.
          ₹2.2Cr a month recovered.
        </p>
        <p>
          The pattern repeats. At Medikabazaar the blocker on a new category
          wasn&apos;t supply, it was seller financing — so the fix was an
          EMI-led commercial model, not more SKUs. Most roadmaps are full of
          well-built answers to the wrong question.{" "}
          <strong>I&apos;m useful before the building starts.</strong>
        </p>
        <p>
          Now looking for senior product roles in marketplaces and commerce,
          where the hard part is deciding what to build rather than how. The{" "}
          <Link href="/#work">teardowns and validation work</Link> are the
          same instinct, applied in public — including the parts I got
          wrong.
        </p>

      </div>

      <CompanyRoles />

      <div className={s.body}>
        <h2>Education</h2>
      </div>

      <div className={styles.stack}>
        <div className={styles.stackRow}>
          <span className={styles.stackMain}>B.E. Mechanical Engineering</span>
          <span className={styles.stackSub}>
            Savitribai Phule Pune University
          </span>
          <span className={styles.stackYear}>2016</span>
        </div>
      </div>

      <div className={s.body}>
        <h2>Certifications</h2>
      </div>

      <div className={styles.stack}>
        {certifications.map((c) => (
          <div key={c.name} className={styles.stackRow}>
            <span className={styles.stackMain}>{c.name}</span>
            <span className={styles.stackSub}>{c.body}</span>
            <span className={styles.stackYear}>{c.year}</span>
          </div>
        ))}
      </div>

      <div className={s.body}>

        <h2>Elsewhere</h2>
        <p>
          The <Link href="/blog">blog</Link> is mostly about diagnosis. If
          you want the compressed version,{" "}
          <a href="/resume.pdf">the résumé is here</a>, or{" "}
          <Link href="/#contact">get in touch</Link>.
        </p>
      </div>

      <div className={s.next}>
        <Link href="/#work">← Work</Link>
        <Link href="/#contact">Contact →</Link>
      </div>
    </main>
  );
}
