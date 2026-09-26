import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import s from "../../study.module.css";
// Written by `npm run capture:cadence`, so the reserved space always
// matches the real files — panel heights move as the model rewrites.
import SHOTS from "./shots.json";

export const metadata: Metadata = {
  title: "Cadence — the one step worth giving to a model",
  description:
    "A habit tracker built in 150 minutes on 17 of 50 credits, scored 90/100 — and the single step that justified putting a model in it at all.",
  alternates: { canonical: "/work/cadence" }
};

export default function Cadence() {
  return (
    <main className={`long ${s.page}`}>
      <Link href="/#work" className={s.back}>
        ← Work
      </Link>

      <header className={s.head}>
        <span className={s.eyebrow}>03 · Build · 2026</span>
        <h1 className={s.title}>
          Cadence — the one step worth giving to a model
        </h1>
        <p className={s.lede}>
          A habit tracker built in 150 minutes during Ayuda Learning&apos;s AI
          build hackathon, using 17 of the 50 build credits available with no
          retries. Second of eight teams, marked 90/100 against the
          programme&apos;s rubric. Most of it isn&apos;t an AI product at all,
          and working out which part was took longer than building the thing.
        </p>

        <div className={s.downloads}>
          <a
            href="https://cadence-nudge.lovable.app"
            className={s.dlSolid}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the build ↗
          </a>
          <a href="#the-mistake" className={s.dlGhost}>
            Skip to the mistake ↓
          </a>
        </div>
      </header>

      <div className={s.body}>
        <p>
          The brief was a habit tracker, and the temptation was to put a model
          in the middle of it and call it AI.
        </p>
        <p>
          Most of a habit tracker is a form, a table and a filter. Recording a
          check-in is a database write. Counting a streak is arithmetic.
          Comparing this week&apos;s rate to last month&apos;s is a
          subtraction. None of that gets better with a language model, and all
          of it gets slower, more expensive and less reliable.
        </p>
        <p>
          I should say what this piece doesn&apos;t do. Everything else on this
          site starts by questioning the brief. Here I couldn&apos;t — the use
          case was fixed, there were no users to talk to, and the data is
          invented. So the judgment moved downstream. Given a problem I
          didn&apos;t get to choose, the question became which single step
          deserved a model, and which ones would be made worse by one.
        </p>
        <p>
          There was exactly one step worth giving to a model: working out which
          habit is genuinely slipping, and why. Not whether the numbers dropped
          — code answers that. Which one deserves attention this week, and what
          the user&apos;s own notes say about it. The word &ldquo;genuinely&rdquo;
          is where the judgment sits, and the evidence lives in free text a
          query can&apos;t read.
        </p>

        <div className={s.pull}>
          Finding that step, and refusing to put a model anywhere else, was the
          whole design.
        </div>

        <Shot
          name="dashboard"
          alt="Cadence dashboard listing five habits with four weeks of check-in history, marked with amber completion dots"
          caption="Five habits, four weeks of history. The amber dots are code’s work, not the model’s."
        />

        <h2>The decision I&apos;d defend first</h2>
        <p>
          My first design had the model read each habit and classify it as
          holding, eroding or stalled. A teammate&apos;s design had code detect
          the drop against a threshold, compute the date the decline started,
          and pass only the flagged habits to the model — with a hard rule that
          the model never invents or revises a date.
        </p>
        <p>
          I had a competing design and it was worse. Recognising that quickly,
          and throwing mine away rather than defending it, was the most useful
          thing I did in the first hour — the call chain in the next section was
          built on top of his foundation, and that part was mine.
        </p>
        <p>
          I took his over mine, and the reasoning is the point. Detection is
          arithmetic. Explanation is judgment. Once code owns the date, the
          model structurally cannot hallucinate one, because it is never asked
          to produce one. That isn&apos;t a prompt instruction a model might
          ignore. It&apos;s a shape it can&apos;t get out of.
        </p>
        <p>
          Three things fell out of it. Five habits go in, two reach the model,
          so the expensive call only runs on what matters. Every date in the
          final message traces to a database row. And habits younger than
          fourteen days have no baseline, so they can never be flagged, so they
          never reach the model at all — restraint from a rule rather than from
          hoping a model shows judgment.
        </p>

        <Shot
          name="refusal"
          alt="The analysis view showing two flagged habits; the three-day-old Spanish habit does not appear"
          caption="Spanish is three days old. It’s on the dashboard and absent from the analysis — not because the model declined, but because it was never asked."
        />

        <h2>One job, three calls</h2>
        <p>
          The diagnosis isn&apos;t one prompt. Written as one, it&apos;s three
          jobs stacked: pull the patterns out of the log, decide which habit
          wins, write the message.
        </p>
        <p>
          Splitting them does two things. When the output is wrong, you can look
          at the intermediate result and see which link broke, then fix that
          prompt alone instead of rewriting everything and guessing. And the
          cheap call runs first — extraction at low temperature with a short
          output — so the expensive reasoning call sees two habits instead of
          five.
        </p>
        <p>
          The last call never sees the raw log. It gets a one-line verdict and
          writes from that. Which is why it can&apos;t cite a date that
          doesn&apos;t exist.
        </p>

        <Shot
          name="analysis"
          alt="A generated nudge citing a specific decline start date and quoting the user’s own check-in note"
          caption="The nudge cites the date and the user’s own note. Both were supplied by code, not generated."
        />

        <h2 id="the-mistake" className={s.anchor}>
          The mistake
        </h2>
        <p>
          Before running the first build I wrote down what a correct result
          looked like: two habits flagged, three clean.
        </p>
        <p>
          The build came back with one. Not a build failure — it did exactly
          what I specified. The specification was wrong.
        </p>
        <p>
          I&apos;d said: compare the last seven days against the preceding
          fourteen. But a habit that stopped three weeks ago has already dragged
          its own baseline down. Last week at 14%, the fortnight before at 21% —
          a drop of a third, under my threshold. The worse a stall got, the less
          it looked like a decline. A habit that had completely stopped was
          invisible to the logic built to catch it.
        </p>
        <p>
          The fix was to compare against the habit&apos;s best fortnight
          anywhere in its history rather than the one immediately before. Two
          lines of specification.
        </p>
        <p>
          What I&apos;d point at isn&apos;t the fix, it&apos;s that the expected
          result was written down before the build ran. I didn&apos;t notice
          something looked off. I checked against a prediction. And the
          correction went into a prompt that was already queued, so it cost
          nothing — which is most of why the whole thing came in at 17 credits
          of 50, with no retries.
        </p>

        <h2>What I left out, and why</h2>
        <p>
          No notification delivery — &ldquo;at most one nudge a week&rdquo;
          implies scheduling infrastructure, so the analysis runs on demand
          instead. No habit editing; archive only, and archiving keeps the
          history rather than deleting it.
        </p>
        <p>
          And no evals, which is the one that matters. The honest position is
          that I know the system produces the right answer on data I designed to
          have a right answer. That&apos;s a smoke test. A real eval needs
          thirty to fifty real logs labelled for &ldquo;genuinely slipping, and
          why&rdquo;, and a test of whether a cause-specific message actually
          gets someone back on track more often than a generic one. Until that
          exists, every improvement to the prompts is guesswork, and saying
          otherwise would be overclaiming.
        </p>
        <p>
          If I had to name the number this product lives or dies on, it&apos;s
          the 14-day recovery rate after a nudge — whether a habit that was
          slipping gets back to its baseline — compared between a nudge that
          names a specific cause and a generic one. If the specific version
          doesn&apos;t beat the generic one, the whole diagnosis layer is
          expensive decoration. I don&apos;t have that number.
        </p>

        <Shot
          name="parser"
          alt="The habit-creation field reading the plain-English entry “Stop buying coffee out” as a stop habit"
          caption="Typing a habit in plain English. ‘Stop buying coffee out’ is read as a stop habit, where a check-in means you succeeded in not doing it — which inverts the streak maths."
        />

        <h2>The scorecard</h2>
        <p>
          Built during Ayuda Learning&apos;s AI Build Hackathon, September 2026.
          Second of eight teams, 90 of 100. Full marks on call design and build
          discipline. Seven of the ten marks I lost came from one cell in one
          table: a step marked as human work in the workflow and nominated as an
          AI step two sections later. Both source documents were right. The
          error appeared where their shapes didn&apos;t match.
        </p>
        <p>
          The demo runs on fixed four-week data so the diagnosis is
          reproducible. There&apos;s a reset button on it.
        </p>
      </div>

      <div className={s.next}>
        <Link href="/#work">← All work</Link>
        <Link href="/work/round-up-investing">← Round-Up Investing</Link>
      </div>
    </main>
  );
}

function Shot({
  name,
  alt,
  caption,
}: {
  name: keyof typeof SHOTS;
  alt: string;
  caption: string;
}) {
  const { w, h } = SHOTS[name];
  return (
    <figure className={s.shot}>
      <div className={s.shotFrame}>
        <Image
          src={`/case-studies/cadence/${name}.png`}
          alt={alt}
          width={w}
          height={h}
          sizes="(max-width: 760px) 100vw, 680px"
          className={s.shotImg}
        />
      </div>
      <figcaption className={s.shotCap}>{caption}</figcaption>
    </figure>
  );
}
