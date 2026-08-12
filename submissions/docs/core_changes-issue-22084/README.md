# Carousel / Slider Component — EaseMotion CSS

**Issue:** [#22084 — Add carousel/slider component for cycling through content](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22084)

A CSS scroll-snap based carousel component for cycling through images, testimonials, or featured content. Supports horizontal and vertical orientations, navigation dots, arrow controls, fade transitions, and CSS-only autoplay.

## Structure

```
submissions/core_changes-issue-22084/
├── demo.html       # Live demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| **Default** | `.ease-carousel` | Horizontal scroll-snap carousel |
| **Vertical** | `.ease-carousel-vertical` | Vertical scrolling orientation |
| **Fade** | `.ease-carousel-fade` | Crossfade transitions via `:target` |
| **Autoplay** | `.ease-carousel-autoplay` | CSS animation auto-rotation, pauses on hover |
| **Multi-slide 50%** | `.ease-carousel-slide-50` | Two slides visible at once |
| **Multi-slide 33%** | `.ease-carousel-slide-33` | Three slides visible at once |
| **Multi-slide 25%** | `.ease-carousel-slide-25` | Four slides visible at once |

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css" />
<link rel="stylesheet" href="path/to/style.css" />

<div class="ease-carousel">
  <div class="ease-carousel-track">
    <div class="ease-carousel-slide"><!-- content --></div>
    <div class="ease-carousel-slide"><!-- content --></div>
  </div>
  <div class="ease-carousel-dots">
    <button class="ease-carousel-dot active"></button>
    <button class="ease-carousel-dot"></button>
  </div>
  <div class="ease-carousel-arrows">
    <button class="ease-carousel-arrow">‹</button>
    <button class="ease-carousel-arrow">›</button>
  </div>
</div>
```

## Features

- CSS `scroll-snap-type` for native scrolling behavior
- Navigation dots with active state styling
- Previous/next arrow buttons
- Fade transition variant using `:target` selector
- CSS-only autoplay with `@keyframes`
- Horizontal and vertical orientations
- Configurable slide widths (100%, 50%, 33.333%, 25%)
- `@layer easemotion-components` for proper cascade ordering
- Dark mode, reduced motion, and forced-colors support
