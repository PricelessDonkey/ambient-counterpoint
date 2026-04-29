---
name: add-page
description: Add a new music theory reference page to this site and link it from the landing page
argument-hint: [page title, topic, or chapter number — include "minimalist"/"autumnal"/"ecstatic" or use m01/a01/e01-style numbering to identify the series]
---

You are adding a new reference page to the Music Manual music theory site at `/Users/sam/projects/composing/`.

CLAUDE.md is already loaded and contains the full design system, color semantics, component reference, SVG diagram conventions, chapter page skeleton, and chapter nav rules. Do not re-read those — treat CLAUDE.md as your style guide and follow it.

## Step 0 — Detect section and gather context

**Determine which series this chapter belongs to:**
- If the invocation mentions "minimalist" OR uses `m01`–`m16` numbering → **Minimalist series**
- If the invocation mentions "autumnal" OR uses `a01`–`a99` numbering → **Autumnal series**
- If the invocation mentions "ecstatic" OR uses `e01`–`e12` numbering → **Ecstatic series**
- Otherwise → **Bach series** (default)

Run these reads in parallel based on the detected section:

### Bach series
1. **Grep `bach-cheatsheet-plan.md` for the target chapter** to get the topic list, diagrams, and Build It spec:
   ```
   grep -A 60 "Chapter N —" bach-cheatsheet-plan.md
   ```
   (Replace N with the chapter number. 60 lines captures the full section.)

2. **Read `build-it-log.md`** — compact record of every Bach chapter's Build It outcome. Use the previous chapter's entry instead of reading the previous HTML file.

3. **Glob for existing Bach chapter files** to determine prev/next links:
   ```
   ch0*.html
   ```

4. **Grep `index.html` (or `bach.html` if it exists) for the last `.page-card`** to find the insert point.

5. **Index target:** `bach.html`; **nav-back link:** `bach.html`

### Minimalist series
1. **Grep `minimalist-cheatsheet-plan.md` for the target chapter** to get the topic list, diagrams, and Build It spec:
   ```
   grep -A 60 "Chapter N —" minimalist-cheatsheet-plan.md
   ```
   (Replace N with the chapter number, e.g. "Chapter 6 —" for m06.)

2. **Read `minimalist-build-it-log.md`** — compact record of every minimalist chapter's Build It outcome. Use the previous chapter's entry instead of reading the previous HTML file.

3. **Glob for existing minimalist chapter files** to determine prev/next links:
   ```
   m0*.html
   ```
   Also check `m1*.html` for chapters 10–16.

4. **Grep `minimalist.html` for the last `.page-card`** to find the insert point. If `minimalist.html` doesn't exist yet, create it (see Step 3 note).

5. **Index target:** `minimalist.html`; **nav-back link:** `minimalist.html`

### Autumnal series
1. **Grep `autumnal-plan.md` for the target chapter** to get the topic list, diagrams, and Build It spec:
   ```
   grep -A 60 "Chapter N —" autumnal-plan.md
   ```

2. **Read `autumnal-build-it-log.md`** — compact record of every Autumnal chapter's Build It outcome. Use the previous chapter's entry instead of reading the previous HTML file.

3. **Glob for existing Autumnal chapter files** to determine prev/next links:
   ```
   a0*.html
   ```
   Also check `a1*.html` for chapters 10+.

4. **Grep `autumnal.html` for the last `.page-card`** to find the insert point. If `autumnal.html` doesn't exist yet, create it (see Step 3 note).

5. **Index target:** `autumnal.html`; **nav-back link:** `autumnal.html`

### Ecstatic series
1. **Grep `ecstatic-plan.md` for the target chapter** to get the topic list, diagrams, and Build It spec:
   ```
   grep -A 60 "Chapter N —" ecstatic-plan.md
   ```

2. **Read `ecstatic-build-it-log.md`** if it exists — compact record of every Ecstatic chapter's Build It outcome. Use the previous chapter's entry instead of reading the previous HTML file.

3. **Glob for existing Ecstatic chapter files** to determine prev/next links:
   ```
   e0*.html
   ```

4. **Grep `ecstatic.html` for the last `.page-card`** to find the insert point. If `ecstatic.html` doesn't exist yet, create it (see Step 3 note).

5. **Index target:** `ecstatic.html`; **nav-back link:** `ecstatic.html`

## Step 1 — Determine page type

### Chapter page
- **Filename, number, title** — from the File Naming section in the relevant plan
  - Bach: `ch01-single-line.html` through `ch12-canons-rounds.html`
  - Minimalist: `m01-the-loop-as-architecture.html` through `m16-evolution.html`
  - Autumnal: `a01-what-is-autumnal.html` through `a17+`
  - Ecstatic: `e01-what-is-ecstatic.html` through `e12-the-complete-arc.html`
