# Hue Rotate Animation

Demonstrates the `hue-rotate()` CSS filter function animated through the full 360° color spectrum. Three animation speeds showcase the effect on gradient backgrounds, with pause-on-hover behavior for accessibility.

## Usage

Open `demo.html` in a browser. Three colored boxes cycle through hues at different speeds (slow 6s, fast 2s, gradient 4s). Hover any box to pause the animation. A gradient bar below animates a horizontal spectrum sweep.

## Notes

- `hue-rotate(angle)` shifts hue of all pixels by the given angle on the HSL color wheel.
- Animating from `0deg` to `360deg` produces a full color cycle.
- `prefers-reduced-motion` disables the animation for users who request reduced motion.
- `animation-play-state: paused` on hover provides user control over the animation.
