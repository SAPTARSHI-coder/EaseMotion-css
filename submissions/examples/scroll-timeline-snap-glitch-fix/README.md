# Sandbox Layout Fix: CSS View Timeline (`animation-timeline: view()`) & Scroll Snapping Inertial Jump Resolution

## Overview
A high-performance CSS animation synchronization patch for scroll-driven animations paired with CSS scroll snapping. It completely eliminates snap-landing keyframe jumps, prevents instant timeline state snaps, and forces smooth keyframe interpolation during scroll container deceleration.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a vertical scroll-snap container with animated card items.
* `style.css` — Scoped layout modifier asset layer specifying `scroll-snap-stop: always` and containment-based `animation-range` bounds.

## 🐛 The Bug Resolved
Previously, combining CSS Scroll-Driven Animations (`animation-timeline: view()`) with CSS Scroll Snapping (`scroll-snap-type: y mandatory`) using tight range boundaries like `animation-range: entry 20% exit 80%` caused keyframe jumping in Chromium viewports. As the container snapped into place, the compositor thread recalculated scroll progress before the scroll-snap inertial deceleration finished, causing the animation to skip intermediate keyframes and instantly snap to $100\%$ progress.

## 🛠️ The Solution
The timeline boundaries and scroll-snap physics parameters are synchronized. By applying `scroll-snap-stop: always;` to the snap target cards and shifting the view-timeline range to `animation-range: contain 0% contain 100%;`, the compositor synchronizes keyframe interpolation directly with the scroll-snap landing calculations. Cards reveal fluidly with zero script runtime.
