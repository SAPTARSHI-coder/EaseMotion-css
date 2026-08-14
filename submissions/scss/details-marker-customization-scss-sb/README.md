# Details Marker Customization — SCSS helper mixin

Details marker customization mixin hiding/replacing the default disclosure triangle with a custom indicator.

## What it does
Details marker customization mixin hiding/replacing the default disclosure triangle with a custom indicator.

## Files
- `_details-marker-customization.scss` — the mixin partial

## Usage
```scss
@use "./details-marker-customization" as *;

summary { @include details-marker("\25B8"); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81306
