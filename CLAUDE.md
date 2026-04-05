# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ambient Counterpoint** is a static music theory reference site bridging Bach's contrapuntal techniques with minimalist/ambient electronic music production. All examples are in D minor. No build tools — pure HTML, CSS, and inline SVG.

## Adding a New Page

Use the `/add-page` skill. It handles everything: creates the HTML file and updates `index.html`.

If doing it manually:
1. Read `index.html` to find the next page number and match the `.page-card` structure
2. Create the new `.html` file using the template in `.claude/skills/add-page/SKILL.md`
3. Add a `.page-card` entry to the `.page-grid` div in `index.html`

## Design System

All pages link `styles.css` — never add inline styles or page-specific `<style>` blocks. All visual components are defined there.

**Color semantics (use consistently):**
- Blue — logic, upper voice, structural statements
- Green — diatonic, expected resolutions, Fortspinnung
- Orange — surprise, deceptive moves, Epilog
- Purple — chromatic color chords, Neapolitan
- Red — tension, leaps, lower voice

**Card number colors:** default blue, or add class `green-num`, `orange-num`, `purple-num`, `red-num`

**Key components:** `.card`, `.card-header`, `.card-number`, `.card-body`, `.sub-section`, `.sub-title`, `.idiom`, `.idiom-name`, `.principle-box`, `.intro-box`, `.key`, `.diagram-wrap`, `.banner`, `.hero`, `.nav-back`

Use `.idiom` / `.idiom-name` for rule-based tips (like toolkit.html). Use `.sub-section` / `.sub-title` for explanatory sub-concepts. Use `.principle-box` for closing takeaways. Use `.key` for highlighted terms inline in `<p>` text.

## Chapter Page Structure

Every chapter page (`ch01-single-line.html`, etc.) follows this skeleton — do not read an existing page to derive this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ch 0N — Title Here</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="nav-back"><a href="index.html">Ambient Counterpoint</a></div>

<div class="banner"><span class="banner-text">CHAPTER 0N — TOPIC — ... repeated ◇ separated ...</span></div>

<div class="hero">
  <h1><span>Title</span></h1>
  <p class="subtitle">One-line italic framing sentence.</p>
</div>

<div class="intro-box"><div class="inner">Blue context box — what this chapter covers and why it matters.</div></div>

<div class="content">
  <!-- cards go here -->
</div>

<div class="banner"><span class="banner-text">... bottom banner ...</span></div>

<div class="chapter-nav">
  <!-- If prev chapter exists: -->
  <a class="chapter-nav-item chapter-nav-prev" href="chNN-previous.html">
    <span class="chapter-nav-label">← Previous</span>
    <span class="chapter-nav-title">Ch NN — Previous Title</span>
  </a>
  <!-- If no prev chapter, omit the <a> entirely (leave the slot empty or omit) -->

  <!-- If next chapter exists: -->
  <a class="chapter-nav-item chapter-nav-next" href="chNN-next.html">
    <span class="chapter-nav-label">Next →</span>
    <span class="chapter-nav-title">Ch NN — Next Title</span>
  </a>
  <!-- If no next chapter, omit the <a> entirely -->
</div>

<div class="footer"><p>AMBIENT COUNTERPOINT — CH 0N: TITLE — D MINOR</p></div>

</body>
</html>
```

**Chapter nav rules:**
- Always include a `.chapter-nav` div between the bottom banner and footer
- For the first chapter, only the "Next →" link is present
- For the last built chapter, only the "← Previous" link is present
- Link to the adjacent chapter's actual filename. If the next chapter hasn't been built yet, omit that link
- Derive prev/next titles from `bach-cheatsheet-plan.md`

Each chapter ends with a **Build It** card using `orange-num` on the card number and `✦` as the number symbol. Each Build It should continue from the previous chapter's Build It — same Ableton session, new technique layered on top. Read the prior chapter's Build It before writing a new one.

## Diagrams

All diagrams are inline SVG inside `.diagram-wrap` divs — no image files. Follow the visual conventions used in existing pages: blue lines for steps, red for leaps, ghost lines for expected-but-not-taken paths, dots for notes on a grid.

**SVG mechanics:**
- Standard viewBox width: `760`. Height varies by content (120–220 typical).
- SVG text always uses `font-family="Space Mono,monospace"` — never DM Sans inside SVG.
- Grid lines: `<line class="grid-line"/>` (styled in styles.css as `stroke:#d9d4ca; stroke-width:0.5`).
- Note dots: `r="5"` normal, `r="7"` emphasized, `r="5" fill="#ffd200" stroke="#1a1a1a" stroke-width="1.5"` for peak/arrival moments.
- Connecting lines between notes: `stroke-width="2.5"`, `fill="none"`, `stroke-linejoin="round"` on `<polyline>`.
- Leap lines: add `stroke-dasharray="6 3"` and use red (`#e04848`).
- Arrow markers: define in `<defs>` per diagram; use `<marker>` with `orient="auto"`.

**Piano roll diagram conventions:**
- Note blocks: `height="8"`, `rx="2"` (rounded corners).
- Pitch row spacing: **20px per semitone** (so an octave = 140px of vertical space).
- Typical pitch anchors in D minor (y=0 at top): A4=50, G4=70, F4=90, E4=110, D4=130, C4=150, Bb3=170 — adjust viewBox height to fit.
- Quarter note width: **45px**. Eighth note: **22px**. Half note: **90px**. (Assumes ~120px per bar.)
- Bar lines: `stroke="#1a1a1a" stroke-width="1.5"`. Beat subdivisions: use `class="grid-line"`.
- Color convention: blue notes = structural/stepwise, red = leaps, orange = break/cadence, yellow fill + black stroke = final arrival.

## Fonts

- **Space Mono** — headlines, labels, uppercase, technical content
- **DM Sans weight 300** — body text

Both loaded from Google Fonts in each page's `<head>`.

## Project Plan

Two plan files, one per series:

- **`bach-cheatsheet-plan.md`** — Bach Counterpoint series (ch01–ch12). Covers design conventions, musical standards (D minor), and chapter-by-chapter topic/diagram/Build It specs.
- **`minimalist-cheatsheet-plan.md`** — Minimalist Composition series (m01–m16). Covers Glass/Reich/Riley techniques, D Dorian conventions, loop/phase/texture diagrams, and chapter-by-chapter specs.

Read the relevant plan file when planning substantial new content. Both series share `styles.css` and CLAUDE.md conventions.

### Site structure

- `index.html` — hub landing page linking to both series
- `bach.html` — Bach series chapter listing (target of nav-back in ch* pages)
- `minimalist.html` — Minimalist series chapter listing (target of nav-back in m* pages)
- `build-it-log.md` — Build It session log for Bach chapters
- `minimalist-build-it-log.md` — Build It session log for Minimalist chapters

Until the hub restructure is done, minimalist chapters are listed in `index.html` under a second `.section-label`. The `/add-page` skill handles this automatically.
