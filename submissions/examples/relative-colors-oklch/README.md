# 12 — relative-colors-oklch

## Overview
Explores the CSS relative color syntax using `oklch(from ...)`. Starts with a base teal color (`oklch(55% 0.2 180)`) and derives six variants by independently manipulating Lightness, Chroma, and Hue channels — darker, lighter, more/less saturated, hue-shifted, and complementary.

## Files
- `demo.html` — page showing base swatch and six derived variant swatches
- `style.css` — dark-themed styles using `oklch(from var(--base-oklch) ...)` relative syntax

## Usage
Open `demo.html` in a browser with `oklch()` relative color support. Each variant card shows the CSS channel adjustment used to produce it.
