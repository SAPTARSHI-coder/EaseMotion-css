# CSS Floating Elevation Text

## Overview

Issue #73404 demonstrates a subtle floating text effect using transform and layered shadow depth.

## Features

- Small vertical elevation
- Dynamic shadow depth
- Responsive display sizes
- Stable surrounding layout
- Reduced-motion support
- Pure HTML and vanilla CSS

## Implementation

The component uses `translateY()` to lift the text by a few pixels while the shadow becomes softer and deeper. This keeps the animation visually clear without introducing layout shifts.

## Accessibility

The heading remains semantic and selectable. Decorative movement is removed with `prefers-reduced-motion: reduce`.

## Usage

Open `demo.html` and reuse `.float-text` for short headings. Keep the elevation distance small to preserve the restrained character of the effect.

## Files

- `demo.html` — semantic examples
- `style.css` — elevation, shadows, responsive rules, and motion handling
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73404.
