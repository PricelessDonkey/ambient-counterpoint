---
name: review-chapter
description: Review a chapter page for musical accuracy, diagram/text consistency, and clarity
argument-hint: [chapter filename or number, e.g. ch03 or ch03-two-voices.html]
---

You are reviewing a chapter of the Music Manual music theory site at `/Users/sam/projects/composing/` for accuracy and clarity. Your job is to find real errors and genuine gaps — not to rewrite the chapter.

CLAUDE.md is already loaded. Use it for design conventions if needed, but this skill is about *content correctness*, not style.

**Note on page structure:** Pages have been migrated to Web Components. Structural boilerplate (`<site-nav>`, `<site-banner>`, `<site-hero>`, `<intro-box>`, `<chapter-nav>`, `<site-footer>`, `<content-card>`) is rendered by `components/index.js`. The HTML file contains component tags with attributes/slots rather than raw `<div>` boilerplate — this is correct and expected. Review the *content* inside components, not the component tags themselves.

## Step 0 — Locate the file

Resolve the argument to a filename:
- If given a full filename (e.g. `ch03-two-voices.html`), use it directly.
- If given a chapter number (e.g. `ch03` or `3`), glob for `ch03-*.html` to find the actual filename.

Read the full chapter HTML.

## Step 1 — Parse claims and diagrams

Work through the chapter card by card. For each card:

**Extract text claims** — every statement about musical direction, interval size, scale degree, chord quality, or voice leading. Examples:
- "rises a fifth"
- "steps down by half-step"
- "Neapolitan chord (bII)"
- "resolves to the dominant"
- "the bass leaps a fourth"

**Extract SVG diagram data** — read the actual coordinate values to determine what the diagram *actually shows*:
- Note positions: compare `cy` / `y` values to determine direction (higher y = lower pitch in SVG)
- Interval size: count semitones from pitch anchors defined in CLAUDE.md (A4=50, G4=70, F4=90, E4=110, D4=130, C4=150, Bb3=170 — 20px per semitone)
- Note durations: derive from `width` values (quarter=45px, eighth=22px, half=90px)
- Colors: blue=structural/stepwise, red=leap, orange=break/cadence, yellow=arrival

## Step 2 — Cross-check each claim against its diagram

For every text claim paired with a diagram, verify:

1. **Direction** — does "up" mean decreasing y? Does "down" mean increasing y?
2. **Interval** — convert pixel distance to semitones using the 20px/semitone grid. Compare to the claimed interval name.
   - Unison=0, minor 2nd=1, major 2nd=2, minor 3rd=3, major 3rd=4, P4=5, tritone=6, P5=7, minor 6th=8, major 6th=9, minor 7th=10, major 7th=11, octave=12 semitones
3. **Scale degree / chord label** — verify against D natural minor (D E F G A Bb C) and D harmonic minor (same but C#). Flag any chord label that doesn't match what's described.
4. **Voice labels** — if a line is labeled "upper voice" or "bass", confirm it's actually the higher or lower pitch in the diagram.

## Step 3 — Check music theory logic

Independent of diagrams, verify each theoretical claim in the text:

- **Key consistency** — all pitches mentioned should belong to D natural minor, D harmonic minor, or be explicitly flagged as chromatic (Neapolitan, etc.)
- **Interval names** — check that interval labels are correct (e.g. a leap from D to A is a perfect fifth, not a sixth)
- **Chord qualities** — verify Roman numeral labels match the chord built on that scale degree in D minor (i=Dm, iidim=Edim, III=F, iv=Gm, v=Am, V=A, VI=Bb, VII=C, bII=Eb for Neapolitan)
- **Counterpoint rules cited** — if a rule is stated (e.g. "contrary motion avoids parallel fifths"), verify the rule is correctly described
- **Build It instructions** — check that any specific pitch, interval, or technique named in the Build It card is consistent with the chapter content and D minor

## Step 4 — Identify clarity gaps

Flag concepts that are mentioned but not explained, or explained once and then assumed:
- A term introduced without definition
- A technique referenced but not demonstrated with an example
- A diagram that illustrates something not discussed in the text
- A concept where one example may not be enough (especially if it's foundational for later chapters)

Do NOT flag every concept as needing more examples — only flag genuine gaps where a student would likely be confused.

## Step 5 — Report findings

Output a structured report:

### Diagram/Text Mismatches
List each mismatch with:
- Card name or number
- What the text says
- What the diagram actually shows
- Suggested correction

If none found, say "None found."

### Theory Errors
List each error with:
- Location (card name or section)
- The incorrect claim
- The correct version

If none found, say "None found."

### Clarity Gaps
List each gap with:
- The concept or term
- Why it's unclear or under-explained
- A concrete suggestion (e.g. "add a second example showing X in context Y")

If none found, say "None found."

### Summary
One paragraph: overall accuracy assessment, how many issues were found, and the most critical fix needed (if any).

Then ask the user: **"Fix all issues now?"** and wait for their response before proceeding to Phase 2.

---

## Phase 2 — Fix

Only begin Phase 2 after the user confirms they want fixes applied.

Work through every issue from the report and apply corrections directly to the HTML file. Rules:

**For diagram/text mismatches** — decide which side is wrong:
- If the SVG coordinates are correct and the prose is wrong, fix the prose (update the interval name, direction word, etc.).
- If the prose describes the intended musical idea correctly and the diagram is wrong, fix the SVG coordinates to match. Recalculate `cx`/`cy` or `x`/`y` values using the 20px/semitone grid. Adjust connecting `<polyline>` points to match. Update any arrow markers or labels that reference the moved note.
- When in doubt, fix the prose — it's less risky than restructuring a diagram.

**For theory errors** — correct the text in place. Do not restructure the card; only change the incorrect term, label, or claim.

**For clarity gaps** — add the minimum needed: a sentence of explanation, a definition of the term, or a second brief example. Do not add a new card unless the gap is so large that a sentence won't cover it. If adding a new example requires a new diagram, build it following the SVG conventions in CLAUDE.md.

**General rules for edits:**
- Never alter the visual design, layout, or structure beyond what's needed for the fix.
- Never add or remove cards unless explicitly required by a clarity gap fix.
- Never change the Build It card's exercise structure — only fix factual errors within it.
- Preserve all existing class names, indentation style, and comment formatting.

After all edits are applied, output a brief **Fixes Applied** list — one line per change, format: `[Card name] — what was changed`.
