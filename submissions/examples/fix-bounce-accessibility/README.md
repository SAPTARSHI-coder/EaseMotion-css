# Fix: Bounce Accessibility & Variables

This submission addresses issue #2940 by adding accessibility support and standardizing variables in the bounce animation component.

## Changes Made
- **Accessibility:** Added `@media (prefers-reduced-motion: reduce)` block to disable animations for users with motion sensitivity.
- **Consistency:** Replaced hardcoded values in `.ease-bounce-in` with CSS variables (`var(--ease-speed-slow)`).

## Why this fits EaseMotion
By ensuring accessibility and standardizing design tokens, we make the library safer and more maintainable for all developers.