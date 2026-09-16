# Grid Auto Fit Fill — SCSS helper mixin

Grid auto-fit/auto-fill helper mixins with configurable min track width, gap, and CSS variable integration.

## What it does
Grid auto-fit/auto-fill helper mixins with configurable min track width, gap, and CSS variable integration.

## Files
- `_grid-auto-fit-fill.scss` — the mixin partial

## Usage
```scss
@use "./grid-auto-fit-fill" as *;

.cards { @include grid-auto(auto-fit, 240px); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81268
