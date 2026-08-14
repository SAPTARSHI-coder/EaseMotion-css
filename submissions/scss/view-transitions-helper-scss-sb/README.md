# View Transitions Helper — SCSS helper mixin

View Transitions helper mixin naming a transition with view-transition-name and reduced-motion guard.

## What it does
View Transitions helper mixin naming a transition with view-transition-name and reduced-motion guard.

## Files
- `_view-transitions-helper.scss` — the mixin partial

## Usage
```scss
@use "./view-transitions-helper" as *;

.card { @include view-transition(card-x); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81270
