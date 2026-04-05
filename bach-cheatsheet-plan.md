# Bach Cheat Sheet — Project Plan

## Overview

A comprehensive, visually rich HTML reference guide for applying Bach's compositional techniques to modern ambient/minimalist music production. Each chapter is a standalone HTML page that builds on the previous ones, progressing from a single melody line to full ambient counterpoint compositions.

The target reader (Sam) is an electronic music producer working in **Ableton Live** with a **Korg Volca** hardware setup. He knows scales, chords, and theory but wants to internalize the *craft* of melodic and harmonic writing. His aesthetic sits at the intersection of **Bach, Nala Sinephro, Steve Reich, Philip Glass, and Basic Channel** — rigorous voice-leading married to minimalist repetition and ambient texture.

---

## Design System

All chapters use a consistent visual language established in the first batch of pages. Key specs:

### Fonts
- **Headings / labels / monospace:** `Space Mono` (Google Fonts)
- **Body text:** `DM Sans` weight 300 (Google Fonts)

### Color Palette
```css
--cream: #f0ebe1;        /* page background */
--cream-dark: #e6e0d4;   /* card shadow, dividers */
--yellow: #ffd200;        /* highlights, banner bg, key phrases */
--ink: #1a1a1a;           /* primary text */
--ink-soft: #4a4a4a;      /* secondary text */
--blue: #3d7ec7;          /* primary accent, upper voice, card numbers */
--blue-light: #d6e8f7;    /* card number bg, chord chips */
--red-accent: #e04848;    /* leaps, dominant chords, tension, lower voice */
--green: #3a9e6e;         /* Fortspinnung, diatonic, expected resolutions */
--green-light: #d6f0e3;
--purple: #7b61c7;        /* Neapolitan, special color chords */
--purple-light: #e8e0f7;
--orange: #d4842a;        /* Epilog, deceptive moves, surprises */
--orange-light: #f7e8d0;
```

### Layout Components
- **Scrolling yellow banner** at top and bottom with relevant text, `Space Mono` uppercase, animated with CSS `translateX`
- **Hero section** with `<h1>` using yellow highlight `<span>`, italic subtitle underneath
- **Blue intro box** for chapter overview/context
- **Cards** with 2px black border, offset shadow (6px down-right, cream-dark fill), card header with colored number + uppercase title
- **Diagrams** in `<svg>` inside `.diagram-wrap` (cream background, 2px black border) — NOT images, always inline SVG
- **Principle boxes** with cream background, black border, italic text, yellow `✦` badge top-left
- **Key phrases** highlighted with yellow background using `<span class="key">`
- **Sub-sections** within cards separated by dashed borders
- **Footer** with `Space Mono` 12px centered reference line

### Visual Diagram Conventions
- **Blue dots/lines** = upper voice, stepwise motion, stable elements
- **Red dots/dashed lines** = leaps, tension, dominant chords, lower voice
- **Green** = Fortspinnung, diatonic, expected/resolved
- **Orange** = Epilog, deceptive, surprise
- **Purple** = Neapolitan, special chromatic color
- **Yellow highlights** = peak moments, handoff points, resolution targets
- **Ghost/dashed lines** = expected paths not taken, reference lines
- Grid lines in diagrams: `stroke: #d9d4ca; stroke-width: 0.5`
- SVG arrow markers defined in `<defs>` for each color as needed

### Responsive
- Max content width: 900px centered
- Mobile breakpoint at 600px (smaller fonts, tighter padding)

---

## Musical Conventions

