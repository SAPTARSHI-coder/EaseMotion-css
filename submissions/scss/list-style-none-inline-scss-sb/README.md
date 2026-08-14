# List Style None Inline — SCSS helper mixin

List style none inline mixin removing default list styling and laying items out inline with a gap.

## What it does
List style none inline mixin removing default list styling and laying items out inline with a gap.

## Files
- `_list-style-none-inline.scss` — the mixin partial

## Usage
```scss
@use "./list-style-none-inline" as *;

ul { @include list-style-none-inline(1rem); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81346
