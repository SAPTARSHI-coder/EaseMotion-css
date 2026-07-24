# Loading Spinner — `loading-spinner-ar`

A complete, performant library of CSS-only loading indicators featuring 10 distinct animation styles built with CSS `@keyframes`, sizes, colors, and integration contexts.

---

## 1 · What does this do?

This provides a lightweight, pure-CSS collection of loading spinners (arcs, rings, dots, stretch bars, pulse, and ripple waves) that animate infinitely using CSS keyframes and transition states.

---

## 2 · How is it used?

### Basic Spinner (Rotate style)

```html
<div class="loading-spinner"></div>
```

### Variant Selection

Add modifier classes to customize layout type, size, color, or speed:

```html
<!-- Dual ring layout, Large size, Success color -->
<div class="loading-spinner loading-spinner--dual loading-spinner--lg loading-spinner--success"></div>

<!-- Dots layout, Info color, slow animation speed -->
<div class="loading-spinner loading-spinner--dots loading-spinner--info loading-spinner--slow">
  <span></span>
  <span></span>
  <span></span>
</div>
```

### Integrations (Inline & Overlay)

#### Inline with text / inside buttons
```html
<button class="btn">
  <span class="loading-spinner loading-spinner--inline"></span>
  Loading...
</button>
```

#### Overlay overlay card
```html
<div style="position: relative;">
  <!-- Card Content -->
  <div class="loading-overlay">
    <div class="loading-spinner loading-spinner--gradient"></div>
    <span class="loading-overlay-text">Processing...</span>
  </div>
</div>
```

---

## 3 · Why is it useful?

Visual feedback on asynchronous user interactions is core to clean UX. This component aligns with **EaseMotion CSS** philosophy:

- **GPU Acceleration**: Animations leverage `transform` properties (`rotate`, `scale`, `translateY`) instead of triggering layout paints (like animating width/height or margin), keeping resource consumption extremely low.
- **Buttery-smooth rendering**: Relies entirely on native browser rendering pipelines using optimized cubic-beziers.
- **Easy customization**: Sizes and colors are governed by CSS variables (e.g. `--ls-size`, `--ls-thickness`, `--ls-color`), allowing developers to scale spinners proportionally without writing extra CSS.
- **Accessibility features**: Supports screen reader constraints via simple container roles and handles user motion preferences through `prefers-reduced-motion` settings which pause the animations.
- **No external dependencies**: Pure CSS keyframes remove the weight of JavaScript libraries or bulky SVG animations.
