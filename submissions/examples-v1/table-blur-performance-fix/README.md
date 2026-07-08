# Sandbox Layout Fix: Tabular Spreadsheet Backdrop-Filter Hover Paint Optimization

## Overview
A performance-centric rendering patch for high-density tables nested inside frosted glass containers to completely eliminate hover highlight frame drops, prevent row paint lag, and bypass backdrop-filter recalculation bottlenecks.

## 📁 Sandbox Configuration Files
* `demo.html` — Precision presentation spreadsheet dashboard panel hosting dense metrics streams to evaluate row hover velocity lines.
* `style.css` — Scoped layout modifier asset layer specifying hardware-accelerated transform layers linked back to global core variables.

## 🐛 The Bug Resolved
Previously, placing a dense data table inside a container using backdrop blur rules (`backdrop-filter: blur();`) triggered high CPU core performance drops on Chromium (Blink) layout engines. Modifying standard background properties on the row layer (`tr:hover`) during cursor sweeps forces the browser to re-evaluate the composite color coordinates and re-blend the pixels behind font anti-aliasing pathways continuously. This calculation bottleneck thrashes the main rendering thread, causing notable interaction delays and visual frame drops.

## 🛠️ The Solution
The graphics painting pipelines are optimized. By banning direct background modifications on the row structural layout elements, the backdrop matrices stay fully cached inside the engine. Row highlight animations are offloaded to an internal, independent cell pseudo-element (`::before`) carrying a dedicated optimization hint (`will-change: opacity;`). Shifting alpha boundaries on hover channels row animations onto the hardware GPU compositing plane, preserving a smooth 60fps sweep.
