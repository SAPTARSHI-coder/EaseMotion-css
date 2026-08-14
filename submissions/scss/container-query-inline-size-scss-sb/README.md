# Container Query Inline Size — SCSS helper mixin

Container query inline size mixin establishing a containment context and querying its inline size with a fallback.

## What it does
Container query inline size mixin establishing a containment context and querying its inline size with a fallback.

## Files
- `_container-query-inline-size.scss` — the mixin partial

## Usage
```scss
@use "./container-query-inline-size" as *;

.card { @include container-query(card-cq, inline-size); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81350
