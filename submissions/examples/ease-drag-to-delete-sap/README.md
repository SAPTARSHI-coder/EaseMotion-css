# ease-drag-to-delete-sap

A list where dragging an item horizontally past a threshold marks it for deletion (red tint) and releasing removes it with a slide-out animation.

## Usage
1. Include `style.css`.
2. Add markup: `.drag-delete-sap` containing multiple `.drag-item` rows.
3. Attach the drag handling from `demo.html` to each item.

## Customization
- `threshold` (JS): drag distance required to trigger deletion.
- `.delete-zone` styling: visual warning state while dragging past threshold.
- `.removed` slide-out distance/direction.

## Notes
- Works bidirectionally (drag left or right past threshold both delete), using `Math.abs(currentX)`.
- `touch-action: pan-y` allows vertical page scroll to still work while horizontal drag is captured for the delete gesture.
- Item removal is deferred via `setTimeout` matching the CSS transition duration, so the DOM node is removed only after the slide-out animation completes.
- Respects `prefers-reduced-motion`: slide-out transform is removed, items fade out via opacity only instead of sliding away.