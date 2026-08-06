# Sandbox Layout Fix: Top Layer Native Popover `::backdrop` Blur Collapse Resolution

## Overview
A high-performance GPU compositing isolation patch for native HTML Popover (`<div popover>`) and Dialog pseudo-elements (`::backdrop`). It completely eliminates backdrop blur collapse, prevents opaque gray overlay flashes, and preserves stable frosted glass filters during interior child transform keyframe animations.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a native HTML popover trigger, continuous CSS transform spinner, and high-contrast background sampling patterns.
* `style.css` — Scoped layout modifier asset layer specifying Top Layer container painting isolation (`isolation: isolate`) and explicit `::backdrop` GPU promotion parameters.

## 🐛 The Bug Resolved
Previously, opening a native HTML Popover or Modal Dialog using `backdrop-filter: blur(12px)` on its `::backdrop` pseudo-element caused the frosted glass blur to collapse or turn into a solid, un-blurred gray overlay whenever an element inside the popover executed a CSS keyframe transform animation (e.g., a rotating loader). Because Top Layer elements reside on an independent rendering stack, animating child transforms detaches the `::backdrop` sampling plane during animation ticks.

## 🛠️ The Solution
The stacking context boundaries and hardware composition planes are optimized. By applying `isolation: isolate;` directly onto the popover container, the browser isolates interior transform updates to the popover's local rendering tree. Concurrently, promoting the `::backdrop` pseudo-element to its own GPU plane using `will-change: backdrop-filter;` combined with `transform: translateZ(0);` locks the blurred sampling plane in place indefinitely.
