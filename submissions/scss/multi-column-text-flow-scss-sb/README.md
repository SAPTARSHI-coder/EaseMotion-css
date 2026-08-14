# Multi Column Text Flow — SCSS helper mixin

Multi-column text flow mixin with configurable count/width, gap, rule, and balanced columns fallback.

## What it does
Multi-column text flow mixin with configurable count/width, gap, rule, and balanced columns fallback.

## Files
- `_multi-column-text-flow.scss` — the mixin partial

## Usage
```scss
@use "./multi-column-text-flow" as *;

.article { @include multi-column-flow(3, 2rem); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81280
