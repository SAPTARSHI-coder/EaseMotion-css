# Sandbox Layout Fix: 3D Transform Perspective Card Overlay Piercing Z-Index Resolution

## Overview
A high-performance graphic composition patch for 3D transforming components to completely eliminate layout layer piercing bugs, stop overlay intersection defects, and protect standard 2D stacking context hierarchies.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting absolute dropdown menu cards and interactive perspective grids to check compositor stacking paths.
* `style.css` — Scoped layout modifier asset layer introducing native stacking isolation barriers and local sub-tree flat projections linked back to global tokens.

## 🐛 The Bug Resolved
Previously, assembling a grid dashboard container hosting elements with hardware-accelerated 3D hover actions (`transform: perspective() rotateX() translateZ();`) triggered severe structural layering defects inside browser engines. When the 3D rotation initiates, the browser promotes the element onto an independent GPU hardware compositor plane tracking spatial depth coordinates. The element's Z-axis translation values extend outward forward through the layout viewports, slicing straight through fixed navigation bars or absolute text tooltips despite the overlay elements carrying explicit higher values (`z-index: 9999;`).

## 🛠️ The Solution
The box model stacking contexts and hardware composition tracks are optimized. By injecting an explicit structure isolation constraint rule (`isolation: isolate;`) onto the grid container parent and combining it with local sub-tree flat flattening directives (`transform-style: flat;`) right onto the active rotating items, you separate 2D stacking tracks from 3D spatial calculations. The card tilts natively inside its boundary block fields without breaching layout parameters natively across all viewports without running script code blocks.
