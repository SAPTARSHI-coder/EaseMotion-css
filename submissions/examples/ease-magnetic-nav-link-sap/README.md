# ease-magnetic-nav-link-sap

Navigation links that subtly pull toward the cursor as it approaches, with the inner text moving slightly less than the outer wrapper for a layered magnetic feel.

## Usage
1. Include `style.css`.
2. Add markup: each link wraps its text in an inner `<span>`.
```html
   <a href="#" class="mag-link"><span>Home</span></a>
```
3. Attach the mousemove/mouseleave listeners from `demo.html`.

## Customization
- `strength` (JS): overall pull intensity.
- The `* 0.4` multiplier on the inner span: how much less the text moves relative to the link wrapper — lower for more separation, closer to 1 for both moving together.
- Number of nav links — works with any count since listeners attach per-element.

## Notes
- Two-layer movement (wrapper + inner span at different multipliers) gives subtle depth compared to a single-element magnetic pull, without needing 3D transforms.
- Effect is scoped to each link's own bounding box, so multiple links in a row each pull independently based on their own hover area.
- Respects `prefers-reduced-motion`: pull transitions are removed; JS still sets `transform` on mousemove, so links track the cursor without any smoothing easing under this setting — a stricter build could additionally skip attaching the listeners.