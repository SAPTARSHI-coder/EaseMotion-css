# Flex Center Items — SCSS helper mixin

Flex center items mixin centering content on both axes via flexbox with a grid fallback.

## What it does
Flex center items mixin centering content on both axes via flexbox with a grid fallback.

## Files
- `_flex-center-items.scss` — the mixin partial

## Usage
```scss
@use "./flex-center-items" as *;

.hero { @include flex-center; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81332
