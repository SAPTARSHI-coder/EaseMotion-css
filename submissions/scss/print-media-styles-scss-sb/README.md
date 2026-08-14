# Print Media Styles — SCSS helper mixin

Print media styles mixin applying print-friendly rules under @media print with a content block.

## What it does
Print media styles mixin applying print-friendly rules under @media print with a content block.

## Files
- `_print-media-styles.scss` — the mixin partial

## Usage
```scss
@use "./print-media-styles" as *;

body { @include print-media { background: #fff; color: #000; } }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81316
