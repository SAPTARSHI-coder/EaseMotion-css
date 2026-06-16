# Core Changes — Issue #9870: Add Table Utility Classes

## Overview

Add utility classes for `table-layout`, `border-collapse`, `border-spacing`, and `caption-side` to `core/utilities.css`. EaseMotion CSS currently provides no table-specific utility classes despite tables being a core HTML feature.

## Problem

1. **`table-layout`** — no utilities for controlling column width algorithm
2. **`border-collapse`** — no utilities for collapsing/separating table borders
3. **`border-spacing`** — no spacing utilities using theme tokens
4. **`caption-side`** — no utilities for `<caption>` positioning

## Proposed Changes

### `core/utilities.css` — new Table section

**Table Layout** (2 classes):
```
.ease-table-auto  → table-layout: auto
.ease-table-fixed → table-layout: fixed
```

**Border Collapse** (2 classes):
```
.ease-border-collapse  → border-collapse: collapse
.ease-border-separate  → border-collapse: separate
```

**Border Spacing** (4 classes):
```
.ease-border-spacing-0 → border-spacing: 0
.ease-border-spacing-1 → border-spacing: var(--ease-space-1)
.ease-border-spacing-2 → border-spacing: var(--ease-space-2)
.ease-border-spacing-4 → border-spacing: var(--ease-space-4)
```

**Caption Side** (2 classes):
```
.ease-caption-top    → caption-side: top
.ease-caption-bottom → caption-side: bottom
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
