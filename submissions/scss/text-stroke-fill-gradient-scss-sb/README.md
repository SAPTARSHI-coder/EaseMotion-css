# Text Stroke Fill Gradient — SCSS helper mixin

Text stroke and fill gradient mixin clipping a gradient to text with a configurable stroke, with a solid color fallback.

## What it does
Text stroke and fill gradient mixin clipping a gradient to text with a configurable stroke, with a solid color fallback.

## Files
- `_text-stroke-fill-gradient.scss` — the mixin partial

## Usage
```scss
@use "./text-stroke-fill-gradient" as *;

.chrome { @include text-stroke-fill(#6366f1, #ec4899, #6366f1); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81279
