# Table Layout Fixed — SCSS helper mixin

Table layout fixed mixin for predictable column widths with a content-based fallback.

## What it does
Table layout fixed mixin for predictable column widths with a content-based fallback.

## Files
- `_table-layout-fixed.scss` — the mixin partial

## Usage
```scss
@use "./table-layout-fixed" as *;

table { @include table-layout-fixed(fixed); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81315
