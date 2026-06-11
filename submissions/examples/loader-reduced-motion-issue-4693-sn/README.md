# Reduced Motion Override for Loaders (Issue #4693)

## What does this do?
Disables all loader and spinner animations when the user has prefers-reduced-motion active.

## How is it used?
When elements with loader classes (like `.ease-loader-spin`, `.ease-loader-pulse`, `.ease-loader-ping`, `.ease-loader-dot`) are displayed and the user has reduced motion enabled in their OS, animations will be stopped/paused.

## Why is it useful?
It prevents vestibular distress and satisfies accessibility guidelines by halting continuous, rapid, or looping animations for sensitive users.

## Affected File (maintainer will copy to `components/loaders.css`)
Add this block to the end of `components/loaders.css`:
```css
  /* prefers-reduced-motion override for loaders */
  @media (prefers-reduced-motion: reduce) {
    .ease-loader-spin,
    .ease-loader-pulse,
    .ease-loader-ping,
    .ease-loader-dot {
      animation: none !important;
    }
  }
```
