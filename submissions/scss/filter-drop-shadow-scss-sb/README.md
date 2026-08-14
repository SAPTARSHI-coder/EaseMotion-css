# Filter Drop Shadow — SCSS helper mixin

Filter drop shadow mixin emitting a hardware-accelerated drop-shadow with configurable color/blur and a box-shadow fallback.

## What it does
Filter drop shadow mixin emitting a hardware-accelerated drop-shadow with configurable color/blur and a box-shadow fallback.

## Files
- `_filter-drop-shadow.scss` — the mixin partial

## Usage
```scss
@use "./filter-drop-shadow" as *;

.icon { @include filter-drop-shadow(0, 4px, 8px, rgba(99,102,241,0.5)); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81300
