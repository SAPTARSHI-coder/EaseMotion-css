# Carousel / Slider Component — EaseMotion CSS

**Issue:** [#30302 — Add Carousel/Slider component (ease-carousel) with CSS-only navigation](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30302)

A CSS scroll-snap based carousel component for cycling through images, testimonials, or featured content. Supports horizontal and vertical orientations, CSS-only radio-button navigation, RTL layouts, navigation dots, arrow controls, fade transitions, and autoplay.

## Structure

```
submissions/docs/core_changes-issue-30302/
├── demo.html       # Live demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| **Default** | `.ease-carousel` | Horizontal scroll-snap carousel |
| **Radio Nav** | (uses hidden radio inputs) | CSS-only navigation via `:checked` selector |
| **Vertical** | `.ease-carousel-vertical` | Vertical scrolling orientation |
| **Fade** | `.ease-carousel-fade` | Crossfade transitions via `:target` |
| **Autoplay** | `.ease-carousel-autoplay` | CSS animation auto-rotation, pauses on hover |
| **Multi-slide 50%** | `.ease-carousel-slide-50` | Two slides visible at once |
| **Multi-slide 33%** | `.ease-carousel-slide-33` | Three slides visible at once |
| **Multi-slide 25%** | `.ease-carousel-slide-25` | Four slides visible at once |
| **RTL** | `dir="rtl"` | Right-to-left layout using logical properties |

## Features

- CSS `scroll-snap-type` for native scrolling behavior
- **CSS-only radio-button navigation** — no JavaScript for dot or arrow navigation
- Navigation dots with active state styling via `:checked` selector
- Previous/next arrow buttons
- Fade transition variant using `:target` selector
- CSS-only autoplay with configurable speed (`--carousel-autoplay-duration`)
- Horizontal and vertical orientations
- **Full RTL support** via logical CSS properties (`inset-inline-start`, `inset-inline-end`)
- Configurable slide widths (100%, 50%, 33.333%, 25%)
- `@layer easemotion-components` for proper cascade ordering
- Dark mode, reduced motion, and forced-colors support
- Customizable via CSS variables

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--carousel-slide-gap` | `0px` | Gap between slides |
| `--carousel-dot-size` | `10px` | Navigation dot diameter |
| `--carousel-dot-active-scale` | `1.3` | Active dot scale factor |
| `--carousel-nav-btn-size` | `36px` | Arrow button size |
| `--carousel-autoplay-duration` | `12s` | Autoplay cycle duration |
