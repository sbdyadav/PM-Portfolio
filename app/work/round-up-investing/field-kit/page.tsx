import type { Metadata } from "next";
import Link from "next/link";
import k from "./kit.module.css";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Interview field kit — Round-Up Investing",
  description:
    "The printable moderator kit: screener, staged prompts, the design-method task and the synthesis table.",
};

const stage2 = [
  "Walk me through the last time you got your salary — what did you do with it in the first few days?",
  "Think about the last UPI payment you made today or yesterday — what were you paying for, and how much was it?",
  "Tell me about the last time you thought about saving or investing money — what triggered that thought?",
  "Walk me through the last time you checked a savings or investment account balance — what app was it, and how did that feel?",
  "Tell me about the last time you spent on something small and had leftover change. What did you do with it?",
];

const stage3 = [
  { q: "Walk me through the last time you set up a recurring deposit or SIP — what happened over the following weeks?", h: "HYP02" },
  { q: "Walk me through the last time you tried to track your spending using an app, spreadsheet or notebook.", h: "HYP02" },
  { q: "Walk me through the last time you had a small amount of money sitting idle in your account — what happened to it?", h: "HYP03" },
  { q: "Think of the last time you told yourself 'I should really start saving' — what was happening around you?", h: "HYP03" },
  { q: "Walk me through the last time you opened an investing app on your phone — what happened during that session?", h: "HYP04" },
  { q: "Walk me through the last time investing came up in a conversation with a friend, family member or colleague.", h: "HYP04" },
  { q: "Tell me about the last time a deduction from your account surprised you — what did you do next?", h: "HYP04" },
  { q: "What would have to be true for you to leave something like this switched on for a year?", h: "HYP01" },
];

