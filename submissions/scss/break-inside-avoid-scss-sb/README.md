# Break Inside Avoid — SCSS helper mixin

Break inside avoid mixin preventing column/page breaks within an element with a fallback for older browsers.

## What it does
Break inside avoid mixin preventing column/page breaks within an element with a fallback for older browsers.

## Files
- `_break-inside-avoid.scss` — the mixin partial

## Usage
```scss
@use "./break-inside-avoid" as *;

.card { @include break-inside-avoid; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81309
