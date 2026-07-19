# Issue #45670 — Enhance reduced-motion fallback to fully disable animations & transitions

## What does this do?
This submission fixes the core reduced-motion fallback rule. It replaces the previous fallback rule (which merely shortened animations/transitions to `0.01ms`) with a robust rule that completely disables all CSS animations, transitions, and smooth scrolling for users who prefer reduced motion.

## How is it used?
The fix is added to `easemotion.css` under the `@media (prefers-reduced-motion: reduce)` block:

```css
/* Accessibility: Completely disable animations & transitions when reduced motion is preferred */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## Why is it useful?
1. **Accessibility Compliance:** Users with vestibular disorders or photosensitivity rely on the `prefers-reduced-motion` media query to navigate websites safely.
2. **Preventing Flashes:** Setting duration to `0.01ms` can still cause brief frames of transitions or animations to flash on high-refresh-rate displays or specific rendering engines. Disabling them completely via `none !important` guarantees no motion occurs.
3. **No Side Effects:** This fallback is purely conditional and has zero visual impact on users who do not have the reduced-motion setting enabled.
