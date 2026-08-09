# Sandbox Layout Fix: CSS Grid `auto` Row Track Collapse Freeze & Intrinsic Height Cache Resolution

## Overview
A high-performance CSS grid track optimization patch for expandable accordion panels, collapsible drawers, and dynamic filter cards inside CSS Grid containers (`grid-template-rows`). It completely eliminates dead whitespace row freezing, forces intrinsic height cache invalidations, and enables smooth $0\text{fr} \rightarrow 1\text{fr}$ layout transitions in Chromium viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a parent CSS Grid layout with an expandable accordion panel and 1fr content cell.
* `style.css` — Scoped layout modifier asset layer specifying `grid-template-rows: minmax(0, max-content) 1fr` and fractional grid transitions.

## 🐛 The Bug Resolved
Previously, when an expandable accordion panel resided inside a CSS Grid cell where the row track was defined as `grid-template-rows: auto 1fr`, triggering the panel to collapse caused Chromium to freeze the row height, leaving an empty, dead whitespace block at the top of the grid. Chromium's grid layout engine caches the `auto` track's intrinsic height based on initial content dimensions. When inner content collapses, `auto` evaluates against cached minimum content sizes (`min-content`) rather than zero height.

## 🛠️ The Solution
The grid row track template bounds and inner panel transition states are explicitly defined. By setting the parent grid row track to `grid-template-rows: minmax(0, max-content) 1fr;` and handling inner height toggles using the CSS Grid fractional transition pattern (`grid-template-rows: 0fr` $\rightarrow$ `1fr`), Chromium's layout cache is invalidated on collapse passes. Row heights shrink cleanly to zero with zero main-thread scripts.
