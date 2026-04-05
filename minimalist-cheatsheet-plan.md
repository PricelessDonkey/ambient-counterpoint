# Minimalist Composition Plan

## Overview

A chapter-by-chapter HTML reference guide for applying minimalist compositional techniques to modern ambient/electronic music production in Ableton Live. The series covers the four pillars of the Glass/Reich/Riley tradition: **loop logic, rhythmic process, modal harmony, and textural form**.

The target reader (Sam) is an electronic music producer working in **Ableton Live** with a **Korg Volca** hardware setup, who has worked through the Bach Counterpoint series. That series established voice-leading rigor; this one establishes **process thinking** — how to build a compelling piece from almost nothing by applying strict (or semi-strict) generative rules. Cross-references to Bach chapters are included where the techniques connect.

Aesthetic intersection: **Philip Glass × Steve Reich × Terry Riley × Nala Sinephro × Basic Channel** — looping pattern music with clear internal logic, modal harmony that breathes without functional tension/resolution, and gradual evolution across time.

---

## Design System

All minimalist chapters use the same `styles.css` and visual language as the Bach chapters. There is no new CSS — just a new section on the landing page and a new index page (`minimalist.html`).

See `CLAUDE.md` for the full design system spec. Key reminders:
- **Fonts:** `Space Mono` (headings/labels) + `DM Sans 300` (body)
- **Color semantics:** Blue = logic/structure, Green = diatonic/expected, Orange = surprise/break, Purple = chromatic color, Red = tension/leap
- **All diagrams:** Inline SVG inside `.diagram-wrap` — never image files

### New Diagram Conventions for Minimalist Series

These extend the Bach conventions with loop-specific visualizations:

- **Loop cycle diagrams:** Horizontal timeline where the same block repeats. Use a dashed vertical line at the loop boundary. Label each repetition "×1 ×2 ×3…" in `Space Mono` 10px.
- **Phase diagrams:** Two parallel rows, one offset horizontally. Coincidence points (where the two loops realign) marked with a yellow vertical highlight band.
- **Process charts:** Vertical stack of bar-by-bar rows showing which notes are present (filled blue block) vs absent (empty). For additive/subtractive sequences.
- **Velocity heatmaps:** Piano roll with note heights proportional to velocity (taller = louder). Full height = 127, half height = 64.
- **Texture density maps:** Multiple rows (one per track), colored blocks showing when each layer is active. Consistent with the existing texture density diagram style in `ch10-space-breathing.html`.

---

## Musical Conventions

- **All examples in D Dorian** (D–E–F–G–A–B–C). D Dorian shares the D root with the Bach series, but the raised 6th (B natural instead of Bb) gives it a lighter, more ambiguous quality — less cadential pull, more hovering. This is the characteristic mode of Glass's *Metamorphosis*, much of Sinephro's work, and many Reich pieces.
- **Key signature mental model:** D Dorian = C major scale starting on D. Two sharps are *not* used — it's natural except for B natural (the characteristic note).
- **Characteristic Dorian IV chord:** G major (G–B–D). In D natural minor this would be Gm. The major IV is the sonic fingerprint of Dorian. Use it.
- **Core chord vocabulary:**
  - i: Dm (D–F–A), or Dm7 (D–F–A–C) — home
  - IV: G major (G–B–D), or G sus4 (G–C–D) — the Dorian marker
  - VII: C major (C–E–G) — soft resolution, less final than V–i
  - ii: Em or Em7 — tension without drama
  - III: F major — warm, relative major color
- **Octave notation:** Middle C = C4. Main working range D3–D5.
- **Tempo:** Assume 90–110 BPM for Build It exercises unless specified. Minimalist music often runs slow; the loop should feel inevitable at whatever tempo you choose.
- **Ableton context:** MIDI clips in Session View for loop work; switch to Arrangement View for form/structure chapters (Ch 15–16). The Korg Volca sequencer can run in parallel with Ableton clock sync — patterns described here translate to the 16-step Volca sequencer where noted.

---

## Cross-References to Bach Series

Many minimalist techniques have structural cousins in Bach. Where relevant, chapters link to the corresponding Bach page:

| Minimalist technique | Bach parallel | Reference |
|---|---|---|
| Phase shifting | Stretto (overlapping entries) | `ch08-motivic-development.html` |
| Additive process | Fortspinnung (spinning out) | `ch07-the-sentence.html` |
| Hocket | Implied polyphony / compound melody | `ch02-implied-polyphony.html` |
| Loop evolution | Motivic development | `ch08-motivic-development.html` |
| Pedal drone | Pedal point | `harmonic-engines.html` |
| Modal vamp | Pedal harmony / modal mixture | `ch06-harmonic-color.html` |
| Subtraction arc | Texture reduction / space | `ch10-space-breathing.html` |
| Sectional form | Key journey / large-scale form | `ch09-large-scale-form.html` |
| Open voicings | Voice exchange / spacing | `ch03-two-voices.html` |
| Arch form (ABCBA) | Arch form | `ch09-large-scale-form.html` |

---

## Existing Pages (Already Built)

The Bach series (`ch01–ch12.html` and standalone reference pages) is complete. The minimalist series begins fresh but builds on the same design system. The final Bach chapter (`ch11-ambient-counterpoint.html`) is the conceptual bridge — it translates Bach counterpoint into loop/phase techniques. Students who have worked through the Bach series have a strong foundation; students who haven't should at least read `ch11-ambient-counterpoint.html` first.

---

## Chapter Plan

Each chapter = one HTML file with prefix `m`. Chapters run in order — each Build It extends the previous session.

### The Build It Thread

The Build It exercises across all 16 chapters build a single piece from scratch:

