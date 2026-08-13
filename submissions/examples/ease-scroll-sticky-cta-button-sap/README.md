# ease-scroll-sticky-cta-button-sap

A call-to-action button that slides up from off-screen once the user scrolls past a threshold, staying fixed at the bottom of the viewport.

## Usage
1. Include `style.css`.
2. Add markup: fixed-position button anywhere in the body.
3. Attach the scroll listener from `demo.html`.

## Customization
- `window.scrollY > 300` threshold for when the CTA appears.
- Button text/color/position.
- Bounce/ease curve on the slide-in transition.

## Notes
- Off-screen resting state uses a `transform` offset (`translate(-50%, 140%)`), not `display: none`, giving the slide-in transition an actual starting point to animate from.
- `{ passive: true }` on the scroll listener avoids blocking scroll performance.
- Respects `prefers-reduced-motion`: the slide transition is removed (in a stricter build this would need to toggle visibility/opacity instead of relying purely on transform to fully hide/show); button hover color transition is preserved as non-motion feedback.