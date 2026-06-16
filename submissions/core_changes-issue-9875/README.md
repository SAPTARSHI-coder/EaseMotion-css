# Core Changes — Issue #9875: Add Multi-Column Layout Utility Classes

## Overview

Add utility classes for CSS Multi-column Layout properties (`column-rule`, `column-span`, `column-fill`) to `core/utilities.css`.

## Problem

The current utilities have no multi-column layout classes beyond basic `column-count`. Missing properties needed for newspaper-style text layouts:

1. **`column-rule-style/width/color`** — vertical rule between columns
2. **`column-span`** — make elements span across all columns
3. **`column-fill`** — control how columns are filled with content

## Proposed Changes

### `core/utilities.css` — new Multi-column Layout section

**Column Rule Style** (4 classes):
```
.ease-column-rule-solid  → column-rule-style: solid
.ease-column-rule-dashed → column-rule-style: dashed
.ease-column-rule-dotted → column-rule-style: dotted
.ease-column-rule-none   → column-rule-style: none
```

**Column Rule Width** (4 classes):
```
.ease-column-rule-0 → column-rule-width: 0
.ease-column-rule-1 → column-rule-width: 1px
.ease-column-rule-2 → column-rule-width: 2px
.ease-column-rule-4 → column-rule-width: 4px
```

**Column Rule Color** (3 classes):
```
.ease-column-rule-primary → column-rule-color: var(--ease-color-primary)
.ease-column-rule-current → column-rule-color: currentColor
.ease-column-rule-muted   → column-rule-color: var(--ease-color-muted)
```

**Column Span** (2 classes):
```
.ease-column-span-all  → column-span: all
.ease-column-span-none → column-span: none
```

**Column Fill** (2 classes):
```
.ease-column-fill-auto    → column-fill: auto
.ease-column-fill-balance → column-fill: balance
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
