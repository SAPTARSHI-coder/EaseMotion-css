# Fix for .ease-shimmer-sweep Accessibility

Resolves Issue #8397.

## Description
This submission fixes a critical DoS issue where the `.ease-shimmer-sweep` animation was hardcoded to `infinite` instead of respecting the `--ease-animation-iterations` variable. When a user with `prefers-reduced-motion: reduce` views the page, the speed becomes `0.01ms`, causing infinite rapid repaints and freezing the browser.

By overriding the animation rule to use `var(--ease-animation-iterations, infinite)`, it evaluates to `1` in reduced motion mode, preventing the browser freeze.

## How to Apply
The maintainers should update `core/animations.css` line 734:
```css
  animation: ease-kf-shimmer-sweep var(--ease-speed-slow) var(--ease-ease) var(--ease-animation-iterations, infinite);
```
