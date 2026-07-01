# Sandbox Layout Fix: Horizontal Flex-Row Element Image Sizing Expansion Blowout Resolution

## Overview
A structural box model width constraint fix for horizontal flex rows to completely stop image dimension blowouts, prevent track width stretching, and stabilize explicit flex-basis allocations across WebKit (Safari) viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user workspace layout hosting text metrics columns and unconstrained high-res graphic media targets to check grid width metrics.
* `style.css` — Scoped layout sheet establishing absolute minimum horizontal thresholds linked back to global tokens.

## 🐛 The Bug Resolved
Previously, dropping raw, high-resolution graphic images inside a specific grid track element assigned with an explicit horizontal spacing baseline (`flex-basis: 200px;`) inside a flex row container (`flex-direction: row;`) triggered severe structural layout corruption bugs on Safari. Because flex items carry an implicit parameter configuration of `min-width: auto;`, the WebKit layout calculator overrides the assigned basis width to accommodate the native dimensions of the image asset. This calculation breakdown forces cells to expand past parent constraints, stretching tracks horizontally and shattering layout alignments.

## 🛠️ The Solution
The box model compression algorithms are optimized. By injecting `min-width: 0;` directly onto the immediate flex-item parent grid cell box model, you overwrite the standard browser automatic content minimum scanning loop. Pairing this configuration with a strict constraint override (`max-width: 100%;`) straight onto the child image element forces Safari to render proportional downscaling natively across allbreakpoints without using calculation scripts.
