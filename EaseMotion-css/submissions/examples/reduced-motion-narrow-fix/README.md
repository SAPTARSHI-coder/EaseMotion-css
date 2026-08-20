# Narrowed prefers-reduced-motion Selector

**Fixes:** #3643
**File Modified:** `core/animations.css`

---

## Problem

The reduced motion media query in `core/animations.css` used a
broad `[class*="ease-"]` selector that matched ALL classes
starting with `ease-`, including layout utilities like
`.ease-flex`, `.ease-grid`, and `.ease-hidden` that don't use
any animation or transition. This unnecessarily applied
`animation-duration: 0.01ms` to non-animated elements.

## Fix

Narrowed the selector to only target classes that actually use
animations or transitions:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-bounce,
  [class*="ease-anim-"],
  [class*="ease-hover-"],
  [class*="ease-card-"],
  .ease-btn-hover {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition: none !important;
    transform: none !important;
  }
}
```

## How to Test

1. Open `demo.html` in any modern browser
2. Enable "Reduce Motion" in OS accessibility settings
3. Confirm the bouncing element stops animating
4. Confirm the flex layout items remain unaffected (no unintended changes)

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 74+            |
| Firefox | 63+            |
| Safari  | 10.1+          |
| Edge    | 79+            |