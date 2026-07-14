# Sandbox Layout Fix: Vertical Flex Column Percentage Height Image Flattening Resolution

## Overview
A structural box model sizing fix for vertical flex containers to completely stop main-axis element collapsing, prevent graphic canvas flattening, and stabilize percentage height calculations across Chromium viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user workspace layout hosting text paragraphs and percentage-scaled images to verify main-axis proportions.
* `style.css` — Scoped layout sheet establishing absolute minimum compression limits linked back to shared tokens.

## 🐛 The Bug Resolved
Previously, nesting an image element or graphic cell carrying a relative height assignment (`height: 50%;`) inside an active column flex wrapper tracking track (`flex-direction: column;`) triggered critical visual flattening flaws on Google Chrome and Edge. Because flex items default to a baseline contraction state (`flex-shrink: 1;`), the Blink layout calculator automatically compresses elements along the primary axis if parent values are computed dynamically. This evaluation loop squashes the target media block down to a single distorted horizontal pixel line.

## 🛠️ The Solution
The box model compression priority metrics are optimized. By injecting `flex-shrink: 0;` straight onto the intermediate flex item wrapper housing the image, you isolate it from the browser's automatic contraction loop. Setting a definitive minimum threshold barrier (`min-height: 0;`) overrides standard calculation parameters, prompting Chrome to compute vertical percentage metrics perfectly without causing graphic distortion loops.
