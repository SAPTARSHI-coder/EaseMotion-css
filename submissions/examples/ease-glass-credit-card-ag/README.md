# Glassmorphism Credit Card

A realistic-looking credit card with a frosted glassmorphism effect, complete with 3D tilt interactions on hover.

## Preview

Open `demo.html` in your browser and hover over the card to see the 3D tilt and frosted glass effect against the colorful background circles.

## Implementation Details

- **No JavaScript:** The 3D interactions are powered completely by CSS `:hover` states.
- **Glassmorphism:** Achieved using `background: rgba(255, 255, 255, 0.1)` combined with `backdrop-filter: blur(15px)`. The background circles are intentionally blurred to emphasize the frosted glass look.
- **3D Pop-out:** The card container uses `perspective`, and the card itself has `transform-style: preserve-3d`. On hover, the card rotates, while its inner elements (chip, number, logo) use `translateZ` to pop out from the surface, creating a realistic depth effect.
