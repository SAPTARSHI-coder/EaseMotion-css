# Color Scheme Meta

Explores the `color-scheme` CSS property and its companion `<meta name="color-scheme">` tag. Side-by-side comparison of form controls rendered in dark and light color schemes, demonstrating how `color-scheme` affects browser-drawn UI elements, scrollbars, and input chrome.

## Usage

Open `demo.html` in a browser. The left card shows controls with `color-scheme: dark`; the right card with `color-scheme: light` on a light background. The meta tag in `<head>` informs the browser that the page supports both schemes.

## Notes

- `color-scheme` controls the OS-level widget styling used by the browser for form controls.
- The meta tag is respected by browsers before CSS loads, preventing a flash of unstyled controls in the wrong scheme.
- Scrollbar coloring, button styles, and input chrome all respond to the active `color-scheme` value.
