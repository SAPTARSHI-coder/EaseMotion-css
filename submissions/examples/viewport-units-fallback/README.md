# 10 — Viewport Units: dvh, svh, lvh, dvw

## Overview
Compares the four modern viewport units — `vh`, `dvh`, `svh`, and `lvh` — for building full-height sections that correctly handle mobile browsers with dynamic toolbars. Each hero section uses a different unit, with real-time height readouts and a side-by-side bar comparison.

## How It Works
Four full-height sections use `min-height: 100vh`, `100dvh`, `100svh`, and `100lvh` respectively. JavaScript reads computed heights for display purposes (the actual unit behavior is pure CSS). The fallback chain pattern `height: 100vh; height: 100dvh;` ensures older browsers gracefully degrade while modern ones use the better unit.

## Usage
Open `demo.html` on a mobile device or in Chrome DevTools with a mobile device emulation. Toggle the address bar (scroll up/down) to see how `dvh` adjusts while `vh` stays fixed. The bar comparison shows relative heights. Use DevTools to inspect the computed `min-height` of each section.
