# Sandbox Layout Fix: WebKit CSS `mask-image` Retina Rasterization & Jagged Edge Resolution

## Overview
A high-performance CSS anti-aliasing patch for elements using CSS `mask-image` (`radial-gradient`, SVG masks, or alpha channels) on Retina/high-DPI displays. It completely eliminates stair-stepped pixelated mask edges, forces sub-pixel anti-aliasing passes, and preserves smooth mask curves in Apple Safari (iOS and macOS).

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a radial masked card with high-contrast background patterns to test sub-pixel edge smoothness.
* `style.css` — Scoped layout modifier asset layer specifying translucent hairline borders, `-webkit-mask-box-image` overrides, and GPU plane promotion.

## 🐛 The Bug Resolved
Previously, applying a smooth rounded alpha mask using `mask-image: url(#svg-mask)` or `mask-image: radial-gradient(...)` to cards containing high-resolution images caused clipped edges to appear pixelated, jagged, and un-aliased on iOS Safari and Retina displays. WebKit rasterizes `mask-image` vectors onto an intermediate 1x pixel-ratio buffer before mapping them onto the screen, completely bypassing the display's native device pixel ratio (2x/3x scale).

## 🛠️ The Solution
The WebKit mask compositing pipeline and hardware acceleration passes are optimized. By applying a translucent hairline border (`border: 1px solid rgba(255, 255, 255, 0.01)`), clearing legacy mask-box image pipelines (`-webkit-mask-box-image: none`), and promoting the element to a 3D GPU layer (`transform: translateZ(0)`), WebKit is forced to evaluate mask composition passes with full sub-pixel anti-aliasing on Retina scale buffers.
