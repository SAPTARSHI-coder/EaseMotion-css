# Forced Colors High

Demonstrates the `forced-colors: active` media query for detecting Windows High Contrast Mode (WHCM). Shows accessible design patterns that respect user color preferences, including `forced-color-adjust: none` usage for critical visual elements.

## Usage

Open `demo.html` in a browser on Windows with High Contrast Mode enabled (or use DevTools to emulate `forced-colors: active`). The button and link demonstrate preserved custom styling via `forced-color-adjust: none` with proper focus indicators.

## Notes

- `forced-colors: active` matches when a forced colors mode is active (e.g., Windows High Contrast Mode).
- Use `forced-color-adjust: none` only on elements where custom colors convey essential meaning.
- Always ensure 3:1 contrast ratio between text and background, especially in forced colors mode.
