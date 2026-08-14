# Neumorphic Shadow Generator — SCSS helper mixin

Neumorphic shadow generator mixin emitting soft dual box-shadows on a given surface color, configurable distance and intensity.

## What it does
Neumorphic shadow generator mixin emitting soft dual box-shadows on a given surface color, configurable distance and intensity.

## Files
- `_neumorphic-shadow-generator.scss` — the mixin partial

## Usage
```scss
@use "./neumorphic-shadow-generator" as *;

.btn { @include neumorphic-shadow(#e0e5ec, 6px, 12px, raised); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81277
