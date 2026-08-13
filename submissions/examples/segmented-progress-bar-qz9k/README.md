# Segmented Progress Bar

## What does this do?

A step-based progress bar (onboarding flow, multi-part form) made of
discrete segments — one per step — rather than one continuous bar filled
to a percentage, so progress reads as a step count rather than an ambiguous
fraction.

## How is it used?

```html
<div class="spb-bar" role="progressbar" aria-valuemin="0" aria-valuemax="5" aria-valuenow="2">
  <span class="spb-seg spb-seg--done"></span>
  <span class="spb-seg spb-seg--done"></span>
  <span class="spb-seg spb-seg--current"></span>
  <span class="spb-seg"></span>
  <span class="spb-seg"></span>
</div>
```

Each `<span>` is `flex: 1`, so the bar always divides evenly across
however many segments are present — a 3-step flow and an 8-step flow both
render correctly from the same CSS, with the step count coming from how
many `.spb-seg` elements exist in markup.

## Why is it useful?

A single continuous bar filled to a percentage (`width: 40%`) communicates
*how much* progress has been made but not *how many discrete steps*
remain — 40% could mean "2 of 5 steps" or "4 of 10 steps," and users
scanning a progress bar for "how much further do I have to go" often care
about the step count specifically, not the fraction. Rendering one segment
per actual step makes the step count itself the visual information: a
5-segment bar with 2 filled unambiguously reads as "2 done, 3 to go,"
which a percentage-filled bar can't convey without an accompanying text
label doing the real communication anyway.

The current step gets its own partial-fill treatment
(`.spb-seg--current::before` at a fixed 55% width) distinct from both
"done" (fully filled) and "not yet reached" (empty), giving a three-state
visual — complete, in-progress, upcoming — that a binary filled/unfilled
segment can't represent on its own. `role="progressbar"` with
`aria-valuemax` set to the actual step count (not 100) keeps the
accessible value semantically aligned with what's visually shown: "2 of 5,"
not "40 of 100."
