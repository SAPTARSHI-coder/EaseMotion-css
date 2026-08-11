# Scroll-Driven Stagger Group

## What does this do?
A parent component where direct children automatically animate in one by one as the section enters the viewport. Zero manual delay classes needed.

**Two-tier implementation:**
1. **Modern browsers** (Chrome 115+, Safari 18+): CSS `animation-timeline: view()` — scroll-driven, GPU-native, zero JS for animation
2. **All other browsers**: IntersectionObserver JS fallback — fires when group enters viewport, applies staggered delays

## Files
- `style.css` — CSS including `@supports` scroll-driven keyframes + reduced motion
- `stagger.js` — IntersectionObserver engine + scroll-driven progressive enhancement
- `demo.html` — self-contained demo with 3 different stagger patterns

## How to use it
```html
<!-- Include the JS once per page -->
<script src="stagger.js"></script>

<!-- Basic: children slide up one by one on scroll -->
<div class="stagger-group" data-stagger="100">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Custom animation -->
<div class="stagger-group" data-stagger="150" data-animation="slide-left">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Options
| Attribute | Values | Default |
|---|---|---|
| `data-stagger` | any ms value | `100` |
| `data-animation` | `slide-up`, `slide-left`, `fade`, `zoom` | `slide-up` |

## Why it fits EaseMotion CSS
The framework has `ease-delay-100` through `ease-delay-1000` but you have to manually add them to every child. For grids of 6, 8, 12 items this is tedious and error-prone. `stagger-group` makes it one attribute on the parent — children handle themselves. Real engineering, cross-browser, genuinely missing from the framework. Exposes `window.EaseStagger.init()` for dynamic content.
