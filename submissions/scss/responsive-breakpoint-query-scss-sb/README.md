# Responsive Breakpoint Query — SCSS helper mixin

Responsive breakpoint query mixin applying min/max-width rules at a named breakpoint with a content block.

## What it does
Responsive breakpoint query mixin applying min/max-width rules at a named breakpoint with a content block.

## Files
- `_responsive-breakpoint-query.scss` — the mixin partial

## Usage
```scss
@use "./responsive-breakpoint-query" as *;

.grid { @include responsive-bp(1024px) { grid-template-columns: 1fr 1fr 1fr; } }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81329
