# Ease Rotate-Fade Progress Bar — Fintech Dashboard

## Description
A circular progress ring widget styled for fintech dashboard use cases — credit score, savings goals, and budget tracking. On load, the ring rotates + scales in while fading into view, the fill sweeps to its target value via `stroke-dashoffset`, and the center label, title, description, and a color-coded status badge fade in staggered afterward.

## Features
- Ring container enters with a combined `rotate` + `scale` + `opacity` animation
- Progress fill sweeps in via `stroke-dashoffset`, using a gradient stroke
- Staggered fade-in sequence: label → title → description → status badge
- Status badge color reflects metric health (`good` green / `warning` amber)
- Fully responsive (ring shrinks on narrow viewports)
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-fintech-progress">
  <div class="ring-wrap" style="--circumference: 345; --fill-offset: 51.75;">
    <svg viewBox="0 0 130 130">
      <defs>
        <linearGradient id="fintech-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0d9488" />
          <stop offset="100%" stop-color="#0891b2" />
        </linearGradient>
      </defs>
      <circle class="ring-track" cx="65" cy="65" r="55"></circle>
      <circle class="ring-fill" cx="65" cy="65" r="55"></circle>
    </svg>
    <div class="ring-label">
      <span class="ring-value">785</span>
      <span class="ring-sublabel">Credit Score</span>
    </div>
  </div>
  <h3 class="widget-title">Excellent Standing</h3>
  <p class="widget-desc">Top 15% of users</p>
  <span class="status-badge good">↑ +12 this month</span>
</div>
```

### Calculating `--fill-offset`
For radius `r=55`, circumference = `2 × π × 55 ≈ 345`.
`--fill-offset = circumference × (1 - percent / 100)`

| Percent | fill-offset |
|---|---|
| 25% | 258.75 |
| 50% | 172.5 |
| 75% | 86.25 |
| 100% | 0 |

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--ring-size` | `130px` | Ring diameter |
| `--ring-stroke` | `10px` | Ring thickness |
| `--rotate-duration` | `1.3s` | Ring entrance animation duration |
| `--fade-duration` | `0.7s` | Label/title fade-in duration |
| `--ring-color` / `--ring-color-2` | `#0d9488` / `#0891b2` | Gradient endpoints for the fill (teal → cyan) |
| `--ring-track` | `#e2e8f0` | Empty track color |

## Accessibility
Respects `prefers-reduced-motion` by skipping directly to the final rotated/filled/faded-in state with no animation.

## Files
- `demo.html` — live working example with 3 fintech widgets (credit score, savings goal, budget usage)
- `style.css` — component styles and all animations
- `README.md` — this file