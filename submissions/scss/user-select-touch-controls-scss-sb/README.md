# User Select Touch Controls — SCSS helper mixin

User select & touch controls mixin configuring user-select and touch-action together with accessibility in mind.

## What it does
User select & touch controls mixin configuring user-select and touch-action together with accessibility in mind.

## Files
- `_user-select-touch-controls.scss` — the mixin partial

## Usage
```scss
@use "./user-select-touch-controls" as *;

.no-select { @include user-select-touch(none, manipulation); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81290
