# CSS sibling-index() Auto-Stagger

## What does this do?
Uses the new CSS `sibling-index()` function (Chrome 2026+) to automatically calculate each child's animation delay from its DOM position. Zero JS, zero delay classes, zero data attributes. One class on the parent does everything.

## Files
- `style.css` — `@supports`-gated `sibling-index()` CSS + keyframes + reduced motion
- `auto-stagger.js` — IntersectionObserver fallback + MutationObserver for dynamic content
- `demo.html` — self-contained demo with 3 variants

## How to use it
```html
<script src="auto-stagger.js"></script>

<!-- Basic — children slide up with 80ms between each -->
<div class="auto-stagger" style="--stagger-delay: 80ms">
  <div>Item 1</div>  <!-- delay: 0ms   -->
  <div>Item 2</div>  <!-- delay: 80ms  -->
  <div>Item 3</div>  <!-- delay: 160ms -->
</div>

<!-- Variants -->
<div class="auto-stagger auto-stagger--fade"       style="--stagger-delay: 100ms">...</div>
<div class="auto-stagger auto-stagger--zoom"       style="--stagger-delay: 60ms">...</div>
<div class="auto-stagger auto-stagger--slide-left" style="--stagger-delay: 120ms">...</div>
```

## Browser support
- **Chrome 2026+**: Native `sibling-index()` — pure CSS, GPU-native, zero JS
- **Firefox (flag)**: Experimental support
- **All others**: IntersectionObserver JS fallback — identical behavior
- **prefers-reduced-motion**: All animations instantly disabled

## Why it fits EaseMotion CSS
EaseMotion currently requires `ease-delay-100`, `ease-delay-200` etc on every child. With `sibling-index()`, the browser handles delay calculation automatically. This positions EaseMotion as a forward-thinking framework that adopts cutting-edge CSS as it lands — zero manual work, maximum impact.
