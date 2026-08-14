# Isolation Stacking Context — SCSS helper mixin

Isolation & stacking context mixin creating a new stacking context via isolation with a position fallback.

## What it does
Isolation & stacking context mixin creating a new stacking context via isolation with a position fallback.

## Files
- `_isolation-stacking-context.scss` — the mixin partial

## Usage
```scss
@use "./isolation-stacking-context" as *;

.layer { @include isolation-stack; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81310
