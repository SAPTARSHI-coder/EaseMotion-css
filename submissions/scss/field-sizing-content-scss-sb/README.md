# Field Sizing Content — SCSS helper mixin

Field sizing content mixin auto-sizing form controls to their content via field-sizing with an auto-grow fallback.

## What it does
Field sizing content mixin auto-sizing form controls to their content via field-sizing with an auto-grow fallback.

## Files
- `_field-sizing-content.scss` — the mixin partial

## Usage
```scss
@use "./field-sizing-content" as *;

textarea { @include field-sizing-content(content); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81348
