# ease-drag-slider-3d-sap

A 3D rotating carousel you can grab and drag directly — rotation follows the cursor/finger 1:1 while dragging, then snaps to the nearest face on release.

## Usage
1. Include `style.css`.
2. Add markup: 3 `.drag-3d-slide` faces inside `.drag-3d-track`, each pre-rotated 120° apart.
3. Attach the drag logic from `demo.html`.

## Customization
- `* 0.5` drag sensitivity multiplier.
- Number of faces/rotation angle (currently 3 faces at 120° apart — recalculate as `360 / count` for different face counts).
- Snap-to-nearest-face rounding logic.

## Notes
- During active drag, `transition` is set to `none` so rotation tracks the cursor/finger without any lag; on release, the transition is restored and rotation snaps to the nearest face angle via rounding to the nearest 120° multiple.
- `lastRotation` persists the settled angle between drags, so successive drags accumulate correctly instead of resetting to 0 each time.
- Respects `prefers-reduced-motion`: the snap transition is forced off via `!important`, so release causes an instant snap rather than an eased one; live drag tracking is unaffected as direct input.