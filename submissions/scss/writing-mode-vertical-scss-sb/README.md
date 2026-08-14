# Writing Mode Vertical — SCSS helper mixin

Writing mode vertical mixin setting vertical-rl/lr text flow with a logical rotate fallback.

## What it does
Writing mode vertical mixin setting vertical-rl/lr text flow with a logical rotate fallback.

## Files
- `_writing-mode-vertical.scss` — the mixin partial

## Usage
```scss
@use "./writing-mode-vertical" as *;

.sideways { @include writing-mode-vertical(vertical-rl); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81299
