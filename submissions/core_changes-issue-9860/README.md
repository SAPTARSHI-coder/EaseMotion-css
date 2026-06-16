# Core Changes — Issue #9860: Add Grid Auto Utility Classes

## Overview

Add utility classes for `grid-auto-flow`, `grid-auto-rows`, and `grid-auto-columns` to `core/utilities.css`. The current Grid section provides `grid-template-columns` utilities but no implicit grid controls.

## Problem

1. **`grid-auto-flow`** — no utilities for row/column/dense auto-placement
2. **`grid-auto-rows`** — no utilities for implicit row sizing
3. **`grid-auto-columns`** — no utilities for implicit column sizing

## Proposed Changes

### `core/utilities.css` — additions after existing grid-column section

**Grid Auto Flow** (5 classes):
```
.ease-grid-flow-row       → grid-auto-flow: row
.ease-grid-flow-col       → grid-auto-flow: column
.ease-grid-flow-dense     → grid-auto-flow: dense
.ease-grid-flow-row-dense → grid-auto-flow: row dense
.ease-grid-flow-col-dense → grid-auto-flow: column dense
```

**Grid Auto Rows** (4 classes):
```
.ease-auto-rows-min  → grid-auto-rows: min-content
.ease-auto-rows-max  → grid-auto-rows: max-content
.ease-auto-rows-fr   → grid-auto-rows: minmax(0, 1fr)
.ease-auto-rows-auto → grid-auto-rows: auto
```

**Grid Auto Columns** (3 classes):
```
.ease-auto-cols-min  → grid-auto-columns: min-content
.ease-auto-cols-max  → grid-auto-columns: max-content
.ease-auto-cols-fr   → grid-auto-columns: minmax(0, 1fr)
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:intermediate
- GSSoC-26
