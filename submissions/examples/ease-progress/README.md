# ease-stacked-progress — Multi-Segment Progress Bar

A **different** kind of progress bar from the single-value `ease-progress`
already in the framework: this one shows **multiple values in one bar**,
for cases like storage usage broken down by category, budget allocation,
or survey response splits.

## Why this is distinct (not a duplicate)

`ease-progress` (already merged) represents **one** value out of 100%.
`ease-stacked-progress` represents **several** values that together make up
a whole — different markup (`segment` children instead of a single `fill`),
different visual (multiple colored blocks side by side), and a different
use case. They're meant to coexist as separate components.

## What it does

- Pure CSS — each segment's width is set inline (or via JS) and animates
  smoothly using `--ease-speed-medium`
- Segments auto-color in sequence via `nth-child` (primary → success →
  warning → danger → info), or set explicitly with `.ease-segment-1`
  through `.ease-segment-5`
- **Hover-to-highlight** — hovering the bar dims all segments except the
  one under the cursor, making it easy to pick out one category in a
  multi-part breakdown
- Thin dividers between segments so each stays visually distinct even
  when colors are close
- Optional `.ease-stacked-progress-legend` — a small color-key row
  matching each segment to a label
- `ease-stacked-progress-sm` / `-lg` size modifiers
- Respects `prefers-reduced-motion`

## Usage

```html
<div class="ease-stacked-progress">
  <div class="ease-stacked-progress-segment" style="width: 35%;"></div>
  <div class="ease-stacked-progress-segment" style="width: 20%;"></div>
  <div class="ease-stacked-progress-segment" style="width: 15%;"></div>
</div>
```

With a legend:

```html
<div class="ease-stacked-progress">
  <div class="ease-stacked-progress-segment" style="width: 35%;"></div>
  <div class="ease-stacked-progress-segment" style="width: 20%;"></div>
</div>
<div class="ease-stacked-progress-legend">
  <span class="ease-stacked-progress-legend-item">
    <span class="ease-stacked-progress-legend-swatch ease-segment-1"></span> Photos (35%)
  </span>
  <span class="ease-stacked-progress-legend-item">
    <span class="ease-stacked-progress-legend-swatch ease-segment-2"></span> Videos (20%)
  </span>
</div>
```

Sizes:

```html
<div class="ease-stacked-progress ease-stacked-progress-sm">...</div>
<div class="ease-stacked-progress ease-stacked-progress-lg">...</div>
```

## Files

- `demo.html` — standalone live demo: storage breakdown, survey split,
  and a compact small-size example
- `style.css` — self-contained component styles, falls back to sensible
  defaults if a design token isn't present

## Accessibility notes

- Intended usage pairs the outer `.ease-stacked-progress` with
  `role="img"` and an `aria-label` summarizing the breakdown in text
  (e.g. `aria-label="Storage: 35% photos, 20% videos, 15% docs"`), since
  a purely visual multi-segment bar isn't self-describing to screen
  readers the way a single progress value is
- Hover-highlight is a supplementary visual affordance only — the legend
  provides the same information without requiring hover

## Naming


Raw class names kept simple per the contribution guide — happy for the
maintainer to remap to final naming during standardization.