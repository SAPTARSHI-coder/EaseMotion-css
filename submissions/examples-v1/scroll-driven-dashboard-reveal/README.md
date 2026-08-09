# Scroll-Driven Dashboard Reveal Layout

## 1. What does this do?

This is a premium SaaS analytics dashboard layout that showcases multiple scroll-driven reveal animation effects natively using CSS `animation-timeline: view()` with a lightweight `IntersectionObserver` script fallback for non-supporting browsers.

## 2. How is it used?

Apply the chosen reveal class and the default hidden state rules directly to scrollable container elements in your layout grid:

```html
<!-- Slide-up card -->
<div class="glass-card reveal-slide-up">
  <h3>Stat Card</h3>
</div>

<!-- Zoom-in chart -->
<div class="glass-card reveal-zoom">
  <h3>Acquisition Chart</h3>
</div>

<!-- Blur-reveal details -->
<div class="glass-card reveal-blur">
  <h3>Activity Timeline</h3>
</div>
```

The layout uses CSS `@supports (animation-timeline: view())` to bind the keyframes directly to viewport scrolling. If unsupported, the companion script appends `.is-visible` to trigger smooth fallback CSS transitions.

## 3. Why is it useful?

It fits EaseMotion CSS's philosophy by demonstrating how to construct modern progressive layouts that feel responsive and alive, highlighting zero-dependency implementation practices for cutting-edge scroll timeline features without sacrificing legacy browser performance.

---

## Overview

A modern SaaS analytics command center showing metrics, graphs, ordered grids, and server timeline feeds. The core emphasis is progressive loading: elements reveal elegantly as you navigate down the page.

## Features

- **Modern SaaS Layout:** Sidebar navigation with header search panels and profile selectors.
- **KPI Statistics:** Value cards with trend indicators and custom indicators.
- **Bar Graphs:** Dynamic heights showcasing CSS gradient bars.
- **Glassmorphic Cards:** Translucent white panels optimized for both light and dark systems.

## Reveal Utilities Demonstrated

- `.reveal-fade` — Linear opacity entrance.
- `.reveal-slide-up` — Opacity + translate3d slide-in from bottom.
- `.reveal-zoom` — Opacity + scale zoom-in.
- `.reveal-blur` — Opacity + blur-reduction clear-up.

## Accessibility

- Tab navigation is structured sequentially for screen readers.
- Aria roles (`role="navigation"`, `role="dialog"`, `role="table"`) are appropriately declared.
- Mobile navigation features keyboard esc dismissals.

## Browser Compatibility

- **CSS Scroll-Driven Animations:** Supported natively in Chrome 115+, Edge 115+, Opera 101+.
- **IntersectionObserver Fallback:** Automatically activated in Firefox, Safari, and older browser builds to preserve smooth animations.

## Responsive Behaviour

- Desktops feature a persistent `260px` sidebar with a right-side main panel.
- Mobile and tablets compress the sidebar into a sliding off-canvas menu triggered via header hamburger buttons.

## Reduced Motion Support

- Disables all scroll and transition animations immediately (`opacity: 1`, `transform: none`, `filter: none`) when `prefers-reduced-motion: reduce` is detected in system settings.
