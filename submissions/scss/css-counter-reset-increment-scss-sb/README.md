# Css Counter Reset Increment — SCSS helper mixin

CSS counter reset & increment mixin implementing numbered sections/list counters with a fallback to ol numbering.

## What it does
CSS counter reset & increment mixin implementing numbered sections/list counters with a fallback to ol numbering.

## Files
- `_css-counter-reset-increment.scss` — the mixin partial

## Usage
```scss
@use "./css-counter-reset-increment" as *;

.steps { @include css-counter(ease-step, 0); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81301
