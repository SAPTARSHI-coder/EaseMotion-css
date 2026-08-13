# Reduced Motion Badges Bug Demo

## What does this do?

Demonstrates that the badges component in `components/badges.css` is missing a `@media (prefers-reduced-motion: reduce)` guard. The pulse animation on `.ease-badge-pulse::after` continues animating even when users request reduced motion.

## How is it used?

Open `demo.html` in a browser. Enable `prefers-reduced-motion: reduce` in your OS/browser settings. Observe the pulsing ring around badges continuing indefinitely. The demo's `style.css` applies the fix.

## Why is it useful?

WCAG 2.1 SC 2.3.3 requires all non-essential motion to cease under `prefers-reduced-motion: reduce`. Every other decorative-animation component has a guard — badges is an inconsistent gap.

The fix should be applied to `components/badges.css`:
```css
@media (prefers-reduced-motion: reduce) {
  .ease-badge-pulse::after {
    animation: none !important;
  }
}
```
