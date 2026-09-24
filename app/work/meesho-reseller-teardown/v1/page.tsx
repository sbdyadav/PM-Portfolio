import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import s from "../../../study.module.css";
import v from "./v1.module.css";

export const metadata: Metadata = {
  title: "Meesho teardown, version one",
  description:
    "The first version of the Meesho teardown — walked as a first-time buyer, not a reseller. Kept because the gap between the versions is the lesson.",
};

export default function MeeshoV1() {
  return (
    <main className={`teardown ${s.page}`}>
      <Link href="/work/meesho-reseller-teardown" className={s.back}>
        ← Teardown, version two
      </Link>

      <header className={s.head} style={{ maxWidth: 760 }}>
        <span className={s.eyebrow}>Teardown · Meesho · Version one · Aug 2026</span>
        <h1 className={s.title}>The Meesho buyer app</h1>
        <p className={s.lede}>
          Home feed to checkout, walked through the eyes of a first-time
          buyer. Goal: improve first-time buyer activation — getting a new
          install to a completed, successfully delivered first order.
        </p>
      </header>

      <div className={v.note}>
        <p>
          <strong>This version is pointed at the wrong user.</strong> Meesho&apos;s
          business runs on resellers, and I analysed it as a consumer
          shopping app. The work below is thorough — and it answers a
          question that mattered less. I&apos;ve kept it because the gap
          between this and{" "}
          <Link href="/work/meesho-reseller-teardown">version two</Link> is
          the actual lesson: choosing the user is the highest-leverage
          decision in a teardown, and it happens before any analysis starts.
        </p>
      </div>

      {/* 01 */}
      <section className={v.sec}>
        <span className={v.secNum}>01</span>
        <h2 className={v.h2}>Frame the teardown</h2>
        <div className={v.rows}>
          <div className={v.row}>
            <span className={v.rowLabel}>My goal</span>
            <p>
              Improve first-time buyer activation — getting a new install to
              a completed, successfully delivered first order.
            </p>
          </div>
          <div className={v.row}>
            <span className={v.rowLabel}>My user</span>
            <p>
              A tier-2 city shopper, price-led not brand-led, who already has
              Flipkart and Amazon installed. Meesho has to win on price and on
              offering something those platforms don&apos;t.
            </p>
          </div>
          <div className={v.row}>
            <span className={v.rowLabel}>The job to be done</span>
            <p>
              Find trending, regionally-sourced products at prices the local
              market can&apos;t match — and trust the platform enough to pay
              before the product arrives.
            </p>
          </div>
        </div>
      </section>

      {/* 02 */}
      <section className={v.sec}>
        <span className={v.secNum}>02</span>
        <h2 className={v.h2}>Map the business</h2>
        <div className={s.body}>
          <p>
            Meesho is optimising for great offers on great collections —
            connecting buyers across tier-2/3 India to small and medium
            sellers. Alongside trust and speed, it is visibly optimising for
            lower RTO and fewer fake orders: Cash on Delivery is promoted as
            a trust signal on three separate screens, then quietly withdrawn
            at the payment page itself.
          </p>
        </div>

        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Layer</th>
                <th>My inference</th>
                <th>What it&apos;s based on</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North star</td>
                <td>No. of delivered orders</td>
                <td>Only event that converts a discount into a real transaction</td>
                <td>High</td>
              </tr>
              <tr>
                <td>L1</td>
                <td>No. of repeat orders</td>
                <td>Retention — a healthy funnel needs order 1 to lead to order 2</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>L2</td>
                <td>No. of cancelled orders</td>
                <td>Directly represents revenue lost mid-funnel</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Guardrail</td>
                <td>No. of RTO instances</td>
                <td>Platform trust and margin on a low-ticket-size business</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={v.caveat}>
          Inferences, not confirmed numbers — I have no access to
          Meesho&apos;s internal dashboards.
        </p>
      </section>

      {/* 03 */}
      <section className={v.sec}>
        <span className={v.secNum}>03</span>
        <h2 className={v.h2}>Flow map — first-time buyer journey</h2>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Screen</th>
                <th>What happens</th>
                <th>Emotional state</th>
                <th>Drop-off</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fresh install</td>
                <td>Location access requested</td>
                <td>Neutral, slightly guarded</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Welcome</td>
                <td>Contact access requested</td>
                <td>Guarded — second ask in a row</td>
                <td>High</td>
              </tr>
              <tr>
                <td>3–5</td>
                <td>Sign up</td>
                <td>Gender (skippable), age, language</td>
                <td>Neutral to mildly annoyed</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Home</td>
                <td>Welcome offer; notification permission ask</td>
                <td>Curious, slightly interrupted</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>7–8</td>
                <td>Home → PDP</td>
                <td>Browses, taps product, sees discount and timer</td>
                <td>Engaged, price-scanning</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Checkout</td>
                <td>Order reviewed, address confirmed</td>
                <td>Committed, expects COD</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Payment</td>
                <td>COD unavailable, online payment pushed</td>
                <td>Broken trust — promised COD 3 screens ago</td>
                <td className={v.hot}>Highest</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={s.body}>
          <p>
            The largest risk point in the funnel is step 10. Every earlier
            screen uses &ldquo;Cash on Delivery&rdquo; as a reassurance
            badge, building an expectation across three touchpoints — then
            breaking it at the moment of highest commitment.
          </p>
        </div>

        <div className={v.figures}>
          <Figure
            src="/case-studies/meesho/s1-grid.jpeg"
            alt="Meesho home grid as a first-time buyer sees it, with the trust banner promising Cash on Delivery"
            caption="Step 7 · the grid, with COD promised in the banner"
          />
          <Figure
            src="/case-studies/meesho/s2-pdp.jpeg"
            alt="Meesho product detail page showing the offer countdown timer and the repeated trust banner"
            caption="Step 8 · PDP, 12-hour timer and the same badge"
          />
          <Figure
            src="/case-studies/meesho/s5-payment.jpeg"
            alt="Meesho payment screen stating Cash on Delivery is not supported for this order"
            caption="Step 10 · the promise withdrawn"
          />
        </div>
      </section>

      {/* 05 */}
      <section className={v.sec}>
        <span className={v.secNum}>04</span>
        <h2 className={v.h2}>Friction log</h2>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Screen</th>
                <th>Trying to</th>
                <th>What happened</th>
                <th>What I expected</th>
                <th>Sev.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Payment</td>
                <td>Complete purchase as promised</td>
                <td>COD blocked; forced online despite 3 earlier promises</td>
                <td>Honour COD, or disclose earlier</td>
                <td className={v.hot}>5</td>
              </tr>
              <tr>
                <td>PDP</td>
                <td>View the product</td>
                <td>Negative-review stats surfaced with a filter</td>
                <td>Standard star rating only</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Welcome</td>
                <td>Sign up</td>
                <td>Contact access requested</td>
                <td>Phone number + OTP only</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Fresh install</td>
                <td>Sign up</td>
                <td>Location access requested</td>
                <td>Phone number + OTP only</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Sign up</td>
                <td>Sign up</td>
                <td>Gender asked, with skip option</td>
                <td>Male / Female / Prefer not to say</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={s.body}>
          <p>
            Severity clusters heavily at the payment step, with a secondary
            cluster around early permission requests.
          </p>
        </div>
      </section>

      {/* 06 */}
      <section className={v.sec}>
        <span className={v.secNum}>05</span>
        <h2 className={v.h2}>Top three problems</h2>
        <div className={v.rank}>
          <div className={v.rankRow}>
            <span className={v.rankN}>1</span>
            <div>
              <h3>COD reframe</h3>
              <p>Pricing and copy change, checkout and payment.</p>
            </div>
            <span className={v.rankTag}>Quick win — do now</span>
          </div>
          <div className={v.rankRow}>
            <span className={v.rankN}>2</span>
            <div>
              <h3>First-time offer</h3>
              <p>Dynamic percentage on home, flat amount at checkout.</p>
            </div>
            <span className={v.rankTag}>High impact, high effort</span>
          </div>
          <div className={v.rankRow}>
            <span className={v.rankN}>3</span>
            <div>
              <h3>Offer timer</h3>
              <p>Shorten the window and pair it with a delivery signal.</p>
            </div>
            <span className={v.rankTag}>Quick win, minor</span>
          </div>
        </div>
      </section>

      {/* 07 */}
      <section className={v.sec}>
        <span className={v.secNum}>06</span>
        <h2 className={v.h2}>The rebuild</h2>

        <div className={s.card}>
          <div className={s.cardLabel}>#1 · Cash on Delivery restriction</div>
          <p>
            <strong>The steelman.</strong> Low-ticket, first-time-buyer
            orders are the highest-RTO segment industry-wide — a pattern I
            saw directly while working on COD and fraud problems at Udaan.
            Blocking COD outright and discounting prepaid by ₹31 is a
            rational, data-backed guardrail, not an oversight.
          </p>
          <p>
            <strong>Critique that survives it.</strong> The execution is a
            blunt, binary rule with no visible logic to the buyer. COD is a
            reassurance signal on three screens, then silently withdrawn at
            the one moment it matters most. The flat block risks converting
            a late-stage drop-off — step 10, already committed — into an
            early-stage one, once buyers learn to distrust the badge.
          </p>
          <p>
            <strong>The change.</strong> Stop treating COD as binary,
            revealed only at payment. Price it transparently from screen one:
            prepaid and COD side by side (₹64 vs ₹110), so the real cost of
            COD is visible throughout rather than sprung as a rejection.
          </p>
          <p>
            <strong>Trade-off.</strong> Trading an early, visible metric
            (CTR) for a later, truer one (completed orders). A reasonable PM
            could argue that even ₹110 COD doesn&apos;t deter a determined
            bad-faith buyer — so this may move perceived fairness without
            moving RTO at all.
          </p>
        </div>

        <div className={s.card}>
          <div className={s.cardLabel}>#2 · &ldquo;Upto ₹120 off&rdquo; first-order strip</div>
          <p>
            <strong>The steelman.</strong> Meesho&apos;s PMs have likely
            already tested flat against percentage discounts, and the flat
            number probably wins on CTR — a concrete number is processed
            instantly, with no mental math.
          </p>
          <p>
            <strong>Critique that survives it.</strong> The flat cap only
            tells the truth for the basket size it was designed around
            (₹250–400). It understates the discount badly past ₹1,000 —
            exactly the higher-value baskets Meesho should want as buyers
            gain trust.
          </p>
          <p>
            <strong>The change.</strong> Lead with a percentage on the home
            screen for scalable impact across basket sizes, then convert to a
            flat rupee figure at checkout once the cart total is known.
          </p>
        </div>

        <div className={s.card}>
          <div className={s.cardLabel}>#3 · PDP &ldquo;offer ends in 12h&rdquo; timer</div>
          <p>
            <strong>The steelman.</strong> The 12-hour window likely exists
            because the PM deliberately chose not to rush a first-time buyer
            — someone pressured before building trust may abandon the app
            entirely rather than convert.
          </p>
          <p>
            <strong>Critique that survives it.</strong> Twelve hours is long
            enough to read as ambient noise rather than a genuine reason to
            act now, easy to file away as &ldquo;I&apos;ll come back
            later.&rdquo;
          </p>
          <p>
            <strong>The change.</strong> Test a 3-hour window paired with a
            delivery signal — &ldquo;order in 3 hours for delivery by
            Thursday&rdquo; — rather than urgency alone, isolated from other
            changes so any lift is attributable.
          </p>
        </div>
      </section>

      {/* 08 */}
      <section className={v.sec}>
        <span className={v.secNum}>07</span>
        <h2 className={v.h2}>Experiment — COD reframe</h2>
        <div className={v.argGrid}>
          <Arg label="Hypothesis">
            If we replace the outright COD block with a transparent price
            gap, prepaid conversion increases — because the buyer is
            incentivised, not blindsided.
          </Arg>
          <Arg label="Primary metric">
            Percentage increase in prepaid conversion at payment.
          </Arg>
          <Arg label="Guardrail">
            Total completed orders must not drop, even if CTR dips. Kill this
            if completed orders fall — even if RTO improves.
          </Arg>
          <Arg label="Sample and duration">
            ~4 weeks, first-time buyers only, segmented by city tier.
          </Arg>
          <Arg label="If it comes back flat">
            Check engagement with the new pricing first — low engagement
            points to a visibility problem, fixable with bolder design.
            Normal engagement with no lift means price framing isn&apos;t the
            lever for this segment.
          </Arg>
          <Arg label="I&apos;d be wrong if">
            The price-gap variant converts the same or worse than the current
            flat block — meaning transparency doesn&apos;t change behaviour,
            and the real lever is trust-building through buyer history and
            PIN-code risk scoring.
          </Arg>
        </div>
      </section>

      {/* close */}
      <section className={v.sec}>
        <h2 className={v.h2}>What replaced this</h2>
        <div className={s.body}>
          <p>
            Version two walks the same app as Sunita, a first-year reseller
            in Nagpur. The COD screen flagged here appears there too — with a
            completely different diagnosis. Not broken trust, but a
            working-capital mismatch: she has already collected her
            customer&apos;s cash and is being asked to front money before
            Meesho ships.
          </p>
          <p>
            One reading produces a copy and pricing change. The other
            produces a financing mechanism. Same screen, different user.
          </p>
        </div>
        <div className={s.downloads}>
          <Link href="/work/meesho-reseller-teardown" className={s.dlSolid}>
            Read version two →
          </Link>
          <a
            href="/downloads/meesho-buyer-teardown-v1.pdf"
            className={s.dlGhost}
            download
          >
            This version — PDF ↓
          </a>
        </div>
      </section>

      <div className={s.next}>
        <Link href="/#work">← All work</Link>
        <Link href="/work/round-up-investing">Round-Up Investing →</Link>
      </div>
    </main>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className={v.figure}>
      <div className={v.figureFrame}>
        <Image
          src={src}
          alt={alt}
          width={330}
          height={727}
          className={v.figureImg}
        />
      </div>
      <figcaption className={v.figureCap}>{caption}</figcaption>
    </figure>
  );
}

function Arg({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={v.arg}>
      <span className={v.argLabel}>{label}</span>
      <p>{children}</p>
    </div>
  );
}
