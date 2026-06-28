# Fix for Badge Reduced Motion

Resolves Issue #8429.

## Description
This submission fixes a WCAG 2.2.2 violation where `.ease-badge-pulse` infinitely pings with no way to stop it, even for users who have requested reduced motion in their OS.

In `components/badges.css`, the pulsing animation is hardcoded without a `prefers-reduced-motion` fallback. This can trigger symptoms in users with vestibular disorders.

This fix adds a `@media (prefers-reduced-motion: reduce)` block that forces the animation to `none` when requested.

## How to Apply
Maintainers should update `components/badges.css` by appending this at the end of the file:

```css
  /* Reduced motion fallback for pulsing badge */
  @media (prefers-reduced-motion: reduce) {
    .em-badge-pulse::after,
    .ease-badge-pulse::after {
      animation: none !important;
      box-shadow: none !important;
    }
  }
```
