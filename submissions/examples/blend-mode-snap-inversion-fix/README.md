# Sandbox Layout Fix: WebKit `mix-blend-mode: overlay` Scroll-Snap Color Inversion Resolution

## Overview
A high-performance WebKit layer compositing fix for translucent sticky navbars utilizing `mix-blend-mode: overlay` situated over scroll-snapping hero sections (`scroll-snap-type: y mandatory`). It completely eliminates inverted color flashing, prevents blend state dropping during inertial scroll deceleration, and locks blending passes onto GPU composition planes.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a scroll-snapping hero viewport with a sticky `mix-blend-mode: overlay` navbar.
* `style.css` — Scoped layout modifier asset layer specifying `isolation: isolate`, `transform: translate3d(0,0,0)`, and `will-change: mix-blend-mode`.

## 🐛 The Bug Resolved
Previously, when a dark sticky navbar sat over a scroll-snapping hero section (`scroll-snap-type: y mandatory`) and used `mix-blend-mode: overlay` to blend with background images, scrolling past snap points caused the navbar text to temporarily invert to high-contrast inverted colors before snapping back to the blended state. WebKit recalculates scroll-snap positions on the main thread during inertial deceleration. As the viewport snaps between sections, WebKit briefly drops the element's hardware-accelerated blending layer snapshot to recalculate scroll bounds.

## 🛠️ The Solution
The scroll container isolation and GPU layer promotion are explicitly configured. By applying `isolation: isolate;` to the parent scroll container and adding `will-change: mix-blend-mode;` alongside `transform: translate3d(0, 0, 0);` to the sticky navbar in `style.css`, WebKit is forced to maintain the element's blending snapshot on an isolated 3D compositing layer. Overlay blending remains continuous and flash-free across all scroll snaps with zero scripts.
