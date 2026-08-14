# Css Nesting Helpers — SCSS helper mixin

CSS nesting helpers providing a fallback for browsers without native nesting via the parent-selector `&` patterns.

## What it does
CSS nesting helpers providing a fallback for browsers without native nesting via the parent-selector `&` patterns.

## Files
- `_css-nesting-helpers.scss` — the mixin partial

## Usage
```scss
@use "./css-nesting-helpers" as *;

.btn { @include css-nesting { &:hover { color: red; } } }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81273
