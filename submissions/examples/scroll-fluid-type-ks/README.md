# Scroll-Driven Fluid Typography

## What does this do?

Demonstrates fluid typography that responds to scroll position using modern CSS `@property` registrations and `animation-timeline: view()`. Font-size, font-weight, letter-spacing, line-height, and card entrance all animate based on scroll progress — entirely in CSS with no JavaScript.

## How is it used?

```html
<!-- A heading that grows in size as the user scrolls past it -->
<h2
  class="fluid-scale-title"
  style="--scale-range: 1.5rem, 6rem"
>
  Heading content
</h2>
```

Each technique registers a typed custom property with `@property` so the browser can interpolate it smoothly:

```css
@property --fluid-fs {
  syntax: '<length>';
  inherits: true;
  initial-value: 1.5rem;
}

.fluid-title {
  font-size: var(--fluid-fs);
  animation: grow 1s linear both;
  animation-timeline: view();
  animation-range: entry 10% cover 50%;
}

@keyframes grow {
  from { --fluid-fs: 1.5rem; }
  to   { --fluid-fs: 6rem; }
}
```

## Why is it useful?

This submission showcases a genuinely modern CSS technique that is absent from the EaseMotion CSS submission pool. While `clamp()`-based fluid type and scroll-driven progress bars are well-covered, nobody has combined `@property` with `animation-timeline` specifically for **typographic fluidity**.

It fits EaseMotion's philosophy of **readable, expressive CSS** — the class names clearly describe the behavior (`fluid-scale-title`, `fluid-weight-title`), every value flows through custom properties, and all animations respect `prefers-reduced-motion`.

Key features:
- Four distinct scroll-driven typography techniques (font-size, font-weight, letter-spacing, line-height)
- Applied example: fluid card entrance animation
- Comprehensive accessibility: `prefers-reduced-motion`, `forced-colors`, `prefers-color-scheme`, print styles
- Responsive mobile-first layout with CSS Grid
- Semantic HTML with ARIA landmarks
- Reference table documenting all CSS APIs used

### Browser support

| Feature | Chrome | Safari | Firefox |
|---------|--------|--------|---------|
| `@property` | 85+ | 16.4+ | 128+ |
| `animation-timeline: view()` | 115+ | 18+ | ❌ |
| `animation-range` | 115+ | 18+ | ❌ |

Static fallback values are provided in the base styles for all animated properties, ensuring the demo remains fully readable in browsers without scroll-driven animation support.
