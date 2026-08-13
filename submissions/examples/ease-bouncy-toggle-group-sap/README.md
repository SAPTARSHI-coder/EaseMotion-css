# ease-bouncy-toggle-group-sap

A group of toggle switches where the knob slides with an elastic bounce and widens slightly during the active press, giving satisfying tactile feedback.

## Usage
1. Include `style.css`.
2. Add markup: `.toggle-sap` (add `.on` class for initial checked state) with a `.toggle-knob` inside.
3. Attach the click toggle from `demo.html`.

## Customization
- `cubic-bezier(0.34, 1.56, 0.64, 1)` on `.toggle-knob`: bounce intensity — the >1 value in the curve is what produces the overshoot.
- Track/knob colors for on/off states.
- `:active` knob width stretch: press-feedback intensity.

## Notes
- The knob's `:active` width stretch (24px → 28px) simulates a squishy press interaction, similar to iOS toggle behavior, distinct from the slide/bounce transition itself.
- A 360° knob rotation is layered onto the slide for extra visual interest, purely decorative and independent of any real state change.
- Respects `prefers-reduced-motion`: slide/rotate bounce is replaced with a plain background-color transition only; toggle state still switches correctly on click.