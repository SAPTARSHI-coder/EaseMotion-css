# Sandbox Layout Fix: Absolute Translation Typography Sub-Pixel Blur Resolution

## Overview
A structural rendering fix for contextual alerts, tooltips, and modal cards to completely eliminate font glyph blurring, prevent anti-aliasing grid degradation, and stabilize text rendering lines across Gecko (Firefox) viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user workspace layout hosting odd-width modal blocks inside centering grids to verify font crispness metrics.
* `style.css` — Scoped layout modifier asset layer specifying modern layout placement properties linked back to global tokens.

## 🐛 The Bug Resolved
Previously, centering custom overlay panels, menu alerts, or cards using classic offset properties (`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`) triggered visual font degradation glitches on Firefox. When fluid child elements evaluate to odd-pixel boundaries, the percentage translation cuts the coordinates directly in half, yielding fractional device pixel metrics (e.g., a width of 275px Divides into 137.5px). This arithmetic conflict forces the text engine to split font rendering rows over partial pixels, turning sharp text blurry.

## 🛠️ The Solution
The box model positioning rules are optimized. By removing translate variables completely, you eliminate fractional scaling loops. Moving layout centering operations directly to the parent wrapper via a modern layout constraint engine block (`display: grid; place-items: center;`) prompts the browser to align child boxes on crisp whole integer coordinates, keeping layout text sharp.
