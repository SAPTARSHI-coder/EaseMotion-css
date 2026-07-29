# ease-color-picker-palette-ij

Color picker palette that reveals with a staggered swatch expansion animation.

Resolves: #34718

## Overview

A color swatch picker where the palette panel reveals on interaction and each
swatch pops in with a staggered scale/fade animation (spring-style easing).
Two interaction variants are included — a click-to-open dropdown panel and a
hover-to-expand inline strip — plus a CSS-variable customization example.

## Markup

Click-triggered dropdown:

```html
<div class="ease-color-picker-palette-ij">
  <button class="ecpp-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="panelId">
    <span class="ecpp-trigger__swatch" style="--ecpp-swatch: #7c5cff;"></span>
    <span class="ecpp-trigger__label">Violet</span>
    <svg class="ecpp-trigger__chevron">...</svg>
  </button>

  <div class="ecpp-panel" id="panelId" role="listbox">
    <button class="ecpp-swatch" role="option" data-color="#7c5cff" style="--ecpp-swatch: #7c5cff; --ecpp-i: 0;"></button>
    <button class="ecpp-swatch" role="option" data-color="#22d3ee" style="--ecpp-swatch: #22d3ee; --ecpp-i: 1;"></button>
    <!-- ...more swatches, incrementing --ecpp-i for stagger order -->
  </div>
</div>
```

Toggle `.ecpp-panel`'s `is-open` class via JS to reveal it (see `demo.html`
for the full click/keyboard handling).

## CSS Variables

| Variable             | Default | Description                                   |
|------------------------|---------|-------------------------------------------------|
| `--ecpp-swatch-size`  | `28px`  | Diameter of each color swatch                    |
| `--ecpp-gap`          | `8px`   | Gap between swatches in the panel/strip          |
| `--ecpp-speed`        | `0.35s` | Duration of the expand/scale-in animation         |
| `--ecpp-swatch`       | —       | Set per-swatch inline; the color that swatch represents |
| `--ecpp-i`            | —       | Set per-swatch inline (0, 1, 2…); controls stagger order |

## How the Stagger Works

Each `.ecpp-swatch` starts at `scale(0)` / `opacity: 0` and transitions to
`scale(1)` / `opacity: 1` with a spring-like `cubic-bezier(0.34, 1.56, 0.64, 1)`
easing. The `transition-delay` is computed from `--ecpp-i` (`calc(var(--ecpp-i) * 0.045s)`),
so swatches with a higher index pop in slightly after the ones before them,
producing the staggered reveal.

## Interactive Triggers (Acceptance Criteria)

Two full variants are demonstrated in `demo.html`:

1. **Click** — a trigger button toggles `aria-expanded` and an `is-open`
   class on the panel; swatches stagger-expand in. Selecting a swatch
   updates the trigger's displayed color/label and closes the panel.
   Supports closing via outside-click and `Escape`.
2. **Hover / focus** — an inline anchor swatch expands a horizontal strip of
   mini swatches on `:hover`/`:focus-within`, each staggering in.

A third section shows the panel statically with larger swatches, wider gaps,
and a faster stagger via CSS variable overrides.

## Responsive Design

- The dropdown panel wraps to fewer columns and anchors to the right edge on
  narrow viewports (≤560px) to avoid overflowing the screen.
- The hover strip's max expansion width shrinks and wraps on small screens
  so it doesn't get clipped.

## Accessibility

- The click variant uses `aria-haspopup`, `aria-expanded` on the trigger, and
  `role="listbox"` / `role="option"` / `aria-selected` on the panel and
  swatches.
- Fully keyboard operable: trigger is a real `<button>`, swatches are real
  `<button>`s, `Escape` closes the panel and returns focus to the trigger.
- Visible `:focus-visible` outlines on the trigger and every swatch.
- Respects `prefers-reduced-motion: reduce` by collapsing all transition
  durations/delays to near-zero.

## Files

- `demo.html` — click-triggered dropdown, hover-triggered strip, and a
  CSS-variable customization example.
- `style.css` — component styles, staggered expansion animation, both
  interaction variants, responsive rules, and reduced-motion handling.
- `README.md` — this file.