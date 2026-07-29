# Ease Fitness Tracker Glow Pulse Card

## Description
A pure CSS card with a smooth, continuously pulsing glow animation on hover/focus, styled for a fitness-tracker aesthetic — dark background, electric lime/cyan accents, bold sans-serif metrics. Zero JavaScript.

## Features
- Dual-color radial "blob" glow that pulses via CSS keyframes on hover/focus
- Circular stat ring using `conic-gradient` to suggest progress
- Fully keyboard accessible (`tabindex="0"`, visible `:focus-visible` outline, glow triggers on focus too)
- Fully customizable via CSS custom properties (glow colors, duration, scale, accent color)
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-fitness-card" tabindex="0">
  <div class="card-content">
    <div class="card-stat-ring">
      <div class="card-stat-ring-inner">🔥</div>
    </div>
    <p class="card-metric">842</p>
    <h3 class="card-title">Calories Burned</h3>
    <p class="card-description">72% of your daily goal reached.</p>
    <span class="card-tag">⚡ Live Tracking</span>
  </div>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--glow-duration` | `1.6s` | Pulse animation cycle duration |
| `--glow-easing` | `ease-in-out` | Timing function |
| `--glow-scale` | `1.04` | Card scale on hover/focus |
| `--glow-color` | `rgba(163, 255, 0, 0.4)` | Primary glow color (lime) |
| `--glow-color-soft` | `rgba(0, 240, 255, 0.3)` | Secondary glow color (cyan) |
| `--accent` | `#a3ff00` | Metric/ring accent color |
| `--card-bg` | `#12131a` | Card background |
| `--card-radius` | `18px` | Corner rounding |

Example override for a different metric color:
```html
<div class="ease-fitness-card" style="--glow-color: rgba(0,240,255,0.4); --accent: #00f0ff;">
  ...
</div>
```

## Files
- `demo.html` — live example with two stat-card variants
- `style.css` — component styles
- `README.md` — this file