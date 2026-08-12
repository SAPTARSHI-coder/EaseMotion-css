# ease-fold-unfold-panel-sap

An accordion-style panel that folds/unfolds smoothly using CSS Grid's `grid-template-rows` trick — no fixed max-height hack, works with dynamic content of any length.

## Usage
1. Include `style.css`.
2. Add markup: `.fold-header` + `.fold-body-wrap > .fold-body-inner > .fold-body`.
3. Attach the click toggle from `demo.html`.

## Customization
- Arrow rotation degree/duration.
- Header background/padding.
- Body content — any length works correctly without needing to hardcode a max-height.

## Notes
- Uses the `grid-template-rows: 0fr → 1fr` technique rather than `max-height`, which avoids the two classic max-height accordion problems: needing to guess a large-enough pixel value, and having a fixed value cause an animation-speed mismatch for content of varying length.
- `.fold-body-inner` still needs `overflow: hidden` since Grid row sizing alone doesn't clip content during the transition.
- Respects `prefers-reduced-motion`: both the arrow rotation and the grid-row fold transition are removed, so open/close happens instantly.