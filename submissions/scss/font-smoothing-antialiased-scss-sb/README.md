# Font Smoothing Antialiased — SCSS helper mixin

Font smoothing antialiased mixin applying -webkit/osx font smoothing for crisper text rendering.

## What it does
Font smoothing antialiased mixin applying -webkit/osx font smoothing for crisper text rendering.

## Files
- `_font-smoothing-antialiased.scss` — the mixin partial

## Usage
```scss
@use "./font-smoothing-antialiased" as *;

body { @include font-smoothing; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81342