export default function FieldKit() {
  return (
    <main className={`long ${k.page}`}>
      <Link href="/work/round-up-investing" className={k.back}>
        ← Round-Up Investing
      </Link>

      <div className={k.actions}>
        <PrintButton />
      </div>

      <article className={k.sheet}>
        <div className={k.runHead}>
          <span>Round-Up Investing · Interview field kit</span>
          <span>Bhagwandas Yadav</span>
        </div>

        <h1 className={k.h1}>Interview field kit</h1>

        <div className={k.metaStrip}>
          <div className={k.metaItem}>
            <span className={k.metaLabel}>Session length</span>
            <span className={k.metaValue}>45 minutes</span>
          </div>
          <div className={k.metaItem}>
            <span className={k.metaLabel}>Participants</span>
            <span className={k.metaValue}>6 completed</span>
          </div>
          <div className={k.metaItem}>
            <span className={k.metaLabel}>Methods</span>
            <span className={k.metaValue}>Interview + design method</span>
          </div>
        </div>

        <section>
          <h2 className={k.h2}>What this session is testing</h2>
          <div className={k.tableWrap}>
            <table className={k.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Hypothesis</th>
                  <th>Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HYP01</td>
                  <td>Round-ups bridge daily payment users into investing engagement</td>
                  <td>Interview</td>
                </tr>
                <tr>
                  <td>HYP02</td>
                  <td>The problem is a habit gap, not an access gap — lapsed SIPs, not missing products</td>
                  <td>Interview</td>
                </tr>
                <tr>
                  <td>HYP03</td>
                  <td>Severity is emotional: guilt about not saving, not mild inconvenience</td>
                  <td>Interview</td>
                </tr>
                <tr>
                  <td>HYP04</td>
                  <td>The opt-in preserves effortlessness rather than triggering investing-anxiety</td>
                  <td>Interview + design method</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={k.sec}>
          <h2 className={k.h2}>Screener</h2>
          <div className={k.prompt}>
            <div className={k.promptRow}>
              <span className={k.promptN}>1</span>
              <span className={k.promptText}>
                Have you set up a recurring deposit, SIP or savings goal in the
                last year that you later stopped contributing to?
              </span>
            </div>
          </div>
          <div className={k.prompt}>
            <div className={k.promptRow}>
              <span className={k.promptN}>2</span>
              <span className={k.promptText}>
                Do you currently use any method — an app, spreadsheet, or manual
                habit — to track or set aside spare money after a purchase?
              </span>
            </div>
          </div>
          <div className={k.prompt}>
            <div className={k.promptRow}>
              <span className={k.promptN}>3</span>
              <span className={k.promptText}>
                How do you typically feel when you open the investments section
                of a financial app — comfortable, or something you tend to avoid?
              </span>
            </div>
          </div>
        </section>

        <section className={k.sec}>
          <h2 className={k.h2}>Stage 1 · Psychological safety (~5 min)</h2>
          <div className={k.script}>
            &ldquo;Before we start, just so you know — I&apos;m not from the
            investing team, I&apos;m just trying to learn how people actually
            manage money day to day. There&apos;s no right or wrong answer
            here, and you genuinely can&apos;t hurt my feelings. It&apos;s not
            my project, I&apos;m here to learn.&rdquo;
          </div>
          <div className={k.script}>
            &ldquo;Mind if I record this, just for internal notes? It
            won&apos;t be shared anywhere outside the team.&rdquo;
          </div>
          <p className={k.p}>
            Then warm up: how&apos;s the week going, what do they do for work
            — enough to get a sense of their day.
          </p>
          <div className={k.notesBox}>
            <div className={k.notesLabel}>Notes</div>
            <div className={k.rule} />
            <div className={k.rule} />
            <div className={k.rule} />
          </div>
        </section>

        <section className={k.sec}>
          <h2 className={k.h2}>Stage 2 · Immersion (~10 min)</h2>
          <p className={k.p}>
            Anchor every question to a specific past event. What they say they
            would do and what they did are different data.
          </p>
          {stage2.map((q, i) => (
            <div key={i} className={k.prompt}>
              <div className={k.promptRow}>
                <span className={k.promptN}>{i + 1}</span>
                <span className={k.promptText}>{q}</span>
              </div>
              <div className={k.rule} />
            </div>
          ))}
        </section>

        <section className={k.sec}>
          <h2 className={k.h2}>Stage 3 · Validation (~30 min)</h2>
          {stage3.map((p, i) => (
            <div key={i} className={k.prompt}>
              <div className={k.promptRow}>
                <span className={k.promptN}>{i + 1}</span>
                <span className={k.promptText}>{p.q}</span>
                <span className={k.hyp}>{p.h}</span>
              </div>
              <div className={k.rule} />
              <div className={k.rule} />
            </div>
          ))}
        </section>

        <div className={k.avoid}>
          <div className={k.avoidLabel}>Do not ask</div>
          <ul>
            <li>
              &ldquo;Think about the last time someone suggested an investment
              app to you…&rdquo; — assumes the event occurred.
            </li>
            <li>
              &ldquo;Tell me about the last time you felt behind on saving
              compared to your peers…&rdquo; — leading; embeds peer comparison
              and feeling behind.
            </li>
            <li>
              &ldquo;…a time you opened an investing app but didn&apos;t put
              money in&rdquo; — double-barrelled; two separate probes.
            </li>
            <li>
              Anything beginning &ldquo;Would you use…&rdquo; or &ldquo;Do you
              think you&apos;d…&rdquo; — hypotheticals produce socially
              desirable answers.
            </li>
          </ul>
        </div>

        <section className={`${k.sec} ${k.breakBefore}`}>
          <h2 className={k.h2}>Design method · The opt-in task</h2>
          <div className={k.script}>
            &ldquo;This is a new feature we&apos;re trying out. I&apos;m going
            to hand it to you and just watch quietly while you go through it —
            there&apos;s no right way to do it, just do whatever feels
            natural. Once you&apos;re done, I&apos;ll ask you a few questions
            about what you were thinking along the way.&rdquo;
          </div>
          <p className={k.p}>
            <strong>Hold the role.</strong> Stay silent. Do not react,
            verbally or facially, even if they hesitate. Do not clarify. The
            hesitation is the finding.
          </p>

          <div className={k.tableWrap}>
            <table className={k.table}>
              <thead>
                <tr>
                  <th>Moment</th>
                  <th>What they did</th>
                  <th>Hesitation?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Notification appears",
                  "Opt-in screen opens",
                  "Reads the explanation",
                  "Toggles on / off",
                  "Confirmation screen",
                ].map((m) => (
                  <tr key={m}>
                    <td>{m}</td>
                    <td />
                    <td />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={k.p}>
            <strong>Then probe.</strong> Walk back through their own path, not
            a generic list: <em>&ldquo;I noticed you paused right here — what
            was going through your mind?&rdquo;</em>
          </p>
        </section>

        <section className={k.sec}>
          <h2 className={k.h2}>Synthesis</h2>
          <div className={k.tableWrap}>
            <table className={k.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Supports / contradicts / new finding</th>
                  <th>Evidence</th>
                </tr>
              </thead>
              <tbody>
                {["HYP01", "HYP02", "HYP03", "HYP04 (interview)", "HYP04 (design method)"].map(
                  (h) => (
                    <tr key={h}>
                      <td>{h}</td>
                      <td />
                      <td />
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          <div className={k.notesBox}>
            <div className={k.notesLabel}>The one thing that surprised me</div>
            <div className={k.rule} />
            <div className={k.rule} />
            <div className={k.rule} />
          </div>
        </section>

        <div className={k.runFoot}>
          <span>Participant ___________________ Date ___________</span>
          <span>Moderator: silent during task, probe after.</span>
        </div>
      </article>
    </main>
  );
}