- **All examples in D minor** (D Dorian / D natural minor / D harmonic minor as context requires). This provides consistency across all chapters and matches Sam's existing work.
- **Octave notation:** Middle C = C4. Examples typically use D3-D5 range.
- **Note names** use flats for D minor context (Bb, Eb) except for leading tones (C#, F#, G#) which are notated as sharps since they're chromatic alterations pulling upward.
- **Piano roll perspective:** Instructions should be concrete enough to execute in Ableton's MIDI editor. "Beat 1," "beat 2-and," "bar 3," etc. When possible, include beat-by-beat breakdowns.
- **Chord symbols:** Dm, Gm, C7, Bb, E°, etc. Roman numerals (i, iv, VII, V) as secondary labels.

---

## Existing Pages (Already Built)

These pages are complete and establish the design language. Reference them for style consistency:

1. **toolkit.html** — "Ambient Counterpoint Melodic Toolkit" — 10 compositional idioms for the Bach × Sinephro × Reich intersection. Covers: voice-leading inside arpeggios, one note per cycle, contrary motion, pedal freeze, chromatic visitors, phase displacement, velocity as third voice, subtraction arc, sequence as meditation, register as structure, leading tone as climax.

2. **phrase-shapes.html** — "Bach Phrase Shapes Visual Reference" — 7 melodic contour patterns with SVG contour diagrams. Covers: step up/leap down, leap up/step down, the arch, implied polyphony (with dual-color voice diagram), the circle (arpeggio-to-step), the sigh (suspension chain with clash zones), Fortspinnung chain (with handoff highlights and phrase brackets).

3. **harmonic-engines.html** — "Bach's Harmonic Engines" — 6 harmonic devices with diagrams. Covers: circle of fifths (circular SVG layout), 5-1 ratchet with "how to build each link" (3-row diatonic→dominant 7th→arrival diagram), descending bass (staircase), deceptive move (fork diagram), Neapolitan drop (tension meter), pedal point (held bass with increasing upper tension). Includes full recipe combining all engines.

4. **deceptive-resolution.html** — "The Deceptive Resolution" — Deep dive on one technique. Covers: the classic V→bVI (fork diagram with bass motion), the rewind (timeline showing denied cadence → rewind → second spin → real landing), bass motion comparison (pitch diagram with proportional distance bars), flavors (major-key sigh V→vi, dark trapdoor V→°7), overall pattern (attempt → deception → more spinning → earned cadence with desire meter).

---

## Chapter Plan

Each chapter = one HTML file. Chapters are designed to be read in order, with each building on the previous. Each chapter should end with a **"Build It"** section — a concrete Ableton piano roll exercise that adds to an ongoing composition started in Chapter 1.

### Chapter 1 — A Single Line
*Start with nothing but one voice and make it sing.*

**File:** `ch01-single-line.html`

**Topics:**
1. Stepwise motion and leaps — the 70/30 ratio (steps vs leaps), how leaps create drama and steps create connection
2. The five contour shapes — step-leap, leap-step, arch, circle, Fortspinnung chain (reference/link to phrase-shapes.html for detail)
3. Rhythmic variety — long-short-short, short-short-long, anacrusis (pickup notes), rhythmic displacement (shift whole phrase by one eighth)
4. Sequences — same shape moved by step, three repetitions then break the pattern
5. Constant motion with hidden structure — chord tones on strong beats, scale steps filling weak beats; the "Bach sixteenth-note run" decoded

**Build It:** Write a 4-bar melody in D minor using the step-step-step-leap motif, sequence it twice, break the pattern on the third time. All in Ableton piano roll, single MIDI track.

**Diagrams needed:**
- Contour shape overview (5 mini shapes side by side)
- Rhythm pattern examples (long-short-short vs even eighths)
- "Hidden structure" diagram showing a run of sixteenths with strong-beat chord tones highlighted
- Sequence diagram showing 3 repetitions + break

---

### Chapter 2 — Making One Line Sound Like Two
*Still monophonic, but the ear hears polyphony.*

**File:** `ch02-implied-polyphony.html`

**Topics:**
6. Implied polyphony / compound melody — alternating between two registers so the ear parses one stream as two voices (reference to the zigzag pattern we built: D5, A3, E5, G3, F5, F3)
7. Register separation — assign each implied voice its own octave lane, don't let them cross
8. Arpeggiation as implied harmony — spelling out chords across time (the "circle" shape), how a single line can imply a full chord progression

**Build It:** Take the Chapter 1 melody and rewrite it as a compound melody with implied upper and lower voices, zigzagging between octave 3 and octave 5.

**Diagrams needed:**
- Single line vs compound melody comparison
- Register lane diagram showing octave assignments
- Arpeggio-to-harmony diagram (single notes → implied chords underneath)

---

### Chapter 3 — Adding a Second Voice
*Real counterpoint begins.*

**File:** `ch03-two-voices.html`

**Topics:**
9. Contrary motion as default — when in doubt, move opposite to the other voice
10. Parallel thirds and sixths — the safe, sweet-sounding intervals for parallel motion
11. Oblique motion / pedal freeze — one voice holds a note while the other moves; how stillness amplifies movement
12. Voice exchange — two voices swap notes (top takes bass note, bass takes top)
13. Hidden/direct fifths and octaves — what to avoid to keep voices independent; why parallel fifths sound like voices "merge"

**Build It:** Add a lower voice to the Chapter 2 melody using contrary motion, with a pedal freeze in bar 3 and voice exchange at the cadence. Reference the enriched 4-bar piece we built in this conversation (D5/A3, E5/G3, F5/F3, A4/D3 pattern).

**Diagrams needed:**
- Motion types overview (contrary, parallel, oblique, voice exchange) as 4 mini diagrams
- Parallel thirds/sixths example
- Voice exchange before/after
- "What to avoid" — parallel fifths/octaves example

---

### Chapter 4 — Tension and Release Between Voices
*Making the counterpoint expressive.*

**File:** `ch04-tension-release.html`

**Topics:**
14. Suspensions as melody — the sigh: hold, clash, resolve down by step
15. Chains of suspensions — 4-3 suspensions in series (descending), 7-6 suspensions in series
16. Chromatic neighbor tones and enclosures — approach chord tones from a half step below; surround target notes (half step above, half step below, land)
17. Diminished intervals for drama — diminished 4th and diminished 7th as melodic intervals at climactic moments (e.g., Ab down to B natural in C minor)
18. Cross relations — one voice has F natural while another has F#; deliberate disorientation

**Build It:** Add suspensions to the cadence points of the Chapter 3 piece. Insert a chromatic enclosure approaching the final D. Use a cross-relation between voices for one beat of tension.

**Diagrams needed:**
- Suspension anatomy (preparation → clash → resolution)
- 4-3 chain and 7-6 chain side by side
- Enclosure diagram (notes above/below surrounding target)
- Cross-relation example showing the two conflicting notes in different voices

---

### Chapter 5 — Harmonic Foundations
*The chord progressions underneath everything.*

**File:** `ch05-harmonic-foundations.html`

**Topics:**
19. Circle of fifths descent — the fundamental engine (reference harmonic-engines.html)
20. The 5-1 ratchet — chromaticized circle, how to build each link (reference harmonic-engines.html)
21. Descending bass line / lament bass — stepwise bass descent with alternating root/first-inversion chords
22. Ascending bass line — walking up the scale, typically with first-inversion chords, less common but creates optimistic/building energy
23. Chromatic bass descent — every half step instead of diatonic steps; the really dark version (D, C#, C, B, Bb, A...)
24. Tonicization vs. modulation — briefly treating a chord as home (tonicization = one V-I, move on) vs. actually setting up shop in a new key (modulation = multiple phrases in the new key)

**Build It:** Take the two-voice piece from Chapter 4 and assign a circle-of-fifths bass to it. Try the lament bass as an alternative. Compare how the same melody feels over each.

**Diagrams needed:**
- Circle of fifths (reference existing circular SVG)
- Ascending bass example
- Chromatic bass vs diatonic bass comparison
- Tonicization vs modulation timeline (showing how long you stay in the new key)

---

### Chapter 6 — Harmonic Color
*The moments that make listeners stop and feel something.*

**File:** `ch06-harmonic-color.html`

**Topics:**
25. Leading tone pull — the raised 7th (C# in D minor) and its gravitational pull to the tonic
26. The #11 / Lydian touch — tritone above root on a weak beat, don't stay long; modern/hip color
27. Neapolitan drop — bII (Eb major in D minor) as a souped-up subdominant before cadences
28. Augmented sixth chords — Italian (Ab-C-F#), French (Ab-C-D-F#), German (Ab-C-Eb-F#) in D minor; three flavors of chromatic pre-dominant that pull powerfully to the dominant
29. Modal mixture / borrowed chords — using chords from D major in a D minor piece (or vice versa); the "borrowed light" or "borrowed darkness" effect
30. Picardy third — ending a minor-key piece on D major instead of D minor; the raised third (F# instead of F) in the final chord

**Build It:** Add a Neapolitan chord before the final cadence of the Chapter 5 piece. Try ending on a Picardy third. Insert one moment of modal mixture in the middle.

**Diagrams needed:**
- Leading tone resolution (half-step pull diagram)
- Augmented sixth chords compared (three voicings side by side with resolution arrows)
- Modal mixture palette (which chords you can borrow and their color/mood)
- Picardy third before/after comparison

---

### Chapter 7 — The Sentence
*Mid-level structure — how motifs become paragraphs.*

**File:** `ch07-the-sentence.html`

**Topics:**
31. Vordersatz → Fortspinnung → Epilog — the three-part Baroque sentence (reference baroque-sentence.html)
32. How the Epilog lands — pattern stops, rhythm decelerates, harmony funnels to cadence, 4-3 suspension signature
33. The deceptive resolution — delaying the ending, the rewind technique (reference deceptive-resolution.html)
34. Sentences as paragraphs — each sentence is a building block, not a whole piece
35. The key journey — first sentence in i, second in III, third in v, final back to i
36. Asymmetric sentence lengths — short establishing sentence, longer developing ones, longest for the final resolution

**Build It:** Structure the Chapter 6 piece as a full Baroque sentence: 2-bar Vordersatz (the original motif), 4-bar Fortspinnung (sequences riding a circle-of-fifths bass), 2-bar Epilog with a deceptive resolution that extends into a second cadence attempt.

**Diagrams needed:**
- Sentence overview (reference existing three-zone diagram)
- Key journey map showing a typical 4-sentence movement
- Asymmetric sentence length comparison

---

### Chapter 8 — Motivic Development
*Getting maximum mileage from minimum material.*

**File:** `ch08-motivic-development.html`

**Topics:**
37. Melodic inversion — flip the motif upside down (if it went up a 3rd then down a step, do down a 3rd then up a step)
38. Retrograde — play the motif backwards
39. Fragmentation — as intensity builds, use only the first 2-3 notes of the motif; the motif "breaks down" under pressure
40. Augmentation and diminution — same motif in double note values (slower, grander) or half note values (faster, more urgent)
41. Stretto — start a new entry of the motif before the previous one finishes; voices pile up
42. Invertible counterpoint — two melodies designed so that either one can be the top voice; test by swapping octaves

**Build It:** Take the 4-note seed motif from Chapter 1. Write an 8-bar development section using inversion (bar 1-2), fragmentation (bar 3-4), stretto with the original and inverted forms overlapping (bar 5-6), and augmentation for the final cadence (bar 7-8).

**Diagrams needed:**
- Motif transformation grid (original, inversion, retrograde, retrograde-inversion as 4 piano-roll style diagrams)
- Fragmentation timeline showing the motif getting shorter as intensity rises
- Stretto diagram showing overlapping entries
- Augmentation/diminution comparison (same motif at different speeds)

---

### Chapter 9 — Large-Scale Form
*How sentences chain into movements.*

**File:** `ch09-large-scale-form.html`

**Topics:**
43. Ritornello — a recurring "refrain" passage that returns in different keys between contrasting episodes; the anchor the listener keeps coming back to
44. Fugue exposition — building voices one at a time (subject in voice 1 → answer at the fifth in voice 2 → subject in voice 3); how Bach creates density gradually
45. Episodes — free material between subject entries, usually sequential; the "development" zones of a fugue
46. The nesting principle — same handoff-without-a-seam logic at every structural level (motif → phrase → sentence → movement)
47. Arch form / palindrome — ABCBA structure where the ending mirrors the beginning; powerful for ambient work

**Build It:** Map out a 3-minute piece structure: ritornello A (D minor) → episode 1 → ritornello A (F major) → episode 2 → ritornello A (A minor) → episode 3 (development) → ritornello A (D minor, final). Don't write all the notes — just the structural plan with key centers and texture density notes.

**Diagrams needed:**
- Ritornello form map (alternating refrain/episode blocks with key labels)
- Fugue exposition timeline (voices entering one by one, stacking)
- Nesting diagram (zoom levels from motif to movement)
- Arch form ABCBA diagram

---

### Chapter 10 — Space and Breathing
*Making dense music feel open.*

**File:** `ch10-space-breathing.html`

**Topics:**
48. Texture reduction — dropping from 3-4 voices to 2 or 1; the room opening up
49. Long notes amid motion — a half note after continuous sixteenths; relative duration as rest
50. Sequences as cognitive rest — predictable patterns let the listener's brain relax even though notes are still flowing
51. Harmonic rhythm slowing — chord changes less frequently even while notes keep moving; hovering vs traveling
52. Register as openness — wide voicing (octaves between voices) vs dense voicing (everything clustered); the cathedral effect
53. Rests in individual voices — one voice pauses while others continue; density shifts without stopping
54. Cadential breathing — the Epilog as structural exhale

**Build It:** Take any 16-bar passage from previous chapters and create a "breathing" version: thin the texture to one voice for bars 5-8, widen the register for bars 9-12, slow the harmonic rhythm for bars 13-16.

**Diagrams needed:**
- Texture density map (visual showing voices active/inactive across bars)
- Register width comparison (dense vs open voicing)
- Harmonic rhythm timeline (frequent changes vs sustained harmony)
- "Breathing" annotated score showing where each technique applies

---

### Chapter 11 — From Bach to Ambient Counterpoint
*Translating everything into looping, phasing, Sinephro/Reich territory.*

**File:** `ch11-ambient-counterpoint.html`

**Topics:**
55. Voice-leading inside arpeggios — odd notes = melody 1, even notes = melody 2; test each independently
56. One note per cycle — change exactly one pitch every 2-4 loop repetitions; alternate which voice evolves
57. Phase displacement — two loops of different lengths (7 vs 8 notes) creating evolving vertical combinations
58. Velocity as a third voice — accent pattern cycling independently of pitch pattern
59. The subtraction arc — structure by removing layers rather than adding; the ghost of removed voices
60. The leading tone as emotional climax — save C# for the peak moment; everything before is natural minor
61. Pedal point as drone — the bass holds one note while upper loops evolve; increasing tension above a stable anchor

**Build It:** Take the two-voice Bach piece from Chapters 1-4 and transform it into an ambient composition: convert the melody into an 8-note arpeggio loop, add a second loop of different length for phasing, introduce a bass drone, evolve the loops one note at a time over 32 bars, use subtraction to end.

**Diagrams needed:**
- Loop phasing diagram showing how two different-length loops create changing alignments
- "One note per cycle" evolution chart showing a loop mutating over time
- Subtraction arc timeline
- Velocity pattern cycling against pitch pattern
- Full piece structure map: addition phase → peak → subtraction phase

---

## Session Guidelines

When building each chapter in a Claude Code session:

1. **Read this plan file first** to understand context, design system, and where the chapter fits in the progression.

2. **Reference existing pages** for design consistency. The HTML/CSS patterns are established — reuse the card structure, color system, banner animations, diagram styles, and typography from the existing files.

3. **Each chapter is a single self-contained HTML file** with all CSS inline (no external stylesheets). Google Fonts loaded via `<link>` tag.

4. **SVG diagrams are critical.** Every concept should have a visual aid where possible. Diagrams use inline SVG (not images), follow the color conventions above, and include text labels in `Space Mono`. Piano-roll-style diagrams are especially useful — horizontal = time, vertical = pitch.

5. **The "Build It" section at the end of each chapter** should be concrete enough to follow in Ableton's piano roll. Beat-by-beat where appropriate. Reference specific notes, octaves, and rhythmic values.

6. **D minor throughout.** All chord examples, scale examples, and melodic examples should be in D minor unless a topic specifically requires showing a major-key example (in which case use F major, the relative major).

7. **Tone:** Direct, practical, no hedging. Explain the "why" behind each technique — not just what to do but why it works on the listener's ear. Use the language of "your ear expects X, Bach gives you Y" to frame techniques in terms of expectation and surprise.

8. **Cross-references:** When a topic has been covered in depth in an existing page, reference it by filename rather than re-explaining. E.g., "See phrase-shapes.html for visual contour diagrams of all five shapes."

9. **Musical audio context:** Sam works in Ableton Live with Korg Volca hardware synths. His aesthetic blends Bach voice-leading rigor with Nala Sinephro's ambient jazz arpeggios, Steve Reich's phasing minimalism, Philip Glass's pattern music, and Basic Channel's dub techno. Techniques should be framed in terms of how they apply in a DAW/sequencer context, not classical performance.

10. **Output location:** Place completed HTML files in `/mnt/user-data/outputs/` for the user to access.

---

## File Naming

```
ch01-single-line.html
ch02-implied-polyphony.html
ch03-two-voices.html
ch04-tension-release.html
ch05-harmonic-foundations.html
ch06-harmonic-color.html
ch07-the-sentence.html
ch08-motivic-development.html
ch09-large-scale-form.html
ch10-space-breathing.html
ch11-ambient-counterpoint.html
```

Existing standalone reference pages (built before the chapter structure):
```
toolkit.html
phrase-shapes.html
harmonic-engines.html
deceptive-resolution.html
```

These standalone pages may eventually be folded into or linked from the relevant chapters, but they stand on their own for now.

---

## Build Order

Chapters should be built in order (1 → 11) since each chapter's "Build It" exercise extends the previous chapter's work. However, each chapter's *explanatory content* is self-contained enough that they can be built in any order if needed.

Priority chapters (most unique/valuable content not already in existing pages):
1. **Chapter 1** — foundational, everything builds from here
2. **Chapter 3** — the jump to real counterpoint is the biggest conceptual leap
3. **Chapter 4** — suspensions and chromatic techniques are where expressiveness lives
4. **Chapter 8** — motivic development is the most "bang for buck" compositional skill
5. **Chapter 11** — the bridge to Sam's actual aesthetic; the payoff
