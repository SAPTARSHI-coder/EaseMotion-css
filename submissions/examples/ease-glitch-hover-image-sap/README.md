# Glitch Hover Image

An image that shows an RGB-split "glitch" effect on hover, built from three
stacked layers of the same background image with hue-rotated `screen` blend
modes and clip-path jitter — no canvas or JS.

**Level:** Advanced

## Usage

Set the image via the `--img` custom property (a `url(...)` value) on
`.glitch-card`. The effect triggers automatically on `:hover`.

## Accessibility

- Purely decorative hover effect; the base image layer is always visible
  underneath, so content isn't lost, just visually distorted temporarily.
- `prefers-reduced-motion` disables all glitch animations and hides the
  red/blue split layers, leaving the plain base image.
- Effect is hover-only in this demo; a production version should also
  trigger on `:focus-visible` for keyboard parity, or be treated as
  decorative-only and left off interactive elements entirely.

## Notes

- Three `background-image` layers using the same `--img` source: a base
  layer plus red-shifted and blue-shifted (`hue-rotate` + `screen` blend)
  copies, each animated with `clip-path: inset()` and `transform: translate`
  on a stepped timing function for a jittery, non-smooth glitch feel.
- Demo uses a placeholder image service (`picsum.photos`); swap `--img` for
  any real asset.