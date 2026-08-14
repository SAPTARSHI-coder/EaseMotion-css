# Smooth Scroll Behavior — SCSS helper mixin

Smooth scroll behavior mixin enabling smooth scrolling with a reduced-motion fallback to auto.

## What it does
Smooth scroll behavior mixin enabling smooth scrolling with a reduced-motion fallback to auto.

## Files
- `_smooth-scroll-behavior.scss` — the mixin partial

## Usage
```scss
@use "./smooth-scroll-behavior" as *;

html { @include smooth-scroll; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81338
