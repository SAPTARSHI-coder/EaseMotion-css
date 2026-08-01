# Sandbox Layout Fix: CSS Subgrid Track Recalculation Freeze & Overflow Resolution

## Overview
A high-performance structural dimension constraint fix for nested subgrid containers and child items to completely eliminate Gecko track caching stalls, stop text overflow leaks, and enforce dynamic track fraction recalculations inside Mozilla Firefox viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting horizontally resizable subgrid stages and truncating text cells to validate reflow calculation passes.
* `style.css` — Scoped layout modifier asset layer replacing implicit content width/height minimums with explicit zero-minimum layout thresholds linked back to shared tokens.

## 🐛 The Bug Resolved
Previously, utilizing `grid-template-columns: subgrid;` on a nested card element inside a dynamic parent grid caused Mozilla Firefox (Gecko) to freeze subgrid track definitions at their initial pixel values during window resize events. Because subgrid items default to an implicit minimum size floor (`min-width: auto; min-height: auto;`), Gecko skips secondary track re-evaluation passes during reflows. As the parent grid contracts, the child subgrid tracks stay frozen, causing text and images to overflow parent columns.

## 🛠️ The Solution
The box model structural thresholds and subgrid track floors are optimized. By assigning an explicit micro-constrained boundary limit (`min-width: 0; min-height: 0;`) directly onto both the subgrid container and its immediate child items, you command the Gecko layout engine to drop its cached track definitions. The subgrid tracks re-evaluate track fractions dynamically on every reflow frame natively across all viewports without running scriptObservers.
