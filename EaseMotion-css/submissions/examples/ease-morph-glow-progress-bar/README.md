# Ease Morph-Glow Progress Bar

## Description
A skill/progress bar for portfolio sites where the fill continuously morphs its leading edge into an organic, liquid-like shape while glowing and emitting a shimmer sweep. Pure CSS, zero JavaScript.

## Features
- Fill animates in from 0 to target width via `transform: scaleX()`
- Continuous subtle `border-radius` morph gives the fill edge an organic, non-rigid feel
- Pulsing glow (`box-shadow`) around the fill
- Shimmer highlight sweeping across the fill on a loop
- Fully responsive (percentage-based width, no fixed pixel sizing)
- Fully customizable per-bar via CSS custom properties (colors, glow, timing)
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-morph-progress">
  <div class="progress-row is-visible">
    <div class="progress-label-row">
      <span class="progress-label">CSS / Animation</span>
      <span class="progress-percent">92%</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" style="--fill-scale: 0.92;"></div>
    </div>
  </div>
</div>
```
Set `--fill-scale` to a decimal (0–1) matching the displayed percentage. Add the `.is-visible` class to `.progress-row` to trigger the fill-in animation — pair with a scroll-reveal `IntersectionObserver` script if you want it to trigger on scroll rather than immediately, or leave it present by default as shown here.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--fill-duration` | `1.2s` | Fill-in transition duration |
| `--morph-duration` | `3s` | Border-radius morph cycle speed |
| `--fill-color` / `--fill-color-2` | `#38bdf8` / `#a78bfa` | Fill gradient endpoints |
| `--glow-color` | `rgba(56, 189, 248, 0.5)` | Glow shadow color |
| `--bar-height` | `14px` | Track thickness |

Override per bar for different skill colors, as shown in the JavaScript/Motion Design examples in `demo.html`.

## Accessibility
Uses `transform: scaleX()` rather than animating `width` directly, avoiding layout thrashing. Respects `prefers-reduced-motion` by disabling the morph, glow pulse, and shimmer animations entirely, leaving a clean static rounded bar.

## Files
- `demo.html` — live working example with 3 differently-colored skill bars
- `style.css` — component styles and all animations
- `README.md` — this file