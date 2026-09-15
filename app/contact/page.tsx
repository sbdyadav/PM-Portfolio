import type { Metadata } from "next";
import s from "../study.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — email, LinkedIn, GitHub, and a downloadable résumé.",
};

const channels = [
  {
    label: "Email",
    value: "yadavbd77@gmail.com",
    href: "mailto:yadavbd77@gmail.com",
    note: "Best for anything substantial. I reply to everything that isn't a template.",
  },
  {
    label: "LinkedIn",
    value: "in/bhagwandas-yadav",
    href: "https://www.linkedin.com/in/bhagwandas-yadav/",
    note: "Where the writing gets published first.",
    external: true,
  },
  {
    label: "GitHub",
    value: "sbdyadav",
    href: "https://github.com/sbdyadav",
    note: "This site lives here, along with older data-science work.",
    external: true,
  },
];

export default function Contact() {
  return (
    <main className={`narrow ${s.page}`}>
      <header className={s.head}>
        <h1 className={s.title}>Contact</h1>
        <p className={s.standfirst}>
          Open to senior product roles in marketplaces and commerce — and
          happy to talk to founders who think they might be building the
          wrong thing.
        </p>
      </header>

      <div className={styles.channels}>
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className={styles.channel}
            {...(c.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <div className={styles.channelLabel}>{c.label}</div>
            <div className={styles.channelValue}>{c.value}</div>
            <div className={styles.channelNote}>{c.note}</div>
          </a>
        ))}
      </div>

      <section className={styles.resume}>
        <div>
          <h2 className={styles.resumeTitle}>Résumé</h2>
          <p className={styles.resumeNote}>
            Two pages, everything quantified. The longer version of what the{" "}
            about page covers.
          </p>
        </div>
        <a href="/resume.pdf" className={styles.resumeBtn} download>
          ↓ Download PDF
        </a>
      </section>

      <div className={s.body}>
        <p className={styles.location}>Based in Mumbai, India · IST (UTC+5:30)</p>
      </div>
    </main>
  );
}
