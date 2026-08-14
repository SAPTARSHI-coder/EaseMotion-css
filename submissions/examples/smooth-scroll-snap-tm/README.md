# Smooth Scroll Snap

A submission demonstrating CSS scroll-snap with x/y axis galleries, center-snap carousels, progress indicator, pagination dots, custom scrollbars, and focus management using EaseMotion design tokens.

## Features

- `scroll-snap-type: y mandatory` for full-page section snapping
- `scroll-snap-type: x mandatory` for horizontal card/carousel galleries
- `scroll-snap-align: start`, `center`, and `end` variants
- Center-snap carousel: active card always centered
- Custom webkit scrollbar styling
- Interactive pagination dots with smooth-scroll navigation
- Animated scroll progress indicator bar (gradient)
- Keyboard focus management with `:focus-visible`
- 10-slide gallery and 5-card carousel examples
- Uses `--ease-radius-*`, `--ease-space-*`, `--ease-speed-*`, `--ease-ease-*`, `--ease-glow-primary`
- Dark mode via `prefers-color-scheme: dark`
- Reduced motion via `prefers-reduced-motion: reduce`

## Usage

```css
/* Full-page section snap */
.scroll-container { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; }
.section { min-height: 100vh; scroll-snap-align: start; }

/* Horizontal gallery */
.gallery { display: flex; overflow-x: scroll; scroll-snap-type: x mandatory; }
.gallery-item { flex: 0 0 200px; scroll-snap-align: start; }

/* Center-snap carousel */
.carousel-item { scroll-snap-align: center; }
```

## Why is it useful?

Scroll-snap is a CSS-only alternative to JavaScript carousel libraries, creating polished snapping experiences for full-page sections, image galleries, and card carousels. The `mandatory` vs `proximity` strictness controls whether snapping is always enforced or only suggested. Center-snap is ideal for feature carousels where the active card should always be centered. Using EaseMotion tokens (`--ease-speed-*`, `--ease-ease-*`) ensures the snapping feels consistent with the design system.
