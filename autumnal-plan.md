# Autumnal Sound: A Composition Guide — Project Plan

## Overview

A chapter-by-chapter HTML reference guide for composing music that sounds *autumnal* — the specific quality of Bill Evans's suspended time and Debussy's dying-leaf harmonies. Not sad, not dramatic, not nostalgic — **still, warm, and ending without urgency**.

This is the third series in the site, following Bach Counterpoint and Minimalist Composition. It assumes some familiarity with both: the Bach series established voice-leading rigor; the minimalist series established loop/process thinking. This series synthesizes them into a fully articulated *aesthetic palette* — not a system, but a sound.

**Through-line:** stasis + warmth + gentle harmonic motion.

**Target reader (Sam):** An electronic music producer building a personal compositional voice, working in Ableton Live with a Korg Volca hardware setup, who has worked through both prior series. This series is less prescriptive than the others — it's a palette guide, not a technique manual. The goal is to have all these ingredients available and know when to use each one.

**Aesthetic references:** Bill Evans × Debussy × Sibelius × Grouper — music that is beautiful in the way October is beautiful: something good is ending and nobody is rushing it.

---

## Design System

All autumnal chapters use the same `styles.css` — no new CSS. File prefix: `a`. Index page: `autumnal.html`. Series listed on `index.html` alongside the other two.

See `CLAUDE.md` for the full design system spec. Color semantics are the same:
- Blue = structure/logic/upper voice
- Green = expected, resolved, diatonic
- Orange = surprise, warmth, episode
- Purple = chromatic color, borrowed chords
- Red = tension, leaps

### New Diagram Conventions for Autumnal Series

These extend the existing conventions with autumnal-specific visualizations:

- **Harmonic rhythm timeline:** A horizontal bar divided into measures. Each cell is colored by chord function (blue = tonic, green = IV/♭VII, orange = ♭III/♭VI, purple = modal mixture). Width of each cell is proportional to its duration — the whole point is showing *how slowly* chords change.
- **Modal spectrum diagram:** A horizontal scale from Phrygian → Aeolian → Dorian → Lydian with an "autumnal zone" highlighted between Aeolian and Dorian. A needle or shaded band shows where the current piece sits.
- **Phrase arc diagram:** A melody shown as a connected dot-line graph, with pitch on the vertical axis and time on the horizontal. Ascending slopes = rising lines, descending slopes = falling. Used in melody chapters. Follows the same dot-and-line visual conventions as the Bach note diagrams.
- **Frequency warmth map:** A horizontal bar from 20Hz to 20kHz with the "autumnal zone" (roughly 200Hz–2kHz) highlighted. Instrument names placed at their fundamental frequency ranges.
- **Pre-delay reverb envelope:** An amplitude diagram showing the direct signal, a gap, then the reverb tail — illustrating the "float then decay" effect of high pre-delay settings.

---

## Musical Conventions

