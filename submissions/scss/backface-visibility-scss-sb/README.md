# Backface Visibility — SCSS helper mixin

Backface visibility mixin controlling whether the back of a 3D-transformed element is visible, with prefix fallbacks.

## What it does
Backface visibility mixin controlling whether the back of a 3D-transformed element is visible, with prefix fallbacks.

## Files
- `_backface-visibility.scss` — the mixin partial

## Usage
```scss
@use "./backface-visibility" as *;

.flip-card { @include backface-visibility(hidden); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81311
