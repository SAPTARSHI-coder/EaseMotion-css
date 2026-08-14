# Link underline (background-gradient) Sass mixins

Sass mixins that draw link underlines as a background gradient instead of `text-decoration`, avoiding descender clipping and enabling a smooth hover animation via `background-size` that `text-decoration-thickness` cannot provide.

## What it does
- `link-underline($color, $thickness, $gap, $hover)` — underline that grows in width on hover/focus.
- `link-underline-always($color, $thickness, $gap)` — persistent underline for non-interactive links.

## Files
- `_link-underline.scss` — the mixin partial

## Usage
```scss
@use "./link-underline" as *;

a {
  @include link-underline(currentColor, 2px, 0.15em, grow);
}
```

## Why background-gradient
`text-decoration` underlines can clip descenders and `text-decoration-thickness` cannot animate width. A `linear-gradient` background with an animated `background-size` gives a clean, smooth grow effect that never clips glyphs.

## Accessibility
- `:focus-visible` keeps the underline visible for keyboard focus.

Closes #75556
