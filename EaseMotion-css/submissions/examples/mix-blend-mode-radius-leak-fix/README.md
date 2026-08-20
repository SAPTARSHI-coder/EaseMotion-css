# Sandbox Layout Fix: CSS `mix-blend-mode` Border-Radius Corner Leak & Compositing Mask Resolution

## Overview
A high-performance CSS GPU compositing isolation patch for cards utilizing `border-radius` and `overflow: hidden` containing child elements with `mix-blend-mode` (`difference`, `multiply`, etc.). It completely eliminates square corner bleed leaks, enforces pre-blend alpha masking, and locks blended overlays within rounded container boundaries.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a rounded card with a `mix-blend-mode: difference` child overlay and glass content block.
* `style.css` — Scoped layout modifier asset layer specifying `isolation: isolate`, `background-clip: padding-box`, and 3D GPU layer promotion.

## 🐛 The Bug Resolved
Previously, placing a child element with `mix-blend-mode: difference` inside a card using `border-radius: 1rem` and `overflow: hidden` caused the blended color box to leak outside the rounded corners, showing un-clipped square edges at the card perimeters. Applying `mix-blend-mode` promotes the child to its own blending composition group, which bypasses the parent’s standard 2D `overflow: hidden` clipping mask during hardware compositing.

## 🛠️ The Solution
The parent card's layer isolation and GPU compositing hierarchy are optimized. By applying `isolation: isolate;` and `background-clip: padding-box;` on the parent card, along with an explicit 3D transform push (`transform: translateZ(0)`), the GPU is forced to execute the `border-radius` alpha mask *before* computing the child's blending pass. Blended overlays remain perfectly clipped with zero scripts.
