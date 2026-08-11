# Border Draw Card

**Category:** Component — Interactions  
**Type:** Pure CSS  
**Folder:** `submissions/examples/ease-card-border-draw-ij/`

---

## Overview

The Border Draw Card component animates a colorful border around each card on hover. Using CSS pseudo-elements and `mask-composite` techniques, the border draws in smoothly with a rotating conic gradient, creating an eye-catching visual effect without any JavaScript.

---

## Features

- **Pure CSS animation** — no JavaScript required for the border-draw effect
- **Conic gradient border** — animated rotating gradient creates a dynamic, flowing edge
- **Smooth reveal** — border fades in with a configurable transition duration
- **Customizable tokens** — all visual parameters exposed as CSS custom properties
- **Responsive grid** — three-column layout collapses on mobile
- **Reduced motion support** — respects `prefers-reduced-motion: reduce`

---

## Usage

### HTML Structure

```html
<article class="bd-card">
  <span class="card-icon">🎨</span>
  <h2 class="card-title">Design System</h2>
  <p class="card-desc">Your description here.</p>
</article>
```

Simply add the `.bd-card` class to any element. The border effect is applied via `::before` and `::after` pseudo-elements.

---

## Customization

| CSS Custom Property | Default | Description |
|---|---|---|
| `--card-bd-duration` | `0.5s` | Transition duration for border fade-in |
| `--card-bd-border-color` | `#6c63ff` | Color used for the conic gradient border |
| `--card-bd-bg` | `#ffffff` | Card background color |
| `--card-bd-text-color` | `#1a1a2e` | Card text color |
| `--card-bd-radius` | `16px` | Card border radius |

---

## Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 49+ | Full support |
| Firefox | 52+ | Full support |
| Safari | 10+ | Full support |
| iOS Safari | 10+ | Full support |

---

## License

Submitted under the same license as the EaseMotion CSS repository.
