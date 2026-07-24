# Sandbox Layout Fix: CSS Anchor Positioning & Container Query Calculation Loop Resolution

## Overview
A high-performance structural containment patch for CSS Anchor-Positioned popovers sitting inside Container Query wrappers. It completely eliminates layout invalidation loops, prevents adjacent card reflow jumps, and stops popover flickering in Blink and WebKit viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an anchored context menu, layout containment boundaries, and responsive container-query cards.
* `style.css` — Scoped layout modifier asset layer specifying explicit layout containment, container query roots, and anchor positioning fallbacks.

## 🐛 The Bug Resolved
Previously, pinning an interactive popover or tooltip to a button located inside a size-container query wrapper (`container-type: inline-size`) using CSS Anchor Positioning (`anchor-name` / `position-anchor`) caused Chrome and Safari to enter a continuous layout recalculation loop. Opening the popover invalidated the container's inline-size pass, forcing adjacent responsive cards inside the container to briefly collapse styles, shift position by 1–2px, and flicker repeatedly.

## 🛠️ The Solution
The layout containment boundary and container query hierarchy are optimized. By shifting the `@container` query target to an outer root node situated above the anchor host, applying `contain: layout style;` directly onto the anchor host element, and declaring `position-try-options: flip-block;` on the popover, the browser decouples popover position calculations from container size invalidation passes. The context menu anchors cleanly and adjacent cards remain completely stable with zero scripts.
