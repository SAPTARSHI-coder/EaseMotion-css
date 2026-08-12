# CSS Radial Progress Indicator

Multiple concentric radial rings that each visualize a different metric
(e.g. CPU, memory, disk usage), built with pure CSS `conic-gradient`s —
no JavaScript, no SVG, no canvas.

## Files

- `demo.html` — standalone demo page
- `style.css` — all styles (prefixed with `ease-`)

## How it works

- Each ring is a plain `<div>` layered in the same CSS Grid cell
  (`grid-area: 1 / 1`) so the rings sit concentrically.
- A ring's fill amount is driven by a CSS custom property,
  `--ease-value` (0–100), set inline per ring:
```html
  <div class="ease-radial-ring" style="--ease-value: 72; --ease-color: #6366f1;"></div>
```
- `conic-gradient(var(--ease-color) calc(var(--ease-value) * 1%), var(--ease-track) 0)`
  paints the filled arc, and a `radial-gradient` punches a transparent
  hole in the middle so only a ring (not a full pie) is visible.
- Successive rings are sized smaller via `nth-child` + `calc()` so they
  nest inside one another with a consistent gap.
- On load, an `@keyframes` animation eases `--ease-value` up from `0`
  to its target so the ring "fills in."

## Interactivity (no JavaScript)

A checkbox-hack pattern lets users highlight one ring at a time via
real `<input type="checkbox">` + `<label for="">` pairs, styled with
`~` general-sibling selectors. Fully keyboard operable (Tab + Space),
with a visible `:focus-visible` outline.

## Accessibility

- Each ring and the overall ring group expose `role="img"` with a
  descriptive `aria-label`, since the visual has no text content for
  assistive tech to read.
- Toggle controls are real `<input>` / `<label>` pairs — no `tabindex`
  hacks or synthetic click handlers.
- All motion (fill-in animation and hover/checked transitions) is
  disabled under `@media (prefers-reduced-motion: reduce)`.

## Responsive behavior

Ring size, stroke thickness, and gap are CSS custom properties on
`.ease-radial-group`, scaled down in a `max-width: 480px` media query.

## Customization

| Property | Purpose |
|---|---|
| `--ease-ring-size` | Overall diameter of the ring group |
| `--ease-ring-thickness` | Stroke width of each ring |
| `--ease-ring-gap` | Spacing between concentric rings |
| `--ease-value` | Fill percentage (0–100) for a ring |
| `--ease-color` | Fill color for a ring |
| `--ease-track` | Background track color for a ring |

Add or remove rings by adding/removing `.ease-radial-ring` elements and
a matching `nth-child` sizing rule in `style.css`.