# Sandbox Layout Fix: CSS View Transition `mix-blend-mode` Snapshot Isolation & Flash Resolution

## Overview
A high-performance CSS patch for elements utilizing `mix-blend-mode` (`difference`, `color-dodge`, etc.) during native CSS View Transitions (`document.startViewTransition()`). It eliminates mid-transition color flashes, prevents snapshot isolation drops, and preserves dynamic blending math across state changes.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a theme toggle trigger, split-contrast background panel, and an inverted blended headline.
* `style.css` — Scoped layout modifier asset layer specifying view-transition pseudo-element overrides, isolation resets, and dedicated snapshot layer definitions.

## 🐛 The Bug Resolved
Previously, triggering a native CSS View Transition on a page containing elements with `mix-blend-mode: difference` or `mix-blend-mode: color-dodge` caused those elements to drop their blending calculations during the transition animation. The browser captured the transition snapshot inside an isolated pseudo-element group (`::view-transition-group(root)`), breaking the element's background reference. The blended text would flash solid white or black for $300\text{ms}$ before snapping back after the transition completed.

## 🛠️ The Solution
The view transition snapshot hierarchy and blending layers are optimized. By assigning an explicit `view-transition-name: preserve-blend;` to the blended element, setting `isolation: auto;` on `::view-transition-group(root)`, and re-declaring `mix-blend-mode: difference;` directly on `::view-transition-group(preserve-blend)`, the browser extracts the blended node onto its own dedicated snapshot plane. The hardware compositor calculates blending math continuously throughout the transition without dropping context.
