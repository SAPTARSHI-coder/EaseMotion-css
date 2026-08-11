# ease-password-strength-sap

A password input with a live 4-segment strength meter that fills and color-shifts (red → orange → yellow → green) as the password improves.

## Usage
1. Include `style.css`.
2. Add markup: password `<input>` + 4 `.meter-bar` segments + a label element.
3. Attach the `input` listener from `demo.html`, which scores the password and toggles `data-level` on the wrapper.

## Customization
- `scorePassword()` (JS): scoring criteria — length, case mix, digits, symbols. Adjust thresholds as needed.
- `data-level` colors: edit the 4 color rules keyed by `[data-level="1"]` through `[data-level="4"]`.
- `labels` array: strength text shown per level.

## Notes
- Strength color/fill state is driven entirely by a `data-level` attribute on the wrapper, so CSS handles all visual states — JS only computes the numeric score.
- Active bars scale up slightly (`scaleY(1.3)`) to visually emphasize progress beyond just the color change.
- Respects `prefers-reduced-motion`: bar scale animation is disabled, color change alone communicates strength level.