# ease-animated-progress-steps-sap

A checkout-style progress step indicator where completing a step fills its circle and animates the connecting line to the next step.

## Usage
1. Include `style.css`.
2. Add markup: `.ps-step` circles separated by `.ps-line` connectors.
3. Advance via JS toggling `.done` on steps and `.filled` on the corresponding connector line.

## Notes
- Line fill uses `scaleX()` from a left origin, animating the connector alongside (not before/after) its adjacent circle completing.
- `steps.findIndex(s => !s.classList.contains('done'))` finds the next incomplete step generically, so the "Next" logic scales to any number of steps.
- Respects `prefers-reduced-motion`: circle and line-fill transitions are disabled; step completion still updates instantly and correctly.