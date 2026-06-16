# Core Changes — Issue #9865: Add Border Image Utility Classes

## Overview

Add utility classes for `border-image` gradient shorthand, `border-image-slice`, and `border-image-repeat` to `core/utilities.css`. The current Border & Radius section provides border, border-color, and border-radius but no border-image utilities for image/gradient borders.

## Problem

1. **`border-image` gradient shorthand** — no gradient border utilities using theme tokens
2. **`border-image-slice`** — no slice value utilities
3. **`border-image-repeat`** — no repeat mode utilities

## Proposed Changes

### `core/utilities.css` — new Border Image section after border section

**Border Image — Gradient Shorthand** (3 classes):
```
.ease-border-gradient-primary → border-image: linear-gradient(135deg, var(--ease-color-primary), var(--ease-color-secondary)) 1
.ease-border-gradient-success → border-image: linear-gradient(135deg, var(--ease-color-success), var(--ease-color-success-dark)) 1
.ease-border-gradient-danger  → border-image: linear-gradient(135deg, var(--ease-color-danger), var(--ease-color-danger-dark)) 1
```

**Border Image Slice** (6 classes):
```
.ease-border-slice-1  → border-image-slice: 1
.ease-border-slice-2  → border-image-slice: 2
.ease-border-slice-3  → border-image-slice: 3
.ease-border-slice-4  → border-image-slice: 4
.ease-border-slice-5  → border-image-slice: 5
.ease-border-slice-10 → border-image-slice: 10
```

**Border Image Repeat** (4 classes):
```
.ease-border-repeat-stretch → border-image-repeat: stretch
.ease-border-repeat-repeat  → border-image-repeat: repeat
.ease-border-repeat-round   → border-image-repeat: round
.ease-border-repeat-space   → border-image-repeat: space
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:intermediate
- GSSoC-26
