# Reduced Motion Tabs Bug Demo

## What does this do?

Demonstrates that the tabs component in `components/tabs.css` is missing a `@media (prefers-reduced-motion: reduce)` guard. The color transition on `.ease-tab-label` and the transform transition on `.ease-tab-underline` continue animating even when users request reduced motion.

## How is it used?

Open `demo.html` in a browser. Enable `prefers-reduced-motion: reduce` in your OS/browser settings. Click between tabs to see the underline slide animation and label color transitions still playing. The demo's `style.css` applies the fix.

## Why is it useful?

WCAG 2.1 SC 2.3.3 requires all non-essential motion to cease under `prefers-reduced-motion: reduce`. Every other major component (cards, buttons, sidebar, footer, tooltips, modals, chip, masonry, scroll-progress) has a reduced-motion guard. Tabs is an inconsistent gap.

The fix should be applied to `components/tabs.css`:
```css
@media (prefers-reduced-motion: reduce) {
  .ease-tab-label,
  .ease-tab-underline {
    transition: none !important;
  }
}
```
