# Content Visibility Optimizer — SCSS helper mixin

Content-visibility optimizer mixin deferring off-screen rendering via content-visibility:auto with an intrinsic size hint.

## What it does
Content-visibility optimizer mixin deferring off-screen rendering via content-visibility:auto with an intrinsic size hint.

## Files
- `_content-visibility-optimizer.scss` — the mixin partial

## Usage
```scss
@use "./content-visibility-optimizer" as *;

.lazy { @include content-visibility-opt(50vh); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81285