- **Topics** — use the numbered list from the plan verbatim as the card outline
- **Diagrams** — build every diagram listed under "Diagrams needed"
- **Build It** — use the plan's exercise spec; read the relevant build-it-log for the previous chapter's state and frame this as a direct continuation ("Open your M01 session…" or "Open your Ch01 session…")

### Standalone reference page
- **Filename** — kebab-case
- **Title/subtitle** — derive freely from topic
- No Build It card required unless the topic naturally calls for one

## Step 2 — Create the HTML page

Follow the chapter page skeleton in CLAUDE.md exactly. Key reminders:
- All styles come from `styles.css` — no inline `<style>` blocks
- All diagrams are inline SVG inside `.diagram-wrap` — no image files
- Include `<script src="components/index.js" defer></script>` in `<head>` after the stylesheet link
- Use `<site-nav>`, `<site-banner>`, `<site-hero>`, `<intro-box>`, `<content-card>`, `<chapter-nav>`, `<site-footer>` components (see CLAUDE.md skeleton for syntax)
- `<content-card>` color values: `color="green"`, `color="orange"`, `color="purple"`, `color="red"` (default = blue). Build It card always uses `number="✦" color="orange"`
- Chapter nav: omit `prev-href`/`prev-title` for first chapter; omit `next-href`/`next-title` if the next HTML file doesn't exist yet (check your Glob result)
- **`<site-nav>` href and label:**
  - Bach → `href="bach.html" label="Bach Counterpoint"`
  - Minimalist → `href="minimalist.html" label="Minimalist Composition"`
  - Autumnal → `href="autumnal.html" label="Autumnal Sound"`
  - Ecstatic → `href="ecstatic.html" label="Ecstatic Music"`
- **`<site-footer>` text:**
  - Bach: `MUSIC MANUAL — CH NN: TITLE — D MINOR`
  - Minimalist: `MUSIC MANUAL — M NN: TITLE — D DORIAN`
  - Autumnal: `MUSIC MANUAL — A NN: TITLE — D AEOLIAN`
  - Ecstatic: `MUSIC MANUAL — E NN: TITLE — D MIXOLYDIAN`

**Cross-references:** Where a minimalist technique has a Bach counterpart (or vice versa), include a `<p>` cross-reference in the relevant card pointing to the other chapter's HTML file. The plan files list the expected cross-references.

## Step 3 — Update the index page

### If the index target file exists
Insert a new `.page-card` before the closing `</div>` of the relevant `.page-grid`:

```html
  <a class="page-card" href="[filename].html">
    <div class="page-card-header">
      <div class="page-card-num">[NN]</div>
      <div class="page-card-title">[Page Title]</div>
    </div>
    <div class="page-card-body">
      <p class="page-card-desc">[2-sentence description.]</p>
      <span class="page-card-link">Open</span>
    </div>
  </a>
```

### If `minimalist.html` doesn't exist yet (first minimalist chapter)
Create `minimalist.html` as a new section index page. Model it after the Bach chapter listing in `index.html`: same banner, hero, `.section-label`, `.page-grid` structure. Key differences:
- Hero title: `<h1><span>Minimalist Composition</span></h1>`
- Subtitle: `A working reference for Glass, Reich, and Riley techniques applied in Ableton Live.`
- Banner text references minimalist composers (Glass × Reich × Riley × Sinephro)
- nav-back at top: link back to `index.html` (the hub)
- Add the first `.page-card` entry for the chapter being created

Then add a card for the Minimalist series to `index.html` (the hub):
```html
<a class="page-card" href="minimalist.html">
  <div class="page-card-header">
    <div class="page-card-num">M</div>
    <div class="page-card-title">Minimalist Composition</div>
  </div>
  <div class="page-card-body">
    <p class="page-card-desc">Loop logic, phase shifting, modal harmony, and textural form — Glass, Reich, Riley, and Sinephro techniques for Ableton Live.</p>
    <span class="page-card-link">Open</span>
  </div>
</a>
```

## Step 4 — Update the relevant build-it-log

Append a new entry summarizing the exact Build It outcome (what notes, what voices, what tracks, what techniques, what the student now has in their session). Keep it under 10 lines.

- Bach chapters → `build-it-log.md`
- Minimalist chapters → `minimalist-build-it-log.md`
- Autumnal chapters → `autumnal-build-it-log.md`
- Ecstatic chapters → `ecstatic-build-it-log.md` (create if it doesn't exist yet)

## Done

Confirm the new page filename and the updated index page card.
