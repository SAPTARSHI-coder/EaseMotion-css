# Fix: Missing `@keyframes ease-kf-hover-pulse-glow`

## What does this do?

Adds the missing `@keyframes ease-kf-hover-pulse-glow` definition that the existing `.ease-hover-pulse-glow:hover` class references but never had — so the hover animation actually runs instead of silently doing nothing.

## How is it used?

Apply the class to any element and hover over it:

```html
<!-- On a card -->
<div class="ease-card ease-hover-pulse-glow">
  Hover me
</div>

<!-- On a button -->
<button class="ease-btn ease-btn-primary ease-hover-pulse-glow">
  Click Me
</button>
```

The hover effect combines:
- A gentle **scale pulse** (1 → 1.06 → 1)
- A layered **drop-shadow glow** tied to `--ease-color-primary`

The glow uses `filter: drop-shadow()` (not `box-shadow`), so it is **not clipped** by parent `overflow: hidden` containers.

## Why is it useful?

Issue #10072 added the `.ease-hover-pulse-glow` utility class but omitted the corresponding `@keyframes` block. As a result, every element using this class has a silent no-op animation — the browser finds no keyframe named `ease-kf-hover-pulse-glow` and skips the animation entirely.

This fix:

1. **Defines the missing keyframe** with an rgba() fallback for broad browser support, and a `@supports (color: color-mix(...))` block that upgrades the glow to use `--ease-color-primary` dynamically for users with modern browsers.

2. **Removes the conflicting `transition`** on the base class. The original code had both `transition: transform, filter` on `.ease-hover-pulse-glow` and `animation` on `.ease-hover-pulse-glow:hover`. These fight on hover-out — animation fills the end state, but transition tries to animate back from it, causing a visual jump. Removing the transition lets the `animation: forwards` fill behave correctly.

3. **Adds `prefers-reduced-motion` support** so the animation is disabled for users who have requested reduced motion, keeping the component WCAG-compliant.

This fits EaseMotion's philosophy of composable, zero-dependency animation utilities that respect user preferences.

## Files

| File | Purpose |
|------|---------|
| `style.css` | The keyframe definition + fixed base class |
| `demo.html` | Side-by-side: broken (before) vs fixed (after) |
| `README.md` | This document |

## Related

- Issue #10072 — original `.ease-hover-pulse-glow` addition (missing keyframe)
- `core/animations.css` line 1547–1558 — where the fix should be integrated
