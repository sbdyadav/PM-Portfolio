/**
 * Captures the four Cadence screenshots used by /work/cadence.
 *
 *   npm run capture:cadence
 *
 * The app is a live demo, so every run resets it to seed state first and
 * again at the end. Nothing here saves a habit or leaves data behind.
 *
 * Shots are clipped to the app's own content column (main is max-w-3xl,
 * i.e. 768px) rather than the full 1440px viewport. At 1440 the column is
 * centred with ~336px of empty background each side, which on a 680px
 * reading column would shrink the actual content to the point of being
 * unreadable. Set FULL_WIDTH below to capture the whole viewport instead.
 */

import { chromium, type Page, type Browser } from "playwright";
import { mkdir, open, writeFile } from "node:fs/promises";
import path from "node:path";

const URL = "https://cadence-nudge.lovable.app";
const OUT = path.resolve(import.meta.dirname, "../public/case-studies/cadence");

// The page reserves space from these, so they are written out rather than
// hardcoded: panel heights shift run to run as the model writes new prose.
const MANIFEST = path.resolve(import.meta.dirname, "../app/work/cadence/shots.json");

const VIEWPORT = { width: 1440, height: 900 };
const SCALE = 2;           // retina
// Breathing room around a clipped region. Kept below the app's own
// spacing (16px between cards, 24px above a panel) so a clip never
// bleeds a sliver of the neighbouring element into frame.
const PAD = 12;
const FULL_WIDTH = false;  // true -> capture the whole viewport width

// Three sequential model calls. Measured at ~37s against the live app,
// so a 30s budget is too tight; this leaves headroom for a slow day.
const ANALYSIS_TIMEOUT = 90_000;

type Box = { x: number; y: number; width: number; height: number };

const results: { name: string; ok: boolean; note: string }[] = [];
const record = (name: string, ok: boolean, note: string) => {
  results.push({ name, ok, note });
  console.log(`${ok ? "  ok  " : " FAIL "} ${name.padEnd(14)} ${note}`);
};

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

/** Horizontal extent of the app's content column, in document pixels. */
async function columnX(page: Page): Promise<{ x: number; width: number }> {
  if (FULL_WIDTH) return { x: 0, width: VIEWPORT.width };
  return page.evaluate((pad) => {
    const m = document.querySelector("main")!.getBoundingClientRect();
    return { x: Math.max(0, m.left - pad), width: Math.min(m.width + pad * 2, innerWidth) };
  }, PAD);
}

/** Document-space box of a selector, padded. */
async function boxOf(page: Page, selector: string, pad = PAD): Promise<Box> {
  const v = await page.evaluate(
    ({ sel, pad }) => {
      const el = document.querySelector(sel);
      if (!el) throw new Error(`no element for ${sel}`);
      const r = el.getBoundingClientRect();
      return { top: r.top + scrollY - pad, height: r.height + pad * 2 };
    },
    { sel: selector, pad },
  );
  const { x, width } = await columnX(page);
  return { x, y: Math.max(0, v.top), width, height: v.height };
}

const shotSizes: Record<string, { w: number; h: number }> = {};

/** Intrinsic size of a PNG already on disk, straight from the IHDR chunk. */
async function pngSize(file: string): Promise<{ w: number; h: number }> {
  const fh = await open(file, "r");
  try {
    const buf = Buffer.alloc(24);
    await fh.read(buf, 0, 24, 0);
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  } finally {
    await fh.close();
  }
}

async function shoot(page: Page, file: string, clip: Box) {
  const out = path.join(OUT, file);
  await page.screenshot({
    path: out,
    clip,
    fullPage: true,
    animations: "disabled",
  });
  shotSizes[file.replace(/\.png$/, "")] = await pngSize(out);
}

