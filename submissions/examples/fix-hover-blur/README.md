# Hover Elevation Blur Fix

## Problem
When applying `transform: scale()` on hover to cards with text or icons, Chromium browsers often trigger sub-pixel anti-aliasing artifacts, causing text to appear blurry or jagged during the animation.

## Solution
This implementation forces the browser to treat the element as a standalone composite layer:
- **`will-change: transform`**: Hints the browser to optimize for this specific transformation.
- **`backface-visibility: hidden`**: Forces a hardware-accelerated layer.
- **Font Smoothing**: Ensures the browser engine renders typography with consistent weight during transitions.

## Usage
Simply apply the `blur-target-card` class to any container that uses hover-based scaling.