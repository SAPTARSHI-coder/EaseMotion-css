# Hover Focus Combo — SCSS helper mixin

Hover & focus combo mixin grouping :hover and :focus-within selectors for parity between mouse and keyboard interaction.

## What it does
Hover & focus combo mixin grouping :hover and :focus-within selectors for parity between mouse and keyboard interaction.

## Files
- `_hover-focus-combo.scss` — the mixin partial

## Usage
```scss
@use "./hover-focus-combo" as *;

.card { @include hover-focus-combo { transform: translateY(-4px); } }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81328
