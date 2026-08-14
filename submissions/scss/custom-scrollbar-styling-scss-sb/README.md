# Custom Scrollbar Styling — SCSS helper mixin

Custom scrollbar styling mixin with configurable track/thumb colors, width, radius, and reduced-motion/forced-colors guards.

## What it does
Custom scrollbar styling mixin with configurable track/thumb colors, width, radius, and reduced-motion/forced-colors guards.

## Files
- `_custom-scrollbar-styling.scss` — the mixin partial

## Usage
```scss
@use "./custom-scrollbar-styling" as *;

.scroll { @include custom-scrollbar(10px, #6366f1, #334155); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81271
