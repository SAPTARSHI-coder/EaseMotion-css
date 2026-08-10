# ease-animated-checklist-progress-sap

A checklist where checking items animates individual checkmarks and drives a shared progress bar that fills proportionally.

## Usage
1. Include `style.css`.
2. Add markup: `.progress-track`/`.progress-fill` + multiple `.check-item` rows, each with a `.check-circle` (SVG checkmark) and `.check-label`.
3. Attach the click toggle + progress calculation from `demo.html`.

## Customization
- Progress bar gradient/height.
- Checkmark draw `stroke-dasharray` if using a different SVG path.
- Number of checklist items — progress percentage auto-calculates from total item count.

## Notes
- Progress bar width is recalculated on every toggle as `(checked count / total count) * 100%`, so it stays accurate regardless of which specific items are checked/unchecked.
- Checkmark reveal uses the same `stroke-dasharray`/`dashoffset` draw technique as other checkmark components in this library, paired with a slight `scale(1.1)` bounce on the circle itself.
- Respects `prefers-reduced-motion`: progress bar width transition, checkmark draw, and circle scale bounce are all disabled; checked state and progress percentage still update correctly and instantly.