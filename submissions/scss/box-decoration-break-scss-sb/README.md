# Box Decoration Break — SCSS helper mixin

Box decoration break mixin controlling how backgrounds/borders render across line/fragment breaks with a clone fallback.

## What it does
Box decoration break mixin controlling how backgrounds/borders render across line/fragment breaks with a clone fallback.

## Files
- `_box-decoration-break.scss` — the mixin partial

## Usage
```scss
@use "./box-decoration-break" as *;

.link-bg { @include box-decoration-break(clone); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81295
