# ease-scroll-triggered-counter-sap

Number counters that animate from 0 up to their target value once scrolled into view, using an eased count-up rather than a linear tick.

## Usage
1. Include `style.css`.
2. Add markup: `.counter-value` elements with `data-target="N"`, starting at text content `0`.
3. Attach the `IntersectionObserver` from `demo.html`, which triggers `animateCount()` on each counter once.

## Customization
- `duration` (JS): count-up speed.
- Easing function (`1 - Math.pow(1 - progress, 3)` = ease-out-cubic): swap for linear or a different curve.
- `threshold: 0.5` in the observer: how much of the counter group must be visible before triggering.

## Notes
- Uses `requestAnimationFrame` with a manually applied easing curve rather than CSS transitions, since animating the *displayed number* (not a CSS property) requires JS-driven interpolation.
- An `animated` flag ensures the count-up only plays once per page load, even if the user scrolls the element in and out of view repeatedly.
- Respects `prefers-reduced-motion`: counters jump directly to their target value instead of animating the count-up — this is handled by checking `matchMedia('(prefers-reduced-motion: reduce)')` and skipping the RAF loop in favor of directly setting `textContent`.