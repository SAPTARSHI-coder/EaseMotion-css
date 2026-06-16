# Core Changes — Issue #9868: Add List Style Utility Classes

## Overview

Add utility classes for `list-style-type` and `list-style-position` to `core/utilities.css`. The current codebase has extensive typography utilities but no list styling classes, despite lists being fundamental HTML elements.

## Problem

1. **Unordered list markers** — no utilities for disc/circle/square or removing bullets
2. **Ordered list numbering** — no utilities for decimal/roman/alpha/greek styles
3. **Marker position** — no utilities for inside/outside marker placement

## Proposed Changes

### `core/utilities.css` — new List Style section after typography

**List Style Type — Unordered** (4 classes):
```
.ease-list-none   → list-style: none
.ease-list-disc   → list-style-type: disc
.ease-list-circle → list-style-type: circle
.ease-list-square → list-style-type: square
```

**List Style Type — Ordered** (7 classes):
```
.ease-list-decimal              → list-style-type: decimal
.ease-list-decimal-leading-zero → list-style-type: decimal-leading-zero
.ease-list-lower-roman          → list-style-type: lower-roman
.ease-list-upper-roman          → list-style-type: upper-roman
.ease-list-lower-alpha          → list-style-type: lower-alpha
.ease-list-upper-alpha          → list-style-type: upper-alpha
.ease-list-lower-greek          → list-style-type: lower-greek
```

**List Style Position** (2 classes):
```
.ease-list-inside  → list-style-position: inside
.ease-list-outside → list-style-position: outside
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
