# Sandbox Layout Fix: CSS `clip-path` Shape Morphing & `backdrop-filter` Blur Collapse Resolution

## Overview
A high-performance CSS compositing decoupling patch for interactive glassmorphic cards combining `backdrop-filter: blur()` with `clip-path: polygon()` morphing transitions. It completely eliminates blur dropping, prevents solid gray overlay flashes, and preserves smooth frosted glass filters during vector shape transformations.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a high-contrast background sampling matrix and an interactive morphing frosted glass card.
* `style.css` — Scoped layout modifier asset layer specifying structural separation between outer `clip-path` wrappers and inner `backdrop-filter` GPU planes.

## 🐛 The Bug Resolved
Previously, combining a frosted glass backdrop filter (`backdrop-filter: blur(16px)`) with a fluid shape-morphing animation (`clip-path: polygon(...)`) caused the backdrop blur effect to collapse or turn into a solid opaque gray box during transition passes. Chromium and WebKit rasterize `clip-path` vector adjustments on the main layout thread while processing `backdrop-filter` texture blurs on the GPU compositor. When `clip-path` keyframes execute, the rendering engine continually invalidates the underlying backdrop snapshot buffer on every animation frame.

## 🛠️ The Solution
The clipping boundary and blur filter layer are structurally decoupled into a two-tier DOM hierarchy. By wrapping the frosted element in a parent container carrying `isolation: isolate;`, `will-change: clip-path;`, and the `clip-path` polygon rule, vector adjustments are isolated to the outer layout tree. Keeping `backdrop-filter` on an inner child element set to `transform: translateZ(0)` and `background-clip: padding-box` forces the GPU to calculate the backdrop blur pass on an independent compositing plane before applying the vector clip.
