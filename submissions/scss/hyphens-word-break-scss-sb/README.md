# Hyphens Word Break — SCSS helper mixin

Hyphens & word break mixin enabling safe word breaking with lang-aware hyphenation and overflow-wrap fallback.

## What it does
Hyphens & word break mixin enabling safe word breaking with lang-aware hyphenation and overflow-wrap fallback.

## Files
- `_hyphens-word-break.scss` — the mixin partial

## Usage
```scss
@use "./hyphens-word-break" as *;

.prose { @include hyphens-word-break(auto, break-word); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81294
