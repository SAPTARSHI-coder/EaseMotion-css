# Sandbox Layout Fix: CSS `calc-size(auto, size)` Flexbox Layout Reflow & Intrinsic Sizing Jitter Resolution

## Overview
A high-performance CSS layout containment patch for intrinsic height animations using `calc-size(auto, size)` or `interpolate-size: allow-keywords` nested inside vertical Flexbox containers (`flex-direction: column`). It completely eliminates main-thread layout thrashing, prevents flex-basis reflow loops, and delivers smooth $60\text{fps}$ intrinsic height transitions.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a column flex container with a `calc-size(auto, size)` expandable panel.
* `style.css` — Scoped layout modifier asset layer specifying `contain: layout` and `flex-shrink: 0` on the immediate wrapper.

## 🐛 The Bug Resolved
Previously, animating an element's height from zero to auto using modern CSS `height: calc-size(auto, size)` (or `height: interpolate-size`) inside a flex container with `flex-direction: column` caused the outer flex wrapper to jitter and reflow erratically mid-transition. `calc-size(auto, size)` requires real-time intrinsic sizing recalculations on every animation frame. Inside a column flex container, child height changes force the parent flex container to recalculate flex basis parameters on every frame, causing main-thread reflow thrashing.

## 🛠️ The Solution
The layout containment boundary and flex sizing properties are explicitly defined. By applying `contain: layout;` to the animated element's immediate parent wrapper and declaring `flex-shrink: 0;` in `style.css`, child height interpolation frames are isolated from parent `flex-basis` evaluation loops. The outer flex container stays completely stable during intrinsic height transitions with zero main-thread scripts.
