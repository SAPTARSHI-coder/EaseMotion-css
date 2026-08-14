# Reduced Motion Navbar Bug Demo

## What does this do?

Demonstrates that the navbar component in `components/navbar.css` is missing a `@media (prefers-reduced-motion: reduce)` guard. The glass navbar's background, border, shadow transitions and the item link color transitions continue animating even when users request reduced motion.

## How is it used?

Open `demo.html` in a browser. Enable `prefers-reduced-motion: reduce` in your OS/browser settings. Hover over navbar items to see color transitions still playing. The demo's `style.css` applies the fix.

## Why is it useful?

Every other major component (cards, buttons, sidebar, footer, tooltips, modals, chip, masonry, scroll-progress) has its own reduced-motion guard. Navbar is an inconsistent gap.

The fix should be applied to `components/navbar.css`:
```css
@media (prefers-reduced-motion: reduce) {
  .ease-navbar-glass,
  .ease-navbar-glass .ease-navbar-item {
    transition: none !important;
  }
}
```
