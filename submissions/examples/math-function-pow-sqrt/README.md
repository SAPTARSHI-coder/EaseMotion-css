# 07 — CSS Math Functions: pow, sqrt, hypot

## Overview
Explores CSS mathematical functions `pow()`, `sqrt()`, and `hypot()` for sizing, spacing, and positioning elements entirely in the stylesheet. Demonstrates exponential scales, radial layouts, and a direct comparison of hard-coded vs math-driven dimensions.

## How It Works
Custom properties (`--n`, `--i`, `--x`, `--y`) feed values into `calc(pow(2, var(--n)) * 1rem)` for exponential sizing, `sqrt(var(--i))` for circle radii, and `hypot(var(--x), var(--y))` for radial distances from center. All computation happens in CSS — no JavaScript calculations required.

## Usage
Open `demo.html` in a browser with support for CSS `pow()`, `sqrt()`, and `hypot()` (Safari 15.4+, Chrome 111+, Firefox 108+). Hover over elements to see interactive scaling. The manual vs math-based comparison shows how formulas enable responsive, consistent sizing.
