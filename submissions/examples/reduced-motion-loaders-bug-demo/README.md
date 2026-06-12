# Reduced Motion Loaders Bug Demo

## What does this do?

Demonstrates that the loaders component in `components/loaders.css` is missing a `@media (prefers-reduced-motion: reduce)` guard. All loader animations (spin, pulse, ping, dots) continue animating even when users request reduced motion.

## How is it used?

Open `demo.html` in a browser. Enable `prefers-reduced-motion: reduce` in your OS/browser settings. Observe that spinning, pulsing, and dot animations continue indefinitely. The demo's `style.css` applies the fix.

## Why is it useful?

Spinning/pulsing loaders trigger severe discomfort for users with vestibular disorders. WCAG 2.1 SC 2.3.3 requires all non-essential motion to cease under `prefers-reduced-motion: reduce`. The component already has accessibility comments about `aria-busy` and `role="status"` but completely ignores reduced motion.

The fix should be applied to `components/loaders.css`:
```css
@media (prefers-reduced-motion: reduce) {
  .ease-loader-spin,
  .ease-loader-pulse,
  .ease-loader-ping,
  .ease-loader-dots span {
    animation: none !important;
  }
}
```
