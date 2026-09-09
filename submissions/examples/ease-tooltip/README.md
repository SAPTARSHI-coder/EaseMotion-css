# ease-tooltip — CSS-only Animated Tooltip

Targets the roadmap item **"Modal & tooltip components" — Planned v1.2**.
A pure CSS tooltip with a fade + slide entrance, built entirely with existing
design tokens — no JavaScript, no new dependencies.

## Why

Tooltips are one of the most common UI needs and a natural fit for
EaseMotion's animation-first philosophy — the reveal itself is the whole
point of the component.

## What it does

- Pure CSS — shows on `:hover` and `:focus-within`, so it works with mouse
  **and** keyboard navigation (Tab) without any JS
- Fade + slide-in entrance using existing speed tokens
  (`--ease-speed-fast`)
- 4 placement modifiers: top (default), bottom, left, right
- 2 color variants: `ease-tooltip-primary`, `ease-tooltip-success`
  (reuses `--ease-color-primary` / `--ease-color-success`)
- Small triangle arrow pointing at the trigger element, auto-flips per
  placement
- No layout shift — the bubble is `position: absolute` and doesn't affect
  surrounding content

## Usage

```html
<span class="ease-tooltip">
  <button class="ease-btn ease-btn-outline">Hover me</button>
  <span class="ease-tooltip-bubble">Helpful text here</span>
</span>
```

Placement:

```html
<span class="ease-tooltip ease-tooltip-bottom">...</span>
<span class="ease-tooltip ease-tooltip-left">...</span>
<span class="ease-tooltip ease-tooltip-right">...</span>
```

Color variant:

```html
<span class="ease-tooltip ease-tooltip-primary">...</span>
<span class="ease-tooltip ease-tooltip-success">...</span>
```

## Files

- `demo.html` — live standalone demo covering all 4 placements, both color
  variants, and a keyboard-focus example
- `style.css` — self-contained component styles, falls back to sensible
  defaults if a design token isn't present

## Accessibility notes

- Triggers on `:focus-within`, not just `:hover`, so keyboard users see the
  tooltip when tabbing to the trigger element
- `visibility` is toggled alongside `opacity` so the bubble isn't in the tab
  order or screen-reader flow while hidden
- No `pointer-events` trap — the bubble itself is non-interactive by design
  (`pointer-events: none`), consistent with standard tooltip behavior

## Naming

Raw class names (`tooltip`, `tooltip-bubble`) kept simple per the
contribution guide — happy for the maintainer to remap to final `ease-*`
naming during standardization.