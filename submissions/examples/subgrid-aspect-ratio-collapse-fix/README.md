# Sandbox Layout Fix: Firefox CSS Subgrid `aspect-ratio: 16 / 9` Row Height Collapse Resolution

## Overview
A high-performance CSS grid template fix for `aspect-ratio` cards nested inside subgrids or CSS Grid layouts carrying `min-height: 0`. It completely eliminates $0\text{px}$ media height collapses, prevents layout pass desynchronization, and locks media card proportions cleanly in Mozilla Firefox (Gecko).

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a nested grid card with a $16:9$ SVG media asset and text block.
* `style.css` — Scoped layout modifier asset layer specifying `minmax(min-content, max-content)` row templates and explicit media height rules.

## 🐛 The Bug Resolved
Previously, placing a media card with `aspect-ratio: 16 / 9` inside a nested subgrid or CSS Grid with `grid-template-rows: auto 1fr` caused Firefox to collapse the media row height to $0\text{px}$ if the grid item carried `min-height: 0`. Gecko's grid layout algorithm evaluates `aspect-ratio` after implicit row height calculations during nested grid passes. With `min-height: 0` present, the initial row height measurement resolved to zero before the aspect ratio constraint could be applied.

## 🛠️ The Solution
The grid row template bounds and inner media node height properties are optimized. By replacing loose `auto` rows with explicit content-bounded tracks (`grid-template-rows: minmax(min-content, max-content) 1fr`) and applying `height: 100%; object-fit: cover;` to the inner media node, Gecko is forced to evaluate the `aspect-ratio` during its primary layout pass. Media cards render perfectly with zero scripts.
