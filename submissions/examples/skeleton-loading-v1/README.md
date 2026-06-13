# CSS-only Skeleton Loading States

A pure CSS framework for creating animated placeholder layouts while data is loading. It provides two highly optimized animation states (Pulse and Shimmer) using native CSS keyframes and variables.

## Files
- `demo.html` - Interactive demonstration showing both a pulsing skeleton card and a shimmering skeleton card.
- `style.css` - The CSS implementation defining the keyframes, gradient sweeps, and shape classes.

## Details
Skeleton screens are crucial for modern UX, improving perceived performance while reducing user frustration during loading times. 

This component offers two animation styles:
1. **Pulse (`.ease-skeleton`)**: The default style. A lightweight, simple opacity animation from `0.5` to `1`.
2. **Shimmer (`.ease-skeleton-shimmer`)**: A more dynamic effect. By applying `.ease-skeleton-shimmer` to a parent container, all child `.ease-skeleton` elements switch their animation to a sweeping linear gradient. This is achieved by stretching the `background-size` to `400%` and animating the `background-position`.

Both styles automatically adapt to dark mode using the `prefers-color-scheme` media query and the core `var(--ease-color-neutral-700)` tokens.
