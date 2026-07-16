# 11 — color-mix-oklch

## Overview
Demonstrates the `color-mix()` CSS function using the `oklch` color space for perceptually uniform color blending. Compares mixing in `srgb` (non-perceptual) vs `oklch` (perceptual), showing how OKLCH avoids muddy midtones. Includes an interactive slider to adjust the mix percentage between a warm orange and cool blue.

## Files
- `demo.html` — page with two mix bars (srgb vs oklch) and a range slider
- `style.css` — dark-themed, self-contained styles with `color-mix()` usage

## Usage
Open `demo.html` in any modern browser that supports `color-mix()` and `oklch`. Drag the slider to see both color spaces interpolate differently at each percentage.
