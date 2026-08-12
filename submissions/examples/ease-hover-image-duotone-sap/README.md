# Hover Image Duotone

Images that display as a stylized duotone (via CSS `filter`) by default and
fade into their full natural color on hover, a common editorial/portfolio
gallery effect.

**Level:** Beginner

## Usage

Wrap an `<img>` in `.duotone-card`. The duotone look is achieved purely with
a stacked `filter` (grayscale → sepia → hue-rotate → saturate → contrast) on
the image, which resets to `filter: none` on hover.

## Accessibility

- Every image has real descriptive `alt` text — the duotone effect is purely
  a visual style layer and doesn't stand in for meaningful alt content.
- Effect triggers on `:focus-within` as well as `:hover`, so keyboard users
  tabbing to a focusable element inside the card also see the full-color state.
- `prefers-reduced-motion` removes the filter transition; the color change
  still happens on hover/focus, just as an instant swap instead of a fade.

## Notes

- The duotone look is a single chained `filter` property, no SVG filter or
  extra overlay element required, so it's cheap to apply broadly across a
  gallery.
- Demo uses a placeholder image service (`picsum.photos`); swap `src` for
  real assets — the filter approach works with any photographic image.