# Core Changes — Issue #9880: Add Font Variation Utility Classes (font-size-adjust, font-stretch)

## Overview

Add font variation utility classes for `font-size-adjust` and `font-stretch` to `core/utilities.css`.

## Problem

The current typography utilities cover font-size, weight, text alignment, and transform but miss two important font-level properties:

1. **`font-size-adjust`** — adjusts the aspect ratio so fallback fonts maintain the same visual size as the primary font, preventing layout shifts when a custom font fails to load
2. **`font-stretch`** — selects condensed or expanded faces from a font family (important for variable fonts and OpenType families)

## Proposed Changes

### `core/utilities.css` — Typography section

**Font Size Adjust** (5 classes):
```
.ease-font-size-adjust-none      → font-size-adjust: none
.ease-font-size-adjust-from-font → font-size-adjust: from-font
.ease-font-size-adjust-05        → font-size-adjust: 0.5
.ease-font-size-adjust-06        → font-size-adjust: 0.6
.ease-font-size-adjust-07        → font-size-adjust: 0.7
```

**Font Stretch** (15 classes):
```
.ease-font-stretch-normal          → font-stretch: normal
.ease-font-stretch-condensed       → font-stretch: condensed
.ease-font-stretch-expanded        → font-stretch: expanded
.ease-font-stretch-extra-condensed → font-stretch: extra-condensed
.ease-font-stretch-extra-expanded  → font-stretch: extra-expanded
.ease-font-stretch-semi-condensed  → font-stretch: semi-condensed
.ease-font-stretch-semi-expanded   → font-stretch: semi-expanded
.ease-font-stretch-ultra-condensed → font-stretch: ultra-condensed
.ease-font-stretch-ultra-expanded  → font-stretch: ultra-expanded
.ease-font-stretch-pct-50         → font-stretch: 50%
.ease-font-stretch-pct-75         → font-stretch: 75%
.ease-font-stretch-pct-100        → font-stretch: 100%
.ease-font-stretch-pct-125        → font-stretch: 125%
.ease-font-stretch-pct-150        → font-stretch: 150%
.ease-font-stretch-pct-200        → font-stretch: 200%
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:intermediate
- GSSoC-26
