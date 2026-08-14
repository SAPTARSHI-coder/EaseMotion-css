# Shape Outside Text Wrap — SCSS helper mixin

Shape outside text wrap mixin wrapping text around a circle/polygon shape with a float fallback.

## What it does
Shape outside text wrap mixin wrapping text around a circle/polygon shape with a float fallback.

## Files
- `_shape-outside-text-wrap.scss` — the mixin partial

## Usage
```scss
@use "./shape-outside-text-wrap" as *;

.pull-quote { @include shape-outside-text-wrap(circle(50%), left); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81298
