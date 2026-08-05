# CSS Fade-Out Tooltip — Minimalist Tech Layouts

A pure CSS animated tooltip with smooth fade-out interaction, designed for minimalist tech interfaces.

## What does this do?

A reusable tooltip that fades in with a subtle directional slide when hovering or focusing the trigger. Clean, minimal aesthetic suited for developer tools, dashboards, and tech products.

## How is it used?

```html
<span class="fot fot--top">
  <a href="#" class="fot__trigger" aria-describedby="tip-1">Hover me</a>
  <span class="fot__tip" role="tooltip" id="tip-1">Tooltip content</span>
</span>
```

Position classes: `fot--top`, `fot--bottom`, `fot--left`, `fot--right`.

## Why is it useful?

Tech interfaces need unobtrusive, fast tooltips that don't distract from content. This fade-out tooltip provides a clean reveal with configurable timing and offset, zero JavaScript.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--fot-duration` | `0.25s` | Animation duration |
| `--fot-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Timing function |
| `--fot-fade-delay` | `0.08s` | Appear delay |
| `--fot-y-offset` | `6px` | Slide distance |
| `--fot-bg` | `#1a1a2e` | Background |
| `--fot-accent` | `#38bdf8` | Accent color |
| `--fot-radius` | `8px` | Border radius |
| `--fot-max-width` | `240px` | Max width |

## Features

- **Pure CSS** — hover and focus-within driven, no JS
- **Fade + slide** — opacity 0→1 with directional offset
- **4 positions** — top, bottom, left, right with arrows
- **Keyboard accessible** — focus-visible ring, `role="tooltip"`, `aria-describedby`
- **Responsive** — adapts to mobile
- **Reduced motion** — respects `prefers-reduced-motion`
- **Uses EaseMotion CSS** — variables for fonts, z-index, spacing

## Files

- `demo.html` — minimalist tech demo with 3 cards
- `style.css` — tooltip component + demo styles
- `README.md` — this file
