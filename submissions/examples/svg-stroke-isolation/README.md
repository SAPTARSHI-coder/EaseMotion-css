# Sandbox Layout Fix: Inline SVG Stroke-Width Sizing Sub-Pixel Jitter Resolution

## Overview
A graphic rendering patch for inline SVG nodes inside fluid layout tracks to prevent text line snapping, eliminate stroke-width wiggling, and stabilize vector stroke weights across Chromium viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive dashboard template hosting animated vector loaders within resizable grid blocks to test scaling thresholds.
* `style.css` — Scoped layout sheet establishing absolute vector path boundaries linked back to core global tokens.

## 🐛 The Bug Resolved
Previously, nesting inline vector icons or radial animation loaders inside percentage-based layout slots or responsive grid columns caused severe interaction artifacts on Chromium (Blink) engines. As the wrapper box scales fluidly along sub-pixel coordinates, the engine repeatedly attempts to re-evaluate the vector circumference coordinates. This results in rounding math collisions, forcing vector line segments to jitter, snap weights, and wobble during layout adjustments.

## 🛠️ The Solution
The drawing coordinate calculations are optimized. By anchoring the internal vector graphics mapping grid to a hardcoded asset tag (`viewBox="0 0 100 100"`), the browser calculations use a fixed coordinate baseline. Injecting `vector-effect: non-scaling-stroke;` instructs the hardware compositor to draw vector lines completely decoupled from outer box scaling loops. This maintains perfect stroke thickness weights across fluid layout transitions.
