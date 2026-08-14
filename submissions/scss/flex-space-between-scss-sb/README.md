# Flex Space Between — SCSS helper mixin

Flex space between mixin distributing items with space-between alignment and configurable wrap.

## What it does
Flex space between mixin distributing items with space-between alignment and configurable wrap.

## Files
- `_flex-space-between.scss` — the mixin partial

## Usage
```scss
@use "./flex-space-between" as *;

.row { @include flex-space-between(wrap); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81333
