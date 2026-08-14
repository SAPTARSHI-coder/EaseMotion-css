# Truncate Single Line — SCSS helper mixin

Truncate single line mixin for one-line ellipsis truncation with a width contract.

## What it does
Truncate single line mixin for one-line ellipsis truncation with a width contract.

## Files
- `_truncate-single-line.scss` — the mixin partial

## Usage
```scss
@use "./truncate-single-line" as *;

.title { @include truncate-single-line; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81323
