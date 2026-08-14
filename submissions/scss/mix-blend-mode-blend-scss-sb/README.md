# Mix Blend Mode Blend — SCSS helper mixin

Mix blend mode blend mixin applying a blend mode with an isolation context and a no-blend fallback for accessibility.

## What it does
Mix blend mode blend mixin applying a blend mode with an isolation context and a no-blend fallback for accessibility.

## Files
- `_mix-blend-mode-blend.scss` — the mixin partial

## Usage
```scss
@use "./mix-blend-mode-blend" as *;

.glow { @include mix-blend-mode(screen, true); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81297
