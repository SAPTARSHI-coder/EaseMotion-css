# Cyberpunk Neon Glow — SCSS helper mixin

Cyberpunk neon glow mixin emitting layered text and box shadows for a neon effect with configurable colors and intensity.

## What it does
Cyberpunk neon glow mixin emitting layered text and box shadows for a neon effect with configurable colors and intensity.

## Files
- `_cyberpunk-neon-glow.scss` — the mixin partial

## Usage
```scss
@use "./cyberpunk-neon-glow" as *;

.neon { @include neon-glow(#22d3ee, #ec4899, 16px); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81278
