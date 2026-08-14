# Will Change Optimization — SCSS helper mixin

Will-change optimization mixin hinting properties that will animate, with an auto-reset to avoid memory overhead.

## What it does
Will-change optimization mixin hinting properties that will animate, with an auto-reset to avoid memory overhead.

## Files
- `_will-change-optimization.scss` — the mixin partial

## Usage
```scss
@use "./will-change-optimization" as *;

.anim { @include will-change-opt(transform, opacity); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81312
