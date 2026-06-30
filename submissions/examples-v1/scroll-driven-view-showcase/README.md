# Scroll-Driven View Showcase

## What

This example demonstrates CSS Scroll-Driven Animations using `animation-timeline: view()`. Six cards each use a unique entrance animation (fade+scale, slide-left, slide-right, blur+clip-path, 3D rotate, and zoom) that triggers as the card scrolls into the viewport. A progress bar at the top uses `scroll(root)`.

## How

Each card is assigned a distinct `animation-timeline: view()` with a corresponding `@keyframes` rule. The `animation-range` property controls when each animation starts and ends relative to the element's scroll position. The progress bar animates via `scroll(root)` with `transform: scaleX()`. A `@supports` guard ensures animations only apply when the browser supports the feature.

## Why

Scroll-driven animations reduce JavaScript dependency for scroll-based effects, improving performance and keeping logic in CSS. By varying `animation-range`, each card feels unique while sharing the same underlying technology. The `prefers-reduced-motion` fallback ensures accessibility.
