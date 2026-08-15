# Print Color Adjust

Demonstrates the `print-color-adjust` CSS property for controlling how the browser handles color rendering during print. Shows an ink-saving palette vs. an exact-color palette, with `economy` and `exact` keywords applied to different elements.

## Usage

Open `demo.html` and press <kbd>Ctrl+P</kbd> to open the print preview. Compare how the two palette cards render — the "Screen Palette" uses `print-color-adjust: economy` while the "Print Palette" uses `print-color-adjust: exact`. The info panel is hidden during print via `@media print`.

## Notes

- `economy` allows the browser to reduce color fidelity to save ink (dithering, swapping, or converting).
- `exact` instructs the browser to preserve the specified colors as closely as the output device allows.
- Use `@media print` to provide dedicated print stylesheets alongside `print-color-adjust`.
