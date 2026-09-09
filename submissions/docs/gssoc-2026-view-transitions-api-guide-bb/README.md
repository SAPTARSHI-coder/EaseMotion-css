# View Transitions API Architectural Guide (GSSoC 2026)

## 1. What does this do?
The **View Transitions API Architectural Guide** documents native CSS View Transitions (`@view-transition`, `view-transition-name`, `::view-transition-old`, `::view-transition-new`). It includes an interactive state visualizer demonstrating seamless layout morphing between grid cards and full-width detail view states.

## 2. How is it used?
Link the stylesheet in your head tag:
```html
<link rel="stylesheet" href="style.css">
```
Assign unique `view-transition-name` properties to matching elements across views:
```css
.card-thumb {
  view-transition-name: hero-card-thumb;
}
::view-transition-old(hero-card-thumb),
::view-transition-new(hero-card-thumb) {
  animation-duration: 0.5s;
}
```

## 3. Why is it useful?
- **Native Browser State Morphing**: Eliminates heavy JavaScript FLIP transition calculations in favor of native compositor snapshot blending.
- **Cross-Document Support**: Enables app-like fluid page navigation in Multi-Page Applications (MPAs).
- **Reduced Bundle Size**: Eliminates third-party motion framework libraries like Framer Motion or GSAP for basic layout transitions.
