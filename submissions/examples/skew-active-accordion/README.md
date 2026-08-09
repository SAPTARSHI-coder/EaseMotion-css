# Skew-Active Accordion — Gaming Hub Layout

A pure CSS/HTML accordion for gaming hub / category-showcase layouts. The
**active panel skews slightly** on an angled axis and picks up a glowing
accent border, giving it a dynamic, esports-dashboard feel — with zero
JavaScript.

## Features

- **Pure CSS/HTML** — driven entirely by the `:checked` radio-button hack, no JS.
- **Skew-on-active effect** — the open panel tilts via `transform: skewX()`
  while its inner content counter-skews back to level, so text always stays readable.
- **Smooth grid-based collapse** — uses `grid-template-rows: 0fr → 1fr` for a
  fluid, height-auto-friendly expand/collapse transition.
- **Per-panel accent colors** — each panel defines its own `--accent` custom
  property for border glow, tag colors, and icon highlight.
- **Neon glow + soft blur backdrop** on the active panel for a game-hub aesthetic.
- **Fully responsive** — skew angle reduces on tablet and disables on very
  small screens to keep text legible.
- **Accessible** — respects `prefers-reduced-motion`, uses semantic
  `label`/`input[type=radio]` pairing (fully keyboard and screen-reader operable).

## File Structure

```
submissions/examples/skew-active-accordion/
├── demo.html
├── style.css
└── README.md
```

## How It Works

Each accordion item is a `radio input` + sibling `div.ease-accordion__panel`,
grouped under the same `name` so only one panel is open at a time:

```html
<input type="radio" name="ease-accordion" id="ease-panel-1" class="ease-accordion__input" checked>
<div class="ease-accordion__panel" style="--accent:#00f0ff;">
  <label for="ease-panel-1" class="ease-accordion__header">...</label>
  <div class="ease-accordion__content">
    <div class="ease-accordion__content-inner">...</div>
  </div>
</div>
```

The header `<label>` toggles its paired radio input. CSS then targets the
checked state with the adjacent-sibling combinator:

```css
.ease-accordion__input:checked + .ease-accordion__panel {
  transform: skewX(var(--ease-skew));
}
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-bg` | `#0a0d14` | Page background color |
| `--ease-surface` | `#12161f` | Panel base surface color |
| `--ease-surface-alt` | `#171c27` | Panel gradient end color |
| `--ease-text` | `#e8ecf4` | Primary text color |
| `--ease-text-dim` | `#8891a3` | Secondary/muted text color |
| `--ease-radius` | `14px` | Panel corner radius |
| `--ease-skew` | `-6deg` | Skew angle applied to the active panel |
| `--ease-duration` | `420ms` | Transition duration for all animated properties |
| `--ease-curve` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing curve used across transitions |
| `--accent` | *(set per panel)* | Accent color for border glow, index number, tags, and icon |

Override any of these at `:root` or per-panel (inline `style="--accent:#ff2e92;"`)
to re-theme the component without touching the CSS file.

## Usage

1. Copy `style.css` into your project and link it in your `<head>`.
2. Copy the `.ease-accordion` markup block from `demo.html`, duplicating the
   `input` + `.ease-accordion__panel` pair for each category.
3. Give each panel a unique `id`/`for` pair and its own `--accent` color.
4. Mark exactly one `input` with `checked` to set the default open panel.

## Accessibility Notes

- All toggling is done via native `<input type="radio">` + `<label>`, so it's
  fully keyboard-navigable (Tab + Arrow keys) and screen-reader friendly out
  of the box.
- Users with `prefers-reduced-motion: reduce` get instant state changes —
  all skew, grid, and fade transitions are disabled.

## Browser Support

Relies on `grid-template-rows` animation and `color-mix()`, both supported in
current versions of Chrome, Edge, Firefox, and Safari (16.4+). For older
browsers, `color-mix()` calls gracefully fall back to solid accent colors if
you replace them with plain hex values.