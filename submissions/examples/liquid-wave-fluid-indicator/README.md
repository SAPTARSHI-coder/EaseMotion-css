# Organic Liquid Wave Fluid Indicator

## What does this do?

A pure CSS liquid wave fluid indicator that simulates an organic liquid surface using overlapping rotating border-radius shapes. The fill level is controlled via the `--fill-level` CSS custom property, making it adaptable as a progress bar, battery charge indicator, or any fill-level metric.

## The technique

- **Rotating border-radius shapes** — non-circular elements rotated continuously create the illusion of a fluid wave surface
- **Multi-layer depth** — primary `::before` wave + secondary `::after` wave with staggered timing and reverse direction create depth
- **`--fill-level` variable** — controls the `bottom` position of the wave layers, easily adjustable via CSS or JS
- **Gradient blending** — linear gradients on each layer with varying opacities simulate light absorption through fluid

## How is it used?

```html
<div class="ease-wave-container" style="--fill-level: 60%;">
  <div class="ease-wave-liquid"></div>
  <div class="ease-wave-label">
    <span class="ease-wave-value">60</span>
    <span class="ease-wave-unit">Percent</span>
  </div>
</div>
```

Adjust `--fill-level` to any percentage (5%–95%) to control the liquid height.

## Demo features

- **4 preset indicators** — Low (25%), Medium (50%), High (75%), Almost Full (90%)
- **Interactive slider** — drag to adjust fill level in real-time
- **Preset buttons** — quick-jump to 20%, 40%, 50%, 70%, 90%

## CSS concepts used

- `border-radius: 38% 42% ...` — non-uniform radii to create organic shape distortion during rotation
- `::after` pseudo-element for secondary depth layer
- `@keyframes ease-kf-wave` — continuous 360° rotation
- CSS custom properties for adaptable fill levels
- `will-change: transform` for GPU-accelerated animation
- `prefers-reduced-motion` fallback

## EaseMotion classes used

This demo imports `easemotion.css` for base styling and extends with custom wave-specific styles.
