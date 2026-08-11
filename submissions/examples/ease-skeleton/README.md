# Animated Skeleton Loaders (`.ease-skeleton`)

## Description
This submission fulfills Issue #57083. Skeleton screens are a modern UX pattern that replace traditional spinning loading wheels with wireframes of the UI that is about to load, greatly improving perceived performance.

This component provides a pure CSS skeleton loader with a continuous, hardware-accelerated shimmering effect.

## Features
- **Zero JavaScript:** Powered entirely by CSS `@keyframes`.
- **Hardware Accelerated:** Uses `background-position` translation of a `linear-gradient` for a smooth, performant shimmer effect without recalculating layouts.
- **Shape Modifiers:** Includes `.ease-skeleton-text` for paragraph lines and `.ease-skeleton-circle` for avatars out of the box.
- **Accessible:** Respects `prefers-reduced-motion` by disabling the infinite shimmer animation, presenting a static placeholder to prevent distraction or nausea for users with vestibular disorders.

## Files Included
- `demo.html`: A mock profile card demonstrating how to compose skeletons together to build a loading state.
- `style.css`: The component CSS, ready to be integrated into the core framework.
- `README.md`: This documentation.
