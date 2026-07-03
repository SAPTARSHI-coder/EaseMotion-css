# Hero Banner Slider

A full-width hero banner/image slider with smooth slide transition animation. Auto-plays every few seconds with manual prev/next navigation and dot indicators.

## Features

- translateX slide transitions via `--hero-duration` custom property
- Auto-play with pause-on-hover behavior
- Prev/next arrow navigation and clickable dot indicators
- Overlay for text readability via `--hero-overlay-color`
- Backdrop-filter glassmorphism CTA buttons
- Responsive layout for mobile screens
- Respects `prefers-reduced-motion`

## Usage

The slider uses CSS `transition` on `.hero-track` for the transform. JavaScript controls the current slide index and sets `transform: translateX(...)`. Customize via `:root` variables:

```css
--hero-duration: 0.5s;
--hero-slide-duration: 5s;
--hero-overlay-color: rgba(0, 0, 0, 0.35);
--hero-text-color: #ffffff;
--hero-nav-color: rgba(255, 255, 255, 0.8);
--hero-dot-active: #ffffff;
```
