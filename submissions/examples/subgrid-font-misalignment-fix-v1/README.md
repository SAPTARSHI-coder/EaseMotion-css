# Sandbox Layout Fix: CSS Grid `grid-template-rows: subgrid` Dynamic Web Font Track Misalignment Resolution

## Overview
A high-performance CSS Grid subgrid optimization patch for multi-card grid layouts utilizing `grid-template-rows: subgrid` across dynamic web font loading states. It completely eliminates row track misalignment, stops card footer vertical drift, and forces instant subgrid track recalculations when web fonts finish loading.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a 2-column subgrid layout with an interactive font load simulator.
* `style.css` — Scoped layout modifier asset layer specifying `@font-face` `font-display: swap` rules and `contain: inline-size` subgrid host properties.

## 🐛 The Bug Resolved
Previously, when a multi-card grid layout used `grid-template-rows: subgrid` to align card titles and footers across columns, loading a custom web font dynamically caused the row tracks to misalign. Card footers drifted out of vertical alignment across adjacent cards even after the custom font finished loading. Browser layout engines calculate initial subgrid track heights using system fallback font metrics. When the custom web font loads asynchronously, the engine updates text glyph widths but fails to trigger a full parent grid track recalculation pass across the subgrid tree.

## 🛠️ The Solution
The font loading descriptors and subgrid layout containment rules are explicitly configured. By declaring `font-display: swap;` (and `size-adjust`) in the `@font-face` definition and applying `contain: inline-size;` directly to the subgrid card wrapper in `style.css`, the grid layout engine is forced to re-evaluate parent subgrid track heights whenever font metric swaps occur. Row tracks and card footers remain perfectly aligned across all columns.
