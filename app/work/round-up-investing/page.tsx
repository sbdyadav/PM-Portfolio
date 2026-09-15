import type { Metadata } from "next";
import Link from "next/link";
import s from "../../prose.module.css";

export const metadata: Metadata = {
  title: "Validating Round-Up Investing — Bhagwandas Yadav",
  description:
    "A pre-build validation plan for a UPI round-up investing feature: three falsifiable hypotheses, a staged interview guide, and a design-method session.",
};

export default function RoundUp() {
  return (
    <main className={`wrap ${s.page}`}>
      <Link href="/" className={s.back}>
        ← Bhagwandas Yadav
      </Link>

      <header className={s.head}>
        <div className={s.kicker}>Product work</div>
        <h1 className={s.title}>Validating Round-Up Investing</h1>
        <p className={s.standfirst}>
          A feature brief handed over the way a real leader hands one over:
          round up every UPI payment to the next ₹10, quietly invest the
          spare change. Here is how I&apos;d find out whether it deserves
          to exist — before anyone writes code.
        </p>
        <div className={s.byline}>
          <span>2026</span>
          <span>Validation plan, not a completed study</span>
        </div>
      </header>

      <div className={s.body}>
        <p>
          The product is a consumer wealth-and-payments app in India — UPI
          plus investing, roughly 8M monthly active users. Leadership&apos;s
          hypothesis: round-ups become a low-friction bridge into investing
          for daily payment users who never start on their own.
        </p>
        <p>
          What the brief did not specify: who exactly this is for, how big
          the problem really is, what people do instead today, and what
          &ldquo;moves our numbers&rdquo; means. Those four gaps are the
          work.
        </p>

        <h2>The insight the brief was missing</h2>

        <p>
          Most versions of this feature get justified with &ldquo;users
          want to save more.&rdquo; That is a wish, not a mechanism. The
          sharper reading is behavioural:
        </p>

        <div className={s.pull}>
          The informal &ldquo;spare change&rdquo; savings habit people had
          with cash has no equivalent in a UPI-first world — and UPI&apos;s
          frictionlessness removes the natural pause that used to prompt
          saving. Both the old mechanism and the old cue are gone.
        </div>

        <p>
          That reframing matters because it changes what the feature&apos;s
          job actually is. It isn&apos;t an investing product. It is a
          <strong> cue-replacement mechanism</strong> — rebuilding a
          trigger that digital payments quietly destroyed. Which is why the
          hypothesis to test is about effortlessness, not returns.
        </p>

        <h2>Part A — Three falsifiable hypotheses</h2>

        <p>
          Before talking to a single user, the feature idea becomes three
          claims that could each be proven wrong.
        </p>

        <div className={s.block}>
          <div className={s.blockLabel}>Strategic fit</div>
          <p>
            Transition users from small-scale micro-savings behaviour into
            full-scale investing engagement, by building trust in the
            platform&apos;s investing product. Ownership metric: percentage
            of eligible payment users who opt in, and who remain actively
            rounding up at 30 / 60 / 90 days.
          </p>
        </div>

        <div className={s.block}>
          <div className={s.blockLabel}>User value</div>
          <p>
            Urban professionals, 26–32, metro and Tier-1, earning ₹40–80k a
            month, never invested anywhere, making frequent small daily UPI
            payments. The problem is a habit gap, not an access gap: they
            set up an RD or SIP once and let it lapse. The emotional
            register is guilt, not mild inconvenience — which makes it a
            values problem, and worth solving.
          </p>
        </div>

        <div className={s.block}>
          <div className={s.blockLabel}>Business value</div>
          <p>
            Users build initial trust through a low-stakes, no-decision
            entry point, becoming receptive to higher-value products later.
            Estimated 30–40% of the never-invested segment opting in within
            the first quarter. Explicitly <em>not</em> a user-acquisition
            play — this is for the existing 8M base.
          </p>
        </div>

        <h2>What I deliberately excluded</h2>

        <p>
          The stimulus covers the in-app notification, the opt-in screen
          with its toggle and plain-language explanation, and the
          confirmation immediately after. It does <strong>not</strong>{" "}
          include the post-payment congratulations message or the full
          savings dashboard.
        </p>
        <p>
          Both are real parts of the feature. Both test a different
          hypothesis — whether reward messaging and progress-tracking drive
          retention — which is itself unvalidated and risks being annoying
          rather than motivating. Including them would muddy the signal on
          the one decision that matters most here:{" "}
          <strong>
            does the opt-in itself trigger investing-anxiety, or does
            effortlessness hold?
          </strong>
        </p>

        <h2>Part B — Six users, and how to reach them</h2>

        <p>
          Six completed interviews, recruited honestly rather than
          optimistically. Back-calculated from a 75% show-up rate, roughly
          268 people must register interest, split across two channels,
          with a ₹500 voucher per completed interview.
        </p>

        <p>The personas are behavioural, not demographic:</p>

        <ul>
          <li>The good-intentions guy whose SIP died from neglect, not disinterest</li>
          <li>The over-analyser who tracks every expense in a spreadsheet but never acts on it</li>
          <li>The serial-starter who has tried three investing apps and abandoned all of them — proving access isn&apos;t the blocker</li>
          <li>The avoider who won&apos;t open the investments tab at all, because it feels intimidating rather than inconvenient</li>
          <li>The rupee-precise dad who splits every bill over UPI and still has no savings buffer</li>
          <li>The impulse-spender testing whether round-up can save her from herself</li>
        </ul>

        <h2>Questions I wrote, then rejected</h2>

        <p>
          Interview quality is mostly a function of what you refuse to ask.
          Three that did not survive my own review:
        </p>

        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Rejected question</th>
                <th>Why it fails</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  &ldquo;Think about the last time someone suggested an
                  investment app to you…&rdquo;
                </td>
                <td>Assumes the event occurred. Not behaviour-safe for every respondent.</td>
              </tr>
              <tr>
                <td>
                  &ldquo;Tell me about the last time you felt behind on
                  saving compared to your peers…&rdquo;
                </td>
                <td>
                  Leading. Embeds an assumption of peer comparison and of
                  feeling &ldquo;behind.&rdquo;
                </td>
              </tr>
              <tr>
                <td>
                  &ldquo;…you opened an investing app but didn&apos;t go
                  through with putting money in&rdquo;
                </td>
                <td>
                  Double-barrelled. Opening the app and what stopped them
                  are two separate probes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Part C — Why an interview alone isn&apos;t enough</h2>

        <p>
          These users are immersed in payments but not in investing.
          Several personas show active avoidance or a history of abandoning
          investment products. Asking them to <em>imagine</em> round-up
          investing risks a socially desirable answer rather than a real
          reaction — they have no existing mental model for this mechanism
          and cannot reliably self-report on it.
        </p>
        <p>
          So the plan pairs both. The interview surfaces the{" "}
          <em>why</em> behind past behaviour — why the SIP lapsed, why they
          avoid the tab. The design method tests reaction to the mechanism
          itself.
        </p>

        <div className={s.block}>
          <div className={s.blockLabel}>The method, and a deliberate adaptation</div>
          <p>
            A clickable vibe-prototyped opt-in flow, used silently first,
            explained after. I stay a silent observer during the task —
            resisting the urge to clarify even when the participant
            hesitates — then switch to active probing immediately
            afterwards, walking back through their own path:{" "}
            <em>
              &ldquo;I noticed you paused right here, what was going
              through your mind?&rdquo;
            </em>
          </p>
          <p>
            This is not a stock pairing. It is adapted specifically for the
            anxiety profile in persona four, where real-time probing would
            contaminate the natural reaction.
          </p>
        </div>

        <h2>What would make me wrong</h2>

        <p>
          The synthesis sheets are built and empty, waiting on findings.
          Each hypothesis resolves to one of three outcomes — supports,
          contradicts, or new finding — and the final decision is binary:
          proceed to refine business value, or take the invalidation back
          to my manager.
        </p>
        <p>
          The assumption most likely to break is the size estimate. I put
          40–60% of the 8M base as never having invested anywhere, and I
          want to be clear about its status:{" "}
          <strong>
            that is an educated guess from immersion, not measured data.
          </strong>{" "}
          It is the first thing I would check against internal numbers, and
          if it is materially lower, the business case weakens before any
          interview happens.
        </p>

        <div className={s.pull}>
          This is a plan, not a study. I did not run these interviews. What
          it demonstrates is how I&apos;d spend the research budget — and
          what I&apos;d refuse to spend it on.
        </div>
      </div>

      <footer className={s.footer}>
        <Link href="/">← Back</Link>
        <span>Bhagwandas Yadav</span>
      </footer>
    </main>
  );
}
