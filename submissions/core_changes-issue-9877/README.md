# Core Changes — Issue #9877: Add Text Wrap Utility Classes (text-wrap)

## Overview

Add utility classes for the `text-wrap` CSS property to `core/utilities.css`.

## Problem

The current typography utilities cover font-size, text alignment, font-weight, text-transform, and truncation but lack utilities for the modern `text-wrap` CSS property:

1. **`text-wrap: balance`** — balances each line for optimal visual appearance (headlines)
2. **`text-wrap: pretty`** — avoids orphaned words on the last line (readability)
3. **`text-wrap: nowrap`** — prevents text wrapping (for nav items, tags, buttons)
4. **`text-wrap: wrap`** — default wrapping behavior (reset)

## Proposed Changes

### `core/utilities.css` — Typography section

```
.ease-text-balance → text-wrap: balance
.ease-text-pretty  → text-wrap: pretty
.ease-text-nowrap  → text-wrap: nowrap
.ease-text-wrap    → text-wrap: wrap
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
