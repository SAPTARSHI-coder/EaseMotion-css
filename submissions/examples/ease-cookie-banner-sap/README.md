# ease-cookie-banner-sap

A cookie-consent banner that slides up from off-screen after a short delay, with accept/decline actions that dismiss it back down.

## Usage
1. Include `style.css`.
2. Add markup: banner container with message + accept/decline buttons.
3. Attach the delayed-show and dismiss handlers from `demo.html`.

## Customization
- `setTimeout(..., 600)`: delay before the banner appears.
- Banner width/position (`bottom`, `left: 50%`) for corner vs centered placement.
- Button colors/labels for accept vs decline styling.

## Notes
- Off-screen resting position uses `transform: translate(-50%, 140%)` (below viewport) rather than `display: none`, so the slide-up transition has something to animate from.
- Both buttons call the same `dismiss()` function — in a real integration, `acceptBtn` and `declineBtn` would additionally set a cookie/localStorage flag before dismissing.
- Respects `prefers-reduced-motion`: banner transform transition is removed (banner still needs a visibility mechanism, so in a stricter build this would toggle instantly via opacity or `display` instead); button hover lift is unaffected as it's a minor interaction cue, only bg-color transition remains.