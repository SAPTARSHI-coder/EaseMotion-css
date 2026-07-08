# Fix: Loaders Missing `prefers-reduced-motion` Handling

## Issue

The loaders component (`components/loaders.css`) defines four animated elements (`.ease-loader-spin`, `.ease-loader-pulse`, `.ease-loader-ping`, `.ease-loader-dot`) but has no `@media (prefers-reduced-motion: reduce)` block. Users who prefer reduced motion will still see continuously spinning, pulsing, and bouncing loader animations — a violation of WCAG 2.3.3.

## Root Cause

The initial implementation of the loaders focused on the animation keyframes but forgot to include the standard accessibility media query to pause them.

## Fix

Add a `prefers-reduced-motion` media query that sets `animation: none` on all loader classes, ensuring compliance with accessibility standards.

## Files Changed

- `components/loaders.css` — Add `@media (prefers-reduced-motion: reduce)` block to disable animations.

## Demo

Open `demo.html` to see the loaders. If your operating system is set to "reduce motion", the loaders will be static.
