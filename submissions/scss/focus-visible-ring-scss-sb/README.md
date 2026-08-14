# Focus Visible Ring — SCSS helper mixin

Focus visible ring mixin emitting an accessible keyboard-only focus ring with configurable offset and forced-colors support.

## What it does
Focus visible ring mixin emitting an accessible keyboard-only focus ring with configurable offset and forced-colors support.

## Files
- `_focus-visible-ring.scss` — the mixin partial

## Usage
```scss
@use "./focus-visible-ring" as *;

a { @include focus-visible-ring(3px, #6366f1, 2px); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81317
