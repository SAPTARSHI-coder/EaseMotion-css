# Reduced Motion Query — SCSS helper mixin

Reduced motion query mixin applying rules when the user prefers reduced motion, or disabling motion.

## What it does
Reduced motion query mixin applying rules when the user prefers reduced motion, or disabling motion.

## Files
- `_reduced-motion-query.scss` — the mixin partial

## Usage
```scss
@use "./reduced-motion-query" as *;

.anim { @include reduced-motion { animation: none; } }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81327