/** Click "Reset demo data", confirm, and wait for the five seed habits. */
async function resetDemo(page: Page, label: string) {
  await page.getByRole("button", { name: "Reset demo data" }).click();
  await page.getByRole("button", { name: "Yes, reset" }).click();
  await page.waitForFunction(
    () => document.querySelectorAll("article").length === 5,
    null,
    { timeout: 15_000 },
  );
  // the seed always carries exactly two amber "needs attention" dots
  await page.waitForFunction(
    () => document.querySelectorAll('article span[class*="bg-amber"]').length === 2,
    null,
    { timeout: 10_000 },
  );
  console.log(`  ·    reset (${label})`);
}

async function settle(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
}

/* ------------------------------------------------------------------ */
/* shots                                                               */
/* ------------------------------------------------------------------ */

/** 1. Top of page through the bottom of the third habit card. */
async function dashboard(page: Page) {
  await page.waitForFunction(
    () => document.querySelectorAll("article").length === 5,
    null,
    { timeout: 20_000 },
  );
  await settle(page);

  const facts = await page.evaluate(() => {
    const arts = Array.from(document.querySelectorAll("article"));
    const third = arts[2].getBoundingClientRect();
    return {
      cards: arts.length,
      amberInFirstThree: arts
        .slice(0, 3)
        .filter((a) => a.querySelector('span[class*="bg-amber"]')).length,
      amberNames: arts
        .filter((a) => a.querySelector('span[class*="bg-amber"]'))
        .map((a) => a.querySelector("h2,h3,h4")?.textContent?.trim() ?? "?"),
      thirdBottom: third.bottom + scrollY,
    };
  });

  const { x, width } = await columnX(page);
  await shoot(page, "dashboard.png", {
    x,
    y: 0,
    width,
    height: Math.ceil(facts.thirdBottom + PAD),
  });

  record(
    "dashboard.png",
    facts.cards === 5 && facts.amberInFirstThree === 2,
    `${facts.cards} cards, ${facts.amberInFirstThree} amber in frame (${facts.amberNames.join(", ")})`,
  );
}

/** 2. The analysis result panel. Three sequential model calls. */
async function analysis(page: Page) {
  await page.getByRole("button", { name: "Analyse my four weeks" }).click();

  await page.waitForFunction(
    () => {
      const p = document.querySelector('section[class*="border-l-amber"]');
      return !!p && /Based on/.test(p.textContent ?? "") && /Why this habit/.test(p.textContent ?? "");
    },
    null,
    { timeout: ANALYSIS_TIMEOUT },
  );
  await settle(page);

  const facts = await page.evaluate(() => {
    const p = document.querySelector('section[class*="border-l-amber"]')!;
    const t = p.textContent ?? "";
    return {
      heading: p.querySelector("h2,h3,h4")?.textContent?.trim() ?? "",
      hasBasedOn: /Based on/.test(t),
      hasWhy: /Why this habit/.test(t),
      basedOn: (t.match(/Based on ([0-9-]+)/) ?? [])[1] ?? "",
      chars: t.length,
    };
  });

  await shoot(page, "analysis.png", await boxOf(page, 'section[class*="border-l-amber"]'));

  record(
    "analysis.png",
    facts.hasBasedOn && facts.hasWhy && !!facts.heading,
    `"${facts.heading}", Based on ${facts.basedOn}, Why-line present`,
  );
}

/**
 * 3. The analysis panel and the Spanish card in one frame.
 *    Spanish is 3 days old, so it is on the dashboard and absent from the
 *    analysis. The viewport is grown until the whole span fits on one screen.
 */
async function refusal(page: Page) {
  const span = async () =>
    page.evaluate(() => {
      const p = document.querySelector('section[class*="border-l-amber"]')!;
      const s = Array.from(document.querySelectorAll("article")).find((a) =>
        (a.textContent ?? "").includes("Spanish - 10 min"),
      )!;
      return {
        top: p.getBoundingClientRect().top + scrollY,
        bottom: s.getBoundingClientRect().bottom + scrollY,
        spanishPresent: !!s,
        spanishInPanel: (p.textContent ?? "").includes("Spanish"),
      };
    });

  let m = await span();
  const needed = Math.ceil(m.bottom - m.top + PAD * 2);

  if (needed > VIEWPORT.height) {
    await page.setViewportSize({ width: VIEWPORT.width, height: needed });
    await settle(page);
    m = await span(); // re-measure: the reflow moves things
  }

  await page.evaluate((y) => scrollTo(0, Math.max(0, y)), m.top - PAD);
  await settle(page);

  const { x, width } = await columnX(page);
  await shoot(page, "refusal.png", {
    x,
    y: Math.max(0, m.top - PAD),
    width,
    height: Math.ceil(m.bottom - m.top + PAD * 2),
  });

  await page.setViewportSize(VIEWPORT);
  await settle(page);

  record(
    "refusal.png",
    m.spanishPresent && !m.spanishInPanel,
    `panel + Spanish card in one frame (${Math.ceil(m.bottom - m.top + PAD * 2)}px tall), Spanish absent from analysis: ${!m.spanishInPanel}`,
  );
}

