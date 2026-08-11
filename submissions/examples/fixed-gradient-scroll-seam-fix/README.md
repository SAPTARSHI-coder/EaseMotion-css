# Sandbox Layout Fix: Radial Gradient `background-attachment: fixed` Scroll Seams & Sub-Pixel Tiling Resolution

## Overview
A high-performance CSS background layer decoupling patch for radial gradients and spotlight background effects. It completely eliminates $1\text{px}$ horizontal flickering seams, stops sub-pixel tiling artifacts, and stabilizes radial gradients during document scrolling on high-refresh-rate monitors.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a scrollable card viewport overlaying a decoupled radial spotlight gradient background.
* `style.css` — Scoped layout modifier asset layer specifying GPU-promoted fixed `::before` pseudo-element background planes.

## 🐛 The Bug Resolved
Previously, using a radial gradient with `background-attachment: fixed` on a container or `<body>` to create a glowing spotlight effect caused thin, $1\text{px}$ horizontal lines (seams) to flicker across the background during scrolling, especially on $120\text{Hz}+$ high-refresh-rate monitors. Non-integer viewport heights combined with fixed background attachment forced the browser's rasterizer to perform fractional coordinate rounding on every scroll tick, causing sub-pixel background tiling misalignments.

## 🛠️ The Solution
The background layer architecture is optimized. By replacing `background-attachment: fixed` with a dedicated `position: fixed` (or `position: absolute` inside viewport bounds) pseudo-element (`::before`) carrying `pointer-events: none;` and `z-index: -1;`, the radial gradient is detached from the scroll engine entirely. The background layer is promoted to an independent GPU compositor plane (`transform: translateZ(0)`), rendering seamless, flicker-free spotlight effects with zero scripts.
