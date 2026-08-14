# Sandbox Layout Fix: CSS `content-visibility: auto` Scrollbar Jitter & Off-Screen Intrinsic Height Resolution

## Overview
A high-performance CSS layout optimization patch for long feeds, dashboard card grids, and list views utilizing `content-visibility: auto`. It completely eliminates scrollbar twitching, stops layout reflow jumps during fast scrolling, and reserves accurate off-screen layout footprints.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a scrollable feed of off-screen dashboard cards.
* `style.css` — Scoped layout modifier asset layer specifying `content-visibility: auto` paired with `contain-intrinsic-size: auto 240px`.

## 🐛 The Bug Resolved
Previously, applying `content-visibility: auto` to long lists of dashboard cards to optimize off-screen rendering performance caused severe layout jumps, jittery scrollbars, and brief content flashes when scrolling rapidly. Browser layout engines skip rendering off-screen elements with `content-visibility: auto`. Without an explicit `contain-intrinsic-size` estimate, the scroll engine dynamically recalculates the document's total scroll height the exact millisecond a card enters the viewport, throwing off scroll offsets.

## 🛠️ The Solution
The off-screen intrinsic height reservation is explicitly defined. By pairing `content-visibility: auto;` directly with `contain-intrinsic-size: auto 240px;`, the layout engine reserves a 240px placeholder footprint for off-screen nodes. Total scroll height calculations remain consistent, delivering smooth, 60fps scrolling without scrollbar jitter or content reflows.
