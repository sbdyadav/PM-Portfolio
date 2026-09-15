import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "The Meesho reseller teardown — Bhagwandas Yadav",
  description:
    "Walking Meesho's app as a reseller, not a buyer: five chronological breaks and a sequenced fix, verified against real screenshots.",
};

export default function MeeshoTeardown() {
  return (
    <>
      <div className="wrap">
        <Link href="/" className={styles.back}>
          ← Back to portfolio
        </Link>
      </div>

      {/* Cover */}
      <section className={`wrap ${styles.cover}`}>
        <span className={styles.tag}>Reseller economics · Meesho</span>
        <h1 className={styles.title}>
          Three reasonable decisions, stacked together, work against
          Meesho&apos;s own resellers
        </h1>
        <p className={styles.thesis}>
          This isn&apos;t a list of bugs. It&apos;s a chronological account
          of where a real reseller&apos;s task breaks, and why — walked
          step by step, verified against the actual app.
        </p>

        <div className={styles.personaCard}>
          <div className={styles.personaName}>Sunita, 34 — Nagpur</div>
          <p className={styles.personaDesc}>
            First year reselling on Meesho. Runs her whole business on
            WhatsApp. Doesn&apos;t fully trust online payments — still
            prefers cash on delivery. Buys to resell to 15–20 regular
            customers in her building and her family group.
          </p>
          <div className={styles.jtbd}>
            <strong>Her job, this session:</strong> find 5 products she&apos;s
            confident her customers will reorder, and share them to her
            WhatsApp group without looking unprofessional.
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <StepSection
        num={1}
        title="Finding five shareable products"
        evidence="Observed in walkthrough"
        scene="Sunita opens the app to find 5 products worth sharing."
        body="The grid has no signal for what's actually selling — no resale-demand indicator, nothing showing what's trending by category or region. She can't tell a safe bet from a one-time novelty item without opening each product individually."
        steelman="The grid is optimized for a browsing first-time buyer's discovery, not a reseller's sourcing decision — that's a reasonable default for Meesho's majority audience."
        critique="A reseller's core task is exactly the thing this grid gives no support for."
        fix="This is the moment Sunita's own fix appears: a profile-level Reseller toggle, in the spirit of Uber's Personal/Business switch. Left off, the grid behaves exactly as it does today. Switched on, the grid reorders around resale-demand signals — what's moving fast, by category and region — so she can shortlist in minutes."
        verdict="Add"
        screenshot="/case-studies/meesho/s0-home.jpeg"
        screenshotAlt="Meesho home screen with product grid, no resale-demand signal visible"
      />

      {/* Step 2 */}
      <StepSection
        num={2}
        title="Trying to add more than one product"
        evidence="Verified — screenshot"
        scene="Having found a product, Sunita tries to add it and keep browsing for the rest of her five."
        body="There is no Add to Cart button on the product page — only Buy Now, which routes straight into checkout for that single item."
        steelman="Most Meesho buyers purchase one item at a time; collapsing 'browse, decide, add' into one direct action removes a step for that majority case."
        critique="The same single-item assumption becomes a tax on anyone buying five or six items in one sitting — every item means a full detour through a checkout page she never meant to enter."
        fix="The same Reseller toggle from Step 1, once on, also changes the PDP — a proper Add to Cart action appears alongside Buy Now, built for picking multiple products in one sitting."
        verdict="Change"
        screenshot="/case-studies/meesho/s2-pdp.jpeg"
        screenshotAlt="Meesho product page showing only a Buy Now button, no Add to Cart"
      />

      {/* Step 3 */}
      <StepSection
        num={3}
        title="Reseller options appear, but too late"
        evidence="Verified — screenshot"
        scene="At checkout, Sunita finds she can identify as a reseller, add her margin, and share images."
        body="But only here, after every product and pricing decision is already made."
        steelman="Asking this at checkout, in context, avoids a heavier onboarding step for the vast majority of users who will never resell anything."
        critique="The cost isn't onboarding friction, it's that Steps 1 and 2 already happened under the wrong assumption by the time this question is asked. It's fine as a confirmation; it's the wrong place for it to be the only signal the app has."
        fix="This confirms why the Reseller toggle belongs at profile level, set once, rather than re-asked per checkout — it's the same fix as Step 1, now shown resolving a third, separate break."
        verdict="Keep"
        verdictNote="as confirmation, not as the only signal"
        screenshot="/case-studies/meesho/s3-share.jpeg"
        screenshotAlt="Meesho share modal asking 'Are you reselling this product?' at checkout"
      />

      {/* Step 4 */}
      <StepSection
        num={4}
        title="Adding quantity increases the price"
        evidence="Verified — screenshot, with real numbers"
        scene="Same product — Plain Silk Saree, seller KKD Creation 21 — same session."
        body="At quantity 1: ₹279/unit, 29% off ₹393. At quantity 2: ₹331/unit, only 16% off — meaning two units cost ₹663, not the ₹558 they should if the per-unit price had held."
        priceTable={{
          headers: ["", "Qty 1", "Qty 2", "Expected at qty 2"],
          rows: [
            ["Per-unit price", "₹279", "₹331", "₹279"],
            ["Discount", "29% off", "16% off", "29% off"],
            ["Total", "₹279", "₹663", "₹558"],
          ],
        }}
        steelman="Shrinking per-unit discounts at higher quantities is a common lever against inventory/margin risk on thin-margin items; the quantity-1 price may be a loss-leading hook for a first unit, not a policy meant to apply at scale."
        critique="Whichever way it's set, the effect on a reseller is the same — the app is economically discouraging the exact bulk-buying behavior that defines what a reseller does."
        fix="A separate reseller-tier pricing curve, gated behind the Reseller toggle, that holds or rewards per-unit price as quantity rises instead of penalizing it."
        verdict="Add"
        screenshot="/case-studies/meesho/s4-qty2.jpeg"
        screenshotAlt="Meesho order review showing price rising from ₹279 to ₹331 per unit at quantity 2"
      />

      {/* Step 5 */}
      <StepSection
        num={5}
        title="COD isn't available at payment"
        evidence="Verified — screenshot"
        scene="At the final step, Sunita finds Cash on Delivery isn't supported for her order."
        body="Despite having already collected cash from the customer she's reselling to."
        steelman="Low-ticket, first-time-buyer orders are the highest-RTO segment industry-wide; blocking COD and discounting prepaid is a rational, data-backed guardrail against fraud."
        critique="For a reseller who has already collected her customer's cash, this isn't a trust problem, it's a working-capital mismatch — she's being asked to front money before Meesho even ships."
        fix="Partial COD for verified, toggle-identified resellers with order history — roughly 20% paid online upfront, the remainder on delivery. Gives Meesho a real stake against fraud while respecting how a reseller's business actually runs."
        verdict="Add"
        screenshot="/case-studies/meesho/s5-payment.jpeg"
        screenshotAlt="Meesho payment screen showing Cash on Delivery is not supported for this order"
        isLast
      />

      {/* Recommendation */}
      <section className={`wrap ${styles.recBlock}`}>
        <h2 className={styles.h2}>What actually needs building</h2>
        <p className={styles.recIntro}>
          Two of the five fixes aren&apos;t the toggle itself — they&apos;re
          gated behind it, not opened to every buyer:
        </p>
        <div className={styles.recGrid}>
          <div className={styles.recCard}>
            <span className={styles.recTag}>Step 4</span>
            <h3>Reseller-tier pricing curve</h3>
            <p>
              Holds or rewards per-unit price as quantity rises, instead of
              penalizing it.
            </p>
          </div>
          <div className={styles.recCard}>
            <span className={styles.recTag}>Step 5</span>
            <h3>Partial COD for verified resellers</h3>
            <p>
              ~20% paid upfront, remainder on delivery — a real stake
              against fraud without the working-capital mismatch.
            </p>
          </div>
        </div>
      </section>

      {/* Build sequence */}
      <section className={`wrap ${styles.buildBlock}`}>
        <h2 className={styles.h2}>Build sequence</h2>
        <p className={styles.buildIntro}>
          Sunita hit these breaks in the order 1 through 5. The build order
          runs differently — the Reseller toggle ships first, because it
          resolves Steps 1, 2, and 3 directly, and is the gating signal for
          Steps 4 and 5.
        </p>
        <div className={styles.buildSteps}>
          <BuildStep
            n={1}
            title="Profile-level Reseller toggle"
            resolves="Resolves journey Steps 1, 2, 3"
          />
          <BuildStep
            n={2}
            title="Reseller-tier pricing curve"
            resolves="Resolves journey Step 4"
          />
          <BuildStep
            n={3}
            title="Partial COD for verified resellers"
            resolves="Resolves journey Step 5"
          />
        </div>
      </section>

      {/* Close / caveats */}
      <section className={`wrap ${styles.closeBlock}`}>
        <h2 className={styles.h2}>What I&apos;m confident in, and what I&apos;m not</h2>
        <p>
          The ₹52-per-unit shift between quantity 1 and quantity 2 is
          arithmetic, not a description — I can verify it directly from the
          screenshots above. Some findings, like the checkout-stage
          reseller options and the missing resale-demand signal, are direct
          observations from the walkthrough, not confirmed at scale.
        </p>
        <p>
          Two sessions is enough to prove the pricing pattern is real. It
          isn&apos;t enough to know whether it&apos;s set by Meesho
          centrally or per-seller — that&apos;s an open question, not a
          claim.
        </p>
      </section>

      {/* How I'd test the top fix */}
      <section className={`wrap ${styles.recBlock}`}>
        <h2 className={styles.h2}>How I&apos;d test the first fix</h2>
        <p className={styles.recIntro}>
          Partial COD is the highest-severity break and the first thing
          I&apos;d ship. Here is the experiment, including the conditions
          under which I&apos;d kill it.
        </p>

        <div className={styles.argument}>
          <Arg label="Hypothesis">
            If verified resellers can pay ~20% upfront and the remainder on
            delivery, completed orders from repeat resellers rise — because
            the constraint was working capital, not trust.
          </Arg>
          <Arg label="Primary metric">
            Completed orders per reseller per month, among toggle-identified
            resellers with prior order history.
          </Arg>
          <Arg label="Guardrail">
            RTO rate on partial-COD orders must not exceed the current COD
            baseline. Kill this if RTO rises materially — even if completed
            orders improve.
          </Arg>
          <Arg label="Sample and duration">
            ~6 weeks, verified resellers only, segmented by city tier and by
            order history depth.
          </Arg>
          <Arg label="If it comes back flat">
            Check uptake of the partial-COD option first. Low uptake points
            to a discoverability problem, fixable in the checkout UI. Normal
            uptake with no lift in completed orders means working capital
            wasn&apos;t the binding constraint, and the real blocker sits
            earlier — most likely the sourcing signal in break one.
          </Arg>
          <Arg label="I&apos;d be wrong if">
            Partial COD converts no better than the current block. That
            would mean resellers aren&apos;t capital-constrained at the
            moment of purchase, and my reading of Sunita&apos;s cash cycle
            is wrong.
          </Arg>
        </div>
      </section>

      {/* v1 appendix */}
      <section className={`wrap ${styles.closeBlock}`}>
        <h2 className={styles.h2}>Appendix — what I got wrong the first time</h2>
        <p>
          The first version of this teardown analysed Meesho as a shopping
          app. My user was a tier-2 first-time buyer, price-led, with
          Flipkart already installed. My goal was first-order activation.
          The work was thorough — zone-by-zone screen breakdowns, a
          severity-ranked friction log, steelmanned counter-arguments,
          experiment designs with kill criteria.
        </p>
        <p>
          <strong>It was pointed at the wrong person.</strong> Meesho&apos;s
          business runs on resellers. Analysing it as a consumer shopping
          app meant every conclusion, however well argued, answered a
          question that mattered less.
        </p>
        <p>
          The COD finding shows the cost most clearly. Both versions flagged
          the same screen. They disagree about everything that follows from
          it:
        </p>

        <div className={styles.argument}>
          <Arg label="Version one — buyer">
            Root cause: broken trust. COD is promised as a reassurance badge
            on three screens, then withdrawn at payment. Fix: show prepaid
            and COD prices side by side from screen one, so the cost of COD
            is visible rather than sprung.
          </Arg>
          <Arg label="Version two — reseller">
            Root cause: working-capital mismatch. Sunita has already
            collected her customer&apos;s cash and is being asked to front
            money before Meesho ships. Fix: partial COD for verified
            resellers with order history.
          </Arg>
        </div>

        <p>
          One of those is a copy and pricing change. The other is a
          financing mechanism. Same screen, same friction — and the only
          thing that changed was who I decided was standing in front of it.
        </p>
        <p>
          I&apos;ve kept the first version rather than quietly replacing it,
          because the gap between them is the actual lesson. Choosing the
          user is the highest-leverage decision in a teardown, and it
          happens before any analysis starts — which is exactly when
          it&apos;s easiest to get wrong without noticing.
        </p>
      </section>

      <div className="wrap">
        <footer className={styles.footer}>
          <Link href="/" className={styles.back}>
            ← Back to portfolio
          </Link>
          <span>Bhagwandas Yadav</span>
        </footer>
      </div>
    </>
  );
}

