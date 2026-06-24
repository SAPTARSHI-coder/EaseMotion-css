# Gradient Text Rainbow Animation

Animated rainbow gradient text using `background-clip: text` with a sweeping linear gradient. Three speed variants are shown: normal (4s), slow (8s), and fast (2s). The gradient cycles through red, amber, green, blue, violet, and pink.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser to see the animated rainbow text on a dark background.

## Accessibility notes

Animation stops when `prefers-reduced-motion: reduce` is active. The text remains fully readable as the gradient sweep only affects the visual appearance.
