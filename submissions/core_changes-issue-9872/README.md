# Core Changes — Issue #9872: Add Outline Utility Classes

## Overview

Add utility classes for `outline` longhand properties to `core/utilities.css`. The outline property is distinct from border — it does not take up space and is critical for focus indicators and accessibility.

## Problem

The current Border & Radius section has border utilities but no outline classes:

1. **`outline-style`** — no utilities for focus ring styles (solid, dashed, dotted, double, none)
2. **`outline-width`** — no size utilities (0, 1px, 2px, 4px)
3. **`outline-offset`** — no offset utilities for spacing outline from element
4. **`outline-color`** — no color utilities using theme tokens

## Proposed Changes

### `core/utilities.css` — new Outline section after border section

**Outline Style** (5 classes):
```
.ease-outline-none   → outline: none
.ease-outline-solid  → outline-style: solid
.ease-outline-dashed → outline-style: dashed
.ease-outline-dotted → outline-style: dotted
.ease-outline-double → outline-style: double
```

**Outline Width** (4 classes):
```
.ease-outline-0 → outline-width: 0
.ease-outline-1 → outline-width: 1px
.ease-outline-2 → outline-width: 2px
.ease-outline-4 → outline-width: 4px
```

**Outline Offset** (4 classes):
```
.ease-outline-offset-0 → outline-offset: 0
.ease-outline-offset-1 → outline-offset: 1px
.ease-outline-offset-2 → outline-offset: 2px
.ease-outline-offset-4 → outline-offset: 4px
```

**Outline Color** (5 classes):
```
.ease-outline-primary   → outline-color: var(--ease-color-primary)
.ease-outline-success   → outline-color: var(--ease-color-success)
.ease-outline-danger    → outline-color: var(--ease-color-danger)
.ease-outline-current   → outline-color: currentColor
.ease-outline-transparent → outline-color: transparent
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
