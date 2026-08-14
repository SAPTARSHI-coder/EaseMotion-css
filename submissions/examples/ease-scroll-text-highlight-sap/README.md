# ease-scroll-text-highlight-sap

Text where each word gets a marker-style highlight sweeping in progressively as the paragraph scrolls into view.

## Usage
1. Include `style.css`.
2. Add markup: wrap each word in a `.hl-word` span.
3. Attach the `IntersectionObserver` from `demo.html`, staggering each word's highlight via index-based `transitionDelay`.

## Notes
- Highlight uses an animated `background-size` on a solid-color `background-image` (not `background-color`), which is what allows the sweep to animate left-to-right rather than a flat instant fill.
- Per-word stagger delay is computed from the word's index in the observed array, so any paragraph length works without manual per-word CSS delays.
- Respects `prefers-reduced-motion`: the background-size sweep transition is disabled, words highlight instantly as they enter view.