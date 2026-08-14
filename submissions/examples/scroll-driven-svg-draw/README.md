# Scroll-Driven SVG Path Drawing

## What does this do?

Uses CSS scroll-driven animations (`animation-timeline: view()`) combined with SVG `stroke-dasharray` / `stroke-dashoffset` to animate SVG paths as "drawing" effects triggered by scrolling. Shapes, icons, charts, and connection diagrams appear to draw themselves onto the page as the user scrolls into view — with zero JavaScript.

## How is it used?

Add the `.svgg-draw` class to any SVG element (`<path>`, `<circle>`, `<line>`, `<polygon>`, etc.):

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,80 C60,20 140,180 180,80"
        class="svgg-draw"
        stroke="#6c63ff"
        stroke-width="3"
        fill="none" />
</svg>
```

**Stagger effects**: Use `.svgg-draw-1` through `.svgg-draw-5` to stagger when each path begins drawing relative to the viewport, creating sequenced reveal animations:

```html
<circle class="svgg-draw svgg-draw-1" stroke="#6c63ff" ... />
<path   class="svgg-draw svgg-draw-2" stroke="#8b5cf6" ... />
<line   class="svgg-draw svgg-draw-3" stroke="#a78bfa" ... />
```

**Filled shape reveal**: Use `.svgg-fill-reveal` for shapes with `fill` that should fade in after the outline is drawn:

```html
<circle class="svgg-fill-reveal" fill="#6c63ff" cx="100" cy="100" r="6" />
```

## Why is it useful?

Scroll-driven SVG drawing fills a genuine gap in EaseMotion CSS's animation capabilities:

- **Zero JavaScript**: Entirely CSS-powered through `animation-timeline: view()`, matching EaseMotion's philosophy
- **Progressive enhancement**: Browsers without scroll-driven animation support see the full SVG — no broken states
- **Accessibility-first**: `prefers-reduced-motion`, `forced-colors`, and print styles are fully handled
- **Practical applications**: Animated charts, progress rings, network diagrams, hand-drawn icons, connection maps, and creative illustrations
- **Composable**: Stagger classes allow sequencing complex multi-path illustrations with a single class

This technique is used by major platforms (Vercel, Linear, Stripe) for hero illustrations and landing page storytelling, but with JavaScript. This submission proves it can be done with pure CSS.

## Browser Support

- **Chrome 115+**: Full support
- **Edge 115+**: Full support
- **Safari 18+**: Full support (via `@supports (animation-timeline: view())`)
- **Firefox**: Pending (scroll-driven animations in development)

In unsupported browsers, all SVGs render fully drawn by default — the animation is progressive enhancement.

## Modern CSS APIs Used

- `animation-timeline: view()`
- `animation-range`
- `@property`
- `stroke-dasharray` / `stroke-dashoffset` animation
- `prefers-color-scheme`
- `prefers-reduced-motion`
- `forced-colors: active`
- `@media print`