/** 4. The plain-English parser, stopped before save. */
async function parser(page: Page) {
  await page.getByRole("button", { name: "Add habit" }).click();
  const input = page.locator('input[placeholder^="Describe"]');
  await input.waitFor({ state: "visible", timeout: 10_000 });
  await input.fill("stop buying coffee out on weekdays");
  await page.getByRole("button", { name: "Continue" }).click();

  await page.waitForFunction(
    () =>
      Array.from(document.querySelectorAll("button")).some(
        (b) => b.textContent?.trim() === "Save habit",
      ),
    null,
    { timeout: 30_000 },
  );
  await settle(page);

  const facts = await page.evaluate(() => {
    const save = Array.from(document.querySelectorAll("button")).find(
      (b) => b.textContent?.trim() === "Save habit",
    )!;
    const panel = save.closest("section")!;
    const stop = Array.from(panel.querySelectorAll("button")).find(
      (b) => b.textContent?.trim() === "I want to stop this",
    );
    const fields = Array.from(panel.querySelectorAll("input,select")) as (
      | HTMLInputElement
      | HTMLSelectElement
    )[];
    return {
      name: fields[0]?.value ?? "",
      category: fields[1]?.value ?? "",
      target: fields[2]?.value ?? "",
      // the selected toggle is the one with the mint border
      stopSelected: !!stop && stop.className.includes("border-mint"),
    };
  });

  // the confirm panel is the section holding "Save habit"
  await page.evaluate(() => {
    const save = Array.from(document.querySelectorAll("button")).find(
      (b) => b.textContent?.trim() === "Save habit",
    )!;
    save.closest("section")!.setAttribute("data-shot", "confirm");
  });
  await shoot(page, "parser.png", await boxOf(page, 'section[data-shot="confirm"]'));

  // leave without saving
  await page.getByRole("button", { name: "Cancel" }).first().click();
  await page.waitForFunction(
    () =>
      !Array.from(document.querySelectorAll("button")).some(
        (b) => b.textContent?.trim() === "Save habit",
      ),
    null,
    { timeout: 10_000 },
  );

  record(
    "parser.png",
    facts.stopSelected && /coffee/i.test(facts.name),
    `name "${facts.name}", category ${facts.category}, target ${facts.target}, stop-toggle selected: ${facts.stopSelected}`,
  );
}

/* ------------------------------------------------------------------ */

async function main() {
  await mkdir(OUT, { recursive: true });

  const browser: Browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: SCALE,
  });

  try {
    await page.goto(URL, { waitUntil: "networkidle", timeout: 60_000 });

    // the Lovable platform badge is fixed-position furniture, not app UI
    await page.addStyleTag({
      content: "#lovable-badge{display:none !important}",
    });

    await resetDemo(page, "before");
    await settle(page);

    await dashboard(page);
    await analysis(page);
    await refusal(page);
    await parser(page);

    await resetDemo(page, "after");
  } finally {
    await browser.close();
  }

  await writeFile(MANIFEST, JSON.stringify(shotSizes, null, 2) + "\n");

  console.log(`\n  → ${OUT}`);
  console.log(`  → ${MANIFEST}`);
  const failed = results.filter((r) => !r.ok);
  if (failed.length) {
    console.error(`\n${failed.length} of ${results.length} shots failed their checks.`);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
