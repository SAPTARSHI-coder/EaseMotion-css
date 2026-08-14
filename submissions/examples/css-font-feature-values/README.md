# CSS `@font-feature-values` &amp; `font-variant-*`

A production-quality demo showcasing CSS typography features that unlock OpenType capabilities directly in the browser — without JavaScript or preprocessors.

## Overview

Modern fonts ship with hundreds of glyphs and layout features. CSS `font-variant-*` sub-properties and `@font-feature-values` give you declarative access to them.

| Property | Controls |
|----------|----------|
| `font-variant-numeric` | Tabular/proportional figures, old-style/lining, fractions, ordinals, slashed zero |
| `font-variant-ligatures` | Common ligatures (fi, fl), discretionary ligatures (ct, st, Th) |
| `font-variant-caps` | True small caps, petite caps, titling caps, unicase |
| `font-variant-alternates` | Stylistic sets via `@font-feature-values` named aliases |
| `@font-feature-values` | Define human-readable names for OpenType feature tags |

## Demo Sections

### `font-variant-numeric`
- **Tabular vs proportional**: Column-aligned digits vs natural-width digits
- **Old-style vs lining**: Blending into body text vs sitting on baseline
- **Diagonal fractions**: `1/2`, `3/4` rendered as true fraction glyphs
- **Ordinals**: `1st`, `2nd`, `3rd` with raised letters
- **Slashed zero**: Distinguish `0` from `O` for code and serial numbers

### `font-variant-ligatures`
- **Common ligatures**: `fi`, `fl`, `ffi` merging for smoother reading
- **Discretionary ligatures**: `ct`, `st`, `sp`, `Th` decorative connections

### `font-variant-caps`
- **True small caps**: Real glyphs from the font — correct weight and proportion
- **Faux small caps comparison**: How browser-scaled caps look wrong

### `@font-feature-values`
- Three named stylistic sets (`elegant`, `modern`, `playful`) mapped to `ss01`–`ss03`
- Human-readable names replace opaque four-character tags
- `@supports` progressive enhancement — falls back to `font-feature-settings` on older browsers

### Combined Features
- **Financial data table**: Tabular figures + lining numbers + small caps caption
- **Editorial article**: Old-style numerals + diagonal fractions + ordinals + small caps — all in body text

## Accessibility

- Skip navigation link
- Semantic HTML with `<table>`, `<article>`, `<section>` landmarks
- `aria-label` on visual-only elements
- `prefers-reduced-motion` support
- `prefers-color-scheme` (full light mode)
- `prefers-contrast: high`
- `forced-colors: active`
- `:focus-visible` on all interactive elements
- Print stylesheet
- `@supports` fallbacks for `font-variant-alternates: styleset()`

## Technology

- **Zero JavaScript** — purely CSS-driven typography
- **Zero dependencies** — no frameworks, libraries, or icon fonts
- **Google Fonts**: Inter (UI) + Source Serif 4 (editorial/rich OpenType features)
- Uses `font-feature-settings` as fallback when `font-variant-alternates` is unsupported

## Font Requirements

This demo uses **Source Serif 4** (loaded from Google Fonts) and **Inter**. Both are freely available and support the demonstrated OpenType features. Source Serif 4 has stylistic sets `ss01`–`ss03` which are mapped via `@font-feature-values`.

## Browser Support

| Browser | `font-variant-*` | `@font-feature-values` |
|---------|-----------------|----------------------|
| Chrome  | All versions    | 117+ |
| Edge    | All versions    | 117+ |
| Safari  | All versions    | 17.2+ |
| Firefox | All versions    | 120+ |
| Samsung | All versions    | 24+ |

## Files

- `demo.html` — semantic HTML5
- `style.css` — full stylesheet with inline comments
- `README.md` — this file
