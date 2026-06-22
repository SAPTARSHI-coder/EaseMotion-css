# EaseMotion CSS - Skeleton Loading Utilities

A premium collection of CSS skeleton loading placeholder classes and micro-animations to improve the perceived performance and user experience of loading layouts.

## Overview

This component implements skeleton placeholders with two animation flavors:
- **Shimmering Gradient**: A linear-gradient animation that sweeps across the placeholder element from left to right.
- **Pulsing Opacity**: A breathing opacity cycle transition.

Both animations are optimized for hardware acceleration and adapt perfectly to dark mode preferences out-of-the-box.

## Classes Used

- `.em-skeleton`: Base placeholder style (light grey background, rounded corners, hidden overflows, inline-block layout). Enables the default shimmer animation overlay.
- `.em-skeleton-pulse`: Toggles the fading breathing opacity animation instead of shimmer.
- `.em-skeleton-avatar`: Rounded shape with fixed width/height matching profile avatars (48px).
- `.em-skeleton-avatar-lg`: Large profile avatar variant (64px).
- `.em-skeleton-title`: Wide text placeholder (60% width) for article headers.
- `.em-skeleton-text`: Text line placeholder (0.875rem height).
- `.em-skeleton-text-three-quarters`: Utility class specifying 75% width.
- `.em-skeleton-text-half`: Utility class specifying 50% width.
- `.em-skeleton-rect`: Rectangular layout placeholder (160px height) suited for cards and images.
- `.em-skeleton-btn`: Rounded rectangle placeholder matching buttons.
- `.em-skeleton-badge`: Oval capsule placeholder (12px radius) matching badge chips.

## Animation Details

Animations are driven by CSS `@keyframes`:

- `@keyframes ease-skeleton-shimmer`: Translates a translucent linear-gradient mask from `-100%` to `100%` along the X-axis using GPU-accelerated transforms.
- `@keyframes ease-skeleton-pulse`: Cycle opacity parameters between `0.4` and `1.0`.

## Customization Guide

Variables defined under the `:root` scope allow developers to customize skeleton colors, radii, and transition durations:

```css
:root {
  --em-skeleton-bg: #e4e4e7;                           /* Default base background */
  --em-skeleton-shimmer-start: rgba(255, 255, 255, 0);   /* Shimmer gradient edges */
  --em-skeleton-shimmer-mid: rgba(255, 255, 255, 0.6);   /* Shimmer gradient center highlight */
  --em-skeleton-shimmer-end: rgba(255, 255, 255, 0);
  --em-skeleton-pulse-low: 0.4;                         /* Pulse min opacity */
  --em-skeleton-pulse-high: 1;                          /* Pulse max opacity */
  --em-skeleton-duration-shimmer: 1.6s;                  /* Shimmer speed */
  --em-skeleton-duration-pulse: 1.5s;                    /* Pulse speed */
  --em-skeleton-radius: 6px;                            /* Rounded border radius */
}
```

## Accessibility Notes

- **Aria Hidden**: All placeholders should contain `aria-hidden="true"` so that screen readers skip pronouncing empty visual placeholders while the content is loading.
- **Live Regions**: When wrapping loading containers, use `aria-live="polite"` and `aria-busy="true"` on the parent layout to let assistive technologies know that data is dynamically fetching and updates are expected.
- **Reduced Motion Support**: Respects system preferences. We suggest using `.em-skeleton-pulse` for users who prefer reduced motion.

## Responsive Behavior

- Fits inline inside blocks using relative widths (`%`) and fixed aspect containers (`em-skeleton-rect`, `em-skeleton-avatar`).
- Flex and CSS grid wrapper layouts align placeholders dynamically across tablet and mobile viewports.
