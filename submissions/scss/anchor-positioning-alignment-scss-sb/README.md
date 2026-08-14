# Anchor Positioning Alignment — SCSS helper mixin

Anchor positioning alignment mixin positioning an element relative to a CSS anchor with a fallback to absolute.

## What it does
Anchor positioning alignment mixin positioning an element relative to a CSS anchor with a fallback to absolute.

## Files
- `_anchor-positioning-alignment.scss` — the mixin partial

## Usage
```scss
@use "./anchor-positioning-alignment" as *;

.tooltip { @include anchor-positioning(--btn, anchor(bottom), anchor(center)); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81353
