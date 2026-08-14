# ease-drag-signature-strength-sap

A signature pad paired with a "strength" meter that fills based on how much the user has drawn — a playful gamified take on the standard signature pad.

## Usage
1. Include `style.css`.
2. Add markup: canvas wrap + strength meter (track/fill/label).
3. Attach the drawing + point-counting logic from `demo.html`.

## Customization
- `pointCount / 2` divisor: how quickly the meter fills relative to drawing complexity — tune to taste.
- Strength label thresholds/text.
- Canvas/meter colors.

## Notes
- "Strength" here is a simple proxy: number of drawn points accumulated during mousemove/touchmove — more strokes/complexity fills the meter faster. This is a playful visual metaphor, not a real security/uniqueness measure of the signature.
- Same canvas drawing technique as the standalone signature pad component, extended with a live progress readout.
- Respects `prefers-reduced-motion`: meter fill-width transition is disabled; canvas drawing itself is unaffected as direct input.