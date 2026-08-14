# Sandbox Layout Fix: Flexbox Auto-Stretch Container Query Width Unit (`cqw`) Font Blowout Resolution

## Overview
A high-performance CSS layout patch for responsive cards using container query width units (`cqw`) inside auto-stretching Flexbox rows (`align-items: stretch`). It completely eliminates typography font size blowouts, prevents container width miscalculations during vertical row expansions, and stabilizes fluid text scaling across dynamic content updates.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a 2-card Flexbox row with an interactive height-expanding adjacent card.
* `style.css` — Scoped layout modifier asset layer specifying `align-self: flex-start` overrides and `min-width: 0` cell constraints.

## 🐛 The Bug Resolved
Previously, when a responsive badge or card heading used container query units (`font-size: clamp(0.75rem, 3cqw, 1.25rem)`) inside a parent card that was a child of an auto-stretching Flexbox row (`display: flex; align-items: stretch`), expanding an adjacent flex card caused the badge's font size to unexpectedly blow out and enlarge. In flex stretching mode, adjacent flex children expand the height of the entire row. Because container query width measurements (`cqw`) evaluate the container's inline size, expanding row dimensions forced the flex item to recalculate its container inline size, inflating font scaling parameters.

## 🛠️ The Solution
The flex alignment and container target bounds are optimized. By overriding standard flex stretch alignment on the container query host (`align-self: flex-start;`) and wrapping the container target inside an explicit cell boundary (`min-width: 0;`), height expansions in neighboring flex cells no longer invalidate container query inline-size metrics. Fluid typography scales cleanly with zero scripts.
