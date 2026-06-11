# Form Input States — Reduced Motion Guard

## What does this do?
Proposes extending the `@media (prefers-reduced-motion: reduce)`
guard in `components/forms.css` to also cover the
`.ease-input-success`, `.ease-input-danger`, `.ease-input-warning`,
and `.ease-field-*` state classes. Linked to issue #5576.

## How is it used?
Documentation-only / pattern change. The maintainer extends the
existing reduced-motion block in `components/forms.css` to also
reset transitions and the box-shadow ring on the state classes.

## Why is this useful?
The current reduced-motion guard in `components/forms.css` only
covers the base input/textarea/select and the field label. The
state classes (`.ease-input-success`, `.ease-input-danger`,
`.ease-input-warning`) use `box-shadow` and `border-color`
changes that still apply under reduced motion. Users with motion
sensitivity will still see a ring pulse on focus and a border
color change, which can be a visual trigger.

## Tech Stack
- CSS (no frameworks, no JavaScript)
- Pure accessibility improvement

## Preview
Open `demo.html` in this folder to see a side-by-side comparison
of the warning and success input states with and without the
proposed reduced-motion override.

## Contribution Notes
- 4-line addition to the existing
  `@media (prefers-reduced-motion: reduce)` block in
  `components/forms.css`
- The existing `transition: none !important` for the base
  elements is preserved
- No production behavior change for users without
  `prefers-reduced-motion: reduce`
