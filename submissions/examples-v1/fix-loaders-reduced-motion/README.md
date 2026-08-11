# Fix for Loaders Reduced Motion

Resolves Issue #8432.

## Description
This submission fixes a WCAG 2.2.2 violation where `.ease-loader` animations (spin, pulse, ping, dots) animate infinitely with no way to stop them, even for users who have requested reduced motion in their OS.

In `components/loaders.css`, the loaders are defined with infinite animations but no fallback. This can trigger symptoms in users with vestibular disorders.

This fix adds a `@media (prefers-reduced-motion: reduce)` block that forces the animations to `none` when requested. For the spin loader, it also sets a solid border color so it doesn't look like a broken circle when stopped.

## How to Apply
Maintainers should update `components/loaders.css` by appending this at the end of the file:

```css
  /* Reduced motion fallback for loaders */
  @media (prefers-reduced-motion: reduce) {
    .ease-loader-spin,
    .ease-loader-pulse,
    .ease-loader-ping,
    .ease-loader-dot {
      animation: none !important;
    }

    /* For spin loader, ensure it looks like a complete circle when stopped */
    .ease-loader-spin {
      border-color: var(--ease-color-primary) !important;
    }
  }
```
