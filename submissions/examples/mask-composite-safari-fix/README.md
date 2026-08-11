# Sandbox Layout Fix: CSS Mask Compositing (`mask-composite`) Safari Invisibility Resolution

## Overview
A high-performance CSS cross-browser masking patch for multi-layer CSS masks using `mask-composite` (`exclude`, `subtract`, `intersect`). It completely eliminates element invisibility, stops WebKit mask evaluation drops, and renders clean vector cutouts across Apple Safari (iOS and macOS).

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a vector cutout ticket card with side-notch hole-punches over a contrast grid.
* `style.css` — Scoped layout modifier asset layer specifying `-webkit-mask-composite: xor` legacy keywords and W3C `mask-composite: exclude` rules.

## 🐛 The Bug Resolved
Previously, combining multiple mask layers using CSS Masking (`mask-image: gradient1, gradient2` with `mask-composite: exclude` or `subtract`) to create custom cutout card shapes or hole-punch effects caused the entire element to become invisible on Safari. WebKit requires vendor-prefixed `-webkit-mask-composite` declarations, but uses a non-standard syntax keyword mapping (`-webkit-mask-composite: xor` instead of `mask-composite: exclude`).

## 🛠️ The Solution
The CSS mask property declarations are structured with dual-syntax fallbacks. By declaring `-webkit-mask-composite: xor;` (or `destination-out`) directly alongside `mask-composite: exclude;`, WebKit's legacy compositing engine resolves boolean mask layer operations cleanly while standard engines consume modern syntax. Cutout cards render with full opacity across all platforms.
