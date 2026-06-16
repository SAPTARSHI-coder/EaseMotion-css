# Core Changes — Issue #9883: Add CSS Containment Utility Classes

## Overview

Add utility classes for `content-visibility` and `contain` to `core/utilities.css`. These CSS containment properties allow developers to optimize rendering performance by telling the browser which subtrees are independent.

## Problem

1. **`content-visibility`** — no utilities for skipping off-screen rendering (major performance win)
2. **`contain`** — no utilities for granular containment isolation

## Proposed Changes

### `core/utilities.css` — new CSS Containment section

**Content Visibility** (3 classes):
```
.ease-content-visibility-auto    → content-visibility: auto
.ease-content-visibility-hidden  → content-visibility: hidden
.ease-content-visibility-visible → content-visibility: visible
```

**Contain** (8 classes):
```
.ease-contain-none          → contain: none
.ease-contain-strict        → contain: strict
.ease-contain-content       → contain: content (layout + paint + style)
.ease-contain-layout        → contain: layout
.ease-contain-paint         → contain: paint
.ease-contain-size          → contain: size
.ease-contain-style         → contain: style
.ease-contain-layout-paint  → contain: layout paint
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:intermediate
- GSSoC-26
