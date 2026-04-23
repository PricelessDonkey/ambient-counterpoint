# Web Components Migration Progress

**Plan file:** `/Users/sam/.claude/plans/mellow-frolicking-crayon.md`

## How to Use This File

At the start of any session continuing this migration:
1. Read this file to know what's done and what's next
2. Read the plan file for component API specs and design decisions
3. Pick up from the first unchecked item in the task list below
4. Check off items as you complete them (change `[ ]` to `[x]`)

---

## Implementation Steps

### Phase 1 — Infrastructure
- [x] Create `components/` directory
- [x] Write `components/index.js` (all 7 web component definitions in one file)
- [x] Add `:not(:defined) { visibility: hidden; }` FOUC rule to `styles.css`
- [x] Add `.hero-compact`, `.section-label`, `.page-grid`, `.page-card`, `.page-card-header`, `.page-card-num`, `.page-card-title`, `.page-card-body`, `.page-card-desc`, `.page-card-link` styles to `styles.css` (consolidating from inline style blocks in index pages)

### Phase 2 — Write and run migration script
- [x] Write Python migration script to `/tmp/migrate_components.py`
- [x] Run migration script on all 25 HTML pages
- [x] Verify script ran without errors

### Phase 3 — Manual fixes after script
- [x] `minimalist.html`: add `green-num` class to all `.page-card-num` and `green-link` class to all `.page-card-link` (script can't do this automatically — CSS default is blue after inline styles are removed)
- [x] `toolkit.html`: hero has non-standard `<br>` outside span — verify script left it as raw HTML
- [x] `phrase-shapes.html`: same as toolkit — verify hero left unchanged
- [x] Verify `deceptive-resolution.html` and `harmonic-engines.html` heroes rendered correctly (these have double-span pattern that script handles automatically)
- [ ] Visual spot-check: open `ch01-single-line.html` in browser and confirm identical appearance

### Phase 4 — Update documentation
- [x] Update `CLAUDE.md` — replace chapter page skeleton with component-based template
- [x] Update `.claude/skills/add-page/SKILL.md` — reference new component syntax, update page card insertion instructions
- [x] Update `.claude/skills/review-chapter/SKILL.md` — note that structural boilerplate is now in components (no change to review logic needed, but worth confirming)

---

## Component API Reference (quick ref — full detail in plan file)

```html
<site-nav href="bach.html" label="Bach Counterpoint"></site-nav>
<site-nav></site-nav>  <!-- homepage: renders span instead of link -->

<site-banner>BANNER TEXT ◇ REPEATED ◇ TEXT</site-banner>

<site-hero title="Page Title" subtitle="Italic framing sentence."></site-hero>
<site-hero title="Page Title" subtitle="..." compact></site-hero>  <!-- for index/listing pages -->

<intro-box>Text with <strong>bold</strong> parts.</intro-box>

<content-card number="1" title="Card Title">
  <!-- body content: sub-sections, diagrams, principle-box, etc. -->
</content-card>
<content-card number="2" color="green" title="Card Title">...</content-card>
<!-- color values: green, orange, purple, red (default = blue) -->
<!-- Build It card: number="✦" color="orange" -->

<chapter-nav
  prev-href="ch01-single-line.html" prev-title="Ch 01 — A Single Line"
  next-href="ch03-two-voices.html"  next-title="Ch 03 — Adding a Second Voice">
</chapter-nav>
<!-- omit prev-href/prev-title for first chapter; omit next-href/next-title for last -->

<site-footer text="MUSIC MANUAL — CH 01: A SINGLE LINE — D MINOR"></site-footer>
```

## Script tag (add to every page's `<head>`, after the stylesheet link)
```html
<script src="components/index.js" defer></script>
```

---

## Pages Status

### Index/listing pages (3)
- [x] `index.html`
- [x] `bach.html`
- [x] `minimalist.html`

### Bach chapter pages (12)
- [x] `ch01-single-line.html`
- [x] `ch02-implied-polyphony.html`
- [x] `ch03-two-voices.html`
- [x] `ch04-tension-release.html`
- [x] `ch05-harmonic-foundations.html`
- [x] `ch06-harmonic-color.html`
- [x] `ch07-the-sentence.html`
- [x] `ch08-motivic-development.html`
- [x] `ch09-large-scale-form.html`
- [x] `ch10-space-breathing.html`
- [x] `ch11-ambient-counterpoint.html`
- [x] `ch12-canons-rounds.html`

### Minimalist chapter pages (4)
- [x] `m01-the-loop-as-architecture.html`
- [x] `m02-loop-craft.html`
- [x] `m03-micro-variation.html`
- [x] `m04-the-pulse.html`

### Reference pages (6)
- [x] `toolkit.html`
- [x] `phrase-shapes.html`
- [x] `baroque-sentence.html`
- [x] `deceptive-resolution.html`
- [x] `harmonic-engines.html`
- [x] `bach_chord_cheat_sheet.html`

### Documentation
- [x] `CLAUDE.md`
- [x] `.claude/skills/add-page/SKILL.md`
- [x] `.claude/skills/review-chapter/SKILL.md`
