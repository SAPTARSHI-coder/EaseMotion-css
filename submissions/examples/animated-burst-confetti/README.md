# ease-confetti-burst

A button that bursts small colored confetti pieces outward on click, each flying a randomized distance/angle/rotation.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <button class="confetti-btn">Click Me 🎉</button>
```
3. Attach the click listener from `demo.html` to spawn and animate confetti pieces.

## Customization
- `count` (JS): number of confetti pieces per burst.
- `colors` array: palette used for pieces.
- `distance` range: how far pieces travel from the button center.
- Swap `border-radius: 50%` vs `2px` per-piece for circle/square confetti mix.

## Notes
- Each piece's trajectory (`--tx`, `--ty`, `--rot` CSS custom properties) is randomized in JS per click, then handed to a single shared CSS `@keyframes` animation — JS only computes numbers, CSS does all the rendering/animating.
- Pieces self-remove via the `animationend` event, so repeated clicks don't leave stale DOM nodes behind.
- Positioned absolutely relative to the button (`overflow: visible` on `.confetti-btn`) so the burst radiates from the button's own center.