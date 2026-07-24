# Ease Rotate-Fade Progress Bar

## Description
A circular progress ring widget for dashboards, where the ring rotates and scales in while fading into view, followed by the fill sweeping to its target percentage and the label fading in. Combines a rotate-in entrance with a staggered fade sequence, rather than a plain fill animation.

## Features
- Ring container enters with a combined `rotate` + `scale` + `opacity` animation
- Progress fill sweeps in via `stroke-dashoffset`, using a gradient stroke (`linearGradient`)
- Center label (percentage + sublabel) and widget title/description fade in staggered, after the ring settles
- Fully responsive (ring shrinks on narrow viewports)
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-progress-widget">
  <div class="ring-wrap" style="--circumference: 377; --fill-offset: 60.3;">
    <svg viewBox="0 0 140 140">
      <defs>
        <linearGradient id="ease-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#a78bfa" />
        </linearGradient>
      </defs>
      <circle class="ring-track" cx="70" cy="70" r="60"></circle>
      <circle class="ring-fill" cx="70" cy="70" r="60"></circle>
    </svg>
    <div class="ring-label">
      <span class="ring-percent">84%</span>
      <span class="ring-sublabel">Complete</span>
    </div>
  </div>
  <h3 class="widget-title">Storage Used</h3>
  <p class="widget-desc">42.1 GB of 50 GB</p>
</div>
```

### Calculating `--fill-offset`
For a circle with radius `r=60`, circumference = `2 × π × 60 ≈ 377` (already set as `--circumference`).
`--fill-offset = circumference × (1 - percent / 100)`

Example: for 84% → `377 × (1 - 0.84) = 60.3`

| Percent | fill-offset |
|---|---|
| 25% | 282.75 |
| 50% | 188.5 |
| 75% | 94.25 |
| 100% | 0 |

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--ring-size` | `140px` | Ring diameter |
| `--ring-stroke` | `12px` | Ring thickness |
| `--rotate-duration` | `1.4s` | Ring entrance animation duration |
| `--fade-duration` | `0.8s` | Label/title fade-in duration |
| `--ring-color` / `--ring-color-2` | `#38bdf8` / `#a78bfa` | Gradient endpoints for the fill |
| `--ring-track` | `#1e2436` | Empty track color |

## Accessibility
Respects `prefers-reduced-motion` by skipping directly to the final rotated/filled/faded-in state with no animation.

## Files
- `demo.html` — live working example with two widget instances
- `style.css` — component styles and all animations
- `README.md` — this file