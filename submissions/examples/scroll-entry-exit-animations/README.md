# CSS Scroll-Driven Entry and Exit Combined

## What

This example demonstrates CSS Scroll-Driven Animations using `animation-timeline: view()` with combined entry AND exit animations. Cards fade in as they enter the viewport and fade out as they exit, all driven purely by CSS.

## How

Each card is assigned `animation-timeline: view()` with keyframes that handle both the entry phase (fade-in, scale-up) and the exit phase (fade-out, scale-down). The `animation-range` property is set to `entry 0% exit 100%` to cover the full lifecycle of the element within the scrollport.

## Why

Combining entry and exit animations in a single scroll-driven animation reduces code duplication and ensures smooth, performance-friendly transitions without JavaScript. The `prefers-reduced-motion` media query provides an accessibility fallback.
