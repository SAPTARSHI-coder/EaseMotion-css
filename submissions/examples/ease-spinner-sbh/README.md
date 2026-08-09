# ease-spinner

A multi-style loading spinner utility with three ready-made styles under one consistent class prefix — classic ring, dual-ring, and dot-pulse — built from `border` tricks and a `::before` pseudo-element, avoiding wrapper divs where possible. Pure CSS, no JavaScript.

## What does this do?

Provides three spinners sharing one prefix:

- **`.spinner`** — the classic ring: a single element with a transparent border whose top edge is colored; `@keyframes sp-spin` rotates it 360°.
- **`.spinner.spinner-dual`** — a dual ring: the *same* single element, with colored top + bottom edges and a `::before` pseudo-element carrying colored left + right edges that counter-rotates (`@keyframes sp-spin-rev`), so two rings visibly cross.
- **`.spinner-dots`** — a dot pulse: one wrapper + three `<span>`s; each dot scales and fades via `@keyframes sp-dot`, staggered by a third of the duration.

Each style accepts `--sm` / `--lg` size modifiers and is color-driven entirely by CSS custom properties.

## How is it used?

1. Link the stylesheet.
2. Drop in the markup for the style you want. Add `role="status"` + `aria-label` so screen readers announce "Loading".

```html
<link rel="stylesheet" href="style.css" />

<!-- classic ring -->
<div class="spinner" role="status" aria-label="Loading"></div>

<!-- dual ring (same element, extra class) -->
<div class="spinner spinner-dual" role="status" aria-label="Loading"></div>

<!-- dot pulse -->
<div class="spinner-dots" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- sizes -->
<div class="spinner spinner--sm" role="status" aria-label="Loading"></div>
<div class="spinner spinner--lg" role="status" aria-label="Loading"></div>
```

## Why is this useful?

- **Single prefix, three styles** — `spinner`, `spinner-dual`, `spinner-dots` cover the common loading cases so developers stop hunting CodePen for a decent one.
- **Minimal markup** — the ring and dual-ring are each a single element (the second ring is a `::before`, not a wrapper div); only the dot-pulse needs three child spans.
- **Border/box-shadow tricks** — rings are `border` + `border-radius: 50%` with one/two colored edges; no images, no SVG.
- **Accessible** — each spinner is `role="status"` with an `aria-label`; full `prefers-reduced-motion` support freezes the spinners into a static, legible state instead of endless rotation.
- **Reusable** — configurable via CSS custom properties (`--sp-color`, `--sp-track`, `--sp-size`, `--sp-thick`, `--sp-dur`, `--sp-ease`).

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Shows all three styles at multiple sizes and in a realistic "loading row" context.
- `style.css` — three spinner styles, size modifiers, keyframes, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
