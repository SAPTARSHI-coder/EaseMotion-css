# Active Press Scale — SCSS helper mixin

Active press scale mixin adding a tactile scale-down on :active with a reduced-motion guard.

## What it does
Active press scale mixin adding a tactile scale-down on :active with a reduced-motion guard.

## Files
- `_active-press-scale.scss` — the mixin partial

## Usage
```scss
@use "./active-press-scale" as *;

button { @include active-press-scale(0.96, 0.1s); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81318
