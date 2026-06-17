# Core Changes — Issue #9859: Add Individual Flex Property Utility Classes

## Overview

Add utility classes for `flex-basis`, `flex-grow: 0`, `flex-shrink`, and `order` to `core/utilities.css`. The current flex section only has composite shorthands (`ease-flex-1`, `ease-flex-auto`, `ease-flex-none`) and `ease-grow` (grow: 1).

## Problem

1. **`flex-basis`** — no individual basis utilities (auto, 0, full, fractional)
2. **`flex-grow: 0` / `flex-shrink`** — no way to prevent growing or control shrinking
3. **`order`** — no utilities for re-ordering flex/grid items

## Proposed Changes

### `core/utilities.css` — additions after existing flex section

**Flex Basis** (6 classes):
```
.ease-basis-auto → flex-basis: auto
.ease-basis-0    → flex-basis: 0
.ease-basis-full → flex-basis: 100%
.ease-basis-1/2  → flex-basis: 50%
.ease-basis-1/3  → flex-basis: 33.333333%
.ease-basis-2/3  → flex-basis: 66.666667%
```

**Flex Grow / Shrink** (3 classes):
```
.ease-grow-0   → flex-grow: 0
.ease-shrink-0 → flex-shrink: 0
.ease-shrink   → flex-shrink: 1
```

**Order** (15 classes):
```
.ease-order-first → order: -9999
.ease-order-last  → order: 9999
.ease-order-none  → order: 0
.ease-order-1  through ease-order-12
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
