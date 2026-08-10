# Fix ease-loader Reduced Motion Support

## What does this do?
Adds a `prefers-reduced-motion` fallback for the `ease-loader-spin`, `ease-loader-pulse`, `ease-loader-ping`, and `ease-loader-dot` animations so they stop spinning/pulsing/bouncing when the user's OS has motion reduction enabled.

## How is it used?
Include the component as usual. The media query automatically disables the animation for users with reduced-motion preferences enabled — no markup changes needed.

## Why is it useful?
Prevents forced continuous motion for users with vestibular disorders or motion sensitivity, per WCAG 2.1 SC 2.3.3.
Fixes: #36262