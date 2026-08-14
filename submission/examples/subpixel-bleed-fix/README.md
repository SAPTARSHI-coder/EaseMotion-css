# Sandbox Layout Fix: High-DPI Border Sub-Pixel Rounding Bleed Resolution

## Overview
A precision layout-stabilization patch for graphic gradient card components to eliminate sub-pixel line bleed and jagged edge artifacts on high-DPI and Retina monitors with fractional display scaling maps.

## 📁 Sandbox Configuration Files
* `demo.html` — Precision testing grid applying semi-transparent borders over deep card fields to check corner clipping paths.
* `style.css` — Scoped layout overrides updating the element's background paint boundaries relative to core variables.

## 🐛 The Bug Resolved
Previously, loading high-contrast gradient cards inside Chromium and Firefox engines on 4K monitors or retina screens with non-integer device pixel scaling ratios (such as $150\%$ or $175\%$ display scaling configurations) caused an ugly line bleed along the edges. The underlying background gradient layer extended slightly past the card's `border-radius` vector mask, generating jagged, pixelated outlines that degraded the presentation layout.

## 🛠️ The Solution
The canvas painting layer boundaries are secured. By changing the element's clip box setting to `background-clip: padding-box`, the browser engine forces the internal gradient layout to trim its path cleanly at the *interior* boundary edge of the border line. This adjustment prevents sub-pixel rounding errors from exposing background pixels, keeping corners sharp across all display configurations.
