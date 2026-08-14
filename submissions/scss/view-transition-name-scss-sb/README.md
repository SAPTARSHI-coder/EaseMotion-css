# View Transition Name — SCSS helper mixin

View transition name mixin assigning a unique transition name with a reduced-motion guard to disable transitions.

## What it does
View transition name mixin assigning a unique transition name with a reduced-motion guard to disable transitions.

## Files
- `_view-transition-name.scss` — the mixin partial

## Usage
```scss
@use "./view-transition-name" as *;

.hero { @include view-transition-name(hero-x); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81352
