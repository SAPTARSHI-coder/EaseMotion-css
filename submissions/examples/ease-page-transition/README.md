# Pure CSS Page Transition Overlays (`.ease-page-transition`)

## Description
This submission fulfills Issue #57091. It provides a lightweight, pure CSS solution for smooth page transitions, eliminating the jarring "flash of white" that occurs during page loads or client-side routing in Single Page Applications (SPAs).

## Features
- **Zero JavaScript:** The transition overlay handles its own lifecycle using CSS animations, disappearing automatically.
- **Hardware Accelerated:** Uses `clip-path` animations which are processed directly on the GPU, guaranteeing 60fps performance without layout recalculations.
- **Multiple Wipe Directions:** Includes `.ease-wipe-up` and `.ease-wipe-right` variants.
- **Pointer Event Safe:** Intelligently disables `pointer-events` so the invisible overlay doesn't block clicks on the actual page content once the animation finishes.
- **Accessible:** Fully respects `prefers-reduced-motion` media queries, automatically disabling the transition for users with vestibular disorders.

## Files Included
- `demo.html`: An interactive demo showing the wipe-up transition on page load.
- `style.css`: The component CSS, ready to be integrated into the core framework.
- `README.md`: This documentation.
