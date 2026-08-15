# Scroll Timeline Animation — SCSS helper mixin

Scroll-timeline animation mixin wiring animation-timeline to a named scroll timeline with reduced-motion and legacy fallbacks.

## What it does
Scroll-timeline animation mixin wiring animation-timeline to a named scroll timeline with reduced-motion and legacy fallbacks.

## Files
- `_scroll-timeline-animation.scss` — the mixin partial

## Usage
```scss
@use "./scroll-timeline-animation" as *;

.reveal { @include scroll-timeline-anim($prop: opacity, $from: 0, $to: 1); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81269
