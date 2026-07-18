# Compass Rose

A pure CSS and HTML brass compass: an eight point rose on a drifting card with a red needle settling toward north.

## What it shows

- Star points built from clip-path diamonds, each half light and half dark, placed by a custom property rotation
- Degree ticks from a repeating conic gradient confined to a ring with mask-image
- Conic gradient brass housing and a glass sheen overlay
- A needle keyframe that overshoots and settles instead of gliding
- No images, no JavaScript, no external dependencies

## Usage

Open `demo.html` in any modern browser.

## Accessibility

All motion stops under `prefers-reduced-motion: reduce`.
