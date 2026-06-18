# Page Loader Spinner

A full-screen overlay with an animated spinning ring and "Loading..." text that covers the page content. After a 2-second simulated delay, the overlay fades out and the content fades in.

## EaseMotion CSS classes used

- `ease-flex` — content centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. The spinner appears for 2 seconds, then fades out to reveal the page.

## Accessibility notes

The overlay uses `pointer-events: none` when hidden so it doesn't block interaction. Reduced motion disables the spinner animation and both transitions.
