import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={`wrap ${styles.hero}`}>
        <div className={styles.eyebrow}>Available for new opportunities</div>
        <div className={styles.kickerRow}>
          <img
            src="/photo.jpg"
            alt="Bhagwandas Yadav"
            className={styles.avatar}
          />
          <div className={styles.kicker}>Bhagwandas Yadav</div>
        </div>
        <h1 className={styles.h1}>
          I&apos;ve built systems that recovered{" "}
          <em className={styles.em}>₹2.2Cr/month</em> in losses and moved{" "}
          <em className={styles.em}>2M+ shipment records</em> — by finding
          the one broken assumption everyone else walked past.
        </h1>
        <p className={styles.lede}>
          Product-minded program manager, 8 years across B2B healthtech,
          quick commerce, and logistics. I turn ambiguous 0-to-1 problems
          into shipped, measured systems.
        </p>
        <div className={styles.metaRow}>
          <span>Mumbai, India</span>
          <span>yadavbd77@gmail.com</span>
          <span>+91-7709797679</span>
        </div>
        <div className={styles.links}>
          <a href="/resume.pdf" className={`${styles.btn} ${styles.primary}`}>
            Download résumé
          </a>
          <a
            href="https://www.linkedin.com/in/bhagwandas-yadav/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.ghost}`}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sbdyadav"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.ghost}`}
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="wrap">
        <div className={styles.impact}>
          <div className={styles.cell}>
            <span className={styles.num}>2M+</span>
            <span className={styles.label}>
              shipment records analyzed to find a fraud pattern others missed
            </span>
          </div>
          <div className={styles.cell}>
            <span className={styles.num}>₹2.2Cr/mo</span>
            <span className={styles.label}>
              in RTO losses eliminated at Udaan
            </span>
          </div>
          <div className={styles.cell}>
            <span className={styles.num}>50</span>
            <span className={styles.label}>
              dark stores migrated to a new WMS, zero downtime
            </span>
          </div>
          <div className={styles.cell}>
            <span className={styles.num}>0→1</span>
            <span className={styles.label}>
              marketplace categories built from scratch, twice
            </span>
          </div>
        </div>
      </div>

      <section className={styles.block}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Experience</h2>
          </div>

          <Role
            when="Jan 2025 — present"
            title="Program Manager, Product Marketplace"
            company="Medikabazaar · Healthtech"
            bullets={[
              "Built an ophthalmology marketplace category from ₹0 to ₹1.28Cr GMV by identifying financing, not supply, as the real adoption blocker — then launching an EMI-led model with Siemens Financial Services",
              "Onboarded 12 OEM partners and 200+ SKUs across six sub-categories against a prioritised roadmap",
              "Built an AI lead-qualification workflow that cut 100–150 daily enquiries down to 20–30 qualified opportunities",
            ]}
          />
          <Role
            when="Jul 2024 — Jan 2025"
            title="Process Excellence Manager, Product Operations"
            company="Zepto · Quick commerce"
            bullets={[
              "Led WMS rollout across 50 dark stores, raising order accuracy from 97.2% to 98.8% and picker productivity by 18%",
              "Defined rollout playbooks that took 18 new dark stores to 100% Day-1 SLA",
              "Sustained 98.1% on-time delivery through 2.5x demand spikes via contingency planning",
            ]}
          />
          <Role
            when="Jul 2021 — Feb 2024"
            title="Program Lead, Logistics & Trust"
            company="Udaan.com · B2B marketplace"
            bullets={[
              "Identified last-mile fraud as the root cause of ₹2.5Cr/month RTO losses by analysing 2M+ shipment records",
              "Led delivery of a tamper-proof tracking rollout across 14 warehouses, cutting losses to ₹30L/month — ₹2.2Cr/month in recovered impact",
            ]}
          />
          <Role
            when="Jan 2018 — Sep 2020"
            title="City Manager, Growth & Operations"
            company="EatClub · D2C food commerce"
            bullets={[
              "Scaled city revenue from ₹4Cr to ₹5Cr/month launching a new brand across 33 outlets",
              "Cut food wastage from 9% to 8% of revenue via automated demand forecasting",
            ]}
          />
        </div>
      </section>

      <section className={styles.block}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Case studies</h2>
            <span className={styles.count}>2 published</span>
          </div>

          <div className={styles.studies}>
            <Link href="/case-studies/meesho" className={styles.study}>
              <span className={styles.tag}>Reseller economics · Meesho</span>
              <p className={styles.hook}>
                Three individually reasonable product decisions, stacked
                together, quietly work against Meesho&apos;s own reseller
                base.
              </p>
              <p className={styles.storyline}>
                I walked Meesho&apos;s app as Sunita — a first-year reseller
                in Nagpur who runs her business on WhatsApp and still
                prefers cash on delivery — not as a first-time buyer. Five
                chronological breaks emerged: no resale-demand signal on
                the grid, no way to add more than one item without a full
                checkout detour, reseller status asked only after every
                decision is made, per-unit price rising instead of holding
                at higher quantity, and COD blocked at the exact moment
                she&apos;s already collected her customer&apos;s cash.
              </p>
              <div className={styles.dataRow}>
                <Stat n="5" l="chronological breaks traced" />
                <Stat n="₹52/unit" l="price penalty at qty 2, verified" />
                <Stat n="3" l="fixes, sequenced by build order" />
              </div>
              <span className={styles.read}>Read the full teardown →</span>
            </Link>

            <div className={styles.study}>
              <span className={styles.tag}>Trust &amp; fraud · Udaan</span>
              <p className={styles.hook}>
                Every RTO dashboard said the numbers were normal. They
                weren&apos;t asking the right question.
              </p>
              <p className={styles.storyline}>
                Return-to-origin losses sat inside an &quot;acceptable
                range&quot; for months — until 2M+ shipment records
                surfaced a pattern no aggregate metric could show:
                last-mile fraud, not warehouse operations, was the real
                driver of ₹2.5Cr/month in losses. The fix was a
                tamper-proof tracking system, piloted, proven, then rolled
                out across 14 warehouses.
              </p>
              <div className={styles.dataRow}>
                <Stat n="2M+" l="shipment records analyzed" />
                <Stat n="₹2.2Cr/mo" l="business impact recovered" />
                <Stat n="14" l="warehouses rolled out" />
              </div>
              <span className={styles.read}>Full write-up coming soon</span>
            </div>

            <div className={`${styles.study} ${styles.placeholder}`}>
              Next teardown — in progress
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.block} ${styles.noBorder}`}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Skills</h2>
          </div>
          <div className={styles.skillGroups}>
            <SkillGroup
              title="Product"
              chips={[
                "Product discovery",
                "Opportunity assessment",
                "Roadmap planning",
                "Backlog prioritisation",
                "Business case development",
                "Go-to-market",
              ]}
            />
            <SkillGroup
              title="Domain"
              chips={[
                "B2B marketplace",
                "Healthtech",
                "Quick commerce",
                "Supply chain & WMS",
                "Trust & fraud prevention",
                "Category management",
              ]}
            />
            <SkillGroup
              title="Analytics & tools"
              chips={[
                "SQL",
                "Python",
                "Power BI",
                "Tableau",
                "Funnel & cohort analysis",
                "Jira",
              ]}
            />
          </div>

          <div className={styles.certBlock}>
            <h4 className={styles.certLabel}>Certifications</h4>
            <div className={styles.chips}>
              <span className={styles.chip}>
                Google Project Management Professional
              </span>
              <span className={styles.chip}>
                CSCMP Supply Chain Operations Professional
              </span>
              <span className={styles.chip}>Lean Six Sigma Green Belt</span>
              <span className={styles.chip}>
                Strategic Management &amp; Operations — IIM Bangalore
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <footer className={styles.footer}>
          <span>Bhagwandas Yadav — Mumbai</span>
          <span>Updated September 2026</span>
        </footer>
      </div>
    </>
  );
}

function Role({
  when,
  title,
  company,
  bullets,
}: {
  when: string;
  title: string;
  company: string;
  bullets: string[];
}) {
  return (
    <div className={styles.role}>
      <div className={styles.when}>{when}</div>
      <div>
        <h3 className={styles.roleTitle}>{title}</h3>
        <div className={styles.company}>{company}</div>
        <ul className={styles.roleList}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statN}>{n}</span>
      <span className={styles.statL}>{l}</span>
    </div>
  );
}

function SkillGroup({ title, chips }: { title: string; chips: string[] }) {
  return (
    <div>
      <h4 className={styles.skillGroupTitle}>{title}</h4>
      <div className={styles.chips}>
        {chips.map((c) => (
          <span className={styles.chip} key={c}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
