# 19 — gap-responsive-spacing

## Overview
Showcases the `gap` property with responsive values using `clamp()`. Both a flexbox and a grid layout use the same `gap: clamp(0.5rem, 2vw, 2rem)` to achieve fluid spacing that scales with the viewport while respecting minimum and maximum bounds.

## Files
- `demo.html` — page with flex and grid layouts using responsive gap
- `style.css` — dark-themed styles with `clamp()`-based gap spacing

## Usage
Open `demo.html` and resize the viewport. The gap between items scales smoothly between 0.5rem and 2rem based on viewport width. The grid also switches from 3 to 2 columns at narrow widths.
