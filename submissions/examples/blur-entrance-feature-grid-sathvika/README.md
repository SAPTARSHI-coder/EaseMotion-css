# CSS Blur-Entrance Feature Grid

A responsive feature grid where each card blurs into sharp focus on load, staggered per column.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-grid-blur` | `10px` | Starting blur amount |
| `--ease-grid-duration` | `0.5s` | Entrance duration |
| `--ease-grid-accent` | `#4f46e5` | Icon color |

## Usage
```html
<div class="ease-feature-grid">
  <div class="ease-feature-grid__item">
    <div class="ease-feature-grid__icon">⚡</div>
    <div class="ease-feature-grid__title">Fast</div>
    <div class="ease-feature-grid__desc">Optimized for speed.</div>
  </div>
</div>
```

## Accessibility
Semantic content, no interaction required. `prefers-reduced-motion` removes the blur, using a fast opacity fade instead. Grid collapses to a single column under 640px.

## Why it fits EaseMotion CSS
Pure CSS `filter: blur()` staggered entrance, `ease-` prefixed classes, themeable, responsive.
