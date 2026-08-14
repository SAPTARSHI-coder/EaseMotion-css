# Target Highlighted Element — SCSS helper mixin

Target highlighted element mixin styling the :target fragment with a transient highlight and a reduced-motion guard.

## What it does
Target highlighted element mixin styling the :target fragment with a transient highlight and a reduced-motion guard.

## Files
- `_target-highlighted-element.scss` — the mixin partial

## Usage
```scss
@use "./target-highlighted-element" as *;

:target { @include target-highlight(#fde68a, 2s); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81303
