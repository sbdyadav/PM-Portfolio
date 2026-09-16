import type { Metadata } from "next";
import Link from "next/link";
import s from "../../study.module.css";

export const metadata: Metadata = {
  title: "Validating Round-Up Investing",
  description:
    "A pre-build validation plan for a UPI round-up investing feature: three falsifiable hypotheses, a staged interview guide, and a design-method session.",
};

export default function RoundUp() {
  return (
    <main className={`long ${s.page}`}>
      <Link href="/#work" className={s.back}>
        ← Work
      </Link>

      <header className={s.head}>
        <span className={s.eyebrow}>Validation · 2026</span>
        <h1 className={s.title}>Validating Round-Up Investing</h1>
        <p className={s.lede}>
          A feature brief handed over the way a real leader hands one over:
          round up every UPI payment to the next ₹10, quietly invest the
          spare change. This is how I&apos;d find out whether it deserves to
          exist — before anyone writes a line of code.
        </p>

        <div className={s.meta}>
          <div className={s.metaItem}>
            <span className={s.metaLabel}>Scope</span>
            <span className={s.metaValue}>Feature opportunity validation</span>
          </div>
          <div className={s.metaItem}>
            <span className={s.metaLabel}>Status</span>
            <span className={s.metaValue}>Plan, not a completed study</span>
          </div>

        </div>
      </header>

      <Link href="/work/round-up-investing/field-kit" className={s.kit}>
        <div>
          <div className={s.kitTitle}>The interview field kit</div>
          <p className={s.kitDesc}>
            The printable version a moderator actually carries into the room —
            screener, staged prompts with ruled writing lines, the
            design-method task, and the synthesis table.
          </p>
        </div>
        <span className={s.kitCta}>Open the field kit →</span>
      </Link>

      <div className={s.body}>
        <h2>The brief</h2>
        <p>
          A consumer wealth-and-payments app in India — UPI plus investing,
          roughly 8M monthly active users, mostly aged 22 upward. The
          proposal: every UPI payment rounds up to the next ₹10, and the
          spare change is quietly invested into a low-risk fund.
          Leadership&apos;s hypothesis is that this becomes a low-friction
          bridge into investing for daily payment users who never start on
          their own.
        </p>
        <p>
          What the brief did not specify:{" "}
          <strong>
            who exactly this is for, how big the problem really is, what
            people do today instead, and what &ldquo;moves our
            numbers&rdquo; means.
          </strong>{" "}
          Those four gaps are the entire job. Everything below exists to
          close them before the engineering budget gets committed.
        </p>

        <h2>The reframe the brief was missing</h2>
        <p>
          Most versions of this feature get justified with &ldquo;users want
          to save more.&rdquo; That is a wish, not a mechanism — and a
          feature built on a wish has nothing to falsify. The sharper
          reading is behavioural:
        </p>

        <div className={s.pull}>
          The informal &ldquo;spare change&rdquo; savings habit people had
          with cash has no equivalent in a UPI-first world — and UPI&apos;s
          frictionlessness removes the natural pause that used to prompt
          saving. Both the old mechanism and the old cue are gone.
        </div>

        <p>
          That changes what the feature&apos;s job actually is. It is not an
          investing product. It is a{" "}
          <strong>cue-replacement mechanism</strong> — rebuilding a trigger
          that digital payments quietly destroyed. Which is why the thing to
          test is effortlessness, not returns, and why investment literacy
          is explicitly out of scope.
        </p>

        <h2>Part A — Manager briefing</h2>
        <p>
          Three claims, each written so it could be proven wrong. Nobody
          talks to a user until these exist.
        </p>

        <div className={s.card}>
          <div className={s.cardLabel}>Strategic fit</div>
          <p>
            Mission, tightened to this feature: shatter the psychological
            barriers to saving and investing, building healthy everyday
            habits through automated micro-savings in low-risk funds.
          </p>
          <p>
            The bet is a transition — from small-scale micro-savings
            behaviour into full-scale investing engagement — by building
            trust and transparency first.{" "}
            <strong>What I&apos;d own:</strong> activation and adoption of
            the payments-to-investing bridge. Specifically the percentage of
            eligible payment users who have never invested and opt in, and
            the percentage still actively rounding up at 30, 60 and 90 days.
          </p>
        </div>

        <div className={s.card}>
          <div className={s.cardLabel}>User value</div>
          <p>
            <strong>Profile:</strong> urban professionals, 26–32, metro and
            Tier-1 cities, earning ₹40–80k a month. Mid-career, with enough
            disposable income to feel the absence of a savings habit, but
            not yet investing. They use the app for small, frequent daily
            UPI payments — food, transport, chai — rather than big-ticket
            transactions, so non-round amounts occur several times a day and
            the round-up mechanism gets constant, near-invisible trigger
            points.
          </p>
          <p>
            <strong>Problem:</strong> two-part. The cash-era spare-change
            habit has no UPI equivalent, and UPI&apos;s frictionlessness
            removed the pause that prompted saving. It surfaces as RDs and
            SIPs set up once and quietly abandoned after a month or two.
          </p>
          <p>
            <strong>Severity:</strong> this is the part that decides whether
            the feature is worth building. Users express genuine guilt and
            anxiety about not saving — tied to feeling like they are failing
            at a basic adult responsibility. That makes it a values problem,
            not a minor inconvenience, and values problems sustain
            behaviour change.
          </p>
          <p>
            <strong>Goal:</strong> the user feels they built a savings habit
            without having to think about it or manage anything — unlike a
            manual SIP, which demands ongoing attention they have already
            proven they won&apos;t give.
          </p>
        </div>

        <div className={s.card}>
          <div className={s.cardLabel}>Business value</div>
          <p>
            Users build initial trust in the investing product through a
            low-stakes, no-decision entry point, which makes them receptive
            to higher-value products later. Expected 30–40% of the
            never-invested segment opting in within the first quarter,
            plus improved 90-day retention among opted-in users from the
            switching-cost effect of an active, growing balance sitting in
            the app.
          </p>
          <p>
            <strong>Explicitly not:</strong> a user-acquisition play. This
            is for the existing 8M base, not a marketing hook to bring in
            new users. And not an investment-education product — the feature
            is a behavioural nudge into a low-risk default fund.
          </p>
        </div>

        <h3>Stakeholders this touches</h3>
        <p>
          Compliance and legal, because it is a regulated investment product
          with auto-debit consent. Finance, for fund flow and commission
          structure. Then customer support, who will field every question
          about deductions and fund performance; the investing product team,
          who own the underlying fund; and marketing, for launch messaging.
        </p>

        <h2>Part B — Six users, and how to reach them</h2>
        <p>
          Six completed interviews, recruited honestly rather than
          optimistically. Working backwards through the funnel — 75%
          show-up, 30% screener completion, 10% passing screening — roughly{" "}
          <strong>268 people must register interest</strong>, split across
          two channels, with a ₹500 voucher per completed interview.
        </p>
        <p>The six are defined behaviourally, not demographically:</p>
        <ul>
          <li>
            <strong>The good-intentions guy</strong> — has a lapsed SIP he
            set up once and forgot. His habit died from neglect, not
            disinterest.
          </li>
          <li>
            <strong>The over-analyser</strong> — tracks expenses obsessively
            in a spreadsheet but never acts on the insights. All the data, no
            behavioural follow-through.
          </li>
          <li>
            <strong>The serial-starter</strong> — has tried three investing
            apps and abandoned all of them, proving access isn&apos;t the
            blocker.
          </li>
          <li>
            <strong>The avoider</strong> — actively won&apos;t open the
            investments tab out of anxiety. Investing feels intimidating,
            not merely inconvenient.
          </li>
          <li>
            <strong>The rupee-precise dad</strong> — 50–65k, married with a
            young kid, splits every bill over UPI, hyper-aware of every rupee
            owed, and still has no savings buffer.
          </li>
          <li>
            <strong>The impulse-spender</strong> — treats herself right after
            salary credit and regrets it later. Testing whether round-up can
            save her from herself.
          </li>
        </ul>

        <h3>Screening for the behaviour, not the opinion</h3>
        <ul>
          <li>
            Have you set up a recurring deposit, SIP, or savings goal in the
            last year that you later stopped contributing to?
          </li>
          <li>
            Do you currently use any method — an app, spreadsheet, or manual
            habit — to track or set aside spare money after a purchase?
          </li>
          <li>
            How do you typically feel when you open the investments section
            of a financial app — comfortable, or something you tend to avoid?
          </li>
        </ul>

        <h2>The staged interview guide</h2>
        <p>
          Roughly five minutes building psychological safety, ten immersing
          in context, then thirty on real validation questions.
        </p>

        <div className={s.card}>
          <div className={s.cardLabel}>How the session opens</div>
          <p>
            &ldquo;Before we start, just so you know — I&apos;m not from the
            investing team, I&apos;m just trying to learn how people
            actually manage money day to day. There&apos;s no right or wrong
            answer here, and you genuinely can&apos;t hurt my feelings.
            It&apos;s not my project, I&apos;m here to learn.&rdquo;
          </p>
          <p>
            That disclaimer is doing real work. Every persona here carries
            some guilt about money. If the interviewer reads as an owner of
            the thing being discussed, the answers turn into performance.
          </p>
        </div>

        <p>
          Every validation question anchors to a specific past event rather
          than a hypothetical — because what people say they would do and
          what they did are different data:
        </p>
        <ul>
          <li>
            Walk me through the last time you got your salary — what did you
            do with it in the first few days?
          </li>
          <li>
            Think about the last UPI payment you made today or yesterday —
            what were you paying for, and how much was it?
          </li>
          <li>
            Walk me through the last time you set up a recurring deposit or
            SIP — what happened over the following weeks?
          </li>
          <li>
            Tell me about the last time you spent on something small and had
            leftover change. What did you do with it?
          </li>
          <li>
            Walk me through the last time you had a small amount of money
            sitting idle in your account — what happened to it eventually?
          </li>
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
                  investment app or product to you…&rdquo;
                </td>
                <td>
                  Assumes the event occurred. Not open or behaviour-safe for
                  every respondent.
                </td>
              </tr>
              <tr>
                <td>
                  &ldquo;Tell me about the last time you felt behind on
                  saving compared to your friends or peers…&rdquo;
                </td>
                <td>
                  Leading. Embeds an assumption of peer comparison and of
                  feeling &ldquo;behind.&rdquo;
                </td>
              </tr>
              <tr>
                <td>
                  &ldquo;…a time you opened an investing app but didn&apos;t
                  go through with putting money in&rdquo;
                </td>
                <td>
                  Double-barrelled. Opening the app and what stopped them are
                  two separate probes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Part C — Why an interview alone isn&apos;t enough</h2>
        <p>
          These users are immersed in payments but not in investing. Several
          personas show active avoidance, or a history of abandoning
          investment products. Asking them to <em>imagine</em> round-up
          investing risks a socially desirable answer rather than a real
          reaction — they have no existing mental model for this mechanism
          and cannot reliably self-report on it.
        </p>
        <p>
          The hypothesis is genuinely unproven rather than merely untested,
          and this is pre-build validation with time to do it properly. So
          the plan pairs both methods. The interview surfaces the{" "}
          <em>why</em> behind past behaviour — why the SIP lapsed, why they
          avoid the tab. The design method tests reaction to the mechanism
          itself.
        </p>

        <div className={`${s.card} ${s.cardAccent}`}>
          <div className={s.cardLabel}>The three knobs, and a deliberate adaptation</div>
          <p>
            <strong>Method:</strong> give reasons for their actions,
            structured as &ldquo;use it silently first, then explain.&rdquo;
          </p>
          <p>
            <strong>Stimulus:</strong> a vibe-prototyped, clickable opt-in
            flow — toggle, plain-language explanation, confirmation.
          </p>
          <p>
            <strong>Moderator role:</strong> silent observer during the task,
            active probe immediately after. This is{" "}
            <strong>not a stock pairing</strong> — it is adapted for persona
            four&apos;s anxiety profile, where real-time probing would
            contaminate the natural reaction.
          </p>
        </div>

        <h3>What the stimulus includes, and what it deliberately doesn&apos;t</h3>
        <p>
          <strong>In:</strong> the in-app notification introducing Round-Up
          Investing, the opt-in screen with its toggle and plain-language
          explanation (&ldquo;pay ₹47, ₹3 gets invested&rdquo;), and the
          confirmation immediately after toggling on.
        </p>
        <p>
          <strong>Out:</strong> the post-payment congratulations message and
          the full savings dashboard. Both are real parts of the feature.
          Both test a different hypothesis — whether reward messaging and
          progress-tracking drive retention — which is itself unvalidated
          and risks being annoying rather than motivating. Including them
          would muddy the signal on the one decision that matters most here:
        </p>

        <div className={s.pull}>
          Does the opt-in itself trigger investing-anxiety, or does
          effortlessness hold?
        </div>

        <p>
          It has to be a real clickable flow rather than a static wireframe.
          A full vibe-coded product with backend logic isn&apos;t justified
          at this stage, but a hand-drawn wireframe wouldn&apos;t be
          convincing enough for genuine hesitation to surface — and
          hesitation is the finding.
        </p>

        <div className={s.card}>
          <div className={s.cardLabel}>Holding the role consistently</div>
          <p>
            Stay silent and avoid reacting, verbally or facially, while the
            participant navigates the flow — resisting the urge to clarify
            or help even when they hesitate. The moment they finish, opt
            out, or give up, switch into active probing and walk back
            through specific moments using their own path as the prompt:{" "}
            <em>
              &ldquo;I noticed you paused right here — what was going through
              your mind?&rdquo;
            </em>
          </p>
        </div>

        <h2>Part D — Synthesis, and what would make me wrong</h2>
        <p>
          The synthesis sheets are built and deliberately empty, waiting on
          findings. Each hypothesis resolves to one of three outcomes —{" "}
          <strong>supports, contradicts, or new finding</strong> — with
          HYP04 tested via both methods so the interview and the design
          session can disagree with each other. The final decision is one of
          three: proceed to refine business value, gather more user
          validation, or invalidate and take it back to my manager.
        </p>

        <div className={s.metrics}>
          <div className={s.figure}>
            <span className={s.metricN}>~268</span>
            <span className={s.metricL}>registrations needed for 6 interviews</span>
          </div>
          <div className={s.figure}>
            <span className={s.metricN}>₹270–750</span>
            <span className={s.metricL}>monthly accumulation at 90–150 transactions</span>
          </div>
          <div className={s.figure}>
            <span className={s.metricN}>40–60%</span>
            <span className={s.metricL}>of 8M MAU assumed never-invested</span>
          </div>
        </div>

        <p>
          That last figure is the one to attack first, and I want to be
          precise about its status:{" "}
          <strong>
            it is an educated guess from immersion, not measured data.
          </strong>{" "}
          It is the first thing I&apos;d check against internal numbers, and
          if it comes back materially lower, the business case weakens
          before a single interview gets scheduled.
        </p>
        <p>
          The economics are modest by design. At 90–150 UPI transactions a
          month, a user accumulates roughly ₹3,240–9,000 a year before
          returns. Small individually — but the goal is habit formation over
          months and years, not a large first-year corpus. If the research
          shows users judge it on corpus size rather than effortlessness,
          the framing is wrong and the feature needs rethinking.
        </p>

        <div className={s.pull}>
          This is a plan, not a study. I did not run these interviews. What
          it demonstrates is how I&apos;d spend a research budget — and, more
          usefully, what I&apos;d refuse to spend it on.
        </div>

        <div className={s.downloads}>
          <a
            href="/downloads/round-up-investing-validation.pdf"
            className={s.download}
            download
          >
            Download the plan — PDF ↓
          </a>
          <Link href="/work/round-up-investing/field-kit" className={s.dlGhost}>
            Open the field kit →
          </Link>
        </div>
      </div>

      <div className={s.next}>
        <Link href="/#work">← All work</Link>
        <Link href="/work/meesho-reseller-teardown">
          Meesho teardown →
        </Link>
      </div>
    </main>
  );
}
