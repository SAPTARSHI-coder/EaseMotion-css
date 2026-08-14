# Object Fit Position — SCSS helper mixin

Object-fit & position mixin for media elements with a background-size fallback for unsupported browsers.

## What it does
Object-fit & position mixin for media elements with a background-size fallback for unsupported browsers.

## Files
- `_object-fit-position.scss` — the mixin partial

## Usage
```scss
@use "./object-fit-position" as *;

img { @include object-fit-position(cover, center); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81302
