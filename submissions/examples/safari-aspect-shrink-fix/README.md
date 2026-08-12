# Sandbox Layout Fix: Safari Aspect-Ratio Flex-Shrink Sizing Distortion Resolution

## Overview
A structural rendering fix for flexible card containers to completely stop single-axis image shearing, prevent logo warping, and stabilize proportional aspect constraints across WebKit (Safari) viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive user cockpit hosting resizable flex cards to evaluate image scaling boundaries.
* `style.css` — Scoped modifier asset layer declaring strict layout constraint rules linked back to shared global tokens.

## 🐛 The Bug Resolved
Previously, nesting a graphic element or vector icon node with an explicit aspect property (`aspect-ratio: 1 / 1;`) inside a shrinking flex row column (`flex-shrink: 1`) triggered severe presentation failures in earlier Safari architectures. As screen boundaries contract, the WebKit engine compresses the horizontal footprint of the cell without calculating its vertical dimensions simultaneously. This overrides the proportion settings, warping square headshots or circular brand assets into skewed ovals.

## 🛠️ The Solution
The box model compression algorithms are optimized. By injecting a locked `min-width: 0;` onto the parent flex cell, you enable the outer box to shrink naturally past internal thresholds. The nested graphic layer is then shielded via a macro property lock pairing (`flex-shrink: 0; max-width: 100%;`). This configuration blocks the browser engine from squeezing the graphic asset directly, forcing it to scale down proportionally based on its available width.
