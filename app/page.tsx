import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`wrap ${styles.main}`}>
      <header className={`${styles.masthead} reveal`}>
        <div className={styles.name}>Bhagwandas Yadav</div>
        <h1 className={styles.statement}>
          I find the problem everyone else walked past.
        </h1>
        <p className={styles.standing}>
          Eight years building and scaling B2B marketplaces and commerce
          platforms — a 0-to-1 category to ₹1.28Cr GMV, ₹2.2Cr a month in
          recovered losses, a warehouse system across 50 dark stores.
          Healthtech, quick commerce, logistics.
        </p>
      </header>

      <Section label="Teardowns">
        <Entry
          href="/case-studies/meesho"
          title="Meesho, walked as a reseller"
          meta="2026"
          desc="Five chronological breaks in a reseller's sourcing task, including a ₹52-per-unit penalty for buying in bulk. Includes the first version, where I tore down the wrong user entirely."
        />
      </Section>

      <Section label="Product work">
        <Entry
          href="/work/round-up-investing"
          title="Validating Round-Up Investing"
          meta="2026"
          desc="How I'd de-risk a fintech feature before anyone builds it: three falsifiable hypotheses, a staged interview guide, and a design-method session. A validation plan, not a completed study."
        />
      </Section>

      <Section label="Writing">
        <Entry
          external
          href="https://www.linkedin.com/pulse/five-lenses-changed-how-i-solve-problems-why-your-best-yadav-eqj8f/"
          title="The five lenses that changed how I solve problems"
          meta="Oct 2025"
          desc="Networks, evolution, incentives, system dynamics, information flow. The frame you choose determines the solution you find."
        />
        <Entry
          external
          href="https://www.linkedin.com/pulse/i-spent-3-days-solving-wrong-problem-my-manager-knew-bhagwandas-yadav-dkxsf/"
          title="I spent 3 days solving the wrong problem"
          meta="Nov 2025"
          desc="My manager asked whether I'd mapped every possible cause, or only the ones I already believed mattered."
        />
        <Entry
          external
          href="https://www.linkedin.com/pulse/why-arent-we-growing-faster-question-i-kept-getting-wrong-yadav-hk1gf/"
          title="“Why aren't we growing faster?”"
          meta="2025"
          desc="I could run the programme. I could not answer the strategic question underneath it. What closed that gap."
        />
        <Link href="/writing" className={styles.more}>
          All writing →
        </Link>
      </Section>

      <Section label="Work">
        <div className={styles.roles}>
          <Role
            title="Program Manager, Product Marketplace"
            company="Medikabazaar"
            when="2025 — 26"
          />
          <Role
            title="Process Excellence Manager, Product Ops"
            company="Zepto"
            when="2024 — 25"
          />
          <Role
            title="Program Lead, Logistics & Trust"
            company="Udaan"
            when="2021 — 24"
          />
          <Role
            title="City Manager, Growth & Operations"
            company="EatClub"
            when="2018 — 20"
          />
        </div>
      </Section>

      <Section label="Now">
        <div className={styles.now}>
          <p>
            <strong>I own problems end to end</strong> — find the real one,
            build the case for it, ship it across whatever functions it
            touches. At Udaan that meant reading two million shipment
            records until last-mile fraud, not warehouse operations, proved
            to be driving ₹2.5Cr a month in losses. Then quantifying the
            case, proving it in pilot, and rolling tamper-proof tracking
            across 14 warehouses. ₹2.2Cr a month recovered.
          </p>
          <p>
            The pattern repeats. At Medikabazaar the blocker on a new
            category wasn't supply, it was seller financing — so the fix
            was an EMI-led commercial model, not more SKUs. Most roadmaps
            are full of well-built answers to the wrong question. I'm
            useful before the building starts.
          </p>
          <p>
            Now looking for senior product roles in marketplaces and
            commerce, where the hard part is deciding what to build. The
            teardowns and validation work above are the same instinct,
            applied in public.
          </p>
        </div>
      </Section>

      <Section label="Connect">
        <div className={styles.connect}>
          <a href="mailto:yadavbd77@gmail.com">yadavbd77@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/bhagwandas-yadav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sbdyadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="/resume.pdf">Résumé</a>
        </div>
      </Section>

      <footer className={styles.footer}>
        <span>Mumbai, India</span>
        <span>Updated September 2026</span>
      </footer>
    </main>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`${styles.section} reveal`}>
      <h2 className={styles.sectionLabel}>{label}</h2>
      <div className={styles.list}>{children}</div>
    </section>
  );
}

function Entry({
  href,
  title,
  meta,
  desc,
  external,
}: {
  href: string;
  title: string;
  meta: string;
  desc: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <div className={styles.entryHead}>
        <span className={styles.entryTitle}>
          {title}
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </span>
        <span className={styles.entryMeta}>{meta}</span>
      </div>
      <p className={styles.entryDesc}>{desc}</p>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={styles.entry}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={styles.entry}>
      {inner}
    </Link>
  );
}

function Role({
  title,
  company,
  when,
}: {
  title: string;
  company: string;
  when: string;
}) {
  return (
    <div className={styles.role}>
      <span>
        <span className={styles.roleBody}>{title}</span>
        <span className={styles.roleCo}> · {company}</span>
      </span>
      <span className={styles.roleWhen}>{when}</span>
    </div>
  );
}
