# ease-drag-reveal-panel-sap

A gamified reveal panel — drag a colored cover sideways to uncover hidden content (like a discount code), with a threshold-based snap to either open or closed.

## Usage
1. Include `style.css`.
2. Add markup: `.reveal-content` (hidden message) behind a draggable `.reveal-cover`.
3. Attach the drag logic from `demo.html`.

## Customization
- Cover color/gradient.
- Snap threshold (`50%` of width) — adjust for how far a user must drag before it snaps fully open vs back closed.
- Hidden content/message.

## Notes
- Drag distance is clamped between `0` and the container's full width, preventing the cover from being dragged past either edge.
- On release, the cover snaps fully open or fully closed based on whether the drag passed the 50% threshold — never leaves the cover in a half-dragged state.
- Respects `prefers-reduced-motion`: the snap-back/snap-open transition is disabled, so release causes an instant jump to the final position instead of an eased slide; live drag tracking is unaffected as direct input.