function StepSection({
  num,
  title,
  evidence,
  scene,
  body,
  priceTable,
  steelman,
  critique,
  fix,
  verdict,
  verdictNote,
  screenshot,
  screenshotAlt,
  isLast,
}: {
  num: number;
  title: string;
  evidence: string;
  scene: string;
  body: string;
  priceTable?: { headers: string[]; rows: string[][] };
  steelman: string;
  critique: string;
  fix: string;
  verdict: "Keep" | "Change" | "Add";
  verdictNote?: string;
  screenshot: string;
  screenshotAlt: string;
  isLast?: boolean;
}) {
  return (
    <section className={`wrap ${styles.step} ${isLast ? styles.lastStep : ""}`}>
      <div className={styles.stepHead}>
        <span className={styles.stepNum}>Step {num}</span>
        <span className={styles.evidenceTag}>{evidence}</span>
      </div>
      <h2 className={styles.stepTitle}>{title}</h2>
      <p className={styles.scene}>{scene}</p>
      <p className={styles.body}>{body}</p>

      <div className={styles.evidenceGrid}>
        <div className={styles.screenshotCol}>
          <div className={styles.screenshotFrame}>
            <Image
              src={screenshot}
              alt={screenshotAlt}
              width={330}
              height={727}
              className={styles.screenshotImg}
            />
          </div>
          <span className={styles.screenshotCaption}>Current — real screenshot</span>
        </div>
      </div>

      {priceTable && (
        <table className={styles.priceTable}>
          <thead>
            <tr>
              {priceTable.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {priceTable.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className={styles.argument}>
        <div className={styles.argBlock}>
          <span className={styles.argLabel}>The steelman</span>
          <p>{steelman}</p>
        </div>
        <div className={styles.argBlock}>
          <span className={styles.argLabel}>Critique that survives it</span>
          <p>{critique}</p>
        </div>
      </div>

      <div className={styles.fixBlock}>
        <span className={styles.fixLabel}>Proposed fix</span>
        <p>{fix}</p>
      </div>

      <div className={styles.verdictRow}>
        <span
          className={`${styles.verdictBadge} ${
            verdict === "Add"
              ? styles.verdictAdd
              : verdict === "Change"
              ? styles.verdictChange
              : styles.verdictKeep
          }`}
        >
          {verdict}
        </span>
        {verdictNote && <span className={styles.verdictNote}>{verdictNote}</span>}
      </div>
    </section>
  );
}

function BuildStep({
  n,
  title,
  resolves,
}: {
  n: number;
  title: string;
  resolves: string;
}) {
  return (
    <div className={styles.buildStep}>
      <span className={styles.buildN}>{n}</span>
      <div>
        <h3>{title}</h3>
        <p>{resolves}</p>
      </div>
    </div>
  );
}

function Arg({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.argBlock}>
      <div className={styles.argLabel}>{label}</div>
      <p>{children}</p>
    </div>
  );
}
