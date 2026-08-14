# ease-scroll-horizontal-timeline-sap

A horizontally scrollable company/product history timeline where each milestone fades and scales into full focus as it centers in the scroll view.

## Usage
1. Include `style.css`.
2. Add markup: `.h-item` entries (year + title) inside `.h-timeline-sap`.
3. Attach the `IntersectionObserver` from `demo.html`, scoped to the timeline itself as the `root` (not the whole viewport).

## Notes
- The observer's `root` is set to the timeline container itself rather than the default viewport, so items are evaluated against the horizontal scroll container's own bounds, not the page's vertical scroll.
- Unlike a one-shot reveal, items toggle `in-view` on both enter *and* exit (`entry.isIntersecting` either way), so the focus effect follows whichever items are currently centered as the user scrubs back and forth.
- `scroll-snap-type: x proximity` gives a soft snap to each item without forcing a hard stop.
- Respects `prefers-reduced-motion`: scale transform is removed, leaving only opacity as the focus indicator.