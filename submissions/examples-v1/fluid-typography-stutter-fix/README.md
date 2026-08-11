# Sandbox Layout Fix: Fluid Typography Viewport Calculation Text Stutter and Judder Resolution

## Overview
A high-performance structural rendering patch for responsive fluid text configurations to completely eliminate text vibration, stop main-thread layout thrashing, and stabilize font reflow pathways during window resizing.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive presentation cockpit hosting a horizontally resizable query card panel to validate font scaling stability.
* `style.css` — Scoped layout modifier asset layer replacing raw window `vw` calculation values with localized `cqw` container properties.

## 🐛 The Bug Resolved
Previously, implementing responsive fluid headers using standard viewport width scaling formulas (like `font-size: clamp(1rem, 5vw, 2rem);`) triggered severe typographic rendering stutters. Because the layout calculator forces the browser engine to compute fractional sub-pixel glyph metrics on every single pixel adjustment of the global window frame, the main text rows fall on fractional coordinates. This causes noticeable font judders, dropped frames, and blurry text vibrations during real-time window tracking sweeps.

## 🛠️ The Solution
The box model typography channels are optimized. By shifting calculation bounds away from raw window scales and registering elements inside an explicit inline query container (`container-type: inline-size;`), you lock font width allocations straight to the immediate parent card box. Pairing this structure with container length tokens (`cqw`) allows the text elements to scale smoothly on isolated channels, removing sub-pixel alignment bottlenecks natively across all viewports without using calculation scripts.
