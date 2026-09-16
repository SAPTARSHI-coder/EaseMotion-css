# Sandbox Layout Fix: Firefox Table `position: sticky` Column Border Disappearance Resolution

## Overview
A high-performance CSS table compositing fix for wide scrollable data tables utilizing sticky first columns (`position: sticky; left: 0;`). It completely eliminates border disappearance, stops line slipping under adjacent cells during horizontal scrolling, and preserves crisp column separation lines in Mozilla Firefox (Gecko).

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a wide, horizontally scrollable data table with sticky row headers.
* `style.css` — Scoped layout modifier asset layer specifying `box-shadow: inset -2px 0 0 ...` layer-bound border overrides.

## 🐛 The Bug Resolved
Previously, creating wide data tables with a sticky first column (`position: sticky; left: 0`) caused the right border or vertical separation line of the sticky column to vanish behind scrolling data cells on Firefox. Gecko draws sticky column elements on a separate composite plane during horizontal scrolling. Standard cell borders (`border-right`) belong to the table's collapsed border mesh and remain stationary on the base table layer, slipping under adjacent scrolling cells.

## 🛠️ The Solution
The vertical separation boundary is moved from the base table mesh directly onto the sticky cell's active layer. By replacing `border-right` with an internal inset box shadow (`box-shadow: inset -2px 0 0 var(--ease-border-color)`), the separation line is rasterized on the sticky cell's compositing plane. It travels along with the sticky element seamlessly during horizontal scroll passes across all browsers.
