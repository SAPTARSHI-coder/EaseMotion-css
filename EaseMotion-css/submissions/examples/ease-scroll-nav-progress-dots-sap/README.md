# ease-scroll-nav-progress-dots-sap

A fixed side-dot navigation that highlights the currently visible section and smooth-scrolls to a section on click.

## Usage
1. Include `style.css`.
2. Add markup: `.nav-dot` elements with `data-target` IDs matching page sections.
3. Attach `IntersectionObserver` + click handlers from `demo.html`.

## Notes
- Active dot state is driven by `IntersectionObserver` (60% visibility threshold), not scroll-position math.
- Respects `prefers-reduced-motion`: dot scale-up on active is removed; smooth-scroll behavior on click is a browser-native scroll, unaffected by this component's own CSS gating.