# CSS Zoom-Out Tooltip — Creative Portfolio Layouts

A pure CSS animated tooltip with smooth zoom-out interaction, designed for creative portfolio interfaces.

## What does this do?

A reusable tooltip component that appears with a zoom-out scale transition when hovering or focusing the trigger element. The trigger itself zooms out slightly for a "push" feedback effect. Styled for dark creative portfolio themes.

## How is it used?

```html
<span class="zot zot--top">
  <a href="#" class="zot__trigger" aria-describedby="tip-1">Hover me</a>
  <span class="zot__tip" role="tooltip" id="tip-1">Tooltip content</span>
</span>
```

Position classes: `zot--top` (default), `zot--bottom`, `zot--left`, `zot--right`.

## Why is it useful?

Creative portfolios need polished, low-overhead interaction patterns. This tooltip provides a modern zoom-out animation with zero JavaScript, fully configurable via CSS custom properties for timing, easing, and scale factors.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--zot-duration` | `0.35s` | Animation duration |
| `--zot-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Timing function |
| `--zot-scale-from` | `0.4` | Starting scale |
| `--zot-scale-to` | `1` | Ending scale |
| `--zot-trigger-scale` | `0.92` | Trigger zoom-out factor |
| `--zot-bg` | `#1a1a2e` | Tooltip background |
| `--zot-text` | `#e0e0e0` | Tooltip text color |
| `--zot-accent` | `#6c63ff` | Focus ring color |
| `--zot-radius` | `10px` | Border radius |
| `--zot-max-width` | `260px` | Max tooltip width |

## Features

- **Pure CSS** — no JavaScript; hover and focus-within driven
- **Zoom-out animation** — tooltip scales from small to full; trigger scales down for feedback
- **4 positions** — top, bottom, left, right with directional arrows
- **Keyboard accessible** — focus-visible ring, `role="tooltip"`, `aria-describedby`
- **Responsive** — adapts to mobile viewports
- **Reduced motion** — respects `prefers-reduced-motion`
- **Uses EaseMotion CSS** — variables for fonts, z-index, and spacing

## Files

- `demo.html` — self-contained creative portfolio demo
- `style.css` — tooltip component + demo page styles
- `README.md` — this file
