# Screen Reader Only Utility — SCSS helper mixin

Screen reader only utility mixin visually hiding content while keeping it available to assistive tech, with a show-on-focus companion.

## What it does
Screen reader only utility mixin visually hiding content while keeping it available to assistive tech, with a show-on-focus companion.

## Files
- `_screen-reader-only-utility.scss` — the mixin partial

## Usage
```scss
@use "./screen-reader-only-utility" as *;

.sr-only { @include sr-only; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81324
