# ease-scroll-reveal-stagger-cards-sap

A row of cards that fade/slide in with a staggered delay as they scroll into view.

## Usage
1. Include `style.css`.
2. Add markup: `.reveal-card` elements inside a flex row.
3. Attach the `IntersectionObserver` from `demo.html`, which sets a per-card `transitionDelay` based on its index.

## Notes
- Stagger delay is set via inline `transitionDelay` computed from each card's index in the observed array, so it works with any number of cards without hardcoded CSS delays.
- Respects `prefers-reduced-motion`: slide transform is removed, leaving only opacity fade.