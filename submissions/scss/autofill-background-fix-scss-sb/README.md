# Autofill Background Fix — SCSS helper mixin

Autofill background fix mixin neutralizing the browser yellow autofill background with a transparent fill workaround.

## What it does
Autofill background fix mixin neutralizing the browser yellow autofill background with a transparent fill workaround.

## Files
- `_autofill-background-fix.scss` — the mixin partial

## Usage
```scss
@use "./autofill-background-fix" as *;

input { @include autofill-bg-fix(#1e293b, #f1f5f9); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81321
