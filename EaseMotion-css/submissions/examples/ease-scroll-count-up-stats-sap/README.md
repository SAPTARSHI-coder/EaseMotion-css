# ease-scroll-count-up-stats-sap

Statistics that count up from 0 to their target value once scrolled into view.

## Usage
1. Include `style.css`.
2. Add markup: `.stat-num` elements with `data-target`.
3. Attach the `IntersectionObserver` from `demo.html`.

## Notes
- Same ease-out-cubic `requestAnimationFrame` count-up technique as other scroll-triggered counters in this library, applied to a compact stats-row layout.
- `animated` flag ensures the count-up plays only once per page load.