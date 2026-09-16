import type { Metadata } from "next";
import Link from "next/link";
import s from "../study.module.css";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Eight years across B2B marketplaces, quick commerce and logistics — and what I'm looking for next.",
};

const roles = [
  {
    title: "Program Manager, Product Marketplace",
    company: "Medikabazaar",
    sector: "Healthtech",
    when: "Jan 2025 — Jul 2026",
    scope: "Owned a 0-to-1 product charter, scaling a new marketplace category to ₹1.28Cr GMV.",
    points: [
      "Launched an ophthalmology marketplace category to ₹1.28Cr GMV by identifying seller financing — not supply — as the true adoption blocker, then building an EMI-led commercial model with Siemens Financial Services.",
      "Onboarded 12 OEM partners and 200+ SKUs against a prioritised category roadmap.",
      "Shipped a CRM-integrated AI lead-qualification workflow, cutting unqualified enquiries by 80%.",
      "Launched automated fulfilment exception monitoring, cutting supplier turnaround time 50% at 92% SLA adherence.",
    ],
  },
  {
    title: "Process Excellence Manager, Product Operations",
    company: "Zepto",
    sector: "Quick commerce",
    when: "Jul 2024 — Jan 2025",
    scope: "Owned Warehouse Management System delivery across 50 dark stores.",
    points: [
      "Led end-to-end WMS rollout across 50 dark stores, improving order accuracy from 97.2% to 98.8% and picker productivity by 18%.",
      "Drove adoption across 200+ users through UAT and workflow validation without disrupting live orders.",
      "Defined rollout playbooks that took 18 new dark stores to 100% Day-1 SLA.",
      "Sustained 98.1% on-time delivery through 2.5x demand spikes via contingency planning.",
    ],
  },
  {
    title: "Program Lead, Logistics & Trust",
    company: "Udaan.com",
    sector: "B2B marketplace",
    when: "Jul 2021 — Feb 2024",
    scope: "Cut Return-to-Origin losses by ₹2.2Cr/month through product-led discovery.",
    points: [
      "Identified last-mile fraud as the root cause of ₹2.5Cr/month RTO losses by analysing 2M+ shipment records.",
      "Built the business case for tamper-proof tracking — quantified impact, proved it in pilot, secured approval for phased national rollout.",
      "Drove delivery across 14 warehouses, reducing monthly RTO losses from ₹2.5Cr to ₹30L.",
      "Replaced manual reporting with real-time Power BI dashboards, improving last-mile speed 20% and cutting escalations 30%.",
    ],
  },
  {
    title: "City Manager, Growth & Operations",
    company: "EatClub",
    sector: "D2C food commerce",
    when: "Jan 2018 — Sep 2020",
    scope: "Scaled consumer growth and operations across a multi-outlet business.",
    points: [
      "Scaled city revenue from ₹4Cr to ₹5Cr/month by launching a new consumer brand across 33 outlets.",
      "Grew single-outlet revenue from ₹12L to ₹23L/month within six months.",
      "Built automated demand forecasting across 33 outlets, cutting food wastage from 9% to 8% of revenue.",
    ],
  },
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

        <h2>Experience</h2>
      </div>

      <div className={styles.roles}>
        {roles.map((r) => (
          <article key={r.company} className={styles.role}>
            <div className={styles.roleHead}>
              <div>
                <h3 className={styles.roleTitle}>{r.title}</h3>
                <div className={styles.roleCo}>
                  {r.company} · {r.sector}
                </div>
              </div>
              <span className={styles.roleWhen}>{r.when}</span>
            </div>
            <p className={styles.roleScope}>{r.scope}</p>
            <ul className={styles.roleList}>
              {r.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className={s.body}>
        <h2>Education &amp; certifications</h2>
        <p>
          B.E. Mechanical Engineering, Savitribai Phule Pune University
          (2016).
        </p>
        <p>
          Google Project Management Professional (2024) · CSCMP Supply Chain
          Operations Professional (2025) · Strategic Management &amp;
          Operations, IIM Bangalore (2023) · Lean Six Sigma Green Belt.
        </p>

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
