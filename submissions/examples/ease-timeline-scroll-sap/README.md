# ease-timeline-scroll-sap

A vertical timeline where each entry fades/slides in and its marker dot fills solid as it scrolls into view.

## Usage
1. Include `style.css`.
2. Add markup: `.timeline-scroll-sap` containing multiple `.tl-item` blocks.
3. Attach the `IntersectionObserver` from `demo.html`, which adds `.in-view` per item as it enters the viewport.

## Customization
- `threshold: 0.3` in the observer: how much of an item must be visible before it triggers.
- Slide distance (`translateX(-24px)`) and transition duration.
- Marker dot size/colors.

## Notes
- Uses `IntersectionObserver` rather than scroll-position math, which is more performant and doesn't require manual scroll-listener throttling.
- Once triggered, items stay `.in-view` permanently (observer isn't unobserved, but the class only ever adds) — entries don't re-hide when scrolled past.
- Respects `prefers-reduced-motion`: slide transform is removed, leaving only a simple opacity fade; marker dot color-fill still updates without transition.