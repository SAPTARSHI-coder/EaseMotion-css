# Spotlight Tooltip

An accessible tooltip component with smart positioning, viewport collision
detection, and a cursor-tracking spotlight glow. Built with semantic HTML,
CSS custom properties, and vanilla JavaScript — no dependencies.

## Features

- 🎯 **Smart positioning** — each trigger declares a preferred side
  (`top` / `bottom` / `left` / `right`); the tooltip opens there by default.
- 📍 **Viewport collision detection** — if the preferred side doesn't have
  room, the tooltip flips to the opposite side, then clamps on the
  cross-axis as a last resort so it never spills off screen. The arrow
  stays pointed at the trigger even when the body is clamped.
- ✨ **Cursor spotlight** — a soft, two-tone radial glow tracks the pointer
  while it's over the trigger, projected onto the tooltip's own bounds via
  CSS custom properties (`--spx`, `--spy`).
- 🎨 **Entrance animation** — a short scale + fade (`ease-kf-zoom-in`),
  anchored to an origin near the trigger so the tooltip reads as growing
  out of it.
- 🔺 **Matching arrow** — a rotated square sharing the tooltip's fill and
  border, positioned per side.
- ♿ **Keyboard accessible** — every trigger opens its tooltip on `focus`
  and closes it on `blur` or <kbd>Esc</kbd>, independent of pointer events.
  Keyboard-opened tooltips use a steady focus ring instead of the moving
  spotlight, since there's no cursor position to track.
- 📱 **Responsive** — the demo layout collapses to a single column on
  narrow viewports; the tooltip's own max-width shrinks with it.
- 🌙 **`prefers-reduced-motion`** — the entrance animation and hover
  transitions are skipped in favor of instant state changes.

## Files

```
ease-spotlight-tooltip/
├── demo.html   # Example page wiring up several triggers
├── style.css   # Design tokens, layout, tooltip component, motion
├── script.js   # SpotlightTooltip: positioning, collision, spotlight
└── README.md
```

## Usage

Add `data-tooltip` (the message) and, optionally, `data-tooltip-position`
(one of `top` / `bottom` / `left` / `right`, defaults to `bottom`) to any
element:

```html
<button type="button" data-tooltip="Saves your changes" data-tooltip-position="top">
  Save
</button>
```

Include the stylesheet and script, and the component wires itself up on
`DOMContentLoaded`:

```html
<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>
```

No further setup is required — a single shared tooltip element is created
once and reused for every trigger on the page.

### Styling

Everything is driven by CSS custom properties defined in `:root`, grouped
by color, type, spacing, tooltip geometry, and motion. The most likely
values to override when dropping this into another project:

| Property | Purpose |
| --- | --- |
| `--tooltip-bg` / `--tooltip-text` | Tooltip surface and text color |
| `--color-accent` / `--color-accent-2` | The spotlight's two gradient tones |
| `--tooltip-gap` | Distance kept between trigger and tooltip |
| `--tooltip-max-width` | Wrapping width of the tooltip body |
| `--duration-standard` / `--ease-standard` | Shared transition timing |

### How collision detection works

On open, `script.js` measures the trigger and the (invisible but laid-out)
tooltip with `getBoundingClientRect()`, then checks whether the preferred
side has enough room before the viewport edge. If not, it tries the
opposite side. If neither side fits, the tooltip renders on the preferred
side and is clamped on the cross-axis instead — the arrow offset is
recalculated so it still points at the trigger's center rather than at the
clamped tooltip's center.

Position is re-measured on `scroll` and `resize` while a tooltip is open.

## Browser support

Uses `:focus-visible`, `color-mix()`, and CSS custom properties — current
versions of Chrome, Firefox, Safari, and Edge.