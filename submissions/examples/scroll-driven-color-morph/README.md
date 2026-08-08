# Scroll-Driven Color Morphing

## What does this do?

Leverages CSS `@property` with `syntax: "<color>"` combined with `animation-timeline: view()` to smoothly interpolate colors — backgrounds, borders, box-shadows, badge colors, gradients, and glow effects — as the user scrolls. The browser handles all color math natively; no JavaScript interpolation libraries needed.

## How is it used?

Register color-typed custom properties with `@property`, then drive them with scroll-linked keyframes:

```css
@property --card-accent {
  syntax: "<color>";
  initial-value: #6366f1;
  inherits: true;
}

.card {
  background: var(--card-accent);
  border-color: var(--card-accent);
  animation: accent-shift 1 linear both;
  animation-timeline: view();
}

@keyframes accent-shift {
  0%   { --card-accent: #6366f1; }
  50%  { --card-accent: #ec4899; }
  100% { --card-accent: #10b981; }
}
```

Multiple properties can animate simultaneously for rich color palettes:

```html
<article class="scm-card scm-card--1">
  <div class="scm-card-visual">
    <div class="scm-glow-dot"></div>
    <span class="scm-badge">Live</span>
  </div>
  <div class="scm-card-body">
    <h3>Title</h3>
    <p>Description...</p>
  </div>
</article>
```

## Why is it useful?

Color interpolation via `@property` is a fundamentally underused modern CSS capability. Most developers don't realize the browser can natively interpolate between any two colors — including across color spaces — without JavaScript:

- **Zero calculation**: The browser smoothly transitions between `#6366f1` and `#10b981` with proper RGB interpolation
- **Multi-property orchestration**: A single scroll position simultaneously drives surface color, accent, shadow, gradient stop, badge background, and glow color
- **Production-ready patterns**: Card palettes that shift to match brand sections, badges that signal scroll depth, ambient glow that tracks reading position

## Browser Support

- **Chrome 115+**: Full `@property` + scroll-driven animations
- **Edge 115+**: Full support
- **Safari 16.4+**: `@property` support; scroll-driven animations in Safari 18+
- **Firefox**: `@property` supported; scroll-driven animations pending

## Modern CSS APIs Used

- `@property` with `syntax: "<color>"`
- `animation-timeline: view()`
- `animation-range`
- `prefers-color-scheme`
- `prefers-reduced-motion`
- `forced-colors: active`
- `@media print`
