# Fix: Progress track uses hardcoded color (#e2e8f0)

## Issue

The background track of the progress bar (`.ease-progress`) in `components/progress.css` has a hardcoded background color of `#e2e8f0`. When the theme is toggled to dark mode, the track background remains light gray, which creates harsh contrast and lacks harmony against dark backgrounds.

## Root Cause

The class `.ease-progress` is defined with a static `background: #e2e8f0;` hex color instead of using a theme-aware custom property or specifying overrides for dark mode.

## Fix

Update `.ease-progress` to use the theme-aware `var(--ease-color-neutral-200, #e2e8f0)` as its default background, and add dark mode overrides targeting `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]` to set the background to `var(--ease-color-neutral-800, #1e293b)`.

## Files Changed

- `components/progress.css` — Update `.ease-progress` to adapt in dark mode.

## Demo

Open `demo.html` in your browser to view the progress bar adapting to both light and dark themes using the updated CSS.