- **Seed:** A 4-note D Dorian cell: **D4 – F4 – G4 – A4**, 8th notes, 1 bar.
- **Goal:** By chapter 16, that cell becomes a structured 64-bar ambient piece with multiple voices, automation arcs, and deliberate form.

---

### Chapter 1 — The Loop as Architecture
*Repetition is not laziness. It's structure.*

**File:** `m01-the-loop-as-architecture.html`

**Topics:**
1. The loop as the unit of composition — contrast with Bach's development-driven form (where phrases lead somewhere). In minimalism, the loop *is* the destination; interest comes from what repeats, not what changes.
2. Loop length and structural weight — a 1-bar loop feels like wallpaper; a 4-bar loop feels like a riff; an 8-bar loop feels like a section. Same notes, different lengths = different structural gravity.
3. What makes a loop worth repeating — the difference between a pattern the ear locks onto and one it tunes out. Internal balance: enough repetition within the loop to feel inevitable, enough asymmetry to stay interesting.
4. Timbre and velocity as the first dimensions of variation — before changing any notes, experiment with envelope, filter, and velocity curve. The loop changes perception without changing content.
5. The loop vs the phrase — a Baroque phrase has a beginning, middle, and cadential end; a good loop has no obvious seam. Designing the loop boundary: the last note should lead naturally into the first.

**Build It:** Open Ableton, 100 BPM, 4/4. Create a new MIDI track with a pad or keys sound. Enter the seed cell as a 1-bar clip: D4 – F4 – G4 – A4, each an 8th note starting on beat 1 (leaving the second half of the bar empty). Loop it. Now extend to 2 bars: repeat the cell in bar 2 but start it on beat 2 instead of beat 1. Listen to the difference. Settle on whichever length feels more like something rather than nothing.

**Diagrams needed:**
- Loop-vs-phrase comparison: two horizontal timelines — phrase shows start → development → cadence as a single arrow; loop shows a cycle (circular arrow or repeated block)
- Loop length comparison: 1-bar, 2-bar, and 4-bar versions of the same 4-note cell shown in piano roll, demonstrating different density and feel
- Seam diagram: the last note of the loop connecting back to the first — show a "good seam" (last note leads stepwise to first) vs "bad seam" (large gap or rhythmic jolt)

---

### Chapter 2 — Loop Craft: Designing a Cell Worth Repeating
*The secret sauce. Most loops fail here.*

**File:** `m02-loop-craft.html`

**Topics:**
6. Note choice inside a small cell — pick notes that imply something without stating it. Two or three pitches from a chord, one outside. Leave room for interpretation.
7. Internal rhythm — the 4-note cell doesn't have to be four equal notes. Mix durations: a dotted 8th, a 16th, a rest. Internal rhythmic contrast makes the loop feel alive rather than metronomic.
8. Negative space — strategic silence. A rest inside the loop gives the ear a moment to process what just happened. The rest is not absence; it's anticipation.
9. Register — where in the octave the cell lives changes everything. Low cells feel foundational; high cells feel melodic; mid cells feel ambiguous. Know which function you want.
10. The 16-repetition test — a loop that feels good after 2 repetitions may collapse after 16. Test every design decision by looping 16+ times. If you get bored, the cell is too simple or too busy.

**Build It:** Take the 2-bar loop from Ch 1. Redesign the rhythmic content: change the 8th notes to a more varied rhythm — try dotted 8th + 16th + 8th rest + quarter (a common Glass pattern). Add one rest inside the cell. Run the new version for 16 repetitions. Compare against the original. Save both versions as separate clips.

**Diagrams needed:**
- Three cells compared: (A) four equal 8ths — inert; (B) mixed rhythm with dotted values — alive; (C) mixed rhythm with internal rest — breathing. All shown in piano roll.
- Negative space closeup: a single-bar cell with a rest highlighted in a different color, showing how the rest creates forward momentum into the next repetition
- 16-rep "fatigue test" concept: a timeline showing how interest decays over repetitions for a too-simple cell vs a well-designed one (qualitative, not quantitative — just a curve labeled "ear locks on" → "ear glazes over")

---

### Chapter 3 — Micro-Variation: The Art of the Almost-Identical Loop
*Glass does this constantly. The listener shouldn't consciously notice, but they should feel it.*

**File:** `m03-micro-variation.html`

**Topics:**
11. What counts as micro-variation — one note changed (pitch), one note shifted (rhythm), one note removed (silence), one note added. Everything else stays the same. The change should be felt, not analyzed.
12. The illusion of development — stringing micro-variants together creates the impression of something evolving even though the material barely moves. This is the perceptual magic of Glass's *Metamorphosis* and *Music in Similar Motion*.
13. How long to stay before varying — the listener needs to internalize the original before the variant registers as a change. Minimum 4 repetitions, often 8 or 16, before the first change.
14. Returning to the original — variants are most powerful when they return to the original afterward. A → A' → A creates a sense of inhale/exhale that A → A' → A'' doesn't.
15. Micro-variation vs development — Bach develops a motif by transforming it beyond recognition; Glass varies a loop just enough to keep attention. These are opposite strategies for the same problem of sustaining interest.

**Cross-reference:** For comparison with Bach's motivic development (inversion, retrograde, fragmentation), see `ch08-motivic-development.html`. Micro-variation is the minimalist answer to the same question: how do you milk one idea for multiple minutes?

**Build It:** Create three variants of the Ch 2 loop: A (original), A' (change one pitch — raise G4 to A4), A'' (return to original but shift the rhythm by one 16th). Arrange them in Ableton's Arrangement View: A × 8 → A' × 8 → A × 4 → A'' × 8 → A × 4. That's 32 bars total. Notice how the "return to A" moments feel like resolution.

