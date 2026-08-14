# Rotate-Fade Progress Bar — Glassmorphism

Progress bars that enter with a rotate-and-fade animation on a glassmorphism backdrop. The fill starts at `scaleX(0) rotate(8deg) opacity: 0` and transitions to full width with no rotation and full opacity.

## How It Works

The progress fill uses `transform-origin: left center` so it grows from the left edge. The animation starts with the bar rotated 8 degrees and invisible, then rotates to level while fading in and scaling to full width. The `cubic-bezier(0.33, 1, 0.68, 1)` easing gives a smooth deceleration.

The glassmorphism effect is created with `backdrop-filter: blur(20px)` on semi-transparent cards over a dark background with subtle colored gradients.

## Customization

- Change `--rfp-accent` for the default fill color
- Modify `--rfp-w` via inline style to set fill percentage
- Adjust the initial `rotate()` angle for more or less tilt
- The glassmorphism blur can be tuned via `backdrop-filter`

## Notes

- Pure HTML + CSS, no JavaScript
- `prefers-reduced-motion` shows bars at full width without animation
- Three example cards: upload, storage, and build status
- Dark background with radial gradient accents
