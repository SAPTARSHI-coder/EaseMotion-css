# Loading Spinner Collection

Eight CSS-only loading spinners: rotating ring, bouncing dots, pulsing circle, rotating fan, wave bars, hourglass, flipping squares, and orbit ring.

## Features

- Pure CSS animations — no JavaScript or images
- Eight distinct spinner styles for different loading contexts
- Dark theme base with accent color customization via `--spinner-color`
- Accessible with `role="status"` and screen-reader text
- `prefers-reduced-motion` removes animation and shows static text

## Usage

Open `demo.html` in any modern browser. Each spinner is a `<div class="spinner" data-type="...">` with a nested `<span class="sr-only">`. Reference individual CSS keyframe blocks to extract specific spinners.

## Customization

Change the accent color by setting `--spinner-color` on the spinner container. Adjust animation speed by modifying the `animation-duration` values in each keyframe. The `@keyframes` blocks are self-contained and can be extracted individually.