**Diagrams needed:**
- Three loop variants side by side in piano roll: A, A', A'' with the changed note/rhythm circled or highlighted
- A/A'/A sequence timeline showing the arrangement (bar-by-bar blocks, color-coded A=blue, A'=green, A''=purple)
- "Change detection threshold" diagram: conceptual chart showing how the listener's perception tracks variation — below the threshold feels like the same loop; above it feels like a new section

---

### Chapter 4 — The Pulse as Foundation
*The motor that makes the loop feel inevitable.*

**File:** `m04-the-pulse.html`

**Topics:**
16. The 8th or 16th-note pulse — most minimalist work runs over a continuous subdivision, either performed or implied. It sets tempo expectation and provides the rhythmic grid against which melodic patterns stand out.
17. Velocity shaping — a metronomic pulse with identical velocities sounds mechanical. Shape the accent: beat 1 strong (100), beat 2 medium (75), beat 3 medium-strong (85), beat 4 soft (65). Then subdivisions follow a similar curve. This is the secret to a pulse that feels human without being sloppy.
18. Ghost notes — very soft subdivisions (velocity 30–45) that fill the rhythmic space without adding perceived density. Essential for Volca hi-hat patterns and Ableton drum programming. The ear hears them subconsciously as groove rather than consciously as notes.
19. Swing and microshift — gentle swing (Ableton's Groove Pool, or manual 16th-note forward/back offsets of 5–10ms) adds feel to an otherwise mechanical pulse. Use lightly. Too much swing and it stops feeling like Glass and starts feeling like jazz.
20. Pulse as felt, not heard — in the best minimalist work, the pulse is implied by the melodic pattern rather than played explicitly. A 6-note arpeggio of 8th notes implies a pulse without needing a drum hit.

**Build It:** Add a second MIDI track to your session. Assign it a percussive sound (Korg Volca Beats, or a hi-hat sample). Program a 1-bar, 16-step pattern: 16th notes with this velocity pattern: 100, 50, 70, 45, 90, 50, 70, 45, 100, 50, 70, 45, 85, 50, 70, 45. Loop it alongside the Ch 3 melody. Adjust so the pulse feels supportive, not dominant — the melody should still be what you hear first.

**Diagrams needed:**
- Velocity heatmap: 16 16th-note hits in one bar, with bar heights proportional to velocity showing the accent pattern
- Ghost note visualization: piano roll with very short, low-velocity notes highlighted differently from the main accent hits
- Pulse-implied-by-melody: a 6-note arpeggio shown without explicit pulse hits, with the implied beat positions marked as dashed lines beneath

---

### Chapter 5 — Additive & Subtractive Process
*Building and dissolving: the loop as a process, not a product.*

**File:** `m05-additive-subtractive.html`

**Topics:**
21. Reich's additive process — start with one note, add one note every N repetitions. The listener hears the texture grow from almost nothing to full density. The process itself is the composition.
22. Subtractive process — remove one note every N repetitions. The reverse journey: from full texture to near-silence. Often more emotionally powerful than addition because it feels like things are being taken away.
23. Choosing what to add/remove and when — the order matters. Add structurally important notes first (root, fifth), then color notes. Remove color notes first when subtracting, save the root for last.
24. Process notation in Ableton — how to set this up: separate clips with one extra/fewer note, arranged in sequence in Arrangement View. Or: use automation to mute individual notes within a clip.
25. Semi-process — you don't need to be strictly mechanical. Glass is semi-strict: the process provides the skeleton but he makes expressive choices within it. The rule gives you freedom because it answers "what next?" — you just follow the rule.

**Cross-reference:** Additive process is the minimalist version of Fortspinnung — spinning material out from a seed. For the Bach counterpart, see `ch07-the-sentence.html`.

**Build It:** Create a new 1-bar clip. Start with D4 only (quarter note, beat 1). Duplicate the clip: add F4 (beat 3). Duplicate again: add G4 (beat 2). Duplicate again: add A4 (beat 4). Now arrange these four clips in Arrangement View, each repeated 4 times: D only × 4 bars → D+F × 4 → D+F+G × 4 → D+F+G+A × 4. Then reverse the sequence for the subtractive return. That's 32 bars total of pure process.

**Diagrams needed:**
- Additive process staircase: a vertical stack of rows (one per clip version), each row showing which notes are present as filled blue blocks. Row 1: just D. Row 2: D+F. Row 3: D+F+G. Row 4: D+F+G+A.
- Subtractive reverse: same diagram in reverse order, fading from full to sparse
- "Process as composition" timeline: a 32-bar arrangement timeline showing add → full → subtract, with a curve indicating texture density over time

---

### Chapter 6 — Phase Shifting
*Two identical loops drifting out of sync: emergent melody from mechanical process.*

**File:** `m06-phase-shifting.html`

**Topics:**
26. What phase shifting is — two identical loops playing simultaneously, one gradually or incrementally ahead of the other. As they drift, their note onsets create new rhythmic combinations that neither loop contains alone. This is the core of Reich's *Piano Phase* and *It's Gonna Rain*.
27. Gradual vs stepped phase — Reich's original technique used tape loops that drifted at slightly different speeds (gradual). In a DAW, you implement stepped phase: nudge one clip forward by exactly one 16th or 8th note and keep it there. This gives you specific, controllable interference patterns.
28. Reading the interference pattern — at certain offsets, the two loops create interesting vertical combinations (two notes sounding together). At others, they create rhythmic density. Map out what happens at each step offset.
29. Loop length and phase period — a 7-note loop over an 8-beat grid (or vice versa) creates a long-period phase cycle where the two loops realign only every 56 beats (7×8). This is the fundamental polyrhythmic structure of many minimalist pieces. For phase to work interestingly, the loop length and the phase offset should not share obvious common factors.
30. Phase in Ableton — set both clips to the same MIDI content. Route to the same or similar instruments. Nudge the second clip's start point in the clip envelope. Warping can also be used but is harder to control precisely.

**Cross-reference:** Phase shifting is a rhythmic application of stretto — overlapping entries of the same material. For the Bach counterpart, see the stretto section in `ch08-motivic-development.html`. Also relates to the phase displacement concept introduced in `ch11-ambient-counterpoint.html` (Bach series).

**Build It:** Duplicate the main melody track from your session. Call it "Phase B." Move the Phase B clip start point forward by exactly one 16th note. Play both tracks simultaneously. Spend time listening to what happens — particularly where interesting combinations appear. Find the offset at which the two loops create a new implied melody (a moment where you can hear a third pattern emerging from the combination). Leave Phase B in place — it will interact with future layers.

**Diagrams needed:**
- Phase offset diagram: two parallel piano roll rows of the same 4-note loop. Row 2 shifted right by one 16th. Coincidence/overlap points highlighted in yellow.
- Interference pattern map: a grid showing what vertical interval is created at each of the 8 possible 16th-note offsets (for a 1-bar loop)
- "Emergent melody" highlighting: at one specific offset, the combined note onsets spell out a new rhythmic pattern that is circled or connected with a green line

---

### Chapter 7 — Rhythmic Displacement
*Shifting the whole phrase against the grid — polyrhythm without changing a note.*

**File:** `m07-rhythmic-displacement.html`

**Topics:**
31. What rhythmic displacement is — taking a complete motif and shifting its start point by one subdivision per repetition (or per N bars). The notes stay identical; the relationship to the metric grid changes. Different from phase shifting (which uses two simultaneous tracks) — displacement is a single voice that shifts over time.
32. Syncopation vs displacement — syncopation is a stable off-beat accent; displacement is a moving accent that drifts across the bar. Displacement is more disorienting and more generative.
33. Displacement as variation — by shifting the cell's downbeat, the "strong note" changes. In the seed cell (D–F–G–A), D normally falls on beat 1. Shift by one 8th: now F is on beat 1. Shift again: G. This creates new melodic emphasis without rewriting a single note.
34. How many steps before the phrase "resets" — depends on cell length vs bar length. A 3-beat cell over a 4-beat bar will align back to the original position after 12 beats (3 bars). A 5-note cell over an 8-beat bar aligns after 40 beats. The longer the reset, the more interesting the journey.
35. Velocity as anchor during displacement — when the pitch pattern shifts, keeping a strong velocity accent on beat 1 of the bar (regardless of which cell note falls there) creates an interesting tension between metric accent and melodic shape.

**Build It:** Create 4 variants of the melody clip: original (starts beat 1), shifted +1 8th (starts beat 1.5), shifted +2 8ths (starts beat 2), shifted +3 8ths (starts beat 2.5). Arrange these as 4-bar blocks in Arrangement View. Play with Phase B also running — the phase offset and the displacement interact to create dense rhythmic variation. Keep the pulse track from Ch 4 running as a reference grid.

**Diagrams needed:**
- Displacement sequence: four piano roll rows, each showing the same 4-note cell shifted by one additional 8th note. Which cell note lands on beat 1 is highlighted in each row.
- "Reset point" calculation: a timeline showing a 3-note cell over a 4-beat bar, with the cell repeating and the reset (realignment) point circled at bar 3
- Displacement + metric accent tension diagram: one row showing displaced cell, second row showing a fixed beat 1 accent mark — demonstrating that the accents are now "fighting"

---

### Chapter 8 — Polyrhythm & Cross-Rhythm
*Different cycle lengths playing simultaneously: the full rhythmic palette.*

**File:** `m08-polyrhythm.html`

**Topics:**
36. Displacement vs polyrhythm — displacement is the same pattern shifted; polyrhythm is two patterns of *different lengths* running simultaneously. Both create rhythmic complexity, but polyrhythm creates a periodic interference pattern (like phase shifting) while displacement has a longer reset cycle.
37. 3 against 4 — the foundational cross-rhythm. A 3-beat pattern (or three-note loop) against a 4-beat grid creates a combined period of 12 beats (3 bars). The coincidence point — where both patterns land on beat 1 together — is the rhythmic "home base."
38. 6 against 8 (or 6-note against 8-beat) — a 6-note loop over an 8-beat grid creates coincidence every 24 beats. This is the Glass arpeggio model: a 6-note pattern that cycles through the bar in a way that always feels slightly off and always resolving.
39. Choosing cycle lengths for your material — prime-number lengths avoid quick coincidences and create longer interference periods. But shorter coincidence periods can feel satisfying (like periodic cadences). Know what you want.
40. Mapping the resultant pattern — the composite rhythm produced by two polyrhythmic layers is often more interesting than either layer alone. In Reich's *Clapping Music*, the resultant is the point.

**Build It:** Add a third MIDI track. Program a 3-note cell (D4–A4–F4) as three quarter notes — a 3-beat pattern in a 4/4 bar (it wraps around the barline). Set this clip to loop. Play it against the existing 4-beat melody and Phase B. Find the coincidence point where all three tracks land on the same beat. Mark it in the arrangement. Save this as the "polyrhythm anchor" — you'll return to it in Ch 15 when building form.

**Diagrams needed:**
- 3-against-4 grid: a 12-beat timeline (3 bars of 4/4). Row 1: 4-beat pattern, accented at 1, 5, 9. Row 2: 3-beat pattern, accented at 1, 4, 7, 10. Coincidence (both accent) shown with a yellow highlight at beat 1 and 13.
- 6-note-against-8-beat diagram: 24-beat cycle showing a 6-note arpeggio cycling against an 8-beat bar
- Resultant pattern: the composite of the 3+4 grid — all onset points combined into a single rhythm row

---

### Chapter 9 — Hocket: Interlocking Voices
*Two tracks, one melody. Together they become more than either.*

**File:** `m09-hocket.html`

**Topics:**
41. What hocket is — two voices that share a melody by alternating notes. Neither voice plays the complete melody alone; together they interlock perfectly. Medieval technique, Reich's central method.
42. Why hocket sounds different from unison — because the alternating voices are in different timbres (or even pitches), the ear hears two independent things *and* the combination simultaneously. It creates density from sparseness.
43. Creating hocket in Ableton — split a single MIDI clip across two tracks: odd notes to Track A, even notes to Track B. Both clips have the same length; they just each have half the notes.
44. Register as a hocket variable — if Track A plays in octave 4 and Track B in octave 3 (or 5), the hocket creates register leaping that implies compound melody. Compare with the implied polyphony concept from the Bach series.
45. Velocity hocket — instead of splitting pitches, keep all pitches on one track but alternate high velocity (strong, heard as melody) and low velocity (ghost, heard as accompaniment). Creates a hocket-like effect within a single voice.

**Cross-reference:** Hocket is closely related to implied polyphony and compound melody — the same technique of getting two voices from one stream. See `ch02-implied-polyphony.html` for the Bach perspective on register separation and zigzag patterns.

**Build It:** Take the main melody track (not Phase B, not the polyrhythm). Duplicate it. Call them "Hocket A" and "Hocket B." Delete every even note from Hocket A and every odd note from Hocket B. Assign different timbres (e.g., Hocket A = pad, Hocket B = plucked). Play them together. They should sound like the original melody with an added texture dimension. Try also shifting Hocket B up one octave — now it's a register-leaping compound melody.

**Diagrams needed:**
- Split diagram: one complete melody shown, then split into two rows with alternating notes highlighted (odd = blue, even = red)
- Hocket A + B combined: showing the two sparse tracks stacked, and the combined result matching the original
- Register variant: Hocket B shifted an octave up, creating the zigzag register pattern from ch02-implied-polyphony

---

### Chapter 10 — Minimalist Harmony: Open Voicings & Modal Chords
*The actual vocabulary: sus chords, added 9ths, open 5ths, avoiding the leading tone.*

**File:** `m10-open-voicings.html`

**Topics:**
46. Why minimalist harmony sounds different — the avoidance of dense, tertian triads in close position. Instead: open 5ths (D + A, no third), sus2 (D + E + A), sus4 (D + G + A), added 9th (D + F + A + E). These voicings don't "land" on a specific mode; they hover.
47. The leading tone problem — in D minor, C# is a powerful half-step pull to D. Minimalism generally avoids it because it sounds too functional (too "going somewhere"). D Dorian uses C natural (the minor 7th), which doesn't pull as urgently. Avoid C# unless you explicitly want that tonal gravity.
48. Open 5th as the foundation chord — just D + A (or D + A + D in octaves). No third at all. The ear doesn't know if it's major or minor, which is precisely the point. Arvo Pärt builds entire pieces on open 5ths.
49. Stacking from the bass — minimalist voicings often stack notes from a bass drone upward: D2 (bass), D3 + A3 (open 5th), F4 + C5 (color notes floating above). Never put color notes in the bass.
50. Parallel motion — unlike Bach, where parallel fifths and octaves are forbidden, minimalism often uses them deliberately. Glass's keyboard music is full of parallel motion. It creates a thick, homogenous texture. Use it when you want that wash effect; avoid it when you want independence.

**Cross-reference:** For Bach's rules against parallel fifths/octaves and their reasoning, see `ch03-two-voices.html`. Understanding why Bach forbids them makes the minimalist choice to use them more deliberate.

**Build It:** Add a chord track to your session. Create a 4-bar chord clip: bar 1–2 = D open 5th (D3 + A3, half notes); bar 3–4 = Gsus4 (G3 + C4 + D4, half notes). These two chords are the Dm i → G sus4 IV vamp, the D Dorian fingerprint. Play all existing melody/pulse tracks against this new chord layer. Adjust the chord voicing until it sits underneath without drowning the melody.

**Diagrams needed:**
- Voicing comparison: three versions of D minor chord — (A) close triad D3-F3-A3, (B) open 5th D3-A3, (C) sus2 D3-E3-A3. Shown as note clusters with labels.
- Stack diagram: bass drone D2, then D3+A3, then F4+C5 floating above — showing layered register placement
- Parallel motion vs contrary: two-voice example showing Glass-style parallel motion (both voices moving same direction, same interval) contrasted with Bach contrary motion

---

### Chapter 11 — Diatonic Stasis & Modal Color
*Avoiding functional harmony in favour of modal ambiguity.*

**File:** `m11-diatonic-stasis.html`

**Topics:**
51. Functional vs modal harmony — functional harmony (Bach, jazz, pop) uses tension and resolution: V wants to go to I, and the whole piece is about that gravitational pull. Modal harmony sets up a tonal center (D) and moves between chords without creating strong directional pull. There's no "wanting."
52. The two-chord vamp as a complete world — Dm7 → G (or Dm → C, or Dm → F) is not a progression going somewhere; it's an oscillation between two states. This oscillation can sustain an entire piece.
53. Why modal harmony works — the listener's ear stops waiting for resolution and starts living in the texture. This is the shift from "narrative" listening to "immersive" listening. Glass counts on this perceptual shift.
54. D Dorian vamp options:
    - i → IV: Dm → G (the classic Dorian fingerprint, B natural is the clue)
    - i → VII: Dm → C (gentle, less characteristic)
    - i → III: Dm → F (warm, moves toward relative major territory)
    - i → v: Dm → Am (soft, shares three notes)
55. The static bass with changing upper harmony — hold D in the bass and move upper voices through chord tones. This creates harmonic motion without root motion, which is the mildest possible harmonic change.

**Cross-reference:** For Bach's use of pedal point (holding bass while upper voices change), see `harmonic-engines.html`. Diatonic stasis is this technique extended to the entire harmonic language.

**Build It:** Replace the Ch 10 chord track with a full vamp. Two chords, each 4 bars: Dm7 (D3–F3–A3–C4, whole notes) for 4 bars → G sus4 (G3–C4–D4, whole notes) for 4 bars. Loop this 8-bar chord progression. Run all other tracks over it. Confirm the Dorian color: B natural from the G chord against C natural from the Dm7 creates the characteristic modal ambiguity. Neither chord "wins."

**Diagrams needed:**
- Functional vs modal comparison: two harmonic timelines — one shows V → I with a "resolution arrow"; the other shows i ↔ IV as a bidirectional oscillation with no arrow direction
- D Dorian mode shown as a horizontal scale with the characteristic 6th (B natural) highlighted
- Vamp options grid: four common D Dorian two-chord vamps shown as chord symbols with the common tones between them marked

---

### Chapter 12 — The Arpeggiated Field
*Glass's signature: broken chords cycling over long harmonic durations.*

**File:** `m12-arpeggiated-field.html`

**Topics:**
56. What an arpeggiated field is — instead of playing a chord as a block, you cycle through its notes as 8th or 16th notes continuously. The chord becomes a texture, not a moment. Glass does this in *Metamorphosis*, *Glassworks*, *The Hours*.
57. Choosing arpeggio voicing — the choice of which notes, in which octave, in which order determines everything about the texture. A root-position ascending arpeggio (D–F–A–C) sounds different from a spread pattern (D–A–F–C5) or a descending one. The voicing should leave room for the melody.
58. How the arpeggio implies harmony — a continuous arpeggio spells out the chord to the listener's ear even without a separate chord instrument. Add a bass note below and you have a complete harmonic statement from one MIDI track.
59. Arpeggio across chord changes — when the chord changes, the arpeggio voicing changes with it but the rhythmic continuity is unbroken. The transition between chords is smooth because the rhythmic pulse never stops.
60. The arpeggio as middle register filler — in full texture, the arpeggio typically sits in the middle register (octaves 3–4), bass drone below, sparse melody above. It's the connective tissue that holds everything together.

**Build It:** Replace or supplement the chord track with a 6-note arpeggio. For the Dm7 bars: D4–F4–A4–C5–A4–F4 (one cycle per bar, 8th notes, 6 notes × repeating). For the Gsus4 bars: G3–C4–D4–G4–C4–D4 (same principle). The arpeggio should loop seamlessly. Play against Hocket A/B and the pulse. Check: does the arpeggio sit *under* the hocket melody or does it compete? Lower the arpeggio velocity if needed.

**Diagrams needed:**
- Arpeggio pattern diagram: a 6-note D Dorian arpeggio shown in piano roll over one bar, with the implied chord written below (D–F–A–C = Dm7)
- Three voicing options: root-position ascending, spread (root + 5th + 7th + 9th), and an alternating up/down pattern — all shown in piano roll
- Arpeggio continuity across chord change: two-bar piano roll showing arpeggio pattern shift from Dm7 to Gsus4, with the transition beat highlighted

---

### Chapter 13 — Slow Harmonic Rhythm
*Minimalism's harmonic patience: chords that hold for 4, 8, or 16 bars.*

**File:** `m13-slow-harmonic-rhythm.html`

**Topics:**
61. What harmonic rhythm is — how often the harmony changes. Bach changes chords frequently (every beat in sequences, every bar or two in normal phrases). Glass and Reich change chords every 4–16 bars or more. Slower harmonic rhythm = more time to settle into each sonic world.
62. Why slow harmonic rhythm works in minimalism — the loop structure means the listener isn't tracking harmonic narrative; they're listening to texture. A chord that lasts 16 bars becomes a room the listener inhabits, not a signpost they're passing.
63. What to do in the space — with slow harmony, melodic/rhythmic interest has to do more work. Add phase, displacement, micro-variation. The challenge: sustain interest across 8 bars of the same chord.
64. Harmonic rhythm and energy — faster chord changes feel like more energy and forward momentum. Slowing the harmonic rhythm as a piece evolves creates a sense of settling or resolution even if the notes keep moving.
65. Hovering vs traveling — pieces with fast harmonic rhythm feel like they're going somewhere; pieces with slow harmonic rhythm feel like they're hovering. Both are valid compositional postures. Know which you're writing.

**Cross-reference:** For Bach's harmonic rhythm and the relationship between bass motion and chord changes, see `ch05-harmonic-foundations.html`. The Bach approach uses frequent changes as structural momentum; minimalism uses stasis as a different kind of strength.

**Build It:** Expand the 8-bar Dm7 → Gsus4 vamp to 16 bars: Dm7 for 8 bars, then Gsus4 for 8 bars. The arpeggio continues through both. Add one micro-variation to the melody in bars 9–12 (the mid-point of Gsus4) — a small pitch change that acknowledges the listener might need something new. Then return to the original melody for bars 13–16. This is the principle of harmonic patience + melodic service.

**Diagrams needed:**
- Harmonic rhythm timeline comparison: a 16-bar horizontal timeline shown twice — once with Bach-style frequent changes (8 different chords) and once with minimalist slow changes (2 chords, each 8 bars)
- "Hovering vs traveling" graphic: two abstract journey shapes — one with many direction changes (traveling), one with long flat stretches (hovering)
- Melody density vs harmonic rhythm: a diagram showing that as harmonic rhythm slows, melodic density/variation needs to compensate to maintain interest

---

### Chapter 14 — Textural Layering
*How Glass and Reich build density: each new layer adds timbre or rhythm, not new melody.*

**File:** `m14-textural-layering.html`

**Topics:**
66. The layering principle — each new instrument or track adds a new dimension (register, timbre, rhythm, articulation) rather than a new melody. The result is density without clutter.
67. Register assignment — decide in advance which octave range each layer owns: bass drone (D1–D2), foundational arpeggio (D3–D4), melodic hocket (D4–D5), high shimmer (D5–D6). Layers should not overlap in register except at deliberate crossing points.
68. Rhythmic differentiation — if two tracks are in similar registers, they must have clearly different rhythms to remain distinct. Whole notes vs 8th-note arpeggio = compatible. Two 8th-note arpeggios in the same octave = mud.
69. Entry order and build strategy — typically: bass first (establishes the root), then rhythm/pulse, then arpeggio field, then melody, then high shimmer last. Each entry should be an event the listener can notice. Don't dump everything in at once.
70. Texture reduction as a technique — removing a layer is as powerful as adding one. The moment when one layer drops out can be the most dramatic event in a minimalist piece precisely because so little else is happening.

**Cross-reference:** For Bach's approach to texture reduction and giving voices breathing room, see `ch10-space-breathing.html`. The minimalist approach to layering and thinning is structurally identical — just at a larger time scale.

**Build It:** Assemble a full 4-layer texture in your session: (1) Bass drone track — D2 whole notes, sustained; (2) Arpeggio track — the 6-note Dm7/Gsus4 pattern from Ch 12; (3) Hocket A+B — the split melody from Ch 9; (4) High shimmer track — new, sparse: just D5 and A5, one note every 4 beats. Play all four simultaneously over the 16-bar chord progression. Set the balance: bass should be felt more than heard (−6dB), arpeggio in the mid-background (−3dB), hocket as foreground melody (0dB), shimmer barely audible (+3dB ribbon, low velocity).

**Diagrams needed:**
- Layer stack diagram: four horizontal rows (bass / arpeggio / hocket / shimmer), each showing their register range and rhythmic density — a texture map
- Entry timeline: a 32-bar arrangement view showing layer entries: bar 1 bass → bar 5 arpeggio → bar 9 hocket → bar 17 shimmer
- Texture reduction example: the same stack with one row blanked out, showing how the empty space becomes foreground

---

### Chapter 15 — Sectional Form & The Art of Staying
*Large-scale structure in minimalism: sequences of states rather than narrative arcs.*

**File:** `m15-sectional-form.html`

**Topics:**
71. Sections as states, not events — in Bach, a new section has new material and moves the harmonic narrative forward. In minimalism, a new section is often just a different *state* of the same material — thinner texture, different chord, new register. The material may barely change.
72. When to change sections — not based on "I need new material" but based on perceptual pacing: the listener needs a change of environment every N bars to stay engaged. 16–32 bars per section is typical, but it depends entirely on how much variation is happening within the loop.
73. Types of contrast in minimalist form:
    - Texture contrast: full (all layers) → sparse (one or two layers)
    - Harmonic contrast: vamp 1 (Dm) → vamp 2 (Am or F)
    - Register contrast: mid-range → high register or bass emphasis
    - Dynamic contrast: loud → soft, or soft → loud
74. Transitions — in minimalist music, the transition between sections is often the most interesting moment. Options: hard cut (abrupt, dramatic); filter sweep (gradual timbre shift); subtraction to one voice then new section enters; reverse-additive (strip back to one note, then add new material).
75. The art of staying — the biggest challenge in minimalism is resisting the urge to change too soon. Stay in a section until the listener has completely settled in. Then change. The satisfaction of a well-timed section change is proportional to how long you waited.

**Cross-reference:** For Bach's large-scale form strategies (ritornello, fugue exposition, arch form), see `ch09-large-scale-form.html`. The nesting principle — same logic at every structural level — applies in minimalism too.

**Build It:** Design a 64-bar arrangement in Ableton Arrangement View. Section A (bars 1–16): full texture, Dm7 vamp, all 4 layers. Section A' (bars 17–32): same vamp, strip to bass + arpeggio only (drop hocket and shimmer). Section B (bars 33–48): switch to the Gsus4 chord only (one chord, no changes), bring back just the hocket in a new micro-variant. Section A-return (bars 49–64): restore full texture, back to Dm7 → Gsus4 vamp. Label each section in Ableton's clip names. Use a filter sweep as the transition into Section B.

**Diagrams needed:**
- Sectional form timeline: an 64-bar timeline showing A / A' / B / A-return with color-coded blocks and texture-density indicators (thick bar = full texture, thin bar = sparse)
- Transition types diagram: four small timelines showing hard cut, filter sweep, subtraction-then-entry, and reverse-additive transitions
- "When to change" decision: a perceptual engagement curve over time, showing how interest declines if you stay too long and spikes when a well-timed section change arrives

---

### Chapter 16 — Evolution Without Development
*How to make a 5-minute piece feel purposeful without Fortspinnung or Sonata form.*

**File:** `m16-evolution.html`

**Topics:**
76. The macro arc — even a piece built from near-identical loops needs an overall shape. The most common: soft/sparse opening → gradual build → full-texture peak → gradual dissolution → quiet ending. This is not development in the Bach sense; it's a dynamic and textural arc.
77. Automation as composition — in Ableton, automation is a compositional tool, not just a mix tool. A low-pass filter opening from 200Hz to 8kHz over 32 bars is a structural event. Volume envelopes that rise and fall across the arrangement are phrases in the macro sense.
78. Timbral drift — gradually changing the character of a sound over time (filter, reverb decay, distortion) without changing the notes. The piece "evolves" without any MIDI content changing.
79. Dynamic arc vs additive arc — you can build tension by adding layers (additive arc) or by increasing volume/brightness (dynamic arc). Both create a sense of "building toward something." Combining them is powerful but requires care — don't peak too early.
80. The ending — in minimalist music, endings are hard. Options: subtraction to silence (the most honest); a final held note or chord (creates arrival); a loop fade (feels unfinished but works in the right context); a structural callback (return a layer that was absent for a long time). Choose deliberately.

**Cross-reference:** For Bach's approach to the final cadence and earned resolution, see the Epilog section in `ch07-the-sentence.html`. The minimalist ending solves the same problem — how to signal that this is the end — using entirely different tools.

**Build It:** Final session. Add automation to the 64-bar arrangement from Ch 15: (1) A low-pass filter on the master channel opens from closed (200Hz cutoff) to fully open over bars 1–32, then closes again over bars 33–64. (2) A volume automation on the shimmer track: silent bars 1–16, rises bars 17–32, peak bars 33–48, fades bars 49–64. (3) Reverb decay time on the arpeggio track: short (0.5s) in section A, long (3.5s) in section B, medium (1.5s) on the return. Export the 64-bar piece. You have a complete, structured ambient composition built entirely from the 4-note D Dorian seed.

**Diagrams needed:**
- Macro arc diagram: a 64-bar timeline showing the dynamic/texture envelope from soft → peak → soft, with section labels and automation events annotated
- Automation lane visualization: three horizontal automation lanes (filter cutoff, shimmer volume, reverb decay) shown as curves over the 64-bar timeline
- "The ending" comparison: three small timelines showing the three common minimalist ending strategies (subtraction to silence, held final chord, fade)
- Full piece structure map: a complete annotated diagram of the finished 64-bar composition, showing all active layers, harmonic areas, automation events, and section labels — the piece in one image

---

## Session Guidelines

When building each chapter in a Claude Code session:

1. **Read this plan file first** to understand context, design system, and where the chapter fits in the progression.

2. **Reference existing pages** for design consistency. The Bach chapters establish the HTML/CSS patterns — reuse card structure, color system, banner animations, diagram styles, and typography. Do not add any new CSS.

3. **Each chapter is a single self-contained HTML file** with no inline `<style>` blocks — all styles come from `styles.css`. Google Fonts loaded via `<link>`.

4. **SVG diagrams are critical.** Every concept should have a visual aid where possible. Diagrams use inline SVG, follow the color conventions in CLAUDE.md, and use `Space Mono` for all text labels. Piano-roll-style diagrams work especially well for loop/rhythm content — horizontal = time, vertical = pitch.

5. **The "Build It" section at the end of each chapter** continues from the previous chapter's session state. Read `minimalist-build-it-log.md` for the previous chapter's state before writing the Build It. Be specific: which tracks, which notes, which velocities, which clip lengths.

6. **D Dorian throughout.** All melodic examples use D–E–F–G–A–B–C unless a topic specifically requires showing a different mode. Chord examples: Dm, G, C, F, Am, Em. Avoid C# (the leading tone) unless explicitly discussing why minimalism avoids it.

7. **Tone:** Direct, practical. Explain the *why* behind each technique — not just what to do, but why the ear responds the way it does. Use "your ear expects X, Glass/Reich gives you Y" framing. Reference specific compositions where the technique appears prominently.

8. **Cross-references:** When a technique has a Bach parallel, reference the specific Bach chapter file. This is one of the design goals of the series — showing the same musical problem solved two ways.

9. **Ableton + Volca context:** Frame all Build It instructions around Ableton Session/Arrangement View and MIDI clips. Note where the 16-step Volca sequencer can replicate the exercise. Use BPM, bar counts, velocity numbers, and note names (D4, F4 etc) rather than classical notation.

10. **nav-back links** in minimalist chapters go to `minimalist.html`, not `index.html`. This is the minimalist series index page.

---

## File Naming

```
m01-the-loop-as-architecture.html
m02-loop-craft.html
m03-micro-variation.html
m04-the-pulse.html
m05-additive-subtractive.html
m06-phase-shifting.html
m07-rhythmic-displacement.html
m08-polyrhythm.html
m09-hocket.html
m10-open-voicings.html
m11-diatonic-stasis.html
m12-arpeggiated-field.html
m13-slow-harmonic-rhythm.html
m14-textural-layering.html
m15-sectional-form.html
m16-evolution.html
```

Index page: `minimalist.html` (lists all minimalist chapters, linked from main `index.html`)

---

## Landing Page Structure

The main `index.html` will be restructured into a hub page with two section cards:

- **Card 1: "Bach — Voice Leading & Counterpoint"** → links to `bach.html` (the current `index.html` content, moved to a new file)
- **Card 2: "Minimalist Composition"** → links to `minimalist.html` (new, lists m01–m16)

When this restructure happens, all existing Bach chapter pages need their `nav-back` link updated from `index.html` to `bach.html`. Minimalist chapters will use `nav-back` → `minimalist.html` from day one.

Until the restructure: the add-page skill adds minimalist chapters as a second section in the existing `index.html`, below the Bach section, under a new `.section-label` reading "Minimalist Composition."

---

## Build Order

Build chapters in order (m01 → m16) since each Build It extends the previous session. The conceptual content is mostly self-contained, but the Build It exercises form a chain.

Priority chapters if building non-sequentially:
1. **m01** — foundational; establishes the loop paradigm
2. **m06** — phase shifting is the most uniquely minimalist technique and the most fun to demo
3. **m12** — the arpeggiated field is Glass's signature and the most directly applicable technique
4. **m16** — the payoff; shows how all parts become one piece