- **Home mode: D Aeolian** — D–E–F–G–A–Bb–C. Natural minor. The Bb (♭6) and C natural (♭7) create subdominant gravity without leading-tone drama. This is the darker of the two autumnal modes.
- **Secondary mode: D Dorian** — D–E–F–G–A–B–C. The raised 6th (B natural) lifts the darkness without leaving it. The major IV chord (G major) is the sonic fingerprint. This is the warmer of the two autumnal modes.
- **Episode mode: F Lydian** — F–G–A–B–C–D–E. The raised 4th (B natural above F) creates a shimmer, a "late afternoon light" quality. Used for brief episodes only — one or two moments per piece, not a sustained home.
- **The autumnal zone is between Aeolian and Dorian.** Many pieces hover in this ambiguity — using Bb sometimes and B natural other times, never fully committing to either shade. This is the modal flavor of Bill Evans's *Peace Piece* and much of Sibelius.
- **D as root** — continuity with Bach series (D minor) and minimalist series (D Dorian). D shares a tonic across all three books.
- **Tempo:** 60–80 BPM. Slow enough for chords to breathe. The autumnal harmonic rhythm is typically 1 chord per 2–4+ bars — much slower than jazz or pop.
- **Chord vocabulary:**
  - i: Dm, Dm7, Dm(add9), Dm(maj7) — tonic in four shades
  - iv: Gm, Gm7 — subdominant, deep and dark
  - IV: G major, G(add9) — Dorian major IV, warmth
  - ♭VII: C major, Cmaj7 — soft, warm drift
  - ♭VI: Bb major, Bbmaj7 — the most autumnal chord: warm + slightly sad
  - ♭III: F major, Fmaj7 — relative major warmth; F Lydian episode as Fmaj7(#11)
  - v: Am, Am7 — soft non-dominant; avoid A major (leading tone drama)
  - ii: Em7 (Dorian) — gentle yearning without drama
- **Voice leading:** Stepwise descent preferred. Leaps are expressive exceptions. No leading tones except as passing notes.
- **Ableton context:** Primarily Arrangement View (this series is about form, not loops). Reverb, EQ, and tape emulation are compositional ingredients here, not afterthoughts.

---

## Cross-References

| Autumnal technique | Bach parallel | Minimalist parallel |
|---|---|---|
| Slow harmonic rhythm | Chorale texture (ch03) | Loop as architecture / structural gravity (m01) |
| Pedal tone drone | Pedal point (harmonic-engines.html) | Drone and pedal (m11) |
| Modal mixture ♭VII, ♭III | Harmonic color (ch06) | Modal vamp |
| Falling stepwise melody | Single-line contour (ch01) | Cell design / falling lines (m02) |
| Inconclusive phrase endings | Half cadence / interrupted cadence (ch05) | Open form (m15) |
| Unhurried counterpoint | Two-voice framework (ch03) | Subtraction arc / sparse texture (m13) |
| Extended chords (maj7, add9) | Non-chord tones / suspensions (ch04) | — |
| Pre-delay reverb space | Space and breathing (ch10) | Reverb and texture (m12) |
| Behind-the-beat phrasing | Rubato in chorale (ch03) | — |

---

## The Build It Thread

The Build It exercises across 14 instructional chapters build a single piece from scratch:

**Seed:** A single chord — **Dm(add9)** (D3–F3–A3–E4) — sustained for 4 bars at **70 BPM**, on a warm pad sound. Nothing else. One chord, breathing, going nowhere.

**Goal:** By chapter 14, that chord becomes a fully realized ambient piece: 64+ bars, three voices (harmonic bed, melodic line, bass pedal), slow harmonic evolution, filtered timbral arc, and deliberate form. The whole piece should sound like something beautiful that is ending without urgency.

---

## Chapter Plan

Chapters 1–14 are instructional. Chapters 15–17 are case studies that require source material (see note at end).

---

### Chapter 1 — What Is Autumnal?
*Stasis + warmth + gentle harmonic motion. The feeling of something beautiful that's ending without urgency.*

**File:** `a01-what-is-autumnal.html`

**Topics:**
1. The autumnal through-line — not sad, not dark, not nostalgic. The specific quality of stillness-in-motion: things are changing but no one is hurrying. Contrast with: dramatic (Phrygian, loud dynamics), melancholy (minor with prominent leading tones), nostalgic (major-key sweetness). Autumnal is none of these — it's *bittersweet at rest*.
2. The five dimensions — an overview map of the full series: Harmony (modes, extended chords, subdominant motion, modal mixture, Lydian), Time (slow harmonic rhythm, behind-the-beat, unhurried counterpoint), Sound (timbral palette, filtering/imperfection), Space (silence, reverb, pedal tone), and Melody (falling lines, inconclusive endings). These are the five ingredient categories.
3. Canonical touchstones — four examples introduced with brief descriptions. Two become case study chapters later: Bill Evans *Peace Piece* (1958), Debussy *Feuilles mortes* (1913), Sibelius *Voces intimae* string quartet, Grouper *Dragging a Dead Deer Up a Hill* (2008). What they share: the stasis/warmth/gentle-motion triad.
4. Autumnal vs adjacent aesthetics — a contrast table: autumnal vs dark ambient (too cold/vacant), vs pastoral (too cheerful, major-key), vs melancholy pop (too climactic, too directed), vs Nordic minimalism (similar but more bleak/sparse). Autumnal requires *warmth* as a component — cold stasis is dark ambient; warm stasis is autumnal.
5. The palette vs the system — this series is unlike the Bach and minimalist books. There's no single rule to apply. Instead, this is a collection of ingredients — you choose which ones, in what proportion. The goal is to internalize what each ingredient does so you can reach for the right ones.

**Build It:** Listen to three of the four touchstones back-to-back: *Peace Piece* (5+ minutes), *Feuilles mortes* (4 minutes), and *Dragging a Dead Deer* title track (3 minutes). Write down — in the session notes file you'll keep for this series — three qualities all three pieces share. These three qualities are your autumnal checklist.

**Diagrams needed:**
- The five-dimension map: a concept map or labeled ring showing the five ingredient categories around a central "autumnal" node
- Contrast grid: a 2×2 diagram (warm/cold on one axis, still/moving on the other) with Autumnal in warm+gently-moving quadrant, Dark Ambient in cold+still, Pastoral in warm+active, Nordic bleak in cold+sparse

---

### Chapter 2 — Mode Choice: Aeolian, Dorian, and the Bittersweet Spectrum
*Not all minor modes are equal. The wrong one sounds dramatic; the right one sounds like October.*

**File:** `a02-mode-choice.html`

**Topics:**
6. The minor mode spectrum — from darkest to brightest: Phrygian (too Spanish/dramatic), Aeolian (natural minor — the autumnal home), Dorian (raised 6th — warmer, Bill Evans territory), and Lydian (bright/floating — available as an episode). Understanding where each mode sits and what it sounds like.
7. What makes Aeolian autumnal — the Bb (♭6) and the C natural (♭7). These two notes create a gravitational pull toward the tonic without leading-tone drama. The ♭VI chord (Bb major in D Aeolian) is particularly autumnal — warm but slightly sad. The ♭VII chord (C major) drifts without resolving.
8. What makes Dorian also autumnal — the raised 6th (B natural) creates unexpected warmth in an otherwise minor setting. The IV major chord (G major in D Dorian) feels like a shaft of light through clouds. Dorian is the mode of *Peace Piece*, much of Glass, and most of Nala Sinephro's work.
9. Moving between modes in a single piece — the most autumnal pieces often hover between Aeolian and Dorian, using Bb sometimes and B natural other times. This modal ambiguity prevents the music from committing to either full darkness or full warmth. The listener can't name the mode — they just feel the quality.
10. Avoiding Phrygian and harmonic minor — the ♭II chord (Neapolitan/Phrygian) has a dramatic Spanish/film-score quality that fights the autumnal mood. Harmonic minor's raised 7th (C#) creates leading-tone drama — useful occasionally for a moment of arrival, but the autumnal palette largely avoids it.

**Cross-reference:** D Dorian as home mode — see minimalist series introduction. Modal color chords in Bach — `ch06-harmonic-color.html`. Modal mixture (the active use of Bb vs B natural as a choice) — Ch 5.

**Build It:** Take the Dm(add9) chord from Ch 1. Hold it for 8 bars. Now resolve to C major (♭VII — Aeolian drift) for 4 bars. Notice the mood: not a cadence, more like a breath. Now try G major (IV — Dorian warmth) instead. That's a different shade of the same feeling. Then try Bb major (♭VI — the full Aeolian sadness). Build a 16-bar skeleton: Dm(add9) × 4 bars → Cmaj7 × 2 → Dm × 2 → G major × 2 → Dm × 4 → Bbmaj7 × 2. At 70 BPM, one chord per bar. This is the harmonic skeleton.

**Diagrams needed:**
- Modal spectrum: horizontal scale from Phrygian to Lydian, with Aeolian and Dorian both in the autumnal zone, the zone highlighted
- Scale comparison: Aeolian vs Dorian shown as two rows of note dots on a staff grid, with the differing 6th degree (Bb vs B natural) highlighted in orange
- The ♭VI moment: a short chord diagram showing Bb major appearing in a D context — labeled "warm + sad"

---

### Chapter 3 — Extended Chords: Softening the Edges
*A plain minor chord lands. A minor add9 floats.*

**File:** `a03-extended-chords.html`

**Topics:**
11. The add9 quality — adding a 9th (E above a Dm chord: D–F–A–E) blurs the chord's edges. It doesn't demand resolution; it just hovers. The 9th creates ambiguity between the chord and the scale — are we hearing a chord or a cluster? That ambiguity is autumnal.
12. The maj7 quality — Dm(maj7) = D–F–A–C#. The minor triad provides sadness; the major 7th adds wistfulness. This is Bill Evans's signature chord color. The C# in a Dm context creates a tiny internal tension — a suspended quality.
13. The min7 quality — Dm7 (D–F–A–C natural) is the most neutral extended minor chord. Darker than add9, warmer than plain Dm. Used as a "resting" chord: not static, not colored, just at ease.
14. Extended major chords — Cmaj7, Bbmaj7, Fmaj7. The major 7th on a major chord is warm and un-harsh. Fmaj7 (F–A–C–E) is particularly autumnal: the E is both the major 7th of F and the 9th above D — it creates gentle tension without drama.
15. When to use plain triads — extended chords can become homogeneous. A plain Dm after a series of extended chords sounds like bedrock: grounded, arrived, finished. This contrast is essential. Extended chords create the float; plain triads create the landing.

**Build It:** Take the 16-bar harmonic skeleton from Ch 2 and soften every chord: Dm(add9) remains; Cmaj → Cmaj7; G major → G(add9) (avoid Gmaj7 — it goes too jazzy); Bb major → Bbmaj7. Re-voice each chord in Ableton with the 9th or maj7 on top in the upper register. Listen to how the texture shifts from stated to suspended. Save as "Autumnal Harmony v1."

**Diagrams needed:**
- Extension comparison: four chord voicings shown as stacked note dots — Dm, Dm7, Dm(add9), Dm(maj7) — with added notes highlighted in orange, labeled with their character
- Softening concept: a diagram showing the triad as a hard-edged shape and the add9 version as a slightly blurred/expanded version of the same shape (a metaphorical visualization, not a chord chart)
- Voicing diagram: piano-roll style stacked blocks showing a practical voicing of Dm(add9) within the D3–E5 range

---

### Chapter 4 — Subdominant Motion: Cadences That Settle
*Instead of tension–resolution, try weight–rest.*

**File:** `a04-subdominant-motion.html`

**Topics:**
16. Subdominant vs dominant gravity — the dominant (V) creates tension that must resolve to I. The subdominant (IV, ♭VII, ♭VI) creates a gentler pull — a sense of *settling into* the tonic rather than *falling to* it. This is the harmonic engine of autumnal music: weight rather than drama.
17. The ♭VII–I motion — C major to Dm (in D). C natural has no leading-tone pull toward D, so the "resolution" feels horizontal rather than vertical — a drift, not a fall. This is the most common autumnal cadence. It feels like sitting down.
18. The IV–I motion (plagal) — G major to Dm (in D Dorian). The amen cadence. Moving from the major IV to the minor tonic has a quality of gentleness and completion without drama. The hymn tradition has been using this for centuries.
19. The ♭VI–I motion — Bb major to Dm. The darkest of the subdominant cadences. The Bb has a slight downward pull into A (the 5th of Dm), giving this motion a more melancholy quality than ♭VII–I. Use for moments of wistful arrival.
20. Avoiding V–I — the dominant chord (A major or A7 in D) has a drama-resolving quality that fights the autumnal mood. The softened dominant (Am, Am7) is acceptable — the missing leading tone (C#) removes the drama. Use A major only when you explicitly want a moment of climax or arrival.

**Cross-reference:** For the full taxonomy of cadential types, see `ch05-cadences.html`. The autumnal palette deliberately avoids the perfect authentic cadence (V–I). For subdominant pedal in minimalist context, see `m11-drone-and-pedal.html`.

**Build It:** Redesign the 16-bar progression from Ch 3 using only subdominant-direction motion. No A major chords. Target cadences: Dm → Cmaj7 (♭VII–I), Bbmaj7 → Dm (♭VI–I), G(add9) → Dm (IV–I). Try this 8-bar loop: Dm(add9) × 2 → Cmaj7 × 1 → Dm × 1 → G(add9) × 1 → Dm × 1 → Bbmaj7 × 1 → Dm × 1. Play it at 70 BPM with whole-note chord changes (one chord every 2 bars). Notice the absence of urgency.

**Diagrams needed:**
- Three cadence types compared: V–I (tense descending arrow), IV–I (gentle arch), ♭VII–I (horizontal drift) — three small labeled diagrams
- Harmonic rhythm map: the 8-bar loop shown as a row of colored blocks, each labeled by chord name and function
- "Settling vs resolving" concept: a simple visual — an arrow landing hard (V–I) vs a stone gently coming to rest (♭VII–I)

---

### Chapter 5 — Modal Mixture: Borrowing for Bittersweet Color
*The ♭VII and ♭III chords do something neither Aeolian nor major can do alone.*

**File:** `a05-modal-mixture.html`

**Topics:**
21. What modal mixture is — borrowing chords from a parallel mode. In D major, borrowing from D minor gives you: ♭III (F major), ♭VI (Bb major), ♭VII (C major). In D Aeolian, borrowing from D Dorian gives you: IV major (G major). These borrowed chords create color without modulation.
22. In D major context: the ♭VII chord (C major) — inserting C major into a D major piece creates immediate modal ambiguity. The ear says "maybe this is D Mixolydian?" and can't commit. This ambiguity is autumnal: you're not quite sure where you are.
23. The ♭III chord (F major in D context) — the relative major color. F major inside a D-centered piece feels warm and slightly displaced — like sunlight through a different window. Fmaj7 is particularly effective.
24. Moving between Aeolian and Dorian in the same piece — using Bb at some moments and B natural at others creates modal ambiguity from within the minor modes. This is more subtle than borrowing from a completely different mode and more characteristic of the autumnal aesthetic.
25. The bittersweet formula — the most effective autumnal harmonic move: a major chord (warmth) → a minor chord (sadness) → return to tonic. For example: Fmaj7 → Gm7 → Dm. The Gm7 creates that signature catch in the chest. The return to Dm feels like accepting something.

**Cross-reference:** For modal mixture in Bach, see `ch06-harmonic-color.html`. For the Dorian IV as a characteristic sound, see the minimalist series introduction.

**Build It:** Add a modal mixture episode to your piece. After the 16-bar skeleton from Ch 4, insert 8 new bars: Fmaj7 × 2 → Bbmaj7 × 2 → Gm7 × 2 → Dm(add9) × 2. This is the bittersweet arc: warmth (F), sadness (Bb), yearning (Gm7), home (Dm). Repeat this 8-bar episode and place it at bars 17–32. Your piece is now 32 bars with a harmonic arc. Save as "Autumnal Harmony v2."

**Diagrams needed:**
- Parallel mode borrowing map: D major scale vs D Aeolian side by side, with borrowed chords (♭III, ♭VI, ♭VII) marked as arrows crossing between rows
- Bittersweet formula diagram: Fmaj7 → Gm7 → Dm shown as a short harmonic progression with emotional labels (warmth → catch → home)
- Modal ambiguity zone: the modal spectrum diagram from Ch 2, now with arrows showing how the ♭VII and IV chords pull the piece between Aeolian and Dorian

---

### Chapter 6 — Lydian Light: The Raised 4th as Late-Afternoon Color
*Use sparingly. Once per piece is usually enough.*

**File:** `a06-lydian-light.html`

**Topics:**
26. What makes Lydian autumnal — the raised 4th degree creates a dreamy, floating quality that reads as "late-afternoon" rather than "evening." In F Lydian (F–G–A–B–C–D–E), the B natural replaces Bb. The tritone from F to B doesn't resolve — it shimmers. This is distinct from the Aeolian darkness or Dorian warmth; it's a specific quality of light.
27. Lydian vs major — both are bright, but Lydian feels suspended where major feels grounded. Major has strong subdominant pull (F below C wants to resolve); Lydian's raised 4th (B, the tritone above F) resists that pull. The mode seems to hover.
28. F Lydian inside a D-root piece — F Lydian shares five of its seven notes with D Dorian. An episode in F Lydian feels related but displaced — a color shift, not a modulation. The B natural is the pivot note: it appears as the 6th of D Dorian and the raised 4th of F Lydian.
29. When to use Lydian — the late-afternoon-light moment. Usually once per piece, as a brief episode before darkness returns. Debussy and Satie use it exactly this way. More than one Lydian episode and it stops feeling like a shaft of light and starts feeling like a new mode.
30. The #11 chord — the shorthand for Lydian color without a full modal commitment is a major 7th chord with a sharpened 4th (the #11): Fmaj7(#11) = F–A–C–E–B. Even one note (the B natural in the upper voice over an Fmaj7) evokes this quality.

**Build It:** Create a 4-bar "Lydian episode" for your piece. Start on Fmaj7 (already in your piece from Ch 5). Add B natural in the upper register — either as a melody note or as the top of the pad voicing — for 2 bars. This is Fmaj7(#11). Then remove the B natural and settle back to Dm(add9) for 2 bars. The shimmer disappears; you're back in October. Place this episode around bar 44 of your growing arrangement.

**Diagrams needed:**
- Lydian scale: a row of note dots for F Lydian with the #4 (B natural) circled in orange and labeled "late-afternoon light"
- F Lydian vs F major: two rows compared, with the differing 4th degree highlighted
- #11 chord voicing: piano-roll style stacked blocks showing Fmaj7(#11) in a practical range, with the B natural on top labeled

---

### Chapter 7 — Slow Harmonic Rhythm: Letting Chords Breathe
*The single most effective autumnal ingredient. Two chords per minute is not too few.*

**File:** `a07-slow-harmonic-rhythm.html`

**Topics:**
31. What harmonic rhythm is — the rate at which chords change. Fast harmonic rhythm (chord per beat) = jazz, classical, pop. Slow harmonic rhythm (chord every 2–8 bars) = ambient, autumnal, drone. The same chord progression played at different harmonic rhythms creates completely different emotional effects.
32. How slowing harmonic rhythm changes perception — when a chord lasts 4–8 bars, the listener stops waiting for the next chord and starts *living inside* the current one. This is the fundamental shift from tonal music (where harmony drives narrative) to autumnal music (where harmony creates environment).
33. The practical minimum — most producers program chord changes too fast. The autumnal minimum is one chord every 2 bars at 70 BPM (~3.4 seconds per chord). Many great pieces use one chord every 4–8 bars. Bill Evans's *Peace Piece* sustains one chord for 6+ minutes. The question is: what is your shortest acceptable duration for each chord?
34. Keeping interest when chords don't change — when harmony moves slowly, interest comes from elsewhere: melody, register shifts, velocity arcs, timbral evolution, countermelody, or silence. This is a chapter about trusting stillness and knowing what to put in the non-harmonic dimensions.
35. Harmonic rhythm as formal device — by controlling *when* harmonic rhythm briefly accelerates (a moment of arrival or tension) and when it decelerates (endings, resolutions, drones), you control the large-scale emotional shape without conventional formal devices.

**Cross-reference:** For Bach's chorale-rate harmonic rhythm as a model, see `ch03-two-voices.html`. For large-scale form through harmonic pacing, see `ch09-large-scale-form.html`. For minimalist loop gravity and structural weight, see `m01-the-loop-as-architecture.html`.

**Build It:** Take the 32-bar "Autumnal Harmony v2" from Ch 5. Double the duration of every chord: 1 bar per chord becomes 2 bars per chord. You now have 64 bars at 70 BPM — roughly 3.5 minutes of music. Play it from beginning to end without stopping. Notice where it feels too long (the least interesting chords). Note those moments and ask: is it the chord itself, or is it that nothing else is moving? Don't change the chords yet — we'll add melody and texture in later chapters.

**Diagrams needed:**
- Harmonic rhythm comparison: three versions of the same 8-chord progression shown as horizontal timelines — fast (narrow cells), medium, slow (wide cells). Same chords, wildly different cell widths.
- "Living inside the chord" metaphor: a diagram showing listener attention as a curve — in fast harmonic rhythm it tracks chord changes as events; in slow harmonic rhythm it explores the interior of each chord
- Form shape concept: a curve showing how harmonic rhythm acceleration and deceleration creates formal structure (long chord = open, brief acceleration = climax, long chord again = rest)

---

### Chapter 8 — Behind the Beat: Rubato and the Sighing Phrase
*Slightly late is more expressive than exactly on time. But only slightly.*

**File:** `a08-behind-the-beat.html`

**Topics:**
36. What "behind the beat" means — note onsets placed slightly *after* the metric grid. Not sloppy (much late), not rushing (ahead), but a gentle tardiness that implies ease and intent. This is the difference between a phrase that *sounds composed* and one that sounds *felt*.
37. Rubato — tempo flexibility where phrases breathe faster and slower. Not random: a slight acceleration through a phrase, a slight retardation at the phrase end. The phrase "inhales" and "exhales." This is how Debussy, Evans, and Sibelius shape time.
38. Behind the beat in a DAW — in Ableton's MIDI editor: directly nudge a note onset +8 to +15ms forward without using the Groove Pool or swing quantize. This is not swing (which is patterned); this is note-by-note intent. A single note nudged 12ms late can make a phrase feel considered rather than mechanical.
39. The sighing phrase shape — autumnal phrases often have a micro-tempo arc: slight forward lean at the beginning (urgency), settling behind the beat at the end (relief/surrender). The last note of a phrase is often slightly later than the first. This is the phrase "sighing."
40. Intentional lateness vs sloppy lateness — the test: does the lateness feel *meant*? Intentional lateness has internal consistency — similar notes in similar positions have similar offsets. Inconsistent lateness feels like missed beats. The solution is to apply the offset thoughtfully, not randomly.

**Build It:** Add the first two notes of your melody. Place D5 on beat 1 of bar 1 (sustained, half note) — but nudge it +12ms. Place A4 on beat 3 of bar 2 — nudge it +10ms. These are the first two notes of the melody: a root held, then the 5th settling. They're not on the grid. They arrive considered. Play these two notes over the 64-bar harmonic bed. Notice how the slight lateness creates a felt quality that exact quantization doesn't have.

**Diagrams needed:**
- Grid vs nudged: a zoomed-in piano roll view showing one note exactly on the grid and the same note 12ms after, with the offset labeled in ms
- Sighing arc: a diagram showing note onset positions over a 4-beat phrase — slightly forward at the high point, slightly late at the end — with a curved envelope over the positions labeled "exhale"
- Macro rubato: a tempo curve over a 4-bar phrase showing subtle acceleration in bars 1–2 and gentle retardation in bars 3–4

---

### Chapter 9 — Timbral Palette: Instruments That Sound Like October
*The notes can be right and the sound can still be wrong.*

**File:** `a09-timbral-palette.html`

**Topics:**
41. The autumnal frequency range — warm midrange (200Hz–2kHz), rolled-off highs, no harsh brightness. The frequency range of a cello, English horn, Rhodes, or warm analog pad. Bright, shimmery sounds fight the autumnal quality; warm, slightly filtered sounds support it.
42. Keyboard instruments — Rhodes electric piano: warmth without percussion. Upright piano with felt damper: the felt attenuates attack transients and high partials — a soft, slightly muffled quality. Wurlitzer: similar to Rhodes but slightly brighter (use a low-pass to rein it in). Organ with slow attack: sustained, vowel-like, ideal for autumnal harmony.
43. String instruments — solo cello or viola, not violin (too bright). String pad sounds: choose ones with slow attack and long release. No pizzicato. The legato, sustained string quality is the autumnal string sound. Cello has the right fundamental frequency range and warmth.
44. Synthesizers — warm analog pads with slightly detuned oscillators, heavy low-pass filtering (cutoff below 2kHz). OB-style pads (Oberheim/Prophet character). Avoid bright FM synths or wavetable sounds with sharp high partials. The autumnal synth is already half-filtered.
45. Electronic texture sounds — any sound can be made autumnal by removing its brightness. The Korg Volca run through a hardware low-pass filter is a legitimate autumnal instrument. The source matters less than the processing: filter away the high frequencies and almost any timbre settles into the warm midrange zone.

**Build It:** Choose three sounds for your piece's three layers: (1) a harmonic bed (Rhodes, organ, or warm pad), (2) a textural layer (string pad or filtered analog), (3) a bass voice (low pad or soft bass). In Ableton: assign the three tracks their sounds. Apply a low-pass filter to each — harmonic bed cutoff at 2kHz, textural layer at 1.5kHz, bass voice at 500Hz. Play your 64-bar arrangement through these sounds. Adjust volumes until the blend feels like a single warm environment, not three separate instruments.

**Diagrams needed:**
- Frequency warmth map: horizontal bar from 20Hz to 20kHz, autumnal zone (200Hz–2kHz) highlighted in orange, instrument names placed at their fundamental ranges
- Three-layer setup: a texture layer diagram showing harmonic bed, textural layer, and bass voice as three horizontal lanes with their roles labeled
- Cold vs warm timbre: a conceptual "swatch" comparison — not a real spectrum analyzer, just a visual metaphor showing the frequency profile of a cold (bright highs) vs warm (rolled-off highs) sound

---

### Chapter 10 — Filtering & Imperfection: Rolloff, Tape, and Worn Warmth
*Pristine is not autumnal. Slightly worn is.*

**File:** `a10-filtering-imperfection.html`

**Topics:**
46. The case for high-frequency rolloff — bright highs feel alert and present. Rolled-off highs feel distant and slightly past. Autumnal music sounds like it's being remembered as it happens. A high-shelf cut above 8kHz moves a sound from the immediate present to the near-past.
47. Low-pass filter automation — not just for mixing clarity, but as a compositional arc. Set a slow low-pass filter automation on the harmonic bed: cutoff descends from 3kHz to 800Hz over 32 bars. The sound seems to settle into itself, like the afternoon darkening. This is form through timbre, not through chord changes.
48. Tape saturation and harmonic warmth — tape emulation (RC-20, Waves J37, or a soft saturator) adds subtle harmonic distortion to the low-mid range while compressing the highs. The result: a sound that feels analog, slightly worn, and physically present. Even 10–15% tape effect is audible. More than 30% and it stops being autumnal and starts being lo-fi.
49. Noise and imperfection — a quiet noise floor (tape hiss at -30 to -35dB) or a subtle room ambience makes a production feel less constructed and more discovered. Electronic music that includes the room it was made in sounds less perfect and therefore more human.
50. The restraint principle — too much filtering and the music becomes muddy. Too much tape and it sounds like a damaged cassette. The autumnal palette requires restraint: enough warmth to soften, not enough to obscure. If you can hear the processing as processing, you've gone too far.

**Build It:** Process each of your three tracks: (1) Harmonic bed: EQ Eight, high-shelf cut at 8kHz (–4dB), low-shelf boost at 120Hz (+2dB). Add a light saturator at 15% drive. (2) Textural layer: same EQ, plus automate a low-pass filter cutoff from 2.5kHz to 1.2kHz over bars 1–32 (it slowly closes). (3) Bass voice: high-cut at 5kHz, slight low-mid boost at 250Hz. Compare before and after. The processed version should feel warmer and fractionally more distant.

**Diagrams needed:**
- EQ curve diagram: a frequency response showing the high-shelf cut and low-shelf boost applied, with the autumnal frequency zone highlighted
- Filter automation curve: an Ableton-style automation lane showing the low-pass cutoff descending over 32 bars
- Tape saturation effect: a before/after frequency spectrum showing the slight high-roll and low-mid harmonic addition that tape saturation creates (conceptual, not precise)

---

### Chapter 11 — Space: Silence, Pre-Delay Reverb, and the Pedal Tone
*The notes create events. The space between them creates feeling.*

**File:** `a11-space-and-silence.html`

**Topics:**
51. Silence as composition — in autumnal music, silence is not absence but presence. A 2-bar rest in a melodic line creates anticipation and weight. The note after a silence arrives with more meaning than a note after another note. In Grouper and Bill Evans, silence is load-bearing structure.
52. Pre-delay reverb — the pre-delay parameter controls how long before the reverb tail appears after the direct sound. A pre-delay of 80–150ms creates a "halo" effect: the note plays, 100ms of silence, then the tail blooms. Without pre-delay, reverb muddies the attack. With pre-delay, it halos — the note floats and the room arrives after.
53. Reverb size and decay time — long decays (4–8 seconds) wash out detail and can make music feel like a blur. Medium decays (2–3 seconds) with a large room size is the autumnal sweet spot: audible tail, not dominant. The tail is the *memory* of the note, not the note itself.
54. The pedal tone — a sustained bass note (D2 or D3) held underneath moving harmony. As chords change above a fixed bass, the changing harmony creates color while the bass creates stillness. This is the fundamental autumnal paradox: something is happening but nothing is moving. Evans's *Peace Piece* is the extreme version of this.
55. Countermelodies that drift — sparse secondary lines that emerge for a few notes and disappear. They don't complete phrases; they drift. This is Grouper's approach: a melody surfaces from the texture, loops once or twice, then recedes. Nothing is developed; everything just passes through.

**Cross-reference:** For pedal point in Bach, see `harmonic-engines.html`. For drone technique in minimalist context, see `m11-drone-and-pedal.html`.

**Build It:** (1) Add reverb to the harmonic bed track: decay 2.5 seconds, pre-delay 100ms, mix 35%. (2) Add a new bass track: a single D2 note, sustained, held for 8+ bars at a time (velocity 60 — felt more than heard). This is the pedal tone. (3) Play the full arrangement. The three tracks should now feel like a space you're inside rather than music you're listening to. If it still feels like tracks playing, the reverb mix or the bass velocity needs adjustment.

**Diagrams needed:**
- Pre-delay visualization: an amplitude envelope diagram showing the direct signal, then a gap (labeled "pre-delay: 100ms"), then the reverb tail beginning — the "float then decay" shape
- Pedal tone in context: a piano roll showing a very long low D note beneath changing harmony blocks in the upper register — the stillness vs movement contrast illustrated
- Silence as weight: a texture layer diagram with explicit empty bars in the melodic layer, labeled "silence = load-bearing"

---

### Chapter 12 — Unhurried Counterpoint: Two Voices That Don't Rush
*Contrary motion at 70 BPM. Voices that breathe against each other.*

**File:** `a12-unhurried-counterpoint.html`

**Topics:**
56. What makes counterpoint feel hurried vs unhurried — Bach's fast counterpoint uses constant 8th/16th note motion to create momentum. Autumnal counterpoint moves in half notes and whole notes with occasional quarter-note passing moves. The voices don't chase each other — they coexist in the same room, breathing at different rates.
57. Contrary motion as breathing — if the melody steps up, the bass or inner voice steps down. This creates balanced, unhurried motion: no one is leading, both are moving within a shared space. The listener doesn't track either voice anxiously; they hear the space between them.
58. Suspensions — a suspension (holding a tone as the chord changes beneath it, then resolving) creates gentle dissonance that resolves without drama. The 9–8 suspension (holding E over Dm, then resolving to D) is particularly autumnal: yearning, but not urgent. The resolution feels like exhaling.
59. Voice crossing — a lower voice rising above an upper voice momentarily creates textural interest and gentle ambiguity. In autumnal context it's a brief moment where the voices seem to change places and then separate again — noticed but not alarming.
60. The resting voice — in slow counterpoint, voices don't move constantly. One voice can hold for 4 bars while another moves slowly. They trade motion. When a voice is still, the ear focuses on the other; when both move, the ear hears the space between. This alternation is the autumnal polyphonic texture.

**Cross-reference:** Two-voice framework fundamentals, see `ch03-two-voices.html`. Contrary motion and voice leading detail, see `ch01-single-line.html`. Non-chord tones including suspensions, see `ch04-non-chord-tones.html`.

**Build It:** Add a countermelody line to your piece. Keep it very sparse: 4–6 notes per 8 bars. Start the countermelody when the main melody is silent (from Ch 8, you have two notes; let the countermelody enter in the silence between them). Use contrary motion: if the melody descended D5 → A4, the countermelody should ascend from A3 → D4 or similar. Allow 2-bar rests between countermelody phrases. It should feel like a second presence breathing in the same room.

**Diagrams needed:**
- Slow contrary motion: two-voice diagram (blue = melody, red = countermelody) showing contrary motion with half-note values, with rests visible
- 9–8 suspension detail: a small diagram showing E held over a Dm chord then resolving to D, with the dissonance interval labeled and the resolution arrow
- Resting voices timeline: a texture diagram showing how melody and countermelody alternate their active periods, with deliberate silences in both

---

### Chapter 13 — Falling Lines: The Melodic Shape of Autumn
*Autumn is a downward season. Lines that fall feel right.*

**File:** `a13-falling-lines.html`

**Topics:**
61. The downward bias — autumnal melodies tend to descend more than they ascend. Phrases *end* by descending, and the overall trajectory across a section gradually settles lower. Compare: spring music (upward lines, leading tones, climaxes); autumn music (stepwise descent, settling, arriving below the starting point).
62. Stepwise descent — the most autumnal shape. D4–C4–Bb3–A3: four steps down from the tonic over a minor third. At 70 BPM in half notes, this descent spans 4 bars. It feels like exhaling slowly. This is the melodic shape of Bill Evans's right-hand phrases in *Peace Piece*.
63. The falling minor 3rd — dropping a minor third (D4 to B3, or A4 to F4) is a melodic sigh. Small interval, large emotional payload. It appears at phrase ends in Brahms, Sibelius, and throughout folk music endings. When in doubt about how to end an autumnal phrase, fall a minor third.
64. The one upward leap — rare, but powerful. An upward leap of a 4th or 5th creates a single moment of yearning before the line falls back stepwise. The classic autumnal melodic shape: stepwise descent → upward leap → stepwise descent again. Reach, then surrender.
65. Phrases that don't begin on beat 1 — starting on beat 2, beat 3, or an upbeat creates a sense that the melody was already happening before you noticed it. Autumnal melodies feel discovered rather than announced.

**Cross-reference:** Stepwise motion and avoiding leaps, `ch01-single-line.html`. Phrase contour and the sentence, `ch07-the-sentence.html`.

**Build It:** Write the main melody for your piece — 8 bars, mostly stepwise, ending lower than it begins. Start on A4 (the 5th). Descend: A4 → G4 → A4 → G4 → F4 → E4 → F4 → D4. That's the shape. Space the notes: roughly one per bar (8 notes, 8 bars), applying the behind-the-beat timing from Ch 8. Let silence occupy the space between notes. Place this melody starting on beat 2.5 of bar 1. Save.

**Diagrams needed:**
- Falling line arc: connected dots showing A4–G4–A4–G4–F4–E4–F4–D4 as a phrase arc, the overall downward trajectory visible despite the small return in bars 3–4
- The reach-and-surrender shape: a diagram showing the archetypal autumnal melodic contour — stepwise descent, upward leap, stepwise descent — with "reach" and "surrender" labeled
- Phrase entry timing: a piano roll showing the melody beginning on beat 2.5 rather than beat 1, with the offset from the grid visible

---

### Chapter 14 — Inconclusive Endings: Phrases That Don't Land on the Root
*Not every phrase needs to resolve. Some just stop.*

**File:** `a14-inconclusive-endings.html`

**Topics:**
66. Why conclusive endings fight the autumnal feeling — a phrase ending on D4 in root position feels closed and slightly final. Autumnal music rarely wants to feel finished; it wants to feel suspended — held, not released.
67. Ending on the 3rd — a phrase arriving on F4 (the minor 3rd above D) feels inside the chord but unfinished. The 3rd has a "mid-thought" quality: the phrase has said something but hasn't concluded. F is warm and familiar but not a landing place.
68. Ending on the 5th — arriving on A4 feels hovering and open. The 5th is stable enough to feel intentional, unresolved enough to feel like a question. A phrase ending on A seems to say "and?" without any urgency.
69. Ending on a non-chord tone — a phrase that ends on E4 (the 9th above D) floats. It's not dissonant enough to demand resolution, not stable enough to feel final. It simply exists, suspended.
70. Silence as the true ending — let the phrase end on F or A, then hold silence for 2–4 bars. The silence *is* the ending: the phrase says something; the silence considers it. This is how Evans, Sibelius, and Grouper handle endings. The phrase does not conclude — it stops, and time continues around it.

**Cross-reference:** Half cadence and interrupted cadence treatment, `ch05-cadences.html`. Open form and non-closure in minimalist music, `m15-open-form.html`.

**Build It:** Adjust the melody from Ch 13. It ended on D4. Change the final note to F4 (the 3rd). Then add a 3-bar explicit silence after the phrase ends — no melody, no countermelody. Only the harmonic bed and the reverb tail. Then let the second phrase begin. Note how the F4 ending with 3 bars of silence creates a completely different quality from a D4 landing. The piece now breathes. This is your complete melodic structure. Save as the final version.

**Diagrams needed:**
- Phrase ending comparison: three versions of the same phrase ending — on D (closed), on F (mid-thought), on A (hovering) — with emotional labels
- Silence as ending: a timeline diagram showing phrase → 3 bars of explicit rest → next event, labeled "silence = the ending"
- The complete phrase arc: a full diagram showing your piece's melody over the 64-bar harmonic bed, with the phrase contour, the countermelody, the silence structure, and the pedal tone all visible in a single texture map

---

## Case Study Chapters (15–17)

*These chapters require source material and are not yet written. See note below.*

---

### Chapter 15 — Case Study: Bill Evans — *Peace Piece* (1958)
*The autumnal pedal tone piece. One chord. Six minutes. Nothing is wasted.*

**File:** `a15-bill-evans-peace-piece.html`

**Topics:**
71. Overview — *Peace Piece* is a solo piano improvisation over a sustained C major pedal for ~7 minutes. The right hand develops a wandering modal improvisation; the left hand holds the same notes throughout. The purest realization of the autumnal principle: stasis + warmth + gentle motion.
72. The pedal tone as the whole piece — Evans holds C–E–G (or C–G) in the left hand continuously. The right hand explores C Ionian drifting toward Lydian, with phrases that end inconclusively and long silences between events.
73. How Evans maintains interest without harmonic change — purely through phrase shape, density, rhythm, and register. Long tones give way to brief runs; runs settle into suspended long notes. The micro-variation principle is at work even in this harmonically static context.
74. The falling phrase pattern — Evans's right-hand phrases descend from a high point, settle, then begin again from a new (often slightly lower) high point. This creates a series of wave-like arcs rather than a narrative arc.
75. Apply to your piece — using the *Peace Piece* technique: add a free, sparse improvisation layer above your D pedal from Ch 11. Just a few notes per phrase, falling, settling, going nowhere. Let it emerge and recede.

**Source material needed:** A lead sheet or chord transcription. (Recording is widely available; the material is harmonically simple — essentially C major with modal inflections. A transcription or detailed analysis of the first 2 minutes would suffice for the chapter.)

---

### Chapter 16 — Case Study: Debussy — *Feuilles mortes* (Préludes Book II, 1913)
*Whole-tone color, suspended harmony, and literally "dead leaves."*

**File:** `a16-debussy-feuilles-mortes.html`

**Topics:**
76. Overview — *Feuilles mortes* ("Dead Leaves") is among Debussy's most autumnal pieces. Whole-tone scales for color, suspended chords that refuse to resolve, a melodic line that drifts rather than develops. Public domain — sheet music on IMSLP.
77. Whole-tone color — the whole-tone scale (C–D–E–F#–G#–A#) has no leading tones, no perfect 4ths or 5ths. Every interval is equidistant. This creates floating ambiguity: no note feels like home. One whole-tone gesture can introduce this shimmer without committing fully to the mode.
78. Debussy's suspended chords — dominant 9ths and 13ths used not as functional harmony but as color. They don't resolve; they exist.
79. The drifting melody — *Feuilles mortes*'s main melody wanders rather than develops. Phrases end unexpectedly, rests are long. It feels improvised even though it isn't.
80. Apply to your piece — one whole-tone passing note or brief whole-tone run, once, near the Lydian episode. A single moment of whole-tone shimmer alongside the #11 quality.

**Source material needed:** Sheet music from IMSLP (public domain). Specifically bars 1–20 would be enough for analysis.

---

## Note on Case Study Chapters

**Both chapters require source material:**
- *Peace Piece*: Recording available (Riverside Records, 1958). The harmony is simple (essentially one chord throughout); what's useful for analysis is a transcription or description of Evans's right-hand phrase shapes for the first 2–3 minutes.
- *Feuilles mortes*: Public domain. Sheet music on IMSLP. The first 20 bars cover the core techniques.

**The user has offered to source sheet music and/or chords.** Do not write Chapters 15 and 16 until that material is provided.

---

## Appendix: Autumnal Chord Reference

| Chord | Function in D | Autumnal character |
|---|---|---|
| Dm(add9) | i add9 | Soft tonic; home without closure |
| Dm(maj7) | i maj7 | Bittersweet; minor + major 7th tension |
| Dm7 | i7 | Neutral dark rest |
| Gm7 | iv7 | Deep subdominant pull, yearning |
| G major | IV — Dorian marker | Shaft of light in minor context |
| Cmaj7 | ♭VII maj7 | Warm horizontal drift |
| Bbmaj7 | ♭VI maj7 | Most autumnal chord: warm + sad |
| Fmaj7 | ♭III maj7 | Relative major warmth |
| Fmaj7(#11) | ♭III Lydian | Late-afternoon light shimmer |
| Em7 | ii7 — Dorian | Gentle yearning |
| Am7 | v7 | Soft non-dominant; no leading tone |
| Am | v | Slightly more directed; use at arrivals |

---

## Appendix: The Autumnal Checklist

Before finishing a piece, check each dimension:

- **Mode:** Is the mode Aeolian, Dorian, or hovering between? No Phrygian, no harmonic minor drama?
- **Harmony:** Are the chords extended (add9, maj7) where appropriate? Are cadences subdominant (♭VII–I, IV–I, ♭VI–I)?
- **Harmonic rhythm:** Is the harmonic rhythm slow enough? Minimum 2 bars per chord at 70 BPM. Ideally 4+.
- **Timbre:** Are the sounds warm? Have highs been rolled off? Is there slight imperfection (tape, saturation, slight detuning)?
- **Space:** Is there silence? Is the reverb pre-delay set? Is there a pedal tone?
- **Melody:** Does the melody fall more than it rises? Do phrases end on the 3rd or 5th rather than the root?
- **Time:** Are any notes slightly behind the beat? Do phrases breathe?
- **Feeling:** Does it feel like something beautiful that's ending without urgency?
